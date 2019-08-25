<template>
  <div class="Traffic">
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
            input-align="center"
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
          class="search-type"
          @click.native="getRoadLine()">搜索</van-col>
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
        <div class="v-popup-show1"
          v-show="show1">
          <div class="v-popup-header">
            <div class="fit-route">请选择合适路线</div>
            <i class="iconfont iconxiangshang special"
              @click="cancelShow1Popup"></i>
            <div class="v-popup-sure"
              @click="sureChuxing">确定</div>
          </div>
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
    <van-popup v-model="chuxingReport"
      class="v-pop-chuxing">
      <div class="chuxing">
        <h5>本次出行</h5>
        <div class="v-pop-chuxing-item"
          v-for="(item,index) in chuxingList"
          :key="index"
          v-if="chuxingList&&chuxingList.length">
          <div class="v-pop-chuxing-item-left">{{item.name}}</div>
          <div class="v-pop-chuxing-item-right">{{item.txt}}</div>
        </div>
        <div class="v-pop-chuxing-item">
          <div class="v-pop-chuxing-item-left">花费</div>
          <div class="v-pop-chuxing-item-right">
            <van-stepper v-model="huafei"
              min=0 />
          </div>
        </div>
        <div class="v-pop-chuxing-item">
          <div class="v-pop-chuxing-item-left">日期</div>
          <div class="v-pop-chuxing-item-right">{{currentTime}}</div>
        </div>
        <div class="v-pop-chuxing-item">
          <div class="v-pop-chuxing-item-left">备注</div>
          <div class="v-pop-chuxing-item-right">
            <van-field v-model="beizhu"
              maxlength=20
              placeholder="输入行程备注,少于20字！" />
          </div>
        </div>
        <div class="chuxing-save"
          @click="uploadData">确认保存</div>
      </div>
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
      currentTime: '',
      huafei: 0,
      value: '',
      beizhu: '',
      // chuxingReport: true,
      chuxingReport: false,
      originPlace: '',
      chuxingList: [],
      originPlD: [],
      endPlace: '',
      endPlD: [],
      driving: null,
      show: false,
      show1: false,
      columns: ['公交/地铁', '出租车', '单车/电车', '步行'],
      toolType: {
        '公交/地铁': 'Transfer',
        '出租车': 'Driving',
        '单车/电车': 'Riding',
        '步行': 'Walking'
      },
      searchData: []
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
    // 定位插件
    dingWeiPlugin () {
      let that = this
      that.loactionMap.plugin(['AMap.Geolocation'], function () {
        let geolocation = new window.AMap.Geolocation({
          enableHighAccuracy: true, //  是否使用高精度定位，默认:true
          timeout: 10000, //  超过10秒后停止定位，默认：无穷大
          buttonPosition: 'RB', // 定位按钮停靠位置，默认：'LB'，左下角
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
    // 取消路线弹出层
    cancelShow1Popup () {
      this.show1 = false
    },
    // 选择地点
    choosePlace (place, type, placeDetail) {
      this.show = false
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
      let that = this
      if (that.driving) {
        that.driving.clear()
      }
      if (that.originPlace === '' || that.endPlace === '' || that.originPlD.length === 0 || that.endPlD.length === 0 || that.value === '') {
        this.$toast('请将数据填写完全')
        return false
      }
      that.show1 = true
      this.chuxingList = [{ name: '交通公交', txt: this.value }, { name: '出发地', txt: this.originPlace }, {
        name: '目的地', txt: this.endPlace
      }]
      that.loactionMap.plugin(`AMap.${that.toolType[that.value]}`, function () {
        that.driving = new window.AMap[that.toolType[that.value]]({
          map: that.loactionMap,
          panel: 'pane',
          autoFitView: true
        })
        let startLngLat = that.originPlD
        let endLngLat = that.endPlD
        that.driving.search(startLngLat, endLngLat)
      })
    },
    // 出行隐藏框
    sureChuxing () {
      this.chuxingReport = true
      this.currentTime = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      this.show1 = false
    },
    // 上传数据
    // userId, type, trafficType, diatance, date, price, startPlace, startCode, endPlace, endCode,mask
    uploadData () {
      let that = this
      let o = {}
      o.userId = 2
      // 0 跑步 骑车那种  1搜地图那种
      o.type = 1
      o.trafficType = this.value
      o.date = this.currentTime
      o.price = this.huafei
      o.startPlace = this.originPlace
      o.endPlace = this.endPlace
      o.startCode = this.originPlD
      o.endCode = this.endPlD
      o.mask = this.beizhu
      this.$axios.getRouteNew(o).then((res) => {
        if (res.errno === 0) {
          this.$toast({
            type: 'success',
            message: '数据上传成功！',
            forbidClick: true,
            onOpened: function () {
              that.chuxingReport = false
              that.originPlD = []
              that.endPlace = ''
              that.originPlace = ''
              that.endPlD = []
            }
          })
        } else {
          this.$toast({
            type: 'fail',
            message: '数据上传失败！',
            forbidClick: true,
            onOpened: function () {
              that.chuxingReport = false
              that.originPlD = []
              that.endPlace = ''
              that.originPlace = ''
              that.endPlD = []
            }
          })
        }
        console.log(res)
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
      .v-popup-show1 {
        width: 100%;
        height: calc(100vh - 254px);
        position: absolute;
        top: 100px;
        left: 0;
        z-index: 2001;
        background-color: rgba(255, 255, 255, 0.8);
        overflow-y: auto;
        .v-popup-header {
          width: 100%;
          box-sizing: border-box;
          padding: 6px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .fit-route {
            color: #929090;
            font-size: 14px;
          }
          .special {
            position: relative;
            top: 0;
            font-size: 36px;
          }
          .v-popup-sure {
            font-size: 14px;
            padding: 0px 10px;
            line-height: 28px;
            background: #2f86f6;
            border-radius: 6px;
            color: #fff;
          }
        }
      }
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
.v-pop-chuxing {
  width: 80%;
  border-radius: 10px;
  .chuxing {
    width: 100%;
    padding: 20px 20px;
    box-sizing: border-box;
    background-color: #fff;
    h5 {
      font-size: 20px;
      padding-bottom: 10px;
    }
    .v-pop-chuxing-item {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #41485d;
      margin-bottom: 22px;
      font-size: 12px;
      .v-pop-chuxing-item-left {
        width: 25%;
        text-align: left;
      }
      .v-pop-chuxing-item-right {
        width: 75%;
        text-align: right;
      }
    }
    .chuxing-save {
      margin-top: 16px;
      text-align: center;
      color: #2f86f6;
      font-size: 18px;
    }
  }
}
.pane {
  width: 100%;
  overflow-y: auto;
}
</style>
