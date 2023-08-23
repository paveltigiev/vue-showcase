<template>
  <div class="card-view">
    <div class="product-card">
      <div class="product-card-img">
        <img :src="`${product.cover}`" :alt="product.name">
      </div>
      <div class="product-card-sidebar">
        <div class="product-card-info">
          <div class="product-card-name">
            {{ product.name }}
          </div>
          <div class="product-card-price">
            Price: {{ product.price }} $
          </div>
          <div class="product-card-description">
            Description: {{ product.description }}
          </div>
        </div>
        <button class="btn primary" @click="addToCart()">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>

import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
const { dispatch, getters, commit } = useStore()
const route = useRoute()
const id = ref(route.params.id)

onMounted(() => dispatch('getProduct', id.value))
const product = computed(() => getters.getProduct)
const addToCart = () => commit('addCartItem', product.value)

</script>

<style lang="scss" scoped>

  .product-card {
    display: flex;
    flex-direction: row;
    gap: 32px;

    .product-card-img {
      width: calc(50% - 8px);
      background: white;
      background-image: url('../assets/placeholder.webp');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      border-radius: 8px;
    }

    .product-card-sidebar {
      width: calc(50% - 8px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .product-card-info {
        display: flex;
        flex-direction: column;
        gap: 16px;
        
        .product-card-name {
          text-transform: capitalize;
          font-size: 3em;
        }
        .product-card-price {
          font-size: 1.2em;
        }
        .product-card-description {
          font-size: 1.6em;
          line-height: 1.8em;
        }
      }
    }
  }
    
</style>
