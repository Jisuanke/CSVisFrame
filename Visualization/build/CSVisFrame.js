(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
   typeof define === 'function' && define.amd ? define(['exports'], factory) :
   (factory((global.CSVisFrame = global.CSVisFrame || {})));
}(this, function (exports) { 'use strict';

	var __DEV__ = true, global = window;

	var babelHelpers = {};

	babelHelpers.classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	babelHelpers.createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	babelHelpers.toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};

	babelHelpers;


	function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports), module.exports; }

	(function polyfill(target, name, value) {
	    if (target[name] == null) {
	        Object.defineProperty(target, name, { value: value });
	    }
	    return polyfill;
	})(Element.prototype, 'remove', function () {
	    // 1. If the context object does not have a parent, terminate these steps.
	    if (this.parentNode) {
	        // 2. Remove the context object from the context object's parent.
	        this.parentNode.removeChild(this);
	    }
	})(Element.prototype, 'query', Element.prototype.querySelector)(SVGElement.prototype, 'contains', HTMLElement.prototype.contains);

	var _core = __commonjs(function (module) {
	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
	});

	var _core$1 = (_core && typeof _core === 'object' && 'default' in _core ? _core['default'] : _core);
	var version = _core.version;

var require$$0 = Object.freeze({
		default: _core$1,
		version: version
	});

	var _iterators = __commonjs(function (module) {
	module.exports = {};
	});

	var _iterators$1 = (_iterators && typeof _iterators === 'object' && 'default' in _iterators ? _iterators['default'] : _iterators);


	var require$$2 = Object.freeze({
		default: _iterators$1
	});

	var _global = __commonjs(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	});

	var _global$1 = (_global && typeof _global === 'object' && 'default' in _global ? _global['default'] : _global);


	var require$$3 = Object.freeze({
	  default: _global$1
	});

	var _uid = __commonjs(function (module) {
	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};
	});

	var _uid$1 = (_uid && typeof _uid === 'object' && 'default' in _uid ? _uid['default'] : _uid);


	var require$$0$4 = Object.freeze({
	  default: _uid$1
	});

	var _shared = __commonjs(function (module) {
	var global = ('default' in require$$3 ? require$$3['default'] : require$$3)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};
	});

	var _shared$1 = (_shared && typeof _shared === 'object' && 'default' in _shared ? _shared['default'] : _shared);


	var require$$1$1 = Object.freeze({
	  default: _shared$1
	});

	var _wks = __commonjs(function (module) {
	var store      = ('default' in require$$1$1 ? require$$1$1['default'] : require$$1$1)('wks')
	  , uid        = ('default' in require$$0$4 ? require$$0$4['default'] : require$$0$4)
	  , Symbol     = ('default' in require$$3 ? require$$3['default'] : require$$3).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;
	});

	var _wks$1 = (_wks && typeof _wks === 'object' && 'default' in _wks ? _wks['default'] : _wks);


	var require$$0$3 = Object.freeze({
	  default: _wks$1
	});

	var _cof = __commonjs(function (module) {
	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};
	});

	var _cof$1 = (_cof && typeof _cof === 'object' && 'default' in _cof ? _cof['default'] : _cof);


	var require$$1$2 = Object.freeze({
	  default: _cof$1
	});

	var _classof = __commonjs(function (module) {
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = ('default' in require$$1$2 ? require$$1$2['default'] : require$$1$2)
	  , TAG = ('default' in require$$0$3 ? require$$0$3['default'] : require$$0$3)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};
	});

	var _classof$1 = (_classof && typeof _classof === 'object' && 'default' in _classof ? _classof['default'] : _classof);


	var require$$2$1 = Object.freeze({
	  default: _classof$1
	});

	var core_getIteratorMethod = __commonjs(function (module) {
	var classof   = ('default' in require$$2$1 ? require$$2$1['default'] : require$$2$1)
	  , ITERATOR  = ('default' in require$$0$3 ? require$$0$3['default'] : require$$0$3)('iterator')
	  , Iterators = ('default' in require$$2 ? require$$2['default'] : require$$2);
	module.exports = ('default' in require$$0 ? require$$0['default'] : require$$0).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};
	});

	var core_getIteratorMethod$1 = (core_getIteratorMethod && typeof core_getIteratorMethod === 'object' && 'default' in core_getIteratorMethod ? core_getIteratorMethod['default'] : core_getIteratorMethod);


	var require$$1 = Object.freeze({
	  default: core_getIteratorMethod$1
	});

	var _toInteger = __commonjs(function (module) {
	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};
	});

	var _toInteger$1 = (_toInteger && typeof _toInteger === 'object' && 'default' in _toInteger ? _toInteger['default'] : _toInteger);


	var require$$1$3 = Object.freeze({
	  default: _toInteger$1
	});

	var _toLength = __commonjs(function (module) {
	// 7.1.15 ToLength
	var toInteger = ('default' in require$$1$3 ? require$$1$3['default'] : require$$1$3)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};
	});

	var _toLength$1 = (_toLength && typeof _toLength === 'object' && 'default' in _toLength ? _toLength['default'] : _toLength);


	var require$$2$2 = Object.freeze({
	  default: _toLength$1
	});

	var _isObject = __commonjs(function (module) {
	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};
	});

	var _isObject$1 = (_isObject && typeof _isObject === 'object' && 'default' in _isObject ? _isObject['default'] : _isObject);


	var require$$2$4 = Object.freeze({
	  default: _isObject$1
	});

	var _anObject = __commonjs(function (module) {
	var isObject = ('default' in require$$2$4 ? require$$2$4['default'] : require$$2$4);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};
	});

	var _anObject$1 = (_anObject && typeof _anObject === 'object' && 'default' in _anObject ? _anObject['default'] : _anObject);


	var require$$2$3 = Object.freeze({
	  default: _anObject$1
	});

	var _isArrayIter = __commonjs(function (module) {
	// check on default Array iterator
	var Iterators  = ('default' in require$$2 ? require$$2['default'] : require$$2)
	  , ITERATOR   = ('default' in require$$0$3 ? require$$0$3['default'] : require$$0$3)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};
	});

	var _isArrayIter$1 = (_isArrayIter && typeof _isArrayIter === 'object' && 'default' in _isArrayIter ? _isArrayIter['default'] : _isArrayIter);


	var require$$4 = Object.freeze({
	  default: _isArrayIter$1
	});

	var _iterCall = __commonjs(function (module) {
	// call something on iterator step with safe closing on error
	var anObject = ('default' in require$$2$3 ? require$$2$3['default'] : require$$2$3);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};
	});

	var _iterCall$1 = (_iterCall && typeof _iterCall === 'object' && 'default' in _iterCall ? _iterCall['default'] : _iterCall);


	var require$$5$1 = Object.freeze({
	  default: _iterCall$1
	});

	var _aFunction = __commonjs(function (module) {
	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};
	});

	var _aFunction$1 = (_aFunction && typeof _aFunction === 'object' && 'default' in _aFunction ? _aFunction['default'] : _aFunction);


	var require$$0$5 = Object.freeze({
	  default: _aFunction$1
	});

	var _ctx = __commonjs(function (module) {
	// optional / simple context binding
	var aFunction = ('default' in require$$0$5 ? require$$0$5['default'] : require$$0$5);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};
	});

	var _ctx$1 = (_ctx && typeof _ctx === 'object' && 'default' in _ctx ? _ctx['default'] : _ctx);


	var require$$8 = Object.freeze({
	  default: _ctx$1
	});

	var _forOf = __commonjs(function (module) {
	var ctx         = ('default' in require$$8 ? require$$8['default'] : require$$8)
	  , call        = ('default' in require$$5$1 ? require$$5$1['default'] : require$$5$1)
	  , isArrayIter = ('default' in require$$4 ? require$$4['default'] : require$$4)
	  , anObject    = ('default' in require$$2$3 ? require$$2$3['default'] : require$$2$3)
	  , toLength    = ('default' in require$$2$2 ? require$$2$2['default'] : require$$2$2)
	  , getIterFn   = ('default' in require$$1 ? require$$1['default'] : require$$1)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;
	});

	var _forOf$1 = (_forOf && typeof _forOf === 'object' && 'default' in _forOf ? _forOf['default'] : _forOf);


	var require$$5 = Object.freeze({
	  default: _forOf$1
	});

	var _arrayFromIterable = __commonjs(function (module) {
	var forOf = ('default' in require$$5 ? require$$5['default'] : require$$5);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};
	});

	var _arrayFromIterable$1 = (_arrayFromIterable && typeof _arrayFromIterable === 'object' && 'default' in _arrayFromIterable ? _arrayFromIterable['default'] : _arrayFromIterable);


	var require$$0$2 = Object.freeze({
	  default: _arrayFromIterable$1
	});

	var _collectionToJson = __commonjs(function (module) {
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = ('default' in require$$2$1 ? require$$2$1['default'] : require$$2$1)
	  , from    = ('default' in require$$0$2 ? require$$0$2['default'] : require$$0$2);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};
	});

	var _collectionToJson$1 = (_collectionToJson && typeof _collectionToJson === 'object' && 'default' in _collectionToJson ? _collectionToJson['default'] : _collectionToJson);


	var require$$0$1 = Object.freeze({
	  default: _collectionToJson$1
	});

	var _has = __commonjs(function (module) {
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};
	});

	var _has$1 = (_has && typeof _has === 'object' && 'default' in _has ? _has['default'] : _has);


	var require$$3$1 = Object.freeze({
	  default: _has$1
	});

	var _fails = __commonjs(function (module) {
	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};
	});

	var _fails$1 = (_fails && typeof _fails === 'object' && 'default' in _fails ? _fails['default'] : _fails);


	var require$$0$10 = Object.freeze({
	  default: _fails$1
	});

	var _descriptors = __commonjs(function (module) {
	// Thank's IE8 for his funny defineProperty
	module.exports = !('default' in require$$0$10 ? require$$0$10['default'] : require$$0$10)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});
	});

	var _descriptors$1 = (_descriptors && typeof _descriptors === 'object' && 'default' in _descriptors ? _descriptors['default'] : _descriptors);


	var require$$0$9 = Object.freeze({
	  default: _descriptors$1
	});

	var _propertyDesc = __commonjs(function (module) {
	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};
	});

	var _propertyDesc$1 = (_propertyDesc && typeof _propertyDesc === 'object' && 'default' in _propertyDesc ? _propertyDesc['default'] : _propertyDesc);


	var require$$0$11 = Object.freeze({
	  default: _propertyDesc$1
	});

	var _toPrimitive = __commonjs(function (module) {
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = ('default' in require$$2$4 ? require$$2$4['default'] : require$$2$4);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};
	});

	var _toPrimitive$1 = (_toPrimitive && typeof _toPrimitive === 'object' && 'default' in _toPrimitive ? _toPrimitive['default'] : _toPrimitive);


	var require$$3$2 = Object.freeze({
	  default: _toPrimitive$1
	});

	var _domCreate = __commonjs(function (module) {
	var isObject = ('default' in require$$2$4 ? require$$2$4['default'] : require$$2$4)
	  , document = ('default' in require$$3 ? require$$3['default'] : require$$3).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};
	});

	var _domCreate$1 = (_domCreate && typeof _domCreate === 'object' && 'default' in _domCreate ? _domCreate['default'] : _domCreate);


	var require$$1$6 = Object.freeze({
	  default: _domCreate$1
	});

	var _ie8DomDefine = __commonjs(function (module) {
	module.exports = !('default' in require$$0$9 ? require$$0$9['default'] : require$$0$9) && !('default' in require$$0$10 ? require$$0$10['default'] : require$$0$10)(function(){
	  return Object.defineProperty(('default' in require$$1$6 ? require$$1$6['default'] : require$$1$6)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});
	});

	var _ie8DomDefine$1 = (_ie8DomDefine && typeof _ie8DomDefine === 'object' && 'default' in _ie8DomDefine ? _ie8DomDefine['default'] : _ie8DomDefine);


	var require$$1$5 = Object.freeze({
	  default: _ie8DomDefine$1
	});

	var _objectDp = __commonjs(function (module, exports) {
	var anObject       = ('default' in require$$2$3 ? require$$2$3['default'] : require$$2$3)
	  , IE8_DOM_DEFINE = ('default' in require$$1$5 ? require$$1$5['default'] : require$$1$5)
	  , toPrimitive    = ('default' in require$$3$2 ? require$$3$2['default'] : require$$3$2)
	  , dP             = Object.defineProperty;

	exports.f = ('default' in require$$0$9 ? require$$0$9['default'] : require$$0$9) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};
	});

	var _objectDp$1 = (_objectDp && typeof _objectDp === 'object' && 'default' in _objectDp ? _objectDp['default'] : _objectDp);
	var f = _objectDp.f;

var require$$1$4 = Object.freeze({
	  default: _objectDp$1,
	  f: f
	});

	var _hide = __commonjs(function (module) {
	var dP         = ('default' in require$$1$4 ? require$$1$4['default'] : require$$1$4)
	  , createDesc = ('default' in require$$0$11 ? require$$0$11['default'] : require$$0$11);
	module.exports = ('default' in require$$0$9 ? require$$0$9['default'] : require$$0$9) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};
	});

	var _hide$1 = (_hide && typeof _hide === 'object' && 'default' in _hide ? _hide['default'] : _hide);


	var require$$0$8 = Object.freeze({
	  default: _hide$1
	});

	var _redefine = __commonjs(function (module) {
	var global    = ('default' in require$$3 ? require$$3['default'] : require$$3)
	  , hide      = ('default' in require$$0$8 ? require$$0$8['default'] : require$$0$8)
	  , has       = ('default' in require$$3$1 ? require$$3$1['default'] : require$$3$1)
	  , SRC       = ('default' in require$$0$4 ? require$$0$4['default'] : require$$0$4)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	('default' in require$$0 ? require$$0['default'] : require$$0).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});
	});

	var _redefine$1 = (_redefine && typeof _redefine === 'object' && 'default' in _redefine ? _redefine['default'] : _redefine);


	var require$$0$7 = Object.freeze({
	  default: _redefine$1
	});

	var _export = __commonjs(function (module) {
	var global    = ('default' in require$$3 ? require$$3['default'] : require$$3)
	  , core      = ('default' in require$$0 ? require$$0['default'] : require$$0)
	  , hide      = ('default' in require$$0$8 ? require$$0$8['default'] : require$$0$8)
	  , redefine  = ('default' in require$$0$7 ? require$$0$7['default'] : require$$0$7)
	  , ctx       = ('default' in require$$8 ? require$$8['default'] : require$$8)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;
	});

	var _export$1 = (_export && typeof _export === 'object' && 'default' in _export ? _export['default'] : _export);


	var require$$0$6 = Object.freeze({
	  default: _export$1
	});

	var es7_map_toJson = __commonjs(function (module) {
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = ('default' in require$$0$6 ? require$$0$6['default'] : require$$0$6);

	$export($export.P + $export.R, 'Map', {toJSON: ('default' in require$$0$1 ? require$$0$1['default'] : require$$0$1)('Map')});
	});

	var _defined = __commonjs(function (module) {
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};
	});

	var _defined$1 = (_defined && typeof _defined === 'object' && 'default' in _defined ? _defined['default'] : _defined);


	var require$$0$16 = Object.freeze({
	  default: _defined$1
	});

	var _iobject = __commonjs(function (module) {
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = ('default' in require$$1$2 ? require$$1$2['default'] : require$$1$2);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};
	});

	var _iobject$1 = (_iobject && typeof _iobject === 'object' && 'default' in _iobject ? _iobject['default'] : _iobject);


	var require$$1$8 = Object.freeze({
	  default: _iobject$1
	});

	var _toIobject = __commonjs(function (module) {
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = ('default' in require$$1$8 ? require$$1$8['default'] : require$$1$8)
	  , defined = ('default' in require$$0$16 ? require$$0$16['default'] : require$$0$16);
	module.exports = function(it){
	  return IObject(defined(it));
	};
	});

	var _toIobject$1 = (_toIobject && typeof _toIobject === 'object' && 'default' in _toIobject ? _toIobject['default'] : _toIobject);


	var require$$1$7 = Object.freeze({
	  default: _toIobject$1
	});

	var _objectPie = __commonjs(function (module, exports) {
	exports.f = {}.propertyIsEnumerable;
	});

	var _objectPie$1 = (_objectPie && typeof _objectPie === 'object' && 'default' in _objectPie ? _objectPie['default'] : _objectPie);
	var f$2 = _objectPie.f;

var require$$3$3 = Object.freeze({
		default: _objectPie$1,
		f: f$2
	});

	var _objectGopd = __commonjs(function (module, exports) {
	var pIE            = ('default' in require$$3$3 ? require$$3$3['default'] : require$$3$3)
	  , createDesc     = ('default' in require$$0$11 ? require$$0$11['default'] : require$$0$11)
	  , toIObject      = ('default' in require$$1$7 ? require$$1$7['default'] : require$$1$7)
	  , toPrimitive    = ('default' in require$$3$2 ? require$$3$2['default'] : require$$3$2)
	  , has            = ('default' in require$$3$1 ? require$$3$1['default'] : require$$3$1)
	  , IE8_DOM_DEFINE = ('default' in require$$1$5 ? require$$1$5['default'] : require$$1$5)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = ('default' in require$$0$9 ? require$$0$9['default'] : require$$0$9) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};
	});

	var _objectGopd$1 = (_objectGopd && typeof _objectGopd === 'object' && 'default' in _objectGopd ? _objectGopd['default'] : _objectGopd);
	var f$1 = _objectGopd.f;

var require$$0$15 = Object.freeze({
	  default: _objectGopd$1,
	  f: f$1
	});

	var _setProto = __commonjs(function (module) {
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = ('default' in require$$2$4 ? require$$2$4['default'] : require$$2$4)
	  , anObject = ('default' in require$$2$3 ? require$$2$3['default'] : require$$2$3);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = ('default' in require$$8 ? require$$8['default'] : require$$8)(Function.call, ('default' in require$$0$15 ? require$$0$15['default'] : require$$0$15).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};
	});

	var _setProto$1 = (_setProto && typeof _setProto === 'object' && 'default' in _setProto ? _setProto['default'] : _setProto);
	var set = _setProto.set;
	var check = _setProto.check;

var require$$0$14 = Object.freeze({
	  default: _setProto$1,
	  set: set,
	  check: check
	});

	var _inheritIfRequired = __commonjs(function (module) {
	var isObject       = ('default' in require$$2$4 ? require$$2$4['default'] : require$$2$4)
	  , setPrototypeOf = ('default' in require$$0$14 ? require$$0$14['default'] : require$$0$14).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};
	});

	var _inheritIfRequired$1 = (_inheritIfRequired && typeof _inheritIfRequired === 'object' && 'default' in _inheritIfRequired ? _inheritIfRequired['default'] : _inheritIfRequired);


	var require$$0$13 = Object.freeze({
	  default: _inheritIfRequired$1
	});

	var _setToStringTag = __commonjs(function (module) {
	var def = ('default' in require$$1$4 ? require$$1$4['default'] : require$$1$4).f
	  , has = ('default' in require$$3$1 ? require$$3$1['default'] : require$$3$1)
	  , TAG = ('default' in require$$0$3 ? require$$0$3['default'] : require$$0$3)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};
	});

	var _setToStringTag$1 = (_setToStringTag && typeof _setToStringTag === 'object' && 'default' in _setToStringTag ? _setToStringTag['default'] : _setToStringTag);


	var require$$2$5 = Object.freeze({
	  default: _setToStringTag$1
	});

	var _iterDetect = __commonjs(function (module) {
	var ITERATOR     = ('default' in require$$0$3 ? require$$0$3['default'] : require$$0$3)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};
	});

	var _iterDetect$1 = (_iterDetect && typeof _iterDetect === 'object' && 'default' in _iterDetect ? _iterDetect['default'] : _iterDetect);


	var require$$0$17 = Object.freeze({
	  default: _iterDetect$1
	});

	var _anInstance = __commonjs(function (module) {
	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};
	});

	var _anInstance$1 = (_anInstance && typeof _anInstance === 'object' && 'default' in _anInstance ? _anInstance['default'] : _anInstance);


	var require$$7 = Object.freeze({
	  default: _anInstance$1
	});

	var _meta = __commonjs(function (module) {
	var META     = ('default' in require$$0$4 ? require$$0$4['default'] : require$$0$4)('meta')
	  , isObject = ('default' in require$$2$4 ? require$$2$4['default'] : require$$2$4)
	  , has      = ('default' in require$$3$1 ? require$$3$1['default'] : require$$3$1)
	  , setDesc  = ('default' in require$$1$4 ? require$$1$4['default'] : require$$1$4).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !('default' in require$$0$10 ? require$$0$10['default'] : require$$0$10)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};
	});

	var _meta$1 = (_meta && typeof _meta === 'object' && 'default' in _meta ? _meta['default'] : _meta);
	var KEY = _meta.KEY;
	var NEED = _meta.NEED;
	var fastKey = _meta.fastKey;
	var getWeak = _meta.getWeak;
	var onFreeze = _meta.onFreeze;

var require$$0$18 = Object.freeze({
	  default: _meta$1,
	  KEY: KEY,
	  NEED: NEED,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	});

	var _redefineAll = __commonjs(function (module) {
	var redefine = ('default' in require$$0$7 ? require$$0$7['default'] : require$$0$7);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};
	});

	var _redefineAll$1 = (_redefineAll && typeof _redefineAll === 'object' && 'default' in _redefineAll ? _redefineAll['default'] : _redefineAll);


	var require$$9 = Object.freeze({
	  default: _redefineAll$1
	});

	var _collection = __commonjs(function (module) {
	'use strict';
	var global            = ('default' in require$$3 ? require$$3['default'] : require$$3)
	  , $export           = ('default' in require$$0$6 ? require$$0$6['default'] : require$$0$6)
	  , redefine          = ('default' in require$$0$7 ? require$$0$7['default'] : require$$0$7)
	  , redefineAll       = ('default' in require$$9 ? require$$9['default'] : require$$9)
	  , meta              = ('default' in require$$0$18 ? require$$0$18['default'] : require$$0$18)
	  , forOf             = ('default' in require$$5 ? require$$5['default'] : require$$5)
	  , anInstance        = ('default' in require$$7 ? require$$7['default'] : require$$7)
	  , isObject          = ('default' in require$$2$4 ? require$$2$4['default'] : require$$2$4)
	  , fails             = ('default' in require$$0$10 ? require$$0$10['default'] : require$$0$10)
	  , $iterDetect       = ('default' in require$$0$17 ? require$$0$17['default'] : require$$0$17)
	  , setToStringTag    = ('default' in require$$2$5 ? require$$2$5['default'] : require$$2$5)
	  , inheritIfRequired = ('default' in require$$0$13 ? require$$0$13['default'] : require$$0$13);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};
	});

	var _collection$1 = (_collection && typeof _collection === 'object' && 'default' in _collection ? _collection['default'] : _collection);


	var require$$0$12 = Object.freeze({
	  default: _collection$1
	});

	var _setSpecies = __commonjs(function (module) {
	'use strict';
	var global      = ('default' in require$$3 ? require$$3['default'] : require$$3)
	  , dP          = ('default' in require$$1$4 ? require$$1$4['default'] : require$$1$4)
	  , DESCRIPTORS = ('default' in require$$0$9 ? require$$0$9['default'] : require$$0$9)
	  , SPECIES     = ('default' in require$$0$3 ? require$$0$3['default'] : require$$0$3)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};
	});

	var _setSpecies$1 = (_setSpecies && typeof _setSpecies === 'object' && 'default' in _setSpecies ? _setSpecies['default'] : _setSpecies);


	var require$$2$6 = Object.freeze({
	  default: _setSpecies$1
	});

	var _iterStep = __commonjs(function (module) {
	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};
	});

	var _iterStep$1 = (_iterStep && typeof _iterStep === 'object' && 'default' in _iterStep ? _iterStep['default'] : _iterStep);


	var require$$3$4 = Object.freeze({
	  default: _iterStep$1
	});

	var _sharedKey = __commonjs(function (module) {
	var shared = ('default' in require$$1$1 ? require$$1$1['default'] : require$$1$1)('keys')
	  , uid    = ('default' in require$$0$4 ? require$$0$4['default'] : require$$0$4);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};
	});

	var _sharedKey$1 = (_sharedKey && typeof _sharedKey === 'object' && 'default' in _sharedKey ? _sharedKey['default'] : _sharedKey);


	var require$$0$20 = Object.freeze({
	  default: _sharedKey$1
	});

	var _toObject = __commonjs(function (module) {
	// 7.1.13 ToObject(argument)
	var defined = ('default' in require$$0$16 ? require$$0$16['default'] : require$$0$16);
	module.exports = function(it){
	  return Object(defined(it));
	};
	});

	var _toObject$1 = (_toObject && typeof _toObject === 'object' && 'default' in _toObject ? _toObject['default'] : _toObject);


	var require$$2$7 = Object.freeze({
	  default: _toObject$1
	});

	var _objectGpo = __commonjs(function (module) {
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = ('default' in require$$3$1 ? require$$3$1['default'] : require$$3$1)
	  , toObject    = ('default' in require$$2$7 ? require$$2$7['default'] : require$$2$7)
	  , IE_PROTO    = ('default' in require$$0$20 ? require$$0$20['default'] : require$$0$20)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};
	});

	var _objectGpo$1 = (_objectGpo && typeof _objectGpo === 'object' && 'default' in _objectGpo ? _objectGpo['default'] : _objectGpo);


	var require$$1$10 = Object.freeze({
	  default: _objectGpo$1
	});

	var _html = __commonjs(function (module) {
	module.exports = ('default' in require$$3 ? require$$3['default'] : require$$3).document && document.documentElement;
	});

	var _html$1 = (_html && typeof _html === 'object' && 'default' in _html ? _html['default'] : _html);


	var require$$0$21 = Object.freeze({
		default: _html$1
	});

	var _enumBugKeys = __commonjs(function (module) {
	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');
	});

	var _enumBugKeys$1 = (_enumBugKeys && typeof _enumBugKeys === 'object' && 'default' in _enumBugKeys ? _enumBugKeys['default'] : _enumBugKeys);


	var require$$0$22 = Object.freeze({
	  default: _enumBugKeys$1
	});

	var _toIndex = __commonjs(function (module) {
	var toInteger = ('default' in require$$1$3 ? require$$1$3['default'] : require$$1$3)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};
	});

	var _toIndex$1 = (_toIndex && typeof _toIndex === 'object' && 'default' in _toIndex ? _toIndex['default'] : _toIndex);


	var require$$0$23 = Object.freeze({
	  default: _toIndex$1
	});

	var _arrayIncludes = __commonjs(function (module) {
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = ('default' in require$$1$7 ? require$$1$7['default'] : require$$1$7)
	  , toLength  = ('default' in require$$2$2 ? require$$2$2['default'] : require$$2$2)
	  , toIndex   = ('default' in require$$0$23 ? require$$0$23['default'] : require$$0$23);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};
	});

	var _arrayIncludes$1 = (_arrayIncludes && typeof _arrayIncludes === 'object' && 'default' in _arrayIncludes ? _arrayIncludes['default'] : _arrayIncludes);


	var require$$1$12 = Object.freeze({
	  default: _arrayIncludes$1
	});

	var _objectKeysInternal = __commonjs(function (module) {
	var has          = ('default' in require$$3$1 ? require$$3$1['default'] : require$$3$1)
	  , toIObject    = ('default' in require$$1$7 ? require$$1$7['default'] : require$$1$7)
	  , arrayIndexOf = ('default' in require$$1$12 ? require$$1$12['default'] : require$$1$12)(false)
	  , IE_PROTO     = ('default' in require$$0$20 ? require$$0$20['default'] : require$$0$20)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};
	});

	var _objectKeysInternal$1 = (_objectKeysInternal && typeof _objectKeysInternal === 'object' && 'default' in _objectKeysInternal ? _objectKeysInternal['default'] : _objectKeysInternal);


	var require$$1$11 = Object.freeze({
	  default: _objectKeysInternal$1
	});

	var _objectKeys = __commonjs(function (module) {
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = ('default' in require$$1$11 ? require$$1$11['default'] : require$$1$11)
	  , enumBugKeys = ('default' in require$$0$22 ? require$$0$22['default'] : require$$0$22);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};
	});

	var _objectKeys$1 = (_objectKeys && typeof _objectKeys === 'object' && 'default' in _objectKeys ? _objectKeys['default'] : _objectKeys);


	var require$$5$2 = Object.freeze({
	  default: _objectKeys$1
	});

	var _objectDps = __commonjs(function (module) {
	var dP       = ('default' in require$$1$4 ? require$$1$4['default'] : require$$1$4)
	  , anObject = ('default' in require$$2$3 ? require$$2$3['default'] : require$$2$3)
	  , getKeys  = ('default' in require$$5$2 ? require$$5$2['default'] : require$$5$2);

	module.exports = ('default' in require$$0$9 ? require$$0$9['default'] : require$$0$9) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};
	});

	var _objectDps$1 = (_objectDps && typeof _objectDps === 'object' && 'default' in _objectDps ? _objectDps['default'] : _objectDps);


	var require$$4$2 = Object.freeze({
	  default: _objectDps$1
	});

	var _objectCreate = __commonjs(function (module) {
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = ('default' in require$$2$3 ? require$$2$3['default'] : require$$2$3)
	  , dPs         = ('default' in require$$4$2 ? require$$4$2['default'] : require$$4$2)
	  , enumBugKeys = ('default' in require$$0$22 ? require$$0$22['default'] : require$$0$22)
	  , IE_PROTO    = ('default' in require$$0$20 ? require$$0$20['default'] : require$$0$20)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = ('default' in require$$1$6 ? require$$1$6['default'] : require$$1$6)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  ('default' in require$$0$21 ? require$$0$21['default'] : require$$0$21).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};
	});

	var _objectCreate$1 = (_objectCreate && typeof _objectCreate === 'object' && 'default' in _objectCreate ? _objectCreate['default'] : _objectCreate);


	var require$$4$1 = Object.freeze({
	  default: _objectCreate$1
	});

	var _iterCreate = __commonjs(function (module) {
	'use strict';
	var create         = ('default' in require$$4$1 ? require$$4$1['default'] : require$$4$1)
	  , descriptor     = ('default' in require$$0$11 ? require$$0$11['default'] : require$$0$11)
	  , setToStringTag = ('default' in require$$2$5 ? require$$2$5['default'] : require$$2$5)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	('default' in require$$0$8 ? require$$0$8['default'] : require$$0$8)(IteratorPrototype, ('default' in require$$0$3 ? require$$0$3['default'] : require$$0$3)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};
	});

	var _iterCreate$1 = (_iterCreate && typeof _iterCreate === 'object' && 'default' in _iterCreate ? _iterCreate['default'] : _iterCreate);


	var require$$3$5 = Object.freeze({
	  default: _iterCreate$1
	});

	var _library = __commonjs(function (module) {
	module.exports = false;
	});

	var _library$1 = (_library && typeof _library === 'object' && 'default' in _library ? _library['default'] : _library);


	var require$$9$1 = Object.freeze({
		default: _library$1
	});

	var _iterDefine = __commonjs(function (module) {
	'use strict';
	var LIBRARY        = ('default' in require$$9$1 ? require$$9$1['default'] : require$$9$1)
	  , $export        = ('default' in require$$0$6 ? require$$0$6['default'] : require$$0$6)
	  , redefine       = ('default' in require$$0$7 ? require$$0$7['default'] : require$$0$7)
	  , hide           = ('default' in require$$0$8 ? require$$0$8['default'] : require$$0$8)
	  , has            = ('default' in require$$3$1 ? require$$3$1['default'] : require$$3$1)
	  , Iterators      = ('default' in require$$2 ? require$$2['default'] : require$$2)
	  , $iterCreate    = ('default' in require$$3$5 ? require$$3$5['default'] : require$$3$5)
	  , setToStringTag = ('default' in require$$2$5 ? require$$2$5['default'] : require$$2$5)
	  , getPrototypeOf = ('default' in require$$1$10 ? require$$1$10['default'] : require$$1$10)
	  , ITERATOR       = ('default' in require$$0$3 ? require$$0$3['default'] : require$$0$3)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};
	});

	var _iterDefine$1 = (_iterDefine && typeof _iterDefine === 'object' && 'default' in _iterDefine ? _iterDefine['default'] : _iterDefine);


	var require$$0$19 = Object.freeze({
	  default: _iterDefine$1
	});

	var _collectionStrong = __commonjs(function (module) {
	'use strict';
	var dP          = ('default' in require$$1$4 ? require$$1$4['default'] : require$$1$4).f
	  , create      = ('default' in require$$4$1 ? require$$4$1['default'] : require$$4$1)
	  , redefineAll = ('default' in require$$9 ? require$$9['default'] : require$$9)
	  , ctx         = ('default' in require$$8 ? require$$8['default'] : require$$8)
	  , anInstance  = ('default' in require$$7 ? require$$7['default'] : require$$7)
	  , defined     = ('default' in require$$0$16 ? require$$0$16['default'] : require$$0$16)
	  , forOf       = ('default' in require$$5 ? require$$5['default'] : require$$5)
	  , $iterDefine = ('default' in require$$0$19 ? require$$0$19['default'] : require$$0$19)
	  , step        = ('default' in require$$3$4 ? require$$3$4['default'] : require$$3$4)
	  , setSpecies  = ('default' in require$$2$6 ? require$$2$6['default'] : require$$2$6)
	  , DESCRIPTORS = ('default' in require$$0$9 ? require$$0$9['default'] : require$$0$9)
	  , fastKey     = ('default' in require$$0$18 ? require$$0$18['default'] : require$$0$18).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};
	});

	var _collectionStrong$1 = (_collectionStrong && typeof _collectionStrong === 'object' && 'default' in _collectionStrong ? _collectionStrong['default'] : _collectionStrong);
	var getConstructor = _collectionStrong.getConstructor;
	var def = _collectionStrong.def;
	var getEntry = _collectionStrong.getEntry;
	var setStrong = _collectionStrong.setStrong;

