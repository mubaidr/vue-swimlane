import vueSwimlaneComponent from './vue-swimlane.vue'

const VueSwimlane = {
  install(Vue) {
    Vue.component(vueSwimlaneComponent.name, vueSwimlaneComponent)
  },
}

export default VueSwimlane

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueSwimlane)
}
