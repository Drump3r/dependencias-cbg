(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,e.JSBI=t())})(this,function(){'use strict';function e(t){"@babel/helpers - typeof";return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var _,n=0;n<t.length;n++)_=t[n],_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(e,_.key,_)}function _(e,t,_){return t&&i(e.prototype,t),_&&i(e,_),e}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function s(){return s=a()?Reflect.construct:function(e,t,i){var _=[null];_.push.apply(_,t);var n=Function.bind.apply(e,_),g=new n;return i&&l(g,i.prototype),g},s.apply(null,arguments)}function u(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function r(e){var t="function"==typeof Map?new Map:void 0;return r=function(e){function i(){return s(e,arguments,g(this).constructor)}if(null===e||!u(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof t){if(t.has(e))return t.get(e);t.set(e,i)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),l(i,e)},r(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return t&&("object"==typeof t||"function"==typeof t)?t:d(e)}function b(e){var t=a();return function(){var i,_=g(e);if(t){var n=g(this).constructor;i=Reflect.construct(_,arguments,n)}else i=_.apply(this,arguments);return h(this,i)}}function m(e,t){if(e){if("string"==typeof e)return c(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var _=0,n=Array(t);_<t;_++)n[_]=e[_];return n}function v(e,t){var _;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(_=m(e))||t&&e&&"number"==typeof e.length){_&&(e=_);var n=0,g=function(){};return{s:g,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(t){throw t},f:g}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,s=!1;return{s:function(){_=e[Symbol.iterator]()},n:function(){var e=_.next();return a=e.done,e},e:function(t){s=!0,l=t},f:function(){try{a||null==_.return||_.return()}finally{if(s)throw l}}}}var f=function(i){var o=Math.abs,l=Math.max,a=Math.imul,s=Math.clz32;function g(e,i){var _;if(t(this,g),e>g.__kMaxLength)throw new RangeError("Maximum BigInt size exceeded");return _=u.call(this,e),_.sign=i,_}n(g,i);var u=b(g);return _(g,[{key:"toDebugString",value:function(){var e,t=["BigInt["],i=v(this);try{for(i.s();!(e=i.n()).done;){var _=e.value;t.push((_?(_>>>0).toString(16):_)+", ")}}catch(e){i.e(e)}finally{i.f()}return t.push("]"),t.join("")}},{key:"toString",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:10;if(2>e||36<e)throw new RangeError("toString() radix argument must be between 2 and 36");return 0===this.length?"0":0==(e&e-1)?g.__toStringBasePowerOfTwo(this,e):g.__toStringGeneric(this,e,!1)}},{key:"__copy",value:function(){for(var e=new g(this.length,this.sign),t=0;t<this.length;t++)e[t]=this[t];return e}},{key:"__trim",value:function(){for(var e=this.length,t=this[e-1];0===t;)e--,t=this[e-1],this.pop();return 0===e&&(this.sign=!1),this}},{key:"__initializeDigits",value:function(){for(var e=0;e<this.length;e++)this[e]=0}},{key:"__clzmsd",value:function(){return s(this[this.length-1])}},{key:"__inplaceMultiplyAdd",value:function(e,t,_){_>this.length&&(_=this.length);for(var n=65535&e,g=e>>>16,o=0,l=65535&t,s=t>>>16,u=0;u<_;u++){var r=this.__digit(u),d=65535&r,h=r>>>16,b=a(d,n),m=a(d,g),c=a(h,n),v=a(h,g),f=l+(65535&b),y=s+o+(f>>>16)+(b>>>16)+(65535&m)+(65535&c);l=(m>>>16)+(c>>>16)+(65535&v)+(y>>>16),o=l>>>16,l&=65535,s=v>>>16;this.__setDigit(u,65535&f|y<<16)}if(0!==o||0!==l||0!==s)throw new Error("implementation bug")}},{key:"__inplaceAdd",value:function(e,t,_){for(var n,g=0,o=0;o<_;o++)n=this.__halfDigit(t+o)+e.__halfDigit(o)+g,g=n>>>16,this.__setHalfDigit(t+o,n);return g}},{key:"__inplaceSub",value:function(e,t,_){var n=0;if(1&t){t>>=1;for(var g=this.__digit(t),o=65535&g,l=0;l<_-1>>>1;l++){var a=e.__digit(l),s=(g>>>16)-(65535&a)-n;n=1&s>>>16,this.__setDigit(t+l,s<<16|65535&o),g=this.__digit(t+l+1),o=(65535&g)-(a>>>16)-n,n=1&o>>>16}var u=e.__digit(l),r=(g>>>16)-(65535&u)-n;n=1&r>>>16,this.__setDigit(t+l,r<<16|65535&o);if(t+l+1>=this.length)throw new RangeError("out of bounds");0==(1&_)&&(g=this.__digit(t+l+1),o=(65535&g)-(u>>>16)-n,n=1&o>>>16,this.__setDigit(t+e.length,4294901760&g|65535&o))}else{t>>=1;for(var d=0;d<e.length-1;d++){var h=this.__digit(t+d),b=e.__digit(d),m=(65535&h)-(65535&b)-n;n=1&m>>>16;var c=(h>>>16)-(b>>>16)-n;n=1&c>>>16,this.__setDigit(t+d,c<<16|65535&m)}var v=this.__digit(t+d),f=e.__digit(d),y=(65535&v)-(65535&f)-n;n=1&y>>>16;var k=0;0==(1&_)&&(k=(v>>>16)-(f>>>16)-n,n=1&k>>>16),this.__setDigit(t+d,k<<16|65535&y)}return n}},{key:"__inplaceRightShift",value:function(e){if(0!==e){for(var t,_=this.__digit(0)>>>e,n=this.length-1,g=0;g<n;g++)t=this.__digit(g+1),this.__setDigit(g,t<<32-e|_),_=t>>>e;this.__setDigit(n,_)}}},{key:"__digit",value:function(e){return this[e]}},{key:"__unsignedDigit",value:function(e){return this[e]>>>0}},{key:"__setDigit",value:function(e,t){this[e]=0|t}},{key:"__setDigitGrow",value:function(e,t){this[e]=0|t}},{key:"__halfDigitLength",value:function(){var e=this.length;return 65535>=this.__unsignedDigit(e-1)?2*e-1:2*e}},{key:"__halfDigit",value:function(e){return 65535&this[e>>>1]>>>((1&e)<<4)}},{key:"__setHalfDigit",value:function(e,t){var i=e>>>1,_=this.__digit(i),n=1&e?65535&_|t<<16:4294901760&_|65535&t;this.__setDigit(i,n)}}],[{key:"BigInt",value:function(t){var i=Math.floor,_=Number.isFinite;if("number"==typeof t){if(0===t)return g.__zero();if((0|t)===t)return 0>t?g.__oneDigit(-t,!0):g.__oneDigit(t,!1);if(!_(t)||i(t)!==t)throw new RangeError("The number "+t+" cannot be converted to BigInt because it is not an integer");return g.__fromDouble(t)}if("string"==typeof t){var n=g.__fromString(t);if(null===n)throw new SyntaxError("Cannot convert "+t+" to a BigInt");return n}if("boolean"==typeof t)return!0===t?g.__oneDigit(1,!1):g.__zero();if("object"===e(t)){if(t.constructor===g)return t;var o=g.__toPrimitive(t);return g.BigInt(o)}throw new TypeError("Cannot convert "+t+" to a BigInt")}},{key:"toNumber",value:function(e){var t=e.length;if(0===t)return 0;if(1===t){var i=e.__unsignedDigit(0);return e.sign?-i:i}var _=e.__digit(t-1),n=s(_),o=32*t-n;if(1024<o)return e.sign?-Infinity:1/0;var l=o-1,a=_,u=t-1,r=n+1,d=32===r?0:a<<r;d>>>=12;var h=r-12,b=12<=r?0:a<<20+r,m=20+r;0<h&&0<u&&(u--,a=e.__digit(u),d|=a>>>32-h,b=a<<h,m=h),0<m&&0<u&&(u--,a=e.__digit(u),b|=a>>>32-m,m-=32);var c=g.__decideRounding(e,m,u,a);if((1===c||0===c&&1==(1&b))&&(b=b+1>>>0,0===b&&(d++,0!=d>>>20&&(d=0,l++,1023<l))))return e.sign?-Infinity:1/0;var v=e.sign?-2147483648:0;return l=l+1023<<20,g.__kBitConversionInts[1]=v|l|d,g.__kBitConversionInts[0]=b,g.__kBitConversionDouble[0]}},{key:"unaryMinus",value:function(e){if(0===e.length)return e;var t=e.__copy();return t.sign=!e.sign,t}},{key:"bitwiseNot",value:function(e){return e.sign?g.__absoluteSubOne(e).__trim():g.__absoluteAddOne(e,!0)}},{key:"exponentiate",value:function(e,t){if(t.sign)throw new RangeError("Exponent must be positive");if(0===t.length)return g.__oneDigit(1,!1);if(0===e.length)return e;if(1===e.length&&1===e.__digit(0))return e.sign&&0==(1&t.__digit(0))?g.unaryMinus(e):e;if(1<t.length)throw new RangeError("BigInt too big");var i=t.__unsignedDigit(0);if(1===i)return e;if(i>=g.__kMaxLengthBits)throw new RangeError("BigInt too big");if(1===e.length&&2===e.__digit(0)){var _=1+(i>>>5),n=e.sign&&0!=(1&i),o=new g(_,n);o.__initializeDigits();var l=1<<(31&i);return o.__setDigit(_-1,l),o}var a=null,s=e;for(0!=(1&i)&&(a=e),i>>=1;0!==i;i>>=1)s=g.multiply(s,s),0!=(1&i)&&(null===a?a=s:a=g.multiply(a,s));return a}},{key:"multiply",value:function(e,t){if(0===e.length)return e;if(0===t.length)return t;var _=e.length+t.length;32<=e.__clzmsd()+t.__clzmsd()&&_--;var n=new g(_,e.sign!==t.sign);n.__initializeDigits();for(var o=0;o<e.length;o++)g.__multiplyAccumulate(t,e.__digit(o),n,o);return n.__trim()}},{key:"divide",value:function(e,t){if(0===t.length)throw new RangeError("Division by zero");if(0>g.__absoluteCompare(e,t))return g.__zero();var i,_=e.sign!==t.sign,n=t.__unsignedDigit(0);if(1===t.length&&65535>=n){if(1===n)return _===e.sign?e:g.unaryMinus(e);i=g.__absoluteDivSmall(e,n,null)}else i=g.__absoluteDivLarge(e,t,!0,!1);return i.sign=_,i.__trim()}},{key:"remainder",value:function e(t,i){if(0===i.length)throw new RangeError("Division by zero");if(0>g.__absoluteCompare(t,i))return t;var _=i.__unsignedDigit(0);if(1===i.length&&65535>=_){if(1===_)return g.__zero();var n=g.__absoluteModSmall(t,_);return 0===n?g.__zero():g.__oneDigit(n,t.sign)}var e=g.__absoluteDivLarge(t,i,!1,!0);return e.sign=t.sign,e.__trim()}},{key:"add",value:function(e,t){var i=e.sign;return i===t.sign?g.__absoluteAdd(e,t,i):0<=g.__absoluteCompare(e,t)?g.__absoluteSub(e,t,i):g.__absoluteSub(t,e,!i)}},{key:"subtract",value:function(e,t){var i=e.sign;return i===t.sign?0<=g.__absoluteCompare(e,t)?g.__absoluteSub(e,t,i):g.__absoluteSub(t,e,!i):g.__absoluteAdd(e,t,i)}},{key:"leftShift",value:function(e,t){return 0===t.length||0===e.length?e:t.sign?g.__rightShiftByAbsolute(e,t):g.__leftShiftByAbsolute(e,t)}},{key:"signedRightShift",value:function(e,t){return 0===t.length||0===e.length?e:t.sign?g.__leftShiftByAbsolute(e,t):g.__rightShiftByAbsolute(e,t)}},{key:"unsignedRightShift",value:function(){throw new TypeError("BigInts have no unsigned right shift; use >> instead")}},{key:"lessThan",value:function(e,t){return 0>g.__compareToBigInt(e,t)}},{key:"lessThanOrEqual",value:function(e,t){return 0>=g.__compareToBigInt(e,t)}},{key:"greaterThan",value:function(e,t){return 0<g.__compareToBigInt(e,t)}},{key:"greaterThanOrEqual",value:function(e,t){return 0<=g.__compareToBigInt(e,t)}},{key:"equal",value:function(e,t){if(e.sign!==t.sign)return!1;if(e.length!==t.length)return!1;for(var _=0;_<e.length;_++)if(e.__digit(_)!==t.__digit(_))return!1;return!0}},{key:"notEqual",value:function(e,t){return!g.equal(e,t)}},{key:"bitwiseAnd",value:function(e,t){if(!e.sign&&!t.sign)return g.__absoluteAnd(e,t).__trim();if(e.sign&&t.sign){var i=l(e.length,t.length)+1,_=g.__absoluteSubOne(e,i),n=g.__absoluteSubOne(t);return _=g.__absoluteOr(_,n,_),g.__absoluteAddOne(_,!0,_).__trim()}if(e.sign){var o=[t,e];e=o[0],t=o[1]}return g.__absoluteAndNot(e,g.__absoluteSubOne(t)).__trim()}},{key:"bitwiseXor",value:function(e,t){if(!e.sign&&!t.sign)return g.__absoluteXor(e,t).__trim();if(e.sign&&t.sign){var i=l(e.length,t.length),_=g.__absoluteSubOne(e,i),n=g.__absoluteSubOne(t);return g.__absoluteXor(_,n,_).__trim()}var o=l(e.length,t.length)+1;if(e.sign){var a=[t,e];e=a[0],t=a[1]}var s=g.__absoluteSubOne(t,o);return s=g.__absoluteXor(s,e,s),g.__absoluteAddOne(s,!0,s).__trim()}},{key:"bitwiseOr",value:function(e,t){var i=l(e.length,t.length);if(!e.sign&&!t.sign)return g.__absoluteOr(e,t).__trim();if(e.sign&&t.sign){var _=g.__absoluteSubOne(e,i),n=g.__absoluteSubOne(t);return _=g.__absoluteAnd(_,n,_),g.__absoluteAddOne(_,!0,_).__trim()}if(e.sign){var o=[t,e];e=o[0],t=o[1]}var a=g.__absoluteSubOne(t,i);return a=g.__absoluteAndNot(a,e,a),g.__absoluteAddOne(a,!0,a).__trim()}},{key:"asIntN",value:function(e,t){if(0===t.length)return t;if(0===e)return g.__zero();if(e>=g.__kMaxLengthBits)return t;var _=e+31>>>5;if(t.length<_)return t;var n=t.__unsignedDigit(_-1),o=1<<(31&e-1);if(t.length===_&&n<o)return t;if(!((n&o)===o))return g.__truncateToNBits(e,t);if(!t.sign)return g.__truncateAndSubFromPowerOfTwo(e,t,!0);if(0==(n&o-1)){for(var l=_-2;0<=l;l--)if(0!==t.__digit(l))return g.__truncateAndSubFromPowerOfTwo(e,t,!1);return t.length===_&&n===o?t:g.__truncateToNBits(e,t)}return g.__truncateAndSubFromPowerOfTwo(e,t,!1)}},{key:"asUintN",value:function(e,t){if(0===t.length)return t;if(0===e)return g.__zero();if(t.sign){if(e>g.__kMaxLengthBits)throw new RangeError("BigInt too big");return g.__truncateAndSubFromPowerOfTwo(e,t,!1)}if(e>=g.__kMaxLengthBits)return t;var i=e+31>>>5;if(t.length<i)return t;var _=31&e;if(t.length==i){if(0===_)return t;var n=t.__digit(i-1);if(0==n>>>_)return t}return g.__truncateToNBits(e,t)}},{key:"ADD",value:function(e,t){if(e=g.__toPrimitive(e),t=g.__toPrimitive(t),"string"==typeof e)return"string"!=typeof t&&(t=t.toString()),e+t;if("string"==typeof t)return e.toString()+t;if(e=g.__toNumeric(e),t=g.__toNumeric(t),g.__isBigInt(e)&&g.__isBigInt(t))return g.add(e,t);if("number"==typeof e&&"number"==typeof t)return e+t;throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")}},{key:"LT",value:function(e,t){return g.__compare(e,t,0)}},{key:"LE",value:function(e,t){return g.__compare(e,t,1)}},{key:"GT",value:function(e,t){return g.__compare(e,t,2)}},{key:"GE",value:function(e,t){return g.__compare(e,t,3)}},{key:"EQ",value:function(t,i){for(;;){if(g.__isBigInt(t))return g.__isBigInt(i)?g.equal(t,i):g.EQ(i,t);if("number"==typeof t){if(g.__isBigInt(i))return g.__equalToNumber(i,t);if("object"!==e(i))return t==i;i=g.__toPrimitive(i)}else if("string"==typeof t){if(g.__isBigInt(i))return t=g.__fromString(t),null!==t&&g.equal(t,i);if("object"!==e(i))return t==i;i=g.__toPrimitive(i)}else if("boolean"==typeof t){if(g.__isBigInt(i))return g.__equalToNumber(i,+t);if("object"!==e(i))return t==i;i=g.__toPrimitive(i)}else if("symbol"===e(t)){if(g.__isBigInt(i))return!1;if("object"!==e(i))return t==i;i=g.__toPrimitive(i)}else if("object"===e(t)){if("object"===e(i)&&i.constructor!==g)return t==i;t=g.__toPrimitive(t)}else return t==i}}},{key:"NE",value:function(e,t){return!g.EQ(e,t)}},{key:"__zero",value:function(){return new g(0,!1)}},{key:"__oneDigit",value:function(e,t){var i=new g(1,t);return i.__setDigit(0,e),i}},{key:"__decideRounding",value:function(e,t,i,_){if(0<t)return-1;var n;if(0>t)n=-t-1;else{if(0===i)return-1;i--,_=e.__digit(i),n=31}var g=1<<n;if(0==(_&g))return-1;if(g-=1,0!=(_&g))return 1;for(;0<i;)if(i--,0!==e.__digit(i))return 1;return 0}},{key:"__fromDouble",value:function(e){g.__kBitConversionDouble[0]=e;var t,i=2047&g.__kBitConversionInts[1]>>>20,_=i-1023,n=(_>>>5)+1,o=new g(n,0>e),l=1048575&g.__kBitConversionInts[1]|1048576,a=g.__kBitConversionInts[0],s=20,u=31&_,r=0;if(u<s){var d=s-u;r=d+32,t=l>>>d,l=l<<32-d|a>>>d,a<<=32-d}else if(u===s)r=32,t=l,l=a;else{var h=u-s;r=32-h,t=l<<h|a>>>32-h,l=a<<h}o.__setDigit(n-1,t);for(var b=n-2;0<=b;b--)0<r?(r-=32,t=l,l=a):t=0,o.__setDigit(b,t);return o.__trim()}},{key:"__isWhitespace",value:function(e){return!!(13>=e&&9<=e)||(159>=e?32==e:131071>=e?160==e||5760==e:196607>=e?(e&=131071,10>=e||40==e||41==e||47==e||95==e||4096==e):65279==e)}},{key:"__fromString",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,i=0,_=e.length,n=0;if(n===_)return g.__zero();for(var o=e.charCodeAt(n);g.__isWhitespace(o);){if(++n===_)return g.__zero();o=e.charCodeAt(n)}if(43===o){if(++n===_)return null;o=e.charCodeAt(n),i=1}else if(45===o){if(++n===_)return null;o=e.charCodeAt(n),i=-1}if(0===t){if(t=10,48===o){if(++n===_)return g.__zero();if(o=e.charCodeAt(n),88===o||120===o){if(t=16,++n===_)return null;o=e.charCodeAt(n)}else if(79===o||111===o){if(t=8,++n===_)return null;o=e.charCodeAt(n)}else if(66===o||98===o){if(t=2,++n===_)return null;o=e.charCodeAt(n)}}}else if(16===t&&48===o){if(++n===_)return g.__zero();if(o=e.charCodeAt(n),88===o||120===o){if(++n===_)return null;o=e.charCodeAt(n)}}for(;48===o;){if(++n===_)return g.__zero();o=e.charCodeAt(n)}var l=_-n,a=g.__kMaxBitsPerChar[t],s=g.__kBitsPerCharTableMultiplier-1;if(l>1073741824/a)return null;var u=a*l+s>>>g.__kBitsPerCharTableShift,r=new g(u+31>>>5,!1),h=10>t?t:10,b=10<t?t-10:0;if(0==(t&t-1)){a>>=g.__kBitsPerCharTableShift;var c=[],v=[],f=!1;do{for(var y,k=0,D=0;;){if(y=void 0,o-48>>>0<h)y=o-48;else if((32|o)-97>>>0<b)y=(32|o)-87;else{f=!0;break}if(D+=a,k=k<<a|y,++n===_){f=!0;break}if(o=e.charCodeAt(n),32<D+a)break}c.push(k),v.push(D)}while(!f);g.__fillFromParts(r,c,v)}else{r.__initializeDigits();var p=!1,B=0;do{for(var S,C=0,A=1;;){if(S=void 0,o-48>>>0<h)S=o-48;else if((32|o)-97>>>0<b)S=(32|o)-87;else{p=!0;break}var T=A*t;if(4294967295<T)break;if(A=T,C=C*t+S,B++,++n===_){p=!0;break}o=e.charCodeAt(n)}s=32*g.__kBitsPerCharTableMultiplier-1;var m=a*B+s>>>g.__kBitsPerCharTableShift+5;r.__inplaceMultiplyAdd(A,C,m)}while(!p)}if(n!==_){if(!g.__isWhitespace(o))return null;for(n++;n<_;n++)if(o=e.charCodeAt(n),!g.__isWhitespace(o))return null}return 0!==i&&10!==t?null:(r.sign=-1===i,r.__trim())}},{key:"__fillFromParts",value:function(e,t,_){for(var n=0,g=0,o=0,l=t.length-1;0<=l;l--){var a=t[l],s=_[l];g|=a<<o,o+=s,32===o?(e.__setDigit(n++,g),o=0,g=0):32<o&&(e.__setDigit(n++,g),o-=32,g=a>>>s-o)}if(0!==g){if(n>=e.length)throw new Error("implementation bug");e.__setDigit(n++,g)}for(;n<e.length;n++)e.__setDigit(n,0)}},{key:"__toStringBasePowerOfTwo",value:function(e,t){var _=e.length,n=t-1;n=(85&n>>>1)+(85&n),n=(51&n>>>2)+(51&n),n=(15&n>>>4)+(15&n);var o=n,l=t-1,a=e.__digit(_-1),u=s(a),r=0|(32*_-u+o-1)/o;if(e.sign&&r++,268435456<r)throw new Error("string too long");for(var d=Array(r),h=r-1,b=0,m=0,c=0;c<_-1;c++){var v=e.__digit(c),f=(b|v<<m)&l;d[h--]=g.__kConversionChars[f];var y=o-m;for(b=v>>>y,m=32-y;m>=o;)d[h--]=g.__kConversionChars[b&l],b>>>=o,m-=o}var k=(b|a<<m)&l;for(d[h--]=g.__kConversionChars[k],b=a>>>o-m;0!==b;)d[h--]=g.__kConversionChars[b&l],b>>>=o;if(e.sign&&(d[h--]="-"),-1!==h)throw new Error("implementation bug");return d.join("")}},{key:"__toStringGeneric",value:function(e,t,_){var n=e.length;if(0===n)return"";if(1===n){var o=e.__unsignedDigit(0).toString(t);return!1===_&&e.sign&&(o="-"+o),o}var l=32*n-s(e.__digit(n-1)),a=g.__kMaxBitsPerChar[t],u=a-1,r=l*g.__kBitsPerCharTableMultiplier;r+=u-1,r=0|r/u;var d,h,b=r+1>>1,m=g.exponentiate(g.__oneDigit(t,!1),g.__oneDigit(b,!1)),c=m.__unsignedDigit(0);if(1===m.length&&65535>=c){d=new g(e.length,!1),d.__initializeDigits();for(var v,f=0,y=2*e.length-1;0<=y;y--)v=f<<16|e.__halfDigit(y),d.__setHalfDigit(y,0|v/c),f=0|v%c;h=f.toString(t)}else{var k=g.__absoluteDivLarge(e,m,!0,!0);d=k.quotient;var D=k.remainder.__trim();h=g.__toStringGeneric(D,t,!0)}d.__trim();for(var p=g.__toStringGeneric(d,t,!0);h.length<b;)h="0"+h;return!1===_&&e.sign&&(p="-"+p),p+h}},{key:"__unequalSign",value:function(e){return e?-1:1}},{key:"__absoluteGreater",value:function(e){return e?-1:1}},{key:"__absoluteLess",value:function(e){return e?1:-1}},{key:"__compareToBigInt",value:function(e,t){var i=e.sign;if(i!==t.sign)return g.__unequalSign(i);var _=g.__absoluteCompare(e,t);return 0<_?g.__absoluteGreater(i):0>_?g.__absoluteLess(i):0}},{key:"__compareToNumber",value:function(e,t){if(!0|t){var i=e.sign,_=0>t;if(i!==_)return g.__unequalSign(i);if(0===e.length){if(_)throw new Error("implementation bug");return 0===t?0:-1}if(1<e.length)return g.__absoluteGreater(i);var n=o(t),l=e.__unsignedDigit(0);return l>n?g.__absoluteGreater(i):l<n?g.__absoluteLess(i):0}return g.__compareToDouble(e,t)}},{key:"__compareToDouble",value:function(e,t){if(t!==t)return t;if(t===1/0)return-1;if(t===-Infinity)return 1;var i=e.sign;if(i!==0>t)return g.__unequalSign(i);if(0===t)throw new Error("implementation bug: should be handled elsewhere");if(0===e.length)return-1;g.__kBitConversionDouble[0]=t;var _=2047&g.__kBitConversionInts[1]>>>20;if(2047==_)throw new Error("implementation bug: handled elsewhere");var n=_-1023;if(0>n)return g.__absoluteGreater(i);var o=e.length,l=e.__digit(o-1),a=s(l),u=32*o-a,r=n+1;if(u<r)return g.__absoluteLess(i);if(u>r)return g.__absoluteGreater(i);var d=1048576|1048575&g.__kBitConversionInts[1],h=g.__kBitConversionInts[0],b=20,m=31-a;if(m!==(u-1)%31)throw new Error("implementation bug");var c,v=0;if(m<b){var f=b-m;v=f+32,c=d>>>f,d=d<<32-f|h>>>f,h<<=32-f}else if(m===b)v=32,c=d,d=h;else{var y=m-b;v=32-y,c=d<<y|h>>>32-y,d=h<<y}if(l>>>=0,c>>>=0,l>c)return g.__absoluteGreater(i);if(l<c)return g.__absoluteLess(i);for(var k=o-2;0<=k;k--){0<v?(v-=32,c=d>>>0,d=h,h=0):c=0;var D=e.__unsignedDigit(k);if(D>c)return g.__absoluteGreater(i);if(D<c)return g.__absoluteLess(i)}if(0!==d||0!==h){if(0===v)throw new Error("implementation bug");return g.__absoluteLess(i)}return 0}},{key:"__equalToNumber",value:function(e,t){return t|0===t?0===t?0===e.length:1===e.length&&e.sign===0>t&&e.__unsignedDigit(0)===o(t):0===g.__compareToDouble(e,t)}},{key:"__comparisonResultToBool",value:function(e,t){switch(t){case 0:return 0>e;case 1:return 0>=e;case 2:return 0<e;case 3:return 0<=e;}throw new Error("unreachable")}},{key:"__compare",value:function(e,t,i){if(e=g.__toPrimitive(e),t=g.__toPrimitive(t),"string"==typeof e&&"string"==typeof t)switch(i){case 0:return e<t;case 1:return e<=t;case 2:return e>t;case 3:return e>=t;}if(g.__isBigInt(e)&&"string"==typeof t)return t=g.__fromString(t),null!==t&&g.__comparisonResultToBool(g.__compareToBigInt(e,t),i);if("string"==typeof e&&g.__isBigInt(t))return e=g.__fromString(e),null!==e&&g.__comparisonResultToBool(g.__compareToBigInt(e,t),i);if(e=g.__toNumeric(e),t=g.__toNumeric(t),g.__isBigInt(e)){if(g.__isBigInt(t))return g.__comparisonResultToBool(g.__compareToBigInt(e,t),i);if("number"!=typeof t)throw new Error("implementation bug");return g.__comparisonResultToBool(g.__compareToNumber(e,t),i)}if("number"!=typeof e)throw new Error("implementation bug");if(g.__isBigInt(t))return g.__comparisonResultToBool(g.__compareToNumber(t,e),2^i);if("number"!=typeof t)throw new Error("implementation bug");return 0===i?e<t:1===i?e<=t:2===i?e>t:3===i?e>=t:void 0}},{key:"__absoluteAdd",value:function(e,t,_){if(e.length<t.length)return g.__absoluteAdd(t,e,_);if(0===e.length)return e;if(0===t.length)return e.sign===_?e:g.unaryMinus(e);var n=e.length;(0===e.__clzmsd()||t.length===e.length&&0===t.__clzmsd())&&n++;for(var o=new g(n,_),l=0,a=0;a<t.length;a++){var s=t.__digit(a),u=e.__digit(a),r=(65535&u)+(65535&s)+l,d=(u>>>16)+(s>>>16)+(r>>>16);l=d>>>16,o.__setDigit(a,65535&r|d<<16)}for(;a<e.length;a++){var h=e.__digit(a),b=(65535&h)+l,m=(h>>>16)+(b>>>16);l=m>>>16,o.__setDigit(a,65535&b|m<<16)}return a<o.length&&o.__setDigit(a,l),o.__trim()}},{key:"__absoluteSub",value:function(e,t,_){if(0===e.length)return e;if(0===t.length)return e.sign===_?e:g.unaryMinus(e);for(var n=new g(e.length,_),o=0,l=0;l<t.length;l++){var a=e.__digit(l),s=t.__digit(l),u=(65535&a)-(65535&s)-o;o=1&u>>>16;var r=(a>>>16)-(s>>>16)-o;o=1&r>>>16,n.__setDigit(l,65535&u|r<<16)}for(;l<e.length;l++){var d=e.__digit(l),h=(65535&d)-o;o=1&h>>>16;var b=(d>>>16)-o;o=1&b>>>16,n.__setDigit(l,65535&h|b<<16)}return n.__trim()}},{key:"__absoluteAddOne",value:function(e,t){var _=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,n=e.length;null===_?_=new g(n,t):_.sign=t;for(var o,l=!0,a=0;a<n;a++){if(o=e.__digit(a),l){var s=-1===o;o=0|o+1,l=s}_.__setDigit(a,o)}return l&&_.__setDigitGrow(n,1),_}},{key:"__absoluteSubOne",value:function(e,t){var _=e.length;t=t||_;for(var n,o=new g(t,!1),l=!0,a=0;a<_;a++){if(n=e.__digit(a),l){var s=0===n;n=0|n-1,l=s}o.__setDigit(a,n)}if(l)throw new Error("implementation bug");for(var u=_;u<t;u++)o.__setDigit(u,0);return o}},{key:"__absoluteAnd",value:function(e,t){var _=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,n=e.length,o=t.length,l=o;if(n<o){l=n;var a=e,s=n;e=t,n=o,t=a,o=s}var u=l;null===_?_=new g(u,!1):u=_.length;for(var r=0;r<l;r++)_.__setDigit(r,e.__digit(r)&t.__digit(r));for(;r<u;r++)_.__setDigit(r,0);return _}},{key:"__absoluteAndNot",value:function(e,t){var _=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,n=e.length,o=t.length,l=o;n<o&&(l=n);var a=n;null===_?_=new g(a,!1):a=_.length;for(var s=0;s<l;s++)_.__setDigit(s,e.__digit(s)&~t.__digit(s));for(;s<n;s++)_.__setDigit(s,e.__digit(s));for(;s<a;s++)_.__setDigit(s,0);return _}},{key:"__absoluteOr",value:function(e,t){var _=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,n=e.length,o=t.length,l=o;if(n<o){l=n;var a=e,s=n;e=t,n=o,t=a,o=s}var u=n;null===_?_=new g(u,!1):u=_.length;for(var r=0;r<l;r++)_.__setDigit(r,e.__digit(r)|t.__digit(r));for(;r<n;r++)_.__setDigit(r,e.__digit(r));for(;r<u;r++)_.__setDigit(r,0);return _}},{key:"__absoluteXor",value:function(e,t){var _=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,n=e.length,o=t.length,l=o;if(n<o){l=n;var a=e,s=n;e=t,n=o,t=a,o=s}var u=n;null===_?_=new g(u,!1):u=_.length;for(var r=0;r<l;r++)_.__setDigit(r,e.__digit(r)^t.__digit(r));for(;r<n;r++)_.__setDigit(r,e.__digit(r));for(;r<u;r++)_.__setDigit(r,0);return _}},{key:"__absoluteCompare",value:function(e,t){var _=e.length-t.length;if(0!=_)return _;for(var n=e.length-1;0<=n&&e.__digit(n)===t.__digit(n);)n--;return 0>n?0:e.__unsignedDigit(n)>t.__unsignedDigit(n)?1:-1}},{key:"__multiplyAccumulate",value:function(e,t,_,n){if(0!==t){for(var g=65535&t,o=t>>>16,l=0,s=0,u=0,r=0;r<e.length;r++,n++){var d=_.__digit(n),h=65535&d,b=d>>>16,m=e.__digit(r),c=65535&m,v=m>>>16,f=a(c,g),y=a(c,o),k=a(v,g),D=a(v,o);h+=s+(65535&f),b+=u+l+(h>>>16)+(f>>>16)+(65535&y)+(65535&k),l=b>>>16,s=(y>>>16)+(k>>>16)+(65535&D)+l,l=s>>>16,s&=65535,u=D>>>16,d=65535&h|b<<16,_.__setDigit(n,d)}for(;0!==l||0!==s||0!==u;n++){var p=_.__digit(n),B=(65535&p)+s,S=(p>>>16)+(B>>>16)+u+l;s=0,u=0,l=S>>>16,p=65535&B|S<<16,_.__setDigit(n,p)}}}},{key:"__internalMultiplyAdd",value:function(e,t,_,g,o){for(var l=_,s=0,u=0;u<g;u++){var r=e.__digit(u),d=a(65535&r,t),h=(65535&d)+s+l;l=h>>>16;var b=a(r>>>16,t),m=(65535&b)+(d>>>16)+l;l=m>>>16,s=b>>>16,o.__setDigit(u,m<<16|65535&h)}if(o.length>g)for(o.__setDigit(g++,l+s);g<o.length;)o.__setDigit(g++,0);else if(0!==l+s)throw new Error("implementation bug")}},{key:"__absoluteDivSmall",value:function(e,t,_){null===_&&(_=new g(e.length,!1));for(var n=0,o=2*e.length-1;0<=o;o-=2){var l=(n<<16|e.__halfDigit(o))>>>0,a=0|l/t;n=0|l%t,l=(n<<16|e.__halfDigit(o-1))>>>0;var s=0|l/t;n=0|l%t,_.__setDigit(o>>>1,a<<16|s)}return _}},{key:"__absoluteModSmall",value:function(e,t){for(var _,n=0,g=2*e.length-1;0<=g;g--)_=(n<<16|e.__halfDigit(g))>>>0,n=0|_%t;return n}},{key:"__absoluteDivLarge",value:function(e,t,i,_){var o=t.__halfDigitLength(),n=t.length,l=e.__halfDigitLength()-o,s=null;i&&(s=new g(l+2>>>1,!1),s.__initializeDigits());var r=new g(o+2>>>1,!1);r.__initializeDigits();var d=g.__clz16(t.__halfDigit(o-1));0<d&&(t=g.__specialLeftShift(t,d,0));for(var h=g.__specialLeftShift(e,d,1),u=t.__halfDigit(o-1),b=0,m=l;0<=m;m--){var v=65535,f=h.__halfDigit(m+o);if(f!==u){var y=(f<<16|h.__halfDigit(m+o-1))>>>0;v=0|y/u;for(var k=0|y%u,D=t.__halfDigit(o-2),p=h.__halfDigit(m+o-2);a(v,D)>>>0>(k<<16|p)>>>0&&(v--,k+=u,!(65535<k)););}g.__internalMultiplyAdd(t,v,0,n,r);var B=h.__inplaceSub(r,m,o+1);0!==B&&(B=h.__inplaceAdd(t,m,o),h.__setHalfDigit(m+o,h.__halfDigit(m+o)+B),v--),i&&(1&m?b=v<<16:s.__setDigit(m>>>1,b|v))}return _?(h.__inplaceRightShift(d),i?{quotient:s,remainder:h}:h):i?s:void 0}},{key:"__clz16",value:function(e){return s(e)-16}},{key:"__specialLeftShift",value:function(e,t,_){var o=e.length,n=new g(o+_,!1);if(0===t){for(var l=0;l<o;l++)n.__setDigit(l,e.__digit(l));return 0<_&&n.__setDigit(o,0),n}for(var a,s=0,u=0;u<o;u++)a=e.__digit(u),n.__setDigit(u,a<<t|s),s=a>>>32-t;return 0<_&&n.__setDigit(o,s),n}},{key:"__leftShiftByAbsolute",value:function(e,t){var _=g.__toShiftAmount(t);if(0>_)throw new RangeError("BigInt too big");var n=_>>>5,o=31&_,l=e.length,a=0!==o&&0!=e.__digit(l-1)>>>32-o,s=l+n+(a?1:0),u=new g(s,e.sign);if(0===o){for(var r=0;r<n;r++)u.__setDigit(r,0);for(;r<s;r++)u.__setDigit(r,e.__digit(r-n))}else{for(var h=0,b=0;b<n;b++)u.__setDigit(b,0);for(var m,c=0;c<l;c++)m=e.__digit(c),u.__setDigit(c+n,m<<o|h),h=m>>>32-o;if(a)u.__setDigit(l+n,h);else if(0!==h)throw new Error("implementation bug")}return u.__trim()}},{key:"__rightShiftByAbsolute",value:function(e,t){var _=e.length,n=e.sign,o=g.__toShiftAmount(t);if(0>o)return g.__rightShiftByMaximum(n);var l=o>>>5,a=31&o,s=_-l;if(0>=s)return g.__rightShiftByMaximum(n);var u=!1;if(n){if(0!=(e.__digit(l)&(1<<a)-1))u=!0;else for(var r=0;r<l;r++)if(0!==e.__digit(r)){u=!0;break}}if(u&&0===a){var h=e.__digit(_-1);0==~h&&s++}var b=new g(s,n);if(0===a)for(var m=l;m<_;m++)b.__setDigit(m-l,e.__digit(m));else{for(var c,v=e.__digit(l)>>>a,f=_-l-1,y=0;y<f;y++)c=e.__digit(y+l+1),b.__setDigit(y,c<<32-a|v),v=c>>>a;b.__setDigit(f,v)}return u&&(b=g.__absoluteAddOne(b,!0,b)),b.__trim()}},{key:"__rightShiftByMaximum",value:function(e){return e?g.__oneDigit(1,!0):g.__zero()}},{key:"__toShiftAmount",value:function(e){if(1<e.length)return-1;var t=e.__unsignedDigit(0);return t>g.__kMaxLengthBits?-1:t}},{key:"__toPrimitive",value:function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"default";if("object"!==e(t))return t;if(t.constructor===g)return t;var _=t[Symbol.toPrimitive];if(_){var n=_(i);if("object"!==e(n))return n;throw new TypeError("Cannot convert object to primitive value")}var o=t.valueOf;if(o){var l=o.call(t);if("object"!==e(l))return l}var a=t.toString;if(a){var s=a.call(t);if("object"!==e(s))return s}throw new TypeError("Cannot convert object to primitive value")}},{key:"__toNumeric",value:function(e){return g.__isBigInt(e)?e:+e}},{key:"__isBigInt",value:function(t){return"object"===e(t)&&t.constructor===g}},{key:"__truncateToNBits",value:function(e,t){for(var _=e+31>>>5,n=new g(_,t.sign),o=_-1,l=0;l<o;l++)n.__setDigit(l,t.__digit(l));var a=t.__digit(o);if(0!=(31&e)){var s=32-(31&e);a=a<<s>>>s}return n.__setDigit(o,a),n.__trim()}},{key:"__truncateAndSubFromPowerOfTwo",value:function(e,t,_){for(var n=Math.min,o=e+31>>>5,l=new g(o,_),a=0,s=o-1,u=0,r=n(s,t.length);a<r;a++){var d=t.__digit(a),h=0-(65535&d)-u;u=1&h>>>16;var b=0-(d>>>16)-u;u=1&b>>>16,l.__setDigit(a,65535&h|b<<16)}for(;a<s;a++)l.__setDigit(a,0|-u);var m,c=s<t.length?t.__digit(s):0,v=31&e;if(0===v){var f=0-(65535&c)-u;u=1&f>>>16;var y=0-(c>>>16)-u;m=65535&f|y<<16}else{var k=32-v;c=c<<k>>>k;var D=1<<32-k,p=(65535&D)-(65535&c)-u;u=1&p>>>16;var B=(D>>>16)-(c>>>16)-u;m=65535&p|B<<16,m&=D-1}return l.__setDigit(s,m),l.__trim()}},{key:"__digitPow",value:function(e,t){for(var i=1;0<t;)1&t&&(i*=e),t>>>=1,e*=e;return i}}]),g}(r(Array));return f.__kMaxLength=33554432,f.__kMaxLengthBits=f.__kMaxLength<<5,f.__kMaxBitsPerChar=[0,0,32,51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,165,166],f.__kBitsPerCharTableShift=5,f.__kBitsPerCharTableMultiplier=1<<f.__kBitsPerCharTableShift,f.__kConversionChars=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],f.__kBitConversionBuffer=new ArrayBuffer(8),f.__kBitConversionDouble=new Float64Array(f.__kBitConversionBuffer),f.__kBitConversionInts=new Int32Array(f.__kBitConversionBuffer),f});