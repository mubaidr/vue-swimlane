import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Demo from '@/components/Demo'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '*',
    redirect: '/'
  }
  ]
})
