Base = require '../factories/Base'
{ rotate, unit } = require '../util'
{ colors } = require '../config'

module.exports =
class Rect extends Base
	componentName: 'rect'
	tagName: 'rect'

	defaultProps:
		x: 0
		y: 0
		fill: colors.default
		stroke: '#555'
		strokeWidth: 0
		height: 0
		width: 0
		angle: 0

	getStyles: (p) ->
		strokeWidth: p.strokeWidth or 0

	getAttributes: (p) ->
		fill: p.fill
		class: p.className
		stroke: p.stroke
		x: p.x - p.width / 2
		y: p.y - p.height / 2
		height: p.height
		width: p.width
		rx: p.rx
		ry: p.ry

	hide: ->
		@attr height: 0, width: 0
