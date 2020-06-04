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
      name: 'detail',
      component: () => import('../views/detail/Detail')
    },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  
  {
    path: '/parent',
    name: 'Parent',
    component: () => import('../views/paeent/Parent'),
    children:[
      {
        path: 'child',
        name: 'child',
        component: () => import('../views/child/Child'),
      }
      
    ]
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
