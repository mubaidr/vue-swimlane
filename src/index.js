import vueSliderComponent from './vue-slider'

const vueSlider = {
  install (Vue, options) {
    Vue.component(vueSliderComponent.name, vueSliderComponent)
  }
}

export default vueSlider
