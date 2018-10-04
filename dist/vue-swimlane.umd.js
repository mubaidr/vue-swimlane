(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueSwimlane = factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

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

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
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
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	var lodash_debounce = debounce;

	//

	var script = {
	  name: 'VueSwimlane',

	  props: {
	    words: {
	      type: Array,
	      required: true,
	    },
	    rows: {
	      type: Number,
	      default: 1,
	    },
	    scale: {
	      type: Number,
	      default: 1,
	    },
	    transitionDuration: {
	      type: Number,
	      default: 500,
	    },
	    transitionDelay: {
	      type: Number,
	      default: 250,
	    },
	    transition: {
	      type: String,
	      default: 'ease-out',
	    },
	    circular: {
	      type: Boolean,
	      default: false,
	    },
	    pauseOnHover: {
	      type: Boolean,
	      default: false,
	    },
	  },

	  data: function data() {
	    return {
	      fontSize: 16,
	      listTop: 0,
	      moveUp: true,
	      resetOnNext: false,
	      padding: 16,
	      isPaused: false,
	      updatetimeoutId: null,
	    }
	  },

	  computed: {
	    transitionDelayNormalized: function transitionDelayNormalized() {
	      return Math.abs(this.transitionDelay || 250)
	    },

	    transitionDurationNormalized: function transitionDurationNormalized() {
	      return Math.abs(this.transitionDuration || 250)
	    },

	    itemScaleNormalized: function itemScaleNormalized() {
	      return Math.abs(this.scale || 1)
	    },

	    itemRowsNormalized: function itemRowsNormalized() {
	      return this.rows > this.words.length
	        ? this.words.length
	        : Math.abs(this.rows || 1)
	    },

	    itemHeight: function itemHeight() {
	      return this.fontSize * this.itemScaleNormalized + this.padding
	    },

	    itemStyle: function itemStyle() {
	      return ("font-size: " + (this.itemHeight -
	        this.padding / 2) + "px!important; line-height: " + (this.itemHeight) + "px!important;")
	    },

	    listHeight: function listHeight() {
	      return this.itemHeight * this.words.length
	    },

	    listStyle: function listStyle() {
	      return ("-webkit-transition: transform " + (this.transitionDurationNormalized) + "ms " + (this.transition) + "!important;\n            -moz-transition: transform  " + (this.transitionDurationNormalized) + "ms " + (this.transition) + "!important;\n            transition: transform  " + (this.transitionDurationNormalized) + "ms " + (this.transition) + "!important;\n            transform: translateY(" + (this.listTop) + "px)!important;")
	    },

	    listParentStyle: function listParentStyle() {
	      return ("height: " + (this.itemHeight * this.itemRowsNormalized) + "px!important;")
	    },
	  },

	  mounted: function mounted() {
	    this.animate();
	  },

	  methods: {
	    capitalize: function capitalize(str) {
	      return str.replace(/\b\w/g, function (l) { return l.toUpperCase(); })
	    },

	    updateState: function updateState() {
	      if (this.resetOnNext) {
	        this.listTop = 0;
	        this.resetOnNext = false;
	        return
	      }

	      if (this.listTop === 0) {
	        this.moveUp = true;
	      }

	      if (this.moveUp) {
	        this.listTop -= this.itemHeight;
	      } else {
	        this.listTop += this.itemHeight;
	      }

	      if (
	        this.listTop - this.itemHeight * this.itemRowsNormalized <=
	        -this.listHeight
	      ) {
	        // eslint-disable-next-line
	        this.circular ? (this.moveUp = false) : (this.resetOnNext = true);
	      }
	    },

	    animate: function animate() {
	      var this$1 = this;

	      if (!this.isPaused && this.words.length > this.itemRowsNormalized) {
	        this.updatetimeoutId = setTimeout(function () {
	          this$1.updateState();
	          this$1.animate();
	        }, this.transitionDelayNormalized + this.transitionDurationNormalized);
	      }
	    },

	    toggleAnimation: function toggleAnimation() {
	      this.isPaused = !this.isPaused;
	      this.animate();
	    },

	    throttleToggleAnimation: function throttleToggleAnimation() {
	      clearTimeout(this.updatetimeoutId);
	      lodash_debounce(this.toggleAnimation, this.transitionDelayNormalized, {
	        leading: true,
	      })();
	    },
	  },
	};

	/* script */
	            var __vue_script__ = script;
	            
	/* template */
	var __vue_render__ = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    {
	      staticClass: "vue-swimlane",
	      style: _vm.listParentStyle,
	      on: {
	        mouseenter: _vm.throttleToggleAnimation,
	        mouseleave: _vm.throttleToggleAnimation
	      }
	    },
	    [
	      _c(
	        "ul",
	        { style: _vm.listStyle },
	        _vm._l(_vm.words, function(word, index) {
	          return _c("li", {
	            key: index,
	            style: _vm.itemStyle,
	            domProps: { innerHTML: _vm._s(word) }
	          })
	        })
	      )
	    ]
	  )
	};
	var __vue_staticRenderFns__ = [];
	__vue_render__._withStripped = true;

	  /* style */
	  var __vue_inject_styles__ = function (inject) {
	    if (!inject) { return }
	    inject("data-v-8f605c7a_0", { source: "\n.vue-swimlane {\n  width: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n.vue-swimlane ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n  transform: translateY(0);\n  will-change: transform;\n}\n.vue-swimlane ul li {\n  padding: 0;\n  margin: 0;\n}\n", map: {"version":3,"sources":["D:\\Current\\vue-swimlane/D:\\Current\\vue-swimlane\\src\\component\\vue-swimlane.vue"],"names":[],"mappings":";AAqLA;EACA,YAAA;EACA,iBAAA;EACA,WAAA;EACA,UAAA;CACA;AAEA;EACA,iBAAA;EACA,WAAA;EACA,UAAA;EACA,mBAAA;EACA,yBAAA;EACA,uBAAA;CACA;AAEA;EACA,WAAA;EACA,UAAA;CACA","file":"vue-swimlane.vue","sourcesContent":["<template>\n  <div\n    :style=\"listParentStyle\"\n    class=\"vue-swimlane\"\n    @mouseenter=\"throttleToggleAnimation\"\n    @mouseleave=\"throttleToggleAnimation\">\n    <ul :style=\"listStyle\">\n      <li\n        v-for=\"(word, index) in words\"\n        :style=\"itemStyle\"\n        :key=\"index\"\n        v-html=\"word\"/>\n    </ul>\n  </div>\n</template>\n\n<script>\nimport debounce from 'lodash.debounce'\n\nexport default {\n  name: 'VueSwimlane',\n\n  props: {\n    words: {\n      type: Array,\n      required: true,\n    },\n    rows: {\n      type: Number,\n      default: 1,\n    },\n    scale: {\n      type: Number,\n      default: 1,\n    },\n    transitionDuration: {\n      type: Number,\n      default: 500,\n    },\n    transitionDelay: {\n      type: Number,\n      default: 250,\n    },\n    transition: {\n      type: String,\n      default: 'ease-out',\n    },\n    circular: {\n      type: Boolean,\n      default: false,\n    },\n    pauseOnHover: {\n      type: Boolean,\n      default: false,\n    },\n  },\n\n  data() {\n    return {\n      fontSize: 16,\n      listTop: 0,\n      moveUp: true,\n      resetOnNext: false,\n      padding: 16,\n      isPaused: false,\n      updatetimeoutId: null,\n    }\n  },\n\n  computed: {\n    transitionDelayNormalized() {\n      return Math.abs(this.transitionDelay || 250)\n    },\n\n    transitionDurationNormalized() {\n      return Math.abs(this.transitionDuration || 250)\n    },\n\n    itemScaleNormalized() {\n      return Math.abs(this.scale || 1)\n    },\n\n    itemRowsNormalized() {\n      return this.rows > this.words.length\n        ? this.words.length\n        : Math.abs(this.rows || 1)\n    },\n\n    itemHeight() {\n      return this.fontSize * this.itemScaleNormalized + this.padding\n    },\n\n    itemStyle() {\n      return `font-size: ${this.itemHeight -\n        this.padding / 2}px!important; line-height: ${\n        this.itemHeight\n      }px!important;`\n    },\n\n    listHeight() {\n      return this.itemHeight * this.words.length\n    },\n\n    listStyle() {\n      return `-webkit-transition: transform ${\n        this.transitionDurationNormalized\n      }ms ${this.transition}!important;\n            -moz-transition: transform  ${\n              this.transitionDurationNormalized\n            }ms ${this.transition}!important;\n            transition: transform  ${this.transitionDurationNormalized}ms ${\n        this.transition\n      }!important;\n            transform: translateY(${this.listTop}px)!important;`\n    },\n\n    listParentStyle() {\n      return `height: ${this.itemHeight * this.itemRowsNormalized}px!important;`\n    },\n  },\n\n  mounted() {\n    this.animate()\n  },\n\n  methods: {\n    capitalize(str) {\n      return str.replace(/\\b\\w/g, l => l.toUpperCase())\n    },\n\n    updateState() {\n      if (this.resetOnNext) {\n        this.listTop = 0\n        this.resetOnNext = false\n        return\n      }\n\n      if (this.listTop === 0) {\n        this.moveUp = true\n      }\n\n      if (this.moveUp) {\n        this.listTop -= this.itemHeight\n      } else {\n        this.listTop += this.itemHeight\n      }\n\n      if (\n        this.listTop - this.itemHeight * this.itemRowsNormalized <=\n        -this.listHeight\n      ) {\n        // eslint-disable-next-line\n        this.circular ? (this.moveUp = false) : (this.resetOnNext = true)\n      }\n    },\n\n    animate() {\n      if (!this.isPaused && this.words.length > this.itemRowsNormalized) {\n        this.updatetimeoutId = setTimeout(() => {\n          this.updateState()\n          this.animate()\n        }, this.transitionDelayNormalized + this.transitionDurationNormalized)\n      }\n    },\n\n    toggleAnimation() {\n      this.isPaused = !this.isPaused\n      this.animate()\n    },\n\n    throttleToggleAnimation() {\n      clearTimeout(this.updatetimeoutId)\n      debounce(this.toggleAnimation, this.transitionDelayNormalized, {\n        leading: true,\n      })()\n    },\n  },\n}\n</script>\n\n<style>\n.vue-swimlane {\n  width: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n\n.vue-swimlane ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n  transform: translateY(0);\n  will-change: transform;\n}\n\n.vue-swimlane ul li {\n  padding: 0;\n  margin: 0;\n}\n</style>\n"]}, media: undefined });

	  };
	  /* scoped */
	  var __vue_scope_id__ = undefined;
	  /* module identifier */
	  var __vue_module_identifier__ = undefined;
	  /* functional template */
	  var __vue_is_functional_template__ = false;
	  /* component normalizer */
	  function __vue_normalize__(
	    template, style, script$$1,
	    scope, functional, moduleIdentifier,
	    createInjector, createInjectorSSR
	  ) {
	    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

	    // For security concerns, we use only base name in production mode.
	    component.__file = "D:\\Current\\vue-swimlane\\src\\component\\vue-swimlane.vue";

	    if (!component.render) {
	      component.render = template.render;
	      component.staticRenderFns = template.staticRenderFns;
	      component._compiled = true;

	      if (functional) { component.functional = true; }
	    }

	    component._scopeId = scope;

	    {
	      var hook;
	      if (style) {
	        hook = function(context) {
	          style.call(this, createInjector(context));
	        };
	      }

	      if (hook !== undefined) {
	        if (component.functional) {
	          // register for functional component in vue file
	          var originalRender = component.render;
	          component.render = function renderWithStyleInjection(h, context) {
	            hook.call(context);
	            return originalRender(h, context)
	          };
	        } else {
	          // inject component registration as beforeCreate hook
	          var existing = component.beforeCreate;
	          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	        }
	      }
	    }

	    return component
	  }
	  /* style inject */
	  function __vue_create_injector__() {
	    var head = document.head || document.getElementsByTagName('head')[0];
	    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
	    var isOldIE =
	      typeof navigator !== 'undefined' &&
	      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

	    return function addStyle(id, css) {
	      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

	      var group = isOldIE ? css.media || 'default' : id;
	      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

	      if (!style.ids.includes(id)) {
	        var code = css.source;
	        var index = style.ids.length;

	        style.ids.push(id);

	        if (isOldIE) {
	          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
	        }

	        if (!style.element) {
	          var el = style.element = document.createElement('style');
	          el.type = 'text/css';

	          if (css.media) { el.setAttribute('media', css.media); }
	          if (isOldIE) {
	            el.setAttribute('data-group', group);
	            el.setAttribute('data-next-index', '0');
	          }

	          head.appendChild(el);
	        }

	        if (isOldIE) {
	          index = parseInt(style.element.getAttribute('data-next-index'));
	          style.element.setAttribute('data-next-index', index + 1);
	        }

	        if (style.element.styleSheet) {
	          style.parts.push(code);
	          style.element.styleSheet.cssText = style.parts
	            .filter(Boolean)
	            .join('\n');
	        } else {
	          var textNode = document.createTextNode(code);
	          var nodes = style.element.childNodes;
	          if (nodes[index]) { style.element.removeChild(nodes[index]); }
	          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
	          else { style.element.appendChild(textNode); }
	        }
	      }
	    }
	  }
	  /* style inject SSR */
	  

	  
	  var vueSwimlaneComponent = __vue_normalize__(
	    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
	    __vue_inject_styles__,
	    __vue_script__,
	    __vue_scope_id__,
	    __vue_is_functional_template__,
	    __vue_module_identifier__,
	    __vue_create_injector__,
	    undefined
	  );

	var VueSwimlane = {
	  install: function install(Vue) {
	    Vue.component(vueSwimlaneComponent.name, vueSwimlaneComponent);
	  },
	};

	if (typeof window !== 'undefined' && window.Vue) {
	  window.Vue.use(VueSwimlane);
	}

	return VueSwimlane;

})));
