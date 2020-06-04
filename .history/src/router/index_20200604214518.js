import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
  const routes = [
    {
     path:'/home',
     redirect:'/'
    },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/detail/Detail')
  },
  {
    path: '/parent',
    name: 'Parent',
    component: () => import('../views/paeent/Parent')
  },
  {
    path:'*',
    component: () => import('../views/err/Err')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
