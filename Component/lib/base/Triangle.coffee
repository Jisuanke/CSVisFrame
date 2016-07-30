Base = require '../factories/Base'
{ Moveto, Lineto } = require '../util'

module.exports =
class Triangle extends Base
	componentName: 'triangle'
	tagName: 'path'
	defaultProps:
		x1: 0
		y1: 0
		x2: 0
		y2: 0
		x3: 0
		y3: 0
		fill: '#fff'
		stroke: '#333'
		strokeWidth: 1

	getAttributes: (p) ->
		Moveto(p.x1, p.y1) + Lineto(p.x2, p.y2) + Lineto(p.x3, p.y3)

	hide: ->
		@attr
			x2: @props.x1
			y2: @props.y1
			x3: @props.x1
			y3: @props.y1