var require$$1$9 = Object.freeze({
	  default: _collectionStrong$1,
	  getConstructor: getConstructor,
	  def: def,
	  getEntry: getEntry,
	  setStrong: setStrong
	});

	var es6_map = __commonjs(function (module) {
	'use strict';
	var strong = ('default' in require$$1$9 ? require$$1$9['default'] : require$$1$9);

	// 23.1 Map Objects
	module.exports = ('default' in require$$0$12 ? require$$0$12['default'] : require$$0$12)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);
	});

	var _addToUnscopables = __commonjs(function (module) {
	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = ('default' in require$$0$3 ? require$$0$3['default'] : require$$0$3)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)('default' in require$$0$8 ? require$$0$8['default'] : require$$0$8)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};
	});

	var _addToUnscopables$1 = (_addToUnscopables && typeof _addToUnscopables === 'object' && 'default' in _addToUnscopables ? _addToUnscopables['default'] : _addToUnscopables);


	var require$$0$24 = Object.freeze({
	  default: _addToUnscopables$1
	});

	var es6_array_iterator = __commonjs(function (module) {
	'use strict';
	var addToUnscopables = ('default' in require$$0$24 ? require$$0$24['default'] : require$$0$24)
	  , step             = ('default' in require$$3$4 ? require$$3$4['default'] : require$$3$4)
	  , Iterators        = ('default' in require$$2 ? require$$2['default'] : require$$2)
	  , toIObject        = ('default' in require$$1$7 ? require$$1$7['default'] : require$$1$7);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = ('default' in require$$0$19 ? require$$0$19['default'] : require$$0$19)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');
	});

	var es6_array_iterator$1 = (es6_array_iterator && typeof es6_array_iterator === 'object' && 'default' in es6_array_iterator ? es6_array_iterator['default'] : es6_array_iterator);


	var require$$5$3 = Object.freeze({
	  default: es6_array_iterator$1
	});

	var web_dom_iterable = __commonjs(function (module) {
	var $iterators    = ('default' in require$$5$3 ? require$$5$3['default'] : require$$5$3)
	  , redefine      = ('default' in require$$0$7 ? require$$0$7['default'] : require$$0$7)
	  , global        = ('default' in require$$3 ? require$$3['default'] : require$$3)
	  , hide          = ('default' in require$$0$8 ? require$$0$8['default'] : require$$0$8)
	  , Iterators     = ('default' in require$$2 ? require$$2['default'] : require$$2)
	  , wks           = ('default' in require$$0$3 ? require$$0$3['default'] : require$$0$3)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}
	});

	var _stringAt = __commonjs(function (module) {
	var toInteger = ('default' in require$$1$3 ? require$$1$3['default'] : require$$1$3)
	  , defined   = ('default' in require$$0$16 ? require$$0$16['default'] : require$$0$16);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};
	});

	var _stringAt$1 = (_stringAt && typeof _stringAt === 'object' && 'default' in _stringAt ? _stringAt['default'] : _stringAt);


	var require$$1$13 = Object.freeze({
	  default: _stringAt$1
	});

	var es6_string_iterator = __commonjs(function (module) {
	'use strict';
	var $at  = ('default' in require$$1$13 ? require$$1$13['default'] : require$$1$13)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	('default' in require$$0$19 ? require$$0$19['default'] : require$$0$19)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});
	});

	var es6_object_toString = __commonjs(function (module) {
	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = ('default' in require$$2$1 ? require$$2$1['default'] : require$$2$1)
	  , test    = {};
	test[('default' in require$$0$3 ? require$$0$3['default'] : require$$0$3)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  ('default' in require$$0$7 ? require$$0$7['default'] : require$$0$7)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}
	});

	var map = __commonjs(function (module) {
	module.exports = ('default' in require$$0 ? require$$0['default'] : require$$0).Map;
	});

	var _createProperty = __commonjs(function (module) {
	'use strict';
	var $defineProperty = ('default' in require$$1$4 ? require$$1$4['default'] : require$$1$4)
	  , createDesc      = ('default' in require$$0$11 ? require$$0$11['default'] : require$$0$11);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};
	});

	var _createProperty$1 = (_createProperty && typeof _createProperty === 'object' && 'default' in _createProperty ? _createProperty['default'] : _createProperty);


	var require$$2$8 = Object.freeze({
	  default: _createProperty$1
	});

	var es6_array_from = __commonjs(function (module) {
	'use strict';
	var ctx            = ('default' in require$$8 ? require$$8['default'] : require$$8)
	  , $export        = ('default' in require$$0$6 ? require$$0$6['default'] : require$$0$6)
	  , toObject       = ('default' in require$$2$7 ? require$$2$7['default'] : require$$2$7)
	  , call           = ('default' in require$$5$1 ? require$$5$1['default'] : require$$5$1)
	  , isArrayIter    = ('default' in require$$4 ? require$$4['default'] : require$$4)
	  , toLength       = ('default' in require$$2$2 ? require$$2$2['default'] : require$$2$2)
	  , createProperty = ('default' in require$$2$8 ? require$$2$8['default'] : require$$2$8)
	  , getIterFn      = ('default' in require$$1 ? require$$1['default'] : require$$1);

	$export($export.S + $export.F * !('default' in require$$0$17 ? require$$0$17['default'] : require$$0$17)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});
	});

	var from = __commonjs(function (module) {
	module.exports = ('default' in require$$0 ? require$$0['default'] : require$$0).Array.from;
	});

	var es7_array_includes = __commonjs(function (module) {
	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = ('default' in require$$0$6 ? require$$0$6['default'] : require$$0$6)
	  , $includes = ('default' in require$$1$12 ? require$$1$12['default'] : require$$1$12)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	('default' in require$$0$24 ? require$$0$24['default'] : require$$0$24)('includes');
	});

	var includes = __commonjs(function (module) {
	module.exports = ('default' in require$$0 ? require$$0['default'] : require$$0).Array.includes;
	});

	var _objectGops = __commonjs(function (module, exports) {
	exports.f = Object.getOwnPropertySymbols;
	});

	var _objectGops$1 = (_objectGops && typeof _objectGops === 'object' && 'default' in _objectGops ? _objectGops['default'] : _objectGops);
	var f$3 = _objectGops.f;

