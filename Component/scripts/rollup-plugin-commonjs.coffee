# https://github.com/dralletje/rollup-plugin-commonjs

fs = require 'fs'
path = require 'path'
resolve = require 'resolve'
acorn = require 'acorn'
estreeWalker = require 'estree-walker'
MagicString = require 'magic-string'
rollupPluginutils = require 'rollup-pluginutils'

acorn = acorn.default if 'default' of acorn
MagicString = MagicString.default if 'default' of MagicString

firstpass = /\b(?:require|module|exports|global)\b/
exportsPattern = /^(?:module\.)?exports(?:\.([a-zA-Z_$][a-zA-Z_$0-9]*))?$/
reserved = 'abstract arguments boolean break byte case catch char class
  const continue debugger default delete do double else enum eval export
  extends false final finally float for function goto if implements import
  in instanceof int interface let long native new null package private
  protected public return short static super switch synchronized this
  throw throws transient true try typeof var void volatile while with
  yield'.split(' ')

blacklistedExports = __esModule: true

for word in reserved
	blacklistedExports[word] = true


isReference = (node, parent) ->
	if parent.type is 'MemberExpression'
		parent.computed or node is parent.object
	# disregard the `bar` in { bar: foo }
	else if parent.type is 'Property' and node isnt parent.value
		false
	# disregard the `bar` in `class Foo { bar () {...} }`
	else if parent.type is 'MethodDefinition'
		false
	# disregard the `bar` in `export { foo as bar }`
	else if parent.type is 'ExportSpecifier' and node isnt parent.local
		false
	else
		true

flatten = (node) ->
	name = undefined
	parts = []
	while node.type is 'MemberExpression'
		return null if node.computed
		parts.unshift node.property.name
		node = node.object

	return null unless node.type is 'Identifier'

	name: node.name
	keypath: "#{node.name}.#{parts.join '.'}"

getName = (id) ->
	base = path.basename id
	ext = path.extname base
	rollupPluginutils.makeLegalIdentifier if ext.length then base.slice(0, -ext.length) else base

getCandidatesForExtension = (resolved, extension) ->
	[
		resolved + extension
		resolved + path.sep + 'index' + extension
	]

getCandidates = (resolved, extensions) ->
	extensions.reduce (paths, extension) ->
		paths.concat getCandidatesForExtension resolved, extension
	, [ resolved ]

