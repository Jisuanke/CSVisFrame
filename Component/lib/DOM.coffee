compact = require 'lodash-es/compact'
assign = require 'lodash-es/assign'
pickBy = require 'lodash-es/pickBy'
kebabCase = require 'lodash-es/kebabCase'
isArrayLike = require 'lodash-es/isArrayLike'
isObject = require 'lodash-es/isObject'
isFunction = require 'lodash-es/isFunction'
isString = require 'lodash-es/isString'

SVGNamespace = 'http://www.w3.org/2000/svg'

# This list is expanded based on React;
# https://facebook.github.io/react/docs/tags-and-attributes.html
SVGElements = '
  animate circle defs ellipse g glyph image line marker mask path
  pattern polygon polyline rect stop svg text tspan filter
'.split /\s+/

toClassName = (value) ->
	if isString value
		value
	else if isArrayLike value
		compact(value).join ' '
	else if isObject value
		Object.keys(pickBy(value, Boolean)).join ' '
	else
		''

createElement = (tag, attr = {}, children...) ->
	if isString tag
		# Only SVG elements can have a capitalized letter in the tag
		if tag in SVGElements or /[A-Z]/.test tag
			attr.namespace = SVGNamespace
		if namespace = attr.namespace
			node = document.createElementNS namespace, tag
		else
			node = document.createElement tag
		delete attr.namespace

		for own key, value of attr
			if key.startsWith('on') and isFunction value
				key = key[2..].toLowerCase()
				node.addEventListener key, value
			else if key is 'style' and isObject value
				assign node.style, value
			else if key in ['className', 'class']
				node.setAttribute 'class', toClassName value
			else if key is 'data' and isObject value
				assign node.dataset, value
			else if key is 'innerHTML'
				node.innerHTML = value
			else if key is 'textContent'
				node.textContent = value
			else if isObject value
				node.setAttribute key, JSON.stringify value
			else
				key = kebabCase key unless namespace
				node.setAttribute key, value

		for child in children
			if isString child
				node.appendChild document.createTextNode child
			else if isObject child
				node.appendChild child

		node

	else if isFunction tag
		props = assign {}, attr, { children }
		tag props


# Takes a d3 selection, a jQuery object, a selector string, an HTML string
# a DOM element or a NodeList and returns the first element.
toElement = (src) ->
	return null unless src

	if typeof src is 'string'
		if src[0] is '<'
			div = document.createElement 'div'
			div.innerHTML = src
			div.firstChild
		else
			document.querySelector src
	else if typeof src.node is 'function'
		src.node()   # d3
	else if isArrayLike src
		src[0]	     # jQuery or NodeList
	else if isElement src
		src
	else if __DEV__
		throw TypeError 'Invalid element'

module.exports = { createElement, SVGElements, SVGAttributes, toElement }
