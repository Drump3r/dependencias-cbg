'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var DataTableStateContext = /*#__PURE__*/React.createContext();
var useTableContext = function useTableContext() {
  return React.useContext(DataTableStateContext);
};
var DataTableProvider = function DataTableProvider(_ref) {
  var children = _ref.children,
      initialState = _ref.initialState;
  return /*#__PURE__*/React__default.createElement(DataTableStateContext.Provider, {
    value: initialState
  }, children);
};
DataTableProvider.propTypes = {
  initialState: propTypes.object.isRequired,
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]).isRequired
};

// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

var randomFromSeed = {
    nextValue: getNextValue,
    seed: setSeed
};

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed$1(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

function get () {
  return alphabet || ORIGINAL;
}

var alphabet_1 = {
    get: get,
    characters: characters,
    seed: setSeed$1,
    lookup: lookup,
    shuffled: getShuffled
};

var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
    randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
    };
} else {
    randomByte = function(size) {
        return crypto.getRandomValues(new Uint8Array(size));
    };
}

var randomByteBrowser = randomByte;

// This file replaces `format.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.

var format_browser = function (random, alphabet, size) {
  // We can???t use bytes bigger than the alphabet. To make bytes values closer
  // to the alphabet, we apply bitmask on them. We look for the closest
  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
  // 30 symbols in the alphabet, we will take 31 (00011111).
  // We do not use faster Math.clz32, because it is not available in browsers.
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
  // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
  // which is bigger than the alphabet). As a result, we will need more bytes,
  // than ID size, because we will refuse bytes bigger than the alphabet.

  // Every hardware random generator call is costly,
  // because we need to wait for entropy collection. This is why often it will
  // be faster to ask for few extra bytes in advance, to avoid additional calls.

  // Here we calculate how many random bytes should we call in advance.
  // It depends on ID length, mask / alphabet size and magic number 1.6
  // (which was selected according benchmarks).

  // -~f => Math.ceil(f) if n is float number
  // -~i => i + 1 if n is integer number
  var step = -~(1.6 * mask * size / alphabet.length);
  var id = '';

  while (true) {
    var bytes = random(step);
    // Compact alternative for `for (var i = 0; i < step; i++)`
    var i = step;
    while (i--) {
      // If random byte is bigger than alphabet even after bitmask,
      // we refuse it by `|| ''`.
      id += alphabet[bytes[i] & mask] || '';
      // More compact than `id.length + 1 === size`
      if (id.length === +size) return id
    }
  }
};

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + format_browser(randomByteBrowser, alphabet_1.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

var generate_1 = generate;

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1567752802062;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 7;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {
    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + generate_1(version);
    str = str + generate_1(clusterWorkerId);
    if (counter > 0) {
        str = str + generate_1(counter);
    }
    str = str + generate_1(seconds);
    return str;
}

var build_1 = build;

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var nonAlphabetic = new RegExp('[^' +
      alphabet_1.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') +
    ']');
    return !nonAlphabetic.test(id);
}

var isValid = isShortId;

var lib = createCommonjsModule(function (module) {





// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId =  0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet_1.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet_1.characters(newCharacters);
    }

    return alphabet_1.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build_1(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;
});
var lib_1 = lib.generate;
var lib_2 = lib.seed;
var lib_3 = lib.worker;
var lib_4 = lib.characters;
var lib_5 = lib.isValid;

var shortid = lib;

var lodash_orderby = createCommonjsModule(function (module, exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

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
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

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
 * Creates a unary function that invokes `func` with its argument transformed.
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

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

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
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

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
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

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
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

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

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

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
    'map': new (Map || ListCache),
    'string': new Hash
  };
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

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

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
  this.__data__.set(value, HASH_UNDEFINED);
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

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

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
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
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

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
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
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
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
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
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
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

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
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
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
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
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
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
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
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

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
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
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
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

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

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

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
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
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
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
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

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
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
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

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
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
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
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

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
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

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
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
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

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
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
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
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
  return value != null && isLength(value.length) && !isFunction(value);
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
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
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
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
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

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
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
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
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

module.exports = orderBy;
});

var isEmpty = function isEmpty() {
  var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return typeof field === 'undefined' || field === null || field.length === 0;
};
var sort = function sort(rows) {
  var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var direction = arguments.length > 2 ? arguments[2] : undefined;
  var sortFn = arguments.length > 3 ? arguments[3] : undefined;

  if (sortFn && typeof sortFn === 'function') {
    return sortFn(rows, field, direction);
  }

  return lodash_orderby(rows, field, direction);
};
var getProperty = function getProperty(row, selector, format, rowIndex) {
  if (!selector) {
    return null;
  }

  if (typeof selector !== 'string' && typeof selector !== 'function') {
    throw new Error('selector must be a . delimited string eg (my.property) or function (e.g. row => row.field');
  }

  if (format && typeof format === 'function') {
    return format(row, rowIndex);
  }

  if (selector && typeof selector === 'function') {
    return selector(row, rowIndex);
  }

  return selector.split('.').reduce(function (acc, part) {
    // O(n2) when querying for an array (e.g. items[0].name)
    // Likely, the object depth will be reasonable enough that performance is not a concern
    var arr = part.match(/[^\]\\[.]+/g);

    if (arr.length > 1) {
      // eslint-disable-next-line no-plusplus
      for (var i = 0; i < arr.length; i++) {
        return acc[arr[i]][arr[i + 1]];
      }
    }

    return acc[part];
  }, row);
};
var insertItem = function insertItem() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return [].concat(_toConsumableArray(array.slice(0, index)), [item], _toConsumableArray(array.slice(index)));
};
var removeItem = function removeItem() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var keyField = arguments.length > 2 ? arguments[2] : undefined;
  var newArray = array.slice();

  if (item[keyField]) {
    newArray.splice(newArray.findIndex(function (a) {
      return a[keyField] === item[keyField];
    }), 1);
  } else {
    newArray.splice(newArray.findIndex(function (a) {
      return a === item;
    }), 1);
  }

  return newArray;
}; // Make sure columns have unique id's

var decorateColumns = function decorateColumns(columns) {
  return columns.map(function (column) {
    return _objectSpread2(_objectSpread2({
      id: shortid.generate()
    }, column), {}, {
      sortable: column.sortable || !!column.sortFunction || undefined
    });
  });
};
var getSortDirection = function getSortDirection(direction) {
  return direction ? 'asc' : 'desc';
};
var handleFunctionProps = function handleFunctionProps(object) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var newObject;
  Object.keys(object).map(function (o) {
    return object[o];
  }).forEach(function (value, index) {
    var oldObject = object;

    if (typeof value === 'function') {
      newObject = _objectSpread2(_objectSpread2({}, oldObject), {}, _defineProperty({}, Object.keys(object)[index], value.apply(void 0, args)));
      delete oldObject[value];
    }
  });
  return newObject || object;
};
var getNumberOfPages = function getNumberOfPages(rowCount, rowsPerPage) {
  return Math.ceil(rowCount / rowsPerPage);
};
var recalculatePage = function recalculatePage(prevPage, nextPage) {
  return Math.min(prevPage, nextPage);
};
var noop = function noop() {
  return null;
};
var getConditionalStyle = function getConditionalStyle() {
  var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var conditionalRowStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var rowStyle = {};

  if (conditionalRowStyles.length) {
    conditionalRowStyles.forEach(function (exp) {
      if (!exp.when || typeof exp.when !== 'function') {
        throw new Error('"when" must be defined in the conditional style object and must be function');
      } // evaluate the field and if true return a the style to be applied


      if (exp.when(row)) {
        rowStyle = exp.style || {};

        if (typeof exp.style === 'function') {
          rowStyle = exp.style(row) || {};
        }
      }
    });
  }

  return rowStyle;
};
var isRowSelected = function isRowSelected() {
  var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var selectedRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var keyField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';

  if (row[keyField]) {
    return selectedRows.some(function (r) {
      return r[keyField] === row[keyField];
    });
  }

  return selectedRows.some(function (r) {
    return r === row;
  });
};
var detectRTL = function detectRTL() {
  var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';

  if (direction === 'auto') {
    var canUse = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    return canUse && (document.getElementsByTagName('BODY')[0] === 'rtl' || document.getElementsByTagName('HTML')[0].dir === 'rtl');
  }

  return direction === 'rtl';
};
var isOdd = function isOdd(num) {
  return num % 2;
};

