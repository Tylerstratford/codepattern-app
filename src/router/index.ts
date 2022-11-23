import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categories',
    name: 'CategoriesView',
    component: () => import('../views/CategoriesView.vue')
  },
  {
    path: '/products',
    name: 'ProductsView',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/contacts',
    name: 'ContactsView',
    component: () => import('../views/ContactsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
