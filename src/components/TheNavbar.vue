<template>
  <nav class="navbar">
    <router-link to="/" class="showcase_link">Showcase</router-link>
    <cart-modal></cart-modal>
  </nav>
</template>

<script setup>
import CartModal from '../components/CartModal.vue'
</script>

<style lang="scss" scoped>

.navbar {
  border-bottom: 1px solid var(--primary_color);
  padding-bottom: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  
  .showcase_link {
    font-size: 2em;
    font-weight: bold;
    text-decoration: none;
    color: var(--primary_color);
    text-transform: uppercase;
    &:hover {
      text-decoration: underline;
    }
  }
}

</style>