function tableReducer(state, action) {
  switch (action.type) {
    case 'SELECT_ALL_ROWS':
      {
        var rows = action.rows,
            rowCount = action.rowCount,
            mergeSelections = action.mergeSelections,
            keyField = action.keyField;
        var allChecked = !state.allSelected;

        if (mergeSelections) {
          var selections = allChecked ? [].concat(_toConsumableArray(state.selectedRows), _toConsumableArray(rows.filter(function (row) {
            return !isRowSelected(row, state.selectedRows, keyField);
          }))) : state.selectedRows.filter(function (row) {
            return !isRowSelected(row, rows, keyField);
          });
          return _objectSpread2(_objectSpread2({}, state), {}, {
            allSelected: allChecked,
            selectedCount: selections.length,
            selectedRows: selections
          });
        }

        return _objectSpread2(_objectSpread2({}, state), {}, {
          allSelected: allChecked,
          selectedCount: allChecked ? rowCount : 0,
          selectedRows: allChecked ? rows : []
        });
      }

    case 'SELECT_SINGLE_ROW':
      {
        var row = action.row,
            isSelected = action.isSelected,
            _keyField = action.keyField,
            _rowCount = action.rowCount;

        if (isSelected) {
          return _objectSpread2(_objectSpread2({}, state), {}, {
            selectedCount: state.selectedRows.length > 0 ? state.selectedRows.length - 1 : 0,
            allSelected: false,
            selectedRows: removeItem(state.selectedRows, row, _keyField)
          });
        }

        return _objectSpread2(_objectSpread2({}, state), {}, {
          selectedCount: state.selectedRows.length + 1,
          allSelected: state.selectedRows.length + 1 === _rowCount,
          selectedRows: insertItem(state.selectedRows, row)
        });
      }

    case 'SELECT_MULTIPLE_ROWS':
      {
        var selectedRows = action.selectedRows,
            _rows = action.rows,
            _mergeSelections = action.mergeSelections,
            _keyField2 = action.keyField;

        if (_mergeSelections) {
          var _selections = [].concat(_toConsumableArray(state.selectedRows), _toConsumableArray(selectedRows.filter(function (row) {
            return !isRowSelected(row, state.selectedRows, _keyField2);
          })));

          return _objectSpread2(_objectSpread2({}, state), {}, {
            selectedCount: _selections.length,
            allSelected: false,
            selectedRows: _selections
          });
        }

        return _objectSpread2(_objectSpread2({}, state), {}, {
          selectedCount: selectedRows.length,
          allSelected: selectedRows.length === _rows.length,
          selectedRows: selectedRows
        });
      }

    case 'SORT_CHANGE':
      {
        var sortColumn = action.sortColumn,
            sortDirection = action.sortDirection,
            sortServer = action.sortServer,
            selectedColumn = action.selectedColumn,
            pagination = action.pagination,
            paginationServer = action.paginationServer,
            visibleOnly = action.visibleOnly,
            persistSelectedOnSort = action.persistSelectedOnSort;
        var clearSelectedOnSort = pagination && paginationServer && !persistSelectedOnSort || sortServer || visibleOnly;
        return _objectSpread2(_objectSpread2({}, state), {}, {
          sortColumn: sortColumn,
          selectedColumn: selectedColumn,
          sortDirection: sortDirection,
          currentPage: 1
        }, clearSelectedOnSort && {
          allSelected: false,
          selectedCount: 0,
          selectedRows: []
        });
      }

    case 'CHANGE_PAGE':
      {
        var page = action.page,
            _paginationServer = action.paginationServer,
            _visibleOnly = action.visibleOnly,
            persistSelectedOnPageChange = action.persistSelectedOnPageChange;

        var _mergeSelections2 = _paginationServer && persistSelectedOnPageChange;

        var clearSelectedOnPage = _paginationServer && !persistSelectedOnPageChange || _visibleOnly;
        return _objectSpread2(_objectSpread2(_objectSpread2({}, state), {}, {
          currentPage: page
        }, _mergeSelections2 && {
          allSelected: false
        }), clearSelectedOnPage && {
          allSelected: false,
          selectedCount: 0,
          selectedRows: []
        });
      }

    case 'CHANGE_ROWS_PER_PAGE':
      {
        var rowsPerPage = action.rowsPerPage,
            _page = action.page;
        return _objectSpread2(_objectSpread2({}, state), {}, {
          currentPage: _page,
          rowsPerPage: rowsPerPage
        });
      }

    case 'CLEAR_SELECTED_ROWS':
      {
        var selectedRowsFlag = action.selectedRowsFlag;
        return _objectSpread2(_objectSpread2({}, state), {}, {
          allSelected: false,
          selectedCount: 0,
          selectedRows: [],
          selectedRowsFlag: selectedRowsFlag
        });
      }

    default:
      {
        throw new Error("Unhandled action type: ".concat(action.type));
      }
  }
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  ", ";\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  pointer-events: none;\n  opacity: 0.4;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var disabled = styled.css(_templateObject());
var TableStyle = styled__default.div(_templateObject2(), function (props) {
  return props.disabled && disabled;
}, function (props) {
  return props.theme.table.style;
});

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  text-align: left;\n  ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var TableHead = styled__default.div(_templateObject$1(), function (props) {
  return props.theme.head.style;
});

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  pointer-events: none;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var disabled$1 = styled.css(_templateObject$2());
var TableHeadRow = styled__default.div(_templateObject2$1(), function (props) {
  return props.theme.headRow.style;
}, function (props) {
  return props.dense && props.theme.headRow.denseStyle;
}, function (props) {
  return props.disabled && disabled$1;
});

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    @media screen and (max-width: ", "px) {\n      ", "\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    @media screen and (max-width: ", "px) {\n      ", "\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n    @media screen and (max-width: ", "px) {\n      ", "\n    }\n  "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n    @media screen and (max-width: ", "px) {\n      ", "\n    }\n  "]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var SMALL = 599;
var MEDIUM = 959;
var LARGE = 1280;
var media = {
  sm: function sm() {
    return styled.css(_templateObject$3(), SMALL, styled.css.apply(void 0, arguments));
  },
  md: function md() {
    return styled.css(_templateObject2$2(), MEDIUM, styled.css.apply(void 0, arguments));
  },
  lg: function lg() {
    return styled.css(_templateObject3(), LARGE, styled.css.apply(void 0, arguments));
  },
  custom: function custom(value) {
    return function () {
      return styled.css(_templateObject4(), value, styled.css.apply(void 0, arguments));
    };
  }
};

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n    min-width: ", ";\n    max-width: ", ";\n  "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: ", ";\n  flex-shrink: 0;\n  flex-basis: 0;\n  max-width: ", ";\n  min-width: ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n\n  /* handle hiding cells */\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  line-height: normal;\n  ", ";\n  ", ";\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var CellBase = styled__default.div(_templateObject$4(), function (_ref) {
  var theme = _ref.theme,
      head = _ref.head;
  return theme[head ? 'headCells' : 'cells'].style;
}, function (props) {
  return props.noPadding && 'padding: 0';
}); // Flex calculations

var Cell = styled__default(CellBase)(_templateObject2$3(), function (props) {
  return props.column.grow === 0 || props.column.button ? 0 : props.column.grow || 1;
}, function (props) {
  return props.column.maxWidth || '100%';
}, function (props) {
  return props.column.minWidth || '100px';
}, function (props) {
  return props.column.width && styled.css(_templateObject3$1(), props.column.width, props.column.width);
}, function (props) {
  return props.column.right && 'justify-content: flex-end';
}, function (props) {
  return (props.column.center || props.column.button) && 'justify-content: center';
}, function (props) {
  return (props.column.compact || props.column.button) && 'padding: 0';
}, function (props) {
  return props.column.hide && props.column.hide === 'sm' && media.sm(_templateObject4$1());
}, function (props) {
  return props.column.hide && props.column.hide === 'md' && media.md(_templateObject5());
}, function (props) {
  return props.column.hide && props.column.hide === 'lg' && media.lg(_templateObject6());
}, function (props) {
  return props.column.hide && Number.isInteger(props.column.hide) && media.custom(props.column.hide)(_templateObject7());
});

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: 400;\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  div:first-child {\n    white-space: ", ";\n    overflow: ", ";\n    text-overflow: ellipsis;\n  }\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var overflowCSS = styled.css(_templateObject$5(), function (props) {
  return props.column.wrap ? 'normal' : 'nowrap';
}, function (props) {
  return props.column.allowOverflow ? 'visible' : 'hidden';
});
var TableCellStyle = styled__default(Cell)(_templateObject2$4(), function (props) {
  return props.theme.rows.fontSize;
}, function (props) {
  return !props.column.cell && overflowCSS;
}, function (props) {
  return props.column.style;
}, function (props) {
  return props.extendedCellStyle;
});
var TableCell = /*#__PURE__*/React.memo(function (_ref) {
  var id = _ref.id,
      rowIndex = _ref.rowIndex,
      column = _ref.column,
      row = _ref.row;

  if (column.omit) {
    return null;
  } // apply a tag that TableRow will use to stop event propagation when TableCell is clicked


  var dataTag = column.ignoreRowClick || column.button ? null : '___react-data-table-allow-propagation___';
  var extendedCellStyle = getConditionalStyle(row, column.conditionalCellStyles);
  return /*#__PURE__*/React__default.createElement(TableCellStyle, {
    id: id,
    role: "gridcell",
    column: column,
    "data-tag": dataTag,
    className: "rdt_TableCell",
    extendedCellStyle: extendedCellStyle
  }, !column.cell && /*#__PURE__*/React__default.createElement("div", {
    "data-tag": dataTag
  }, getProperty(row, column.selector, column.format, rowIndex)), column.cell && column.cell(row, rowIndex, column, id));
});
TableCell.propTypes = {
  id: propTypes.string.isRequired,
  rowIndex: propTypes.number.isRequired,
  column: propTypes.object.isRequired,
  row: propTypes.object.isRequired
};

var calculateBaseStyle = function calculateBaseStyle(disabled) {
  return _objectSpread2(_objectSpread2({
    fontSize: '18px'
  }, !disabled && {
    cursor: 'pointer'
  }), {}, {
    padding: 0,
    marginTop: '1px',
    verticalAlign: 'middle',
    position: 'relative'
  });
};

var Checkbox = /*#__PURE__*/React.memo(function (_ref) {
  var component = _ref.component,
      componentOptions = _ref.componentOptions,
      indeterminate = _ref.indeterminate,
      checked = _ref.checked,
      name = _ref.name,
      onClick = _ref.onClick,
      disabled = _ref.disabled;

  var setCheckboxRef = function setCheckboxRef(checkbox) {
    if (checkbox) {
      // eslint-disable-next-line no-param-reassign
      checkbox.indeterminate = indeterminate;
    }
  };

  var TagName = component;
  var baseStyle = TagName !== 'input' ? componentOptions.style : calculateBaseStyle(disabled);
  var resolvedComponentOptions = React.useMemo(function () {
    return handleFunctionProps(componentOptions, indeterminate);
  }, [componentOptions, indeterminate]);
  return /*#__PURE__*/React__default.createElement(TagName // allow this component to fully control these options
  , _extends({
    type: "checkbox",
    ref: setCheckboxRef,
    style: baseStyle,
    onClick: disabled ? noop : onClick,
    name: name,
    "aria-label": name,
    checked: checked,
    disabled: disabled
  }, resolvedComponentOptions, {
    onChange: noop // prevent uncontrolled checkbox warnings -  we don't need onChange

  }));
});
Checkbox.propTypes = {
  name: propTypes.string.isRequired,
  indeterminate: propTypes.bool,
  component: propTypes.oneOfType([propTypes.string, propTypes.node, propTypes.func, propTypes.object]),
  componentOptions: propTypes.object,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  onClick: propTypes.func
};
Checkbox.defaultProps = {
  indeterminate: false,
  component: 'input',
  componentOptions: {
    style: {}
  },
  checked: false,
  disabled: false,
  onClick: null
};

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  flex: 0 0 48px;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n  white-space: nowrap;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var TableCellCheckboxStyle = styled__default(CellBase)(_templateObject$6());

var TableCellCheckbox = function TableCellCheckbox(_ref) {
  var name = _ref.name,
      row = _ref.row,
      selected = _ref.selected;

  var _useTableContext = useTableContext(),
      dispatch = _useTableContext.dispatch,
      data = _useTableContext.data,
      keyField = _useTableContext.keyField,
      selectableRowsComponent = _useTableContext.selectableRowsComponent,
      selectableRowsComponentProps = _useTableContext.selectableRowsComponentProps,
      selectableRowDisabled = _useTableContext.selectableRowDisabled;

  var disabled = selectableRowDisabled && selectableRowDisabled(row);
  var handleOnRowSelected = React.useCallback(function () {
    return dispatch({
      type: 'SELECT_SINGLE_ROW',
      row: row,
      isSelected: selected,
      keyField: keyField,
      rowCount: data.length
    });
  }, [dispatch, row, selected, keyField, data.length]);
  return /*#__PURE__*/React__default.createElement(TableCellCheckboxStyle, {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    className: "rdt_TableCell",
    noPadding: true
  }, /*#__PURE__*/React__default.createElement(Checkbox, {
    name: name,
    component: selectableRowsComponent,
    componentOptions: selectableRowsComponentProps,
    checked: selected,
    "aria-checked": selected,
    onClick: handleOnRowSelected,
    disabled: disabled
  }));
};

TableCellCheckbox.propTypes = {
  name: propTypes.string.isRequired,
  row: propTypes.object.isRequired,
  selected: propTypes.bool.isRequired
};

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  user-select: none;\n  white-space: nowrap;\n  border: none;\n  background-color: transparent;\n  ", ";\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var ButtonStyle = styled__default.button(_templateObject$7(), function (props) {
  return props.theme.expanderButton.style;
});

