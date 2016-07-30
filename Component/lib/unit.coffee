unitless = '
  animation-iteration-count box-flex box-flex-group box-ordinal-group
  column-count fill-opacity flex flex-grow flex-positive flex-shrink
  flex-negative flex-order font-weight line-clamp line-height opacity
  order orphans stop-opacity stroke-dashoffset stroke-opacity
  stroke-width tab-size widows z-index zoom
'.split ' '

exports.addUnit = (key, val) ->
	if typeof val is 'string' and key in unitless
	then val
	else val + 'px'
