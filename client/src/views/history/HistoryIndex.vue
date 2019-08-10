<template>
  <div class="his-idx">
    <div class="his-idx-title">出行历史</div>
    <div class="his-idx-list">
      <div class="his-idx-item"
        v-for="(item,index) in 8"
        :key="index"
        @click="goDetail(index)">
        <div>
          <p>徒步出行</p>
          <p>行程0公里</p>
        </div>
        <div>
          <span>2019/08/02</span>
          <i class="iconfont iconxiangyou"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    goDetail (idx) {
      this.$router.push({ path: `/history/detail/${idx}` })
    }
  }
}
</script>

<style scoped lang="scss">
.his-idx {
  width: 100%;
  padding-bottom: 70px;
  .his-idx-title {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 0 0 20px;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
  }
  .his-idx-list {
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    .his-idx-item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #858b9c;
      padding-bottom: 12px;
      border-bottom: 1px solid #e2e4ea;
      p {
        font-size: 16px;
        text-align: left;
        margin-bottom: 8px;
      }
      span {
        font-size: 14px;
      }
    }
    .his-idx-item + .his-idx-item {
      margin-top: 30px;
    }
  }
}
</style>