var ExpanderButton = function ExpanderButton(_ref) {
  var expanded = _ref.expanded,
      row = _ref.row,
      onToggled = _ref.onToggled,
      disabled = _ref.disabled;

  var _useTableContext = useTableContext(),
      expandableIcon = _useTableContext.expandableIcon,
      keyField = _useTableContext.keyField;

  var icon = expanded ? expandableIcon.expanded : expandableIcon.collapsed;

  var handleToggle = function handleToggle(e) {
    return onToggled && onToggled(row, e);
  };

  return /*#__PURE__*/React__default.createElement(ButtonStyle, {
    "aria-disabled": disabled,
    onClick: handleToggle,
    "data-testid": "expander-button-".concat(row[keyField]),
    disabled: disabled,
    "aria-label": expanded ? 'Collapse Row' : 'Expand Row',
    role: "button",
    type: "button"
  }, icon);
};

ExpanderButton.propTypes = {
  row: propTypes.object.isRequired,
  expanded: propTypes.bool,
  onToggled: propTypes.func,
  disabled: propTypes.bool
};
ExpanderButton.defaultProps = {
  onToggled: null,
  expanded: false,
  disabled: false
};

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  font-weight: 400;\n  ", ";\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var TableCellExpanderStyle = styled__default(CellBase)(_templateObject$8(), function (props) {
  return props.theme.expanderCell.style;
});

var TableCellExpander = function TableCellExpander(_ref) {
  var column = _ref.column,
      row = _ref.row,
      expanded = _ref.expanded,
      onRowExpandToggled = _ref.onRowExpandToggled,
      disabled = _ref.disabled;
  return /*#__PURE__*/React__default.createElement(TableCellExpanderStyle, {
    column: column,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    noPadding: true
  }, /*#__PURE__*/React__default.createElement(ExpanderButton, {
    onToggled: onRowExpandToggled,
    row: row,
    expanded: expanded,
    disabled: disabled
  }));
};

TableCellExpander.propTypes = {
  column: propTypes.object,
  row: propTypes.object,
  expanded: propTypes.bool,
  onRowExpandToggled: propTypes.func.isRequired,
  disabled: propTypes.bool
};
TableCellExpander.defaultProps = {
  column: {},
  row: {},
  expanded: false,
  disabled: false
};

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  ", ";\n  ", ";\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
// eslint-disable-next-line arrow-body-style

var renderChildren = function renderChildren(children, data) {
  return React.Children.map(children, function (child) {
    return /*#__PURE__*/React.cloneElement(child, {
      data: data
    });
  });
};

var ExpanderRowStyle = styled__default.div(_templateObject$9(), function (props) {
  return props.theme.expanderRow.style;
}, function (props) {
  return props.extendedRowStyle;
});

var ExpanderRow = function ExpanderRow(_ref) {
  var data = _ref.data,
      children = _ref.children,
      extendedRowStyle = _ref.extendedRowStyle;
  return /*#__PURE__*/React__default.createElement(ExpanderRowStyle, {
    className: "rdt_ExpanderRow",
    extendedRowStyle: extendedRowStyle
  }, renderChildren(children, data));
};

ExpanderRow.propTypes = {
  data: propTypes.object,
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
  extendedRowStyle: propTypes.object
};
ExpanderRow.defaultProps = {
  data: {},
  children: null,
  extendedRowStyle: null
};

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: stretch;\n  align-content: stretch;\n  width: 100%;\n  box-sizing: border-box;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n  &:hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  &:hover {\n    ", ";\n  }\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var STOP_PROP_TAG = '___react-data-table-allow-propagation___';
var highlightCSS = styled.css(_templateObject$a(), function (props) {
  return props.highlightOnHover && props.theme.rows.highlightOnHoverStyle;
});
var pointerCSS = styled.css(_templateObject2$5());
var TableRowStyle = styled__default.div(_templateObject3$2(), function (props) {
  return props.theme.rows.style;
}, function (props) {
  return props.dense && props.theme.rows.denseStyle;
}, function (props) {
  return props.striped && props.theme.rows.stripedStyle;
}, function (props) {
  return props.highlightOnHover && highlightCSS;
}, function (props) {
  return props.pointerOnHover && pointerCSS;
}, function (props) {
  return props.selected && props.theme.rows.selectedHighlightStyle;
}, function (props) {
  return props.extendedRowStyle;
});
var TableRow = /*#__PURE__*/React.memo(function (_ref) {
  var id = _ref.id,
      keyField = _ref.keyField,
      columns = _ref.columns,
      row = _ref.row,
      onRowClicked = _ref.onRowClicked,
      onRowDoubleClicked = _ref.onRowDoubleClicked,
      selectableRows = _ref.selectableRows,
      expandableRows = _ref.expandableRows,
      striped = _ref.striped,
      highlightOnHover = _ref.highlightOnHover,
      pointerOnHover = _ref.pointerOnHover,
      dense = _ref.dense,
      expandableRowsComponent = _ref.expandableRowsComponent,
      defaultExpanderDisabled = _ref.defaultExpanderDisabled,
      defaultExpanded = _ref.defaultExpanded,
      expandableRowsHideExpander = _ref.expandableRowsHideExpander,
      expandOnRowClicked = _ref.expandOnRowClicked,
      expandOnRowDoubleClicked = _ref.expandOnRowDoubleClicked,
      conditionalRowStyles = _ref.conditionalRowStyles,
      inheritConditionalStyles = _ref.inheritConditionalStyles,
      onRowExpandToggled = _ref.onRowExpandToggled,
      selected = _ref.selected,
      selectableRowsHighlight = _ref.selectableRowsHighlight,
      rowIndex = _ref.rowIndex;

  var _useState = React.useState(defaultExpanded),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  React.useEffect(function () {
    setExpanded(defaultExpanded);
  }, [defaultExpanded]);
  var handleExpanded = React.useCallback(function () {
    setExpanded(!expanded);
    onRowExpandToggled(!expanded, row);
  }, [expanded, onRowExpandToggled, row]);
  var showPointer = pointerOnHover || expandableRows && (expandOnRowClicked || expandOnRowDoubleClicked);
  var handleRowClick = React.useCallback(function (e) {
    // use event delegation allow events to propagate only when the element with data-tag ___react-data-table-allow-propagation___ is present
    if (e.target && e.target.getAttribute('data-tag') === STOP_PROP_TAG) {
      onRowClicked(row, e);

      if (!defaultExpanderDisabled && expandableRows && expandOnRowClicked) {
        handleExpanded();
      }
    }
  }, [defaultExpanderDisabled, expandOnRowClicked, expandableRows, handleExpanded, onRowClicked, row]);
  var handleRowDoubleClick = React.useCallback(function (e) {
    if (e.target && e.target.getAttribute('data-tag') === STOP_PROP_TAG) {
      onRowDoubleClicked(row, e);

      if (!defaultExpanderDisabled && expandableRows && expandOnRowDoubleClicked) {
        handleExpanded();
      }
    }
  }, [defaultExpanderDisabled, expandOnRowDoubleClicked, expandableRows, handleExpanded, onRowDoubleClicked, row]);
  var extendedRowStyle = getConditionalStyle(row, conditionalRowStyles);
  var hightlightSelected = selectableRowsHighlight && selected;
  var inheritStyles = inheritConditionalStyles ? extendedRowStyle : null;
  var isStriped = striped && isOdd(rowIndex);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(TableRowStyle, {
    id: "row-".concat(id),
    role: "row",
    striped: isStriped,
    highlightOnHover: highlightOnHover,
    pointerOnHover: !defaultExpanderDisabled && showPointer,
    dense: dense,
    onClick: handleRowClick,
    onDoubleClick: handleRowDoubleClick,
    className: "rdt_TableRow",
    extendedRowStyle: extendedRowStyle,
    selected: hightlightSelected
  }, selectableRows && /*#__PURE__*/React__default.createElement(TableCellCheckbox, {
    name: "select-row-".concat(row[keyField]),
    row: row,
    selected: selected
  }), expandableRows && !expandableRowsHideExpander && /*#__PURE__*/React__default.createElement(TableCellExpander, {
    expanded: expanded,
    row: row,
    onRowExpandToggled: handleExpanded,
    disabled: defaultExpanderDisabled
  }), columns.map(function (column) {
    return /*#__PURE__*/React__default.createElement(TableCell, {
      id: "cell-".concat(column.id, "-").concat(row[keyField]),
      key: "cell-".concat(column.id, "-").concat(row[keyField]),
      column: column,
      row: row,
      rowIndex: rowIndex
    });
  })), expandableRows && expanded && /*#__PURE__*/React__default.createElement(ExpanderRow, {
    key: "expander--".concat(row[keyField]),
    data: row,
    extendedRowStyle: inheritStyles
  }, expandableRowsComponent));
});
TableRow.propTypes = {
  id: propTypes.any.isRequired,
  keyField: propTypes.string.isRequired,
  columns: propTypes.array.isRequired,
  row: propTypes.object.isRequired,
  rowIndex: propTypes.number.isRequired,
  onRowClicked: propTypes.func.isRequired,
  onRowDoubleClicked: propTypes.func.isRequired,
  onRowExpandToggled: propTypes.func.isRequired,
  defaultExpanded: propTypes.bool,
  defaultExpanderDisabled: propTypes.bool,
  selectableRows: propTypes.bool.isRequired,
  expandableRows: propTypes.bool.isRequired,
  striped: propTypes.bool.isRequired,
  highlightOnHover: propTypes.bool.isRequired,
  pointerOnHover: propTypes.bool.isRequired,
  dense: propTypes.bool.isRequired,
  expandableRowsComponent: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node, propTypes.func]).isRequired,
  expandableRowsHideExpander: propTypes.bool.isRequired,
  expandOnRowClicked: propTypes.bool.isRequired,
  expandOnRowDoubleClicked: propTypes.bool.isRequired,
  conditionalRowStyles: propTypes.array.isRequired,
  inheritConditionalStyles: propTypes.bool.isRequired,
  selected: propTypes.bool.isRequired,
  selectableRowsHighlight: propTypes.bool.isRequired
};
TableRow.defaultProps = {
  defaultExpanded: false,
  defaultExpanderDisabled: false
};

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  padding: 2px;\n  color: inherit;\n  flex-grow: 0;\n  flex-shrink: 0;\n  ", ";\n  ", ";\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var Icon = styled__default.span(_templateObject$b(), function (props) {
  return props.sortActive ? 'opacity: 1' : 'opacity: 0';
}, function (props) {
  return props.sortDirection === 'desc' && 'transform: rotate(180deg)';
});

var NativeSortIcon = function NativeSortIcon(_ref) {
  var sortActive = _ref.sortActive,
      sortDirection = _ref.sortDirection,
      sortIcon = _ref.sortIcon;
  return /*#__PURE__*/React__default.createElement(Icon, {
    sortActive: sortActive,
    sortDirection: sortDirection
  }, sortIcon);
};

