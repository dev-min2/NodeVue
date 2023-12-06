import { createRouter, createWebHistory } from 'vue-router'
import EmpListView from '../views/EmpListView.vue'
import EmpInsertView from '../views/EmpInsertView.vue'

const routes = [
  {
    path: '/',
    name: 'empList',
    component: EmpListView
  },
  {
    path : '/empInsertForm',
    name : 'empInsertForm',
    component : EmpInsertView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
