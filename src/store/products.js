import { getProductsListRequest, getProductRequest } from '../api'

export default {
  state: {
    productList: [],
    product: {}
  },
  getters: {
    getProductList: state => state.productList,
    getProduct: state => state.product
  },
  mutations: {
    setProductList(state, productList) {
      state.productList = productList
    },
    setProduct(state, product) {
      state.product = product
    }
  },
  actions: {
    async getProductsList({ commit }) {
      try {
        const response = await getProductsListRequest()
        commit('setProductList', response)
      } catch (error) {
        console.error('Error fetching products list:', error)
      }
    },
    async getProduct({ commit }, id) {
      try {
        const response = await getProductRequest(id)
        commit('setProduct', response)
      } catch (error) {
        console.error('Error fetching product:', error)
      }
    }
  }
}
