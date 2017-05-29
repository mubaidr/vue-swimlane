import Vue from 'vue'
import App from './App'
import router from './router'

import './pollyfills'
import './vue-material'
import './plugins'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import './assets/css/index.css'
