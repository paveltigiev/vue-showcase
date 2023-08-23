<template>
  <div class="btn cart_btn" @click="isDialogActive = true">
    {{ cartButtontext }}
  </div>
  <Teleport to="body">
    <div class="backdrop" @click="isDialogActive = false" v-if="isDialogActive">
      <div class="modal" v-if="isDialogActive">
        <div class="modal-header">
          <div class="modal-title">
            Cart
            <span class="btn print_btn" @click="printCart">🖨️</span>
          </div>
          <div class="btn close_btn" @click="isDialogActive = false">✖️</div>
        </div>
        <div class="cart">
          <div
            class="cart-item"
            v-for="item in cartItems"
            :key="item.id"
          >
            <div class="cart-item-name">
              {{ item.name }}
              <span class="price">{{ item.price }} $</span>
            </div>
            <div class="cart-item-quantity">
              <div class="btn" @click="addOne(item.id)">➕</div>
              <div class="value">{{ item.quantity }}</div>
              <div class="btn" @click="removeOne(item.id)">{{ item.quantity > 1 ? '➖' : '✖️' }}</div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="btn primary" v-if="cartItems.length > 0">Complete order</div>
          <h1 v-else>There's nothing. Add something.</h1>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
const { commit, getters } = useStore()
const cartItems = computed(() => getters.getCartItems)
const cartButtontext = computed(() => cartItems.value.length > 0 ? `${cartItems.value.length} items in the cart`/*simplified count*/ : 'cart is epmty')
const isDialogActive = ref(false)

onMounted(() => {
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || []
  commit('setCartItems', storedCartItems)
})

watch(() => cartItems.value, newCartItems => localStorage.setItem('cartItems', JSON.stringify(newCartItems)))

const addOne = id => commit('incrementCartItemQuantity', id)
const removeOne = id => commit('decrementCartItemQuantity', id)

const printCart = () => {
  const cartContent = cartItems.value
    .map(item => `${item.name} ... ${item.quantity}pcs`)
    .join('\n')
  const printWindow = window.open('', '_blank')
  printWindow.document.write(`<pre>${cartContent}</pre>`)
  printWindow.print()
}

</script>

<style lang="scss" scoped>
.cart_btn {
  border: 1px solid var(--primary_color);
  color: var(--primary_color);
  text-transform: uppercase;
  padding: 4px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
}
.modal {
  background: #fff;
  color: #000000;
  width: 600px;
  z-index: 999;
  border-radius: 8px;
  padding: 16px;

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--primary_color);
    .modal-title {
      font-size: 2em;
    }
    .print_btn {
      margin-left: 8px;
    }
    .close_btn {
      font-size: 1.5em;
    }
  }
  .cart {
    display: flex;
    flex-direction: column;
    gap: 16px;
    .cart-item {
      display: flex;
      justify-content: space-between;
      font-size: 1.5em;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--bg_color);
      &:last-child {
        border-bottom: none;
      }
      .cart-item-name {
        .price {
          font-size: 0.6em;
        }
      }
      .cart-item-quantity {
        display: flex;
        align-items: center;
        border: 1px solid var(--bg_color);
        border-radius: 8px;
        .value {
          width: 26px;
          text-align: center;
          padding: 2px 4px;
          border-left: 1px solid var(--bg_color);
          border-right: 1px solid var(--bg_color);
        }
        .btn {
          padding: 2px 4px;
        }
      }
    }
  }
  .modal-footer {
    margin-top: 16px;
  }
}
.backdrop {
  position: fixed;
  width: 100%;
  top: 0;
  height: 100vh;
  background: rgba($color: #000000, $alpha: .5);
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
