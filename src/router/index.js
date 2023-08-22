import { createRouter, createWebHistory } from 'vue-router'
import ShowcaseView from '../views/ShowcaseView.vue'

const routes = [
  {
    path: '/',
    name: 'showcase',
    component: ShowcaseView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
