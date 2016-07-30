Base = require '../factories/Base'
{ colors } = require '../config'
bowser = require 'bowser'
{ nextTick } = require '../util'

# Force Microsoft browsers to redraw the circle
# Fixing a strange bug where the circles have a radius of 0
# until a CSS property change is triggered.
forceRedraw = (node) ->
	return unless node
	{ style } = node
	style.strokeWidth = '1'
	nextTick -> style.strokeWidth = '0'

module.exports =
class Circle extends Base
	componentName: 'circle'
	tagName: 'circle'

	defaultProps:
		r: 18
		fill: colors.default

	getAttributes: (p) ->
		fill: p.fill
		r: if p.hidden then 0 else p.r

	hide: ->
		@attr r: 0, strokeWidth: 0

if bowser.msie or bowser.msedge
	Object.defineProperties Circle.prototype,
		draw: value: ->
			Base::draw.apply this, arguments
			@state.interval ?= setInterval forceRedraw, 750, @node
			this
