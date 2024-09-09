import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';

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
    path: '/catalog/:id',
    name: 'CatalogView',
    component: () => import(/* webpackChunkName: "catalog" */ '../views/catalog/CatalogView.vue'),
    props: true
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
  },
  {
    path: '/edit/:userId',
    name: 'EditView',
    component: () => import(/* webpackChunkName: "edit" */ '../views/user/EditView.vue'),
    props: true
  },
  {
    path: '/check',
    name: 'CheckView',
    component: () => import(/* webpackChunkName: "check" */ '../views/user/CheckView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
