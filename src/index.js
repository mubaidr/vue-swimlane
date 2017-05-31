import vueSliderComponent from './vue-text-slider'

var mixins = {
  methods: {}
}

const vueSlider = {
  install (Vue, options) {
    Vue.mixin(mixins)
    Vue.component(vueSliderComponent.name, vueSliderComponent)
  }
}

export default vueSlider
