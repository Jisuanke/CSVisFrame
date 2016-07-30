Base = require '../factories/Base'
{ M, L, url } = require '../util'
uniqueId = require 'lodash-es/uniqueId'

module.exports =
class Curve extends Base
	componentName: 'curve'
	tagName: 'path'

	defaultProps:
		x1: 0
		y1: 0
		x2: 0
		y2: 0
		cx: 0
		cy: 0
		type: 0
		fill: '#fff'
		stroke: '#333'
		strokeWidth: 1
		strokeDasharray: ''
		opacity: 0

	@UNDIRECT = uniqueId 'curve-type'
	@DIRECT   = uniqueId 'curve-type'
	@BIDIRECT = uniqueId 'curve-type'

	isFarEnough: ~
		-> (Math.abs(@props.x1 - @props.x2)) > 0.01 or
			(Math.abs(@props.y1 - @props.y2)) > 0.01

	getStyles: (p) ->
		fill: p.fill
		stroke: p.stroke
		strokeWidth: p.strokeWidth
		strokeDasharray: p.strokeDasharray
		fillOpacity: p.opacity
		markerStart:
			if @isFarEnough and p.type is Curve.BIDIRECT
				url '#backwardArrow'
		markerEnd:
			if @isFarEnough and p.type isnt Curve.UNDIRECT
				url '#arrow'

	getAttributes: (p) ->
		d: Moveto(p.x1, p.y1) + Quadratic(p.cx, p.cy, p.x2, p.y2)

	Object.defineProperties @prototype,
		isFarEnough: get: ->
			(Math.abs(@props.x1 - @props.x2)) > 0.01 or
			(Math.abs(@props.y1 - @props.y2)) > 0.01
