animate = require '../../vendor/animateplus'
CSSAnimationProps = ['opacity']

isAnimationCandidate = (name, val) ->
	val? and /^#|[0-9]/.test(val) and not CSSAnimationProps.includes name

module.exports =
patch = (node, attributes, styles, duration = 500) ->

	# Removes attributes
	keys = Object.keys attributes
	for { name } in [node.attributes...]
		node.removeAttribute name unless name in keys
	for key in [node.style...]
		node.style.removeProperty key unless key of styles

	for name, val of attributes
		current = node.getAttribute name
		if __DEV__ and val isnt val
			console.warn "Attempted to set NaN to #{name}. Node:"
			console.log node
			
		if isAnimationCandidate name, current
			animate
				el: node
				"#{name}": [current, val]
				duration: duration
				easing: 'easeInOutQuint'
		else
			node.setAttribute name, val

	for name, val of styles
		node.style.setProperty name, val

	node