NativeSortIcon.propTypes = {
  sortDirection: propTypes.string.isRequired,
  sortActive: propTypes.bool,
  sortIcon: propTypes.node
};
NativeSortIcon.defaultProps = {
  sortActive: false,
  sortIcon: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, "\u25B2")
};

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  height: 100%;\n  line-height: 1;\n  user-select: none;\n  ", ";\n\n  span.__rdt_custom_sort_icon__ {\n    i,\n    svg {\n      ", ";\n      color: inherit;\n      font-size: 18px !important;\n      height: 18px !important;\n      width: 18px !important;\n      backface-visibility: hidden;\n      transform-style: preserve-3d;\n      transition-duration: 125ms;\n      transition-property: transform;\n    }\n\n    &.asc i,\n    &.asc svg {\n      transform: rotate(180deg);\n    }\n  }\n\n  &:hover {\n    ", ";\n    ", ";\n\n    span,\n    span.__rdt_custom_sort_icon__ * {\n      ", ";\n    }\n  }\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var TableColStyle = styled__default(Cell)(_templateObject$c(), function (props) {
  return props.column.button && 'text-align: center';
});
var ColumnSortable = styled__default.div(_templateObject2$6(), function (props) {
  return props.sortActive ? props.theme.headCells.activeSortStyle : props.theme.headCells.inactiveSortStyle;
}, function (props) {
  return props.sortActive ? 'opacity: 1' : 'opacity: 0';
}, function (_ref) {
  var column = _ref.column;
  return column.sortable && 'cursor: pointer';
}, function (_ref2) {
  var column = _ref2.column,
      theme = _ref2.theme;
  return column.sortable && theme.headCells.activeStyle;
}, function (_ref3) {
  var sortActive = _ref3.sortActive,
      column = _ref3.column;
  return !sortActive && column.sortable && 'opacity: 1';
});
var TableCol = /*#__PURE__*/React.memo(function (_ref4) {
  var column = _ref4.column,
      sortIcon = _ref4.sortIcon;

  var _useTableContext = useTableContext(),
      dispatch = _useTableContext.dispatch,
      pagination = _useTableContext.pagination,
      paginationServer = _useTableContext.paginationServer,
      sortColumn = _useTableContext.sortColumn,
      sortDirection = _useTableContext.sortDirection,
      sortServer = _useTableContext.sortServer,
      selectableRowsVisibleOnly = _useTableContext.selectableRowsVisibleOnly,
      persistSelectedOnSort = _useTableContext.persistSelectedOnSort;

  if (column.omit) {
    return null;
  }

  var handleSortChange = function handleSortChange() {
    if (column.sortable) {
      var direction = sortDirection; // change sort direction only if sortColumn (currently selected column) is === the newly clicked column
      // otherwise, retain sort direction if the column is switched

      if (sortColumn === column.selector) {
        direction = sortDirection === 'asc' ? 'desc' : 'asc';
      }

      dispatch({
        type: 'SORT_CHANGE',
        sortDirection: direction,
        sortColumn: column.selector,
        sortServer: sortServer,
        selectedColumn: column,
        pagination: pagination,
        paginationServer: paginationServer,
        visibleOnly: selectableRowsVisibleOnly,
        persistSelectedOnSort: persistSelectedOnSort
      });
    }
  };

  var handleKeyPress = function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleSortChange();
    }
  };

  var renderNativeSortIcon = function renderNativeSortIcon(sortActive) {
    return /*#__PURE__*/React__default.createElement(NativeSortIcon, {
      column: column,
      sortActive: sortActive,
      sortDirection: sortDirection
    });
  };

  var renderCustomSortIcon = function renderCustomSortIcon() {
    return /*#__PURE__*/React__default.createElement("span", {
      className: [sortDirection, '__rdt_custom_sort_icon__'].join(' ')
    }, sortIcon);
  };

  var sortActive = column.sortable && sortColumn === column.selector;
  var nativeSortIconLeft = column.sortable && !sortIcon && !column.right;
  var nativeSortIconRight = column.sortable && !sortIcon && column.right;
  var customSortIconLeft = column.sortable && sortIcon && !column.right;
  var customSortIconRight = column.sortable && sortIcon && column.right;
  return /*#__PURE__*/React__default.createElement(TableColStyle, {
    className: "rdt_TableCol",
    column: column // required by Cell.js
    ,
    head: true
  }, column.name && /*#__PURE__*/React__default.createElement(ColumnSortable, {
    id: "column-".concat(column.selector),
    role: "columnheader",
    tabIndex: 0,
    className: "rdt_TableCol_Sortable",
    onClick: handleSortChange,
    onKeyPress: handleKeyPress,
    sortActive: sortActive,
    column: column
  }, customSortIconRight && renderCustomSortIcon(), nativeSortIconRight && renderNativeSortIcon(sortActive), /*#__PURE__*/React__default.createElement("div", null, column.name), customSortIconLeft && renderCustomSortIcon(), nativeSortIconLeft && renderNativeSortIcon(sortActive)));
});
TableCol.propTypes = {
  column: propTypes.object.isRequired,
  sortIcon: propTypes.oneOfType([propTypes.bool, propTypes.object]).isRequired
};

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n  flex: 0 0 48px;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n  white-space: nowrap;\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var TableColStyle$1 = styled__default(CellBase)(_templateObject$d());

var TableColCheckbox = function TableColCheckbox(_ref) {
  var head = _ref.head;

  var _useTableContext = useTableContext(),
      dispatch = _useTableContext.dispatch,
      data = _useTableContext.data,
      selectedRows = _useTableContext.selectedRows,
      allSelected = _useTableContext.allSelected,
      selectableRowsComponent = _useTableContext.selectableRowsComponent,
      selectableRowsComponentProps = _useTableContext.selectableRowsComponentProps,
      selectableRowDisabled = _useTableContext.selectableRowDisabled,
      keyField = _useTableContext.keyField,
      mergeSelections = _useTableContext.mergeSelections;

  var indeterminate = selectedRows.length > 0 && !allSelected;
  var rows = selectableRowDisabled ? data.filter(function (row) {
    return !selectableRowDisabled(row);
  }) : data;
  var isDisabled = rows.length === 0; // The row count should subtrtact rows that are disabled

  var rowCount = Math.min(data.length, rows.length);
  var handleSelectAll = React.useCallback(function () {
    return dispatch({
      type: 'SELECT_ALL_ROWS',
      rows: rows,
      rowCount: rowCount,
      mergeSelections: mergeSelections,
      keyField: keyField
    });
  }, [dispatch, keyField, mergeSelections, rowCount, rows]);
  return /*#__PURE__*/React__default.createElement(TableColStyle$1, {
    className: "rdt_TableCol",
    head: head,
    noPadding: true
  }, /*#__PURE__*/React__default.createElement(Checkbox, {
    name: "select-all-rows",
    component: selectableRowsComponent,
    componentOptions: selectableRowsComponentProps,
    onClick: handleSelectAll,
    checked: allSelected,
    indeterminate: indeterminate,
    disabled: isDisabled
  }));
};

TableColCheckbox.propTypes = {
  head: propTypes.bool
};
TableColCheckbox.defaultProps = {
  head: true
};

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: inherit;\n  z-index: 1;\n  align-items: center;\n  justify-content: space-between;\n  display: flex;\n  ", ";\n  ", ";\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex: 1 0 auto;\n  height: 100%;\n  color: ", ";\n  font-size: ", ";\n  font-weight: 400;\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var Title = styled__default.div(_templateObject$e(), function (props) {
  return props.theme.contextMenu.fontColor;
}, function (props) {
  return props.theme.contextMenu.fontSize;
});
var ContextActions = styled__default.div(_templateObject2$7());
var ContextMenuStyle = styled__default.div(_templateObject3$3(), function (props) {
  return props.theme.contextMenu.style;
}, function (props) {
  return props.visible && props.theme.contextMenu.activeStyle;
});

var generateDefaultContextTitle = function generateDefaultContextTitle(contextMessage, selectedCount, direction) {
  if (selectedCount === 0) {
    return null;
  }

  var datumName = selectedCount === 1 ? contextMessage.singular : contextMessage.plural; // TODO: add mock document rtl tests

  if (detectRTL(direction)) {
    return "".concat(selectedCount, " ").concat(contextMessage.message || '', " ").concat(datumName);
  }

  return "".concat(selectedCount, " ").concat(datumName, " ").concat(contextMessage.message || '');
};

var ContextMenu = function ContextMenu() {
  var _useTableContext = useTableContext(),
      contextMessage = _useTableContext.contextMessage,
      contextActions = _useTableContext.contextActions,
      contextComponent = _useTableContext.contextComponent,
      selectedCount = _useTableContext.selectedCount,
      direction = _useTableContext.direction;

  var visible = selectedCount > 0;

  if (contextComponent) {
    return /*#__PURE__*/React__default.createElement(ContextMenuStyle, {
      visible: visible
    }, /*#__PURE__*/React.cloneElement(contextComponent, {
      selectedCount: selectedCount
    }));
  }

  return /*#__PURE__*/React__default.createElement(ContextMenuStyle, {
    visible: visible
  }, /*#__PURE__*/React__default.createElement(Title, null, generateDefaultContextTitle(contextMessage, selectedCount, direction)), /*#__PURE__*/React__default.createElement(ContextActions, null, contextActions));
};

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  > * {\n    margin-left: 5px;\n  }\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = _taggedTemplateLiteral(["\n  flex: 1 0 auto;\n  color: ", ";\n  font-size: ", ";\n  font-weight: 400;\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  flex-wrap: wrap;\n  ", "\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var TableHeaderStyle = styled__default.div(_templateObject$f(), function (props) {
  return props.theme.header.style;
});
var Title$1 = styled__default.div(_templateObject2$8(), function (props) {
  return props.theme.header.fontColor;
}, function (props) {
  return props.theme.header.fontSize;
});
var Actions = styled__default.div(_templateObject3$4());

var TableHeader = function TableHeader(_ref) {
  var title = _ref.title,
      actions = _ref.actions,
      showMenu = _ref.showMenu;
  return /*#__PURE__*/React__default.createElement(TableHeaderStyle, {
    className: "rdt_TableHeader",
    role: "heading",
    "aria-level": "1"
  }, /*#__PURE__*/React__default.createElement(Title$1, null, title), /*#__PURE__*/React__default.createElement(Actions, null, actions), showMenu && /*#__PURE__*/React__default.createElement(ContextMenu, null));
};

TableHeader.propTypes = {
  title: propTypes.oneOfType([propTypes.string, propTypes.node]).isRequired,
  actions: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
  showMenu: propTypes.bool
};
TableHeader.defaultProps = {
  actions: [],
  showMenu: true
};

function _templateObject$g() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  align-items: center;\n  padding: 4px 16px 4px 24px;\n  width: 100%;\n  justify-content: ", ";\n  flex-wrap: ", ";\n  ", "\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}
var alignMap = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center'
};
var SubheaderWrapper = styled__default.header(_templateObject$g(), function (props) {
  return alignMap[props.align];
}, function (props) {
  return props.wrapContent ? 'wrap' : 'nowrap';
}, function (props) {
  return props.theme.subHeader.style;
});

