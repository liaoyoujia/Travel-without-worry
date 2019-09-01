<template>
  <div class="home-index">
    <div class="home-bg"></div>
    <van-tabs
      v-model="tabIndex"
      class="v-tab"
      color="#3390FF"
      background="transparent"
    >
      <van-tab title="行走">
        <Tab></Tab>
      </van-tab>
      <van-tab title="跑步">
        <Tab title="跑步" num="0.0"></Tab>
      </van-tab>
      <van-tab title="骑行">
        <Tab title="骑行" num="0.0"></Tab>
      </van-tab>
      <van-tab title="自驾">
        <Tab title="自驾" num="0.0"></Tab>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import Tab from './components/tab.vue'
  export default {
    name: 'homeIndex',
    data() {
      return {}
    },
    computed: {
      tabIndex: {
        get() {
          return this.$store.state.home.tabIndexs
        },
        set(value) {
          this.$store.commit('setTabIndex', value)
        }
      }
    },
    components: {
      Tab
    }
  }
</script>
<style lang="scss" scope>
  .home-index {
    width: 100%;
  }
  .home-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('../../assets/imgs/bg.png') no-repeat top center;
    background-size: cover;
    z-index: -99;
  }
  .v-tab {
    width: 100%;
  }
</style>
