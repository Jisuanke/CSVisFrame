/*
 * Animate Plus JavaScript Library v1.4.0
 * http://animateplus.com
 *
 * Copyright (c) 2015 Benjamin De Cock
 * Released under the MIT license
 * http://animateplus.com/license
 */

var slice = Object.call.bind([].slice);

// func utils
// ===============================================================================================

function curry(f) {
	var context, _curry = function(args) {
		return (f.length > 1) ? function() {
			var params = args ? args.concat() : [];
			return params.push.apply(params, arguments) <
				f.length && arguments.length ?
				_curry.call(this, params) : f.apply(this, params);
		} : f;
	};
	return _curry();
}

function compose() {
	var funcs = slice(arguments);
	return function(value) {
		return funcs.reduce(function(a, b) {
			return b(a);
		}, value);
	};
};

function not(fn) {
	return function() {
		return !fn.apply(this, arguments);
	}
}

var easing = {
	linear: function(t, b, c, d) {
		return b + (t / d * c);
	},
	easeInQuad: function(t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	easeInCubic: function(t, b, c, d) {
		return c * (t /= d) * t * t + b;
	},
	easeInQuart: function(t, b, c, d) {
		return c * (t /= d) * t * t * t + b;
	},
	easeInQuint: function(t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b;
	},
	easeInSine: function(t, b, c, d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	},
	easeInExpo: function(t, b, c, d) {
		return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	},
	easeInCirc: function(t, b, c, d) {
		return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	},
	easeInElastic: function(t, b, c, d, frequency = 500) {
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		var a = c;
		var p = d * (1 - Math.min(frequency, 999) / 1000);
		var s = a < Math.abs(c) ? p / 4 : p / (2 * Math.PI) * Math.asin(c / a);
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	},
	easeInBack: function(t, b, c, d) {
		var s = 1.70158;
		return c * (t /= d) * t * ((s + 1) * t - s) + b;
	},
	easeOutQuad: function(t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	},
	easeOutCubic: function(t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b;
	},
	easeOutQuart: function(t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	},
	easeOutQuint: function(t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	},
	easeOutSine: function(t, b, c, d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	},
	easeOutExpo: function(t, b, c, d) {
		return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	},
	easeOutCirc: function(t, b, c, d) {
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	},
	easeOutElastic: function(t, b, c, d, frequency = 500) {
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		var a = c;
		var p = d * (1 - Math.min(frequency, 999) / 1000);
		var s = a < Math.abs(c) ? p / 4 : p / (2 * Math.PI) * Math.asin(c / a);
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	},
	easeOutBack: function(t, b, c, d) {
		var s = 1.70158;
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	},
	easeOutBounce: function(t, b, c, d) {
		if ((t /= d) < (1 / 2.75))
			return c * (7.5625 * t * t) + b;
		if (t < (2 / 2.75))
			return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
		if (t < (2.5 / 2.75))
			return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
		return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
	},
	easeInOutQuad: function(t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((--t) * (t - 2) - 1) + b;
	},
	easeInOutCubic: function(t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b;
	},
	easeInOutQuart: function(t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	},
	easeInOutQuint: function(t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	},
	easeInOutSine: function(t, b, c, d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	},
	easeInOutExpo: function(t, b, c, d) {
		if (t == 0) return b;
		if (t == d) return b + c;
		if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInOutCirc: function(t, b, c, d) {
		if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	},
	easeInOutElastic: function(t, b, c, d, frequency = 500) {
		if (t == 0) return b;
		if ((t /= d / 2) == 2) return b + c;
		var a = c;
		var p = d * (1 - Math.min(frequency, 999) / 1000) * 1.5;
		var s = a < Math.abs(c) ? p / 4 : p / (2 * Math.PI) * Math.asin(c / a);
		return t < 1 ? -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	},
	easeInOutBack: function(t, b, c, d) {
		let s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	}
};


// array utils
// ===============================================================================================

function first(arr) {
	return arr[0];
}

function last(arr) {
	return first(arr.slice(-1));
}

function flatten(arr) {
	return arr.reduce(function(a, b) {
		return a.concat(b);
	});
}

function contains(arr, value) {
	return arr.includes(value);
}

function difference(arr, others) {
	var combined = flatten(slice(arguments, 1));
	return arr.filter(function(el) {
		return not(contains)(combined, el);
	});
}


// map utils
// ===============================================================================================

function getKeys(map) {
	return Array.from(map.keys());
}

var toMap = function() {
	function convert(obj) {
		var map = new Map();

		function add(key) {
			return map.set(key, obj[key]);
		}
		Object.keys(obj).forEach(add);
		return map;
	}
	return function(obj) {
		return obj instanceof Map ? obj : convert(obj);
	};
}();


// colors
// ===============================================================================================

var isHex = function isHex(val) {
	return (/^#/.test(val));
};
var isRGB = function isRGB(val) {
	return (/^rgb/.test(val));
};

var toRGB = function() {
	function expand(hex) {
		return hex.length < 7 ? hex.split("").reduce(function(a, b) {
			return a + b + b;
		}) : hex;
	};

	function convert(hex) {
		return hex.match(/[\d\w]{2}/g).map(function(val) {
			return parseInt(val, 16);
		});
	}
	return function(hex) {
		if (isRGB(hex)) return hex;
		var color = compose(expand, convert)(hex);
		return 'rgb(' + color.join(', ') + ')';
	};
}();


// dom
// ===============================================================================================

function getElements(el) {
	return domArray(typeof el == "string" ? document.querySelectorAll(el) : el);
}

function domArray(obj) {
	if (Array.isArray(obj)) {
		return obj;
	} else if (obj && typeof obj === 'object' && typeof obj.length === 'number') {
		return Array.from(obj);
	} else if (obj.nodeType) {
		return [obj];
	} else {
		return obj.get();
	}
}

// params
// ===============================================================================================

var defaults = new Map();
["el", "delay", "begin", "complete", "loop", "direction"].forEach(function (key) {
  return defaults.set(key, null);
});
defaults.set("duration", 1000);
defaults.set("easing", "easeOutElastic");

var fillBlankParams = function() {
	var required = getKeys(defaults).filter(function(key) {
		return defaults.get(key);
	});

	function isFilled(params) {
		return required.every(function(param) {
			return params.has(param);
		});
	}

	function fill(params) {
		var map = new Map(params);
		required.forEach(function(param) {
			if (!map.has(param)) map.set(param, defaults.get(param));
		});
		return map;
	}
	return function(params) {
		return isFilled(params) ? params : fill(params);
	};
}();

var buildMissingArrays = function() {
	var propIsArray = curry(function(params, prop) {
		return Array.isArray(params.get(prop));
	});

	function isValid(params) {
		return getCSSprops(params).every(propIsArray(params));
	}

	function missingArrays(params) {
		return getCSSprops(params).filter(not(propIsArray(params)));
	}
	return function(params) {
		if (isValid(params)) return params;
		var map = new Map(params);
		missingArrays(map).forEach(function(key) {
			return map.set(key, [defaultCSSvalues.get(key), map.get(key)]);
		});
		return map;
	};
}();

var addUnits = function() {
	var hasUnit = function hasUnit(value) {
		return (/\D$/.test(value));
	};
	var addUnit = curry(function(transformFunction, value) {
		if (hasUnit(value) || /scale/.test(transformFunction)) return value;
		if (/rotate|skew/.test(transformFunction)) return value + "deg";
		return value + "px";
	});
	var isValid = function isValid(params, transformFunctions) {
		return transformFunctions.every(function(transform) {
			return params.get(transform).every(hasUnit);
		});
	};
	return function(params) {
		var transformFunctions = getCSSprops(params).filter(isTransformFunction);
		if (isValid(params, transformFunctions)) return params;
		var map = new Map(params);
		transformFunctions.forEach(function(transform) {
			return map.set(transform, params.get(transform).map(addUnit(transform)));
		});
		return map;
	};
}();

var ensureRGB = function() {
	var hasHex = curry(function(params, prop) {
		return params.get(prop).some(isHex);
	});
	var isValid = function isValid(params) {
		return !getSVGprops(params).some(hasHex(params));
	};
	var needConvert = function needConvert(params) {
		return getSVGprops(params).filter(hasHex(params));
	};
	return function(params) {
		if (isValid(params)) return params;
		var map = new Map(params);
		needConvert(params).forEach(function(key) {
			return map.set(key, map.get(key).map(toRGB));
		});
		return map;
	};
}();

function setElements(params) {
	return new Map(params).set("el", getElements(params.get("el")));
}

function reverseDirection(params) {
	var map = new Map(params);
	getAnimatedProps(params).forEach(function(prop) {
		return map.set(prop, map.get(prop).slice().reverse());
	});
	return map;
}

function setInitialDirection(params) {
	return params.get("direction") == "reverse" ? reverseDirection(params) : params;
}

var validateParams = compose(
	toMap,
	fillBlankParams,
	buildMissingArrays,
	addUnits,
	ensureRGB,
	setElements,
	setInitialDirection
);


// params filters
// ===============================================================================================

var getAnimatedProps = function() {
	var excluded = getKeys(defaults);

	function isProp(param) {
		return not(contains)(excluded, param);
	};
	return function(params) {
		return getKeys(params).filter(isProp);
	};
}();

var getAnimatedPropsMaps = function() {
	var isColor = compose(first, isRGB);
	var createPropMap = curry(function(params, prop) {
		var digits = params.get(prop).map(splitDigits);
		var map = new Map();
		map.set("prop", prop);
		map.set("from", digits[0]);
		map.set("to", digits[1]);
		map.set("isTransformFunction", isTransformFunction(prop));
		map.set("isColor", isColor(params.get(prop)));
		if (/\d$/.test(params.get("easing"))) {
			var easing = params.get("easing").split(" ");
			map.set("easing", easing[0]);
			map.set("frequency", easing[1]);
		} else map.set("easing", params.get("easing"));
		return map;
	});
	return function(params, animatedProps) {
		return getAnimatedProps(params).map(createPropMap(params));
	};
}();

var getCSSprops = function() {
	var isCSSprop = function isCSSprop(prop) {
		return contains(supportedCSSprops, prop);
	};
	return function(params) {
		return getKeys(params).filter(isCSSprop);
	};
}();

var getSVGprops = function getSVGprops(params) {
	return difference(getAnimatedProps(params), getCSSprops(params));
};

// CSS props
// ===============================================================================================

var supportedCSSprops = ["opacity", "translateX", "translateY", "scale", "rotate", "scaleX", "scaleY", "rotateX", "rotateY", "perspective", "skewX", "skewY", "translateZ", "rotateZ", "scaleZ"];

var defaultCSSvalues = new Map(); {
	(function() {
		var ones = ["opacity", "scale", "scaleX", "scaleY"];
		var setValue = function setValue(prop) {
			return defaultCSSvalues.set(prop, contains(ones, prop) ? 1 : 0);
		};
		supportedCSSprops.forEach(setValue);
	})();
}

var isTransformFunction = function() {
	var transformFunctions = supportedCSSprops.filter(function(prop) {
		return prop != "opacity";
	});
	return function(str) {
		return contains(transformFunctions, str);
	};
}();

var hardwareAccelerate = function hardwareAccelerate(params) {
	var css = getCSSprops(params);
	if (!css.length) return;
	var willChange = [];
	if (css.some(isTransformFunction)) willChange.push("transform");
	if (contains(css, "opacity")) willChange.push("opacity");
	var value = willChange.join();
	params.get("el").forEach(function(el) {
		if (el.style.willChange) return;
		el.style.willChange = value;
	});
};

// value manipulation
// ===============================================================================================

var recomposeValue = function recomposeValue(digits, others) {
	return others.reduce(function(a, b, i) {
		return a + digits[i - 1] + b;
	});
};

var splitDigits = function() {
	var re = /-?\d*\.?\d+/g;
	var toStr = function toStr(value) {
		return typeof value == "string" ? value : String(value);
	};
	return function(value) {
		var split = new Map();
		split.set("digits", toStr(value).match(re).map(Number));
		split.set("others", toStr(value).split(re));
		return split;
	};
}();

// progress
// ===============================================================================================

var getProgress = curry(function(params, elapsed, prop) {
	var progress = prop.get("to").get("digits").map(function(digit, i) {
		var start = prop.get("from").get("digits")[i];
		if (start == digit) return start;
		var end = digit - start;
		var result = easing[prop.get("easing")](elapsed, start, end, params.get("duration"), prop.get("frequency"));
		return prop.get("isColor") ? Math.round(result) : result;
	});
	return recomposeValue(progress, prop.get("to").get("others"));
});

var getFinalValues = curry(function(params, prop) {
	return last(params.get(prop.get("prop")));
});

var setProgress = curry(function(props, progress, el) {
	var transforms = void 0;
	props.forEach(function(prop, i) {
		if (prop.get("isTransformFunction")) {
			if (!transforms) transforms = [];
			transforms.push(prop.get("prop") + "(" + progress[i] + ")");
			return;
		}
		if (prop.get("prop") == "opacity") {
			el.style.opacity = progress[i];
			return;
		}
		el.setAttribute(prop.get("prop"), progress[i]);
	});
	if (!transforms) return;
	el.style.transform = transforms.join(" ");
});

// start / end
// ===============================================================================================

var begin = function() {
	var start = function start(callback, params) {
		if (params.get("begin")) params.get("begin")(params.get("el"));
		requestAnimationFrame(callback);
	};
	return function(callback, params) {
		return params.get("delay") ? setTimeout(function() {
			return start(callback, params);
		}, params.get("delay")) : start(callback, params);
	};
}();

var complete = function complete(id, params) {
	untrack(id);
	if (params.get("complete")) params.get("complete")(params.get("el"));
	if (params.get("loop")) loop(params);
};

var loop = function loop(params) {
	return animate(function() {
		if (params.get("direction") == "alternate") return reverseDirection(params);
		if (params.get("direction") == "reverse") {
			var map = new Map(params);
			map.delete("direction");
			return map;
		}
		return params;
	}());
};

// animation tracking
// ===============================================================================================

var animations = new Map();

var track = function() {
	var count = 0;
	return function(elements) {
		var id = count++;
		animations = new Map(animations).set(id, elements);
		return id;
	};
}();

function untrack(id) {
	var map = new Map(animations);
	map.delete(id);
	animations = map;
}

// public
// ===============================================================================================

export default function animate(params) {
	var validatedParams = validateParams(params);
	var animatedProps = getAnimatedPropsMaps(validatedParams);
	var id = track(validatedParams.get("el"));
	var time = new Map();

	var step = function step(now) {
		if (!animations.has(id)) return;
		if (!time.has("start")) time.set("start", now);
		time.set("elapsed", now - time.get("start"));

		var running = time.get("elapsed") < validatedParams.get("duration");
		var progress = animatedProps.map(running ? getProgress(validatedParams, time.get("elapsed")) : getFinalValues(validatedParams));

		animations.get(id).forEach(setProgress(animatedProps, progress));
		running ? requestAnimationFrame(step) : complete(id, validatedParams);
	};

	hardwareAccelerate(validatedParams);
	begin(step, validatedParams);
}

export function stop(el) {
	var stopped = getElements(el);
	var map = new Map(animations);
	map.forEach(function(elements, id) {
		var remaining = difference(elements, stopped);
		remaining.length ? map.set(id, remaining) : map.delete(id);
	});
	animations = map;
}
