clone = require 'lodash-es/clone'
assign = require 'lodash-es/assign'
omitBy = require 'lodash-es/omitBy'
kebabCase = require 'lodash-es/kebabCase'
isUndefined = require 'lodash-es/isUndefined'
{ createElement } = require '../DOM'
{ toElement } = require '../DOM'
{ addUnit } = require '../unit'
patch = require './patch'

###
#  A Base is a simple component that works like a finite-state machine.
#
#                     [ Component State ]
#                          ↓       ↑
#    [ Props ]  ⟶ [ Your Component Logic ] ⟶ [ Attributes, Styles ]
#
#
#  A Component *must* have the following properties:
#
#      componentName: string
#          An identifier (name) string for this component.
#      tagName: string
#          A tag name for Node.
#
#  A Component *should* implement at least one of the following functions:
#
#      getAttributes(props, state) -> { [key: attributeName]: attributeValue }
#      getStyles(props, state) -> { [key: styleName]: styleValue }
#      getContent(props, state) -> string
#
#  and it *may* implement the following properties:
#
#      defaultProps:  { [key: propName]: propValue }
#      hide(): Component
#          Applies prop changes when the component is called to `hide()`.
#          Must return `this`.
#
#      Lifecycle callbacks:
#          componentDidReceiveProps(props, state): void
#          componentDidMount(props, state): void
#          componentDidUpdate(props, state): void
#
###

module.exports =
class Base
	# Default properties
	isComponent: true

	getAttributes: -> {}
	getStyles: -> {}

	constructor: (props = {}, parentNode) ->
		if parentNode
			@parentNode = toElement parentNode
		@props = assign {}, @defaultProps, props
		@state = {}

	### @private ###
	_setAttribute_: (key, value) ->
		unless value is undefined
			@props[key] = value

	# jQuery-like attr().
	attr: (key, value) ->
		if arguments.length is 2
			@_setAttribute_ key, value
		else
			@_setAttribute_ name, value for own name, value of key

		@componentDidReceiveProps? @props, @state
		this

	setState: (state) ->
		assign @state, state
		this

	clone: ->
		base = Object.create Object.getPrototypeOf this
		base.props = clone @props
		base.state = clone @state
		base

	mount: ->
		props = clone @props
		@hide()
		{ attributes, styles } = this
		@props = props

		node = createElement @tagName, assign attributes, style: styles
		@parentNode.appendChild node

		@componentDidMount? @props, @state
		this

	draw: (duration) ->
		@mount() unless @node
		{ node, styles, attributes } = this

		patch @node, attributes, styles, duration

		if (content = @getContent? @props, @state)?
			node.textContent = content

		@componentDidUpdate? @props, @state
		this

	remove: ->
		@node.remove()
		this

	# Quick access methods for commonly modified props.
	status: (value = '') ->
		@props.status = value
		this

	hide: ->
		@props.hidden = true
		this

	Object.defineProperties @prototype,
		namespace: get: ->
			@props.namespace or @componentName

		node: get: ->
			selector = @tagName
			selector += "[data-va-ref='#{@props.id}']" if @props.id?
			selector += "[data-va-ns='#{@namespace}']" if @namespace?
			@parentNode?.querySelector selector

		attributes: get: ->
			defaults = assign Object.create(null),
				'data-va-ref'    : @props.id
				'data-va-status' : @props.status
				'data-va-ns'     : @namespace
				class:   @props.className
				opacity: if @props.hidden then 0 else 1
			assign defaults, @getAttributes @props, @states
			omitBy defaults, isUndefined

		styles: get: ->
			style = @getStyles @props, @state
			res = Object.create null
			for own key, val of style when val isnt undefined
				key = kebabCase key
				res[key] = if typeof val is 'number' then addUnit key, val else val
			res

		parentNode:
			enumerable: false
			writable: true
			value: null
