import Vue from 'nativescript-vue'

import NSVueRouter from 'nativescript-vue-router-ns'

import Dashboard from '../pages/App/index'
import Login from '../pages/Login/index'

Vue.use(NSVueRouter)

const routes = [
  {
    name: 'dashboard.index',
    component: Dashboard,
    meta: { auth: true }
  },
  {
    name: 'login.index',
    component: Login,
    meta: { guest: true }
  }
]

const router = new NSVueRouter({
  ignoreSame,
  routes,
  verbose: TNS_ENV !== 'production'
})

export default router