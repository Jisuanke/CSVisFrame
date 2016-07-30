Base = require './Base'
clone = require 'lodash-es/clone'
compact = require 'lodash-es/compact'

module.exports =
class Composite extends Base
	tagName: 'g'

	# no-op fallbacks
	created: ->
	propagate: ->

	constructor: ->
		super
		@created @props
		@propagate @props

	clone: ->
		composite = Object.create Object.getPrototypeOf this
		composite.props = clone @props
		composite.state = clone @state
		for own key, val of this when val
			if val.isComponent
				composite[key] = val.clone()
			else if Array.isArray val
				composite[key] = val.slice()
		composite

	draw: (duration) ->
		super
		{ node } = this
		nodes = @nodes()
		@propagate @props
		for element in nodes when element?.draw?
			element.parentNode = node
			element.draw duration

		nodes = compact nodes.map (n) -> n?.node
		for child in node.childNodes by -1
			unless nodes.includes child
				child.remove()

		this
