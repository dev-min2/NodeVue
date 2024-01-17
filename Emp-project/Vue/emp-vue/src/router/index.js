import { createRouter, createWebHistory } from 'vue-router'
import EmpListView from '../views/EmpListView.vue'
import EmpInsertView from '../views/EmpInsertView.vue'
import EmpView from '../views/EmpView.vue'
import EmpUpdateView from '../views/EmpUpdateView.vue'
import EmpForm from '../views/EmpFormView.vue'

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
  },
  {
    path : '/empView',
    name : 'empView',
    component : EmpView
  },
  {
    path : "/empUpdate",
    name : 'empUpdate',
    component : EmpUpdateView
  },
  {
    path : "/empForm",
    name : 'empForm',
    component : EmpForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
