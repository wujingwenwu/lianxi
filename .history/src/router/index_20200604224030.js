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
      meta:{
        title:'首页'
      },
      children:[
        {
          path: 'child',
          name: 'child',
          component: () => import('../views/child/Child'),
          meta:{
            title:'头部页'
          }
        }
        
      ]
    },
    {
      path:'/sogin',
      name:'sogin',
      component:()=> import('../views/sogin/Sogin')
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
let whitepath = ['/sogion','/reginter','/findpwd']
router.beforeEach((to,from,next) =>{
  document.title=to.meta.title
  let  user = JSON.parse(localStorage.getItem('user'))
  if(whitepath.includes(to.path)) {
    next()
  } else{
    user? next():next('/sogin')
  }
 
})
export default router
