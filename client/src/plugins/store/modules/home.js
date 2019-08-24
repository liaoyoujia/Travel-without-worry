import * as types from '../mutations-types'

export default {
  state: {
    // id: '900909090'
    tabIndexs:0
  },
  getters: {
    // id: state => state.id
  },
  mutations: {
    setTabIndex(state, data) {
      state.tabIndexs = data
    }
  },
  actions: {
    // setId (store, data) {
    //   store.commit(types.SET_ID, data)
    // }
  }

}
