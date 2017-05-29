import debounce from 'lodash.debounce'
import vueSliderComponent from './vue-slider'

var mixins = {
  methods: {
    _debounce: debounce
  }
}

const vueSlider = {
  install (Vue, options) {
    Vue.mixins(mixins)
    Vue.component(vueSliderComponent.name, vueSliderComponent)
  }
}

export default vueSlider
