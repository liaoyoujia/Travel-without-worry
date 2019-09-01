import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Main from './layout/index.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      redirect: '/login',
      component: Main,
      children: [
        {
          path: 'index',
          name: 'home',
          component: () => import(/* webpackChunkName: "about" */ './views/home/Home.vue'),
          children: [
            {
              path: '/',
              name: 'homeIndex',
              component: () => import(/* webpackChunkName: "about" */ './views/home/HomeIndex.vue')
            },
            {
              path: 'detail',
              name: 'homeDetail',
              component: () => import(/* webpackChunkName: "about" */ './views/home/HomeDetail.vue')
            }
          ]
        },
        {
          path: 'history',
          name: 'history',
          component: () => import(/* webpackChunkName: "about" */ './views/history/History.vue'),
          children: [
            {
              path: '/',
              name: 'histoyIndex',
              component: () => import(/* webpackChunkName: "about" */ './views/history/HistoryIndex.vue')
            },
            {
              path: 'detail/:id',
              name: 'histoyDetail',
              component: () => import(/* webpackChunkName: "about" */ './views/history/HistoryDetail.vue')
            }
          ]
        },
        {
          path: 'traffic',
          name: 'traffic',
          component: () => import(/* webpackChunkName: "about" */ './views/Traffic.vue')
        },
        {
          path: 'my',
          name: 'my',
          component: () => import(/* webpackChunkName: "about" */ './views/my/My.vue'),
          children: [
            {
              path: '/',
              name: 'myIndex',
              component: () => import(/* webpackChunkName: "about" */ './views/my/MyIndex.vue')
            },
            {
              path: 'infor',
              name: 'myInfor',
              component: () => import(/* webpackChunkName: "about" */ './views/my/MyInfor.vue')
            }
          ]
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  // console.log(12312315534543534534)
  // if (to.name === 'login') {
  // } else {
  next()
  // }

})
export default router
