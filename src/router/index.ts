import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/createList',
    name: 'CreateList',
    meta: {
      requiresAuth: true
    },
    // this page is for elderly or sick people to enter their needed supplies
    component: () => import('../views/CreateList.vue')
  },
  {
    path: '/buyList',
    name: 'BuyList',
    meta: {
      requiresAuth: true
    },
    // this page is a check list for people who buy for others
    component: () => import('../views/BuyList.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "about" */ '../views/Logout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name === 'Logout'){
    // Notify the store about the logout
    store.dispatch("userModule/logout");
    next();
  } else if(to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.getters['userModule/isLoggedIn']) {
          // Redirect to login when the user is not logged in
          next({
              path: '/login',
              params: { nextUrl: to.fullPath }
          })
      } else {
        next()
      }
  }else {
      next()
  }
})

export default router
