<template>
  <div class="main">
    <router-view>
    </router-view>
    <div>
      <van-tabbar v-model="active">
        <van-tabbar-item name="home"
          icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item name="search"
          icon="search">标签</van-tabbar-item>
        <van-tabbar-item name="friends"
          icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item name="setting"
          icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      active: 'home'
    }
  },
  components: {

  }
}
</script>

<style scoped lang="css">
.bg {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
