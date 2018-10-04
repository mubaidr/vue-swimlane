import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import 'bulma-fluent'

// import vue-swimlane
import VueSwimlane from '../../component/index'

Vue.use(VueSwimlane)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