var require$$4$3 = Object.freeze({
		default: _objectGops$1,
		f: f$3
	});

	var _objectAssign = __commonjs(function (module) {
	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = ('default' in require$$5$2 ? require$$5$2['default'] : require$$5$2)
	  , gOPS     = ('default' in require$$4$3 ? require$$4$3['default'] : require$$4$3)
	  , pIE      = ('default' in require$$3$3 ? require$$3$3['default'] : require$$3$3)
	  , toObject = ('default' in require$$2$7 ? require$$2$7['default'] : require$$2$7)
	  , IObject  = ('default' in require$$1$8 ? require$$1$8['default'] : require$$1$8)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || ('default' in require$$0$10 ? require$$0$10['default'] : require$$0$10)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;
	});

	var _objectAssign$1 = (_objectAssign && typeof _objectAssign === 'object' && 'default' in _objectAssign ? _objectAssign['default'] : _objectAssign);


	var require$$0$25 = Object.freeze({
	  default: _objectAssign$1
	});

	var es6_object_assign = __commonjs(function (module) {
	// 19.1.3.1 Object.assign(target, source)
	var $export = ('default' in require$$0$6 ? require$$0$6['default'] : require$$0$6);

	$export($export.S + $export.F, 'Object', {assign: ('default' in require$$0$25 ? require$$0$25['default'] : require$$0$25)});
	});

	var assign = __commonjs(function (module) {
	module.exports = ('default' in require$$0 ? require$$0['default'] : require$$0).Object.assign;
	});

	var _failsIsRegexp = __commonjs(function (module) {
	var MATCH = ('default' in require$$0$3 ? require$$0$3['default'] : require$$0$3)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};
	});

	var _failsIsRegexp$1 = (_failsIsRegexp && typeof _failsIsRegexp === 'object' && 'default' in _failsIsRegexp ? _failsIsRegexp['default'] : _failsIsRegexp);


	var require$$0$26 = Object.freeze({
	  default: _failsIsRegexp$1
	});

	var _isRegexp = __commonjs(function (module) {
	// 7.2.8 IsRegExp(argument)
	var isObject = ('default' in require$$2$4 ? require$$2$4['default'] : require$$2$4)
	  , cof      = ('default' in require$$1$2 ? require$$1$2['default'] : require$$1$2)
	  , MATCH    = ('default' in require$$0$3 ? require$$0$3['default'] : require$$0$3)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};
	});

	var _isRegexp$1 = (_isRegexp && typeof _isRegexp === 'object' && 'default' in _isRegexp ? _isRegexp['default'] : _isRegexp);


	var require$$1$15 = Object.freeze({
	  default: _isRegexp$1
	});

	var _stringContext = __commonjs(function (module) {
	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = ('default' in require$$1$15 ? require$$1$15['default'] : require$$1$15)
	  , defined  = ('default' in require$$0$16 ? require$$0$16['default'] : require$$0$16);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};
	});

	var _stringContext$1 = (_stringContext && typeof _stringContext === 'object' && 'default' in _stringContext ? _stringContext['default'] : _stringContext);


	var require$$1$14 = Object.freeze({
	  default: _stringContext$1
	});

	var es6_string_includes = __commonjs(function (module) {
	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = ('default' in require$$0$6 ? require$$0$6['default'] : require$$0$6)
	  , context  = ('default' in require$$1$14 ? require$$1$14['default'] : require$$1$14)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * ('default' in require$$0$26 ? require$$0$26['default'] : require$$0$26)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	});

	var includes$2 = __commonjs(function (module) {
	module.exports = ('default' in require$$0 ? require$$0['default'] : require$$0).String.includes;
	});

	var es6_string_startsWith = __commonjs(function (module) {
	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = ('default' in require$$0$6 ? require$$0$6['default'] : require$$0$6)
	  , toLength    = ('default' in require$$2$2 ? require$$2$2['default'] : require$$2$2)
	  , context     = ('default' in require$$1$14 ? require$$1$14['default'] : require$$1$14)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * ('default' in require$$0$26 ? require$$0$26['default'] : require$$0$26)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});
	});

	var startsWith = __commonjs(function (module) {
	module.exports = ('default' in require$$0 ? require$$0['default'] : require$$0).String.startsWith;
	});

	var es6_string_endsWith = __commonjs(function (module) {
	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = ('default' in require$$0$6 ? require$$0$6['default'] : require$$0$6)
	  , toLength  = ('default' in require$$2$2 ? require$$2$2['default'] : require$$2$2)
	  , context   = ('default' in require$$1$14 ? require$$1$14['default'] : require$$1$14)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * ('default' in require$$0$26 ? require$$0$26['default'] : require$$0$26)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});
	});

	var endsWith = __commonjs(function (module) {
	module.exports = ('default' in require$$0 ? require$$0['default'] : require$$0).String.endsWith;
	});

	var es6_math_log2 = __commonjs(function (module) {
	// 20.2.2.22 Math.log2(x)
	var $export = ('default' in require$$0$6 ? require$$0$6['default'] : require$$0$6);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});
	});

	var log2 = __commonjs(function (module) {
	module.exports = ('default' in require$$0 ? require$$0['default'] : require$$0).Math.log2;
	});

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/**
	 * The base implementation of `_.toNumber` which doesn't ensure correct
	 * conversions of binary, hexadecimal, or octal string values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 */
	function baseToNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  return +value;
	}

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Built-in value references. */
	var Symbol$1 = root.Symbol;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
	var symbolToString = symbolProto ? symbolProto.toString : undefined;
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Creates a function that performs a mathematical operation on two values.
	 *
	 * @private
	 * @param {Function} operator The function to perform the operation.
	 * @param {number} [defaultValue] The value used for `undefined` arguments.
	 * @returns {Function} Returns the new mathematical operation function.
	 */
	function createMathOperation(operator, defaultValue) {
	  return function(value, other) {
	    var result;
	    if (value === undefined && other === undefined) {
	      return defaultValue;
	    }
	    if (value !== undefined) {
	      result = value;
	    }
	    if (other !== undefined) {
	      if (result === undefined) {
	        return other;
	      }
	      if (typeof value == 'string' || typeof other == 'string') {
	        value = baseToString(value);
	        other = baseToString(other);
	      } else {
	        value = baseToNumber(value);
	        other = baseToNumber(other);
	      }
	      result = operator(value, other);
	    }
	    return result;
	  };
	}

	/**
	 * Adds two numbers.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.4.0
	 * @category Math
	 * @param {number} augend The first number in an addition.
	 * @param {number} addend The second number in an addition.
	 * @returns {number} Returns the total.
	 * @example
	 *
	 * _.add(6, 4);
	 * // => 10
	 */
	var add = createMathOperation(function(augend, addend) {
	  return augend + addend;
	}, 0);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : baseSlice(array, start, end);
	}

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff';
	var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23';
	var rsComboSymbolsRange = '\\u20d0-\\u20f0';
	var rsVarRange = '\\ufe0e\\ufe0f';
	/** Used to compose unicode capture groups. */
	var rsZWJ = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasComplexSymbol = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

	/** Used to compose unicode character classes. */
	var rsAstralRange$1 = '\\ud800-\\udfff';
	var rsComboMarksRange$1 = '\\u0300-\\u036f\\ufe20-\\ufe23';
	var rsComboSymbolsRange$1 = '\\u20d0-\\u20f0';
	var rsVarRange$1 = '\\ufe0e\\ufe0f';
	var rsAstral = '[' + rsAstralRange$1 + ']';
	var rsCombo = '[' + rsComboMarksRange$1 + rsComboSymbolsRange$1 + ']';
	var rsFitz = '\\ud83c[\\udffb-\\udfff]';
	var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
	var rsNonAstral = '[^' + rsAstralRange$1 + ']';
	var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
	var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
	var rsZWJ$1 = '\\u200d';
	var reOptMod = rsModifier + '?';
	var rsOptVar = '[' + rsVarRange$1 + ']?';
	var rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
	var rsSeq = rsOptVar + reOptMod + rsOptJoin;
	var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return string.match(reComplexSymbol);
	}

	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
	function createCaseFirst(methodName) {
	  return function(string) {
	    string = toString(string);

	    var strSymbols = reHasComplexSymbol.test(string)
	      ? stringToArray(string)
	      : undefined;

	    var chr = strSymbols
	      ? strSymbols[0]
	      : string.charAt(0);

	    var trailing = strSymbols
	      ? castSlice(strSymbols, 1).join('')
	      : string.slice(1);

	    return chr[methodName]() + trailing;
	  };
	}

	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
	var upperFirst = createCaseFirst('toUpperCase');

	/**
	 * Converts the first character of `string` to upper case and the remaining
	 * to lower case.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to capitalize.
	 * @returns {string} Returns the capitalized string.
	 * @example
	 *
	 * _.capitalize('FRED');
	 * // => 'Fred'
	 */
	function capitalize(string) {
	  return upperFirst(toString(string).toLowerCase());
	}

	/**
	 * Creates an array with all falsey values removed. The values `false`, `null`,
	 * `0`, `""`, `undefined`, and `NaN` are falsey.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to compact.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.compact([0, 1, false, 2, '', 3]);
	 * // => [1, 2, 3]
	 */
	function compact(array) {
	  var index = -1,
	      length = array ? array.length : 0,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (value) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	var funcTag = '[object Function]';
	var genTag = '[object GeneratorFunction]';
	/** Used for built-in method references. */
	var objectProto$2 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$1 = objectProto$2.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString$1.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = Function.prototype.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString$1.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto$1.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$3.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
	}

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$4.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty$2.call(data, key);
	}

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/* Built-in method references that are verified to be native. */
	var Map$1 = getNative(root, 'Map');

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map$1 || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED$2);
	  return this;
	}

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return baseFindIndex(array, baseIsNaN, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to search.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to search.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/**
	 * Checks if a cache value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$2 = objectProto$5.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty$3.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString$2.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/** Built-in value references. */
	var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * Creates an array of `array` values not included in the other given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons. The order of result values is determined by the
	 * order they occur in the first array.
	 *
	 * **Note:** Unlike `_.pullAll`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.without, _.xor
	 * @example
	 *
	 * _.difference([2, 1], [2, 3]);
	 * // => [1]
	 */
	var difference = baseRest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
	    : [];
	});

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]';

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$3 = objectProto$6.toString;

	/**
	 * Checks if `value` is classified as a boolean primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	 * @example
	 *
	 * _.isBoolean(false);
	 * // => true
	 *
	 * _.isBoolean(null);
	 * // => false
	 */
	function isBoolean(value) {
	  return value === true || value === false ||
	    (isObjectLike(value) && objectToString$3.call(value) == boolTag);
	}

	/** `Object#toString` result references. */
	var numberTag = '[object Number]';

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$4 = objectProto$7.toString;

	/**
	 * Checks if `value` is classified as a `Number` primitive or object.
	 *
	 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	 * classified as numbers, use the `_.isFinite` method.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	 * @example
	 *
	 * _.isNumber(3);
	 * // => true
	 *
	 * _.isNumber(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isNumber(Infinity);
	 * // => true
	 *
	 * _.isNumber('3');
	 * // => false
	 */
	function isNumber(value) {
	  return typeof value == 'number' ||
	    (isObjectLike(value) && objectToString$4.call(value) == numberTag);
	}

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$5 = objectProto$8.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString$1(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString$5.call(value) == stringTag);
	}

	/**
	 * The base implementation of methods like `_.max` and `_.min` which accepts a
	 * `comparator` to determine the extremum value.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The iteratee invoked per iteration.
	 * @param {Function} comparator The comparator used to compare values.
	 * @returns {*} Returns the extremum value.
	 */
	function baseExtremum(array, iteratee, comparator) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    var value = array[index],
	        current = iteratee(value);

	    if (current != null && (computed === undefined
	          ? (current === current && !isSymbol(current))
	          : comparator(current, computed)
	        )) {
	      var computed = current,
	          result = value;
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.gt` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if `value` is greater than `other`,
	 *  else `false`.
	 */
	function baseGt(value, other) {
	  return value > other;
	}

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	/**
	 * Computes the maximum value of `array`. If `array` is empty or falsey,
	 * `undefined` is returned.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Math
	 * @param {Array} array The array to iterate over.
	 * @returns {*} Returns the maximum value.
	 * @example
	 *
	 * _.max([4, 2, 8, 6]);
	 * // => 8
	 *
	 * _.max([]);
	 * // => undefined
	 */
	function max(array) {
	  return (array && array.length)
	    ? baseExtremum(array, identity, baseGt)
	    : undefined;
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE$1 = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map$1 || (pairs.length < LARGE_ARRAY_SIZE$1 - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	var UNORDERED_COMPARE_FLAG$1 = 1;
	var PARTIAL_COMPARE_FLAG$2 = 2;
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG$2,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG$1) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	var UNORDERED_COMPARE_FLAG$2 = 1;
	var PARTIAL_COMPARE_FLAG$3 = 2;
	var boolTag$1 = '[object Boolean]';
	var dateTag = '[object Date]';
	var errorTag = '[object Error]';
	var mapTag = '[object Map]';
	var numberTag$1 = '[object Number]';
	var regexpTag = '[object RegExp]';
	var setTag = '[object Set]';
	var stringTag$1 = '[object String]';
	var symbolTag$1 = '[object Symbol]';
	var arrayBufferTag = '[object ArrayBuffer]';
	var dataViewTag = '[object DataView]';
	var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined;
	var symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag$1:
	    case dateTag:
	    case numberTag$1:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag$1:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG$3;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG$2;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag$1:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	/**
	 * Creates a function that invokes `func` with its first argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	var getPrototype = overArg(nativeGetPrototype, Object);

	/** Used for built-in method references. */
	var objectProto$10 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$10.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return object != null &&
	    (hasOwnProperty$5.call(object, key) ||
	      (typeof object == 'object' && key in object && getPrototype(object) === null));
	}

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	var baseKeys = overArg(nativeKeys, Object);

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString$1(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER$1 : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/** Used for built-in method references. */
	var objectProto$11 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$11;

	  return value === proto;
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG$4 = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG$4,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : baseHas(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	/** Used for built-in method references. */
	var objectProto$13 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$7 = objectProto$13.toString;

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString$7.call(value);
	}

	var mapTag$1 = '[object Map]';
	var objectTag$1 = '[object Object]';
	var promiseTag = '[object Promise]';
	var setTag$1 = '[object Set]';
	var weakMapTag = '[object WeakMap]';
	var dataViewTag$1 = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto$12 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$6 = objectProto$12.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView);
	var mapCtorString = toSource(Map$1);
	var promiseCtorString = toSource(Promise);
	var setCtorString = toSource(Set);
	var weakMapCtorString = toSource(WeakMap);
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
	    (Map$1 && getTag(new Map$1) != mapTag$1) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag$1) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString$6.call(value),
	        Ctor = result == objectTag$1 ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag$1;
	        case mapCtorString: return mapTag$1;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag$1;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	var getTag$1 = getTag;

	var argsTag$2 = '[object Arguments]';
	var arrayTag$1 = '[object Array]';
	var boolTag$2 = '[object Boolean]';
	var dateTag$1 = '[object Date]';
	var errorTag$1 = '[object Error]';
	var funcTag$1 = '[object Function]';
	var mapTag$2 = '[object Map]';
	var numberTag$2 = '[object Number]';
	var objectTag$2 = '[object Object]';
	var regexpTag$1 = '[object RegExp]';
	var setTag$2 = '[object Set]';
	var stringTag$2 = '[object String]';
	var weakMapTag$1 = '[object WeakMap]';
	var arrayBufferTag$1 = '[object ArrayBuffer]';
	var dataViewTag$2 = '[object DataView]';
	var float32Tag = '[object Float32Array]';
	var float64Tag = '[object Float64Array]';
	var int8Tag = '[object Int8Array]';
	var int16Tag = '[object Int16Array]';
	var int32Tag = '[object Int32Array]';
	var uint8Tag = '[object Uint8Array]';
	var uint8ClampedTag = '[object Uint8ClampedArray]';
	var uint16Tag = '[object Uint16Array]';
	var uint32Tag = '[object Uint32Array]';
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$1] =
	typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$2] =
	typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] =
	typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] =
	typedArrayTags[mapTag$2] = typedArrayTags[numberTag$2] =
	typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] =
	typedArrayTags[setTag$2] = typedArrayTags[stringTag$2] =
	typedArrayTags[weakMapTag$1] = false;

	/** Used for built-in method references. */
	var objectProto$14 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$8 = objectProto$14.toString;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString$8.call(value)];
	}

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG$1 = 2;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]';
	var arrayTag = '[object Array]';
	var objectTag = '[object Object]';
	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$9.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag$1(object);
	    objTag = objTag == argsTag$1 ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag$1(other);
	    othTag = othTag == argsTag$1 ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG$1)) {
	    var objIsWrapped = objIsObj && hasOwnProperty$4.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty$4.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	var UNORDERED_COMPARE_FLAG = 1;
	var PARTIAL_COMPARE_FLAG = 2;
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	var reLeadingDot = /^\./;
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
	var reIsPlainProp = /^\w*$/;
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	/** Used as references for various `Number` constants. */
	var INFINITY$1 = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
	}

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var result,
	      index = -1,
	      length = path.length;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isString$1(object) || isArguments(object));
	}

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	var UNORDERED_COMPARE_FLAG$3 = 1;
	var PARTIAL_COMPARE_FLAG$5 = 2;
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG$3 | PARTIAL_COMPARE_FLAG$5);
	  };
	}

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	/**
	 * The base implementation of `_.lt` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if `value` is less than `other`,
	 *  else `false`.
	 */
	function baseLt(value, other) {
	  return value < other;
	}

	/**
	 * This method is like `_.min` except that it accepts `iteratee` which is
	 * invoked for each element in `array` to generate the criterion by which
	 * the value is ranked. The iteratee is invoked with one argument: (value).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Math
	 * @param {Array} array The array to iterate over.
	 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	 * @returns {*} Returns the minimum value.
	 * @example
	 *
	 * var objects = [{ 'n': 1 }, { 'n': 2 }];
	 *
	 * _.minBy(objects, function(o) { return o.n; });
	 * // => { 'n': 1 }
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.minBy(objects, 'n');
	 * // => { 'n': 1 }
	 */
	function minBy(array, iteratee) {
	  return (array && array.length)
	    ? baseExtremum(array, baseIteratee(iteratee, 2), baseLt)
	    : undefined;
	}

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT$1 = 'Expected a function';

	/**
	 * Creates a function that negates the result of the predicate `func`. The
	 * `func` predicate is invoked with the `this` binding and arguments of the
	 * created function.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {Function} predicate The predicate to negate.
	 * @returns {Function} Returns the new negated function.
	 * @example
	 *
	 * function isEven(n) {
	 *   return n % 2 == 0;
	 * }
	 *
	 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	 * // => [1, 3, 5]
	 */
	function negate(predicate) {
	  if (typeof predicate != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT$1);
	  }
	  return function() {
	    var args = arguments;
	    switch (args.length) {
	      case 0: return !predicate.call(this);
	      case 1: return !predicate.call(this, args[0]);
	      case 2: return !predicate.call(this, args[0], args[1]);
	      case 3: return !predicate.call(this, args[0], args[1], args[2]);
	    }
	    return !predicate.apply(this, args);
	  };
	}

	/**
	 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property identifiers to pick from.
	 * @param {Function} predicate The function invoked per property.
	 * @returns {Object} Returns the new object.
	 */
	function basePickBy(object, props, predicate) {
	  var index = -1,
	      length = props.length,
	      result = {};

	  while (++index < length) {
	    var key = props[index],
	        value = object[key];

	    if (predicate(value, key)) {
	      result[key] = value;
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols$1 ? overArg(nativeGetSymbols$1, Object) : stubArray;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbol properties
	 * of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};

	/** Built-in value references. */
	var Reflect = root.Reflect;

	/**
	 * Converts `iterator` to an array.
	 *
	 * @private
	 * @param {Object} iterator The iterator to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function iteratorToArray(iterator) {
	  var data,
	      result = [];

	  while (!(data = iterator.next()).done) {
	    result.push(data.value);
	  }
	  return result;
	}

	/** Used for built-in method references. */
	var objectProto$16 = Object.prototype;

	/** Built-in value references. */
	var enumerate = Reflect ? Reflect.enumerate : undefined;
	var propertyIsEnumerable$1 = objectProto$16.propertyIsEnumerable;
	/**
	 * The base implementation of `_.keysIn` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  object = object == null ? object : Object(object);

	  var result = [];
	  for (var key in object) {
	    result.push(key);
	  }
	  return result;
	}

	// Fallback for IE < 9 with es6-shim.
	if (enumerate && !propertyIsEnumerable$1.call({ 'valueOf': 1 }, 'valueOf')) {
	  baseKeysIn = function(object) {
	    return iteratorToArray(enumerate(object));
	  };
	}

	var baseKeysIn$1 = baseKeysIn;

	/** Used for built-in method references. */
	var objectProto$15 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$15.hasOwnProperty;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  var index = -1,
	      isProto = isPrototype(object),
	      props = baseKeysIn$1(object),
	      propsLength = props.length,
	      indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  while (++index < propsLength) {
	    var key = props[index];
	    if (!(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty$6.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}

	/**
	 * Creates an object composed of the `object` properties `predicate` returns
	 * truthy for. The predicate is invoked with two arguments: (value, key).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Function} [predicate=_.identity] The function invoked per property.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.pickBy(object, _.isNumber);
	 * // => { 'a': 1, 'c': 3 }
	 */
	function pickBy(object, predicate) {
	  return object == null ? {} : basePickBy(object, getAllKeysIn(object), baseIteratee(predicate));
	}

	/**
	 * The opposite of `_.pickBy`; this method creates an object composed of
	 * the own and inherited enumerable string keyed properties of `object` that
	 * `predicate` doesn't return truthy for. The predicate is invoked with two
	 * arguments: (value, key).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Function} [predicate=_.identity] The function invoked per property.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.omitBy(object, _.isNumber);
	 * // => { 'b': '2' }
	 */
	function omitBy(object, predicate) {
	  return pickBy(object, negate(baseIteratee(predicate)));
	}

	/**
	 * This function is like `baseIndexOf` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOfWith(array, value, fromIndex, comparator) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (comparator(array[index], value)) {
	      return index;
	    }
	  }
	  return -1;
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	/** Used for built-in method references. */
	var arrayProto$1 = Array.prototype;

	/** Built-in value references. */
	var splice$1 = arrayProto$1.splice;

	/**
	 * The base implementation of `_.pullAllBy` without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to remove.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns `array`.
	 */
	function basePullAll(array, values, iteratee, comparator) {
	  var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
	      index = -1,
	      length = values.length,
	      seen = array;

	  if (array === values) {
	    values = copyArray(values);
	  }
	  if (iteratee) {
	    seen = arrayMap(array, baseUnary(iteratee));
	  }
	  while (++index < length) {
	    var fromIndex = 0,
	        value = values[index],
	        computed = iteratee ? iteratee(value) : value;

	    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
	      if (seen !== array) {
	        splice$1.call(seen, fromIndex, 1);
	      }
	      splice$1.call(array, fromIndex, 1);
	    }
	  }
	  return array;
	}

	/**
	 * This method is like `_.pull` except that it accepts an array of values to remove.
	 *
	 * **Note:** Unlike `_.difference`, this method mutates `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Array
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to remove.
	 * @returns {Array} Returns `array`.
	 * @example
	 *
	 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	 *
	 * _.pullAll(array, ['a', 'c']);
	 * console.log(array);
	 * // => ['b', 'b']
	 */
	function pullAll(array, values) {
	  return (array && array.length && values && values.length)
	    ? basePullAll(array, values)
	    : array;
	}

	/**
	 * Removes all given values from `array` using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
	 * to remove elements from an array by predicate.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.0.0
	 * @category Array
	 * @param {Array} array The array to modify.
	 * @param {...*} [values] The values to remove.
	 * @returns {Array} Returns `array`.
	 * @example
	 *
	 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	 *
	 * _.pull(array, 'a', 'c');
	 * console.log(array);
	 * // => ['b', 'b']
	 */
	var pull = baseRest(pullAll);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeFloor = Math.floor;
	var nativeRandom$1 = Math.random;
	/**
	 * The base implementation of `_.random` without support for returning
	 * floating-point numbers.
	 *
	 * @private
	 * @param {number} lower The lower bound.
	 * @param {number} upper The upper bound.
	 * @returns {number} Returns the random number.
	 */
	function baseRandom(lower, upper) {
	  return lower + nativeFloor(nativeRandom$1() * (upper - lower + 1));
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/** Used as references for various `Number` constants. */
	var NAN$1 = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN$1;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN$1 : +value);
	}

	var INFINITY$2 = 1 / 0;
	var MAX_INTEGER = 1.7976931348623157e+308;
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY$2 || value === -INFINITY$2) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	/** Built-in method references without a dependency on `root`. */
	var freeParseFloat = parseFloat;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;
	var nativeRandom = Math.random;
	/**
	 * Produces a random number between the inclusive `lower` and `upper` bounds.
	 * If only one argument is provided a number between `0` and the given number
	 * is returned. If `floating` is `true`, or either `lower` or `upper` are
	 * floats, a floating-point number is returned instead of an integer.
	 *
	 * **Note:** JavaScript follows the IEEE-754 standard for resolving
	 * floating-point values which can produce unexpected results.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.7.0
	 * @category Number
	 * @param {number} [lower=0] The lower bound.
	 * @param {number} [upper=1] The upper bound.
	 * @param {boolean} [floating] Specify returning a floating-point number.
	 * @returns {number} Returns the random number.
	 * @example
	 *
	 * _.random(0, 5);
	 * // => an integer between 0 and 5
	 *
	 * _.random(5);
	 * // => also an integer between 0 and 5
	 *
	 * _.random(5, true);
	 * // => a floating-point number between 0 and 5
	 *
	 * _.random(1.2, 5.2);
	 * // => a floating-point number between 1.2 and 5.2
	 */
	function random(lower, upper, floating) {
	  if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
	    upper = floating = undefined;
	  }
	  if (floating === undefined) {
	    if (typeof upper == 'boolean') {
	      floating = upper;
	      upper = undefined;
	    }
	    else if (typeof lower == 'boolean') {
	      floating = lower;
	      lower = undefined;
	    }
	  }
	  if (lower === undefined && upper === undefined) {
	    lower = 0;
	    upper = 1;
	  }
	  else {
	    lower = toFinite(lower);
	    if (upper === undefined) {
	      upper = lower;
	      lower = 0;
	    } else {
	      upper = toFinite(upper);
	    }
	  }
	  if (lower > upper) {
	    var temp = lower;
	    lower = upper;
	    upper = temp;
	  }
	  if (floating || lower % 1 || upper % 1) {
	    var rand = nativeRandom();
	    return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
	  }
	  return baseRandom(lower, upper);
	}

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return arrayMap(props, function(key) {
	    return object[key];
	  });
	}

	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object ? baseValues(object, keys(object)) : [];
	}

	/**
	 * Gets a random element from `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.0.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to sample.
	 * @returns {*} Returns the random element.
	 * @example
	 *
	 * _.sample([1, 2, 3, 4]);
	 * // => 2
	 */
	function sample(collection) {
	  var array = isArrayLike(collection) ? collection : values(collection),
	      length = array.length;

	  return length > 0 ? array[baseRandom(0, length - 1)] : undefined;
	}

	/**
	 * The base implementation of `_.sum` and `_.sumBy` without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {number} Returns the sum.
	 */
	function baseSum(array, iteratee) {
	  var result,
	      index = -1,
	      length = array.length;

	  while (++index < length) {
	    var current = iteratee(array[index]);
	    if (current !== undefined) {
	      result = result === undefined ? current : (result + current);
	    }
	  }
	  return result;
	}

	/**
	 * Computes the sum of the values in `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.4.0
	 * @category Math
	 * @param {Array} array The array to iterate over.
	 * @returns {number} Returns the sum.
	 * @example
	 *
	 * _.sum([4, 2, 8, 6]);
	 * // => 20
	 */
	function sum(array) {
	  return (array && array.length)
	    ? baseSum(array, identity)
	    : 0;
	}

	/**
	 * This method is like `_.sum` except that it accepts `iteratee` which is
	 * invoked for each element in `array` to generate the value to be summed.
	 * The iteratee is invoked with one argument: (value).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Math
	 * @param {Array} array The array to iterate over.
	 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	 * @returns {number} Returns the sum.
	 * @example
	 *
	 * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
	 *
	 * _.sumBy(objects, function(o) { return o.n; });
	 * // => 20
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.sumBy(objects, 'n');
	 * // => 20
	 */
	function sumBy(array, iteratee) {
	  return (array && array.length)
	    ? baseSum(array, baseIteratee(iteratee, 2))
	    : 0;
	}

	/** Used to generate unique IDs. */
	var idCounter = 0;

	/**
	 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {string} [prefix=''] The value to prefix the ID with.
	 * @returns {string} Returns the unique ID.
	 * @example
	 *
	 * _.uniqueId('contact_');
	 * // => 'contact_104'
	 *
	 * _.uniqueId();
	 * // => '105'
	 */
	function uniqueId(prefix) {
	  var id = ++idCounter;
	  return toString(prefix) + id;
	}

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}

	/** Used as references for various `Number` constants. */
	var INFINITY$3 = 1 / 0;

	/**
	 * Creates a set object of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY$3) ? noop : function(values) {
	  return new Set(values);
	};

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE$2 = 200;

	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;

	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE$2) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	/**
	 * This method is like `_.uniq` except that it accepts `iteratee` which is
	 * invoked for each element in `array` to generate the criterion by which
	 * uniqueness is computed. The iteratee is invoked with one argument: (value).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee=_.identity]
	 *  The iteratee invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 * @example
	 *
	 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
	 * // => [2.1, 1.2]
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	 * // => [{ 'x': 1 }, { 'x': 2 }]
	 */
	function uniqBy(array, iteratee) {
	  return (array && array.length)
	    ? baseUniq(array, baseIteratee(iteratee, 2))
	    : [];
	}



	var require$$2$9 = Object.freeze({
		add: add,
		capitalize: capitalize,
		compact: compact,
		difference: difference,
		isArrayLike: isArrayLike,
		isBoolean: isBoolean,
		isFunction: isFunction,
		isObject: isObject,
		isNumber: isNumber,
		isString: isString$1,
		max: max,
		minBy: minBy,
		omitBy: omitBy,
		pickBy: pickBy,
		pull: pull,
		random: random,
		sample: sample,
		sum: sum,
		sumBy: sumBy,
		uniqueId: uniqueId,
		uniqBy: uniqBy,
		values: values
	});

	// Settings for CSVisFrame are stored here.
	// Users can supply custom settings through CSVisFrame.config() function.

	var namespace = 'va';
	var speed = 1200;
	var ctx = {};
	var codemirror = {};

	function config(obj) {
	    if (obj.namespace) {
	        namespace = obj.namespace;
	    }
	    if (obj.containers) {
	        Object.assign(ctx, obj.containers);
	    }
	    if (obj.codemirror) {
	        codemirror = obj.codemirror;
	    }
	    if (obj.speed) {
	        speed = obj.speed;
	    }
	}

	var index_min = __commonjs(function (module, exports) {
	!function () {
	  function t(t, e) {
	    return e = { exports: {} }, t(e, e.exports), e.exports;
	  }function e(t) {
	    var e = function (r) {
	      return t.length > 1 ? function () {
	        var n = r ? r.concat() : [];return n.push.apply(n, arguments) < t.length && arguments.length ? e.call(this, n) : t.apply(this, n);
	      } : t;
	    };return e();
	  }function r() {
	    var t = Ar(arguments);return function (e) {
	      return t.reduce(function (t, e) {
	        return e(t);
	      }, e);
	    };
	  }function n(t) {
	    return function () {
	      return !t.apply(this, arguments);
	    };
	  }function o(t) {
	    return t[0];
	  }function i(t) {
	    return o(t.slice(-1));
	  }function u(t) {
	    return t.reduce(function (t, e) {
	      return t.concat(e);
	    });
	  }function a(t, e) {
	    return t.includes(e);
	  }function s(t, e) {
	    var r = u(Ar(arguments, 1));return t.filter(function (t) {
	      return n(a)(r, t);
	    });
	  }function c(t) {
	    return Array.from(t.keys());
	  }function f(t) {
	    return p("string" == typeof t ? document.querySelectorAll(t) : t);
	  }function p(t) {
	    return Array.isArray(t) ? t : t && "object" == typeof t && "number" == typeof t.length ? Array.from(t) : t.nodeType ? [t] : t.get();
	  }function l(t) {
	    return new Map(t).set("el", f(t.get("el")));
	  }function d(t) {
	    var e = new Map(t);return Rr(t).forEach(function (t) {
	      return e.set(t, e.get(t).slice().reverse());
	    }), e;
	  }function h(t) {
	    return "reverse" == t.get("direction") ? d(t) : t;
	  }function y(t) {
	    var e = new Map(tn);e.delete(t), tn = e;
	  }function v(t) {
	    var e = Fr(t),
	        r = Ur(e),
	        n = en(e.get("el")),
	        o = new Map(),
	        i = function t(i) {
	      if (tn.has(n)) {
	        o.has("start") || o.set("start", i), o.set("elapsed", i - o.get("start"));var u = o.get("elapsed") < e.get("duration"),
	            a = r.map(u ? Gr(e, o.get("elapsed")) : Yr(e));tn.get(n).forEach(Xr(r, a)), u ? requestAnimationFrame(t) : Jr(n, e);
	      }
	    };Qr(e), Hr(i, e);
	  }function b(t) {
	    var e = f(t),
	        r = new Map(tn);r.forEach(function (t, n) {
	      var o = s(t, e);o.length ? r.set(n, o) : r.delete(n);
	    }), tn = r;
	  }function g(t) {
	    return !!t && "object" == typeof t;
	  }function m(t) {
	    return "string" == typeof t || !pn(t) && g(t) && hn.call(t) == ln;
	  }function x(t) {
	    var e = typeof t;return !!t && ("object" == e || "function" == e);
	  }function j(t) {
	    var e = x(t) ? xn.call(t) : "";return e == bn || e == gn;
	  }function _(t) {
	    return function (e) {
	      return null == e ? void 0 : e[t];
	    };
	  }function w(t) {
	    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= wn;
	  }function O(t) {
	    return null != t && w(_n(t)) && !j(t);
	  }function k(t, e, r, n) {
	    var o = -1,
	        i = t ? t.length : 0;for (n && i && (r = t[++o]); ++o < i;) r = e(r, t[o], o, t);return r;
	  }function A(t) {
	    return function (e) {
	      return null == t ? void 0 : t[e];
	    };
	  }function E(t) {
	    return "symbol" == typeof t || g(t) && zn.call(t) == Cn;
	  }function M(t) {
	    if ("string" == typeof t) return t;if (E(t)) return Nn ? Nn.call(t) : "";var e = t + "";return "0" == e && 1 / t == -Dn ? "-0" : e;
	  }function I(t) {
	    return null == t ? "" : M(t);
	  }function P(t) {
	    return t = I(t), t && t.replace(Fn, An).replace(Wn, "");
	  }function C(t, e, r) {
	    return t = I(t), e = r ? void 0 : e, void 0 === e && (e = Ao.test(t) ? ko : Ln), t.match(e) || [];
	  }function S(t) {
	    return function (e) {
	      return k(C(P(e).replace(Mo, "")), t, "");
	    };
	  }function z() {
	    this.__data__ = [];
	  }function D(t, e) {
	    return t === e || t !== t && e !== e;
	  }function T(t, e) {
	    for (var r = t.length; r--;) if (D(t[r][0], e)) return r;return -1;
	  }function N(t) {
	    var e = this.__data__,
	        r = T(e, t);if (r < 0) return !1;var n = e.length - 1;return r == n ? e.pop() : So.call(e, r, 1), !0;
	  }function F(t) {
	    var e = this.__data__,
	        r = T(e, t);return r < 0 ? void 0 : e[r][1];
	  }function R(t) {
	    return T(this.__data__, t) > -1;
	  }function U(t, e) {
	    var r = this.__data__,
	        n = T(r, t);return n < 0 ? r.push([t, e]) : r[n][1] = e, this;
	  }function B(t) {
	    var e = -1,
	        r = t ? t.length : 0;for (this.clear(); ++e < r;) {
	      var n = t[e];this.set(n[0], n[1]);
	    }
	  }function W() {
	    this.__data__ = new B();
	  }function L(t) {
	    return this.__data__.delete(t);
	  }function V(t) {
	    return this.__data__.get(t);
	  }function q(t) {
	    return this.__data__.has(t);
	  }function Q(t) {
	    var e = !1;if (null != t && "function" != typeof t.toString) try {
	      e = !!(t + "");
	    } catch (t) {}return e;
	  }function $(t) {
	    return !!Do && Do in t;
	  }function Z(t) {
	    if (null != t) {
	      try {
	        return To.call(t);
	      } catch (t) {}try {
	        return t + "";
	      } catch (t) {}
	    }return "";
	  }function G(t) {
	    if (!x(t) || $(t)) return !1;var e = j(t) || Q(t) ? Wo : Fo;return e.test(Z(t));
	  }function Y(t, e) {
	    return null == t ? void 0 : t[e];
	  }function X(t, e) {
	    var r = Y(t, e);return G(r) ? r : void 0;
	  }function H() {
	    this.__data__ = Vo ? Vo(null) : {};
	  }function J(t) {
	    return this.has(t) && delete this.__data__[t];
	  }function K(t) {
	    var e = this.__data__;if (Vo) {
	      var r = e[t];return r === qo ? void 0 : r;
	    }return $o.call(e, t) ? e[t] : void 0;
	  }function tt(t) {
	    var e = this.__data__;return Vo ? void 0 !== e[t] : Go.call(e, t);
	  }function et(t, e) {
	    var r = this.__data__;return r[t] = Vo && void 0 === e ? Yo : e, this;
	  }function rt(t) {
	    var e = -1,
	        r = t ? t.length : 0;for (this.clear(); ++e < r;) {
	      var n = t[e];this.set(n[0], n[1]);
	    }
	  }function nt() {
	    this.__data__ = { hash: new rt(), map: new (Lo || B)(), string: new rt() };
	  }function ot(t) {
	    var e = typeof t;return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
	  }function it(t, e) {
	    var r = t.__data__;return ot(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
	  }function ut(t) {
	    return it(this, t).delete(t);
	  }function at(t) {
	    return it(this, t).get(t);
	  }function st(t) {
	    return it(this, t).has(t);
	  }function ct(t, e) {
	    return it(this, t).set(t, e), this;
	  }function ft(t) {
	    var e = -1,
	        r = t ? t.length : 0;for (this.clear(); ++e < r;) {
	      var n = t[e];this.set(n[0], n[1]);
	    }
	  }function pt(t, e) {
	    var r = this.__data__;if (r instanceof B) {
	      var n = r.__data__;if (!Lo || n.length < Xo - 1) return n.push([t, e]), this;r = this.__data__ = new ft(n);
	    }return r.set(t, e), this;
	  }function lt(t) {
	    this.__data__ = new B(t);
	  }function dt(t) {
	    return this.__data__.set(t, Ho), this;
	  }function ht(t) {
	    return this.__data__.has(t);
	  }function yt(t) {
	    var e = -1,
	        r = t ? t.length : 0;for (this.__data__ = new ft(); ++e < r;) this.add(t[e]);
	  }function vt(t, e) {
	    for (var r = -1, n = t ? t.length : 0; ++r < n;) if (e(t[r], r, t)) return !0;return !1;
	  }function bt(t, e, r, n, o, i) {
	    var u = o & Ko,
	        a = t.length,
	        s = e.length;if (a != s && !(u && s > a)) return !1;var c = i.get(t);if (c && i.get(e)) return c == e;var f = -1,
	        p = !0,
	        l = o & Jo ? new yt() : void 0;for (i.set(t, e), i.set(e, t); ++f < a;) {
	      var d = t[f],
	          h = e[f];if (n) var y = u ? n(h, d, f, e, t, i) : n(d, h, f, t, e, i);if (void 0 !== y) {
	        if (y) continue;p = !1;break;
	      }if (l) {
	        if (!vt(e, function (t, e) {
	          if (!l.has(e) && (d === t || r(d, t, n, o, i))) return l.add(e);
	        })) {
	          p = !1;break;
	        }
	      } else if (d !== h && !r(d, h, n, o, i)) {
	        p = !1;break;
	      }
	    }return i.delete(t), i.delete(e), p;
	  }function gt(t) {
	    var e = -1,
	        r = Array(t.size);return t.forEach(function (t, n) {
	      r[++e] = [n, t];
	    }), r;
	  }function mt(t) {
	    var e = -1,
	        r = Array(t.size);return t.forEach(function (t) {
	      r[++e] = t;
	    }), r;
	  }function xt(t, e, r, n, o, i, u) {
	    switch (r) {case di:
	        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;t = t.buffer, e = e.buffer;case li:
	        return !(t.byteLength != e.byteLength || !n(new ti(t), new ti(e)));case ni:case oi:case ai:
	        return D(+t, +e);case ii:
	        return t.name == e.name && t.message == e.message;case si:case fi:
	        return t == e + "";case ui:
	        var a = gt;case ci:
	        var s = i & ri;if (a || (a = mt), t.size != e.size && !s) return !1;var c = u.get(t);if (c) return c == e;i |= ei, u.set(t, e);var f = bt(a(t), a(e), n, o, i, u);return u.delete(t), f;case pi:
	        if (yi) return yi.call(t) == yi.call(e);}return !1;
	  }function jt(t, e) {
	    return function (r) {
	      return t(e(r));
	    };
	  }function _t(t, e) {
	    return null != t && (mi.call(t, e) || "object" == typeof t && e in t && null === bi(t));
	  }function wt(t, e) {
	    for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);return n;
	  }function Ot(t) {
	    return g(t) && O(t);
	  }function kt(t) {
	    return Ot(t) && Oi.call(t, "callee") && (!Ai.call(t, "callee") || ki.call(t) == _i);
	  }function At(t) {
	    var e = t ? t.length : void 0;return w(e) && (pn(t) || m(t) || kt(t)) ? wt(e, String) : null;
	  }function Et(t, e) {
	    return e = null == e ? Ei : e, !!e && ("number" == typeof t || Mi.test(t)) && t > -1 && t % 1 == 0 && t < e;
	  }function Mt(t) {
	    var e = t && t.constructor,
	        r = "function" == typeof e && e.prototype || Ii;return t === r;
	  }function It(t) {
	    var e = Mt(t);if (!e && !O(t)) return ji(t);var r = At(t),
	        n = !!r,
	        o = r || [],
	        i = o.length;for (var u in t) !_t(t, u) || n && ("length" == u || Et(u, i)) || e && "constructor" == u || o.push(u);return o;
	  }function Pt(t, e, r, n, o, i) {
	    var u = o & Pi,
	        a = It(t),
	        s = a.length,
	        c = It(e),
	        f = c.length;if (s != f && !u) return !1;for (var p = s; p--;) {
	      var l = a[p];if (!(u ? l in e : _t(e, l))) return !1;
	    }var d = i.get(t);if (d && i.get(e)) return d == e;var h = !0;i.set(t, e), i.set(e, t);for (var y = u; ++p < s;) {
	      l = a[p];var v = t[l],
	          b = e[l];if (n) var g = u ? n(b, v, l, e, t, i) : n(v, b, l, t, e, i);if (!(void 0 === g ? v === b || r(v, b, n, o, i) : g)) {
	        h = !1;break;
	      }y || (y = "constructor" == l);
	    }if (h && !y) {
	      var m = t.constructor,
	          x = e.constructor;m != x && "constructor" in t && "constructor" in e && !("function" == typeof m && m instanceof m && "function" == typeof x && x instanceof x) && (h = !1);
	    }return i.delete(t), i.delete(e), h;
	  }function Ct(t) {
	    return Ni.call(t);
	  }function St(t) {
	    return g(t) && w(t.length) && !!_u[Ou.call(t)];
	  }function zt(t) {
	    return function (e) {
	      return t(e);
	    };
	  }function Dt(t, e, r, n, o, i) {
	    var u = pn(t),
	        a = pn(e),
	        s = Du,
	        c = Du;u || (s = Hi(t), s = s == zu ? Tu : s), a || (c = Hi(e), c = c == zu ? Tu : c);var f = s == Tu && !Q(t),
	        p = c == Tu && !Q(e),
	        l = s == c;if (l && !f) return i || (i = new lt()), u || Cu(t) ? bt(t, e, r, n, o, i) : xt(t, e, s, r, n, o, i);if (!(o & Su)) {
	      var d = f && Fu.call(t, "__wrapped__"),
	          h = p && Fu.call(e, "__wrapped__");if (d || h) {
	        var y = d ? t.value() : t,
	            v = h ? e.value() : e;return i || (i = new lt()), r(y, v, n, o, i);
	      }
	    }return !!l && (i || (i = new lt()), Pt(t, e, r, n, o, i));
	  }function Tt(t, e, r, n, o) {
	    return t === e || (null == t || null == e || !x(t) && !g(e) ? t !== t && e !== e : Dt(t, e, Tt, r, n, o));
	  }function Nt(t, e, r, n) {
	    var o = r.length,
	        i = o,
	        u = !n;if (null == t) return !i;for (t = Object(t); o--;) {
	      var a = r[o];if (u && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1;
	    }for (; ++o < i;) {
	      a = r[o];var s = a[0],
	          c = t[s],
	          f = a[1];if (u && a[2]) {
	        if (void 0 === c && !(s in t)) return !1;
	      } else {
	        var p = new lt();if (n) var l = n(c, f, s, t, e, p);if (!(void 0 === l ? Tt(f, c, n, Ru | Uu, p) : l)) return !1;
	      }
	    }return !0;
	  }function Ft(t) {
	    return t === t && !x(t);
	  }function Rt(t) {
	    for (var e = It(t), r = e.length; r--;) {
	      var n = e[r],
	          o = t[n];e[r] = [n, o, Ft(o)];
	    }return e;
	  }function Ut(t, e) {
	    return function (r) {
	      return null != r && r[t] === e && (void 0 !== e || t in Object(r));
	    };
	  }function Bt(t) {
	    var e = Rt(t);return 1 == e.length && e[0][2] ? Ut(e[0][0], e[0][1]) : function (r) {
	      return r === t || Nt(r, t, e);
	    };
	  }function Wt(t, e) {
	    if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(Bu);var r = function () {
	      var n = arguments,
	          o = e ? e.apply(this, n) : n[0],
	          i = r.cache;if (i.has(o)) return i.get(o);var u = t.apply(this, n);return r.cache = i.set(o, u), u;
	    };return r.cache = new (Wt.Cache || ft)(), r;
	  }function Lt(t) {
	    return pn(t) ? t : qu(t);
	  }function Vt(t, e) {
	    if (pn(t)) return !1;var r = typeof t;return !("number" != r && "symbol" != r && "boolean" != r && null != t && !E(t)) || $u.test(t) || !Qu.test(t) || null != e && t in Object(e);
	  }function qt(t) {
	    if ("string" == typeof t || E(t)) return t;var e = t + "";return "0" == e && 1 / t == -Zu ? "-0" : e;
	  }function Qt(t, e) {
	    e = Vt(e, t) ? [e] : Lt(e);for (var r = 0, n = e.length; null != t && r < n;) t = t[qt(e[r++])];return r && r == n ? t : void 0;
	  }function $t(t, e, r) {
	    var n = null == t ? void 0 : Qt(t, e);return void 0 === n ? r : n;
	  }function Zt(t, e) {
	    return null != t && e in Object(t);
	  }function Gt(t, e, r) {
	    e = Vt(e, t) ? [e] : Lt(e);for (var n, o = -1, i = e.length; ++o < i;) {
	      var u = qt(e[o]);if (!(n = null != t && r(t, u))) break;t = t[u];
	    }if (n) return n;var i = t ? t.length : 0;return !!i && w(i) && Et(u, i) && (pn(t) || m(t) || kt(t));
	  }function Yt(t, e) {
	    return null != t && Gt(t, e, Zt);
	  }function Xt(t, e) {
	    return Vt(t) && Ft(e) ? Ut(qt(t), e) : function (r) {
	      var n = $t(r, t);return void 0 === n && n === e ? Yt(r, t) : Tt(e, n, void 0, Gu | Yu);
	    };
	  }function Ht(t) {
	    return t;
	  }function Jt(t) {
	    return function (e) {
	      return Qt(e, t);
	    };
	  }function Kt(t) {
	    return Vt(t) ? _(qt(t)) : Jt(t);
	  }function te(t) {
	    return "function" == typeof t ? t : null == t ? Ht : "object" == typeof t ? pn(t) ? Xt(t[0], t[1]) : Bt(t) : Kt(t);
	  }function ee(t, e, r) {
	    for (var n = -1, o = e.length, i = {}; ++n < o;) {
	      var u = e[n],
	          a = t[u];r(a, u) && (i[u] = a);
	    }return i;
	  }function re(t, e) {
	    for (var r = -1, n = e.length, o = t.length; ++r < n;) t[o + r] = e[r];return t;
	  }function ne(t, e, r) {
	    var n = e(t);return pn(t) ? n : re(n, r(t));
	  }function oe() {
	    return [];
	  }function ie(t) {
	    for (var e, r = []; !(e = t.next()).done;) r.push(e.value);return r;
	  }function ue(t) {
	    t = null == t ? t : Object(t);var e = [];for (var r in t) e.push(r);return e;
	  }function ae(t) {
	    for (var e = -1, r = Mt(t), n = oa(t), o = n.length, i = At(t), u = !!i, a = i || [], s = a.length; ++e < o;) {
	      var c = n[e];u && ("length" == c || Et(c, s)) || "constructor" == c && (r || !ua.call(t, c)) || a.push(c);
	    }return a;
	  }function se(t) {
	    return ne(t, ae, Ku);
	  }function ce(t, e) {
	    return null == t ? {} : ee(t, se(t), te(e));
	  }function fe(t, e, r) {
	    var n = t[e];ca.call(t, e) && D(n, r) && (void 0 !== r || e in t) || (t[e] = r);
	  }function pe(t, e, r, n) {
	    r || (r = {});for (var o = -1, i = e.length; ++o < i;) {
	      var u = e[o],
	          a = n ? n(r[u], t[u], u, r, t) : void 0;fe(r, u, void 0 === a ? t[u] : a);
	    }return r;
	  }function le(t, e, r) {
	    switch (r.length) {case 0:
	        return t.call(e);case 1:
	        return t.call(e, r[0]);case 2:
	        return t.call(e, r[0], r[1]);case 3:
	        return t.call(e, r[0], r[1], r[2]);}return t.apply(e, r);
	  }function de(t, e) {
	    return e = fa(void 0 === e ? t.length - 1 : e, 0), function () {
	      for (var r = arguments, n = -1, o = fa(r.length - e, 0), i = Array(o); ++n < o;) i[n] = r[e + n];n = -1;for (var u = Array(e + 1); ++n < e;) u[n] = r[n];return u[e] = i, le(t, this, u);
	    };
	  }function he(t, e, r) {
	    if (!x(r)) return !1;var n = typeof e;return !!("number" == n ? O(r) && Et(e, r.length) : "string" == n && e in r) && D(r[e], t);
	  }function ye(t) {
	    return de(function (e, r) {
	      var n = -1,
	          o = r.length,
	          i = o > 1 ? r[o - 1] : void 0,
	          u = o > 2 ? r[2] : void 0;for (i = t.length > 3 && "function" == typeof i ? (o--, i) : void 0, u && he(r[0], r[1], u) && (i = o < 3 ? void 0 : i, o = 1), e = Object(e); ++n < o;) {
	        var a = r[n];a && t(e, a, n, i);
	      }return e;
	    });
	  }function ve(t) {
	    for (var e = -1, r = t ? t.length : 0, n = 0, o = []; ++e < r;) {
	      var i = t[e];i && (o[n++] = i);
	    }return o;
	  }function be(t) {
	    return void 0 === t;
	  }function ge(t) {
	    if ("function" != typeof t) throw new TypeError(Aa);return function () {
	      var e = arguments;switch (e.length) {case 0:
	          return !t.call(this);case 1:
	          return !t.call(this, e[0]);case 2:
	          return !t.call(this, e[0], e[1]);case 3:
	          return !t.call(this, e[0], e[1], e[2]);}return !t.apply(this, e);
	    };
	  }function me(t, e) {
	    return ce(t, ge(te(e)));
	  }function xe(t, e) {
	    for (var r = -1, n = t ? t.length : 0; ++r < n && e(t[r], r, t) !== !1;);return t;
	  }function je(t, e) {
	    return t && pe(e, It(e), t);
	  }function _e(t, e) {
	    if (e) return t.slice();var r = new t.constructor(t.length);return t.copy(r), r;
	  }function we(t, e) {
	    var r = -1,
	        n = t.length;for (e || (e = Array(n)); ++r < n;) e[r] = t[r];return e;
	  }function Oe(t, e) {
	    return pe(t, Hu(t), e);
	  }function ke(t) {
	    return ne(t, It, Hu);
	  }function Ae(t) {
	    var e = t.length,
	        r = t.constructor(e);return e && "string" == typeof t[0] && Pa.call(t, "index") && (r.index = t.index, r.input = t.input), r;
	  }function Ee(t) {
	    var e = new t.constructor(t.byteLength);return new ti(e).set(new ti(t)), e;
	  }function Me(t, e) {
	    var r = e ? Ee(t.buffer) : t.buffer;return new t.constructor(r, t.byteOffset, t.byteLength);
	  }function Ie(t, e) {
	    return t.set(e[0], e[1]), t;
	  }function Pe(t, e, r) {
	    var n = e ? r(gt(t), !0) : gt(t);return k(n, Ie, new t.constructor());
	  }function Ce(t) {
	    var e = new t.constructor(t.source, Ca.exec(t));return e.lastIndex = t.lastIndex, e;
	  }function Se(t, e) {
	    return t.add(e), t;
	  }function ze(t, e, r) {
	    var n = e ? r(mt(t), !0) : mt(t);return k(n, Se, new t.constructor());
	  }function De(t) {
	    return za ? Object(za.call(t)) : {};
	  }function Te(t, e) {
	    var r = e ? Ee(t.buffer) : t.buffer;return new t.constructor(r, t.byteOffset, t.length);
	  }function Ne(t, e, r, n) {
	    var o = t.constructor;switch (e) {case La:
	        return Ee(t);case Da:case Ta:
	        return new o(+t);case Va:
	        return Me(t, n);case qa:case Qa:case $a:case Za:case Ga:case Ya:case Xa:case Ha:case Ja:
	        return Te(t, n);case Na:
	        return Pe(t, n, r);case Fa:case Ba:
	        return new o(t);case Ra:
	        return Ce(t);case Ua:
	        return ze(t, n, r);case Wa:
	        return De(t);}
	  }function Fe(t) {
	    return x(t) ? Ka(t) : {};
	  }function Re(t) {
	    return "function" != typeof t.constructor || Mt(t) ? {} : Fe(bi(t));
	  }function Ue() {
	    return !1;
	  }function Be(t, e, r, n, o, i, u) {
	    var a;if (n && (a = i ? n(t, o, i, u) : n(t)), void 0 !== a) return a;if (!x(t)) return t;var s = pn(t);if (s) {
	      if (a = Ae(t), !e) return we(t, a);
	    } else {
	      var c = Hi(t),
	          f = c == ps || c == ls;if (is(t)) return _e(t, e);if (c == ys || c == us || f && !i) {
	        if (Q(t)) return i ? t : {};if (a = Re(f ? {} : t), !e) return Oe(t, je(a, t));
	      } else {
	        if (!Ss[c]) return i ? t : {};a = Ne(t, c, Be, e);
	      }
	    }u || (u = new lt());var p = u.get(t);if (p) return p;if (u.set(t, a), !s) var l = r ? ke(t) : It(t);return xe(l || t, function (o, i) {
	      l && (i = o, o = t[i]), fe(a, i, Be(o, e, r, n, i, t, u));
	    }), a;
	  }function We(t) {
	    return Be(t, !1, !0);
	  }function Le(t, e, r) {
	    (void 0 === r || D(t[e], r)) && ("number" != typeof e || void 0 !== r || e in t) || (t[e] = r);
	  }function Ve(t) {
	    if (!g(t) || Qs.call(t) != Bs || Q(t)) return !1;var e = bi(t);if (null === e) return !0;var r = Vs.call(e, "constructor") && e.constructor;return "function" == typeof r && r instanceof r && Ls.call(r) == qs;
	  }function qe(t) {
	    return pe(t, ae(t));
	  }function Qe(t, e, r, n, o, i, u) {
	    var a = t[r],
	        s = e[r],
	        c = u.get(s);if (c) return void Le(t, r, c);var f = i ? i(a, s, r + "", t, e, u) : void 0,
	        p = void 0 === f;p && (f = s, pn(s) || Cu(s) ? pn(a) ? f = a : Ot(a) ? f = we(a) : (p = !1, f = Be(s, !0)) : Ve(s) || kt(s) ? kt(a) ? f = qe(a) : !x(a) || n && j(a) ? (p = !1, f = Be(s, !0)) : f = a : p = !1), p && (u.set(s, f), o(f, s, n, i, u), u.delete(s)), Le(t, r, f);
	  }function $e(t, e, r, n, o) {
	    if (t !== e) {
	      if (!pn(e) && !Cu(e)) var i = ae(e);xe(i || e, function (u, a) {
	        if (i && (a = u, u = e[a]), x(u)) o || (o = new lt()), Qe(t, e, a, r, $e, n, o);else {
	          var s = n ? n(t[a], u, a + "", t, e, o) : void 0;void 0 === s && (s = u), Le(t, a, s);
	        }
	      });
	    }
	  }function Ze(t) {
	    $s(Zs, t);
	  }function Ge(t) {
	    var e = ++Ys;return I(t) + e;
	  }function Ye(t) {
	    return pn(t) || kt(t) || !!(_c && t && t[_c]);
	  }function Xe(t, e, r, n, o) {
	    var i = -1,
	        u = t.length;for (r || (r = Ye), o || (o = []); ++i < u;) {
	      var a = t[i];e > 0 && r(a) ? e > 1 ? Xe(a, e - 1, r, n, o) : re(o, a) : n || (o[o.length] = a);
	    }return o;
	  }function He(t, e) {
	    for (var r = -1, n = t ? t.length : 0, o = Array(n); ++r < n;) o[r] = e(t[r], r, t);return o;
	  }function Je(t) {
	    return function (e, r, n) {
	      for (var o = -1, i = Object(e), u = n(e), a = u.length; a--;) {
	        var s = u[t ? a : ++o];if (r(i[s], s, i) === !1) break;
	      }return e;
	    };
	  }function Ke(t, e) {
	    return t && wc(t, e, It);
	  }function tr(t, e) {
	    return function (r, n) {
	      if (null == r) return r;if (!O(r)) return t(r, n);for (var o = r.length, i = e ? o : -1, u = Object(r); (e ? i-- : ++i < o) && n(u[i], i, u) !== !1;);return r;
	    };
	  }function er(t, e) {
	    var r = -1,
	        n = O(t) ? Array(t.length) : [];return Oc(t, function (t, o, i) {
	      n[++r] = e(t, o, i);
	    }), n;
	  }function rr(t, e) {
	    var r = t.length;for (t.sort(e); r--;) t[r] = t[r].value;return t;
	  }function nr(t, e) {
	    if (t !== e) {
	      var r = void 0 !== t,
	          n = null === t,
	          o = t === t,
	          i = E(t),
	          u = void 0 !== e,
	          a = null === e,
	          s = e === e,
	          c = E(e);if (!a && !c && !i && t > e || i && u && s && !a && !c || n && u && s || !r && s || !o) return 1;if (!n && !i && !c && t < e || c && r && o && !n && !i || a && r && o || !u && o || !s) return -1;
	    }return 0;
	  }function or(t, e, r) {
	    for (var n = -1, o = t.criteria, i = e.criteria, u = o.length, a = r.length; ++n < u;) {
	      var s = nr(o[n], i[n]);if (s) {
	        if (n >= a) return s;var c = r[n];return s * ("desc" == c ? -1 : 1);
	      }
	    }return t.index - e.index;
	  }function ir(t, e, r) {
	    var n = -1;e = He(e.length ? e : [Ht], zt(te));var o = er(t, function (t, r, o) {
	      var i = He(e, function (e) {
	        return e(t);
	      });return { criteria: i, index: ++n, value: t };
	    });return rr(o, function (t, e) {
	      return or(t, e, r);
	    });
	  }function ur(t, e) {
	    return He(e, function (e) {
	      return t[e];
	    });
	  }function ar(t) {
	    return t ? ur(t, It(t)) : [];
	  }function sr(t, e) {
	    for (var r = -1, n = t ? t.length : 0, o = 0, i = []; ++r < n;) {
	      var u = t[r];e(u, r, t) && (i[o++] = u);
	    }return i;
	  }function cr(t, e) {
	    var r = [];return Oc(t, function (t, n, o) {
	      e(t, n, o) && r.push(t);
	    }), r;
	  }function fr(t, e) {
	    var r = pn(t) ? sr : cr;return r(t, te(e, 3));
	  }var pr = !1,
	      lr = t(function (t) {
	    t.exports = { b: function (t, e, r, n) {
	        return null == n && (n = 1), "rgba(" + t + ", " + e + ", " + r + ", " + n + ")";
	      }, e: function (t, e, r) {
	        return "rotate(" + t + ", " + e + ", " + r + ")";
	      }, f: function (t, e) {
	        return "translate(" + t + ", " + e + ")";
	      }, g: function (t, e) {
	        return "M" + t + "," + e + " ";
	      }, h: function (t, e) {
	        return "m" + t + "," + e + " ";
	      }, i: function (t, e) {
	        return "L" + t + "," + e + " ";
	      }, Cubic: function (t, e, r, n, o, i) {
	        return "C" + t + e + " " + r + n + " " + o + i;
	      }, Quadratic: function (t, e, r, n) {
	        return "Q" + t + "," + e + " " + r + "," + n + " ";
	      }, url: function (t) {
	        return "url(" + t + ")";
	      }, ClosePath: function () {
	        return "Z";
	      }, nextTick: function (t) {
	        return requestAnimationFrame(t);
	      } };
	  }),
	      dr = lr && "object" == typeof lr && "default" in lr ? lr.default : lr,
	      hr = lr.b,
	      yr = lr.e,
	      vr = lr.f,
	      br = lr.g,
	      gr = lr.h,
	      mr = lr.i,
	      xr = lr.Cubic,
	      jr = lr.Quadratic,
	      _r = lr.url,
	      wr = lr.ClosePath,
	      Or = lr.nextTick,
	      kr = Object.freeze({ default: dr, b: hr, e: yr, f: vr, g: br, h: gr, i: mr, Cubic: xr, Quadratic: jr, url: _r, ClosePath: wr, nextTick: Or }),
	      Ar = Object.call.bind([].slice),
	      Er = { linear: function (t, e, r, n) {
	      return e + t / n * r;
	    }, easeInQuad: function (t, e, r, n) {
	      return r * (t /= n) * t + e;
	    }, easeInCubic: function (t, e, r, n) {
	      return r * (t /= n) * t * t + e;
	    }, easeInQuart: function (t, e, r, n) {
	      return r * (t /= n) * t * t * t + e;
	    }, easeInQuint: function (t, e, r, n) {
	      return r * (t /= n) * t * t * t * t + e;
	    }, easeInSine: function (t, e, r, n) {
	      return -r * Math.cos(t / n * (Math.PI / 2)) + r + e;
	    }, easeInExpo: function (t, e, r, n) {
	      return 0 == t ? e : r * Math.pow(2, 10 * (t / n - 1)) + e;
	    }, easeInCirc: function (t, e, r, n) {
	      return -r * (Math.sqrt(1 - (t /= n) * t) - 1) + e;
	    }, easeInElastic: function (t, e, r, n) {
	      var o = arguments.length <= 4 || void 0 === arguments[4] ? 500 : arguments[4];if (0 == t) return e;if (1 == (t /= n)) return e + r;var i = r,
	          u = n * (1 - Math.min(o, 999) / 1e3),
	          a = i < Math.abs(r) ? u / 4 : u / (2 * Math.PI) * Math.asin(r / i);return -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - a) * (2 * Math.PI) / u)) + e;
	    }, easeInBack: function (t, e, r, n) {
	      var o = 1.70158;return r * (t /= n) * t * ((o + 1) * t - o) + e;
	    }, easeOutQuad: function (t, e, r, n) {
	      return -r * (t /= n) * (t - 2) + e;
	    }, easeOutCubic: function (t, e, r, n) {
	      return r * ((t = t / n - 1) * t * t + 1) + e;
	    }, easeOutQuart: function (t, e, r, n) {
	      return -r * ((t = t / n - 1) * t * t * t - 1) + e;
	    }, easeOutQuint: function (t, e, r, n) {
	      return r * ((t = t / n - 1) * t * t * t * t + 1) + e;
	    }, easeOutSine: function (t, e, r, n) {
	      return r * Math.sin(t / n * (Math.PI / 2)) + e;
	    }, easeOutExpo: function (t, e, r, n) {
	      return t == n ? e + r : r * (-Math.pow(2, -10 * t / n) + 1) + e;
	    }, easeOutCirc: function (t, e, r, n) {
	      return r * Math.sqrt(1 - (t = t / n - 1) * t) + e;
	    }, easeOutElastic: function (t, e, r, n) {
	      var o = arguments.length <= 4 || void 0 === arguments[4] ? 500 : arguments[4];if (0 == t) return e;if (1 == (t /= n)) return e + r;var i = r,
	          u = n * (1 - Math.min(o, 999) / 1e3),
	          a = i < Math.abs(r) ? u / 4 : u / (2 * Math.PI) * Math.asin(r / i);return i * Math.pow(2, -10 * t) * Math.sin((t * n - a) * (2 * Math.PI) / u) + r + e;
	    }, easeOutBack: function (t, e, r, n) {
	      var o = 1.70158;return r * ((t = t / n - 1) * t * ((o + 1) * t + o) + 1) + e;
	    }, easeOutBounce: function (t, e, r, n) {
	      return (t /= n) < 1 / 2.75 ? r * (7.5625 * t * t) + e : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e;
	    }, easeInOutQuad: function (t, e, r, n) {
	      return (t /= n / 2) < 1 ? r / 2 * t * t + e : -r / 2 * (--t * (t - 2) - 1) + e;
	    }, easeInOutCubic: function (t, e, r, n) {
	      return (t /= n / 2) < 1 ? r / 2 * t * t * t + e : r / 2 * ((t -= 2) * t * t + 2) + e;
	    }, easeInOutQuart: function (t, e, r, n) {
	      return (t /= n / 2) < 1 ? r / 2 * t * t * t * t + e : -r / 2 * ((t -= 2) * t * t * t - 2) + e;
	    }, easeInOutQuint: function (t, e, r, n) {
	      return (t /= n / 2) < 1 ? r / 2 * t * t * t * t * t + e : r / 2 * ((t -= 2) * t * t * t * t + 2) + e;
	    }, easeInOutSine: function (t, e, r, n) {
	      return -r / 2 * (Math.cos(Math.PI * t / n) - 1) + e;
	    }, easeInOutExpo: function (t, e, r, n) {
	      return 0 == t ? e : t == n ? e + r : (t /= n / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + e : r / 2 * (-Math.pow(2, -10 * --t) + 2) + e;
	    }, easeInOutCirc: function (t, e, r, n) {
	      return (t /= n / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + e : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
	    }, easeInOutElastic: function (t, e, r, n) {
	      var o = arguments.length <= 4 || void 0 === arguments[4] ? 500 : arguments[4];if (0 == t) return e;if (2 == (t /= n / 2)) return e + r;var i = r,
	          u = n * (1 - Math.min(o, 999) / 1e3) * 1.5,
	          a = i < Math.abs(r) ? u / 4 : u / (2 * Math.PI) * Math.asin(r / i);return t < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - a) * (2 * Math.PI) / u)) + e : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - a) * (2 * Math.PI) / u) * .5 + r + e;
	    }, easeInOutBack: function (t, e, r, n) {
	      var o = 1.70158;return (t /= n / 2) < 1 ? r / 2 * (t * t * (((o *= 1.525) + 1) * t - o)) + e : r / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + e;
	    } },
	      Mr = function () {
	    function t(t) {
	      function e(e) {
	        return r.set(e, t[e]);
	      }var r = new Map();return Object.keys(t).forEach(e), r;
	    }return function (e) {
	      return e instanceof Map ? e : t(e);
	    };
	  }(),
	      Ir = function (t) {
	    return (/^#/.test(t)
	    );
	  },
	      Pr = function (t) {
	    return (/^rgb/.test(t)
	    );
	  },
	      Cr = function () {
	    function t(t) {
	      return t.length < 7 ? t.split("").reduce(function (t, e) {
	        return t + e + e;
	      }) : t;
	    }function e(t) {
	      return t.match(/[\d\w]{2}/g).map(function (t) {
	        return parseInt(t, 16);
	      });
	    }return function (n) {
	      if (Pr(n)) return n;var o = r(t, e)(n);return "rgb(" + o.join(", ") + ")";
	    };
	  }(),
	      Sr = new Map();["el", "delay", "begin", "complete", "loop", "direction"].forEach(function (t) {
	    return Sr.set(t, null);
	  }), Sr.set("duration", 1e3), Sr.set("easing", "easeOutElastic");var zr = function () {
	    function t(t) {
	      return r.every(function (e) {
	        return t.has(e);
	      });
	    }function e(t) {
	      var e = new Map(t);return r.forEach(function (t) {
	        e.has(t) || e.set(t, Sr.get(t));
	      }), e;
	    }var r = c(Sr).filter(function (t) {
	      return Sr.get(t);
	    });return function (r) {
	      return t(r) ? r : e(r);
	    };
	  }(),
	      Dr = function () {
	    function t(t) {
	      return Br(t).every(o(t));
	    }function r(t) {
	      return Br(t).filter(n(o(t)));
	    }var o = e(function (t, e) {
	      return Array.isArray(t.get(e));
	    });return function (e) {
	      if (t(e)) return e;var n = new Map(e);return r(n).forEach(function (t) {
	        return n.set(t, [Vr.get(t), n.get(t)]);
	      }), n;
	    };
	  }(),
	      Tr = function () {
	    var t = function (t) {
	      return (/\D$/.test(t)
	      );
	    },
	        r = e(function (e, r) {
	      return t(r) || /scale/.test(e) ? r : /rotate|skew/.test(e) ? r + "deg" : r + "px";
	    }),
	        n = function (e, r) {
	      return r.every(function (r) {
	        return e.get(r).every(t);
	      });
	    };return function (t) {
	      var e = Br(t).filter(qr);if (n(t, e)) return t;var o = new Map(t);return e.forEach(function (e) {
	        return o.set(e, t.get(e).map(r(e)));
	      }), o;
	    };
	  }(),
	      Nr = function () {
	    var t = e(function (t, e) {
	      return t.get(e).some(Ir);
	    }),
	        r = function (e) {
	      return !Wr(e).some(t(e));
	    },
	        n = function (e) {
	      return Wr(e).filter(t(e));
	    };return function (t) {
	      if (r(t)) return t;var e = new Map(t);return n(t).forEach(function (t) {
	        return e.set(t, e.get(t).map(Cr));
	      }), e;
	    };
	  }(),
	      Fr = r(Mr, zr, Dr, Tr, Nr, l, h),
	      Rr = function () {
	    function t(t) {
	      return n(a)(e, t);
	    }var e = c(Sr);return function (e) {
	      return c(e).filter(t);
	    };
	  }(),
	      Ur = function () {
	    var t = r(o, Pr),
	        n = e(function (e, r) {
	      var n = e.get(r).map(Zr),
	          o = new Map();if (o.set("prop", r), o.set("from", n[0]), o.set("to", n[1]), o.set("isTransformFunction", qr(r)), o.set("isColor", t(e.get(r))), /\d$/.test(e.get("easing"))) {
	        var i = e.get("easing").split(" ");o.set("easing", i[0]), o.set("frequency", i[1]);
	      } else o.set("easing", e.get("easing"));return o;
	    });return function (t, e) {
	      return Rr(t).map(n(t));
	    };
	  }(),
	      Br = function () {
	    var t = function (t) {
	      return a(Lr, t);
	    };return function (e) {
	      return c(e).filter(t);
	    };
	  }(),
	      Wr = function (t) {
	    return s(Rr(t), Br(t));
	  },
	      Lr = ["opacity", "translateX", "translateY", "scale", "rotate", "scaleX", "scaleY", "rotateX", "rotateY", "perspective", "skewX", "skewY", "translateZ", "rotateZ", "scaleZ"],
	      Vr = new Map();!function () {
	    var t = ["opacity", "scale", "scaleX", "scaleY"],
	        e = function (e) {
	      return Vr.set(e, a(t, e) ? 1 : 0);
	    };Lr.forEach(e);
	  }();var qr = function () {
	    var t = Lr.filter(function (t) {
	      return "opacity" != t;
	    });return function (e) {
	      return a(t, e);
	    };
	  }(),
	      Qr = function (t) {
	    var e = Br(t);if (e.length) {
	      var r = [];e.some(qr) && r.push("transform"), a(e, "opacity") && r.push("opacity");var n = r.join();t.get("el").forEach(function (t) {
	        t.style.willChange || (t.style.willChange = n);
	      });
	    }
	  },
	      $r = function (t, e) {
	    return e.reduce(function (e, r, n) {
	      return e + t[n - 1] + r;
	    });
	  },
	      Zr = function () {
	    var t = /-?\d*\.?\d+/g,
	        e = function (t) {
	      return "string" == typeof t ? t : String(t);
	    };return function (r) {
	      var n = new Map();return n.set("digits", e(r).match(t).map(Number)), n.set("others", e(r).split(t)), n;
	    };
	  }(),
	      Gr = e(function (t, e, r) {
	    var n = r.get("to").get("digits").map(function (n, o) {
	      var i = r.get("from").get("digits")[o];if (i == n) return i;var u = n - i,
	          a = Er[r.get("easing")](e, i, u, t.get("duration"), r.get("frequency"));return r.get("isColor") ? Math.round(a) : a;
	    });return $r(n, r.get("to").get("others"));
	  }),
	      Yr = e(function (t, e) {
	    return i(t.get(e.get("prop")));
	  }),
	      Xr = e(function (t, e, r) {
	    var n = void 0;t.forEach(function (t, o) {
	      return t.get("isTransformFunction") ? (n || (n = []), void n.push(t.get("prop") + "(" + e[o] + ")")) : "opacity" == t.get("prop") ? void (r.style.opacity = e[o]) : void r.setAttribute(t.get("prop"), e[o]);
	    }), n && (r.style.transform = n.join(" "));
	  }),
	      Hr = function () {
	    var t = function (t, e) {
	      e.get("begin") && e.get("begin")(e.get("el")), requestAnimationFrame(t);
	    };return function (e, r) {
	      return r.get("delay") ? setTimeout(function () {
	        return t(e, r);
	      }, r.get("delay")) : t(e, r);
	    };
	  }(),
	      Jr = function (t, e) {
	    y(t), e.get("complete") && e.get("complete")(e.get("el")), e.get("loop") && Kr(e);
	  },
	      Kr = function (t) {
	    return v(function () {
	      if ("alternate" == t.get("direction")) return d(t);if ("reverse" == t.get("direction")) {
	        var e = new Map(t);return e.delete("direction"), e;
	      }return t;
	    }());
	  },
	      tn = new Map(),
	      en = function () {
	    var t = 0;return function (e) {
	      var r = t++;return tn = new Map(tn).set(r, e), r;
	    };
	  }(),
	      rn = Object.freeze({ default: v, stop: b }),
	      nn = t(function (t) {
	    var e,
	        r,
	        n,
	        o,
	        i = [].slice,
	        u = [].indexOf || function (t) {
	      for (var e = 0, r = this.length; e < r; e++) if (e in this && this[e] === t) return e;return -1;
	    };r = "default" in rn ? rn.default : rn, e = ["opacity"], n = function (t, r) {
	      return null != r && /^#|[0-9]/.test(r) && !e.includes(t);
	    }, t.exports = o = function (t, e, o, a) {
	      var s, c, f, p, l, d, h, y, v, b, g, m;for (null == a && (a = 500), l = Object.keys(e), b = i.call(t.attributes), c = 0, d = b.length; c < d; c++) y = b[c].name, u.call(l, y) < 0 && t.removeAttribute(y);for (g = i.call(t.style), f = 0, h = g.length; f < h; f++) p = g[f], p in o || t.style.removeProperty(p);for (y in e) m = e[y], s = t.getAttribute(y), n(y, s) ? r((v = { el: t }, v["" + y] = [s, m], v.duration = a, v.easing = "easeInOutQuint", v)) : t.setAttribute(y, m);for (y in o) m = o[y], t.style.setProperty(y, m);return t;
	    };
	  }),
	      on = nn && "object" == typeof nn && "default" in nn ? nn.default : nn,
	      un = Object.freeze({ default: on }),
	      an = t(function (t, e) {
	    var r,
	        n = [].indexOf || function (t) {
	      for (var e = 0, r = this.length; e < r; e++) if (e in this && this[e] === t) return e;return -1;
	    };r = "animation-iteration-count box-flex box-flex-group box-ordinal-group column-count fill-opacity flex flex-grow flex-positive flex-shrink flex-negative flex-order font-weight line-clamp line-height opacity order orphans stop-opacity stroke-dashoffset stroke-opacity stroke-width tab-size widows z-index zoom".split(" "), e.addUnit = function (t, e) {
	      return "string" == typeof e && n.call(r, t) >= 0 ? e : e + "px";
	    };
	  }),
	      sn = an && "object" == typeof an && "default" in an ? an.default : an,
	      cn = an.addUnit,
	      fn = Object.freeze({ default: sn, addUnit: cn }),
	      pn = Array.isArray,
	      ln = "[object String]",
	      dn = Object.prototype,
	      hn = dn.toString,
	      yn = Object.freeze({ default: m }),
	      vn = Object.freeze({ default: x }),
	      bn = "[object Function]",
	      gn = "[object GeneratorFunction]",
	      mn = Object.prototype,
	      xn = mn.toString,
	      jn = Object.freeze({ default: j }),
	      _n = _("length"),
	      wn = 9007199254740991,
	      On = Object.freeze({ default: O }),
	      kn = { "À": "A", "Á": "A", "Â": "A", "Ã": "A", "Ä": "A", "Å": "A", "à": "a", "á": "a", "â": "a", "ã": "a", "ä": "a", "å": "a", "Ç": "C", "ç": "c", "Ð": "D", "ð": "d", "È": "E", "É": "E", "Ê": "E", "Ë": "E", "è": "e", "é": "e", "ê": "e", "ë": "e", "Ì": "I", "Í": "I", "Î": "I", "Ï": "I", "ì": "i", "í": "i", "î": "i", "ï": "i", "Ñ": "N", "ñ": "n", "Ò": "O", "Ó": "O", "Ô": "O", "Õ": "O", "Ö": "O", "Ø": "O", "ò": "o", "ó": "o", "ô": "o", "õ": "o", "ö": "o", "ø": "o", "Ù": "U", "Ú": "U", "Û": "U", "Ü": "U", "ù": "u", "ú": "u", "û": "u", "ü": "u", "Ý": "Y", "ý": "y", "ÿ": "y", "Æ": "Ae", "æ": "ae", "Þ": "Th", "þ": "th", "ß": "ss" },
	      An = A(kn),
	      En = "object" == typeof global && global && global.Object === Object && global,
	      Mn = "object" == typeof self && self && self.Object === Object && self,
	      In = En || Mn || Function("return this")(),
	      Pn = In.Symbol,
	      Cn = "[object Symbol]",
	      Sn = Object.prototype,
	      zn = Sn.toString,
	      Dn = 1 / 0,
	      Tn = Pn ? Pn.prototype : void 0,
	      Nn = Tn ? Tn.toString : void 0,
	      Fn = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
	      Rn = "\\u0300-\\u036f\\ufe20-\\ufe23",
	      Un = "\\u20d0-\\u20f0",
	      Bn = "[" + Rn + Un + "]",
	      Wn = RegExp(Bn, "g"),
	      Ln = /[a-zA-Z0-9]+/g,
	      Vn = "\\ud800-\\udfff",
	      qn = "\\u0300-\\u036f\\ufe20-\\ufe23",
	      Qn = "\\u20d0-\\u20f0",
	      $n = "\\u2700-\\u27bf",
	      Zn = "a-z\\xdf-\\xf6\\xf8-\\xff",
	      Gn = "\\xac\\xb1\\xd7\\xf7",
	      Yn = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
	      Xn = "\\u2000-\\u206f",
	      Hn = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
	      Jn = "A-Z\\xc0-\\xd6\\xd8-\\xde",
	      Kn = "\\ufe0e\\ufe0f",
	      to = Gn + Yn + Xn + Hn,
	      eo = "['’]",
	      ro = "[" + to + "]",
	      no = "[" + qn + Qn + "]",
	      oo = "\\d+",
	      io = "[" + $n + "]",
	      uo = "[" + Zn + "]",
	      ao = "[^" + Vn + to + oo + $n + Zn + Jn + "]",
	      so = "\\ud83c[\\udffb-\\udfff]",
	      co = "(?:" + no + "|" + so + ")",
	      fo = "[^" + Vn + "]",
	      po = "(?:\\ud83c[\\udde6-\\uddff]){2}",
	      lo = "[\\ud800-\\udbff][\\udc00-\\udfff]",
	      ho = "[" + Jn + "]",
	      yo = "\\u200d",
	      vo = "(?:" + uo + "|" + ao + ")",
	      bo = "(?:" + ho + "|" + ao + ")",
	      go = "(?:" + eo + "(?:d|ll|m|re|s|t|ve))?",
	      mo = "(?:" + eo + "(?:D|LL|M|RE|S|T|VE))?",
	      xo = co + "?",
	      jo = "[" + Kn + "]?",
	      _o = "(?:" + yo + "(?:" + [fo, po, lo].join("|") + ")" + jo + xo + ")*",
	      wo = jo + xo + _o,
	      Oo = "(?:" + [io, po, lo].join("|") + ")" + wo,
	      ko = RegExp([ho + "?" + uo + "+" + go + "(?=" + [ro, ho, "$"].join("|") + ")", bo + "+" + mo + "(?=" + [ro, ho + vo, "$"].join("|") + ")", ho + "?" + vo + "+" + go, ho + "+" + mo, oo, Oo].join("|"), "g"),
	      Ao = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
	      Eo = "['’]",
	      Mo = RegExp(Eo, "g"),
	      Io = S(function (t, e, r) {
	    return t + (r ? "-" : "") + e.toLowerCase();
	  }),
	      Po = Object.freeze({ default: Io }),
	      Co = Array.prototype,
	      So = Co.splice;B.prototype.clear = z, B.prototype.delete = N, B.prototype.get = F, B.prototype.has = R, B.prototype.set = U;var zo = In["__core-js_shared__"],
	      Do = function () {
	    var t = /[^.]+$/.exec(zo && zo.keys && zo.keys.IE_PROTO || "");return t ? "Symbol(src)_1." + t : "";
	  }(),
	      To = Function.prototype.toString,
	      No = /[\\^$.*+?()[\]{}|]/g,
	      Fo = /^\[object .+?Constructor\]$/,
	      Ro = Object.prototype,
	      Uo = Function.prototype.toString,
	      Bo = Ro.hasOwnProperty,
	      Wo = RegExp("^" + Uo.call(Bo).replace(No, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
	      Lo = X(In, "Map"),
	      Vo = X(Object, "create"),
	      qo = "__lodash_hash_undefined__",
	      Qo = Object.prototype,
	      $o = Qo.hasOwnProperty,
	      Zo = Object.prototype,
	      Go = Zo.hasOwnProperty,
	      Yo = "__lodash_hash_undefined__";rt.prototype.clear = H, rt.prototype.delete = J, rt.prototype.get = K, rt.prototype.has = tt, rt.prototype.set = et, ft.prototype.clear = nt, ft.prototype.delete = ut, ft.prototype.get = at, ft.prototype.has = st, ft.prototype.set = ct;var Xo = 200;lt.prototype.clear = W, lt.prototype.delete = L, lt.prototype.get = V, lt.prototype.has = q, lt.prototype.set = pt;var Ho = "__lodash_hash_undefined__";yt.prototype.add = yt.prototype.push = dt, yt.prototype.has = ht;var Jo = 1,
	      Ko = 2,
	      ti = In.Uint8Array,
	      ei = 1,
	      ri = 2,
	      ni = "[object Boolean]",
	      oi = "[object Date]",
	      ii = "[object Error]",
	      ui = "[object Map]",
	      ai = "[object Number]",
	      si = "[object RegExp]",
	      ci = "[object Set]",
	      fi = "[object String]",
	      pi = "[object Symbol]",
	      li = "[object ArrayBuffer]",
	      di = "[object DataView]",
	      hi = Pn ? Pn.prototype : void 0,
	      yi = hi ? hi.valueOf : void 0,
	      vi = Object.getPrototypeOf,
	      bi = jt(vi, Object),
	      gi = Object.prototype,
	      mi = gi.hasOwnProperty,
	      xi = Object.keys,
	      ji = jt(xi, Object),
	      _i = "[object Arguments]",
	      wi = Object.prototype,
	      Oi = wi.hasOwnProperty,
	      ki = wi.toString,
	      Ai = wi.propertyIsEnumerable,
	      Ei = 9007199254740991,
	      Mi = /^(?:0|[1-9]\d*)$/,
	      Ii = Object.prototype,
	      Pi = 2,
	      Ci = X(In, "DataView"),
	      Si = X(In, "Promise"),
	      zi = X(In, "Set"),
	      Di = X(In, "WeakMap"),
	      Ti = Object.prototype,
	      Ni = Ti.toString,
	      Fi = "[object Map]",
	      Ri = "[object Object]",
	      Ui = "[object Promise]",
	      Bi = "[object Set]",
	      Wi = "[object WeakMap]",
	      Li = "[object DataView]",
	      Vi = Object.prototype,
	      qi = Vi.toString,
	      Qi = Z(Ci),
	      $i = Z(Lo),
	      Zi = Z(Si),
	      Gi = Z(zi),
	      Yi = Z(Di),
	      Xi = Ct;
	  (Ci && Xi(new Ci(new ArrayBuffer(1))) != Li || Lo && Xi(new Lo()) != Fi || Si && Xi(Si.resolve()) != Ui || zi && Xi(new zi()) != Bi || Di && Xi(new Di()) != Wi) && (Xi = function (t) {
	    var e = qi.call(t),
	        r = e == Ri ? t.constructor : void 0,
	        n = r ? Z(r) : void 0;if (n) switch (n) {case Qi:
	        return Li;case $i:
	        return Fi;case Zi:
	        return Ui;case Gi:
	        return Bi;case Yi:
	        return Wi;}return e;
	  });var Hi = Xi,
	      Ji = "[object Arguments]",
	      Ki = "[object Array]",
	      tu = "[object Boolean]",
	      eu = "[object Date]",
	      ru = "[object Error]",
	      nu = "[object Function]",
	      ou = "[object Map]",
	      iu = "[object Number]",
	      uu = "[object Object]",
	      au = "[object RegExp]",
	      su = "[object Set]",
	      cu = "[object String]",
	      fu = "[object WeakMap]",
	      pu = "[object ArrayBuffer]",
	      lu = "[object DataView]",
	      du = "[object Float32Array]",
	      hu = "[object Float64Array]",
	      yu = "[object Int8Array]",
	      vu = "[object Int16Array]",
	      bu = "[object Int32Array]",
	      gu = "[object Uint8Array]",
	      mu = "[object Uint8ClampedArray]",
	      xu = "[object Uint16Array]",
	      ju = "[object Uint32Array]",
	      _u = {};_u[du] = _u[hu] = _u[yu] = _u[vu] = _u[bu] = _u[gu] = _u[mu] = _u[xu] = _u[ju] = !0, _u[Ji] = _u[Ki] = _u[pu] = _u[tu] = _u[lu] = _u[eu] = _u[ru] = _u[nu] = _u[ou] = _u[iu] = _u[uu] = _u[au] = _u[su] = _u[cu] = _u[fu] = !1;var wu = Object.prototype,
	      Ou = wu.toString,
	      ku = "object" == typeof exports && exports && !exports.nodeType && exports,
	      Au = ku && "object" == typeof module && module && !module.nodeType && module,
	      Eu = Au && Au.exports === ku,
	      Mu = Eu && En.process,
	      Iu = function () {
	    try {
	      return Mu && Mu.binding("util");
	    } catch (t) {}
	  }(),
	      Pu = Iu && Iu.isTypedArray,
	      Cu = Pu ? zt(Pu) : St,
	      Su = 2,
	      zu = "[object Arguments]",
	      Du = "[object Array]",
	      Tu = "[object Object]",
	      Nu = Object.prototype,
	      Fu = Nu.hasOwnProperty,
	      Ru = 1,
	      Uu = 2,
	      Bu = "Expected a function";Wt.Cache = ft;var Wu = /^\./,
	      Lu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
	      Vu = /\\(\\)?/g,
	      qu = Wt(function (t) {
	    t = I(t);var e = [];return Wu.test(t) && e.push(""), t.replace(Lu, function (t, r, n, o) {
	      e.push(n ? o.replace(Vu, "$1") : r || t);
	    }), e;
	  }),
	      Qu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	      $u = /^\w*$/,
	      Zu = 1 / 0,
	      Gu = 1,
	      Yu = 2,
	      Xu = Object.getOwnPropertySymbols,
	      Hu = Xu ? jt(Xu, Object) : oe,
	      Ju = Object.getOwnPropertySymbols,
	      Ku = Ju ? function (t) {
	    for (var e = []; t;) re(e, Hu(t)), t = bi(t);return e;
	  } : oe,
	      ta = In.Reflect,
	      ea = Object.prototype,
	      ra = ta ? ta.enumerate : void 0,
	      na = ea.propertyIsEnumerable;ra && !na.call({ valueOf: 1 }, "valueOf") && (ue = function (t) {
	    return ie(ra(t));
	  });var oa = ue,
	      ia = Object.prototype,
	      ua = ia.hasOwnProperty,
	      aa = Object.freeze({ default: ce }),
	      sa = Object.prototype,
	      ca = sa.hasOwnProperty,
	      fa = Math.max,
	      pa = Object.prototype,
	      la = pa.hasOwnProperty,
	      da = pa.propertyIsEnumerable,
	      ha = !da.call({ valueOf: 1 }, "valueOf"),
	      ya = ye(function (t, e) {
	    if (ha || Mt(e) || O(e)) return void pe(e, It(e), t);for (var r in e) la.call(e, r) && fe(t, r, e[r]);
	  }),
	      va = Object.freeze({ default: ya }),
	      ba = Object.freeze({ default: ve }),
	      ga = t(function (t) {
	    var e,
	        r,
	        n,
	        o,
	        i,
	        u,
	        a,
	        s,
	        c,
	        f,
	        p,
	        l,
	        d,
	        h = [].slice,
	        y = [].indexOf || function (t) {
	      for (var e = 0, r = this.length; e < r; e++) if (e in this && this[e] === t) return e;return -1;
	    },
	        v = {}.hasOwnProperty;o = "default" in ba ? ba.default : ba, n = "default" in va ? va.default : va, p = "default" in aa ? aa.default : aa, f = "default" in Po ? Po.default : Po, u = "default" in On ? On.default : On, s = "default" in vn ? vn.default : vn, a = "default" in jn ? jn.default : jn, c = "default" in yn ? yn.default : yn, r = "http://www.w3.org/2000/svg", e = "animate circle defs ellipse g glyph image line marker mask path pattern polygon polyline rect stop svg text tspan filter".split(/\s+/), l = function (t) {
	      return c(t) ? t : u(t) ? o(t).join(" ") : s(t) ? Object.keys(p(t, Boolean)).join(" ") : "";
	    }, i = function () {
	      var t, o, i, u, p, d, b, g, m, x, j;if (x = arguments[0], t = arguments[1], i = 3 <= arguments.length ? h.call(arguments, 2) : [], null == t && (t = {}), c(x)) {
	        (y.call(e, x) >= 0 || /[A-Z]/.test(x)) && (t.namespace = r), g = (b = t.namespace) ? document.createElementNS(b, x) : document.createElement(x), delete t.namespace;for (p in t) v.call(t, p) && (j = t[p], p.startsWith("on") && a(j) ? (p = p.slice(2).toLowerCase(), g.addEventListener(p, j)) : "style" === p && s(j) ? n(g.style, j) : "className" === p || "class" === p ? g.setAttribute("class", l(j)) : "data" === p && s(j) ? n(g.dataset, j) : "innerHTML" === p ? g.innerHTML = j : "textContent" === p ? g.textContent = j : s(j) ? g.setAttribute(p, JSON.stringify(j)) : (b || (p = f(p)), g.setAttribute(p, j)));for (u = 0, d = i.length; u < d; u++) o = i[u], c(o) ? g.appendChild(document.createTextNode(o)) : s(o) && g.appendChild(o);return g;
	      }if (a(x)) return m = n({}, t, { children: i }), x(m);
	    }, d = function (t) {
	      var e;if (!t) return null;if ("string" == typeof t) return "<" === t[0] ? (e = document.createElement("div"), e.innerHTML = t, e.firstChild) : document.querySelector(t);if ("function" == typeof t.node) return t.node();if (u(t)) return t[0];if (isElement(t)) return t;if (pr) throw TypeError("Invalid element");
	    }, t.exports = { createElement: i, SVGElements: e, SVGAttributes: _a, toElement: d };
	  }),
	      ma = ga && "object" == typeof ga && "default" in ga ? ga.default : ga,
	      xa = ga.createElement,
	      ja = ga.SVGElements,
	      _a = ga.SVGAttributes,
	      wa = ga.toElement,
	      Oa = Object.freeze({ default: ma, createElement: xa, SVGElements: ja, SVGAttributes: _a, toElement: wa }),
	      ka = Object.freeze({ default: be }),
	      Aa = "Expected a function",
	      Ea = Object.freeze({ default: ge }),
	      Ma = Object.freeze({ default: me }),
	      Ia = Object.prototype,
	      Pa = Ia.hasOwnProperty,
	      Ca = /\w*$/,
	      Sa = Pn ? Pn.prototype : void 0,
	      za = Sa ? Sa.valueOf : void 0,
	      Da = "[object Boolean]",
	      Ta = "[object Date]",
	      Na = "[object Map]",
	      Fa = "[object Number]",
	      Ra = "[object RegExp]",
	      Ua = "[object Set]",
	      Ba = "[object String]",
	      Wa = "[object Symbol]",
	      La = "[object ArrayBuffer]",
	      Va = "[object DataView]",
	      qa = "[object Float32Array]",
	      Qa = "[object Float64Array]",
	      $a = "[object Int8Array]",
	      Za = "[object Int16Array]",
	      Ga = "[object Int32Array]",
	      Ya = "[object Uint8Array]",
	      Xa = "[object Uint8ClampedArray]",
	      Ha = "[object Uint16Array]",
	      Ja = "[object Uint32Array]",
	      Ka = Object.create,
	      ts = "object" == typeof exports && exports && !exports.nodeType && exports,
	      es = ts && "object" == typeof module && module && !module.nodeType && module,
	      rs = es && es.exports === ts,
	      ns = rs ? In.Buffer : void 0,
	      os = ns ? ns.isBuffer : void 0,
	      is = os || Ue,
	      us = "[object Arguments]",
	      as = "[object Array]",
	      ss = "[object Boolean]",
	      cs = "[object Date]",
	      fs = "[object Error]",
	      ps = "[object Function]",
	      ls = "[object GeneratorFunction]",
	      ds = "[object Map]",
	      hs = "[object Number]",
	      ys = "[object Object]",
	      vs = "[object RegExp]",
	      bs = "[object Set]",
	      gs = "[object String]",
	      ms = "[object Symbol]",
	      xs = "[object WeakMap]",
	      js = "[object ArrayBuffer]",
	      _s = "[object DataView]",
	      ws = "[object Float32Array]",
	      Os = "[object Float64Array]",
	      ks = "[object Int8Array]",
	      As = "[object Int16Array]",
	      Es = "[object Int32Array]",
	      Ms = "[object Uint8Array]",
	      Is = "[object Uint8ClampedArray]",
	      Ps = "[object Uint16Array]",
	      Cs = "[object Uint32Array]",
	      Ss = {};Ss[us] = Ss[as] = Ss[js] = Ss[_s] = Ss[ss] = Ss[cs] = Ss[ws] = Ss[Os] = Ss[ks] = Ss[As] = Ss[Es] = Ss[ds] = Ss[hs] = Ss[ys] = Ss[vs] = Ss[bs] = Ss[gs] = Ss[ms] = Ss[Ms] = Ss[Is] = Ss[Ps] = Ss[Cs] = !0, Ss[fs] = Ss[ps] = Ss[xs] = !1;var zs = Object.freeze({ default: We }),
	      Ds = t(function (t) {
	    var e,
	        r,
	        n,
	        o,
	        i,
	        u,
	        a,
	        s,
	        c,
	        f,
	        p = {}.hasOwnProperty;o = "default" in zs ? zs.default : zs, n = "default" in va ? va.default : va, s = "default" in Ma ? Ma.default : Ma, a = "default" in Po ? Po.default : Po, u = "default" in ka ? ka.default : ka, i = ("default" in Oa ? Oa.default : Oa).createElement, f = ("default" in Oa ? Oa.default : Oa).toElement, r = ("default" in fn ? fn.default : fn).addUnit, c = "default" in un ? un.default : un, t.exports = e = function () {
	      function t(t, e) {
	        null == t && (t = {}), e && (this.parentNode = f(e)), this.props = n({}, this.defaultProps, t), this.state = {};
	      }return t.prototype.isComponent = !0, t.prototype.getAttributes = function () {
	        return {};
	      }, t.prototype.j = function () {
	        return {};
	      }, t.prototype._setAttribute_ = function (t, e) {
	        if (void 0 !== e) return this.props[t] = e;
	      }, t.prototype.attr = function (t, e) {
	        var r;if (2 === arguments.length) this._setAttribute_(t, e);else for (r in t) p.call(t, r) && (e = t[r], this._setAttribute_(r, e));return "function" == typeof this.componentDidReceiveProps && this.componentDidReceiveProps(this.props, this.state), this;
	      }, t.prototype.setState = function (t) {
	        return n(this.state, t), this;
	      }, t.prototype.clone = function () {
	        var t;return t = Object.create(Object.getPrototypeOf(this)), t.props = o(this.props), t.state = o(this.state), t;
	      }, t.prototype.mount = function () {
	        var t, e, r, u;return r = o(this.props), this.hide(), t = this.attributes, u = this.styles, this.props = r, e = i(this.tagName, n(t, { style: u })), this.parentNode.appendChild(e), "function" == typeof this.componentDidMount && this.componentDidMount(this.props, this.state), this;
	      }, t.prototype.draw = function (t) {
	        var e, r, n, o;return this.node || this.mount(), n = this.node, o = this.styles, e = this.attributes, c(this.node, e, o, t), null != (r = "function" == typeof this.getContent ? this.getContent(this.props, this.state) : void 0) && (n.textContent = r), "function" == typeof this.componentDidUpdate && this.componentDidUpdate(this.props, this.state), this;
	      }, t.prototype.remove = function () {
	        return this.node.remove(), this;
	      }, t.prototype.status = function (t) {
	        return null == t && (t = ""), this.props.status = t, this;
	      }, t.prototype.hide = function () {
	        return this.props.hidden = !0, this;
	      }, Object.defineProperties(t.prototype, { namespace: { get: function () {
	            return this.props.namespace || this.k;
	          } }, node: { get: function () {
	            var t, e;return e = this.tagName, null != this.props.id && (e += "[data-va-ref='" + this.props.id + "']"), null != this.namespace && (e += "[data-va-ns='" + this.namespace + "']"), null != (t = this.parentNode) ? t.querySelector(e) : void 0;
	          } }, attributes: { get: function () {
	            var t;return t = n(Object.create(null), { "data-va-ref": this.props.id, "data-va-status": this.props.status, "data-va-ns": this.namespace, class: this.props.className, opacity: this.props.hidden ? 0 : 1 }), n(t, this.getAttributes(this.props, this.states)), s(t, u);
	          } }, styles: { get: function () {
	            var t, e, n, o;n = this.j(this.props, this.state), e = Object.create(null);for (t in n) p.call(n, t) && (o = n[t], void 0 !== o && (t = a(t), e[t] = "number" == typeof o ? r(t, o) : o));return e;
	          } }, parentNode: { enumerable: !1, writable: !0, value: null } }), t;
	    }();
	  }),
	      Ts = Ds && "object" == typeof Ds && "default" in Ds ? Ds.default : Ds,
	      Ns = Object.freeze({ default: Ts }),
	      Fs = t(function (t) {
	    var e,
	        r,
	        n,
	        o = function (t, e) {
	      function r() {
	        this.constructor = t;
	      }for (var n in e) i.call(e, n) && (t[n] = e[n]);return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
	    },
	        i = {}.hasOwnProperty;e = "default" in Ns ? Ns.default : Ns, n = ("default" in kr ? kr.default : kr).e, t.exports = r = function (t) {
	      function e() {
	        return e.__super__.constructor.apply(this, arguments);
	      }return o(e, t), e.prototype.k = "text", e.prototype.tagName = "text", e.prototype.defaultProps = { angle: 0, content: "", x: 0, y: 0 }, e.prototype.j = function (t) {
	        return { fontFamily: t.fontFamily, fontSize: t.fontSize, fontWeight: t.fontWeight, textAnchor: t.textAnchor, transform: n(t.angle, t.x, t.y), fill: t.fill };
	      }, e.prototype.getAttributes = function (t) {
	        return { x: t.x, y: t.y };
	      }, e.prototype.getContent = function (t) {
	        return t.content;
	      }, e.prototype.hide = function () {
	        return this.props.fontSize = 0, this;
	      }, e.prototype.content = function (t) {
	        return this.props.content = t, this;
	      }, e;
	    }(e);
	  }),
	      Rs = Fs && "object" == typeof Fs && "default" in Fs ? Fs.default : Fs,
	      Us = Object.freeze({ default: Rs }),
	      Bs = "[object Object]",
	      Ws = Object.prototype,
	      Ls = Function.prototype.toString,
	      Vs = Ws.hasOwnProperty,
	      qs = Ls.call(Object),
	      Qs = Ws.toString,
	      $s = ye(function (t, e, r) {
	    $e(t, e, r);
	  }),
	      Zs = { parentNode: null, colors: { default: "#FFCB1F", visiting: "#DE3E1E", visited: "#41B146", flagged: "#FF8E00", l: "#F5F5F5", marked: "#2996F3", ignored: "#DCDCDC" }, markers: { forward: "#forwardArrow", backward: "#backwardArrow" } },
	      Gs = Object.freeze({ default: Zs, config: Ze }),
	      Ys = 0,
	      Xs = Object.freeze({ default: Ge }),
	      Hs = t(function (t) {
	    var e,
	        r,
	        n,
	        o,
	        i,
	        u,
	        a,
	        s,
	        c = function (t, e) {
	      function r() {
	        this.constructor = t;
	      }for (var n in e) f.call(e, n) && (t[n] = e[n]);return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
	    },
	        f = {}.hasOwnProperty;e = "default" in Ns ? Ns.default : Ns, u = "default" in kr ? kr.default : kr, o = u.g, n = u.i, s = u.url, a = "default" in Xs ? Xs.default : Xs, i = "default" in Gs ? Gs.default : Gs, t.exports = r = function (t) {
	      function e() {
	        return e.__super__.constructor.apply(this, arguments);
	      }return c(e, t), e.prototype.k = "line", e.prototype.tagName = "path", e.UNDIRECT = a("line-type"), e.DIRECT = a("line-type"), e.BIDIRECT = a("line-type"), e.prototype.defaultProps = { x1: 0, y1: 0, x2: 0, y2: 0, type: 0, strokeDasharray: "", type: e.UNDIRECT }, e.prototype.j = function (t) {
	        return { stroke: t.stroke, strokeWidth: t.strokeWidth, strokeDasharray: t.strokeDasharray, markerStart: this.isFarEnough && t.type === e.BIDIRECT ? s(i.markers.backward) : void 0, markerEnd: this.isFarEnough && t.type !== e.UNDIRECT ? s(i.markers.forward) : void 0 };
	      }, e.prototype.getAttributes = function (t) {
	        return { d: o(t.x1, t.y1) + n(t.x2, t.y2) };
	      }, Object.defineProperties(e.prototype, { isFarEnough: { get: function () {
	            return Math.abs(this.props.x1 - this.props.x2) > .01 || Math.abs(this.props.y1 - this.props.y2) > .01;
	          } } }), e;
	    }(e);
	  }),
	      Js = Hs && "object" == typeof Hs && "default" in Hs ? Hs.default : Hs,
	      Ks = Object.freeze({ default: Js }),
	      tc = t(function (t) {
	    var e,
	        r,
	        n,
	        o,
	        i,
	        u,
	        a = function (t, e) {
	      function r() {
	        this.constructor = t;
	      }for (var n in e) s.call(e, n) && (t[n] = e[n]);return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
	    },
	        s = {}.hasOwnProperty;e = "default" in Ns ? Ns.default : Ns, o = "default" in kr ? kr.default : kr, i = o.e, u = o.unit, n = ("default" in Gs ? Gs.default : Gs).colors, t.exports = r = function (t) {
	      function e() {
	        return e.__super__.constructor.apply(this, arguments);
	      }return a(e, t), e.prototype.k = "rect", e.prototype.tagName = "rect", e.prototype.defaultProps = { x: 0, y: 0, fill: n.default, stroke: "#555", strokeWidth: 0, height: 0, width: 0, angle: 0 }, e.prototype.j = function (t) {
	        return { strokeWidth: t.strokeWidth || 0 };
	      }, e.prototype.getAttributes = function (t) {
	        return { fill: t.fill, class: t.className, stroke: t.stroke, x: t.x - t.width / 2, y: t.y - t.height / 2, height: t.height, width: t.width, rx: t.rx, ry: t.ry };
	      }, e.prototype.hide = function () {
	        return this.attr({ height: 0, width: 0 });
	      }, e;
	    }(e);
	  }),
	      ec = tc && "object" == typeof tc && "default" in tc ? tc.default : tc,
	      rc = Object.freeze({ default: ec }),
	      nc = t(function (t) {
	    var e,
	        r,
	        n,
	        o,
	        i = function (t, e) {
	      function r() {
	        this.constructor = t;
	      }for (var n in e) u.call(e, n) && (t[n] = e[n]);return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
	    },
	        u = {}.hasOwnProperty;e = "default" in Ns ? Ns.default : Ns, n = "default" in zs ? zs.default : zs, o = "default" in ba ? ba.default : ba, t.exports = r = function (t) {
	      function e() {
	        e.__super__.constructor.apply(this, arguments), this.created(this.props), this.m(this.props);
	      }return i(e, t), e.prototype.tagName = "g", e.prototype.created = function () {}, e.prototype.m = function () {}, e.prototype.clone = function () {
	        var t, e, r;t = Object.create(Object.getPrototypeOf(this)), t.props = n(this.props), t.state = n(this.state);for (e in this) u.call(this, e) && (r = this[e], r && (r.isComponent ? t[e] = r.clone() : Array.isArray(r) && (t[e] = r.slice())));return t;
	      }, e.prototype.draw = function (t) {
	        var r, n, i, u, a, s, c, f;for (e.__super__.draw.apply(this, arguments), s = this.node, c = this.nodes(), this.m(this.props), i = 0, a = c.length; i < a; i++) n = c[i], null != (null != n ? n.draw : void 0) && (n.parentNode = s, n.draw(t));for (c = o(c.map(function (t) {
	          return null != t ? t.node : void 0;
	        })), f = s.childNodes, u = f.length - 1; u >= 0; u += -1) r = f[u], c.includes(r) || r.remove();return this;
	      }, e;
	    }(e);
	  }),
	      oc = nc && "object" == typeof nc && "default" in nc ? nc.default : nc,
	      ic = Object.freeze({ default: oc }),
	      uc = t(function (t) {
	    var e,
	        r,
	        n,
	        o,
	        i,
	        u = function (t, e) {
	      function r() {
	        this.constructor = t;
	      }for (var n in e) a.call(e, n) && (t[n] = e[n]);return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
	    },
	        a = {}.hasOwnProperty;n = "default" in rc ? rc.default : rc, o = "default" in Us ? Us.default : Us, r = "default" in ic ? ic.default : ic, i = ("default" in kr ? kr.default : kr).f, t.exports = e = function (t) {
	      function e() {
	        return e.__super__.constructor.apply(this, arguments);
	      }return u(e, t), e.prototype.k = "card", e.prototype.defaultProps = { rx: 2, ry: 2 }, e.prototype.created = function () {
	        return this.rect = new n(), this.text = new o();
	      }, e.prototype.m = function (t) {
	        var e, r, n, o, i, u, a;return r = t.height, i = t.width, e = t.content, n = t.rx, o = t.ry, u = t.x, a = t.y, this.rect.attr({ height: r, width: i, rx: n, ry: o, x: u, y: a - r / 2 }), this.text.attr({ content: e, x: u, y: a - 20 });
	      }, e.prototype.getAttributes = function (t) {
	        return { transform: i(t.x, t.y) };
	      }, e.prototype.nodes = function () {
	        return [this.rect, this.text];
	      }, e;
	    }(r);
	  }),
	      ac = uc && "object" == typeof uc && "default" in uc ? uc.default : uc,
	      sc = t(function (t) {
	    !function (e, r) {
	      "undefined" != typeof t && t.exports ? t.exports = r() : "function" == typeof define && define.amd ? define(r) : this[e] = r();
	    }("bowser", function () {
	      function t(t) {
	        function e(e) {
	          var r = t.match(e);return r && r.length > 1 && r[1] || "";
	        }function r(e) {
	          var r = t.match(e);return r && r.length > 1 && r[2] || "";
	        }var n,
	            o = e(/(ipod|iphone|ipad)/i).toLowerCase(),
	            i = /like android/i.test(t),
	            a = !i && /android/i.test(t),
	            s = /nexus\s*[0-6]\s*/i.test(t),
	            c = !s && /nexus\s*[0-9]+/i.test(t),
	            f = /CrOS/.test(t),
	            p = /silk/i.test(t),
	            l = /sailfish/i.test(t),
	            d = /tizen/i.test(t),
	            h = /(web|hpw)os/i.test(t),
	            y = /windows phone/i.test(t),
	            v = !y && /windows/i.test(t),
	            b = !o && !p && /macintosh/i.test(t),
	            g = !a && !l && !d && !h && /linux/i.test(t),
	            m = e(/edge\/(\d+(\.\d+)?)/i),
	            x = e(/version\/(\d+(\.\d+)?)/i),
	            j = /tablet/i.test(t),
	            _ = !j && /[^-]mobi/i.test(t),
	            w = /xbox/i.test(t);/opera|opr|opios/i.test(t) ? n = { name: "Opera", opera: u, version: x || e(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i) } : /coast/i.test(t) ? n = { name: "Opera Coast", coast: u, version: x || e(/(?:coast)[\s\/](\d+(\.\d+)?)/i) } : /yabrowser/i.test(t) ? n = { name: "Yandex Browser", yandexbrowser: u, version: x || e(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i) } : /ucbrowser/i.test(t) ? n = { name: "UC Browser", ucbrowser: u, version: e(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i) } : /mxios/i.test(t) ? n = { name: "Maxthon", maxthon: u, version: e(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i) } : /epiphany/i.test(t) ? n = { name: "Epiphany", epiphany: u, version: e(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i) } : /puffin/i.test(t) ? n = { name: "Puffin", puffin: u, version: e(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i) } : /sleipnir/i.test(t) ? n = { name: "Sleipnir", sleipnir: u, version: e(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i) } : /k-meleon/i.test(t) ? n = { name: "K-Meleon", kMeleon: u, version: e(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i) } : y ? (n = { name: "Windows Phone", windowsphone: u }, m ? (n.msedge = u, n.version = m) : (n.msie = u, n.version = e(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = { name: "Internet Explorer", msie: u, version: e(/(?:msie |rv:)(\d+(\.\d+)?)/i) } : f ? n = { name: "Chrome", chromeos: u, chromeBook: u, chrome: u, version: e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i) } : /chrome.+? edge/i.test(t) ? n = { name: "Microsoft Edge", msedge: u, version: m } : /vivaldi/i.test(t) ? n = { name: "Vivaldi", vivaldi: u, version: e(/vivaldi\/(\d+(\.\d+)?)/i) || x } : l ? n = { name: "Sailfish", sailfish: u, version: e(/sailfish\s?browser\/(\d+(\.\d+)?)/i) } : /seamonkey\//i.test(t) ? n = { name: "SeaMonkey", n: u, version: e(/seamonkey\/(\d+(\.\d+)?)/i) } : /firefox|iceweasel|fxios/i.test(t) ? (n = { name: "Firefox", o: u, version: e(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i) }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.p = u)) : p ? n = { name: "Amazon Silk", silk: u, version: e(/silk\/(\d+(\.\d+)?)/i) } : /phantom/i.test(t) ? n = { name: "PhantomJS", phantom: u, version: e(/phantomjs\/(\d+(\.\d+)?)/i) } : /slimerjs/i.test(t) ? n = { name: "SlimerJS", slimer: u, version: e(/slimerjs\/(\d+(\.\d+)?)/i) } : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = { name: "BlackBerry", blackberry: u, version: x || e(/blackberry[\d]+\/(\d+(\.\d+)?)/i) } : h ? (n = { name: "WebOS", webos: u, version: x || e(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i) }, /touchpad\//i.test(t) && (n.touchpad = u)) : /bada/i.test(t) ? n = { name: "Bada", bada: u, version: e(/dolfin\/(\d+(\.\d+)?)/i) } : d ? n = { name: "Tizen", tizen: u, version: e(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || x } : /qupzilla/i.test(t) ? n = { name: "QupZilla", qupzilla: u, version: e(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || x } : /chromium/i.test(t) ? n = { name: "Chromium", chromium: u, version: e(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || x } : /chrome|crios|crmo/i.test(t) ? n = { name: "Chrome", chrome: u, version: e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i) } : a ? n = { name: "Android", version: x } : /safari|applewebkit/i.test(t) ? (n = { name: "Safari", safari: u }, x && (n.version = x)) : o ? (n = { name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod" }, x && (n.version = x)) : n = /googlebot/i.test(t) ? { name: "Googlebot", googlebot: u, version: e(/googlebot\/(\d+(\.\d+))/i) || x } : { name: e(/^(.*)\/(.*) /), version: r(/^(.*)\/(.*) /) }, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = u) : (n.name = n.name || "Webkit", n.webkit = u), !n.version && x && (n.version = x)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = u, n.version = n.version || e(/gecko\/(\d+(\.\d+)?)/i)), n.msedge || !a && !n.silk ? o ? (n[o] = u, n.ios = u) : b ? n.mac = u : w ? n.xbox = u : v ? n.windows = u : g && (n.linux = u) : n.android = u;var O = "";n.windowsphone ? O = e(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o ? (O = e(/os (\d+([_\s]\d+)*) like mac os x/i), O = O.replace(/[_\s]/g, ".")) : a ? O = e(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? O = e(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? O = e(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? O = e(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (O = e(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (n.osversion = O);var k = O.split(".")[0];return j || c || "ipad" == o || a && (3 == k || k >= 4 && !_) || n.silk ? n.tablet = u : (_ || "iphone" == o || "ipod" == o || a || s || n.blackberry || n.webos || n.bada) && (n.mobile = u), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.o && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = u : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.o && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = u : n.x = u, n;
	      }function e(t) {
	        return t.split(".").length;
	      }function r(t, e) {
	        var r,
	            n = [];if (Array.prototype.map) return Array.prototype.map.call(t, e);for (r = 0; r < t.length; r++) n.push(e(t[r]));return n;
	      }function n(t) {
	        for (var n = Math.max(e(t[0]), e(t[1])), o = r(t, function (t) {
	          var o = n - e(t);return t += new Array(o + 1).join(".0"), r(t.split("."), function (t) {
	            return new Array(20 - t.length).join("0") + t;
	          }).reverse();
	        }); --n >= 0;) {
	          if (o[0][n] > o[1][n]) return 1;if (o[0][n] !== o[1][n]) return -1;if (0 === n) return 0;
	        }
	      }function o(e, r, o) {
	        var i = a;"string" == typeof r && (o = r, r = void 0), void 0 === r && (r = !1), o && (i = t(o));var u = "" + i.version;for (var s in e) if (e.hasOwnProperty(s) && i[s]) return n([u, e[s]]) < 0;return r;
	      }function i(t, e, r) {
	        return !o(t, e, r);
	      }var u = !0,
	          a = t("undefined" != typeof navigator ? navigator.userAgent : "");return a.test = function (t) {
	        for (var e = 0; e < t.length; ++e) {
	          var r = t[e];if ("string" == typeof r && r in a) return !0;
	        }return !1;
	      }, a.isUnsupportedBrowser = o, a.compareVersions = n, a.check = i, a._detect = t, a;
	    });
	  }),
	      cc = sc && "object" == typeof sc && "default" in sc ? sc.default : sc,
	      fc = Object.freeze({ default: cc }),
	      pc = t(function (t) {
	    var e,
	        r,
	        n,
	        o,
	        i,
	        u,
	        a = function (t, e) {
	      function r() {
	        this.constructor = t;
	      }for (var n in e) s.call(e, n) && (t[n] = e[n]);return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
	    },
	        s = {}.hasOwnProperty;e = "default" in Ns ? Ns.default : Ns, o = ("default" in Gs ? Gs.default : Gs).colors, n = "default" in fc ? fc.default : fc, u = ("default" in kr ? kr.default : kr).nextTick, i = function (t) {
	      var e;if (t) return e = t.style, e.strokeWidth = "1", u(function () {
	        return e.strokeWidth = "0";
	      });
	    }, t.exports = r = function (t) {
	      function e() {
	        return e.__super__.constructor.apply(this, arguments);
	      }return a(e, t), e.prototype.k = "circle", e.prototype.tagName = "circle", e.prototype.defaultProps = { r: 18, fill: o.default }, e.prototype.getAttributes = function (t) {
	        return { fill: t.fill, r: t.hidden ? 0 : t.r };
	      }, e.prototype.hide = function () {
	        return this.attr({ r: 0, strokeWidth: 0 });
	      }, e;
	    }(e), (n.msie || n.msedge) && Object.defineProperties(r.prototype, { draw: { value: function () {
	          var t;return e.prototype.draw.apply(this, arguments), null == (t = this.state).interval && (t.interval = setInterval(i, 750, this.node)), this;
	        } } });
	  }),
	      lc = pc && "object" == typeof pc && "default" in pc ? pc.default : pc,
	      dc = Object.freeze({ default: lc }),
	      hc = t(function (t) {
	    var e,
	        r,
	        n,
	        o,
	        i,
	        u,
	        a,
	        s = function (t, e) {
	      function r() {
	        this.constructor = t;
	      }for (var n in e) c.call(e, n) && (t[n] = e[n]);return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
	    },
	        c = {}.hasOwnProperty;e = "default" in Ns ? Ns.default : Ns, i = "default" in kr ? kr.default : kr, o = i.M, n = i.L, a = i.url, u = "default" in Xs ? Xs.default : Xs, t.exports = r = function (t) {
	      function e() {
	        return e.__super__.constructor.apply(this, arguments);
	      }return s(e, t), e.prototype.k = "curve", e.prototype.tagName = "path", e.prototype.defaultProps = { x1: 0, y1: 0, x2: 0, y2: 0, cx: 0, cy: 0, type: 0, fill: "#fff", stroke: "#333", strokeWidth: 1, strokeDasharray: "", opacity: 0 }, e.UNDIRECT = u("curve-type"), e.DIRECT = u("curve-type"), e.BIDIRECT = u("curve-type"), e.prototype.isFarEnough = ~function () {
	        return Math.abs(this.props.x1 - this.props.x2) > .01 || Math.abs(this.props.y1 - this.props.y2) > .01;
	      }, e.prototype.j = function (t) {
	        return { fill: t.fill, stroke: t.stroke, strokeWidth: t.strokeWidth, strokeDasharray: t.strokeDasharray, fillOpacity: t.opacity, markerStart: this.isFarEnough && t.type === e.BIDIRECT ? a("#backwardArrow") : void 0, markerEnd: this.isFarEnough && t.type !== e.UNDIRECT ? a("#arrow") : void 0 };
	      }, e.prototype.getAttributes = function (t) {
	        return { d: Moveto(t.x1, t.y1) + Quadratic(t.cx, t.cy, t.x2, t.y2) };
	      }, Object.defineProperties(e.prototype, { isFarEnough: { get: function () {
	            return Math.abs(this.props.x1 - this.props.x2) > .01 || Math.abs(this.props.y1 - this.props.y2) > .01;
	          } } }), e;
	    }(e);
	  }),
	      yc = hc && "object" == typeof hc && "default" in hc ? hc.default : hc,
	      vc = Object.freeze({ default: yc }),
	      bc = t(function (t) {
	    var e,
	        r,
	        n,
	        o,
	        i,
	        u,
	        a,
	        s = function (t, e) {
	      function r() {
	        this.constructor = t;
	      }for (var n in e) c.call(e, n) && (t[n] = e[n]);return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
	    },
	        c = {}.hasOwnProperty;u = "default" in va ? va.default : va, a = "default" in Xs ? Xs.default : Xs, o = "default" in Ks ? Ks.default : Ks, i = "default" in Us ? Us.default : Us, r = "default" in vc ? vc.default : vc, e = "default" in ic ? ic.default : ic, t.exports = n = function (t) {
	      function e() {
	        return e.__super__.constructor.apply(this, arguments);
	      }return s(e, t), e.LINE = a("edge-"), e.CURVE = a("edge-"), e.UNDIRECT = o.UNDIRECT, e.DIRECT = o.DIRECT, e.BIDIRECT = o.BIDIRECT, e.prototype.k = "edge", e.prototype.defaultProps = { type: e.UNDIRECT }, e.prototype.created = function (t) {
	        var n, u, a, s, c;return a = t.stroke, s = t.strokeWidth, n = t.content, u = t.textNamespace, c = t.type, u || (u = "weight"), c.startsWith("line-type") ? (this.state.type = e.LINE, this.path = new o({ type: c, stroke: a, strokeWidth: s })) : c.startsWith("curve-type") && (this.state.type = e.CURVE, this.path = new r({ type: c })), n && (this.text = new i({ namespace: u, content: n })), this.setState({ value: 0, num: .3 });
	      }, e.prototype.updatePosition = function (t) {
	        var r, n, o, i, u, a, s, c, f, p, l, d, h, y, v, b, g, m, x, j, _, w, O, k;return n = t.cx1, u = t.cy1, p = null != (d = t.r1) ? d : 19, o = t.cx2, a = t.cy2, l = null != (h = t.r2) ? h : p, s = Math.sqrt(Math.pow(o - n, 2) + Math.pow(a - u, 2)), this.setState({ cx1: n, cy1: u, cx2: o, cy2: a }), this.text, u === a ? this.setState({ cy: u - 2 * this.state.num * p, cx: (n + o) / 2 }) : n === o ? this.setState({ cx: n - 2 * this.state.num * p, cy: (u + a) / 2 }) : (f = (u - a) / (n - o), c = -1 / f, x = (n + o) / 2, w = (u + a) / 2, b = 2 * p * this.state.num / Math.sqrt(1 + Math.pow(c, 2)), this.setState({ cx: x + b, cy: w + (c > 0 ? b : -b) })), null != (y = this.text) && y.attr({ x: this.state.cx, y: this.state.cy }), this.state.type === e.LINE ? this.path.attr({ x1: n + (o - n) * p / s, y1: u + (a - u) * p / s, x2: o + (n - o) * l / s, y2: a + (u - a) * l / s }) : this.state.type === e.CURVE && (v = [n, u, o, a], j = v[0], O = v[1], _ = v[2], k = v[3], j += (o - n) * p / s, O += (a - u) * p / s, _ += (n - o) * l / s, k += (u - a) * l / s, g = (j + _ + k - O) / 2, m = (O + k + j - _) / 2, r = g / 2 + j / 4 + _ / 4, i = m / 2 + O / 4 + k / 4, this.path.attr({ x1: j, y1: O, x2: _, y2: k, cx: r, cy: i })), this;
	      }, e.prototype.update = function (t) {
	        var e, r, n;return n = t.vertices, r = n[this.props.startVertexId].props, e = n[this.props.endVertexId].props, this.updatePosition({ cx1: r.x, cy1: r.y, cx2: e.x, cy2: e.y }), this;
	      }, e.prototype.m = function (t) {
	        if (null != t.stroke) return this.path.props.stroke = t.stroke;
	      }, e.prototype.paint = function (t) {
	        return this.path.attr({ stroke: t }), this;
	      }, e.prototype.nodes = function () {
	        return [this.path, this.text];
	      }, e;
	    }(e);
	  }),
	      gc = bc && "object" == typeof bc && "default" in bc ? bc.default : bc,
	      mc = Object.freeze({ default: gc }),
	      xc = t(function (t) {
	    var e,
	        r,
	        n,
	        o,
	        i,
	        u = function (t, e) {
	      function r() {
	        this.constructor = t;
	      }for (var n in e) a.call(e, n) && (t[n] = e[n]);return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
	    },
	        a = {}.hasOwnProperty;e = "default" in dc ? dc.default : dc, n = "default" in Us ? Us.default : Us, r = "default" in ic ? ic.default : ic, i = ("default" in kr ? kr.default : kr).f, t.exports = o = function (t) {
	      function r() {
	        return r.__super__.constructor.apply(this, arguments);
	      }return u(r, t), r.prototype.k = "vertex", r.prototype.created = function (t) {
	        var r;return this.subscript = t.subscript, this.circle = new e(), this.text = new n(), null != (r = this.subscript) ? r.props.namespace = "subscript" : void 0;
	      }, r.prototype.m = function () {
	        var t, e, r, n, o, i, u;return u = "0.35em", i = this.props, n = i.id, e = i.fill, t = i.content, r = i.fontSize, o = this.props.hidden ? 0 : this.props.r, this.circle.attr({ r: o, fill: e }), this.text.attr({ content: t, fontSize: r, y: u });
	      }, r.prototype.getAttributes = function (t) {
	        return { transform: i(t.x, t.y) };
	      }, r.prototype.changeXY = function (t, e) {
	        return this.attr({ x: this.props.x + t, y: this.props.y + e }), this;
	      }, r.prototype.q = function (t, e) {
	        return this.attr({ x: t, y: e }), this;
	      }, r.prototype.paint = function (t) {
	        return this.circle.attr({ fill: t }), this;
	      }, r.prototype.nodes = function () {
	        return [this.circle, this.text, this.subscript];
	      }, r;
	    }(r);
	  }),
	      jc = xc && "object" == typeof xc && "default" in xc ? xc.default : xc,
	      _c = Pn ? Pn.isConcatSpreadable : void 0,
	      wc = Je(),
	      Oc = tr(Ke),
	      kc = de(function (t, e) {
	    if (null == t) return [];var r = e.length;return r > 1 && he(t, e[0], e[1]) ? e = [] : r > 2 && he(e[0], e[1], e[2]) && (e = [e[0]]), ir(t, Xe(e, 1), []);
	  }),
	      Ac = Object.freeze({ default: kc }),
	      Ec = t(function (t) {
	    var e,
	        r,
	        n,
	        o,
	        i,
	        u = function (t, e) {
	      function r() {
	        this.constructor = t;
	      }for (var n in e) a.call(e, n) && (t[n] = e[n]);return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
	    },
	        a = {}.hasOwnProperty;r = "default" in rc ? rc.default : rc, o = "default" in Us ? Us.default : Us, e = "default" in ic ? ic.default : ic, i = ("default" in kr ? kr.default : kr).f, t.exports = n = function (t) {
	      function e() {
	        return e.__super__.constructor.apply(this, arguments);
	      }return u(e, t), e.prototype.k = "rectex", e.prototype.created = function () {
	        return this.rect = new r(), this.text = new o();
	      }, e.prototype.m = function (t) {
	        var e, r, n, o, i;return r = t.height, i = t.width, e = t.content, n = t.rx, o = t.ry, this.rect.attr({ height: r, width: i, rx: n, ry: o, x: 0, y: 0 }), this.text.attr({ content: e, y: "0.35em" });
	      }, e.prototype.getAttributes = function (t) {
	        return { transform: i(t.x, t.y) };
	      }, e.prototype.nodes = function () {
	        return [this.rect, this.text];
	      }, e;
	    }(e);
	  }),
	      Mc = Ec && "object" == typeof Ec && "default" in Ec ? Ec.default : Ec,
	      Ic = Object.freeze({ default: Mc }),
	      Pc = t(function (t) {
	    var e,
	        r,
	        n,
	        o,
	        i,
	        u,
	        a,
	        s,
	        c,
	        f,
	        p = function (t, e) {
	      function r() {
	        this.constructor = t;
	      }for (var n in e) l.call(e, n) && (t[n] = e[n]);return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
	    },
	        l = {}.hasOwnProperty,
	        d = [].slice;o = "default" in rc ? rc.default : rc, r = "default" in mc ? mc.default : mc, i = "default" in Ic ? Ic.default : Ic, e = "default" in ic ? ic.default : ic, c = "default" in Ac ? Ac.default : Ac, a = "default" in kr ? kr.default : kr, f = a.f, s = a.b, u = function (t) {
	      return parseInt(t.props.content);
	    }, t.exports = n = function (t) {
	      function e() {
	        return e.__super__.constructor.apply(this, arguments);
	      }return p(e, t), e.prototype.k = "multibox", e.prototype.counter = 0, e.prototype.defaultProps = { x: 0, y: 0, unit: 33, spacing: 1 }, e.prototype.created = function () {
	        if (this.s = new o(), this.texts = [], this.props.numbers) return this.insert(this.props.numbers);
	      }, e.prototype.insert = function (t) {
	        var e, r, n;if (Array.isArray(t)) {
	          for (e = 0, r = t.length; e < r; e++) n = t[e], this.insert(n);return this;
	        }return this.texts.push(new i({ id: this.counter++, content: String(t) })), this.texts = c(this.texts, u), this;
	      }, e.prototype.getAttributes = function (t) {
	        return { transform: f(t.x, t.y) };
	      }, e.prototype.remove = function (t) {
	        var e;if (e = this.numbers.indexOf(t), e !== -1) this.texts[e].hide();else if (pr) throw ReferenceError("Attempting to remove a number not within this multibox.");return this;
	      }, e.prototype.m = function (t) {
	        var e, r, n, o, i, u, a, c, f, p, l;for (c = t.unit, u = t.spacing, this.s.attr({ x: t.x + (this.size - 1) / 2 * (c + u), y: t.y, fill: s(26, 165, 228, .78039), width: this.width, height: this.height }), p = t.x, l = t.y, e = f = c, i = this.texts, r = n = 0, o = i.length; n < o; r = ++n) a = i[r], a.props.hidden || (a.attr({ x: p, y: l, height: e, width: f }), p += c + u);
	      }, e.prototype.pathTo = function (t, e) {
	        var r, n, o, i, u, a;return u = this.width, r = this.height, n = this.props, i = n.unit, a = n.y, o = n.spacing, { x1: 2 * e.props.x - e.width / 2 + o / 2, y1: 2 * e.props.y - e.height / 2 + i, x2: 2 * this.texts[t].props.x + i, y2: 2 * a + i / 2 - i };
	      }, e.prototype.nodes = function () {
	        return [this.s].concat(d.call(this.texts));
	      }, Object.defineProperties(e.prototype, { size: { get: function () {
	            return this.texts.length;
	          } }, numbers: { get: function () {
	            return this.texts.map(u);
	          } }, width: { get: function () {
	            return this.props.spacing + (this.props.unit + this.props.spacing) * this.size;
	          } }, height: { get: function () {
	            return this.props.unit + 2 * this.props.spacing;
	          } } }), e;
	    }(e);
	  }),
	      Cc = Pc && "object" == typeof Pc && "default" in Pc ? Pc.default : Pc,
	      Sc = Object.freeze({ default: ar }),
	      zc = Object.freeze({ default: fr }),
	      Dc = t(function (t) {
	    var e,
	        r,
	        n,
	        o,
	        i,
	        u,
	        a,
	        s,
	        c = function (t, e) {
	      function r() {
	        this.constructor = t;
	      }for (var n in e) f.call(e, n) && (t[n] = e[n]);return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
	    },
	        f = {}.hasOwnProperty;n = "default" in ba ? ba.default : ba, i = "default" in zc ? zc.default : zc, u = "default" in Ea ? Ea.default : Ea, s = "default" in Sc ? Sc.default : Sc, r = "default" in ic ? ic.default : ic, o = "default" in Gs ? Gs.default : Gs, a = "default" in Xs ? Xs.default : Xs, t.exports = e = function (t) {
	      function e(t) {
	        e.__super__.constructor.call(this, { id: t });
	      }return c(e, t), e.prototype.nodes = function () {
	        return n(i(s(this), function (t) {
	          return null != (null != t ? t.draw : void 0);
	        }));
	      }, e;
	    }(r), Object.defineProperties(e.prototype, { k: { value: "collection" }, namespace: { value: "va" }, getAttributes: { value: function (t) {
	          return { "data-name": this.props.name };
	        } }, forEach: { value: function (t) {
	          var e, r;for (e in this) f.call(this, e) && (r = this[e], null != (null != r ? r.draw : void 0) && t(r, e, this));return this;
	        } }, parentNode: { get: function () {
	          return o.parentNode;
	        } }, length: { get: function () {
	          var t, e, r;t = 0;for (e in this) f.call(this, e) && (r = this[e], null != (null != r ? r.draw : void 0) && (t = Math.max(parseInt(e) + 1, t)));return t;
	        } } });
	  }),
	      Tc = Dc && "object" == typeof Dc && "default" in Dc ? Dc.default : Dc;exports.Text = Rs, exports.Line = Js, exports.Rect = ec, exports.Card = ac, exports.Circle = lc, exports.Edge = gc, exports.Vertex = jc, exports.Multibox = Cc, exports.Rectex = Mc, exports.Collection = Tc, exports.config = Ze, exports.createElement = xa, exports.toElement = wa;
	}();
	});

	var index_min$1 = (index_min && typeof index_min === 'object' && 'default' in index_min ? index_min['default'] : index_min);
	var toElement = index_min.toElement;
	var createElement = index_min.createElement;
	var config$1 = index_min.config;
	var Collection = index_min.Collection;
	var Rectex = index_min.Rectex;
	var Multibox = index_min.Multibox;
	var Vertex = index_min.Vertex;
	var Edge = index_min.Edge;
	var Circle = index_min.Circle;
	var Card = index_min.Card;
	var Rect = index_min.Rect;
	var Line = index_min.Line;
	var Text = index_min.Text;

var require$$1$16 = Object.freeze({
	  default: index_min$1,
	  toElement: toElement,
	  createElement: createElement,
	  config: config$1,
	  Collection: Collection,
	  Rectex: Rectex,
	  Multibox: Multibox,
	  Vertex: Vertex,
	  Edge: Edge,
	  Circle: Circle,
	  Card: Card,
	  Rect: Rect,
	  Line: Line,
	  Text: Text
	});

	var className = 'highlighted';
	var where = 'text';

	var guideContainer = createElement('p', null);

	function ready(parentNode) {
		$(parentNode).children().remove();
		$(parentNode).append(guideContainer);
	}

	function status(text) {
		guideContainer.innerHTML = text;
	}

	var previousHighlights = [];

	var Codes = function () {
		function Codes(codes, highlight, status) {
			babelHelpers.classCallCheck(this, Codes);

			this.codes = codes;
			this.highlight = highlight;
			this._status = status;
		}

		Codes.prototype.draw = function draw() {
			if (this.codes !== codemirror.getValue()) {
				codemirror.setValue(this.codes);
			}

			for (var _iterator = difference(previousHighlights, this.highlight), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
				var _ref;

				if (_isArray) {
					if (_i >= _iterator.length) break;
					_ref = _iterator[_i++];
				} else {
					_i = _iterator.next();
					if (_i.done) break;
					_ref = _i.value;
				}

				var line = _ref;

				codemirror.removeLineClass(line, where, className);
			}

			for (var _iterator2 = this.highlight, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
				var _ref2;

				if (_isArray2) {
					if (_i2 >= _iterator2.length) break;
					_ref2 = _iterator2[_i2++];
				} else {
					_i2 = _iterator2.next();
					if (_i2.done) break;
					_ref2 = _i2.value;
				}

				var _line = _ref2;

				codemirror.addLineClass(_line, where, className);
			}

			status(this._status);
			previousHighlights = this.highlight;
		};

		Codes.prototype.clone = function clone() {
			return new Codes(this.codes, this.highlight, this._status);
		};

		return Codes;
	}();

	function codetrace(codes, highlight, status) {
		if (Array.isArray(codes)) {
			codes = codes.join('\n');
		}
		return new Codes(codes, highlight, status);
	}

	var shim = __commonjs(function (module) {
	'use strict';

	var indexOf = String.prototype.indexOf;

	module.exports = function (searchString/*, position*/) {
		return indexOf.call(this, searchString, arguments[1]) > -1;
	};
	});

	var shim$1 = (shim && typeof shim === 'object' && 'default' in shim ? shim['default'] : shim);


	var require$$0$30 = Object.freeze({
		default: shim$1
	});

	var isImplemented = __commonjs(function (module) {
	'use strict';

	var str = 'razdwatrzy';

	module.exports = function () {
		if (typeof str.contains !== 'function') return false;
		return ((str.contains('dwa') === true) && (str.contains('foo') === false));
	};
	});

	var isImplemented$1 = (isImplemented && typeof isImplemented === 'object' && 'default' in isImplemented ? isImplemented['default'] : isImplemented);


	var require$$1$17 = Object.freeze({
		default: isImplemented$1
	});

	var index$1 = __commonjs(function (module) {
	'use strict';

	module.exports = ('default' in require$$1$17 ? require$$1$17['default'] : require$$1$17)()
		? String.prototype.contains
		: ('default' in require$$0$30 ? require$$0$30['default'] : require$$0$30);
	});

	var index$2 = (index$1 && typeof index$1 === 'object' && 'default' in index$1 ? index$1['default'] : index$1);


	var require$$0$29 = Object.freeze({
		default: index$2
	});

	var isCallable = __commonjs(function (module) {
	// Deprecated

	'use strict';

	module.exports = function (obj) { return typeof obj === 'function'; };
	});

	var isCallable$1 = (isCallable && typeof isCallable === 'object' && 'default' in isCallable ? isCallable['default'] : isCallable);


	var require$$1$18 = Object.freeze({
		default: isCallable$1
	});

	var normalizeOptions = __commonjs(function (module) {
	'use strict';

	var forEach = Array.prototype.forEach, create = Object.create;

	var process = function (src, obj) {
		var key;
		for (key in src) obj[key] = src[key];
	};

	module.exports = function (options/*, …options*/) {
		var result = create(null);
		forEach.call(arguments, function (options) {
			if (options == null) return;
			process(Object(options), result);
		});
		return result;
	};
	});

	var normalizeOptions$1 = (normalizeOptions && typeof normalizeOptions === 'object' && 'default' in normalizeOptions ? normalizeOptions['default'] : normalizeOptions);


	var require$$2$10 = Object.freeze({
		default: normalizeOptions$1
	});

	var validValue = __commonjs(function (module) {
	'use strict';

	module.exports = function (value) {
		if (value == null) throw new TypeError("Cannot use null or undefined");
		return value;
	};
	});

	var validValue$1 = (validValue && typeof validValue === 'object' && 'default' in validValue ? validValue['default'] : validValue);


	var require$$0$32 = Object.freeze({
		default: validValue$1
	});

	var shim$4 = __commonjs(function (module) {
	'use strict';

	var keys = Object.keys;

	module.exports = function (object) {
		return keys(object == null ? object : Object(object));
	};
	});

	var shim$5 = (shim$4 && typeof shim$4 === 'object' && 'default' in shim$4 ? shim$4['default'] : shim$4);


	var require$$0$33 = Object.freeze({
		default: shim$5
	});

	var isImplemented$2 = __commonjs(function (module) {
	'use strict';

	module.exports = function () {
		try {
			Object.keys('primitive');
			return true;
		} catch (e) { return false; }
	};
	});

	var isImplemented$3 = (isImplemented$2 && typeof isImplemented$2 === 'object' && 'default' in isImplemented$2 ? isImplemented$2['default'] : isImplemented$2);


	var require$$1$20 = Object.freeze({
		default: isImplemented$3
	});

	var index$5 = __commonjs(function (module) {
	'use strict';

	module.exports = ('default' in require$$1$20 ? require$$1$20['default'] : require$$1$20)()
		? Object.keys
		: ('default' in require$$0$33 ? require$$0$33['default'] : require$$0$33);
	});

	var index$6 = (index$5 && typeof index$5 === 'object' && 'default' in index$5 ? index$5['default'] : index$5);


	var require$$1$19 = Object.freeze({
		default: index$6
	});

	var shim$2 = __commonjs(function (module) {
	'use strict';

	var keys  = ('default' in require$$1$19 ? require$$1$19['default'] : require$$1$19)
	  , value = ('default' in require$$0$32 ? require$$0$32['default'] : require$$0$32)

	  , max = Math.max;

	module.exports = function (dest, src/*, …srcn*/) {
		var error, i, l = max(arguments.length, 2), assign;
		dest = Object(value(dest));
		assign = function (key) {
			try { dest[key] = src[key]; } catch (e) {
				if (!error) error = e;
			}
		};
		for (i = 1; i < l; ++i) {
			src = arguments[i];
			keys(src).forEach(assign);
		}
		if (error !== undefined) throw error;
		return dest;
	};
	});

	var shim$3 = (shim$2 && typeof shim$2 === 'object' && 'default' in shim$2 ? shim$2['default'] : shim$2);


	var require$$0$31 = Object.freeze({
		default: shim$3
	});

	var isImplemented$4 = __commonjs(function (module) {
	'use strict';

	module.exports = function () {
		var assign = Object.assign, obj;
		if (typeof assign !== 'function') return false;
		obj = { foo: 'raz' };
		assign(obj, { bar: 'dwa' }, { trzy: 'trzy' });
		return (obj.foo + obj.bar + obj.trzy) === 'razdwatrzy';
	};
	});

	var isImplemented$5 = (isImplemented$4 && typeof isImplemented$4 === 'object' && 'default' in isImplemented$4 ? isImplemented$4['default'] : isImplemented$4);


	var require$$1$21 = Object.freeze({
		default: isImplemented$5
	});

	var index$3 = __commonjs(function (module) {
	'use strict';

	module.exports = ('default' in require$$1$21 ? require$$1$21['default'] : require$$1$21)()
		? Object.assign
		: ('default' in require$$0$31 ? require$$0$31['default'] : require$$0$31);
	});

	var index$4 = (index$3 && typeof index$3 === 'object' && 'default' in index$3 ? index$3['default'] : index$3);


	var require$$3$6 = Object.freeze({
		default: index$4
	});

	var index = __commonjs(function (module) {
	'use strict';

	var assign        = ('default' in require$$3$6 ? require$$3$6['default'] : require$$3$6)
	  , normalizeOpts = ('default' in require$$2$10 ? require$$2$10['default'] : require$$2$10)
	  , isCallable    = ('default' in require$$1$18 ? require$$1$18['default'] : require$$1$18)
	  , contains      = ('default' in require$$0$29 ? require$$0$29['default'] : require$$0$29)

	  , d;

	d = module.exports = function (dscr, value/*, options*/) {
		var c, e, w, options, desc;
		if ((arguments.length < 2) || (typeof dscr !== 'string')) {
			options = value;
			value = dscr;
			dscr = null;
		} else {
			options = arguments[2];
		}
		if (dscr == null) {
			c = w = true;
			e = false;
		} else {
			c = contains.call(dscr, 'c');
			e = contains.call(dscr, 'e');
			w = contains.call(dscr, 'w');
		}

		desc = { value: value, configurable: c, enumerable: e, writable: w };
		return !options ? desc : assign(normalizeOpts(options), desc);
	};

	d.gs = function (dscr, get, set/*, options*/) {
		var c, e, options, desc;
		if (typeof dscr !== 'string') {
			options = set;
			set = get;
			get = dscr;
			dscr = null;
		} else {
			options = arguments[3];
		}
		if (get == null) {
			get = undefined;
		} else if (!isCallable(get)) {
			options = get;
			get = set = undefined;
		} else if (set == null) {
			set = undefined;
		} else if (!isCallable(set)) {
			options = set;
			set = undefined;
		}
		if (dscr == null) {
			c = true;
			e = false;
		} else {
			c = contains.call(dscr, 'c');
			e = contains.call(dscr, 'e');
		}

		desc = { get: get, set: set, configurable: c, enumerable: e };
		return !options ? desc : assign(normalizeOpts(options), desc);
	};
	});

	var d = (index && typeof index === 'object' && 'default' in index ? index['default'] : index);

	var ArrProto = Array.prototype;

	// An ObservableArray will show up as an array of [undefined x length] in Chrome
	// console. This is the expected behavior, because Chrome thinks objects with a
	// numeric `length` property and a `splice` function is an array.
	// To remove this "bug", delete 'splice' in this page.

	var ObservableArray = function () {
	    function ObservableArray() {
	        babelHelpers.classCallCheck(this, ObservableArray);

	        this.items = Array.apply(null, arguments);
	        this.listeners = {};
	    }

	    ObservableArray.prototype.on = function on(name, callback) {
	        var listeners = this.listeners;
	        (listeners[name] || (listeners[name] = [])).push(callback);
	        return this;
	    };

	    ObservableArray.prototype.off = function off(callback) {
	        for (var _iterator = values(this.listeners), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;

	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }

	            var group = _ref;

	            var index = group.indexOf(callback);
	            if (index > -1) {
	                group.splice(index, 1);
	            }
	        }
	        return this;
	    };

	    ObservableArray.prototype.emit = function emit(name) {
	        var args = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	        var list = this.listeners[name];
	        if (list && list.length) {
	            for (var _iterator2 = list, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	                var _ref2;

	                if (_isArray2) {
	                    if (_i2 >= _iterator2.length) break;
	                    _ref2 = _iterator2[_i2++];
	                } else {
	                    _i2 = _iterator2.next();
	                    if (_i2.done) break;
	                    _ref2 = _i2.value;
	                }

	                var callback = _ref2;

	                callback.apply(this, args);
	            }
	        }
	        return this;
	    };

	    ObservableArray.prototype.get = function get(num) {
	        return this.items[num];
	    };

	    ObservableArray.prototype.set = function set(num, val) {
	        this.items[num] = val;
	        return val;
	    };

	    ObservableArray.prototype.clear = function clear() {
	        return this.items = [];
	    };

	    ObservableArray.prototype.toJSON = function toJSON() {
	        return this.items;
	    };

	    ObservableArray.prototype.toArray = function toArray() {
	        return this.items;
	    };

	    ObservableArray.prototype.replaceWith = function replaceWith(array) {
	        this.items = array;
	        return this.emit('replaceWith', arguments);
	    };

	    // if __DEV__
	    //  for i in [0..50]
	    //      do (i) => defineProperty @prototype, name, value: -> @items[i]

	    babelHelpers.createClass(ObservableArray, [{
	        key: 'first',
	        get: function get() {
	            return this.items[first];
	        }
	    }, {
	        key: 'last',
	        get: function get() {
	            return this.items[this.items.length - 1];
	        }
	    }, {
	        key: 'length',
	        get: function get() {
	            return this.items.length;
	        }
	    }]);
	    return ObservableArray;
	}();

	var methods = Object.getOwnPropertyNames(ArrProto).filter(function (name) {
	    return typeof ArrProto[name] === 'function';
	});

	var mutatingMethods = 'copyWithin fill pop push reverse shift sort splice unshift'.split(' ');

	if (typeof Symbol === 'function' && Symbol.iterator) {
	    methods.push(Symbol.iterator);
	}

	var _loop = function _loop() {
	    if (_isArray3) {
	        if (_i3 >= _iterator3.length) return 'break';
	        _ref3 = _iterator3[_i3++];
	    } else {
	        _i3 = _iterator3.next();
	        if (_i3.done) return 'break';
	        _ref3 = _i3.value;
	    }

	    var name = _ref3;

	    var value = void 0;
	    if (ObservableArray.prototype.hasOwnProperty(name)) {
	        return 'continue';
	    } else if (mutatingMethods.includes(name)) {
	        value = function value() {
	            var ref = this.items[name].apply(this.items, arguments);
	            this.emit(name, arguments);
	            this.emit('change', [this]);
	            return ref;
	        };
	    } else {
	        value = function value() {
	            return this.items[name].apply(this.items, arguments);
	        };
	    }
	    Object.defineProperty(ObservableArray.prototype, name, d(value));
	};

	_loop2: for (var _iterator3 = methods, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	    var _ref3;

	    var _ret = _loop();

	    switch (_ret) {
	        case 'break':
	            break _loop2;

	        case 'continue':
	            continue;}
	}

	function Algorithm() {
	    var $ = this;
	    $.charList = [].concat(babelHelpers.toConsumableArray('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
	    $.states = new ObservableArray();
	    $.initState = new State();
	}

	Algorithm.prototype = {

	    constructor: Algorithm,

	    reset: function reset() {
	        this.step = 0;
	        return this;
	    },
	    addState: function addState(state) {
	        this.states.push(state);
	        return state;
	    },
	    clearState: function clearState(removeAll) {
	        var $ = this;
	        if ($.hasState && !removeAll) {
	            $.states.replaceWith([$.states.last]);
	        } else {
	            $.states.clear();
	        }
	        return $;
	    },


	    get randomChar() {
	        var char = sample(this.charList);
	        pull(this.charList, char);
	        return char;
	    },

	    get hasState() {
	        return this.states.length > 0;
	    },

	    get lastState() {
	        if (this.hasState) {
	            return this.states.last;
	        } else if (__DEV__) {
	            throw ReferenceError('No lastState available.');
	        }
	    }
	};

	var State = function () {
	    function State() {
	        babelHelpers.classCallCheck(this, State);

	        var $ = this;
	        $.edges = new Collection('edges');
	        $.vertices = new Collection('vertices');
	        $.rects = new Collection('rects');
	        $.rectex = new Collection('rectex');
	        $.multibox = new Collection('multibox');
	        $.texts = new Collection('texts');
	        $.lines = new Collection('lines');
	        $.cards = new Collection('cards');
	    }

	    State.prototype.clone = function clone() {
	        var state = new this.constructor();
	        for (var _iterator = Object.keys(this), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;

	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }

	            var key = _ref;

	            var val = this[key];
	            if (val && val.clone) {
	                state[key] = val.clone();
	            }
	        }
	        return state;
	    };

	    State.prototype.codetrace = function codetrace$$() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        if (args.length === 2) {
	            args.unshift(this.codes.codes);
	        }
	        this.codes = codetrace.apply(this, args);
	        return this;
	    };

	    State.prototype.draw = function draw(duration) {
	        for (var _iterator2 = this.nodes(), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	            var _ref2;

	            if (_isArray2) {
	                if (_i2 >= _iterator2.length) break;
	                _ref2 = _iterator2[_i2++];
	            } else {
	                _i2 = _iterator2.next();
	                if (_i2.done) break;
	                _ref2 = _i2.value;
	            }

	            var item = _ref2;

	            if (item && item.draw) {
	                item.draw(duration);
	            }
	        }
	    };

	    State.prototype.nodes = function nodes() {
	        var $ = this;
	        return [$.edges, $.lines, $.vertices, $.rects, $.rectex, $.multibox, $.texts, $.codes, $.cards];
	    };

	    return State;
	}();

