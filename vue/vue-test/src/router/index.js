import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/binding',
    name: 'binding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/A.vue')
    component : DataBinding
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes // 라우팅할 목록들
})

export default router
