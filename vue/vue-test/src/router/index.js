import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import myProduct from '../views/ListBinding.vue'
import ifTest from '../views/IF.vue'
import onEvent from '../views/OnEvent.vue'
import option from '../views/computedWatch.vue'

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
  },
  {
    path : '/product',
    name : myProduct,
    component : myProduct
  },
  {
    path : '/ifTest',
    name : ifTest,
    component : ifTest
  },
  {
    path : '/onEvent',
    name : onEvent,
    component : onEvent
  },
  {
    path : '/option',
    name : option,
    component : option
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes // 라우팅할 목록들
})

export default router
