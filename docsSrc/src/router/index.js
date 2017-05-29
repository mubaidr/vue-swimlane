import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Options from '@/components/Options'
import Demos from '@/components/Demos'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/options',
    name: 'Options',
    component: Options
  },
  {
    path: '/demos',
    name: 'Demos',
    component: Demos
  },
  {
    path: '*',
    redirect: '/'
  }
  ]
})