var require$$0$28 = Object.freeze({
	    Algorithm: Algorithm,
	    State: State
	});

	var BasicGraph = __commonjs(function (module) {
	var Algorithm,
	    BasicGraph,
	    Collection,
	    Edge,
	    Line,
	    State,
	    Text,
	    Vertex,
	    _,
	    ref,
	    ref1,
	    extend = function extend(child, parent) {
	  for (var key in parent) {
	    if (hasProp.call(parent, key)) child[key] = parent[key];
	  }function ctor() {
	    this.constructor = child;
	  }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
	},
	    hasProp = {}.hasOwnProperty;

	_ = ('default' in require$$2$9 ? require$$2$9['default'] : require$$2$9);

	ref = ('default' in require$$1$16 ? require$$1$16['default'] : require$$1$16), Collection = ref.Collection, Vertex = ref.Vertex, Edge = ref.Edge, Line = ref.Line, Text = ref.Text;

	ref1 = ('default' in require$$0$28 ? require$$0$28['default'] : require$$0$28), Algorithm = ref1.Algorithm, State = ref1.State;

	module.exports = BasicGraph = function (superClass) {
	  extend(BasicGraph, superClass);

	  BasicGraph.prototype.defaultSubscript = '';

	  BasicGraph.prototype.numRow = 0;

	  BasicGraph.prototype.numColumn = 0;

	  BasicGraph.prototype.numVertex = 0;

	  BasicGraph.prototype.numEdge = 0;

	  BasicGraph.prototype.maxId = 0;

	  BasicGraph.prototype.startNode = 0;

	  BasicGraph.prototype.circleR = 15;

	  BasicGraph.prototype.deltaWeightVertex = 15;

	  function BasicGraph() {
	    BasicGraph.__super__.constructor.apply(this, arguments);
	    this.adjList = [];
	    this.valueGraph = [];
	    this.coloredEdge = function () {
	      var i, ref2, results;
	      results = [];
	      for (i = 0, ref2 = this.numVertex; 0 <= ref2 ? i < ref2 : i > ref2; 0 <= ref2 ? i++ : i--) {
	        results.push(false);
	      }
	      return results;
	    }.call(this);
	    this.vertices = [];
	    this.node = [];
	  }

	  BasicGraph.prototype.travLevel = function () {
	    var i, len, pos, ref2, ref3, v, w;
	    this.queue = [];
	    this.flag = function () {
	      var i, ref2, results;
	      results = [];
	      for (i = 0, ref2 = this.numVertex; 0 <= ref2 ? i < ref2 : i > ref2; 0 <= ref2 ? i++ : i--) {
	        results.push(false);
	      }
	      return results;
	    }.call(this);
	    pos = 0;
	    this.queue.push(this.node[this.startNode]);
	    this.flag[this.startNode] = true;
	    while (pos < this.queue.length) {
	      this.current = this.queue[pos];
	      ref2 = this.adjList[this.current.id];
	      for (i = 0, len = ref2.length; i < len; i++) {
	        ref3 = ref2[i], v = ref3.v, w = ref3.w;
	        if (!this.flag[v]) {
	          this.flag[v] = true;
	          this.queue.push(this.node[v]);
	        }
	      }
	      pos += 1;
	    }
	    return this.queue;
	  };

	  BasicGraph.prototype.genVertexes = function () {
	    var i, id, len, ref2, ref3, value, vertexes, x, y;
	    vertexes = new Collection('vertices');
	    ref2 = this.travLevel();
	    for (i = 0, len = ref2.length; i < len; i++) {
	      ref3 = ref2[i], value = ref3.value, x = ref3.x, y = ref3.y, id = ref3.id;
	      vertexes[id] = new Vertex({
	        id: id,
	        content: value,
	        x: x,
	        y: y,
	        subscript: new Text({
	          id: id,
	          x: this.deltaWeightVertex,
	          y: this.deltaWeightVertex,
	          content: this.defaultSubscript,
	          fontStyle: 'italic'
	        })
	      });
	    }
	    return vertexes;
	  };

	  BasicGraph.prototype.duplicateState = function (oldState) {
	    var edge, i, j, key, len, len1, ref2, ref3, state, vertex, vertexes;
	    vertexes = this.genVertexes();
	    state = new State();
	    state.codes = oldState.codes.clone();
	    state.vertices = vertexes;
	    ref2 = oldState.edges;
	    for (key = i = 0, len = ref2.length; i < len; key = ++i) {
	      edge = ref2[key];
	      if (edge) {
	        state.edges[key] = edge.clone().status('');
	      }
	    }
	    ref3 = oldState.vertices;
	    for (key = j = 0, len1 = ref3.length; j < len1; key = ++j) {
	      vertex = ref3[key];
	      if (vertex) {
	        state.vertices[key] = vertex.clone().status('');
	      }
	    }
	    return state;
	  };

	  BasicGraph.prototype.genInitState = function (codes, initStatus) {
	    var edge, i, j, k, len, len1, maxLineId, obj, ref2, ref3, ref4, ref5, state, u, v, vertexes, w;
	    if (codes == null) {
	      codes = [];
	    }
	    if (initStatus == null) {
	      initStatus = '';
	    }
	    if (this.hasState) {
	      state = this.duplicateState(this.lastState);
	      state.codetrace(codes, [], initStatus);
	      return state;
	    }
	    vertexes = this.genVertexes();
	    state = new State();
	    state.vertices = vertexes;
	    maxLineId = 0;
	    for (u = i = 0, ref2 = this.numVertex; 0 <= ref2 ? i < ref2 : i > ref2; u = 0 <= ref2 ? ++i : --i) {
	      ref3 = this.adjList[u];
	      for (j = 0, len = ref3.length; j < len; j++) {
	        ref4 = ref3[j], v = ref4.v, w = ref4.w;
	        maxLineId += 1;
	        edge = new Edge({
	          id: maxLineId,
	          startVertexId: u,
	          endVertexId: v,
	          type: Line.UNDIRECT,
	          content: w
	        });
	        edge.updatePosition({
	          cx1: this.node[u].x,
	          cy1: this.node[u].y,
	          r1: this.circleR,
	          cx2: this.node[v].x,
	          cy2: this.node[v].y
	        });
	        ref5 = this.deltaEdgeWeightLocation;
	        for (k = 0, len1 = ref5.length; k < len1; k++) {
	          obj = ref5[k];
	          if (obj.u === u && obj.v === v) {
	            edge.text.attr({
	              x: edge.state.cx + obj.deltaX,
	              y: edge.state.cy + obj.deltaY
	            });
	          }
	        }
	        state.edges[maxLineId] = edge;
	        this.valueGraph[u][v] = maxLineId;
	      }
	    }
	    state.codetrace(codes, [], initStatus);
	    return state;
	  };

	  return BasicGraph;
	}(Algorithm);
	});

	var BasicGraph$1 = (BasicGraph && typeof BasicGraph === 'object' && 'default' in BasicGraph ? BasicGraph['default'] : BasicGraph);


	var require$$0$27 = Object.freeze({
	  default: BasicGraph$1
	});

	var DisjointSet = __commonjs(function (module) {
	var DisjointSet;

	module.exports = DisjointSet = function () {
	  function DisjointSet(arrayOfKeys) {
	    var i, key, len;
	    if (arrayOfKeys == null) {
	      arrayOfKeys = [];
	    }
	    this.parents = {};
	    this.ranks = {};
	    for (i = 0, len = arrayOfKeys.length; i < len; i++) {
	      key = arrayOfKeys[i];
	      this.parents[key] = key;
	      this.ranks[key] = 0;
	    }
	  }

	  DisjointSet.prototype.find = function (key) {
	    if (this.parents[key] !== key) {
	      this.parents[key] = this.find(this.parents[key]);
	    }
	    return this.parents[key];
	  };

	  DisjointSet.prototype.union = function (x, y) {
	    var xRoot, yRoot;
	    xRoot = this.find(x);
	    yRoot = this.find(y);
	    if (xRoot !== yRoot) {
	      if (this.ranks[xRoot] < this.ranks[yRoot]) {
	        return this.parents[xRoot] = yRoot;
	      } else if (this.ranks[xRoot] > this.ranks[yRoot]) {
	        return this.parents[yRoot] = xRoot;
	      } else {
	        this.parents[yRoot] = xRoot;
	        return this.ranks[xRoot] += 1;
	      }
	    }
	  };

	  return DisjointSet;
	}();
	});

	var DisjointSet$1 = (DisjointSet && typeof DisjointSet === 'object' && 'default' in DisjointSet ? DisjointSet['default'] : DisjointSet);


	var require$$1$22 = Object.freeze({
	  default: DisjointSet$1
	});

	var Kruskal = __commonjs(function (module) {
	var BasicGraph,
	    DisjointSet,
	    Kruskal,
	    gapX,
	    gapY,
	    rootX,
	    rootY,
	    extend = function extend(child, parent) {
	  for (var key in parent) {
	    if (hasProp.call(parent, key)) child[key] = parent[key];
	  }function ctor() {
	    this.constructor = child;
	  }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
	},
	    hasProp = {}.hasOwnProperty;

	DisjointSet = ('default' in require$$1$22 ? require$$1$22['default'] : require$$1$22);

	BasicGraph = ('default' in require$$0$27 ? require$$0$27['default'] : require$$0$27);

	rootY = 100;

	rootX = 600;

	gapY = 80;

	gapX = 300;

	module.exports = Kruskal = function (superClass) {
	  extend(Kruskal, superClass);

	  function Kruskal(model) {
	    var i, len, ref, vertex;
	    Kruskal.__super__.constructor.apply(this, arguments);
	    this.numRow = model.numVertex;
	    this.numColumn = model.numVertex;
	    this.numVertex = model.numVertex;
	    this.deltaEdgeWeightLocation = model.deltaEdgeWeightLocation;
	    this.numEdge = model.numEdge;
	    this.adjList = model.graphAdjList;
	    this.valueGraph = function () {
	      var i, ref, results;
	      results = [];
	      for (i = 0, ref = this.numColumn; 0 <= ref ? i < ref : i > ref; 0 <= ref ? i++ : i--) {
	        results.push(function () {
	          var j, ref1, results1;
	          results1 = [];
	          for (j = 0, ref1 = this.numRow; 0 <= ref1 ? j < ref1 : j > ref1; 0 <= ref1 ? j++ : j--) {
	            results1.push(0);
	          }
	          return results1;
	        }.call(this));
	      }
	      return results;
	    }.call(this);
	    this.maxId = -1;
	    ref = model.graphVertex;
	    for (i = 0, len = ref.length; i < len; i++) {
	      vertex = ref[i];
	      this.node[vertex[0]] = {
	        value: this.randomChar,
	        id: this.maxId += 1,
	        x: vertex[1],
	        y: vertex[2]
	      };
	      this.vertices.push(this.node[vertex[0]].id);
	    }
	    this.adjList = model.graphAdjList;
	    this.initState = this.genInitState();
	  }

	  Kruskal.prototype.run = function () {
	    var codes, edge, i, j, k, len, len1, minimumSpanningTree, ref, ref1, ref2, set, sortedEdges, state, u, v, value, w;
	    codes = 'Sort E edges by increasing weight\nT = {}\nforeach edge ∈ edgeList\n  if adding edge does not form a cycle\n    add edge to T\n  else ignore edge\nT is an MST';
	    minimumSpanningTree = 0.0;
	    sortedEdges = [];
	    value = 1;
	    for (u = i = 0, ref = this.numVertex; 0 <= ref ? i < ref : i > ref; u = 0 <= ref ? ++i : --i) {
	      ref1 = this.adjList[u];
	      for (j = 0, len = ref1.length; j < len; j++) {
	        ref2 = ref1[j], v = ref2.v, w = ref2.w;
	        sortedEdges.push([u, v, w]);
	      }
	    }
	    set = new DisjointSet(this.vertices);
	    sortedEdges.sort(function (a, b) {
	      return a[2] - b[2];
	    });
	    state = this.genInitState(codes, '[任务] Kruskal 算法演示');
	    this.addState(state);
	    for (k = 0, len1 = sortedEdges.length; k < len1; k++) {
	      edge = sortedEdges[k];
	      if (set.find(edge[0]) !== set.find(edge[1])) {
	        state = state.clone();
	        state.codetrace([2], '枚举边集数组中的边 E');
	        state.edges[this.valueGraph[edge[0]][edge[1]]].status('visiting');
	        state.vertices[edge[0]].status('visiting');
	        state.vertices[edge[1]].status('visiting');
	        this.addState(state);
	        state = state.clone();
	        state.codetrace([3], '判断将 E 加入集合后是否构成环');
	        this.addState(state);
	        state = state.clone();
	        state.codetrace([4], '不构成环，将 E 加入集合中');
	        state.edges[this.valueGraph[edge[0]][edge[1]]].status('visited');
	        state.vertices[edge[0]].status('visited');
	        state.vertices[edge[1]].status('visited');
	        this.addState(state);
	        minimumSpanningTree += edge[2];
	        set.union(edge[0], edge[1]);
	        continue;
	      } else {
	        state = state.clone();
	        state.codetrace([2], '枚举边集数组中的边 E');
	        state.edges[this.valueGraph[edge[0]][edge[1]]].status('visiting');
	        this.addState(state);
	        state = state.clone();
	        state.codetrace([3], '判断将 E 加入集合后是否构成环');
	        this.addState(state);
	        state = state.clone();
	        state.codetrace([5], '构成环，忽略 E');
	        state.edges[this.valueGraph[edge[0]][edge[1]]].status('ignored');
	        this.addState(state);
	      }
	    }
	    state = state.clone();
	    state.codetrace([6], 'Kruskal 算法演示完成');
	    return this.addState(state);
	  };

	  return Kruskal;
	}(BasicGraph);
	});

	var Kruskal$1 = (Kruskal && typeof Kruskal === 'object' && 'default' in Kruskal ? Kruskal['default'] : Kruskal);

	var constants = __commonjs(function (module) {
	module.exports = {
	    COLOR: {
	        ORANGE: '#ff8e00',
	        GREY: '#dcdcdc',
	        RED: '#de3e1e',
	        YELLOW: '#ffcb1f',
	        GREEN: '#41B146',
	        BLUE: '#2996f3',
	        BLACK: '#333',
	        WHITE: '#fff'
	    },
	    ARROW: {
	        REFX: 7,
	        MARKER_WIDTH: 3,
	        MARKER_HEIGHT: 3,
	        FILL: '#333'
	    }
	};
	});

	var constants$1 = (constants && typeof constants === 'object' && 'default' in constants ? constants['default'] : constants);
	var COLOR = constants.COLOR;
	var ARROW = constants.ARROW;

