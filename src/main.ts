import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import {library} from "@fortawesome/fontawesome-svg-core"
import * as fa from "@fortawesome/free-solid-svg-icons"

library.add(fa.faCartPlus)
library.add(fa.faCheck)
library.add(fa.faInfo)
library.add(fa.faPlay)
library.add(fa.faUser)
library.add(fa.faUserEdit)
library.add(fa.faUserPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