var TableSubheader = function TableSubheader(_ref) {
  var align = _ref.align,
      wrapContent = _ref.wrapContent,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement(SubheaderWrapper, {
    align: align,
    wrapContent: wrapContent
  }, children);
};

TableSubheader.propTypes = {
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node, propTypes.string]),
  align: propTypes.oneOf(['center', 'left', 'right']),
  wrapContent: propTypes.bool
};
TableSubheader.defaultProps = {
  children: null,
  align: 'right',
  wrapContent: true
};

function _templateObject2$9() {
  var data = _taggedTemplateLiteral(["\n    max-height: ", ";\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n  "]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$h() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  ", ";\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var TableBody = styled__default.div(_templateObject$h(), function (_ref) {
  var fixedHeader = _ref.fixedHeader,
      hasOffset = _ref.hasOffset,
      offset = _ref.offset,
      fixedHeaderScrollHeight = _ref.fixedHeaderScrollHeight;
  return fixedHeader && styled.css(_templateObject2$9(), hasOffset ? "calc(".concat(fixedHeaderScrollHeight, " - ").concat(offset, ")") : fixedHeaderScrollHeight);
});
TableBody.defaultProps = {
  fixedHeaderScrollHeight: '100vh',
  offset: 0
};

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n    padding-bottom: ", ";\n    margin-bottom: -", ";\n  "]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$a() {
  var data = _taggedTemplateLiteral(["\n    overflow-x: auto;\n\n    // prevents vertical scrolling in firefox\n    overflow-y: hidden;\n    min-height: 0;\n  "]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$i() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  border-radius: inherit;\n  ", ";\n  ", ";\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
/* Hack when using layovers/menus that get clipped by overflow-x
  when a table is responsive due to overflow-xy scroll spec stupidity.
  Note: The parent element height must be set to 100%!
  https://www.brunildo.org/test/Overflowxy2.html
*/

var ResponsiveWrapper = styled__default.div(_templateObject$i(), function (props) {
  return props.responsive && styled.css(_templateObject2$a());
}, function (props) {
  return props.overflowY && props.responsive && props.overflowYOffset && styled.css(_templateObject3$5(), props.overflowYOffset, props.overflowYOffset);
});

function _templateObject$j() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  ", ";\n"]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}
var ProgressWrapperStyle = styled__default.div(_templateObject$j(), function (props) {
  return props.theme.progress.style;
});

var ProgressWrapper = function ProgressWrapper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement(ProgressWrapperStyle, null, children);
};

ProgressWrapper.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.node, propTypes.func]).isRequired
};

function _templateObject$k() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  ", ";\n"]);

  _templateObject$k = function _templateObject() {
    return data;
  };

  return data;
}
var TableWrapper = styled__default.div(_templateObject$k(), function (props) {
  return props.theme.tableWrapper.style;
});

function _templateObject$l() {
  var data = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  ", ";\n"]);

  _templateObject$l = function _templateObject() {
    return data;
  };

  return data;
}
var TableColExpander = styled__default(CellBase)(_templateObject$l(), function (props) {
  return props.theme.expanderCell.style;
});

function _templateObject$m() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  ", ";\n"]);

  _templateObject$m = function _templateObject() {
    return data;
  };

  return data;
}
var NoDataWrapperStyle = styled__default.div(_templateObject$m(), function (props) {
  return props.theme.noData.style;
});

var NoDataWrapper = function NoDataWrapper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement(NoDataWrapperStyle, null, children);
};

NoDataWrapper.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.node]).isRequired
};

var DropDownIcon = (function () {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M7 10l5 5 5-5z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
});

function _templateObject2$b() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  flex-shrink: 0;\n  font-size: inherit;\n  color: inherit;\n  margin-top: 1px;\n\n  svg {\n    top: 0;\n    right: 0;\n    color: inherit;\n    position: absolute;\n    fill: currentColor;\n    width: 24px;\n    height: 24px;\n    display: inline-block;\n    user-select: none;\n    pointer-events: none;\n  }\n"]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$n() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  height: 24px;\n  min-width: 24px;\n  user-select: none;\n  padding-left: 8px;\n  padding-right: 12px;\n  box-sizing: content-box;\n  font-size: inherit;\n  color: inherit;\n  border: none;\n  background-color: transparent;\n  appearance: none;\n  direction: ltr;\n\n  &::-ms-expand {\n    display: none;\n  }\n\n  &:disabled::-ms-expand {\n    background: #f60;\n  }\n\n  option {\n    color: initial;\n  }\n"]);

  _templateObject$n = function _templateObject() {
    return data;
  };

  return data;
}
var SelectControl = styled__default.select(_templateObject$n());
var SelectWrapper = styled__default.div(_templateObject2$b());

var Select = function Select(props) {
  return /*#__PURE__*/React__default.createElement(SelectWrapper, null, /*#__PURE__*/React__default.createElement(SelectControl, props), /*#__PURE__*/React__default.createElement(DropDownIcon, null));
};

function useWindowSize() {
  var isClient = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  var _useState = React.useState(getSize),
      _useState2 = _slicedToArray(_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  React.useEffect(function () {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 4px;\n"]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 24px;\n"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n  flex-shrink: 1;\n  user-select: none;\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    justify-content: space-around;\n  "]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  white-space: nowrap;\n  ", ";\n"]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$c() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: block;\n  user-select: none;\n  border: none;\n  ", ";\n  ", ";\n"]);

  _templateObject2$c = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$o() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: flex-end;\n  align-items: center;\n  box-sizing: border-box;\n  padding-right: 8px;\n  padding-left: 8px;\n  width: 100%;\n  ", ";\n"]);

  _templateObject$o = function _templateObject() {
    return data;
  };

  return data;
}
var defaultComponentOptions = {
  rowsPerPageText: 'Rows per page:',
  rangeSeparatorText: 'of',
  noRowsPerPage: false,
  selectAllRowsItem: false,
  selectAllRowsItemText: 'All'
};
var PaginationWrapper = styled__default.nav(_templateObject$o(), function (props) {
  return props.theme.pagination.style;
});
var Button = styled__default.button(_templateObject2$c(), function (props) {
  return props.theme.pagination.pageButtonsStyle;
}, function (props) {
  return props.isRTL && 'transform: scale(-1, -1)';
});
var PageList = styled__default.div(_templateObject3$6(), media.sm(_templateObject4$2()));
var Span = styled__default.span(_templateObject5$1());
var Range = styled__default(Span)(_templateObject6$1());
var RowLabel = styled__default(Span)(_templateObject7$1());

var Pagination = function Pagination(_ref) {
  var rowsPerPage = _ref.rowsPerPage,
      rowCount = _ref.rowCount,
      onChangePage = _ref.onChangePage,
      onChangeRowsPerPage = _ref.onChangeRowsPerPage,
      currentPage = _ref.currentPage;

  var _useTableContext = useTableContext(),
      direction = _useTableContext.direction,
      paginationRowsPerPageOptions = _useTableContext.paginationRowsPerPageOptions,
      paginationIconLastPage = _useTableContext.paginationIconLastPage,
      paginationIconFirstPage = _useTableContext.paginationIconFirstPage,
      paginationIconNext = _useTableContext.paginationIconNext,
      paginationIconPrevious = _useTableContext.paginationIconPrevious,
      paginationComponentOptions = _useTableContext.paginationComponentOptions;

  var windowSize = useWindowSize();
  var shouldShow = windowSize.width > SMALL;
  var isRTL = detectRTL(direction);
  var numPages = getNumberOfPages(rowCount, rowsPerPage);
  var lastIndex = currentPage * rowsPerPage;
  var firstIndex = lastIndex - rowsPerPage + 1;
  var disabledLesser = currentPage === 1;
  var disabledGreater = currentPage === numPages;

  var options = _objectSpread2(_objectSpread2({}, defaultComponentOptions), paginationComponentOptions);

  var range = currentPage === numPages ? "".concat(firstIndex, "-").concat(rowCount, " ").concat(options.rangeSeparatorText, " ").concat(rowCount) : "".concat(firstIndex, "-").concat(lastIndex, " ").concat(options.rangeSeparatorText, " ").concat(rowCount);
  var handlePrevious = React.useCallback(function () {
    return onChangePage(currentPage - 1);
  }, [currentPage, onChangePage]);
  var handleNext = React.useCallback(function () {
    return onChangePage(currentPage + 1);
  }, [currentPage, onChangePage]);
  var handleFirst = React.useCallback(function () {
    return onChangePage(1);
  }, [onChangePage]);
  var handleLast = React.useCallback(function () {
    return onChangePage(getNumberOfPages(rowCount, rowsPerPage));
  }, [onChangePage, rowCount, rowsPerPage]);
  var handleRowsPerPage = React.useCallback(function (_ref2) {
    var target = _ref2.target;
    return onChangeRowsPerPage(Number(target.value), currentPage);
  }, [currentPage, onChangeRowsPerPage]);
  var selectOptions = paginationRowsPerPageOptions.map(function (num) {
    return /*#__PURE__*/React__default.createElement("option", {
      key: num,
      value: num
    }, num);
  });

  if (options.selectAllRowsItem) {
    selectOptions.push( /*#__PURE__*/React__default.createElement("option", {
      key: -1,
      value: rowCount
    }, options.selectAllRowsItemText));
  }

  var select = /*#__PURE__*/React__default.createElement(Select, {
    onChange: handleRowsPerPage,
    defaultValue: rowsPerPage,
    "aria-label": options.rowsPerPageText
  }, selectOptions);
  return /*#__PURE__*/React__default.createElement(PaginationWrapper, {
    className: "rdt_Pagination"
  }, !options.noRowsPerPage && shouldShow && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(RowLabel, null, options.rowsPerPageText), select), shouldShow && /*#__PURE__*/React__default.createElement(Range, null, range), /*#__PURE__*/React__default.createElement(PageList, null, /*#__PURE__*/React__default.createElement(Button, {
    id: "pagination-first-page",
    type: "button",
    "aria-label": "First Page",
    "aria-disabled": disabledLesser,
    onClick: handleFirst,
    disabled: disabledLesser,
    isRTL: isRTL
  }, paginationIconFirstPage), /*#__PURE__*/React__default.createElement(Button, {
    id: "pagination-previous-page",
    type: "button",
    "aria-label": "Previous Page",
    "aria-disabled": disabledLesser,
    onClick: handlePrevious,
    disabled: disabledLesser,
    isRTL: isRTL
  }, paginationIconPrevious), !shouldShow && select, /*#__PURE__*/React__default.createElement(Button, {
    id: "pagination-next-page",
    type: "button",
    "aria-label": "Next Page",
    "aria-disabled": disabledGreater,
    onClick: handleNext,
    disabled: disabledGreater,
    isRTL: isRTL
  }, paginationIconNext), /*#__PURE__*/React__default.createElement(Button, {
    id: "pagination-last-page",
    type: "button",
    "aria-label": "Last Page",
    "aria-disabled": disabledGreater,
    onClick: handleLast,
    disabled: disabledGreater,
    isRTL: isRTL
  }, paginationIconLastPage)));
};

Pagination.propTypes = {
  rowsPerPage: propTypes.number.isRequired,
  rowCount: propTypes.number.isRequired,
  onChangePage: propTypes.func.isRequired,
  onChangeRowsPerPage: propTypes.func.isRequired,
  currentPage: propTypes.number.isRequired
};

function useFirstUpdate(fn, inputs) {
  var firstUpdate = React.useRef(true);
  React.useEffect(function () {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    fn(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, inputs);
}

var FirstPageIcon = (function () {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    role: "presentation"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M24 24H0V0h24v24z"
  }));
});

