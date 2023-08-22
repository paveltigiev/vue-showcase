export default {
  state: {
    cartItems: []
  },
  getters: {
    getCartItems: state => state.cartItems,
    getCartItemById: state => id => state.cartItems.find(item => item.id === id)
  },
  mutations: {
    addCartItem(state, cartItem) {
      const existingCartItem = state.cartItems.find(item => item.id === cartItem.id)
      if (existingCartItem) {
        existingCartItem.quantity++
      } else {
        state.cartItems.push({ ...cartItem, quantity: 1 })
      }
      this.commit('saveCartToLocalStorage')
    },
    incrementCartItemQuantity(state, id) {
      const cartItem = state.cartItems.find(item => item.id === id)
      cartItem.quantity++
      this.commit('saveCartToLocalStorage')
    },
    decrementCartItemQuantity(state, id) {
      const cartItem = state.cartItems.find(item => item.id === id)
      if (cartItem.quantity > 1) {
        cartItem.quantity--
      } else {
        const cartItemIndex = state.cartItems.findIndex(item => item.id === id)
        if (cartItemIndex !== -1) {
          state.cartItems.splice(cartItemIndex, 1)
        }
      }
      this.commit('saveCartToLocalStorage')
    },
    setCartItems(state, cartItems) {
      state.cartItems = cartItems
    },
    saveCartToLocalStorage(state) {
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    }
  },
  actions: {
  }
};
