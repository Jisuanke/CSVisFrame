compact = require 'lodash-es/compact'
filter = require 'lodash-es/filter'
negate = require 'lodash-es/negate'
values = require 'lodash-es/values'
Composite = require './factories/Composite'
config = require './config'
uniqueId = require 'lodash-es/uniqueId'

module.exports =
class Collection extends Composite
	constructor: (id) ->
		super { id }

	nodes: ->
		compact filter(values(this), (p) -> p?.draw?)

Object.defineProperties Collection.prototype,
	componentName: value: 'collection'
	namespace: value: 'va'

	getAttributes: value: (props) ->
		'data-name': this.props.name

	forEach: value: (callback) ->
		for own key, node of this when node?.draw?
			callback node, key, this
		this

	parentNode: get: ->
		config.parentNode

	length: get: ->
		count = 0
		for own key, value of this
			if value?.draw?
				count = Math.max (parseInt(key) + 1), count
		count
