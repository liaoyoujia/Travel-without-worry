<template>
  <div class="main">
    <router-view>
    </router-view>
    <!-- <div class="bg"></div> -->
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

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
