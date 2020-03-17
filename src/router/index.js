import Vue from 'vue'
import VueRouter from 'vue-router'
import ExampleMask from '../views/ExampleMask.vue'
import ExampleReplaceMask from '../views/ExampleReplaceMask.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ExampleMask',
    component: ExampleMask
  },
  {
    path: '/ExampleReplaceMask',
    name: 'ExampleReplaceMask',
    component: ExampleReplaceMask
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
