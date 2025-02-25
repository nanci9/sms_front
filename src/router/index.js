import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import Business from '../views/business/index.vue'
import Welfare from '../views/welfare/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/business',
    name: 'Business',
    component: Business
  },
  {
    path: '/welfare',
    name: 'Welfare',
    component: Welfare
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
