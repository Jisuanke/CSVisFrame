Base = require '../factories/Base'
{ Moveto, Lineto, url } = require '../util'
uniqueId = require 'lodash-es/uniqueId'
config = require '../config'

module.exports =
class Line extends Base
	componentName: 'line'
	tagName: 'path'

	# Constants
	@UNDIRECT = uniqueId 'line-type'
	@DIRECT = uniqueId 'line-type'
	@BIDIRECT = uniqueId 'line-type'

	defaultProps:
		x1: 0,
		y1: 0,
		x2: 0,
		y2: 0,
		type: 0,
		strokeDasharray: ''
		type: Line.UNDIRECT

	getStyles: (p) ->
		stroke: p.stroke
		strokeWidth: p.strokeWidth
		strokeDasharray: p.strokeDasharray
		markerStart:
			if @isFarEnough and p.type is Line.BIDIRECT
				url config.markers.backward
		markerEnd:
			if @isFarEnough and p.type isnt Line.UNDIRECT
				url config.markers.forward

	getAttributes: (props) ->
		d: Moveto(props.x1, props.y1) + Lineto(props.x2, props.y2)

	Object.defineProperties @prototype,
		isFarEnough: get: ->
			(Math.abs(@props.x1 - @props.x2) > 0.01) or
			(Math.abs(@props.y1 - @props.y2) > 0.01)
