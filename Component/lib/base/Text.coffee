Base = require '../factories/Base'
{ rotate } = require '../util'

module.exports =
class Text extends Base
	componentName: 'text'
	tagName: 'text'

	defaultProps:
		angle: 0
		content: ''
		x: 0
		y: 0

	getStyles: (p) ->
		fontFamily: p.fontFamily
		fontSize: p.fontSize
		fontWeight: p.fontWeight
		textAnchor: p.textAnchor
		transform: rotate p.angle, p.x, p.y
		fill: p.fill

	getAttributes: (p) ->
		x: p.x
		y: p.y

	getContent: (p) ->
		p.content

	hide: ->
		@props.fontSize = 0
		this

	content: (val) ->
		@props.content = val
		this
