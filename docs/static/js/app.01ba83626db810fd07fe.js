webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___ = __webpack_require__(22);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1__src___["a" /* default */]);

/***/ }),
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(18),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pollyfills__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pollyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pollyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugins__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_css_bootstrap_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_css_index_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_css_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_css_index_css__);






__WEBPACK_IMPORTED_MODULE_2_vue__["a" /* default */].config.productionTip = false;

new __WEBPACK_IMPORTED_MODULE_2_vue__["a" /* default */]({
  el: '#app',
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_3__App___default.a);
  }
});




/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Home__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    home: __WEBPACK_IMPORTED_MODULE_0__components_Home___default.a
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'home',
  data: function data() {
    return {
      content: ['Awesome', 'swimlane', 'plugin', 'for', 'awesome', '<a href="https://vuejs.org">VueJS</a>'],
      options: {
        text: 'This plugin displays a list of words as a Swimlane',
        circular: true,
        pauseOnHover: false,
        rows: 3,
        scale: 1,
        transitionDuration: 1000,
        transitionDelay: 100,
        transition: 'ease-in-out'
      }
    };
  },

  computed: {
    textArray: function textArray() {
      return this.options.text.split(' ').map(function (item) {
        return item.trim();
      });
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(13)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(17),
  /* scopeId */
  "data-v-790d32de",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('vue-swimlane', {
    staticClass: "demo-swimlane",
    attrs: {
      "words": _vm.content,
      "scale": 2
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_vm._v("How to use")]), _vm._v(" "), _c('h4', [_vm._v("Install")]), _vm._v(" "), _c('code', [_vm._v("npm install vue-swimlane --save")]), _vm._v(" "), _c('h4', [_vm._v("Use")]), _vm._v(" "), _c('code', [_vm._v("\n    <vue-swimlane :words=\"wordsArray\" :circular=\"circular\" :rows=\"rows\" :scale=\"scale\" :transitionDuration=\"duration\" :transitionDelay=\"delay\" :transition=\"transition\" :pauseOnHover=\"true\"></vue-swimlane>\n  ")]), _vm._v(" "), _c('h3', [_vm._v("Playground")]), _vm._v(" "), _c('p', [_vm._v("Change options below to see the effect. ")]), _vm._v(" "), _c('p', [_c('vue-swimlane', {
    staticClass: "playground-swimlane",
    attrs: {
      "words": _vm.textArray,
      "circular": _vm.options.circular,
      "rows": _vm.options.rows,
      "scale": _vm.options.scale,
      "transitionDuration": _vm.options.transitionDuration,
      "transitionDelay": _vm.options.transitionDelay,
      "transition": _vm.options.transition,
      "pauseOnHover": _vm.options.pauseOnHover
    }
  })], 1), _vm._v(" "), _c('h3', [_vm._v("Options")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('form', {
    staticClass: "form-horizontal"
  }, [_c('fieldset', [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-lg-2 control-label"
  }, [_vm._v("Text")]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-10"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.options.text),
      expression: "options.text"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.options.text)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.options.text = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-lg-offset-2 col-lg-10"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.options.circular),
      expression: "options.circular"
    }],
    attrs: {
      "type": "checkbox",
      "value": "true"
    },
    domProps: {
      "checked": Array.isArray(_vm.options.circular) ? _vm._i(_vm.options.circular, "true") > -1 : (_vm.options.circular)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.options.circular,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = "true",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.options.circular = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.options.circular = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.options.circular = $$c
        }
      }
    }
  }), _vm._v(" Circular?\n                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-lg-offset-2 col-lg-10"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.options.pauseOnHover),
      expression: "options.pauseOnHover"
    }],
    attrs: {
      "type": "checkbox",
      "value": "true"
    },
    domProps: {
      "checked": Array.isArray(_vm.options.pauseOnHover) ? _vm._i(_vm.options.pauseOnHover, "true") > -1 : (_vm.options.pauseOnHover)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.options.pauseOnHover,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = "true",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.options.pauseOnHover = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.options.pauseOnHover = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.options.pauseOnHover = $$c
        }
      }
    }
  }), _vm._v(" Pause On Hover?\n                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-lg-2 control-label"
  }, [_vm._v("Rows")]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-10"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.options.rows),
      expression: "options.rows",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number"
    },
    domProps: {
      "value": (_vm.options.rows)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.options.rows = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-lg-2 control-label"
  }, [_vm._v("Scale")]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-10"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.options.scale),
      expression: "options.scale",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number"
    },
    domProps: {
      "value": (_vm.options.scale)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.options.scale = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-lg-2 control-label"
  }, [_vm._v("Transition Duration")]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-10"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.options.transitionDuration),
      expression: "options.transitionDuration",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number"
    },
    domProps: {
      "value": (_vm.options.transitionDuration)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.options.transitionDuration = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-lg-2 control-label"
  }, [_vm._v("Transition Delay")]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-10"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.options.transitionDelay),
      expression: "options.transitionDelay",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number"
    },
    domProps: {
      "value": (_vm.options.transitionDelay)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.options.transitionDelay = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-lg-2 control-label"
  }, [_vm._v("Transition")]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-10"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.options.transition),
      expression: "options.transition"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.options.transition)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.options.transition = $event.target.value
      }
    }
  })])])])])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('h3', [_vm._v("Styles?")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('br')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-6"
  }, [_c('ul', {
    staticClass: "list-group"
  }, [_c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v("words")]), _vm._v(" - string[] -\n          "), _c('i', [_vm._v("required")]), _vm._v(": Array of tags or words to be used on display."), _c('br'), _vm._v(" "), _c('strong', [_vm._v("Supports HTML content!")])]), _vm._v(" "), _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v("circular")]), _vm._v(" - bool (Default: false): If true, list starts from the top after completion.")]), _vm._v(" "), _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v("pauseOnHover")]), _vm._v(" - bool (Default: false): If true, animation will pause on mouse hover.")]), _vm._v(" "), _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v("rows")]), _vm._v(" - int (Default: 1): Number of rows always visible at a time.")]), _vm._v(" "), _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v("scale")]), _vm._v(" - float (Default: 1): Font size scaling relative to 16px.")]), _vm._v(" "), _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v("transitionDuration")]), _vm._v(" - float in ms (Default: 500): Animation duration for rows.")]), _vm._v(" "), _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v("transitionDelay")]), _vm._v(" - float in ms (Default: 250): Delays between each animation duration.")]), _vm._v(" "), _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v("transition")]), _vm._v(" - string (Default: ease-out): css transition name.")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("Almost all the styling can be applied using your own class or using default class name\n    "), _c('code', [_vm._v("vue-swimlane")]), _vm._v(" except anything that effects the height of the text or the field.\n    "), _c('br'), _vm._v(" "), _c('strong', [_vm._v("To change height or font-size")]), _vm._v(" please use the integrated option\n    "), _c('code', [_vm._v("scale")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', [_vm._v("Found any bug or feature request?\n    "), _c('a', {
    attrs: {
      "href": "https://github.com/mubaidr/vue-swimlane/issues"
    }
  }, [_vm._v("Report Here!")])])
}]}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vue-swimlane",
    style: (_vm.listParentStyle),
    on: {
      "mouseenter": _vm.throttleToggleAnimation,
      "mouseleave": _vm.throttleToggleAnimation
    }
  }, [_c('ul', {
    style: (_vm.listStyle)
  }, _vm._l((_vm.words), function(word) {
    return _c('li', {
      key: word,
      style: (_vm.itemStyle),
      domProps: {
        "innerHTML": _vm._s(word)
      }
    })
  }))])
},staticRenderFns: []}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "app"
    }
  }, [_vm._m(0), _vm._v(" "), _c('home')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "jumbotron"
  }, [_c('h1', [_vm._v("Vuejs Text Swimlane Plugin")]), _vm._v(" "), _c('p', [_vm._v("Display a list of words as a text Swimlane.")]), _vm._v(" "), _c('p', [_c('iframe', {
    attrs: {
      "src": "https://ghbtns.com/github-btn.html?user=mubaidr&type=follow&count=true",
      "frameborder": "0",
      "scrolling": "0",
      "width": "170px",
      "height": "20px"
    }
  }), _vm._v(" "), _c('iframe', {
    attrs: {
      "src": "https://ghbtns.com/github-btn.html?user=mubaidr&repo=vue-swimlane&type=star&count=true",
      "frameborder": "0",
      "scrolling": "0",
      "width": "170px",
      "height": "20px"
    }
  })])])
}]}

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_debounce__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_debounce__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vue-swimlane',
  props: {
    words: {
      type: Array,
      required: true
    },
    rows: {
      type: Number,
      default: 1
    },
    scale: {
      type: Number,
      default: 1
    },
    transitionDuration: {
      type: Number,
      default: 500
    },
    transitionDelay: {
      type: Number,
      default: 250
    },
    transition: {
      type: String,
      default: 'ease-out'
    },
    circular: {
      type: Boolean,
      default: false
    },
    pauseOnHover: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      fontSize: 16,
      listTop: 0,
      moveUp: true,
      resetOnNext: false,
      padding: 16,
      isPaused: false,
      updatetimeoutId: null
    };
  },

  computed: {
    transitionDelayNormalized: function transitionDelayNormalized() {
      return Math.abs(this.transitionDelay || 250);
    },
    transitionDurationNormalized: function transitionDurationNormalized() {
      return Math.abs(this.transitionDuration || 250);
    },
    itemScaleNormalized: function itemScaleNormalized() {
      return Math.abs(this.scale || 1);
    },
    itemRowsNormalized: function itemRowsNormalized() {
      return this.rows > this.words.length ? this.words.length : Math.abs(this.rows || 1);
    },
    itemHeight: function itemHeight() {
      return this.fontSize * this.itemScaleNormalized + this.padding;
    },
    itemStyle: function itemStyle() {
      return 'font-size: ' + (this.itemHeight - this.padding / 2) + 'px!important; line-height: ' + this.itemHeight + 'px!important;';
    },
    listHeight: function listHeight() {
      return this.itemHeight * this.words.length;
    },
    listStyle: function listStyle() {
      return '-webkit-transition: transform ' + this.transitionDurationNormalized + 'ms ' + this.transition + '!important;\n      -moz-transition: transform  ' + this.transitionDurationNormalized + 'ms ' + this.transition + '!important;\n      transition: transform  ' + this.transitionDurationNormalized + 'ms ' + this.transition + '!important;\n      transform: translateY(' + this.listTop + 'px)!important;';
    },
    listParentStyle: function listParentStyle() {
      return 'height: ' + this.itemHeight * this.itemRowsNormalized + 'px!important;';
    }
  },
  methods: {
    capitalize: function capitalize(str) {
      return str.replace(/\b\w/g, function (l) {
        return l.toUpperCase();
      });
    },
    updateState: function updateState() {
      if (this.resetOnNext) {
        this.listTop = 0;
        this.resetOnNext = false;
        return;
      }

      if (this.listTop === 0) {
        this.moveUp = true;
      }

      if (this.moveUp) {
        this.listTop -= this.itemHeight;
      } else {
        this.listTop += this.itemHeight;
      }

      if (this.listTop - this.itemHeight * this.itemRowsNormalized <= -this.listHeight) {
        this.circular ? this.moveUp = false : this.resetOnNext = true;
      }
    },
    animate: function animate() {
      var _this = this;

      if (!this.isPaused && this.words.length > this.itemRowsNormalized) {
        this.updatetimeoutId = setTimeout(function () {
          _this.updateState();
          _this.animate();
        }, this.transitionDelayNormalized + this.transitionDurationNormalized);
      }
    },
    toggleAnimation: function toggleAnimation() {
      this.isPaused = !this.isPaused;
      this.animate();
    },
    throttleToggleAnimation: function throttleToggleAnimation() {
      clearTimeout(this.updatetimeoutId);
      __WEBPACK_IMPORTED_MODULE_0_lodash_debounce__(this.toggleAnimation, this.transitionDelayNormalized, { leading: true })();
    }
  },
  mounted: function mounted() {
    this.animate();
  }
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
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
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

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

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_swimlane__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_swimlane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_swimlane__);


var mixins = {
  methods: {}
}

const vueSwimlane = {
  install: function (Vue, options = {}) {
    Vue.mixin(mixins)
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__vue_swimlane___default.a.name, __WEBPACK_IMPORTED_MODULE_0__vue_swimlane___default.a)
  }
}

/* harmony default export */ __webpack_exports__["a"] = (vueSwimlane);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueSwimlane)
}


/***/ })
],[8]);
//# sourceMappingURL=app.01ba83626db810fd07fe.js.map