var LastPageIcon = (function () {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    role: "presentation"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }));
});

var LeftIcon = (function () {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    role: "presentation"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
});

var RightIcon = (function () {
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    role: "presentation"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
});

var ExpanderCollapsedIcon = (function () {
  return /*#__PURE__*/React__default.createElement("svg", {
    fill: "currentColor",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M0-.25h24v24H0z",
    fill: "none"
  }));
});

var ExpanderExpandedIcon = (function () {
  return /*#__PURE__*/React__default.createElement("svg", {
    fill: "currentColor",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M0-.75h24v24H0z",
    fill: "none"
  }));
});

var propTypes$1 = {
  title: propTypes.oneOfType([propTypes.string, propTypes.node]),
  selectableRows: propTypes.bool,
  selectableRowsHighlight: propTypes.bool,
  selectableRowsVisibleOnly: propTypes.bool,
  selectableRowsNoSelectAll: propTypes.bool,
  selectableRowSelected: propTypes.func,
  selectableRowDisabled: propTypes.func,
  selectableRowsComponent: propTypes.oneOfType([propTypes.string, propTypes.node, propTypes.func, propTypes.object]),
  selectableRowsComponentProps: propTypes.object,
  onRowsSelectedUpdate: propTypes.func,
  clearSelectedRows: propTypes.bool,
  expandableRows: propTypes.bool,
  expandableRowDisabled: propTypes.func,
  expandableRowExpanded: propTypes.func,
  expandOnRowClicked: propTypes.bool,
  expandableRowsHideExpander: propTypes.bool,
  expandOnRowDoubleClicked: propTypes.bool,
  onRowExpandToggled: propTypes.func,
  expandableInheritConditionalStyles: propTypes.bool,
  keyField: propTypes.string,
  progressPending: propTypes.bool,
  progressComponent: propTypes.oneOfType([propTypes.string, propTypes.node, propTypes.func]),
  persistTableHead: propTypes.bool,
  expandableRowsComponent: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node, propTypes.func]),
  expandableIcon: propTypes.shape({
    collapsed: propTypes.oneOfType([propTypes.string, propTypes.node, propTypes.func]),
    expanded: propTypes.oneOfType([propTypes.string, propTypes.node, propTypes.func])
  }),
  sortIcon: propTypes.oneOfType([propTypes.bool, propTypes.node]),
  sortFunction: propTypes.func,
  sortServer: propTypes.bool,
  onSort: propTypes.func,
  striped: propTypes.bool,
  highlightOnHover: propTypes.bool,
  pointerOnHover: propTypes.bool,
  actions: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
  noContextMenu: propTypes.bool,
  contextMessage: propTypes.shape({
    singular: propTypes.string.isRequired,
    plural: propTypes.string.isRequired,
    message: propTypes.string
  }),
  contextActions: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
  contextComponent: propTypes.oneOfType([propTypes.node, propTypes.func]),
  defaultSortField: propTypes.string,
  defaultSortAsc: propTypes.bool,
  columns: propTypes.array,
  data: propTypes.array,
  className: propTypes.string,
  style: propTypes.object,
  responsive: propTypes.bool,
  overflowY: propTypes.bool,
  overflowYOffset: propTypes.string,
  noDataComponent: propTypes.oneOfType([propTypes.string, propTypes.node, propTypes.func]),
  disabled: propTypes.bool,
  noTableHead: propTypes.bool,
  noHeader: propTypes.bool,
  subHeader: propTypes.bool,
  subHeaderAlign: propTypes.string,
  subHeaderWrap: propTypes.bool,
  subHeaderComponent: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node, propTypes.string]),
  onRowClicked: propTypes.func,
  onRowDoubleClicked: propTypes.func,
  fixedHeader: propTypes.bool,
  fixedHeaderScrollHeight: propTypes.string,
  pagination: propTypes.bool,
  paginationServer: propTypes.bool,
  paginationServerOptions: propTypes.shape({
    persistSelectedOnSort: propTypes.bool,
    persistSelectedOnPageChange: propTypes.bool
  }),
  paginationDefaultPage: propTypes.number,
  paginationResetDefaultPage: propTypes.bool,
  paginationTotalRows: propTypes.number,
  paginationPerPage: propTypes.number,
  paginationRowsPerPageOptions: propTypes.array,
  onChangePage: propTypes.func,
  onChangeRowsPerPage: propTypes.func,
  paginationComponent: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node, propTypes.func]),
  paginationComponentOptions: propTypes.object,
  paginationIconFirstPage: propTypes.oneOfType([propTypes.string, propTypes.node, propTypes.func]),
  paginationIconLastPage: propTypes.oneOfType([propTypes.string, propTypes.node, propTypes.func]),
  paginationIconNext: propTypes.oneOfType([propTypes.string, propTypes.node, propTypes.func]),
  paginationIconPrevious: propTypes.oneOfType([propTypes.string, propTypes.node, propTypes.func]),
  dense: propTypes.bool,
  conditionalRowStyles: propTypes.arrayOf(propTypes.shape({
    when: propTypes.func.isRequired,
    style: propTypes.object.isRequired
  })),
  theme: propTypes.string,
  customStyles: propTypes.object,
  direction: propTypes.oneOf(['ltr', 'rtl', 'auto'])
};
var defaultProps = {
  title: '',
  keyField: 'id',
  selectableRows: false,
  selectableRowsHighlight: false,
  selectableRowsNoSelectAll: false,
  selectableRowSelected: null,
  selectableRowDisabled: null,
  selectableRowsComponent: 'input',
  selectableRowsComponentProps: {},
  onSelectedRowsChange: function onSelectedRowsChange() {
    return null;
  },
  clearSelectedRows: false,
  expandableRows: false,
  expandableRowDisabled: null,
  expandableRowExpanded: null,
  expandOnRowClicked: false,
  expandableRowsHideExpander: false,
  expandOnRowDoubleClicked: false,
  expandableInheritConditionalStyles: false,
  onRowExpandToggled: function onRowExpandToggled() {
    return null;
  },
  progressPending: false,
  progressComponent: /*#__PURE__*/React__default.createElement("div", {
    style: {
      fontSize: '24px',
      fontWeight: 700,
      padding: '24px'
    }
  }, "Loading..."),
  persistTableHead: false,
  expandableRowsComponent: /*#__PURE__*/React__default.createElement("div", {
    style: {
      padding: '24px'
    }
  }, "Add a custom expander component. Use props.data for row data"),
  expandableIcon: {
    collapsed: /*#__PURE__*/React__default.createElement(ExpanderCollapsedIcon, null),
    expanded: /*#__PURE__*/React__default.createElement(ExpanderExpandedIcon, null)
  },
  sortIcon: false,
  sortFunction: null,
  sortServer: false,
  onSort: function onSort() {
    return null;
  },
  striped: false,
  highlightOnHover: false,
  pointerOnHover: false,
  noContextMenu: false,
  contextMessage: {
    singular: 'item',
    plural: 'items',
    message: 'selected'
  },
  contextActions: [],
  contextComponent: null,
  defaultSortField: null,
  defaultSortAsc: true,
  columns: [],
  data: [],
  className: null,
  style: {},
  responsive: true,
  overflowY: false,
  overflowYOffset: '250px',
  noDataComponent: /*#__PURE__*/React__default.createElement("div", {
    style: {
      padding: '24px'
    }
  }, "There are no records to display"),
  disabled: false,
  noTableHead: false,
  noHeader: false,
  subHeader: false,
  subHeaderAlign: 'right',
  subHeaderWrap: true,
  subHeaderComponent: [],
  onRowClicked: function onRowClicked() {
    return null;
  },
  onRowDoubleClicked: function onRowDoubleClicked() {
    return null;
  },
  fixedHeader: false,
  fixedHeaderScrollHeight: '100vh',
  pagination: false,
  paginationServer: false,
  paginationServerOptions: {
    persistSelectedOnSort: false,
    persistSelectedOnPageChange: false
  },
  paginationDefaultPage: 1,
  paginationResetDefaultPage: false,
  paginationTotalRows: 0,
  paginationPerPage: 10,
  paginationRowsPerPageOptions: [10, 15, 20, 25, 30],
  onChangePage: function onChangePage() {
    return null;
  },
  onChangeRowsPerPage: function onChangeRowsPerPage() {
    return null;
  },
  paginationComponent: null,
  paginationComponentOptions: {},
  paginationIconFirstPage: /*#__PURE__*/React__default.createElement(FirstPageIcon, null),
  paginationIconLastPage: /*#__PURE__*/React__default.createElement(LastPageIcon, null),
  paginationIconNext: /*#__PURE__*/React__default.createElement(RightIcon, null),
  paginationIconPrevious: /*#__PURE__*/React__default.createElement(LeftIcon, null),
  dense: false,
  conditionalRowStyles: [],
  theme: 'default',
  customStyles: {},
  direction: 'auto'
};

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

var cjs = deepmerge_1;

var defaultThemes = {
  "default": {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    background: {
      "default": '#FFFFFF'
    },
    context: {
      background: '#e3f2fd',
      text: 'rgba(0, 0, 0, 0.87)'
    },
    divider: {
      "default": 'rgba(0,0,0,.12)'
    },
    button: {
      "default": 'rgba(0,0,0,.54)',
      focus: 'rgba(0,0,0,.12)',
      hover: 'rgba(0,0,0,.12)',
      disabled: 'rgba(0, 0, 0, .18)'
    },
    sortFocus: {
      "default": 'rgba(0, 0, 0, .54)'
    },
    selected: {
      "default": '#e3f2fd',
      text: 'rgba(0, 0, 0, 0.87)'
    },
    highlightOnHover: {
      "default": '#EEEEEE',
      text: 'rgba(0, 0, 0, 0.87)'
    },
    striped: {
      "default": '#FAFAFA',
      text: 'rgba(0, 0, 0, 0.87)'
    }
  },
  dark: {
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(0,0,0,.12)'
    },
    background: {
      "default": '#424242'
    },
    context: {
      background: '#E91E63',
      text: '#FFFFFF'
    },
    divider: {
      "default": 'rgba(81, 81, 81, 1)'
    },
    button: {
      "default": '#FFFFFF',
      focus: 'rgba(255, 255, 255, .54)',
      hover: 'rgba(255, 255, 255, .12)',
      disabled: 'rgba(255, 255, 255, .18)'
    },
    sortFocus: {
      "default": 'rgba(255, 255, 255, .54)'
    },
    selected: {
      "default": 'rgba(0, 0, 0, .7)',
      text: '#FFFFFF'
    },
    highlightOnHover: {
      "default": 'rgba(0, 0, 0, .7)',
      text: '#FFFFFF'
    },
    striped: {
      "default": 'rgba(0, 0, 0, .87)',
      text: '#FFFFFF'
    }
  }
};
var createTheme = function createTheme(name) {
  var customTheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  defaultThemes[name] = cjs(defaultThemes["default"], customTheme);
  return defaultThemes[name];
};

