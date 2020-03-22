import Vue from 'vue'
import Vuex from 'vuex'
import userModule from '@/store/userModule'
import editShopingListModule from '@/store/editShopingListModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule,
    editShopingListModule
  }
})
