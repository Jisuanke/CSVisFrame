assign = require 'lodash-es/assign'
uniqueId = require 'lodash-es/uniqueId'
Line = require '../base/Line'
Text = require '../base/Text'
Curve = require '../base/Curve'
Composite = require '../factories/Composite'

module.exports =
class Edge extends Composite
	@LINE = uniqueId 'edge-'
	@CURVE = uniqueId 'edge-'

	@UNDIRECT = Line.UNDIRECT
	@DIRECT = Line.DIRECT
	@BIDIRECT = Line.BIDIRECT

	componentName: 'edge'

	defaultProps:
		type: Edge.UNDIRECT

	created: ({ stroke, strokeWidth, content, textNamespace: namespace, type }) ->
		namespace or= 'weight'
		if type.startsWith 'line-type'
			@state.type = Edge.LINE
			@path = new Line { type, stroke, strokeWidth }
		else if type.startsWith 'curve-type'
			@state.type = Edge.CURVE
			@path = new Curve { type }

		if content
			@text = new Text { namespace, content }

		@setState value: 0, num: 0.3

	updatePosition: ({ cx1, cy1, r1 = 19, cx2, cy2, r2 = r1 }) ->
		dist = Math.sqrt (cx2 - cx1) ** 2 + (cy2 - cy1) ** 2
		@setState { cx1, cy1, cx2, cy2 }
		if @text or true
			if cy1 is cy2
				@setState
					cy: cy1 - 2 * @state.num * r1
					cx: (cx1 + cx2) / 2
			else if cx1 is cx2
				@setState
					cx: cx1 - 2 * @state.num * r1
					cy: (cy1 + cy2) / 2
			else
				# Calculate the slope and midpoint coordinates by startVertexId and endVertexId.
				k1 = (cy1 - cy2) / (cx1 - cx2)
				k = -1 / k1
				x0 = (cx1 + cx2) / 2
				y0 = (cy1 + cy2) / 2

				# 根据 slope k 与 coordinates (x0，y0) 求出中垂线上（下）方与 O
				# 距离为 2 * num * r 的 coordinates，为贝塞尔二次曲线的 control point
				t = (2 * r1 * @state.num) / Math.sqrt(1 + k ** 2)

				@setState
					cx: x0 + t
					cy: y0 + if k > 0 then t else -t

			@text?.attr x: @state.cx, y: @state.cy

		if @state.type is Edge.LINE
			@path.attr
				x1: cx1 + (cx2 - cx1) * r1 / dist
				y1: cy1 + (cy2 - cy1) * r1 / dist
				x2: cx2 + (cx1 - cx2) * r2 / dist
				y2: cy2 + (cy1 - cy2) * r2 / dist

		else if @state.type is Edge.CURVE
			[ x1, y1, x2, y2 ] = [ cx1, cy1, cx2, cy2 ]
			x1 += (cx2 - cx1) * r1 / dist
			y1 += (cy2 - cy1) * r1 / dist
			x2 += (cx1 - cx2) * r2 / dist
			y2 += (cy1 - cy2) * r2 / dist

			tmpx = (x1 + x2 + y2 - y1) / 2
			tmpy = (y1 + y2 + x1 - x2) / 2
			cx = tmpx / 2 + x1 / 4 + x2 / 4
			cy = tmpy / 2 + y1 / 4 + y2 / 4
			@path.attr { x1, y1, x2, y2, cx, cy }

		this

	update: ({ vertices }) ->
		start = vertices[@props.startVertexId].props
		end = vertices[@props.endVertexId].props
		@updatePosition
			cx1: start.x
			cy1: start.y
			cx2: end.x
			cy2: end.y

		this

	propagate: (props) ->
		@path.props.stroke = props.stroke if props.stroke?

	paint: (color) ->
		@path.attr stroke: color
		this

	nodes: ->
		[ @path, @text ]
