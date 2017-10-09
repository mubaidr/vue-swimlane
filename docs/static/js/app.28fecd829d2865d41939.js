webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src___ = __webpack_require__(21);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1__src___["a" /* default */]);

/***/ }),
/* 3 */
/***/ (function(module, exports) {



/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(17),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pollyfills__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pollyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pollyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugins__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_css_bootstrap_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_css_index_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_css_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_css_index_css__);






__WEBPACK_IMPORTED_MODULE_2_vue__["a" /* default */].config.productionTip = false;

new __WEBPACK_IMPORTED_MODULE_2_vue__["a" /* default */]({
  el: '#app',
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_3__App___default.a);
  }
});




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Home__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Home__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    home: __WEBPACK_IMPORTED_MODULE_0__components_Home___default.a
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'home',
  data: function data() {
    return {
      content: ['Awesome', 'swimlane', 'plugin', 'for', 'awesome', 'VueJS'],
      options: {
        text: 'This plugin displays a list of words as a Swimlane',
        circular: true,
        rows: 3,
        scale: 2,
        transitionDuration: 2000,
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
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(15),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  "data-v-790d32de",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('vue-swimlane', {
    staticClass: "demo-swimlane",
    attrs: {
      "words": _vm.content,
      "rows": 1
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_vm._v("How to use")]), _vm._v(" "), _c('h4', [_vm._v("Install")]), _vm._v(" "), _c('code', [_vm._v("npm install vue-swimlane --save")]), _vm._v(" "), _c('h4', [_vm._v("Use")]), _vm._v(" "), _c('code', [_vm._v("\n    <vue-swimlane :words=\"wordsArray\" :circular=\"circular\" :rows=\"rows\" :scale=\"scale\" :transitionDuration=\"duration\" :transitionDelay=\"delay\" :transition=\"transition\"></vue-swimlane>\n  ")]), _vm._v(" "), _c('h3', [_vm._v("Playground")]), _vm._v(" "), _c('p', [_vm._v("Change options below to see the effect. ")]), _vm._v(" "), _c('p', [_c('vue-swimlane', {
    staticClass: "playground-swimlane",
    attrs: {
      "words": _vm.textArray,
      "circular": _vm.options.circular,
      "rows": _vm.options.rows,
      "scale": _vm.options.scale,
      "transitionDuration": _vm.options.transitionDuration,
      "transitionDelay": _vm.options.transitionDelay,
      "transition": _vm.options.transition
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
  })])])])])]), _vm._v(" "), _vm._m(0)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-6"
  }, [_c('ul', {
    staticClass: "list-group"
  }, [_c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v("words")]), _vm._v(" - string[] -\n          "), _c('i', [_vm._v("required")]), _vm._v(": Array of tags or words to be used on display.")]), _vm._v(" "), _c('li', {
    staticClass: "list-group-item"
  }, [_c('strong', [_vm._v("circular")]), _vm._v(" - bool (Default: false): If true, list starts from the top after completion.")]), _vm._v(" "), _c('li', {
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
}]}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vue-swimlane",
    style: (_vm.listParentStyle)
  }, [_c('ul', {
    style: (_vm.listStyle)
  }, _vm._l((_vm.words), function(word) {
    return _c('li', {
      key: word,
      style: (_vm.itemStyle)
    }, [_vm._v(_vm._s(_vm.capitalize(word)))])
  })), _vm._v(" "), _c('pre', [_vm._v(_vm._s(_vm.itemScaleNormalized))])])
},staticRenderFns: []}

/***/ }),
/* 17 */
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
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

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
      //TODO add option to pause on mouse hover
    } },
  data() {
    return {
      fontSize: 16,
      listTop: 0,
      moveUp: true,
      resetOnNext: false,
      padding: 16
    };
  },
  computed: {
    transitionDelayNormalized() {
      return Math.abs(this.transitionDelay || 250);
    },
    transitionDurationNormalized() {
      return Math.abs(this.transitionDuration || 250);
    },
    itemScaleNormalized() {
      return Math.abs(this.scale || 1);
    },
    itemRowsNormalized() {
      return this.rows > this.words.length ? this.words.length : Math.abs(this.rows || 1);
    },
    itemHeight() {
      return this.fontSize * this.itemScaleNormalized + this.padding;
    },
    itemStyle() {
      return `font-size: ${this.itemHeight - this.padding / 2}px!important; line-height: ${this.itemHeight}px!important;`;
    },
    listHeight() {
      return this.itemHeight * this.words.length;
    },
    listStyle() {
      return `-webkit-transition: transform ${this.transitionDurationNormalized}ms ${this.transition}!important;
      -moz-transition: transform  ${this.transitionDurationNormalized}ms ${this.transition}!important;
      transition: transform  ${this.transitionDurationNormalized}ms ${this.transition}!important;
      transform: translateY(${this.listTop}px)!important;`;
    },
    listParentStyle() {
      return `height: ${this.itemHeight * this.itemRowsNormalized}px!important;`;
    }
  },
  methods: {
    capitalize(str) {
      return str.replace(/\b\w/g, l => l.toUpperCase());
    },
    updateState() {
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
    animate() {
      this.updateState();
      setTimeout(() => {
        this.animate();
      }, this.transitionDelayNormalized + this.transitionDurationNormalized);
    }
  },
  mounted() {
    if (this.words.length > this.itemRowsNormalized) {
      this.$nextTick(() => {
        setTimeout(() => {
          this.animate();
        }, this.transitionDelayNormalized);
      });
    }
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_swimlane__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_swimlane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_swimlane__);


var mixins = {
  methods: {}
}

const vueSwimlane = {
  install: function (Vue /*, options*/ ) {
    Vue.mixin(mixins)
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__vue_swimlane___default.a.name, __WEBPACK_IMPORTED_MODULE_0__vue_swimlane___default.a)
  }
}

/* harmony default export */ __webpack_exports__["a"] = (vueSwimlane);


/***/ })
],[7]);
//# sourceMappingURL=app.28fecd829d2865d41939.js.map