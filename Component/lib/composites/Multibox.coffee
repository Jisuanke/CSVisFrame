Rect = require '../base/Rect'
Edge = require './Edge'
Rectex = require './Rectex'
Composite = require '../factories/Composite'

sortBy = require 'lodash-es/sortBy'
{ translate, rgba } = require '../util'

getTextNumber = (text) ->
	parseInt text.props.content

module.exports =
class Multibox extends Composite
	componentName: 'multibox'
	counter: 0

	defaultProps:
		x: 0
		y: 0
		unit: 33
		spacing: 1

	created: ->
		@container = new Rect
		@texts = []
		if @props.numbers
			@insert @props.numbers

	insert: (number) ->
		if Array.isArray number
			@insert num for num in number
			return this

		@texts.push new Rectex
			id: @counter++
			content: String number

		@texts = sortBy @texts, getTextNumber
		this

	getAttributes: (p) ->
		transform: translate p.x, p.y

	remove: (number) ->
		index = @numbers.indexOf number
		unless index is -1
			@texts[index].hide()
		else if __DEV__
			throw ReferenceError 'Attempting to remove a number not within this multibox.'
		this

	propagate: (props) ->
		{ unit, spacing } = props
		@container.attr
			x: props.x + (@size - 1) / 2 * (unit + spacing)
			y: props.y
			fill: rgba 26, 165, 228, 0.78039
			width: @width
			height: @height

		x = props.x # - (@size - 1) / 2 * (unit + spacing)
		y = props.y
		height = width = unit
		for text, i in @texts when not text.props.hidden
			text.attr { x, y, height, width }
			x += unit + spacing
		return

	pathTo: (index, box) ->
		{ width, height } = this
		{ unit, y, spacing } = @props

		x1: 2 * box.props.x - box.width / 2 + spacing / 2
		y1: 2 * box.props.y - box.height / 2 + unit
		x2: @texts[index].props.x * 2 + unit
		y2: y * 2 + unit / 2 - unit

	nodes: ->
		[ @container, @texts... ]

	Object.defineProperties @prototype,
		size: get: ->
			@texts.length

		numbers: get: ->
			@texts.map getTextNumber

		width: get: ->
			@props.spacing + (@props.unit + @props.spacing) * @size

		height: get: ->
			@props.unit + @props.spacing * 2
