<template>
  <div class="home-detail">
    <van-notice-bar text="学习之用学习之用学习之用学习之用学习之用学习之用学习之用学习之用学习之用"
      left-icon="volume-o"
      class="v-notice"
      mode="closeable" />
    <div id="container"></div>
    <div class="list">
      <div class="item">
        <i class="iconfont icondingwei"></i>
        <span>{{place}}</span>
      </div>
      <div class="item"
        @click="toggleMap">
        <i class="iconfont iconditu"></i>
        <span>地图</span>
      </div>
      <div class="item">
        <i class="iconfont iconly_mudidi"></i>
        <span>定位</span>
      </div>

    </div>
    <div class="dingwei"
      id="dingwei"
      @click="goDing"></div>
    <div class="start-end"
      @click="changeStatus">{{walkStatus}}</div>
    <!-- 地图选色弹出层 -->
    <van-popup v-model="showMap"
      position="top">
      <div class="v-pop-map">
        <div class="v-pop-map-header">地图颜色模式</div>
        <van-radio-group v-model="radio"
          class="pop-radio-list">
          <van-radio :name="item.color"
            icon-size=6
            checked-color="#07c160"
            class="pop-radio"
            v-for="(item,index) in radioChoose"
            :key="index">{{item.txt}}</van-radio>
        </van-radio-group>
      </div>
    </van-popup>
    <!-- 跑步地图 -->
    <van-popup v-model="runCount"
      position="top"
      overlay-class="v-pop-runCount"
      :overlay="pupOverlay"
      :class="pupOverlay?'v-pop-running':'v-pop-runingx'">
      <div class="v-pop-run">
        <span class="v-pop-num"></span>{{runData.kilo}}<span class="v-pop-kio">公里</span>
      </div>
      <div class="v-pop-list">
        <div class="v-pop-item">
          <div class="v-pop-dao">{{time['trueTime']}}</div>
          <div class="v-pop-time">总计时间</div>
        </div>
        <div class="v-pop-item">
          <div class="v-pop-dao">{{runData.kmh}}</div>
          <div class="v-pop-time">平均配速(km/h)</div>
        </div>
        <div class="v-pop-item">
          <div class="v-pop-dao">{{runData.kem}}</div>
          <div class="v-pop-time">消耗能量(k)</div>
        </div>
      </div>
      <div class="v-pop-remark">
        <van-field v-model="remarkValue"
          maxlength=40
          clearable
          label="备注"
          label-width=50
          class="v-pop-filder"
          placeholder="请输入行程备注,字数不得超过40字！" />
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loactionMap: null,
      showMap: false,
      remarkValue: '',
      type:['行走','跑步','骑行','自驾'],
      radioChoice: [{}],
      distance: null,
      runData:{
        kilo:'0.00',
        kmh:'0.00',
        kem:'0.0'
      },
      walkStatus: '开始',
      pupOverlay: true,
      watchID: null,
      time: {
        timeMin: 0,
        timeSec: 0,
        timer: null,
        trueTime: '00:00'
      },
      place: '未知位置',
      radio: 'normal',
      tiMin: 0,
      tiSec: 0,
      runCount: false,
      radioChoose: [
        {
          txt: '幻影黑',
          color: 'dark'
        },
        {
          txt: '标准',
          color: 'normal'
        },
        {
          txt: '月光银',
          color: 'light'
        },
        {
          txt: '远山黛',
          color: 'whitesmoke'
        },
        {
          txt: '雅士灰',
          color: 'grey'
        },
        {
          txt: '马卡龙',
          color: 'macaron'
        },
        {
          txt: '靛青蓝',
          color: 'blue'
        },
        {
          txt: '极夜蓝',
          color: 'darkblue'
        },
        {
          txt: '草色青',
          color: 'fresh'
        },
        {
          txt: '涂鸦',
          color: 'graffiti'
        },
        {
          txt: '酱籽',
          color: 'wine'
        }
      ],
      geolocationData: [
        [126.567402, 43.923187],
        [126.567402, 43.923129],
        [126.56744, 43.923098],
        [126.56759, 43.923024],
        [126.567794, 43.923024],
        [126.567928, 43.922912],
        [126.568169, 43.922819],
        [126.568486, 43.922723],
        [126.568598, 43.922881],
        [126.568727, 43.923074],
        [126.56884, 43.92319],
        [126.569274, 43.923055],
        [126.569564, 43.92348],
        [126.569859, 43.923944],
        [126.569172, 43.924199]
      ] // 开始定位后设备移动收集的所有经纬坐标
    }
  },
  components: {},
  computed: {
    trafficType(){
      return this.type[this.$store.state.home.tabIndexs]
    }
  },
  watch: {
    radio (newValue) {
      this.changeTheme(newValue)
    }
  },
  methods: {
    // 初始化地图
    initMap () {
      this.loactionMap = new AMap.Map('container', {
        center: [116.397428, 39.90923],
        resizeEnable: true,
        zoom: 13 // 地图显示的缩放级别
      })
    },
    // 展示地图主题选择
    toggleMap () {
      this.showMap = true
    },
    // 移动轨迹图
    mapPath () {
      let that = this
      let lineArr = this.geolocationData.slice()
      let marker = new window.AMap.Marker({
        map: that.loactionMap,
        position: lineArr[0],
        icon: 'https://webapi.amap.com/images/car.png',
        offset: new window.AMap.Pixel(-26, -13),
        autoRotation: true,
        angle: -90
      })

      // 绘制轨迹
      let polyline = new window.AMap.Polyline({
        map: that.loactionMap,
        path: lineArr,
        showDir: true,
        strokeColor: '#28F', // 线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6 // 线宽
        // strokeStyle: "solid"  //线样式
      })

      let passedPolyline = new window.AMap.Polyline({
        map: that.loactionMap,
        // path: lineArr,
        strokeColor: 'red', // 线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6 // 线宽
        // strokeStyle: "solid"  //线样式
      })

      marker.on('moving', function (e) {
        passedPolyline.setPath(e.passedPath)
      })

      that.loactionMap.setFitView()
      marker.moveAlong(lineArr, 200)
    },
    // 手动定位
    goDing () {
      this.$toast.loading({
        duration: 0,
        forbidClick: true,
        loadingType: 'circle',
        message: '定位中...'
      })
    },
    // h5实时定位，记录每条定位，绘制轨迹图
    watchMap () {
      console.log('开始了')
      let that = this
      this.watchID = navigator.geolocation.watchPosition(
        function (position) {
          let gps = [position.coords.longitude, position.coords.latitude]
          console.log('实时定位中---')
          let p1 =
            that.geolocationData.length > 0
              ? that.geolocationData[that.geolocationData.length - 1].toString()
              : ''
          let p2 = gps.toString()
          if (p1 === p2) {
            console.log('定位距离过近')
          } else {
            // 存放轨迹经纬度坐标，经纬度坐标转换
            window.AMap.convertFrom(gps, 'gps', function (status, result) {
              if (result.info === 'ok') {
                let tmpGps = [result.locations[0].Q, result.locations[0].P]
                console.log(tmpGps)
                that.geolocationData.push(tmpGps)
                that.mapLoactionDistance(that.geolocationData)
              } else {
                console.log('轨迹路径经纬度转换失败！！')
              }
            })
            // that.geolocationData.push(gps)
            // that.mapLoactionDistance(that.geolocationData)
          }
        },
        function () {
          that.$toast.fail('实时定位出错，请尝试呢刷新')
        }
      )
    },

    // 经纬度路程与公里数换算,保留两位小数
    mapLoactionDistance (loactionArr) {
      let tmpArr = []
      loactionArr.forEach(item => {
        let tmpItem = new window.AMap.LngLat(item[0], item[1])
        tmpArr.push(tmpItem)
      })
      // this.runData.kilo =90
      this.runData.kilo = (
        window.AMap.GeometryUtil.distanceOfLine(tmpArr) / 1000
      ).toFixed(2)
      this.distance = (
        window.AMap.GeometryUtil.distanceOfLine(tmpArr) / 1000
      ).toFixed(2)
    },
    // 定位插件
    dingWeiPlugin () {
      let that = this
      let dingWei = document.getElementById('dingwei')
      this.$toast.loading({
        duration: 0,
        forbidClick: true,
        loadingType: 'circle',
        message: '加载中...'
      })
      that.loactionMap.plugin(['AMap.Geolocation', 'AMap.ControlBar'], function () {
        let geolocation = new window.AMap.Geolocation({
          enableHighAccuracy: true, //  是否使用高精度定位，默认:true
          timeout: 10000, //  超过10秒后停止定位，默认：无穷大
          buttonPosition: 'RB',
          buttonDom: dingWei
        })
        that.loactionMap.addControl(geolocation)
        geolocation.getCurrentPosition()
        window.AMap.event.addListener(geolocation, 'complete', (result) => {
          if (result.addressComponent.district || result.addressComponent.city || result.addressComponent.street) {
            that.place = result.addressComponent.district || result.addressComponent.city || result.addressComponent.street
          }
          that.$toast.clear()
          that.loactionMap.setCenter(result.position)
        }) //  返回定位信息
        window.AMap.event.addListener(geolocation, 'error', (result) => {
          that.$toast.clear()
          console.log(result)
        }) //  返回定位出错信息
        // 罗盘插件---------------------------------------------------------
        that.loactionMap.addControl(new window.AMap.ControlBar())
      })
    },
    // 改变主题颜色
    changeTheme (value) {
      if (this.loactionMap) {
        this.loactionMap.setMapStyle(`amap://styles/${value}`)
      } else {
        this.$toast.fail('发生未知错误！')
      }
    },
    // 变换状态（开始,结束,退出）
    changeStatus () {
      if (this.walkStatus === '开始') {
        this.walkStatus = '结束'
        this.runCount = true
        this.startinterv()
        this.watchMap()
        return false
      }
      if (this.walkStatus === '结束') {
        this.clearInterv(this)
        this.locationOnDelete() // 停止定位
        this.pupOverlay = false
        this.uploadData()
        this.mapPath() // 绘制轨迹
        this.walkStatus = '退出'
        return false
      }
      if (this.walkStatus === '退出') {
        this.$router.push({ name: 'homeIndex', params: { activing: 1 } })
        return false
      }
    },
    // 提交数据
    uploadData () {
      let o = {
        userId:1,
        type:0,// 0 跑步 骑车那种  1搜地图那种
        trafficType:this.trafficType,
        date:'2018-09-13',
        mask:this.remarkValue,
        time:this.time['trueTime'],
        calorie:this.runData.kem,
        speed:this.runData.kmh,
        line:this.geolocationData,
      }
      this.$axios.getRouteMap(o).then((res) => {if(res.errno===0){console.log(res,1231231)}})
    },
    // 停止实时定位
    locationOnDelete () {
      let that = this
      navigator.geolocation.clearWatch(that.watchID)
      console.log('停止实时定位')
    },
    // 开启定时器
    startinterv () {
      this.clearInterv()
      this.time['timer'] = setInterval(this.Time, 1000, this)
    },
    // 清除定时器
    clearInterv () {
      if (this.time['timer']) {
        clearInterval(this.time['timer'])
      }
    },
    // 展示时间
    Time (that) {
      let tiMin = 0
      let tiSec = 0
      let timeMin = that.time['timeMin']
      let timeSec = that.time['timeSec']
      if (timeMin < 10) {
        timeMin = '0' + timeMin
      }
      if (timeSec < 10) {
        timeSec = '0' + timeSec
      }
      that.time['trueTime'] = timeMin + ':' + timeSec
      that.time['timeSec']++
      if (that.time['timeSec'] > 59) {
        that.time['timeSec'] = 0
        that.time['timeMin']++
      }
    }
  },
  mounted () {
    console.log(this.trafficType)
    this.initMap()
    this.dingWeiPlugin()
  }

}
</script>

