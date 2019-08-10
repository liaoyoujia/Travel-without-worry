<template>
  <div class="Traffic">
    <div class="tra-headder"></div>
    <div class="container"
      id="container"></div>
  </div>
</template>

<script>
import Axios from '../plugins/axios/index.js'
export default {
  name: 'traffic',
  data () {
    return {
      loactionMap: null
      // trafficMap: null
    }
  },
  methods: {
    initMap () {
      this.loactionMap = new AMap.Map('container', {
        resizeEnable: true,
        center: [116.397428, 39.90923],
        resizeEnable: true,
        zoom: 13 // 地图显示的缩放级别
      })
    },
    loadMapPlugin () {
      var that = this
      AMap.plugin(['AMap.Geolocation', 'AMap.ControlBar'], function () {
        var geolocation = new window.AMap.Geolocation({
          enableHighAccuracy: true, // 是否使用高精度定位，默认:true
          timeout: 15000, // 超过10秒后停止定位，默认：5s
          buttonPosition: 'RB', // 定位按钮的停靠位置
          buttonOffset: new window.AMap.Pixel(100, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true // 定位成功后是否自动调整地图视野到定位点
        })
        // 定位插件---------------------------------------------------------
        that.loactionMap.addControl(geolocation)
        geolocation.getCurrentPosition(function (status, result) {
          // Toast.hide()
        })
        window.AMap.event.addListener(geolocation, 'error', function (e) {
          console.log(e)
        }) // 返回定位出错信息
      })
    },
    dingWeiPlugin () {
      let that = this
      that.loactionMap.plugin(['AMap.Geolocation'], function () {
        let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //  是否使用高精度定位，默认:true
          timeout: 10000, //  超过10秒后停止定位，默认：无穷大
          maximumAge: 0, // 定位结果缓存0毫秒，默认：0
          convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //  显示定位按钮，默认：true
          buttonPosition: 'LB', // 定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 20), //  定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true, //  定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //  定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //  定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        })
        that.loactionMap.addControl(geolocation)
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', (result) => {
          that.loactionMap.setCenter(result.position)
        }) //  返回定位信息
        AMap.event.addListener(geolocation, 'error', (result) => {
          console.log(result)
        }) //  返回定位出错信息
      })
    }
  },
  mounted () {
    this.initMap()
    this.dingWeiPlugin()
    // this.loadMapPlugin()
  }
}
</script>
<style lang="scss" scoped>
.Traffic {
  width: 100%;
  .tra-headder {
    width: 200%;
    height: 100px;
  }
  .container {
    width: 100%;
    height: calc(100vh - 200px);
  }
}
</style>
