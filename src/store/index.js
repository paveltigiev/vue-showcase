import { createStore } from 'vuex'
import products from './products'
import cart from './cart'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
		products,
    cart
  }
})
