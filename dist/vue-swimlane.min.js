var VueSwimlane = (function () {
  'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script = {
    name: 'VueSwimlane',

    props: {
      words: {
        type: Array,
        default: function () {
          return []
        },
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
        default: 1000,
      },
      transitionDelay: {
        type: Number,
        default: 500,
      },
      transition: {
        type: String,
        default: 'ease-out',
      },
      circular: {
        type: Boolean,
        default: false,
      },
      continous: {
        type: Boolean,
        default: false,
      },
      pauseOnHover: {
        type: Boolean,
        default: true,
      },
    },

    data: function data() {
      return {
        listTop: 0,
        isPaused: false,
        isMovingBackwards: false,
      }
    },

    computed: {
      listCount: function listCount() {
        return this.words.length
      },

      fontSize: function fontSize() {
        // scale from 16px font size
        return 16 * this.scale
      },

      itemHeight: function itemHeight() {
        return this.fontSize * 1.5
      },

      listHeight: function listHeight() {
        return this.itemHeight * this.listCount
      },

      listParentHeight: function listParentHeight() {
        return this.itemHeight * this.rows
      },

      itemStyle: function itemStyle() {
        return ("font-size: " + (this.fontSize) + "px;\n              height: " + (this.itemHeight) + "px;")
      },

      listStyle: function listStyle() {
        return ("height: " + (this.listHeight) + "px;\n              transition-delay: " + (this.transitionDelay) + "ms;\n              transition-duration: " + (this.transitionDuration) + "ms;\n              transition-timing-function: " + (this.transition) + ";\n              will-change: transform;\n              transform: translateY(" + (this.listTop) + "px)")
      },

      listParentStyle: function listParentStyle() {
        return ("height: " + (this.listParentHeight) + "px;")
      },
    },

    mounted: function mounted() {
      setTimeout(this.updateState, this.transitionDelay);
    },

    methods: {
      updateState: function updateState() {
        var this$1 = this;

        // check if enough keywords or is not paused
        if (this.listCount <= this.rows) { return }
        if (this.isPaused) { return }

        // update list state
        if (this.isMovingBackwards) {
          this.listTop += this.itemHeight;
        } else {
          this.listTop -= this.itemHeight;
        }

        if (this.circular) {
          // cricular animation
          if (this.listTop < this.rows * this.itemHeight - this.listHeight) {
            this.listTop += this.itemHeight * (this.rows - 1);
            this.isMovingBackwards = !this.isMovingBackwards;
          }

          if (this.listTop > -this.itemHeight) {
            this.listTop = 0;
            this.isMovingBackwards = !this.isMovingBackwards;
          }
        } else if (this.continous) ;
        // one way animation
        else if (this.listTop < this.rows * this.itemHeight - this.listHeight) {
          this.listTop = 0;
        }

        // set time out for next update
        this.timeOutId = window.setTimeout(function () {
          this$1.updateState();
        }, this.transitionDuration + this.transitionDelay);
      },

      toggleAnimation: function toggleAnimation() {
        if (this.pauseOnHover) {
          this.isPaused = !this.isPaused;

          if (this.isPaused) {
            clearTimeout(this.timeOutId);
          } else {
            this.updateState();
          }
        }
      },
    },
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }
  var HEAD = document.head || document.getElementsByTagName('head')[0];
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) { style.element.setAttribute('media', css.media); }
        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) { style.element.removeChild(nodes[index]); }
        if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }else { style.element.appendChild(textNode); }
      }
    }
  }

  var browser = createInjector;

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
        on: { mouseenter: _vm.toggleAnimation, mouseleave: _vm.toggleAnimation }
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
          }),
          0
        )
      ]
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) { return }
      inject("data-v-5036ff00_0", { source: "\n.vue-swimlane {\n  overflow: hidden !important;\n}\n.vue-swimlane ul {\n  list-style: none !important;\n  overflow: hidden !important;\n  transition-property: transform !important;\n}\n.vue-swimlane ul li {\n  text-align: center;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n", map: {"version":3,"sources":["D:\\current\\vue-swimlane\\src\\component\\vue-swimlane.vue"],"names":[],"mappings":";AA2KA;EACA,2BAAA;AACA;AAEA;EACA,2BAAA;EACA,2BAAA;EACA,yCAAA;AACA;AAEA;EACA,kBAAA;EACA,qBAAA;EACA,oBAAA;AACA","file":"vue-swimlane.vue","sourcesContent":["<template>\n  <div\n    :style=\"listParentStyle\"\n    class=\"vue-swimlane\"\n    @mouseenter=\"toggleAnimation\"\n    @mouseleave=\"toggleAnimation\"\n  >\n    <ul :style=\"listStyle\">\n      <li\n        v-for=\"(word, index) in words\"\n        :key=\"index\"\n        :style=\"itemStyle\"\n        v-html=\"word\"\n      />\n    </ul>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'VueSwimlane',\n\n  props: {\n    words: {\n      type: Array,\n      default: () => {\n        return []\n      },\n      required: true,\n    },\n    rows: {\n      type: Number,\n      default: 1,\n    },\n    scale: {\n      type: Number,\n      default: 1,\n    },\n    transitionDuration: {\n      type: Number,\n      default: 1000,\n    },\n    transitionDelay: {\n      type: Number,\n      default: 500,\n    },\n    transition: {\n      type: String,\n      default: 'ease-out',\n    },\n    circular: {\n      type: Boolean,\n      default: false,\n    },\n    continous: {\n      type: Boolean,\n      default: false,\n    },\n    pauseOnHover: {\n      type: Boolean,\n      default: true,\n    },\n  },\n\n  data() {\n    return {\n      listTop: 0,\n      isPaused: false,\n      isMovingBackwards: false,\n    }\n  },\n\n  computed: {\n    listCount() {\n      return this.words.length\n    },\n\n    fontSize() {\n      // scale from 16px font size\n      return 16 * this.scale\n    },\n\n    itemHeight() {\n      return this.fontSize * 1.5\n    },\n\n    listHeight() {\n      return this.itemHeight * this.listCount\n    },\n\n    listParentHeight() {\n      return this.itemHeight * this.rows\n    },\n\n    itemStyle() {\n      return `font-size: ${this.fontSize}px;\n              height: ${this.itemHeight}px;`\n    },\n\n    listStyle() {\n      return `height: ${this.listHeight}px;\n              transition-delay: ${this.transitionDelay}ms;\n              transition-duration: ${this.transitionDuration}ms;\n              transition-timing-function: ${this.transition};\n              will-change: transform;\n              transform: translateY(${this.listTop}px)`\n    },\n\n    listParentStyle() {\n      return `height: ${this.listParentHeight}px;`\n    },\n  },\n\n  mounted() {\n    setTimeout(this.updateState, this.transitionDelay)\n  },\n\n  methods: {\n    updateState() {\n      // check if enough keywords or is not paused\n      if (this.listCount <= this.rows) return\n      if (this.isPaused) return\n\n      // update list state\n      if (this.isMovingBackwards) {\n        this.listTop += this.itemHeight\n      } else {\n        this.listTop -= this.itemHeight\n      }\n\n      if (this.circular) {\n        // cricular animation\n        if (this.listTop < this.rows * this.itemHeight - this.listHeight) {\n          this.listTop += this.itemHeight * (this.rows - 1)\n          this.isMovingBackwards = !this.isMovingBackwards\n        }\n\n        if (this.listTop > -this.itemHeight) {\n          this.listTop = 0\n          this.isMovingBackwards = !this.isMovingBackwards\n        }\n      } else if (this.continous) {\n        // continous animation\n      }\n      // one way animation\n      else if (this.listTop < this.rows * this.itemHeight - this.listHeight) {\n        this.listTop = 0\n      }\n\n      // set time out for next update\n      this.timeOutId = window.setTimeout(() => {\n        this.updateState()\n      }, this.transitionDuration + this.transitionDelay)\n    },\n\n    toggleAnimation() {\n      if (this.pauseOnHover) {\n        this.isPaused = !this.isPaused\n\n        if (this.isPaused) {\n          clearTimeout(this.timeOutId)\n        } else {\n          this.updateState()\n        }\n      }\n    },\n  },\n}\n</script>\n\n<style>\n.vue-swimlane {\n  overflow: hidden !important;\n}\n\n.vue-swimlane ul {\n  list-style: none !important;\n  overflow: hidden !important;\n  transition-property: transform !important;\n}\n\n.vue-swimlane ul li {\n  text-align: center;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject SSR */
    

    
    var vueSwimlaneComponent = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      browser,
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

}());