var defaultStyles = function defaultStyles(theme) {
  return {
    table: {
      style: {
        color: theme.text.primary,
        backgroundColor: theme.background["default"]
      }
    },
    tableWrapper: {
      style: {
        display: 'table'
      }
    },
    header: {
      style: {
        fontSize: '22px',
        color: theme.text.primary,
        backgroundColor: theme.background["default"],
        minHeight: '56px',
        paddingLeft: '16px',
        paddingRight: '8px'
      }
    },
    subHeader: {
      style: {
        backgroundColor: theme.background["default"],
        minHeight: '52px'
      }
    },
    head: {
      style: {}
    },
    headRow: {
      style: {
        backgroundColor: theme.background["default"],
        minHeight: '56px',
        borderBottomWidth: '1px',
        borderBottomColor: theme.divider["default"],
        borderBottomStyle: 'solid'
      },
      denseStyle: {
        minHeight: '32px'
      }
    },
    headCells: {
      style: {
        fontSize: '12px',
        fontWeight: 500,
        color: theme.text.primary,
        paddingLeft: '16px',
        paddingRight: '16px'
      },
      activeSortStyle: {
        color: theme.text.primary,
        '&:focus': {
          outline: 'none'
        },
        '&:hover:not(:focus)': {
          color: theme.sortFocus["default"]
        }
      },
      inactiveSortStyle: {
        '&:focus': {
          outline: 'none',
          color: theme.sortFocus["default"]
        },
        '&:hover': {
          color: theme.sortFocus["default"]
        }
      }
    },
    contextMenu: {
      style: {
        backgroundColor: theme.context.background,
        fontSize: '18px',
        fontWeight: 400,
        color: theme.context.text,
        paddingLeft: '16px',
        paddingRight: '8px',
        transform: 'translate3d(0, -100%, 0)',
        transitionDuration: '125ms',
        transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        willChange: 'transform'
      },
      activeStyle: {
        transform: 'translate3d(0, 0, 0)'
      }
    },
    cells: {
      style: {
        paddingLeft: '16px',
        paddingRight: '16px',
        wordBreak: 'break-word'
      }
    },
    rows: {
      style: {
        fontSize: '13px',
        color: theme.text.primary,
        backgroundColor: theme.background["default"],
        minHeight: '48px',
        '&:not(:last-of-type)': {
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          borderBottomColor: theme.divider["default"]
        }
      },
      denseStyle: {
        minHeight: '32px'
      },
      selectedHighlightStyle: {
        // use nth-of-type(n) to override other nth selectors
        '&:nth-of-type(n)': {
          color: theme.selected.text,
          backgroundColor: theme.selected["default"],
          borderBottomColor: theme.background["default"]
        }
      },
      highlightOnHoverStyle: {
        color: theme.highlightOnHover.text,
        backgroundColor: theme.highlightOnHover["default"],
        transitionDuration: '0.15s',
        transitionProperty: 'background-color',
        borderBottomColor: theme.background["default"],
        outlineStyle: 'solid',
        outlineWidth: '1px',
        outlineColor: theme.background["default"]
      },
      stripedStyle: {
        color: theme.striped.text,
        backgroundColor: theme.striped["default"]
      }
    },
    expanderRow: {
      style: {
        color: theme.text.primary,
        backgroundColor: theme.background["default"]
      }
    },
    expanderCell: {
      style: {
        flex: '0 0 48px'
      }
    },
    expanderButton: {
      style: {
        color: theme.button["default"],
        fill: theme.button["default"],
        backgroundColor: 'transparent',
        borderRadius: '2px',
        transition: '0.25s',
        height: '100%',
        width: '100%',
        '&:hover:enabled': {
          cursor: 'pointer'
        },
        '&:disabled': {
          color: theme.button.disabled
        },
        '&:hover:not(:disabled)': {
          cursor: 'pointer',
          backgroundColor: theme.button.hover
        },
        '&:focus': {
          outline: 'none',
          backgroundColor: theme.button.focus
        },
        svg: {
          margin: 'auto'
        }
      }
    },
    pagination: {
      style: {
        color: theme.text.secondary,
        fontSize: '13px',
        minHeight: '56px',
        backgroundColor: theme.background["default"],
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        borderTopColor: theme.divider["default"]
      },
      pageButtonsStyle: {
        borderRadius: '50%',
        height: '40px',
        width: '40px',
        padding: '8px',
        margin: 'px',
        cursor: 'pointer',
        transition: '0.4s',
        color: theme.button["default"],
        fill: theme.button["default"],
        backgroundColor: 'transparent',
        '&:disabled': {
          cursor: 'unset',
          color: theme.button.disabled,
          fill: theme.button.disabled
        },
        '&:hover:not(:disabled)': {
          backgroundColor: theme.button.hover
        },
        '&:focus': {
          outline: 'none',
          backgroundColor: theme.button.focus
        }
      }
    },
    noData: {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.text.primary,
        backgroundColor: theme.background["default"]
      }
    },
    progress: {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.text.primary,
        backgroundColor: theme.background["default"]
      }
    }
  };
};
var createStyles = function createStyles() {
  var customStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  var themeType = defaultThemes[theme] ? theme : 'default';
  return cjs(defaultStyles(defaultThemes[themeType]), customStyles);
};