module.exports =
commonjs = (options = {}) ->
	extensions = options.extensions or [ '.js' ]
	filter = rollupPluginutils.createFilter options.include, options.exclude
	bundleUsesGlobal = false
	bundleRequiresWrappers = false
	sourceMap = options.sourceMap isnt false
	customNamedExports = {}
	if options.namedExports
		for own id of options.namedExports
			resolvedId = undefined
			try
				resolvedId = resolve.sync(id, basedir: process.cwd())
			catch err
				resolvedId = path.resolve(id)
			customNamedExports[resolvedId] = options.namedExports[id]
			break

	resolveId: (importee, importer) ->
		return unless importee[0] is '.'

		# not our problem
		resolved = path.resolve path.dirname(importer), importee
		candidates = getCandidates resolved, extensions
		i = 0
		while i < candidates.length
			try
				stats = fs.statSync candidates[i]
				return candidates[i] if stats.isFile()
			i += 1
		return

	transform: (code, id) ->
		return null unless filter id
		return null if extensions.indexOf(path.extname(id)) is -1
		return null unless firstpass.test(code)

		ast = undefined
		try
			ast = acorn.parse code,
				ecmaVersion: 6
				sourceType: 'module'
		catch err
			err.message += ' in ' + id
			throw err

		magicString = new MagicString code
		required = {}
		uid = 0
		scope = rollupPluginutils.attachScopes ast, 'scope'
		uses =
			module: false
			exports: false
			global: false
		namedExports = {}

		if customNamedExports[id]
			for name in customNamedExports[id]
				namedExports[name] = true

		scopeDepth = 0

		estreeWalker.walk ast,
			enter: (node, parent) ->
				if node.scope
					scope = node.scope
				if /^Function/.test(node.type)
					scopeDepth += 1
				if sourceMap
					magicString.addSourcemapLocation node.start
					magicString.addSourcemapLocation node.end
				# Is this an assignment to exports or module.exports?

				if node.type is 'AssignmentExpression'
					return unless node.left.type is 'MemberExpression'
					flattened = flatten(node.left)
					return unless flattened
					return if scope.contains flattened.name
					match = exportsPattern.exec(flattened.keypath)
					return if not match or flattened.keypath is'exports'
					if flattened.keypath is 'module.exports' and node.right.type is 'ObjectExpression'
						return node.right.properties.forEach (prop) ->
							return if prop.computed or prop.key.type isnt 'Identifier'
							name = prop.key.name
							if name is rollupPluginutils.makeLegalIdentifier(name)
								namedExports[name] = true
							return
					if match[1]
						namedExports[match[1]] = true
					return
				if node.type is 'Identifier'
					if node.name of uses and not uses[node.name] and isReference(node, parent) and not scope.contains(node.name)
						uses[node.name] = true
					return
				if node.type is 'ThisExpression' and scopeDepth is 0
					uses.global = true
					magicString.overwrite node.start, node.end, '__commonjs_global', true
					return

				return unless node.type is 'CallExpression'
				return if node.callee.name isnt 'require' or scope.contains 'require'
				return unless node.arguments.length is 1 and node.arguments[0].type is 'Literal'

				# TODO handle these weird cases?
				source = node.arguments[0].value
				existing = required[source]
				name = undefined
				unless existing
					name = 'require$$' + uid++
					required[source] =
						source: source
						name: name
						exportsUsed: false
				else
					name = required[source].name
				unless parent.type is 'ExpressionStatement'
					# exportUsed is later used to generate the import statements, and
					# omit the `${name} from` if the export is not used at all
					required[source].exportsUsed = true
					magicString.overwrite node.start, node.end, "('default' in #{name} ? #{name}['default'] : #{name})"
				else
					# is a bare import, e.g. `require('foo');`
					magicString.remove parent.start, parent.end
				return

			leave: (node) ->
				if node.scope
					scope = scope.parent
				if /^Function/.test node.type
					scopeDepth -= 1
				return

		sources = Object.keys required
		unless sources.length or uses.module or uses.exports or uses.global
			if Object.keys(namedExports).length
				throw new Error "Custom named exports were specified for #{id} but it does not appear to be a CommonJS module"
			return null
			# not a CommonJS module
		bundleRequiresWrappers = true
		name = getName(id)
		importBlock = if sources.length then sources.map (source) ->
			`var name`
			{ name, exportsUsed } = required[source]
			'import ' + (if exportsUsed then "* as #{name} from " else '') + "'#{source}';"
		.join('\n') else ''

		args = 'module' + (if uses.exports or uses.global then ', exports' else '') + (if uses.global then ', global' else '')
		intro = '\n\nvar ' + name + ' = __commonjs(function (' + args + ') {\n'
		outro = "\n});\n\nexport default (#{name} && typeof #{name} === 'object' && 'default' in #{name} ? #{name}['default'] : #{name});\n"

		outro += Object.keys(namedExports).filter (key) -> not blacklistedExports[key]
		.map (x) -> "export var #{x} = #{name}.#{x};"
		.join '\n'

		magicString.trim().prepend(importBlock + intro).trim().append outro
		code = magicString.toString()
		map = if sourceMap then magicString.generateMap() else null
		if uses.global
			bundleUsesGlobal = true

		code: code
		map: map

	intro: ->
		intros = []
		if bundleUsesGlobal
			intros.push "var __commonjs_global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this;"
		if bundleRequiresWrappers
			intros.push 'function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports' +
				(if bundleUsesGlobal then ', __commonjs_global' else '') + '), module.exports; }\n'
		intros.join '\n'
