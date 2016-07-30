Circle = require '../base/Circle'
Text = require '../base/Text'
Composite = require '../factories/Composite'
{ translate } = require '../util'

module.exports =
class Vertex extends Composite
	componentName: 'vertex'

	created: ({ @subscript }) ->
		@circle = new Circle
		@text = new Text
		@subscript?.props.namespace = 'subscript'

	propagate: ->
		# 0.35em should make the text to appear vertically central,
		# however the correct(TM) way to do it is to use
		#    alignment-baseline: central;
		# which is supported only in Chrome, Desktop Safari but not
		# elsewhere.
		y = '0.35em'

		{ id, fill, content, fontSize } = @props
		r = if @props.hidden then 0 else @props.r
		@circle.attr { r, fill }
		@text.attr   { content, fontSize, y }

	getAttributes: (p) ->
		transform: translate p.x, p.y

	changeXY: (dx, dy) ->
		@attr
			x: @props.x + dx
			y: @props.y + dy
		this

	movetoXY: (x, y) ->
		@attr { x, y }
		this

	paint: (color) ->
		@circle.attr fill: color
		this

	nodes: ->
		[ @circle, @text, @subscript ]
