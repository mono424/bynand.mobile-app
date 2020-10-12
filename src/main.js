import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'

import Main from './Main'
import router from './router'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
import store from './store'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement(
  'CardView',
  () => require('@nstudio/nativescript-cardview').CardView
);

new Vue({
  store,
  router
  render: h => h('frame', [h(Main)])
}).$start()
