import { createStore } from 'vuex'
import { getProductListRequest } from '../api'

export default createStore({
  state: {
    productList: []
  },
  getters: {
    getProductList: state => state.productList
  },
  mutations: {
    setProductList(state, productList) {
      state.productList = productList
    }
  },
  actions: {
    async getProductsList({ commit }) {
      try {
        const response = await getProductListRequest()
        commit('setProductList', response)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
  },
  modules: {
  }
})
