<template>
  <div class="my-infor">
    <div class="bg"></div>
    <div class="my-user">
      <img src="../../assets/imgs/head.jpeg"
        alt="" />
      <h4>{{ personData.name }}</h4>
      <p>账号:{{ personData.phone }}</p>
    </div>
    <div class="my-inf">
      <div class="my-inf-title">个人信息</div>
      <div class="my-inf-list">
        <div class="my-inf-item">
          性别：{{ personData.sex === 0 ? '女' : '男' }}
        </div>
        <div class="my-inf-item">年龄：{{ personData.age }}</div>
        <div class="my-inf-item">家乡：{{ personData.address }}</div>
        <div class="my-inf-item">情感状态：{{ personData.marrage }}</div>
        <div class="my-inf-item">身份：{{ personData.identify }}</div>
      </div>
      <div class="my-inf-title">出行里程</div>
    </div>
    <div class="my-box"
      id="echarts"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      personData: {},
      echartInstace: null
    }
  },
  props: {
    person: {
      type: Object
    }
  },
  watch: {
    person: {
      handler (newValue, oldValue) {
        this.personData = newValue
      },
      deep: true,
      immediate: true
    }
  },
  mounted () {
    this.initEachrts()
  },
  methods: {
    initEachrts () {
      this.echartInstace = this.$echarts.init(
        document.getElementById('echarts')
      )
      var option = {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#74AEE5' // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#2378F7' // 100% 处的颜色
            }
          ],
          globalCoord: false // 缺省为 false
        },
        grid: {
          top: 10,
          right: 20
        },
        tooltip: {},
        xAxis: {
          data: ['徒步', '跑步', '骑行', '自驾', '公交', '出租']
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      this.echartInstace.setOption(option)
    }
  }
}
</script>

<style scoped lang="scss">
.my-infor {
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  .bg {
    width: 100%;
    height: 200px;
    background: url("../../assets/imgs/user-bg.png") no-repeat top center;
    background-size: cover;
  }
  .my-user {
    position: relative;
    top: -200px;
    width: 100%;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 10;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    box-sizing: border-box;
    padding-top: 30px;
    align-items: center;
    color: #fff;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    h4 {
      font-size: 16px;
      margin: 10px 0 12px;
      font-weight: bold;
    }
    p {
      font-size: 14px;
    }
  }
  .my-inf {
    position: relative;
    top: -200px;
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    .my-inf-title {
      width: 100%;
      text-align: left;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .my-inf-list {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      font-size: 12px;
      padding-bottom: 14px;
      .my-inf-item {
        width: 33.33%;
        text-align: left;
        margin-bottom: 14px;
      }
    }
  }
  .my-box {
    width: 100%;
    height: 275px;
    /* background-color: cadetblue; */
    position: relative;
    top: -212px;
  }
}
</style>
