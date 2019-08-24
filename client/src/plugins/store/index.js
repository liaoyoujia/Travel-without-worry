import Vue from 'vue'
import vuex from 'vuex'

/* 引入各部分组件 */
import home from './modules/home'
import trip from './modules/trip'
/* End 引入各部分组件 */

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    home,
    trip
  }
})
