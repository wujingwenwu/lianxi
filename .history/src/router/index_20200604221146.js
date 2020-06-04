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
      name: 'Parent',
      component: () => import('../views/paeent/Parent'),
      children:[
        {
          path: 'child',
          name: 'child',
          component: () => import('../views/child/Child'),
          meta:{
            title:'首页'
          }
        }
        
      ]
    },
    {
      path: '/detail',
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
    path:'*',
    component: () => import('../views/err/Err')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title= to.meta.title
  next()
})
export default router
