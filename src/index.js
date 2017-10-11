import vueSwimlaneComponent from './vue-swimlane'

const vueSwimlane = {
  install: function (Vue) {
    Vue.component(vueSwimlaneComponent.name, vueSwimlaneComponent)
  }
}

export default vueSwimlane

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueSwimlane)
}