var require$$1$24 = Object.freeze({
	    default: constants$1,
	    COLOR: COLOR,
	    ARROW: ARROW
	});

	var BasicBinaryTree = __commonjs(function (module) {
	var Algorithm,
	    BLACK,
	    BinaryTree,
	    Collection,
	    Edge,
	    Line,
	    State,
	    Vertex,
	    ref,
	    ref1,
	    extend = function extend(child, parent) {
	  for (var key in parent) {
	    if (hasProp.call(parent, key)) child[key] = parent[key];
	  }function ctor() {
	    this.constructor = child;
	  }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
	},
	    hasProp = {}.hasOwnProperty;

	ref = ('default' in require$$1$16 ? require$$1$16['default'] : require$$1$16), Vertex = ref.Vertex, Collection = ref.Collection, Edge = ref.Edge, Line = ref.Line;

	BLACK = ('default' in require$$1$24 ? require$$1$24['default'] : require$$1$24).COLOR.BLACK;

	ref1 = ('default' in require$$0$28 ? require$$0$28['default'] : require$$0$28), Algorithm = ref1.Algorithm, State = ref1.State;

	module.exports = BinaryTree = function (superClass) {
	  extend(BinaryTree, superClass);

	  BinaryTree.prototype.maxId = 0;

	  BinaryTree.prototype.circleR = 19;

	  BinaryTree.prototype.textSize = 21;

	  BinaryTree.prototype.maxLineId = 0;

	  function BinaryTree() {
	    BinaryTree.__super__.constructor.apply(this, arguments);
	    this.root = [];
	  }

	  BinaryTree.prototype.travLevel = function () {
	    var leftChild, pos, queue, ref2, rightChild;
	    queue = [];
	    if (this.root != null) {
	      queue.push(this.root);
	      pos = 0;
	      while (pos < queue.length) {
	        ref2 = queue[pos], leftChild = ref2.leftChild, rightChild = ref2.rightChild;
	        if (leftChild != null) {
	          queue.push(leftChild);
	        }
	        if (rightChild != null) {
	          queue.push(rightChild);
	        }
	        pos += 1;
	      }
	    }
	    return queue;
	  };

	  BinaryTree.prototype.genVertexes = function () {
	    var id, j, len, queue, ref2, value, vertexes, x, y;
	    vertexes = new Collection('vertices');
	    queue = this.travLevel(this.root);
	    for (j = 0, len = queue.length; j < len; j++) {
	      ref2 = queue[j], id = ref2.id, x = ref2.x, y = ref2.y, value = ref2.value;
	      vertexes[id] = new Vertex({
	        id: id,
	        content: value,
	        x: x,
	        y: y
	      });
	    }
	    return vertexes;
	  };

	  BinaryTree.prototype.duplicateState = function (oldState) {
	    var edge, j, k, key, len, len1, ref2, ref3, state, vertex, vertexes;
	    state = new State();
	    state.codes = oldState.codes.clone();
	    vertexes = this.genVertexes();
	    state.vertices = vertexes;
	    ref2 = oldState.edges;
	    for (key = j = 0, len = ref2.length; j < len; key = ++j) {
	      edge = ref2[key];
	      if (edge) {
	        state.edges[key] = edge.clone().status('');
	      }
	    }
	    ref3 = oldState.vertices;
	    for (key = k = 0, len1 = ref3.length; k < len1; key = ++k) {
	      vertex = ref3[key];
	      if (vertex && !(key in vertexes)) {
	        state.vertices[key] = vertex.clone().hide();
	      }
	    }
	    return state;
	  };

	  BinaryTree.prototype.genInitState = function (codes, initStatus) {
	    var current, edge, j, len, offset, state, travQueue, vertexes;
	    if (codes == null) {
	      codes = [];
	    }
	    if (initStatus == null) {
	      initStatus = '';
	    }
	    if (this.hasState) {
	      state = this.duplicateState(this.lastState);
	      state.codetrace(codes, [], initStatus);
	      return state;
	    }
	    state = new State();
	    vertexes = this.genVertexes(this.root);
	    state.vertices = vertexes;
	    this.maxLineId = -1;
	    travQueue = this.travLevel(this.root);
	    for (j = 0, len = travQueue.length; j < len; j++) {
	      current = travQueue[j];
	      if (current.leftChild != null) {
	        this.maxLineId += 1;
	        edge = new Edge({
	          id: this.maxLineId,
	          startVertexId: current.id,
	          endVertexId: current.leftChild.id,
	          type: Line.UNDIRECT
	        });
	        edge.updatePosition({
	          cx1: current.x,
	          cy1: current.y,
	          cx2: current.leftChild.x,
	          cy2: current.leftChild.y
	        });
	        state.edges[this.maxLineId] = edge;
	      }
	      if (current.rightChild != null) {
	        this.maxLineId += 1;
	        offset = 0.75;
	        edge = new Edge({
	          id: this.maxLineId,
	          startVertexId: current.id,
	          endVertexId: current.rightChild.id,
	          type: Line.UNDIRECT
	        });
	        edge.updatePosition({
	          cx1: current.x - offset,
	          cy1: current.y - offset,
	          r1: this.circleR,
	          cx2: current.rightChild.x + offset,
	          cy2: current.rightChild.y + offset
	        });
	        state.edges[this.maxLineId] = edge;
	      }
	    }
	    state.codetrace(codes, [], initStatus);
	    return state;
	  };

	  BinaryTree.prototype.swap = function (node1, node2) {
	    var tmp;
	    tmp = node1.value;
	    node1.value = node2.value;
	    node2.value = tmp;
	    tmp = node1.id;
	    node1.id = node2.id;
	    return node2.id = tmp;
	  };

	  BinaryTree.prototype.swapVertexId = function (state, node1, node2) {
	    var edge, j, len, ref2, results, vertexId1, vertexId2;
	    vertexId1 = node1.id;
	    vertexId2 = node2.id;
	    ref2 = state.edges;
	    results = [];
	    for (j = 0, len = ref2.length; j < len; j++) {
	      edge = ref2[j];
	      if (!edge) {
	        continue;
	      }
	      if (edge.props.startVertexId === vertexId1) {
	        edge.props.startVertexId = vertexId2;
	      } else if (edge.props.startVertexId === vertexId2) {
	        edge.props.startVertexId = vertexId1;
	      }
	      if (edge.props.endVertexId === vertexId1) {
	        results.push(edge.props.endVertexId = vertexId2);
	      } else if (edge.props.endVertexId === vertexId2) {
	        results.push(edge.props.endVertexId = vertexId1);
	      } else {
	        results.push(void 0);
	      }
	    }
	    return results;
	  };

	  BinaryTree.prototype.getSuccessor = function (root, target) {
	    var i, j, queue, ref2, _succ;
	    queue = [];
	    _succ = function succ(node) {
	      if (node != null) {
	        _succ(node.leftChild);
	        queue.push(node);
	        return _succ(node.rightChild);
	      }
	    };
	    _succ(root);
	    for (i = j = 0, ref2 = queue.length; 0 <= ref2 ? j < ref2 : j > ref2; i = 0 <= ref2 ? ++j : --j) {
	      if (queue[i].id === target.id && i < queue.length - 1) {
	        return queue[i + 1];
	      }
	    }
	    return null;
	  };

	  BinaryTree.prototype.getPrecursor = function (root, target) {
	    var i, j, _pre, queue, ref2;
	    queue = [];
	    _pre = function pre(node) {
	      if (node != null) {
	        _pre(node.rightChild);
	        queue.push(node);
	        return _pre(node.leftChild);
	      }
	    };
	    _pre(root);
	    for (i = j = 0, ref2 = queue.length; 0 <= ref2 ? j < ref2 : j > ref2; i = 0 <= ref2 ? ++j : --j) {
	      if (queue[i].id === target.id && i < queue.length - 1) {
	        return queue[i + 1];
	      }
	    }
	    return null;
	  };

	  return BinaryTree;
	}(Algorithm);
	});

	var BasicBinaryTree$1 = (BasicBinaryTree && typeof BasicBinaryTree === 'object' && 'default' in BasicBinaryTree ? BasicBinaryTree['default'] : BasicBinaryTree);


	var require$$1$23 = Object.freeze({
	  default: BasicBinaryTree$1
	});

	var Preorder = __commonjs(function (module) {
	var BasicBinaryTree,
	    Node,
	    Preorder,
	    Vertex,
	    gapX,
	    gapY,
	    rootX,
	    rootY,
	    extend = function extend(child, parent) {
	  for (var key in parent) {
	    if (hasProp.call(parent, key)) child[key] = parent[key];
	  }function ctor() {
	    this.constructor = child;
	  }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
	},
	    hasProp = {}.hasOwnProperty;

	BasicBinaryTree = ('default' in require$$1$23 ? require$$1$23['default'] : require$$1$23);

	Vertex = ('default' in require$$1$16 ? require$$1$16['default'] : require$$1$16).Vertex;

	rootY = 50;

	rootX = 400;

	gapY = 70;

	gapX = 400;

	Node = function () {
	  Node.prototype.leftChild = null;

	  Node.prototype.rightChild = null;

	  Node.prototype.depth = 0;

	  function Node(value, id, parent, isLeft, x, y) {
	    this.value = value;
	    this.id = id;
	    this.parent = parent;
	    this.isLeft = isLeft;
	    this.x = x;
	    this.y = y;
	    if (this.parent != null) {
	      this.depth = this.parent.depth + 1;
	      if (this.isLeft) {
	        this.parent.leftChild = this;
	      } else {
	        this.parent.rightChild = this;
	      }
	    } else {
	      this.y = rootY;
	      this.x = rootX;
	    }
	  }

	  return Node;
	}();

	module.exports = Preorder = function (superClass) {
	  extend(Preorder, superClass);

	  function Preorder(model) {
	    var i, len, prt, ref;
	    Preorder.__super__.constructor.call(this);
	    this.maxId = 0;
	    this.root = [];
	    this.node = [];
	    this.numEdge = model.numEdge;
	    this.vertex = model.binarytreeVertex;
	    this.root = new Node(this.randomChar, this.maxId, null, false, this.vertex[this.maxId][1], this.vertex[this.maxId][2]);
	    this.node[this.maxId += 1] = new Node(this.randomChar, this.maxId, this.root, true, this.vertex[this.maxId][1], this.vertex[this.maxId][2]);
	    this.node[this.maxId += 1] = new Node(this.randomChar, this.maxId, this.root, false, this.vertex[this.maxId][1], this.vertex[this.maxId][2]);
	    this.node[this.maxId += 1] = new Node(this.randomChar, this.maxId, this.node[1], true, this.vertex[this.maxId][1], this.vertex[this.maxId][2]);
	    this.node[this.maxId += 1] = new Node(this.randomChar, this.maxId, this.node[1], false, this.vertex[this.maxId][1], this.vertex[this.maxId][2]);
	    this.node[this.maxId += 1] = new Node(this.randomChar, this.maxId, this.node[2], true, this.vertex[this.maxId][1], this.vertex[this.maxId][2]);
	    this.node[this.maxId += 1] = new Node(this.randomChar, this.maxId, this.node[2], false, this.vertex[this.maxId][1], this.vertex[this.maxId][2]);
	    ref = [this.node[3], this.node[4], this.node[5], this.node[6]];
	    for (i = 0, len = ref.length; i < len; i++) {
	      prt = ref[i];
	      this.node[this.maxId += 1] = new Node(this.randomChar, this.maxId, prt, true, this.vertex[this.maxId][1], this.vertex[this.maxId][2]);
	      this.node[this.maxId += 1] = new Node(this.randomChar, this.maxId, prt, false, this.vertex[this.maxId][1], this.vertex[this.maxId][2]);
	    }
	    this.initState = this.genInitState();
	  }

	  Preorder.prototype.run = function () {
	    var codes, isRoot, node, numVisited, preid, stack, state;
	    codes = 'preorder root\n  visit root.value\n  if root.leftChild != null\n    preorder root.leftChild\n  if root.rightChild != null\n    preorder root.rightChild\n  return';
	    state = this.genInitState(codes, '[任务] 前序遍历');
	    this.addState(state);
	    isRoot = true;
	    node = this.root;
	    stack = [];
	    preid = this.root.id;
	    numVisited = -1;
	    while (node) {
	      if (stack.length <= 0 && !isRoot) {
	        break;
	      }
	      state = state.clone();
	      state.vertices[preid].status('visited');
	      state.vertices[node.id].status('visiting');
	      state.codetrace([0], "访问 " + node.value);
	      this.addState(state);
	      state = state.clone();
	      state.vertices[node.id].status('visited');
	      state.codetrace([1], "输出 " + node.value);
	      this.addState(state);
	      numVisited++;
	      if (node.leftChild) {
	        if (!node.leftChild.flag) {
	          stack.push(node);
	          state = state.clone();
	          state.codetrace([2], '判断左子树是否为空');
	          this.addState(state);
	          state = state.clone();
	          state.codetrace([3], '左子树不为空，前序遍历左子树');
	          this.addState(state);
	          node = node.leftChild;
	          continue;
	        }
	      }
	      if (node.rightChild) {
	        if (!node.rightChild.flag) {
	          stack.push(node);
	          state = state.clone();
	          state.codetrace([2], '判断左子树是否为空');
	          this.addState(state);
	          state = state.clone();
	          state.codetrace([4], '左子树为空，判断右子树是否为空');
	          this.addState(state);
	          state = state.clone();
	          state.codetrace([5], '右子树不为空，前序遍历右子树');
	          this.addState(state);
	          node = node.rightChild;
	          continue;
	        }
	      }
	      state = state.clone();
	      state.codetrace([2], '判断左子树是否为空');
	      this.addState(state);
	      state = state.clone();
	      state.codetrace([4], '左子树为空，判断右子树是否为空');
	      this.addState(state);
	      state = state.clone();
	      state.codetrace([6], '右子树为空，回溯');
	      this.addState(state);
	      while (true) {
	        node.flag = true;
	        preid = node.id;
	        if (stack.length <= 0) {
	          break;
	        }
	        isRoot = false;
	        node = stack.pop();
	        if (node.rightChild != null) {
	          if (!node.rightChild.flag) {
	            stack.push(node);
	            state = state.clone();
	            state.vertices[node.id].status('visiting');
	            state.codetrace([3], "回溯到 " + node.value);
	            state.vertices[preid].status('visited');
	            this.addState(state);
	            state = state.clone();
	            state.codetrace([4], '判断右子树是否为空');
	            this.addState(state);
	            state = state.clone();
	            state.codetrace([5], '右子树不为空，前序遍历右子树');
	            this.addState(state);
	            preid = node.id;
	            node = node.rightChild;
	            break;
	          }
	        }
	        if (!node.rightChild) {
	          state = state.clone();
	          state.vertices[node.id].status('visiting');
	          state.codetrace([3], "回溯到 " + node.value);
	          state.vertices[preid].status('visited');
	          this.addState(state);
	          state = state.clone();
	          state.codetrace([6], "回溯到 " + node.value);
	          this.addState(state);
	        } else {
	          if (node.rightChild && node.rightChild.flag) {
	            state = state.clone();
	            state.vertices[node.id].status('visiting');
	            state.codetrace([5], "回溯到 " + node.value);
	            state.vertices[preid].status('visited');
	            this.addState(state);
	            state = state.clone();
	            state.codetrace([6], "回溯到 " + node.value);
	            this.addState(state);
	          }
	        }
	        preid = node.id;
	        if (stack.length <= 0) {
	          break;
	        }
	        continue;
	      }
	    }
	    state = this.duplicateState(this.root, state);
	    state.codetrace([], [], '先序遍历完成');
	    this.addState(state);
	    return this;
	  };

	  return Preorder;
	}(BasicBinaryTree);
	});

	var Preorder$1 = (Preorder && typeof Preorder === 'object' && 'default' in Preorder ? Preorder['default'] : Preorder);

	var Stack$1 = __commonjs(function (module) {
	var Algorithm,
	    Collection,
	    Line,
	    Rectex,
	    Stack,
	    State,
	    ref,
	    ref1,
	    extend = function extend(child, parent) {
	  for (var key in parent) {
	    if (hasProp.call(parent, key)) child[key] = parent[key];
	  }function ctor() {
	    this.constructor = child;
	  }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
	},
	    hasProp = {}.hasOwnProperty;

	ref = ('default' in require$$1$16 ? require$$1$16['default'] : require$$1$16), Collection = ref.Collection, Line = ref.Line, Rectex = ref.Rectex;

	ref1 = ('default' in require$$0$28 ? require$$0$28['default'] : require$$0$28), Algorithm = ref1.Algorithm, State = ref1.State;

	module.exports = Stack = function (superClass) {
	  extend(Stack, superClass);

	  Stack.prototype.leftX = 300;

	  Stack.prototype.rightX = 400;

	  Stack.prototype.topY = 100;

	  Stack.prototype.bottomY = 350;

	  Stack.prototype.newRectX = 130;

	  Stack.prototype.gap = 10;

	  Stack.prototype.rectWidth = 80;

	  Stack.prototype.rectHeight = 25;

	  Stack.prototype.rx = 2;

	  Stack.prototype.maxId = 0;

	  function Stack(numbers) {
	    var index, number;
	    Stack.__super__.constructor.call(this);
	    this.stack = function () {
	      var i, len, results;
	      results = [];
	      for (index = i = 0, len = numbers.length; i < len; index = ++i) {
	        number = numbers[index];
	        results.push({
	          value: number,
	          id: index
	        });
	      }
	      return results;
	    }();
	    this.initState = this.genInitState();
	  }

	  Stack.prototype.genInitState = function (codes, initStatus) {
	    var element, i, len, rectex, ref2, state, x, y;
	    if (codes == null) {
	      codes = [];
	    }
	    if (initStatus == null) {
	      initStatus = '';
	    }
	    if (this.hasState) {
	      state = this.lastState.clone();
	      state.codetrace([], initStatus);
	      return state;
	    }
	    state = new State();
	    this.leftLine = new Line({
	      id: 1,
	      x1: this.leftX,
	      y1: this.topY,
	      x2: this.leftX,
	      y2: this.bottomY
	    });
	    this.rightLine = new Line({
	      id: 2,
	      x1: this.rightX,
	      y1: this.topY,
	      x2: this.rightX,
	      y2: this.bottomY
	    });
	    this.bottomLine = new Line({
	      id: 3,
	      x1: this.leftX,
	      y1: this.bottomY - 1.325,
	      x2: this.rightX,
	      y2: this.bottomY - 1.325
	    });
	    state.lines[0] = this.leftLine;
	    state.lines[1] = this.rightLine;
	    state.lines[2] = this.bottomLine;
	    this.count = 0;
	    ref2 = this.stack;
	    for (i = 0, len = ref2.length; i < len; i++) {
	      element = ref2[i];
	      this.count += 1;
	      if (element.id > this.maxId) {
	        this.maxId = element.id;
	      }
	      x = (this.rightX + this.leftX) / 2;
	      y = this.bottomY - (this.gap + this.rectHeight) * this.count + this.rectHeight / 2;
	      rectex = new Rectex({
	        id: element.id,
	        x: x,
	        y: y,
	        content: element.value,
	        height: this.rectHeight,
	        width: this.rectWidth,
	        rx: this.rx
	      });
	      state.rectex[element.id] = rectex;
	    }
	    state.codetrace(codes, [], initStatus);
	    return state;
	  };

	  Stack.prototype.pushBack = function (number) {
	    var codes, rectex, state, x, y;
	    codes = [];
	    state = this.genInitState(codes, "[任务] 将数字 " + number + " 加入到栈");
	    this.addState(state);
	    this.maxId += 1;
	    state = state.clone();
	    x = this.newRectX + this.rectWidth / 2;
	    y = this.bottomY - this.gap - this.rectHeight / 2;
	    rectex = new Rectex({
	      id: this.maxId,
	      x: x,
	      y: y,
	      content: number,
	      status: 'visited',
	      height: this.rectHeight,
	      width: this.rectWidth,
	      rx: this.rx
	    });
	    state.rectex[this.maxId] = rectex;
	    this.states.forEach(function (_this) {
	      return function (oldState) {
	        return oldState.rectex[_this.maxId] = rectex.clone().hide();
	      };
	    }(this));
	    state.codetrace([], "获取数字 " + number);
	    this.addState(state);
	    state = state.clone();
	    state.rectex[this.maxId].attr({
	      x: (this.leftX + this.rightX) / 2,
	      y: this.topY - this.rectHeight / 2
	    });
	    state.codetrace([], "将数字 " + number + " 推入栈顶");
	    this.addState(state);
	    this.stack.push({
	      value: number,
	      id: this.maxId
	    });
	    state = state.clone();
	    state.rectex[this.maxId].attr({
	      x: (this.leftX + this.rightX) / 2,
	      y: this.bottomY - this.stack.length * (this.rectHeight + this.gap) + this.rectHeight / 2
	    });
	    state.rectex[this.maxId].status('');
	    state.codetrace([], "将数字 " + number + " 推入栈顶完毕");
	    this.addState(state);
	  };

	  Stack.prototype.push = function (numbers) {
	    var i, len, number, results;
	    if (Array.isArray(numbers)) {
	      results = [];
	      for (i = 0, len = numbers.length; i < len; i++) {
	        number = numbers[i];
	        results.push(this.pushBack(number));
	      }
	      return results;
	    } else {
	      return this.pushBack(numbers);
	    }
	  };

	  Stack.prototype.pop = function () {
	    var codes, state;
	    codes = [];
	    if (this.stack.length === 0) {
	      this.states.push(state = this.genInitState(codes, '栈是空的'));
	      return;
	    }
	    this.states.push(state = this.genInitState(codes, '[任务] 将栈顶数字元素弹出'));
	    this.topElement = this.stack.pop();
	    state = state.clone();
	    state.rectex[this.topElement.id].status('visited');
	    state.codetrace([], "当前栈顶元素是数字 " + this.topElement.value + " 所在的元素");
	    this.addState(state);
	    state = state.clone();
	    state.rectex[this.topElement.id].attr({
	      x: (this.leftX + this.rightX) / 2,
	      y: this.topY - this.rectHeight / 2
	    });
	    state.codetrace([], '将目标栈顶元素弹出栈结构');
	    this.addState(state);
	    state = state.clone();
	    state.rectex[this.topElement.id].hide();
	    state.codetrace([], '栈顶元素弹出完毕');
	    this.addState(state);
	  };

	  return Stack;
	}(Algorithm);
	});

	var Stack$2 = (Stack$1 && typeof Stack$1 === 'object' && 'default' in Stack$1 ? Stack$1['default'] : Stack$1);

	var className$1 = "jsk-va-zoom jsk-btn jsk-btn-primary";

	var zoomIn = createElement(
		'a',
		{ 'class': className$1 },
		'+'
	);
	var zoomOut = createElement(
		'a',
		{ 'class': className$1 },
		'-'
	);
	var zoomReset = createElement(
		'a',
		{ 'class': className$1 },
		createElement(
			'span',
			{ style: { fontSize: '0.9em' } },
			'x1'
		)
	);

	function mount$1(parentNode) {
		$(parentNode).append(createElement(
			'div',
			{ style: { position: 'absolute', left: '10px', bottom: '42px' }, 'class': 'jsk-btn-group-stacked' },
			zoomIn,
			zoomOut,
			zoomReset
		));
	}

	/** Custom version */
	/**
	 * @license jquery.panzoom.js v2.0.5
	 * Updated: Mon Feb 01 2016
	 * Add pan and zoom functionality to any element
	 * Copyright (c) timmy willison
	 * Released under the MIT license
	 * https://github.com/timmywil/jquery.panzoom/blob/master/MIT-License.txt
	 */

	var $$1 = global.jQuery;

	// Common properties to lift for touch or pointer events
	var list = 'over out down up move enter leave cancel'.split(' ');
	var hook = $$1.extend({}, $$1.event.mouseHooks);
	var events = {};

	// Support pointer events in IE11+ if available
	if (global.PointerEvent) {
	    for (var _iterator = list, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	        var _ref;

	        if (_isArray) {
	            if (_i >= _iterator.length) break;
	            _ref = _iterator[_i++];
	        } else {
	            _i = _iterator.next();
	            if (_i.done) break;
	            _ref = _i.value;
	        }

	        var name = _ref;

	        // Add event name to events property and add fixHook
	        $$1.event.fixHooks[events[name] = 'pointer' + name] = hook;
	    }
	} else if (global.MSPointerEvent) {
	    for (var _iterator2 = list, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	        var _ref2;

	        if (_isArray2) {
	            if (_i2 >= _iterator2.length) break;
	            _ref2 = _iterator2[_i2++];
	        } else {
	            _i2 = _iterator2.next();
	            if (_i2.done) break;
	            _ref2 = _i2.value;
	        }

	        var name = _ref2;

	        $$1.event.fixHooks[events[name] = 'MSPointer' + capitalize(name)] = hook;
	    }
	}

	$$1.pointertouch = events;

	var document$1 = global.document;
	var datakey = '__pz__';
	var slice = Array.prototype.slice;
	var pointerEvents = !!global.PointerEvent;
	var supportsInputEvent = true;

	/* Removes support for IE8.
	var supportsInputEvent = (function() {
	    var input = document.createElement('input');
	    input.setAttribute('oninput', 'return');
	    return _.isFunction(input.oninput);
	})();
	*/

	// Regex
	var rupper = /([A-Z])/g;
	var rsvg = /^http:[\w\.\/]+svg$/;
	var rinline = /^inline/;

	var floating = '(\\-?[\\d\\.e]+)';
	var commaSpace = '\\,?\\s*';
	var rmatrix = new RegExp('^matrix\\(' + floating + commaSpace + floating + commaSpace + floating + commaSpace + floating + commaSpace + floating + commaSpace + floating + '\\)$');

	/**
	 * Utility for determing transform matrix equality
	 * Checks backwards to test translation first
	 * @param {Array} first
	 * @param {Array} second
	 */
	function matrixEquals(first, second) {
	    var i = first.length;
	    while (--i) {
	        if (+first[i] !== +second[i]) {
	            return false;
	        }
	    }
	    return true;
	}

	/**
	 * Creates the options object for reset functions
	 * @param {Boolean|Object} opts See reset methods
	 * @returns {Object} Returns the newly-created options object
	 */
	function createResetOptions(opts) {
	    var options = {
	        range: true,
	        animate: true
	    };
	    if (isBoolean(opts)) {
	        options.animate = opts;
	    } else {
	        $$1.extend(options, opts);
	    }
	    return options;
	}

	/**
	 * Represent a transformation matrix with a 3x3 matrix for calculations
	 * Matrix functions adapted from Louis Remi's jQuery.transform (https://github.com/louisremi/jquery.transform.js)
	 * @param {Array|Number} a An array of six values representing a 2d transformation matrix
	 */

	var Matrix = function () {
	    function Matrix(a, b, c, d, e, f, g, h, i) {
	        babelHelpers.classCallCheck(this, Matrix);

	        if (Array.isArray(a)) {
	            this.elements = [+a[0], +a[2], +a[4], +a[1], +a[3], +a[5], 0, 0, 1];
	        } else {
	            this.elements = [a, b, c, d, e, f, g || 0, h || 0, i || 1];
	        }
	    }

	    /**
	     * Multiply a 3x3 matrix by a similar matrix or a vector
	     * @param {Matrix|Vector} matrix
	     * @return {Matrix|Vector} Returns a vector if multiplying by a vector
	     */


	    Matrix.prototype.x = function x(matrix) {
	        var isVector = matrix instanceof Vector;

	        var a = this.elements,
	            b = matrix.elements;

	        if (isVector && b.length === 3) {
	            // b is actually a vector
	            return new Vector(a[0] * b[0] + a[1] * b[1] + a[2] * b[2], a[3] * b[0] + a[4] * b[1] + a[5] * b[2], a[6] * b[0] + a[7] * b[1] + a[8] * b[2]);
	        } else if (b.length === a.length) {
	            // b is a 3x3 matrix
	            return new Matrix(a[0] * b[0] + a[1] * b[3] + a[2] * b[6], a[0] * b[1] + a[1] * b[4] + a[2] * b[7], a[0] * b[2] + a[1] * b[5] + a[2] * b[8], a[3] * b[0] + a[4] * b[3] + a[5] * b[6], a[3] * b[1] + a[4] * b[4] + a[5] * b[7], a[3] * b[2] + a[4] * b[5] + a[5] * b[8], a[6] * b[0] + a[7] * b[3] + a[8] * b[6], a[6] * b[1] + a[7] * b[4] + a[8] * b[7], a[6] * b[2] + a[7] * b[5] + a[8] * b[8]);
	        }
	        return false; // fail
	    };
	    /**
	     * Generates an inverse of the current matrix
	     * @returns {Matrix}
	     */


	    Matrix.prototype.inverse = function inverse() {
	        var d = 1 / this.determinant(),
	            a = this.elements;
	        return new Matrix(d * (a[8] * a[4] - a[7] * a[5]), d * -(a[8] * a[1] - a[7] * a[2]), d * (a[5] * a[1] - a[4] * a[2]), d * -(a[8] * a[3] - a[6] * a[5]), d * (a[8] * a[0] - a[6] * a[2]), d * -(a[5] * a[0] - a[3] * a[2]), d * (a[7] * a[3] - a[6] * a[4]), d * -(a[7] * a[0] - a[6] * a[1]), d * (a[4] * a[0] - a[3] * a[1]));
	    };
	    /**
	     * Calculates the determinant of the current matrix
	     * @returns {Number}
	     */


	    Matrix.prototype.determinant = function determinant() {
	        var a = this.elements;
	        return a[0] * (a[8] * a[4] - a[7] * a[5]) - a[3] * (a[8] * a[1] - a[7] * a[2]) + a[6] * (a[5] * a[1] - a[4] * a[2]);
	    };

	    return Matrix;
	}();

	/**
	 * Create a vector containing three values
	 */


	var Vector = function Vector(x, y, z) {
	    babelHelpers.classCallCheck(this, Vector);

	    this.elements = [x, y, z];
	};

	/**
	 * Get the element at zero-indexed index i
	 * @param {Number} i
	 */


	Vector.prototype.e = Matrix.prototype.e = function (i) {
	    return this.elements[i];
	};

	/**
	 * Create a Panzoom object for a given element
	 * @constructor
	 * @param {Element} elem - Element to use pan and zoom
	 * @param {Object} [options] - An object literal containing options to override default options
	 *  (See Panzoom.defaults for ones not listed below)
	 * @param {jQuery} [options.$zoomIn] - zoom in buttons/links collection (you can also bind these yourself
	 *  e.g. $button.on('click', function(e) { e.preventDefault(); $elem.panzoom('zoomIn'); });)
	 * @param {jQuery} [options.$zoomOut] - zoom out buttons/links collection on which to bind zoomOut
	 * @param {jQuery} [options.$zoomRange] - zoom in/out with this range control
	 * @param {jQuery} [options.$reset] - Reset buttons/links collection on which to bind the reset method
	 * @param {Function} [options.on[Start|Change|Zoom|Pan|End|Reset] - Optional callbacks for panzoom events
	 */
	function Panzoom(elem, options) {

	    // Allow instantiation without `new` keyword
	    if (!(this instanceof Panzoom)) {
	        return new Panzoom(elem, options);
	    }

	    // Sanity checks
	    if (elem.nodeType !== 1) {
	        $$1.error('Panzoom called on non-Element node');
	    }
	    if (!$$1.contains(document$1, elem)) {
	        $$1.error('Panzoom element must be attached to the document');
	    }

	    // Don't remake
	    var d = $$1.data(elem, datakey);
	    if (d) {
	        return d;
	    }

	    // Extend default with given object literal
	    // Each instance gets its own options
	    this.options = options = $$1.extend({}, Panzoom.defaults, options);
	    this.elem = elem;
	    var $elem = this.$elem = $$1(elem);
	    this.$set = options.$set && options.$set.length ? options.$set : $elem;
	    this.$doc = $$1(elem.ownerDocument || document$1);
	    this.$parent = $elem.parent();

	    // This is SVG if the namespace is SVG
	    // However, while <svg> elements are SVG, we want to treat those like other elements
	    this.isSVG = rsvg.test(elem.namespaceURI) && elem.nodeName.toLowerCase() !== 'svg';

	    this.panning = false;

	    // Save the original transform value
	    // Save the prefixed transform style key
	    // Set the starting transform
	    this._buildTransform();

	    // Build the appropriately-prefixed transform style property name
	    // De-camelcase
	    this._transform = !this.isSVG && $$1.cssProps.transform.replace(rupper, '-$1').toLowerCase();

	    // Build the transition value
	    this._buildTransition();

	    // Build containment dimensions
	    this.resetDimensions();

	    // Add zoom and reset buttons to `this`
	    var $empty = $$1();
	    var _arr = ['$zoomIn', '$zoomOut', '$zoomRange', '$reset'];
	    for (var _i3 = 0; _i3 < _arr.length; _i3++) {
	        var name = _arr[_i3];
	        this[name] = options[name] || $empty;
	    }

	    this.enable();

	    // Save the instance
	    $$1.data(elem, datakey, this);
	}

	// Attach regex for possible use (immutable)
	Panzoom.rmatrix = rmatrix;

	// Container for event names
	Panzoom.events = $$1.pointertouch;

	Panzoom.defaults = {
	    // Should always be non-empty
	    // Used to bind jQuery events without collisions
	    // A guid is not added here as different instantiations/versions of panzoom
	    // on the same element is not supported, so don't do it.
	    eventNamespace: '.panzoom',

	    // Whether or not to transition the scale
	    transition: true,

	    // Default cursor style for the element
	    cursor: 'move',

	    // There may be some use cases for zooming without panning or vice versa
	    disablePan: false,
	    disableZoom: false,

	    // The increment at which to zoom
	    // adds/subtracts to the scale each time zoomIn/Out is called
	    increment: 0.3,

	    minScale: 0.4,
	    maxScale: 5,

	    // The default step for the range input
	    // Precendence: default < HTML attribute < option setting
	    rangeStep: 0.05,

	    // Animation duration (ms)
	    duration: 200,
	    // CSS easing used for scale transition
	    easing: 'ease-in-out',

	    // Indicate that the element should be contained within it's parent when panning
	    // Note: this does not affect zooming outside of the parent
	    // Set this value to 'invert' to only allow panning outside of the parent element (basically the opposite of the normal use of contain)
	    // 'invert' is useful for a large panzoom element where you don't want to show anything behind it
	    contain: false
	};

	$$1.extend(Panzoom.prototype, {

	    /**
	     * @returns {Panzoom} Returns the instance
	     */
	    instance: function instance() {
	        return this;
	    },


	    /**
	     * Enable or re-enable the panzoom instance
	     */
	    enable: function enable() {
	        // Unbind first
	        this._initStyle();
	        this._bind();
	        this.disabled = false;
	    },


	    /**
	     * Disable panzoom
	     */
	    disable: function disable() {
	        this.disabled = true;
	        this._resetStyle();
	        this._unbind();
	    },


	    /**
	     * @returns {Boolean} Returns whether the current panzoom instance is disabled
	     */
	    isDisabled: function isDisabled() {
	        return this.disabled;
	    },


	    /**
	     * Destroy the panzoom instance
	     */
	    destroy: function destroy() {
	        this.disable();
	        $$1.removeData(this.elem, datakey);
	    },


	    /**
	     * Builds the restricing dimensions from the containment element
	     * Also used with focal points
	     * Call this method whenever the dimensions of the element or parent are changed
	     */
	    resetDimensions: function resetDimensions() {
	        // Reset container properties
	        var $parent = this.$parent;
	        this.container = {
	            width: $parent.innerWidth(),
	            height: $parent.innerHeight()
	        };
	        var po = $parent.offset();
	        var elem = this.elem;
	        var $elem = this.$elem;
	        var dims;
	        if (this.isSVG) {
	            dims = elem.getBoundingClientRect();
	            dims = {
	                left: dims.left - po.left,
	                top: dims.top - po.top,
	                width: dims.width,
	                height: dims.height,
	                margin: {
	                    left: 0,
	                    top: 0
	                }
	            };
	        } else {
	            dims = {
	                left: $$1.css(elem, 'left', true) || 0,
	                top: $$1.css(elem, 'top', true) || 0,
	                width: $elem.innerWidth(),
	                height: $elem.innerHeight(),
	                margin: {
	                    top: $$1.css(elem, 'marginTop', true) || 0,
	                    left: $$1.css(elem, 'marginLeft', true) || 0
	                }
	            };
	        }
	        dims.widthBorder = $$1.css(elem, 'borderLeftWidth', true) + $$1.css(elem, 'borderRightWidth', true) || 0;
	        dims.heightBorder = $$1.css(elem, 'borderTopWidth', true) + $$1.css(elem, 'borderBottomWidth', true) || 0;
	        this.dimensions = dims;
	    },


	    /**
	     * Return the element to it's original transform matrix
	     * @param {Boolean} [options] If a boolean is passed, animate the reset (default: true). If an options object is passed, simply pass that along to setMatrix.
	     * @param {Boolean} [options.silent] Silence the reset event
	     */
	    reset: function reset(options) {
	        options = createResetOptions(options);
	        // Reset the transform to its original value
	        var matrix = this.setMatrix(this._origTransform, options);
	        if (!options.silent) {
	            this._trigger('reset', matrix);
	        }
	    },


	    /**
	     * Only resets zoom level
	     * @param {Boolean|Object} [options] Whether to animate the reset (default: true) or an object of options to pass to zoom()
	     */
	    resetZoom: function resetZoom(options) {
	        options = createResetOptions(options);
	        var origMatrix = this.getMatrix(this._origTransform);
	        options.dValue = origMatrix[3];
	        this.zoom(origMatrix[0], options);
	    },


	    /**
	     * Only reset panning
	     * @param {Boolean|Object} [options] Whether to animate the reset (default: true) or an object of options to pass to pan()
	     */
	    resetPan: function resetPan(options) {
	        var origMatrix = this.getMatrix(this._origTransform);
	        this.pan(origMatrix[4], origMatrix[5], createResetOptions(options));
	    },


	    /**
	     * Sets a transform on the $set
	     * @param {String} transform
	     */
	    setTransform: function setTransform(transform) {
	        var method = this.isSVG ? 'attr' : 'style';
	        var $set = this.$set;
	        var i = $set.length;
	        while (i--) {
	            $$1[method]($set[i], 'transform', transform);
	        }
	    },


	    /**
	     * Retrieving the transform is different for SVG
	     *  (unless a style transform is already present)
	     * Uses the $set collection for retrieving the transform
	     * @param {String} [transform] Pass in an transform value (like 'scale(1.1)')
	     *  to have it formatted into matrix format for use by Panzoom
	     * @returns {String} Returns the current transform value of the element
	     */
	    getTransform: function getTransform(transform) {
	        var $set = this.$set;
	        var transformElem = $set[0];
	        if (transform) {
	            this.setTransform(transform);
	        } else {
	            // Retrieve the transform
	            transform = $$1[this.isSVG ? 'attr' : 'style'](transformElem, 'transform');
	        }

	        // Convert any transforms set by the user to matrix format
	        // by setting to computed
	        if (transform !== 'none' && !rmatrix.test(transform)) {
	            // Get computed and set for next time
	            this.setTransform(transform = $$1.css(transformElem, 'transform'));
	        }

	        return transform || 'none';
	    },


	    /**
	     * Retrieve the current transform matrix for $elem (or turn a transform into it's array values)
	     * @param {String} [transform] matrix-formatted transform value
	     * @returns {Array} Returns the current transform matrix split up into it's parts, or a default matrix
	     */
	    getMatrix: function getMatrix(transform) {
	        var matrix = rmatrix.exec(transform || this.getTransform());
	        if (matrix) {
	            matrix.shift();
	        }
	        return matrix || [1, 0, 0, 1, 0, 0];
	    },


	    /**
	     * Given a matrix object, quickly set the current matrix of the element
	     * @param {Array|String} matrix
	     * @param {Boolean} [animate] Whether to animate the transform change
	     * @param {Object} [options]
	     * @param {Boolean|String} [options.animate] Whether to animate the transform change, or 'skip' indicating that it is unnecessary to set
	     * @param {Boolean} [options.contain] Override the global contain option
	     * @param {Boolean} [options.range] If true, $zoomRange's value will be updated.
	     * @param {Boolean} [options.silent] If true, the change event will not be triggered
	     * @returns {Array} Returns the newly-set matrix
	     */
	    setMatrix: function setMatrix(matrix, options) {
	        if (this.disabled) {
	            return;
	        }
	        if (!options) {
	            options = {};
	        }
	        // Convert to array
	        if (isString$1(matrix)) {
	            matrix = this.getMatrix(matrix);
	        }
	        var dims, container, marginW, marginH, diffW, diffH, left, top, width, height;
	        var scale = +matrix[0];
	        var $parent = this.$parent;
	        var contain = typeof options.contain !== 'undefined' ? options.contain : this.options.contain;

	        // Apply containment
	        if (contain) {
	            dims = this._checkDims();
	            container = this.container;
	            width = dims.width + dims.widthBorder;
	            height = dims.height + dims.heightBorder;
	            // Use absolute value of scale here as negative scale doesn't mean even smaller
	            marginW = width * Math.abs(scale) > container.width ? (width * Math.abs(scale) - container.width) / 2 : 0;
	            marginH = height * Math.abs(scale) > container.height ? (height * Math.abs(scale) - container.height) / 2 : 0;
	            left = dims.left + dims.margin.left;
	            top = dims.top + dims.margin.top;
	            if (contain === 'invert') {
	                diffW = width > container.width ? width - container.width : 0;
	                diffH = height > container.height ? height - container.height : 0;
	                marginW += (container.width - width) / 2;
	                marginH += (container.height - height) / 2;
	                matrix[4] = Math.max(Math.min(matrix[4], marginW - left), -marginW - left - diffW);
	                matrix[5] = Math.max(Math.min(matrix[5], marginH - top), -marginH - top - diffH + dims.heightBorder);
	            } else {
	                // marginW += dims.widthBorder / 2;
	                marginH += dims.heightBorder / 2;
	                diffW = container.width > width ? container.width - width : 0;
	                diffH = container.height > height ? container.height - height : 0;
	                // If the element is not naturally centered, assume full margin right
	                if ($parent.css('textAlign') !== 'center' || !rinline.test($$1.css(this.elem, 'display'))) {
	                    marginW = marginH = 0;
	                } else {
	                    diffW = 0;
	                }
	                matrix[4] = Math.min(Math.max(matrix[4], marginW - left), -marginW - left + diffW);
	                matrix[5] = Math.min(Math.max(matrix[5], marginH - top), -marginH - top + diffH);
	            }
	        }
	        if (options.animate !== 'skip') {
	            // Set transition
	            this.transition(!options.animate);
	        }
	        // Update range
	        if (options.range) {
	            this.$zoomRange.val(scale);
	        }

	        // Set the matrix on this.$set
	        this.setTransform('matrix(' + matrix.join(',') + ')');

	        if (!options.silent) {
	            this._trigger('change', matrix);
	        }

	        return matrix;
	    },


	    /**
	     * @returns {Boolean} Returns whether the panzoom element is currently being dragged
	     */
	    isPanning: function isPanning() {
	        return this.panning;
	    },


	    /**
	     * Apply the current transition to the element, if allowed
	     * @param {Boolean} [off] Indicates that the transition should be turned off
	     */
	    transition: function transition(off) {
	        if (!this._transition) {
	            return;
	        }
	        var transition = off || !this.options.transition ? 'none' : this._transition;
	        var $set = this.$set;
	        var i = $set.length;
	        while (i--) {
	            // Avoid reflows when zooming
	            if ($$1.style($set[i], 'transition') !== transition) {
	                $$1.style($set[i], 'transition', transition);
	            }
	        }
	    },


	    /**
	     * Pan the element to the specified translation X and Y
	     * Note: this is not the same as setting jQuery#offset() or jQuery#position()
	     * @param {Number} x
	     * @param {Number} y
	     * @param {Object} [options] These options are passed along to setMatrix
	     * @param {Array} [options.matrix] The matrix being manipulated (if already known so it doesn't have to be retrieved again)
	     * @param {Boolean} [options.silent] Silence the pan event. Note that this will also silence the setMatrix change event.
	     * @param {Boolean} [options.relative] Make the x and y values relative to the existing matrix
	     */
	    pan: function pan(x, y, options) {
	        if (this.options.disablePan) {
	            return;
	        }
	        if (!options) {
	            options = {};
	        }
	        var matrix = options.matrix;
	        if (!matrix) {
	            matrix = this.getMatrix();
	        }
	        // Cast existing matrix values to numbers
	        if (options.relative) {
	            x += +matrix[4];
	            y += +matrix[5];
	        }
	        matrix[4] = x;
	        matrix[5] = y;
	        this.setMatrix(matrix, options);
	        if (!options.silent) {
	            this._trigger('pan', matrix[4], matrix[5]);
	        }
	    },


	    /**
	     * Zoom in/out the element using the scale properties of a transform matrix
	     * @param {Number|Boolean} [scale] The scale to which to zoom or a boolean indicating to transition a zoom out
	     * @param {Object} [opts] All global options can be overwritten by this options object. For example, override the default increment.
	     * @param {Boolean} [opts.noSetRange] Specify that the method should not set the $zoomRange value (as is the case when $zoomRange is calling zoom on change)
	     * @param {jQuery.Event|Object} [opts.focal] A focal point on the panzoom element on which to zoom.
	     *  If an object, set the clientX and clientY properties to the position relative to the parent
	     * @param {Boolean} [opts.animate] Whether to animate the zoom (defaults to true if scale is not a number, false otherwise)
	     * @param {Boolean} [opts.silent] Silence the zoom event
	     * @param {Array} [opts.matrix] Optionally pass the current matrix so it doesn't need to be retrieved
	     * @param {Number} [opts.dValue] Think of a transform matrix as four values a, b, c, d
	     *  where a/d are the horizontal/vertical scale values and b/c are the skew values
	     *  (5 and 6 of matrix array are the tx/ty transform values).
	     *  Normally, the scale is set to both the a and d values of the matrix.
	     *  This option allows you to specify a different d value for the zoom.
	     *  For instance, to flip vertically, you could set -1 as the dValue.
	     */
	    zoom: function zoom(scale, opts) {
	        // Shuffle arguments
	        if (isObject(scale)) {
	            opts = scale;
	            scale = null;
	        } else if (!opts) {
	            opts = {};
	        }
	        var options = $$1.extend({}, this.options, opts);
	        // Check if disabled
	        if (options.disableZoom) {
	            return;
	        }
	        var animate = false;
	        var matrix = options.matrix || this.getMatrix();

	        // Calculate zoom based on increment
	        if (!isNumber(scale)) {
	            scale = +matrix[0] + options.increment * (scale ? -1 : 1);
	            animate = true;
	        }

	        // Constrain scale
	        if (scale > options.maxScale) {
	            scale = options.maxScale;
	        } else if (scale < options.minScale) {
	            scale = options.minScale;
	        }

	        // Calculate focal point based on scale
	        var focal = options.focal;
	        if (focal && !options.disablePan) {
	            // Adapted from code by Florian Günther
	            // https://github.com/florianguenther/zui53
	            var dims = this._checkDims();
	            var clientX = focal.clientX;
	            var clientY = focal.clientY;
	            // Adjust the focal point for default transform-origin => 50% 50%
	            if (!this.isSVG) {
	                clientX -= (dims.width + dims.widthBorder) / 2;
	                clientY -= (dims.height + dims.heightBorder) / 2;
	            }
	            var clientV = new Vector(clientX, clientY, 1);
	            var surfaceM = new Matrix(matrix);
	            // Supply an offset manually if necessary
	            var o = this.parentOffset || this.$parent.offset();
	            var offsetM = new Matrix(1, 0, o.left - this.$doc.scrollLeft(), 0, 1, o.top - this.$doc.scrollTop());
	            var surfaceV = surfaceM.inverse().x(offsetM.inverse().x(clientV));
	            var scaleBy = scale / matrix[0];
	            surfaceM = surfaceM.x(new Matrix([scaleBy, 0, 0, scaleBy, 0, 0]));
	            clientV = offsetM.x(surfaceM.x(surfaceV));
	            matrix[4] = +matrix[4] + (clientX - clientV.e(0));
	            matrix[5] = +matrix[5] + (clientY - clientV.e(1));
	        }

	        // Set the scale
	        matrix[0] = scale;
	        matrix[3] = isNumber(options.dValue) ? options.dValue : scale;

	        // Calling zoom may still pan the element
	        this.setMatrix(matrix, {
	            animate: isBoolean(options.animate) ? options.animate : animate,
	            // Set the zoomRange value
	            range: !options.noSetRange
	        });

	        // Trigger zoom event
	        if (!options.silent) {
	            this._trigger('zoom', matrix[0], options);
	        }
	    },


	    /**
	     * Get/set option on an existing instance
	     * @returns {Array|undefined} If getting, returns an array of all values
	     *   on each instance for a given key. If setting, continue chaining by returning undefined.
	     */
	    option: function option(key, value) {
	        var options;
	        if (!key) {
	            // Avoids returning direct reference
	            return $$1.extend({}, this.options);
	        }

	        if (isString(key)) {
	            if (arguments.length === 1) {
	                return this.options[key] !== undefined ? this.options[key] : null;
	            }
	            options = {};
	            options[key] = value;
	        } else {
	            options = key;
	        }

	        this._setOptions(options);
	    },


	    /**
	     * Internally sets options
	     * @param {Object} options - An object literal of options to set
	     */
	    _setOptions: function _setOptions(options) {
	        $$1.each(options, $$1.proxy(function (key, value) {
	            switch (key) {
	                case 'disablePan':
	                    this._resetStyle();
	                /* falls through */
	                case '$zoomIn':
	                case '$zoomOut':
	                case '$zoomRange':
	                case '$reset':
	                case 'disableZoom':
	                case 'onStart':
	                case 'onChange':
	                case 'onZoom':
	                case 'onPan':
	                case 'onEnd':
	                case 'onReset':
	                case 'eventNamespace':
	                    this._unbind();
	            }
	            this.options[key] = value;
	            switch (key) {
	                case 'disablePan':
	                    this._initStyle();
	                /* falls through */
	                case '$zoomIn':
	                case '$zoomOut':
	                case '$zoomRange':
	                case '$reset':
	                    // Set these on the instance
	                    this[key] = value;
	                /* falls through */
	                case 'disableZoom':
	                case 'onStart':
	                case 'onChange':
	                case 'onZoom':
	                case 'onPan':
	                case 'onEnd':
	                case 'onReset':
	                case 'eventNamespace':
	                    this._bind();
	                    break;
	                case 'cursor':
	                    $$1.style(this.elem, 'cursor', value);
	                    break;
	                case 'minScale':
	                    this.$zoomRange.attr('min', value);
	                    break;
	                case 'maxScale':
	                    this.$zoomRange.attr('max', value);
	                    break;
	                case 'rangeStep':
	                    this.$zoomRange.attr('step', value);
	                    break;
	                case 'startTransform':
	                    this._buildTransform();
	                    break;
	                case 'duration':
	                case 'easing':
	                    this._buildTransition();
	                /* falls through */
	                case 'transition':
	                    this.transition();
	                    break;
	                case '$set':
	                    if (value instanceof $$1 && value.length) {
	                        this.$set = value;
	                        // Reset styles
	                        this._initStyle();
	                        this._buildTransform();
	                    }
	            }
	        }, this));
	    },


	    /**
	     * Initialize base styles for the element and its parent
	     */
	    _initStyle: function _initStyle() {
	        var styles = {
	            // Promote the element to it's own compositor layer
	            'backface-visibility': 'hidden',
	            // Set to defaults for the namespace
	            'transform-origin': this.isSVG ? '0 0' : '50% 50%'
	        };
	        // Set elem styles
	        if (!this.options.disablePan) {
	            styles.cursor = this.options.cursor;
	        }
	        this.$set.css(styles);

	        // Set parent to relative if set to static
	        var $parent = this.$parent;
	        // No need to add styles to the body
	        if ($parent.length && !$$1.nodeName($parent[0], 'body')) {
	            styles = {
	                overflow: 'hidden'
	            };
	            if ($parent.css('position') === 'static') {
	                styles.position = 'relative';
	            }
	            $parent.css(styles);
	        }
	    },


	    /**
	     * Undo any styles attached in this plugin
	     */
	    _resetStyle: function _resetStyle() {
	        this.$elem.css({
	            'cursor': '',
	            'transition': ''
	        });
	        this.$parent.css({
	            'overflow': '',
	            'position': ''
	        });
	    },


	    /**
	     * Binds all necessary events
	     */
	    _bind: function _bind() {
	        var _this = this;

	        var options = this.options;
	        var ns = options.eventNamespace;
	        var str_start = pointerEvents ? 'pointerdown' + ns : 'touchstart' + ns + ' mousedown' + ns;
	        var str_click = pointerEvents ? 'pointerup' + ns : 'touchend' + ns + ' click' + ns;
	        var events = {};
	        var $reset = this.$reset;
	        var $zoomRange = this.$zoomRange;

	        // Bind panzoom events from options
	        var _arr2 = ['Start', 'Change', 'Zoom', 'Pan', 'End', 'Reset'];
	        for (var _i4 = 0; _i4 < _arr2.length; _i4++) {
	            var key = _arr2[_i4];
	            var m = options['on' + key];
	            if ($$1.isFunction(m)) {
	                events['panzoom' + key.toLowerCase() + ns] = m;
	            }
	        }

	        // Bind $elem drag and click/touchdown events
	        // Bind touchstart if either panning or zooming is enabled
	        if (!options.disablePan || !options.disableZoom) {
	            events[str_start] = function (e) {
	                var touches;
	                if (e.type === 'touchstart' ?
	                // Touch
	                (touches = e.touches) && (touches.length === 1 && !options.disablePan || touches.length === 2) :
	                // Mouse/Pointer: Ignore right click
	                !options.disablePan && e.which === 1) {

	                    e.preventDefault();
	                    e.stopPropagation();
	                    _this._startMove(e, touches);
	                }
	            };
	        }
	        this.$elem.on(events);

	        // Bind reset
	        if ($reset.length) {
	            $reset.on(str_click, function (e) {
	                e.preventDefault();
	                _this.reset();
	            });
	        }

	        // Set default attributes for the range input
	        if ($zoomRange.length) {
	            $zoomRange.attr({
	                // Only set the range step if explicit or
	                // set the default if there is no attribute present
	                step: options.rangeStep === Panzoom.defaults.rangeStep && $zoomRange.attr('step') || options.rangeStep,
	                min: options.minScale,
	                max: options.maxScale
	            }).prop({
	                value: this.getMatrix()[0]
	            });
	        }

	        // No bindings if zooming is disabled
	        if (options.disableZoom) {
	            return;
	        }

	        var $zoomIn = this.$zoomIn;
	        var $zoomOut = this.$zoomOut;

	        // Bind zoom in/out
	        // Don't bind one without the other
	        if ($zoomIn.length && $zoomOut.length) {
	            // preventDefault cancels future mouse events on touch events
	            $zoomIn.on(str_click, function (e) {
	                e.preventDefault();
	                _this.zoom();
	            });
	            $zoomOut.on(str_click, function (e) {
	                e.preventDefault();
	                _this.zoom(true);
	            });
	        }

	        if ($zoomRange.length) {
	            events = {};
	            // Cannot prevent default action here, just use pointerdown/mousedown
	            events[(pointerEvents ? 'pointerdown' : 'mousedown') + ns] = function () {
	                _this.transition(true);
	            };
	            // Zoom on input events if available and change events
	            // See https://github.com/timmywil/jquery.panzoom/issues/90
	            events[(supportsInputEvent ? 'input' : 'change') + ns] = function () {
	                _this.zoom(+_this.value, {
	                    noSetRange: true
	                });
	            };
	            $zoomRange.on(events);
	        }
	    },


	    /**
	     * Unbind all events
	     */
	    _unbind: function _unbind() {
	        this.$elem.add(this.$zoomIn).add(this.$zoomOut).add(this.$reset).off(this.options.eventNamespace);
	    },


	    /**
	     * Builds the original transform value
	     */
	    _buildTransform: function _buildTransform() {
	        // Save the original transform
	        // Retrieving this also adds the correct prefixed style name
	        // to jQuery's internal $.cssProps
	        return this._origTransform = this.getTransform(this.options.startTransform);
	    },


	    /**
	     * Set transition property for later use when zooming
	     * If SVG, create necessary animations elements for translations and scaling
	     */
	    _buildTransition: function _buildTransition() {
	        if (this._transform) {
	            var options = this.options;
	            this._transition = this._transform + ' ' + options.duration + 'ms ' + options.easing;
	        }
	    },


	    /**
	     * Checks dimensions to make sure they don't need to be re-calculated
	     */
	    _checkDims: function _checkDims() {
	        var dims = this.dimensions;
	        // Rebuild if width or height is still 0
	        if (!dims.width || !dims.height) {
	            this.resetDimensions();
	        }
	        return this.dimensions;
	    },


	    /**
	     * Calculates the distance between two touch points
	     * Remember pythagorean?
	     * @param {Array} touches
	     * @returns {Number} Returns the distance
	     */
	    _getDistance: function _getDistance(touches) {
	        var touch1 = touches[0];
	        var touch2 = touches[1];
	        return Math.sqrt(Math.pow(Math.abs(touch2.clientX - touch1.clientX), 2) + Math.pow(Math.abs(touch2.clientY - touch1.clientY), 2));
	    },


	    /**
	     * Constructs an approximated point in the middle of two touch points
	     * @returns {Object} Returns an object containing pageX and pageY
	     */
	    _getMiddle: function _getMiddle(touches) {
	        var touch1 = touches[0];
	        var touch2 = touches[1];
	        return {
	            clientX: (touch2.clientX - touch1.clientX) / 2 + touch1.clientX,
	            clientY: (touch2.clientY - touch1.clientY) / 2 + touch1.clientY
	        };
	    },


	    /**
	     * Trigger a panzoom event on our element
	     * The event is passed the Panzoom instance
	     * @param {String|jQuery.Event} event
	     * @param {Mixed} arg1[, arg2, arg3, ...] Arguments to append to the trigger
	     */
	    _trigger: function _trigger(event) {
	        if (isString$1(event)) {
	            event = 'panzoom' + event;
	        }

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }

	        this.$elem.triggerHandler(event, [this].concat(args));
	    },


	    /**
	     * Starts the pan
	     * This is bound to mouse/touchmove on the element
	     * @param {jQuery.Event} event An event with pageX, pageY, and possibly the touches list
	     * @param {TouchList} [touches] The touches list if present
	     */
	    _startMove: function _startMove(event, touches) {
	        var _this2 = this;

	        var move, moveEvent, endEvent, startDistance, startScale, startMiddle, startPageX, startPageY;
	        var self = this;
	        var options = this.options;
	        var ns = options.eventNamespace;
	        var matrix = this.getMatrix();
	        var original = matrix.slice(0);
	        var origPageX = +original[4];
	        var origPageY = +original[5];
	        var panOptions = {
	            matrix: matrix,
	            animate: 'skip'
	        };

	        // Use proper events
	        if (pointerEvents) {
	            moveEvent = 'pointermove';
	            endEvent = 'pointerup';
	        } else if (event.type === 'touchstart') {
	            moveEvent = 'touchmove';
	            endEvent = 'touchend';
	        } else {
	            moveEvent = 'mousemove';
	            endEvent = 'mouseup';
	        }

	        // Add namespace
	        moveEvent += ns;
	        endEvent += ns;

	        // Remove any transitions happening
	        this.transition(true);

	        // Indicate that we are currently panning
	        this.panning = true;

	        // Trigger start event
	        this._trigger('start', event, touches);

	        if (touches && touches.length === 2) {
	            startDistance = this._getDistance(touches);
	            startScale = +matrix[0];
	            startMiddle = this._getMiddle(touches);
	            move = function move(e) {
	                e.preventDefault();

	                // Calculate move on middle point
	                var middle = _this2._getMiddle(touches = e.touches);
	                var diff = _this2._getDistance(touches) - startDistance;

	                // Set zoom
	                _this2.zoom(diff * (options.increment / 100) + startScale, {
	                    focal: middle,
	                    matrix: matrix,
	                    animate: false
	                });

	                // Set pan
	                _this2.pan(+matrix[4] + middle.clientX - startMiddle.clientX, +matrix[5] + middle.clientY - startMiddle.clientY, panOptions);
	                startMiddle = middle;
	            };
	        } else {
	            startPageX = event.pageX;
	            startPageY = event.pageY;

	            /**
	             * Mousemove/touchmove function to pan the element
	             * @param {Object} e Event object
	             */
	            move = function move(e) {
	                e.preventDefault();
	                _this2.pan(origPageX + e.pageX - startPageX, origPageY + e.pageY - startPageY, panOptions);
	            };
	        }

	        // Bind the handlers
	        $$1(document$1).off(ns).on(moveEvent, move).on(endEvent, function (e) {
	            e.preventDefault();
	            // Unbind all document events
	            $$1(this).off(ns);
	            this.panning = false;
	            // Trigger our end event
	            // Simply set the type to "panzoomend" to pass through all end properties
	            // jQuery's `not` is used here to compare Array equality
	            e.type = 'panzoomend';
	            self._trigger(e, matrix, !matrixEquals(matrix, original));
	        });
	    }
	});

	// Add Panzoom as a static property
	$$1.Panzoom = Panzoom;

	/**
	 * Extend jQuery
	 * @param {Object|String} options - The name of a method to call on the prototype
	 *  or an object literal of options
	 * @returns {jQuery|Mixed} jQuery instance for regular chaining or the return value(s) of a panzoom method call
	 */
	$$1.fn.panzoom = function (options) {
	    var instance, args, m, ret;

	    // Call methods widget-style
	    if (isString$1(options)) {
	        ret = [];
	        args = slice.call(arguments, 1);
	        this.each(function () {
	            instance = $$1.data(this, datakey);

	            if (!instance) {
	                ret.push(undefined);

	                // Ignore methods beginning with `_`
	            } else if (options.charAt(0) !== '_' && isFunction(m = instance[options]) &&
	            // If nothing is returned, do not add to return values
	            (m = m.apply(instance, args)) !== undefined) {

	                ret.push(m);
	            }
	        });

	        // Return an array of values for the jQuery instances
	        // Or the value itself if there is only one
	        // Or keep chaining
	        return ret.length ? ret.length === 1 ? ret[0] : ret : this;
	    }

	    return this.each(function () {
	        new Panzoom(this, options);
	    });
	};

	var main = createElement(
		'svg',
		null,
		createElement(
			'filter',
			{ id: 'drop-shadow', 'data-persist': true },
			createElement('feGaussianBlur', { 'in': 'SourceAlpha', stdDeviation: '1' }),
			createElement('feOffset', { dx: '0.05', dy: '0.15', result: 'offsetblur' }),
			createElement('feFlood', { 'flood-color': 'rgba(0, 0, 0, 0.2)' }),
			createElement('feComposite', { in2: 'offsetblur', operator: 'in' }),
			createElement(
				'feMerge',
				null,
				createElement('feMergeNode', null),
				createElement('feMergeNode', { 'in': 'SourceGraphic' })
			)
		),
		createElement(
			'g',
			{ 'data-va-ref': 'marker', 'data-persist': true },
			createElement(
				'marker',
				{ id: 'forwardArrow',
					viewBox: '0 -5 10 10',
					refX: ARROW.REFX,
					markerWidth: ARROW.MARKER_WIDTH,
					markerHeight: ARROW.MARKER_HEIGHT,
					orient: 'auto' },
				createElement('path', { d: 'M0,-5 L10,0 L0,5', fill: ARROW.FILL })
			),
			createElement(
				'marker',
				{ id: 'backwardArrow',
					viewBox: '-10 -5 10 10',
					refX: -1 * ARROW.REFX,
					markerWidth: ARROW.MARKER_WIDTH,
					markerHeight: ARROW.MARKER_HEIGHT,
					orient: 'auto' },
				createElement('path', { d: 'M0,-5 L-10,0 L0,5', fill: ARROW.FILL })
			)
		)
	);

	config$1({ parentNode: main });

	function ready$1(parentNode) {
		$(parentNode).append(createElement(
			'div',
			null,
			main
		));
		$(main).on('dblclick', function () {
			$(zoomIn).click();
		}).panzoom({
			$zoomIn: $(zoomIn),
			$zoomOut: $(zoomOut),
			$reset: $(zoomReset)
		});
	}

	function empty() {
		$(main).children().filter(':not([data-persist])').find('*').attr('opacity', 0);
	}

	var slider = $(createElement('div', {
	    'data-description': 'progress-bar',
	    'data-jsk-progress-slider': {
	        allowExceeding: true,
	        totalStep: 1,
	        draggable: true
	    }
	}));

	// Populate the slider container
	function ready$2(parentNode) {
	    $(parentNode).append(slider);
	    slider.progressSlider();
	}

	function getClassName(name) {
	   return 'jsk-btn jsk-link-muted jsk-icon-' + name;
	}

	var href = 'javascript:void(0);';
	var begin = createElement('a', { href: href, 'class': getClassName('fast-backward') });
	var backward = createElement('a', { href: href, 'class': getClassName('backward') });
	var play = createElement('a', { href: href, 'class': getClassName('play') });
	var forward = createElement('a', { href: href, 'class': getClassName('forward') });
	var end = createElement('a', { href: href, 'class': getClassName('fast-forward') });

	function ready$3(parentNode) {
	   $(parentNode).append(begin).append(backward).append(play).append(forward).append(end);
	}

	var step = 0;
	var state = PAUSE;
	var list$1 = void 0;

	var PLAY = {};
	var PAUSE = {};
	var STOP = {};
	function showPlayButton() {
	    $(play).removeClass('jsk-icon-pause').addClass('jsk-icon-play');
	}

	function showPauseButton() {
	    $(play).removeClass('jsk-icon-play').addClass('jsk-icon-pause');
	}

	function ready$4() {
	    slider.on('settled.progress-slider.jsk', function (event) {
	        setStep(event.newStep);
	    });

	    $(play).click(function () {
	        if (state === PAUSE) {
	            play$1();
	        } else if (state === STOP) {
	            replay();
	        } else {
	            pause();
	        }
	    });

	    $(forward).click(forceNext);
	    $(backward).click(forcePrevious);
	    $(begin).click(forceBegin);
	    $(end).click(forceEnd);
	}

	function playCurrent() {
	    slider.progressSlider('go', step);
	    var state = list$1.get(step);
	    if (state) {
	        state.draw(speed / 2);
	    }
	}

	function play$1() {
	    state = PLAY;
	    playCurrent();
	    showPauseButton();

	    setTimeout(function () {
	        if (state === PLAY && (step += 1) < length()) {
	            play$1();
	        } else if (step >= length()) {
	            stop();
	        }
	    }, speed);
	}

	function pause() {
	    state = PAUSE;
	    showPlayButton();
	}

	function replay() {
	    state = PLAY;
	    step = 0;
	    showPlayButton();
	    play$1();
	}

	function stop() {
	    state = STOP;
	    step = length() - 1;
	    showPlayButton();
	}

	function forceNext() {
	    pause();
	    if (step < length() - 1) {
	        step += 1;
	    }
	    playCurrent();
	}

	function forcePrevious() {
	    pause();
	    if (step > 0) {
	        step -= 1;
	    }
	    playCurrent();
	}

	function forceBegin() {
	    pause();
	    step = 0;
	    playCurrent();
	}

	function forceEnd() {
	    stop();
	    playCurrent();
	}

	function setStep(newStep) {
	    step = newStep;
	    playCurrent();
	    if (step === length() - 1) {
	        stop();
	    } else if (state === STOP) {
	        pause();
	    }
	}

	function length() {
	    if (list$1) {
	        return list$1.length;
	    } else {
	        throw new Error();
	    }
	    return list$1 ? list$1.length : 0;
	}

	function updateSlider() {
	    slider.progressSlider('setTotalStep', length() - 1);
	    if (state === STOP && step !== length() - 1) {
	        state = PAUSE;
	    }
	}

	function mount$2(algorithm) {
	    var duration = arguments.length <= 1 || arguments[1] === undefined ? 250 : arguments[1];

	    // Remove event listener on previous algorithm.
	    if (list$1) {
	        list$1.off(updateSlider);
	    }

	    empty();

	    // Draw initial state.
	    algorithm.initState.draw(duration);

	    // Listen to states list change.
	    list$1 = algorithm.states;
	    list$1.on('change', updateSlider);

	    step = 0;
	    pause();
	    updateSlider();
	}

var _player = Object.freeze({
	    ready: ready$4,
	    play: play$1,
	    pause: pause,
	    stop: stop,
	    forceNext: forceNext,
	    forcePrevious: forcePrevious,
	    setStep: setStep,
	    mount: mount$2
	});

	// Append the nodes to the actual containers.
	function mount() {
	    ready$1(ctx.SVG);
	    mount$1(ctx.SVG);
	    ready(ctx.guide);
	    ready$2(ctx.progressBar);
	    ready$3(ctx.player);
	    ready$4();
	}

	exports.player = _player;
	exports.config = config;
	exports.mount = mount;
	exports.empty = empty;
	exports.status = status;
	exports.Kruskal = Kruskal$1;
	exports.Preorder = Preorder$1;
	exports.Stack = Stack$2;

}));