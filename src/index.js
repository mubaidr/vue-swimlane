import vueSliderComponent from './vue-swimlane'

var mixins = {
  methods: {}
}

const vueSlider = {
  install: function (Vue, options) {
    Vue.mixin(mixins)
    Vue.component(vueSliderComponent.name, vueSliderComponent)
  }
}

export default vueSlider
