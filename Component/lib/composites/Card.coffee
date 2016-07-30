Rect = require '../base/Rect'
Text = require '../base/Text'
Composite = require '../factories/Composite'
{ translate } = require '../util'

module.exports =
class Card extends Composite
	componentName: 'card'

	defaultProps:
		rx: 2
		ry: 2

	created: ->
		@rect = new Rect
		@text = new Text

	propagate: (props) ->
		{ height, width, content, rx, ry, x, y } = props
		@rect.attr { height, width, rx, ry, x: x, y: y - height / 2.0 }
		@text.attr { content, x, y: y - 20 }

	getAttributes: (p) ->
		transform: translate p.x, p.y

	nodes: ->
		[ @rect, @text ]
