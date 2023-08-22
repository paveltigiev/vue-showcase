<template>
  <div class="showcase-view">
    <div class="product-list">

      <div
        v-for="product in randomProductList"
        :key="product.id"
        class="product-card"
        :class="extraClass"
      >
        <div class="product-card-img">
          <img src="`product.cover`" :alt="product.name">
        </div>  
        <div class="product-card-header">
          <div class="product-card-name">
            {{ product.name }}
          </div>
          <div class="product-card-price">
            {{ product.price }} $
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

onMounted(() => store.dispatch('getProductsList'))

const productList = computed(() => store.getters.getProductList)
const randomProductList = computed(() => [...productList.value].splice(0, Math.floor(Math.random() * 10) + 1))

const extraClass = computed(() => randomProductList.value.length === 1 ? 'single-card' : 'gallery-card')

</script>

<style lang="scss" scoped>
  .product-list {
    display: flex;
    overflow-x: scroll;
    width: 100%;
    max-width: 100%;
    gap: 16px;

    .product-card {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background-color: var(--primary_color);
      color: white;
      border-radius: 8px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      
      &.single-card {
        flex: 100%;
      }
      
      &.gallery-card {
        flex: 0 0 calc(100% / 2 - 8px);
      }

      .product-card-img {
        width: 100%;
        background: rgb(246, 246, 246);
        background-image: url('../assets/placeholder.webp');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;

        img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
          aspect-ratio: 4/3;
        }
      }

      .product-card-header {
        display: flex;
        justify-content: space-between;
        padding: 16px;
        font-size: 1.2em;
        .product-card-name {
          text-transform: capitalize;
        }
        .product-card-price {
          font-weight: 700;
        }
      }
    }
  }
</style>
