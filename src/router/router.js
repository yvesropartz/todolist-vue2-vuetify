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
    path: '/logout',
    name: 'logout',
    component: () => import('../views/Logout')
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
  path: '/Team',
  name: 'team',
  component: () => import('../views/Team.vue')
}, 
{
  path: '/user',
  name: 'user',
  component: () => import('../views/ConnectOrCreateUser')
}, 
{
  path: '/todolist',
  name: 'todolist',
  component: () => import('../views/TodoList')
}, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
