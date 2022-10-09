import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeModule',
    component: () => import('../modules/HomeModule')
  },
  {
    path: '/category/:id',
    name: 'CategoryModule',
    component: () => import('../modules/CategoryModule')
  },
  {
    path: '/post/:id',
    name: 'PostModule',
    component: () => import('../modules/PostModule')
  },
  {
    path: '/admin',
    name: 'AdminModule',
    component: () => import('../modules/AdminModule')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
