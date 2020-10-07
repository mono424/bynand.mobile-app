import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'
import Wrapper from './pages/Wrapper'

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
  render: h => h('frame', [h(Wrapper)])
}).$start()
