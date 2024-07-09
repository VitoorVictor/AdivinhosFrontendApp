import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import CreateView from '../views/vinhos/CreateView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { showHomeBar: true },
  },
  {
    path: '/vinhos/create',
    name: 'vinhos.create',
    component: CreateView,
    meta: { showHomeBar: true },
    
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { showHomeBar: false },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router