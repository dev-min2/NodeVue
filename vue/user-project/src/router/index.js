import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'
import UserInfo from '../views/UserInfo.vue'
import UserInsert from '../views/UserInsert.vue'
import UserModify from '../views/UserModify.vue'

const routes = [
  {
    path: '/',
    name: 'userList',
    component: UserList
  },
  {
    path: '/userInfo',
    name : 'userInfo',
    component : UserInfo
  },
  {
    path: '/userInsert',
    name: "userInsert",
    component: UserInsert
  },
  {
    path: '/userModify',
    name: "userModify",
    component: UserModify,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
