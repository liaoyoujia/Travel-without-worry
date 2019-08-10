import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './layout/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'main',
    //   component: Main,
    //   children: [
    //     {
    //       path: '',
    //       component: Login
    //     },
    //     {
    //       path: 'register',
    //       name: 'register',
    //       component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
    //     },
    //     {
    //       path: 'home',
    //       name: 'home',
    //       component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    //     }
    //   ]
    // }
    // {
    //   path: '/',
    //   name: 'login',
    //   component: Login
    // },
    // {
    // path: '/home',
    // name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    // },
    // {
    //   path: '/register',
    //   name: 'register',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
    // }
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/login',
      component: Main,
      children: [
        {
          path: 'index',
          name: 'home',
          component: () => import(/* webpackChunkName: "about" */ './views/home/Home.vue')
        },
        {
          path: 'history',
          name: 'history',
          component: () => import(/* webpackChunkName: "about" */ './views/History.vue')
        },
        {
          path: 'traffic',
          name: 'traffic',
          component: () => import(/* webpackChunkName: "about" */ './views/Traffic.vue')
        },
        {
          path: 'my',
          name: 'my',
          component: () => import(/* webpackChunkName: "about" */ './views/My.vue')
        }
      ]
    }
  ]
})
