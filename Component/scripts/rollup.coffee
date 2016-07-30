fs = require 'fs'
{ rollup } = require 'rollup'
{ minify } = require 'uglify-js'
{ version } = require '../package.json'
babel = require 'babel-core'

root = "#{__dirname}/.."

banner = """
	// viz-components v#{version}
	// All rights reserved.
"""

rollup require './rollup-config'
.then (bundle) ->
	return bundle.generate
		format: 'cjs'
		banner: banner + '\n(function(){'
		footer: '})();'
		moduleName: 'Components'
		intro: 'var __DEV__ = false;'
		useStrict: false # d3 requires non strict mode

.then (result) ->
	result = babel.transform result.code,
		presets: ['stage-0', 'react']
		plugins: [
			'transform-class-properties'
			['transform-es2015-classes', loose: true ]
			['transform-es2015-for-of', loose: true ]
			'transform-es2015-shorthand-properties'
			'transform-es2015-block-scoping'
			'transform-es2015-parameters'
		]

	fs.writeFileSync "#{root}/dist/index.js", result.code

	min = minify result.code,
		fromString: true
		mangle: true
		mangleProperties: regex: ///
			^(
				possibleConstructorReturn|classCallCheck|createClass
				|componentName|medium\w|light\w|dark\w|pale\w|slate\w
				|deep\w|cor[an]|green|yellow|laven|lemon|lime|orange|sea
				|spring|gold|dim|blue|aqua|blan|indi|brighter|dark|rgb
				|transition|exponent|amplitude|period|floral|papayawhip|peach
				|sandy|royal|mint|__transition|white|fire|componentDid
				|componentWill|inherits|rotate|translate|[Mm]ove|Lineto
				|message|superclass|space|local|propagate|getStyles|container
			)
		///
		compress:
			unused: true
			dead_code: true
			drop_console: true
			drop_debugger: true
			screw_ie8: true

	fs.writeFileSync "#{root}/dist/index.min.js", min.code


.catch (error) ->
	codeFrame = error.codeFrame
	delete error.codeFrame

	console.warn error
	console.log codeFrame if codeFrame
	console.log code if code
