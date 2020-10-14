import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'
import Navigator from 'nativescript-vue-navigator'

import App from './App'

import store from './vuex/store'
import { routes } from './routes/index'

import AuthService from './services/auth'

Vue.use(Navigator, { routes })

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement(
  'CardView',
  () => require('@nstudio/nativescript-cardview').CardView
);

AuthService.init();

Vue.prototype.$auth = AuthService;

new Vue({
  store,
  render: h => h(App)
}).$start()
