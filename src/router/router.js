import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'

Vue.use(VueRouter)

// on peut importer directement dans la route 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Todo
  },
  {
    path: '/login/:create',
    name: 'login',
    component: () => import('../views/Login')
  },
  
{
  path: '/About',
  name: 'about',
  component: () => import('../views/About.vue')
}, 
{
  path: '/user',
  name: 'user',
  component: () => import('../views/ConnectOrCreateUser')
}, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