<style lang="scss" scope>
.home-detail {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  .v-notice {
    width: 100%;
    height: 36px;
    box-sizing: border-box;
    padding: 0 8px;
  }
  #container {
    width: 100%;
    flex: 1;
  }
  .list {
    width: 300px;
    box-shadow: 0 0 2px #afaeae;
    display: flex;
    z-index: 2000;
    background-color: #fff;
    justify-content: flex-start;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    padding: 12px 0;

    .item {
      flex: 1;
      height: 16px;
      line-height: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      i {
        position: relative;
        top: 1px;
      }
      span {
        font-size: 14px;
        margin-left: 4px;
      }
    }
  }
  /deep/.van-popup {
    background-color: transparent;
  }
  .dingwei {
    position: relative;
    top: -444px;
    right: 28px;
    width: 80px;
    height: 40px;
    background-color: transparent;
    z-index: 1000;
  }
  .start-end {
    position: absolute;
    bottom: 14%;
    left: 50%;
    z-index: 99999;
    margin-left: -50px;
    margin-top: -50px;
    width: 100px;
    height: 100px;
    background-color: #57c595;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    box-shadow: 0 1px 5px 0px #afaeae;
  }
  .v-pop-runCount {
    width: 100%;
    z-index: 1009;
    background: rgba(255, 255, 255, 0.9) !important;
  }

  .v-pop-runingx {
    width: 100%;
    height: 30vh;
    background-color: #fff;
    .v-pop-run {
      width: 100%;
      position: absolute;
      top: 3%;
      left: 0;
      font-weight: bold;
      font-style: italic;
      .v-pop-num {
        font-size: 88px;
        font-weight: bold;
        color: #555;
        margin-right: 10px;
      }
      .v-pop-kio {
        color: #555;
        font-size: 16px;
      }
    }
    .v-pop-list {
      position: absolute;
      top: 53%;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #555;
      .v-pop-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .v-pop-dao {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 4px;
          font-style: italic;
        }
        .v-pop-time {
          font-size: 12px;
        }
      }
    }
    .v-pop-remark {
      width: 100%;
      box-sizing: border-box;
      position: absolute;
      bottom: 0%;
      padding: 0 20px;
      .v-pop-filder {
        padding-bottom: 6rpx;
        border-bottom: 1px solid #e2e4ea;
      }
    }
  }

  .v-pop-running {
    width: 100%;
    height: 100vh;
    .v-pop-run {
      width: 100%;
      position: absolute;
      top: 11.99%;
      left: 0;
      font-size:bold;
      font-style: italic;
      .v-pop-num {
        font-size: 88px;
        font-weight: bold;
        color: #555;
        margin-right: 10px;
      }
      .v-pop-kio {
        color: #555;
        font-size: 16px;
      }
    }
    .v-pop-list {
      position: absolute;
      top: 37.48%;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #555;
      .v-pop-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .v-pop-dao {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 4px;
          font-style: italic;
        }
        .v-pop-time {
          font-size: 12px;
        }
      }
    }
    .v-pop-remark {
      width: 100%;
      box-sizing: border-box;
      position: absolute;
      top: 56.97%;
      padding: 0 20px;
      .v-pop-filder {
        padding-bottom: 6rpx;
        border-bottom: 1px solid #e2e4ea;
      }
    }
  }
}
/* } */

.v-pop-map {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  .v-pop-map-header {
    width: 100%;
    text-align: center;
    font-size: 16px;
    padding-bottom: 20px;
  }
  .pop-radio-list {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    .pop-radio {
      width: 50%;
      font-size: 14px;
      margin-bottom: 14px;
    }
  }
}
</style>
