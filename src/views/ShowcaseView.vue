<template>
  <div class="showcase-view">
    <div class="product-list">

      <div
        v-for="product in randomProductList"
        :key="product.id"
        class="product-card"
        :class="extraClass"
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
import { cardExtraClassGenerator } from '../helpers'
import router from '@/router'
const { dispatch, getters } = useStore()

onMounted(() => dispatch('getProductsList'))

const productList = computed(() => getters.getProductList)
const randomProductList = computed(() => [...productList.value].splice(0, Math.floor(Math.random() * 10) + 1))
const extraClass = computed(() => cardExtraClassGenerator(randomProductList.value.length))

</script>

<style lang="scss" scoped>
  .product-list {
    display: flex;
    overflow-x: scroll;
    width: 100%;
    max-width: 100%;
    gap: 18px;

    .product-card {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background-color: var(--primary_color);
      color: white;
      border-radius: 8px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      
      &.full_width-card {
        flex: 100%;
      }
      &.half_width-card {
        flex: 0 0 calc(100% / 2 - 9px);
      }
      &.gallery-card {
        flex: 0 0 calc(100% / 3 - 12px);
      }

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
  }
</style>