var DataTable = /*#__PURE__*/React.memo(function (_ref) {
  var data = _ref.data,
      columns = _ref.columns,
      title = _ref.title,
      actions = _ref.actions,
      keyField = _ref.keyField,
      striped = _ref.striped,
      highlightOnHover = _ref.highlightOnHover,
      pointerOnHover = _ref.pointerOnHover,
      dense = _ref.dense,
      selectableRows = _ref.selectableRows,
      selectableRowsHighlight = _ref.selectableRowsHighlight,
      selectableRowsNoSelectAll = _ref.selectableRowsNoSelectAll,
      selectableRowsVisibleOnly = _ref.selectableRowsVisibleOnly,
      selectableRowSelected = _ref.selectableRowSelected,
      selectableRowDisabled = _ref.selectableRowDisabled,
      selectableRowsComponent = _ref.selectableRowsComponent,
      selectableRowsComponentProps = _ref.selectableRowsComponentProps,
      onRowExpandToggled = _ref.onRowExpandToggled,
      onSelectedRowsChange = _ref.onSelectedRowsChange,
      expandableIcon = _ref.expandableIcon,
      onChangeRowsPerPage = _ref.onChangeRowsPerPage,
      onChangePage = _ref.onChangePage,
      paginationServer = _ref.paginationServer,
      paginationServerOptions = _ref.paginationServerOptions,
      paginationTotalRows = _ref.paginationTotalRows,
      paginationDefaultPage = _ref.paginationDefaultPage,
      paginationResetDefaultPage = _ref.paginationResetDefaultPage,
      paginationPerPage = _ref.paginationPerPage,
      paginationRowsPerPageOptions = _ref.paginationRowsPerPageOptions,
      paginationIconLastPage = _ref.paginationIconLastPage,
      paginationIconFirstPage = _ref.paginationIconFirstPage,
      paginationIconNext = _ref.paginationIconNext,
      paginationIconPrevious = _ref.paginationIconPrevious,
      paginationComponent = _ref.paginationComponent,
      paginationComponentOptions = _ref.paginationComponentOptions,
      className = _ref.className,
      style = _ref.style,
      responsive = _ref.responsive,
      overflowY = _ref.overflowY,
      overflowYOffset = _ref.overflowYOffset,
      progressPending = _ref.progressPending,
      progressComponent = _ref.progressComponent,
      persistTableHead = _ref.persistTableHead,
      noDataComponent = _ref.noDataComponent,
      disabled = _ref.disabled,
      noTableHead = _ref.noTableHead,
      noHeader = _ref.noHeader,
      fixedHeader = _ref.fixedHeader,
      fixedHeaderScrollHeight = _ref.fixedHeaderScrollHeight,
      pagination = _ref.pagination,
      subHeader = _ref.subHeader,
      subHeaderAlign = _ref.subHeaderAlign,
      subHeaderWrap = _ref.subHeaderWrap,
      subHeaderComponent = _ref.subHeaderComponent,
      noContextMenu = _ref.noContextMenu,
      contextMessage = _ref.contextMessage,
      contextActions = _ref.contextActions,
      contextComponent = _ref.contextComponent,
      expandableRows = _ref.expandableRows,
      onRowClicked = _ref.onRowClicked,
      onRowDoubleClicked = _ref.onRowDoubleClicked,
      sortIcon = _ref.sortIcon,
      onSort = _ref.onSort,
      sortFunction = _ref.sortFunction,
      sortServer = _ref.sortServer,
      expandableRowsComponent = _ref.expandableRowsComponent,
      expandableRowDisabled = _ref.expandableRowDisabled,
      expandableRowsHideExpander = _ref.expandableRowsHideExpander,
      expandOnRowClicked = _ref.expandOnRowClicked,
      expandOnRowDoubleClicked = _ref.expandOnRowDoubleClicked,
      expandableRowExpanded = _ref.expandableRowExpanded,
      expandableInheritConditionalStyles = _ref.expandableInheritConditionalStyles,
      defaultSortField = _ref.defaultSortField,
      defaultSortAsc = _ref.defaultSortAsc,
      clearSelectedRows = _ref.clearSelectedRows,
      conditionalRowStyles = _ref.conditionalRowStyles,
      theme = _ref.theme,
      customStyles = _ref.customStyles,
      direction = _ref.direction;
  var initialState = {
    allSelected: false,
    selectedCount: 0,
    selectedRows: [],
    sortColumn: defaultSortField,
    selectedColumn: {},
    sortDirection: getSortDirection(defaultSortAsc),
    currentPage: paginationDefaultPage,
    rowsPerPage: paginationPerPage
  };

  var _useReducer = React.useReducer(tableReducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      rowsPerPage = _useReducer2$.rowsPerPage,
      currentPage = _useReducer2$.currentPage,
      selectedRows = _useReducer2$.selectedRows,
      allSelected = _useReducer2$.allSelected,
      selectedCount = _useReducer2$.selectedCount,
      sortColumn = _useReducer2$.sortColumn,
      selectedColumn = _useReducer2$.selectedColumn,
      sortDirection = _useReducer2$.sortDirection,
      dispatch = _useReducer2[1];

  var persistSelectedOnSort = paginationServerOptions.persistSelectedOnSort,
      persistSelectedOnPageChange = paginationServerOptions.persistSelectedOnPageChange;
  var mergeSelections = paginationServer && (persistSelectedOnPageChange || persistSelectedOnSort);
  var enabledPagination = pagination && !progressPending && data.length > 0;
  var Pagination$1 = paginationComponent || Pagination;
  var columnsMemo = React.useMemo(function () {
    return decorateColumns(columns);
  }, [columns]);
  var currentTheme = React.useMemo(function () {
    return createStyles(customStyles, theme);
  }, [customStyles, theme]);
  var expandableRowsComponentMemo = React.useMemo(function () {
    return expandableRowsComponent;
  }, [expandableRowsComponent]);
  var wrapperProps = React.useMemo(function () {
    return _objectSpread2({}, direction !== 'auto' && {
      dir: direction
    });
  }, [direction]);
  var handleRowClicked = React.useCallback(function (row, e) {
    return onRowClicked(row, e);
  }, [onRowClicked]);
  var handleRowDoubleClicked = React.useCallback(function (row, e) {
    return onRowDoubleClicked(row, e);
  }, [onRowDoubleClicked]);

  var handleChangePage = function handleChangePage(page) {
    return dispatch({
      type: 'CHANGE_PAGE',
      page: page,
      paginationServer: paginationServer,
      visibleOnly: selectableRowsVisibleOnly,
      persistSelectedOnPageChange: persistSelectedOnPageChange
    });
  };

  useFirstUpdate(function () {
    onSelectedRowsChange({
      allSelected: allSelected,
      selectedCount: selectedCount,
      selectedRows: selectedRows
    });
  }, [selectedCount]);
  useFirstUpdate(function () {
    onChangePage(currentPage, paginationTotalRows || data.length);
  }, [currentPage]);
  useFirstUpdate(function () {
    onChangeRowsPerPage(rowsPerPage, currentPage);
  }, [rowsPerPage]);
  useFirstUpdate(function () {
    onSort(selectedColumn, sortDirection);
  }, [sortColumn, sortDirection]);
  React.useEffect(function () {
    dispatch({
      type: 'CLEAR_SELECTED_ROWS',
      selectedRowsFlag: clearSelectedRows
    });
  }, [clearSelectedRows]);
  useFirstUpdate(function () {
    handleChangePage(paginationDefaultPage);
  }, [paginationDefaultPage, paginationResetDefaultPage]);
  React.useEffect(function () {
    if (selectableRowSelected) {
      var preSelectedRows = data.filter(function (row) {
        return selectableRowSelected(row);
      });
      dispatch({
        type: 'SELECT_MULTIPLE_ROWS',
        selectedRows: preSelectedRows,
        rows: data,
        mergeSelections: mergeSelections
      });
    } // We only want to re-render if the data changes
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [data]);
  useFirstUpdate(function () {
    if (pagination && paginationServer && paginationTotalRows > 0) {
      var updatedPage = getNumberOfPages(paginationTotalRows, rowsPerPage);
      var recalculatedPage = recalculatePage(currentPage, updatedPage);

      if (currentPage !== recalculatedPage) {
        handleChangePage(recalculatedPage);
      }
    }
  }, [paginationTotalRows]);
  var columnsBySelector = React.useMemo(function () {
    return columns.reduce(function (acc, item) {
      return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, item.selector, item));
    }, {});
  }, [columns]);
  var sortedData = React.useMemo(function () {
    // server-side sorting bypasses internal sorting
    if (sortServer) {
      return data;
    } // use general sorting function when columns has no sort function on it's own


    var column = sortColumn && columnsBySelector[sortColumn];

    if (!column || !column.sortFunction) {
      return sort(data, sortColumn, sortDirection, sortFunction);
    } // use column's custom sorting function


    var customSortFunction = sortDirection === 'asc' ? column.sortFunction : function (a, b) {
      return column.sortFunction(a, b) * -1;
    };
    return _toConsumableArray(data).sort(customSortFunction);
  }, [sortServer, sortColumn, columnsBySelector, sortDirection, data, sortFunction]);
  var calculatedRows = React.useMemo(function () {
    if (pagination && !paginationServer) {
      // when using client-side pagination we can just slice the data set
      var lastIndex = currentPage * rowsPerPage;
      var firstIndex = lastIndex - rowsPerPage;
      return sortedData.slice(firstIndex, lastIndex);
    }

    return sortedData;
  }, [currentPage, pagination, paginationServer, rowsPerPage, sortedData]); // recalculate the pagination and currentPage if the data length changes

  if (pagination && !paginationServer && data.length > 0 && calculatedRows.length === 0) {
    var updatedPage = getNumberOfPages(data.length, rowsPerPage);
    var recalculatedPage = recalculatePage(currentPage, updatedPage);
    handleChangePage(recalculatedPage);
  }

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(newRowsPerPage) {
    var rowCount = paginationTotalRows || calculatedRows.length;
    var updatedPage = getNumberOfPages(rowCount, newRowsPerPage);
    var recalculatedPage = recalculatePage(currentPage, updatedPage); // update the currentPage for client-side pagination
    // server - side should be handled by onChangeRowsPerPage

    if (!paginationServer) {
      handleChangePage(recalculatedPage);
    }

    dispatch({
      type: 'CHANGE_ROWS_PER_PAGE',
      page: recalculatedPage,
      rowsPerPage: newRowsPerPage
    });
  };

  var init = {
    dispatch: dispatch,
    data: selectableRowsVisibleOnly ? calculatedRows : data,
    allSelected: allSelected,
    selectedRows: selectedRows,
    selectedCount: selectedCount,
    sortColumn: sortColumn,
    sortDirection: sortDirection,
    keyField: keyField,
    contextMessage: contextMessage,
    contextActions: contextActions,
    contextComponent: contextComponent,
    sortServer: sortServer,
    selectableRowsVisibleOnly: selectableRowsVisibleOnly,
    selectableRowSelected: selectableRowSelected,
    selectableRowDisabled: selectableRowDisabled,
    selectableRowsComponent: selectableRowsComponent,
    selectableRowsComponentProps: selectableRowsComponentProps,
    persistSelectedOnSort: persistSelectedOnSort,
    expandableIcon: expandableIcon,
    pagination: pagination,
    paginationServer: paginationServer,
    paginationServerOptions: paginationServerOptions,
    paginationTotalRows: paginationTotalRows,
    paginationRowsPerPageOptions: paginationRowsPerPageOptions,
    paginationIconLastPage: paginationIconLastPage,
    paginationIconFirstPage: paginationIconFirstPage,
    paginationIconNext: paginationIconNext,
    paginationIconPrevious: paginationIconPrevious,
    paginationComponentOptions: paginationComponentOptions,
    direction: direction,
    mergeSelections: mergeSelections
  };

  var showTableHead = function showTableHead() {
    if (noTableHead) {
      return false;
    }

    if (persistTableHead) {
      return true;
    }

    return data.length > 0 && !progressPending;
  };

  var showSelectAll = persistSelectedOnPageChange || selectableRowsNoSelectAll;
  return /*#__PURE__*/React__default.createElement(styled.ThemeProvider, {
    theme: currentTheme
  }, /*#__PURE__*/React__default.createElement(DataTableProvider, {
    initialState: init
  }, !noHeader && /*#__PURE__*/React__default.createElement(TableHeader, {
    title: title,
    actions: actions,
    showMenu: !noContextMenu
  }), subHeader && /*#__PURE__*/React__default.createElement(TableSubheader, {
    align: subHeaderAlign,
    wrapContent: subHeaderWrap
  }, subHeaderComponent), /*#__PURE__*/React__default.createElement(ResponsiveWrapper, _extends({
    responsive: responsive,
    className: className,
    style: style,
    overflowYOffset: overflowYOffset,
    overflowY: overflowY
  }, wrapperProps), /*#__PURE__*/React__default.createElement(TableWrapper, null, progressPending && !persistTableHead && /*#__PURE__*/React__default.createElement(ProgressWrapper, null, progressComponent), /*#__PURE__*/React__default.createElement(TableStyle, {
    disabled: disabled,
    className: "rdt_Table",
    role: "table"
  }, showTableHead() && /*#__PURE__*/React__default.createElement(TableHead, {
    className: "rdt_TableHead",
    role: "rowgroup"
  }, /*#__PURE__*/React__default.createElement(TableHeadRow, {
    className: "rdt_TableHeadRow",
    role: "row",
    dense: dense,
    disabled: progressPending || data.length === 0
  }, selectableRows && (showSelectAll ? /*#__PURE__*/React__default.createElement(CellBase, {
    style: {
      flex: '0 0 48px'
    }
  }) : /*#__PURE__*/React__default.createElement(TableColCheckbox, null)), expandableRows && !expandableRowsHideExpander && /*#__PURE__*/React__default.createElement(TableColExpander, null), columnsMemo.map(function (column) {
    return /*#__PURE__*/React__default.createElement(TableCol, {
      key: column.id,
      column: column,
      sortIcon: sortIcon
    });
  }))), !data.length > 0 && !progressPending && /*#__PURE__*/React__default.createElement(NoDataWrapper, null, noDataComponent), progressPending && persistTableHead && /*#__PURE__*/React__default.createElement(ProgressWrapper, null, progressComponent), !progressPending && data.length > 0 && /*#__PURE__*/React__default.createElement(TableBody, {
    fixedHeader: fixedHeader,
    fixedHeaderScrollHeight: fixedHeaderScrollHeight,
    hasOffset: overflowY,
    offset: overflowYOffset,
    className: "rdt_TableBody",
    role: "rowgroup"
  }, calculatedRows.map(function (row, i) {
    var id = isEmpty(row[keyField]) ? i : row[keyField];
    var selected = isRowSelected(row, selectedRows, keyField);
    var expanderExpander = expandableRows && expandableRowExpanded && expandableRowExpanded(row);
    var expanderDisabled = expandableRows && expandableRowDisabled && expandableRowDisabled(row);
    return /*#__PURE__*/React__default.createElement(TableRow, {
      id: id,
      key: id,
      keyField: keyField,
      row: row,
      columns: columnsMemo,
      selectableRows: selectableRows,
      expandableRows: expandableRows,
      striped: striped,
      highlightOnHover: highlightOnHover,
      pointerOnHover: pointerOnHover,
      dense: dense,
      expandOnRowClicked: expandOnRowClicked,
      expandOnRowDoubleClicked: expandOnRowDoubleClicked,
      expandableRowsComponent: expandableRowsComponentMemo,
      expandableRowsHideExpander: expandableRowsHideExpander,
      onRowExpandToggled: onRowExpandToggled,
      defaultExpanderDisabled: expanderDisabled,
      defaultExpanded: expanderExpander,
      inheritConditionalStyles: expandableInheritConditionalStyles,
      onRowClicked: handleRowClicked,
      onRowDoubleClicked: handleRowDoubleClicked,
      conditionalRowStyles: conditionalRowStyles,
      selected: selected,
      selectableRowsHighlight: selectableRowsHighlight,
      rowIndex: i
    });
  }))))), enabledPagination && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Pagination$1, {
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage,
    rowCount: paginationTotalRows || data.length,
    currentPage: currentPage,
    rowsPerPage: rowsPerPage
  }))));
});
DataTable.propTypes = propTypes$1;
DataTable.defaultProps = defaultProps;

exports.createTheme = createTheme;
exports.default = DataTable;
exports.defaultThemes = defaultThemes;
//# sourceMappingURL=react-data-table-component.dev.js.map
