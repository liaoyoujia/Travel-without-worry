import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './plugins/store/index'
import echarts from 'echarts'
import Axios from './plugins/axios/index.js'
import Moment from 'moment'
import './plugins/vant/index'
import 'amfe-flexible/index'
import './styles/reset.scss'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = Axios
Vue.prototype.$moment = Moment
let vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
export default vue
