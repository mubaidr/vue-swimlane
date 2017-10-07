import vueSwimlaneComponent from './vue-swimlane'

var mixins = {
  methods: {}
}

const vueSwimlane = {
  install: function (Vue /*, options*/ ) {
    Vue.mixin(mixins)
    Vue.component(vueSwimlaneComponent.name, vueSwimlaneComponent)
  }
}

export default vueSwimlane
