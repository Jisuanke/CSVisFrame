module.exports =
	
	# CSS attribute helpers
	rgba: (r, g, b, a = 1) ->
		"rgba(#{r}, #{g}, #{b}, #{a})"

	rotate: (angle, x, y) ->
		"rotate(#{angle}, #{x}, #{y})"

	translate: (x, y) ->
		"translate(#{x}, #{y})"

	# d attribute helper functions
	Moveto: (x, y) ->
		"M#{x},#{y} " # Absolute

	moveto: (x, y) ->
		"m#{x},#{y} " # Relative

	Lineto: (x, y) ->
		"L#{x},#{y} "

	Cubic: (c1x, c1y, c2x, c2y, x, y) ->
		"C#{c1x}#{c1y} #{c2x}#{c2y} #{x}#{y}"

	Quadratic: (cx, cy, x, y) ->
		"Q#{cx},#{cy} #{x},#{y} "

	url: (href) ->
		"url(#{href})"

	ClosePath: ->
		'Z'

	nextTick: (fn) ->
		requestAnimationFrame fn
