import { createRouter, createWebHistory } from 'vue-router'
import ShowcaseView from '../views/ShowcaseView.vue'

const routes = [
  {
    path: '/',
    name: 'showcase',
    component: ShowcaseView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
