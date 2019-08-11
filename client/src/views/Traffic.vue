<template>
  <div class="Traffic">
    <!-- <div class="ce"
      @click="getRoadLine"></div> -->
    <div class="tra-headder">
      <van-row>
        <van-col span="16">
          <van-field v-model="originPlace"
            clearable
            label="起点"
            label-width="50"
            placeholder="请输入起点"
            @input="searchPlace($event,'org')" />
        </van-col>
        <van-col span="8">
          <van-field readonly
            clickable
            :value="value"
            placeholder="选择出行方式"
            @click="showPicker = true" />
        </van-col>
      </van-row>
      <van-row type="flex"
        justify="start"
        align="center">
        <van-col span="16">
          <van-field v-model="endPlace"
            label="终点"
            label-width="50"
            placeholder="请输入终点"
            clearable
            @input="searchPlace($event,'end')" />
        </van-col>
        <van-col span="8"
          class="search-type">搜索</van-col>
      </van-row>
    </div>
    <div class="box">
      <div class="v-popup"
        v-show="show">
        <i class="iconfont iconxiangshang special"
          @click="cancelPopup"></i>
        <div class="list-data"
          v-if="searchData&&searchData.length">
          <div class="list-item"
            v-for="(item,index) in searchData"
            :key="index"
            @click="choosePlace(item.name,item.type,item.location)">
            <p class="adress-name">{{item.name}}</p>
            <p class="address-place">{{(typeof item.address=='string'&&item.address) ||item.district}}</p>
          </div>
        </div>
        <div class="no-data"
          v-if="!(searchData&&searchData.length)">暂无信息</div>
      </div>
      <div class="container"
        id="container">
        <div class="v-popup"
          v-show="show1">
          <i class="iconfont iconxiangshang special"
            @click="cancelPopup"></i>
          <div class="pane"
            id="pane"></div>
        </div>
      </div>
    </div>
    <van-popup v-model="showPicker"
      position="bottom">
      <van-picker show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm" />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'traffic',
  data () {
    return {
      loactionMap: null,
      showPicker: false,
      value: '',
      originPlace: '',
      originPlD: [],
      endPlace: '',
      endPlD: [],
      show: false,
      show1: false,
      columns: ['公交/地铁', '出租车', '单车/电车', '步行'],
      searchData: []
    }
  },
  methods: {
    // 初始化地图
    initMap () {
      this.loactionMap = new AMap.Map('container', {
        resizeEnable: true,
        center: [116.397428, 39.90923],
        resizeEnable: true,
        zoom: 13 // 地图显示的缩放级别
      })
    },
    // 定位插件
    dingWeiPlugin () {
      let that = this
      that.loactionMap.plugin(['AMap.Geolocation'], function () {
        let geolocation = new window.AMap.Geolocation({
          enableHighAccuracy: true, //  是否使用高精度定位，默认:true
          timeout: 10000, //  超过10秒后停止定位，默认：无穷大
          maximumAge: 0, // 定位结果缓存0毫秒，默认：0
          convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //  显示定位按钮，默认：true
          buttonPosition: 'LB', // 定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new window.AMap.Pixel(10, 20), //  定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true, //  定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //  定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //  定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        })
        that.loactionMap.addControl(geolocation)
        geolocation.getCurrentPosition()
        window.AMap.event.addListener(geolocation, 'complete', (result) => {
          that.loactionMap.setCenter(result.position)
        }) //  返回定位信息
        window.AMap.event.addListener(geolocation, 'error', (result) => {
          console.log(result)
        }) //  返回定位出错信息
      })
    },
    // 搜索地址插件
    searchPlace (e, data) {
      this.show = true
      let that = this
      that.loactionMap.plugin('AMap.Autocomplete', function () {
        let autoOptions = {
          city: '全国'
        }
        let autoComplete = new window.AMap.Autocomplete(autoOptions)
        autoComplete.search(e, function (status, result) {
          console.log(status, result, 3123)
          if (status !== 'complete') {
            that.searchData = []
            console.log(1)
            return false
          }
          if (result.info !== 'OK') {
            that.searchData = []
            console.log(2)
            return false
          }
          let searchData = result.tips
          if (data === 'org') {
            searchData.forEach(item => {
              item.type = 'org'
            })
          } else {
            searchData.forEach(item => {
              item.type = 'end'
            })
          }
          that.searchData = searchData
        })
      })
    },
    // 取消弹出层
    cancelPopup () {
      this.show = false
    },
    // 选择地点
    choosePlace (place, type, placeDetail) {
      if (type === 'org') {
        this.originPlace = place
        this.originPlD = placeDetail && [placeDetail.lng, placeDetail.lat]
      } else {
        this.endPlace = place
        this.endPlD = placeDetail && [placeDetail.lng, placeDetail.lat]
      }
    },
    // 选择出行方式
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    },
    // 得到出行路线
    getRoadLine () {
      // console.log('kaihsi')
      console.log('kaishilhahhahahah')
      let that = this
      if (that.originPlace === '' || that.endPlace === '' || that.originPlD.length === 0 || that.endPlD.length === 0) {
        console.log('tianzhi')
      }
      that.show1 = true
      that.loactionMap.plugin('AMap.Driving', function () {
        let driving = new window.AMap.Driving({
          policy: window.AMap.DrivingPolicy.LEAST_TIME,
          map: that.loactionMap,
          panel: 'pane',
          autoFitView: true
        })
        let startLngLat = that.originPlD
        let endLngLat = that.endPlD
        driving.search(startLngLat, endLngLat)
      })
    }
  },
  mounted () {
    this.initMap()
    this.dingWeiPlugin()
  }
}
</script>
<style lang="scss" scoped>
.Traffic {
  width: 100%;
  .ce {
    width: 100%;
    height: 100px;
    background-color: cyan;
  }
  .tra-headder {
    width: 100%;
    height: 100px;
    .search-type {
      position: relative;
      z-index: 9999;
      font-size: 16px;
    }
  }
  .box {
    width: 100%;
    position: relative;
    .container {
      width: 100%;
      position: relative;
      height: calc(100vh - 154px);
    }
    .v-popup {
      width: 100%;
      height: calc(100vh - 154px);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2001;
      background-color: rgba(255, 255, 255, 0.8);
      overflow-y: auto;
      .special {
        position: absolute;
        top: -6px;
        font-size: 36px;
        left: 50%;
        transform: translateX(-50%);
      }
      .list-data {
        width: 100%;
        box-sizing: border-box;
        padding-left: 30px;
        padding-bottom: 30px;
        .list-item {
          padding: 16px 0;
          .adress-name {
            text-align: left;
            font-size: 16px;
          }
          .address-place {
            text-align: left;
            margin-top: 6px;
            font-size: 12px;
            color: #858b9c;
          }
        }
      }
      .no-data {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #858b9c;
        font-size: 24px;
      }
    }
  }
}
.pane {
  width: 100%;
  padding-top: 10px;
}
</style>
