import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    name: 'MainView',
    component: () => import(/* webpackChunkName: "main" */ '../views/MainView.vue')
  },
  {
    path: '/catalog',
    name: 'CatalogView',
    component: () => import(/* webpackChunkName: "catalog" */ '../views/catalog/CatalogView.vue')
  },
  {
    path: '/join',
    name: 'JoinView',
    component: () => import(/* webpackChunkName: "join" */ '../views/user/JoinView.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import(/* webpackChunkName: "login" */ '../views/user/LoginView.vue')
  },
  {
    path: '/myPage',
    name: 'MyView',
    component: () => import(/* webpackChunkName: "myPage" */ '../views/user/MyView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
