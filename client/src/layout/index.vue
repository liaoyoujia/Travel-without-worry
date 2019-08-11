<template>
  <div class="main">
    <router-view> </router-view>
    <!-- <div> -->
    <van-tabbar v-model="active">
      <van-tabbar-item to="/index">
        <span>出行</span>
        <img slot="icon"
          slot-scope="props"
          :src="props.active ? iconData[0]['active'] : iconData[0]['normal']" />
      </van-tabbar-item>
      <van-tabbar-item to="/traffic">
        <span>交通</span>
        <img slot="icon"
          slot-scope="props"
          :src="props.active ? iconData[1]['active'] : iconData[1]['normal']" />
      </van-tabbar-item>
      <van-tabbar-item to="/history">
        <span>历史</span>
        <img slot="icon"
          slot-scope="props"
          :src="props.active ? iconData[2]['active'] : iconData[2]['normal']" />
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <span>我的</span>
        <img slot="icon"
          slot-scope="props"
          :src="props.active ? iconData[3]['active'] : iconData[3]['normal']" />
      </van-tabbar-item>
    </van-tabbar>
    <!-- </div> -->
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {
      active: 0,
      iconData: [
        {
          normal: require('../assets/imgs/chu.png'),
          active: require('../assets/imgs/chu_activi.png')
        },
        {
          normal: require('../assets/imgs/transpor.png'),
          active: require('../assets/imgs/transpor_activi.png')
        },
        {
          normal: require('../assets/imgs/history.png'),
          active: require('../assets/imgs/history_activi.png')
        },
        {
          normal: require('../assets/imgs/my.png'),
          active: require('../assets/imgs/my_activi.png')
        }
      ]
    }
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
