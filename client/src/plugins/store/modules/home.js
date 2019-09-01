import * as types from '../mutations-types'
import vue from '@/main.js'
export default {
  state: {
    // id: '900909090'
    tabIndexs: 0,
    user: null
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    setTabIndex (state, data) {
      state.tabIndexs = data
    },
    setUser (state, data) {
      state.user = data
    }
  },
  actions: {
    async setUser ({ commit }, data) {
      let data1 = await vue.$axios.getLogin(data)
      commit('setUser', data1)
    }
  }

}
