<template>
  <div class="showcase-view">
    <div
      class="product-list"
      :class="{'gallery-view' : randomProductList.length > 3}"
    >
      <div
        v-for="product in randomProductList"
        :key="product.id"
        class="product-card"
        @click="router.push(`/product/${product.id}`)"
      >
        <div class="product-card-img">
          <img :src="`${product.cover}`" :alt="product.name">
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
import router from '@/router'
const { dispatch, getters } = useStore()

onMounted(() => dispatch('getProductsList'))

const productList = computed(() => getters.getProductList)
const randomProductList = computed(() => [...productList.value].splice(0, Math.floor(Math.random() * 10) + 1))

</script>

<style lang="scss" scoped>
  .product-list {
    display: flex;
    width: 100%;
    max-width: 100%;
    gap: 18px;
    overflow-x: scroll;
    .product-card {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background-color: var(--primary_color);
      color: white;
      border-radius: 8px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      flex: 1 0 calc(100% / 3 - 12px);

      .product-card-img {
        width: 100%;
        background: white;
        background-image: url('../assets/placeholder.webp');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
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

    &.gallery-view .product-card {
      flex-grow: 0;
    }
  }
</style>
