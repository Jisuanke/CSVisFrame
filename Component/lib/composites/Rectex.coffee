Rect = require '../base/Rect'
Text = require '../base/Text'
Composite = require '../factories/Composite'
{ translate } = require '../util'

module.exports =
class Rectex extends Composite
	componentName: 'rectex'

	created: ->
		@rect = new Rect
		@text = new Text

	propagate: ({ height, width, content, rx, ry }) ->
		@rect.attr { height, width, rx, ry, x: 0, y: 0 }
		@text.attr { content, y: '0.35em' }

	getAttributes: (p) ->
		transform: translate p.x, p.y

	nodes: ->
		[ @rect, @text ]
