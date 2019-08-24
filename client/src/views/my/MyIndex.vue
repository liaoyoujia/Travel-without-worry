<template>
  <div class="my-index">
    <div class="my-bg"></div>
    <div class="my-user">
      <div class="my-user-top">
        <img src="../../assets/imgs/head.jpeg"
          alt="" />
        <div>
          <h4 v-if="personData.name">{{personData.name}}</h4>
          <h5 v-if="personData.phone">手机：{{personData.phone}}</h5>
        </div>
      </div>
      <div class="my-user-bottom">
        <div v-for="(item,index) in userData"
          :key="index">
          <span>{{ item.num }}</span>
          <span>{{ item.txt }}</span>
        </div>
      </div>
    </div>
    <div class="my-infor">
      <div class="my-infor-title">我的信息</div>
      <div class="my-infor-tool">
        <div v-for="(item,index) in inforData"
          :key="index"
          @click="goDetail(item.id)">
          <i class="iconfont"
            :class="item['icon']"></i>
          <span>{{ item.txt }}</span>
        </div>
      </div>
    </div>
    <div class="my-more">
      <div class="my-more-title">更多功能</div>
      <div class="my-more-tool">
        <div v-for="(item,index) in toolData"
          :key="index">
          <i class="iconfont"
            :class="item['icon']"></i>
          <span>{{ item.txt }}</span>
        </div>
      </div>
    </div>

  </div>
  </div>
</template>

<script>
import Axios from '../../plugins/axios/index.js'
export default {
  name: 'myIndex',
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
  data () {
    return {
      personData: {},
      userData: [
        {
          txt: '好友',
          num: 10
        },
        {
          txt: '关注',
          num: 11
        },
        {
          txt: '粉丝',
          num: 101
        },
        {
          txt: '圈子',
          num: 2
        }
      ],
      inforData: [
        {
          id: 'xinxi',
          icon: 'iconmessage',
          txt: '信息总览'
        },
        {
          id: 'chuxing',
          icon: 'iconwapchuxing',
          txt: '出行趋势'
        },
        {
          id: 'fenxin',
          icon: 'iconfenxi',
          txt: '数据分析'
        },
        {
          id: 'chengjiu',
          icon: 'iconchenggong',
          txt: '成就殿堂'
        }
      ],
      toolData: [
        {
          icon: 'iconjihua',
          txt: '出行计划'
        },
        {
          icon: 'icon31haoyou',
          txt: '好友排名'
        },
        {
          icon: 'iconicon--',
          txt: '路况分析'
        },
        {
          icon: 'iconsannongbuzhu',
          txt: '交通补助'
        },
        {
          icon: 'icontizhong',
          txt: '体重管理'
        },
        {
          icon: 'iconzhoubao',
          txt: '周报'
        },
        {
          icon: 'iconshishifengxianqingdan',
          txt: '风险管控'
        },
        {
          icon: 'iconketangjiankong',
          txt: '运动课堂'
        },
        {
          icon: 'iconai',
          txt: '智能硬件'
        },
        {
          icon: 'iconhuiyuan-',
          txt: '心悦会员'
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    goDetail (id) {
      switch (id) {
        case 'xinxi':
          this.$router.push({ name: 'myInfor' })
          break
        case 'chuxing':
          break
        case 'fenxin':
          break
        case 'chengjiu':
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.my-index {
  width: 100%;
  .my-bg {
    width: 100%;
    height: 137px;
    background: url("../../assets/imgs/user-bg.png") no-repeat top center;
    background-size: cover;
  }
  .my-user {
    width: 335px;
    margin: 0 auto;
    padding: 16px 0;
    box-sizing: border-box;
    box-shadow: 0 0 3px #cccbcb;
    position: relative;
    top: -40px;
    background-color: #fff;
    .my-user-top {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      padding-left: 10px;
      justify-content: flex-start;
      align-items: center;
      img {
        display: block;
        width: 60px;
        border-radius: 50%;
        box-shadow: 0 0 2px #000;
      }
      div {
        margin-left: 16px;
        h4 {
          font-size: 16px;
          margin-bottom: 8px;
          text-align: left;
        }
        h5 {
          font-size: 12px;
          text-align: left;
        }
      }
    }
    .my-user-bottom {
      width: 100%;
      display: flex;
      margin-top: 12px;
      justify-content: flex-start;
      align-items: center;
      div {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        font-size: 12px;
        span {
          display: block;
          margin-bottom: 5px;
        }
      }
    }
  }
  .my-infor {
    width: 335px;
    margin: 12px auto 0;
    padding: 16px 0;
    box-sizing: border-box;
    box-shadow: 0 0 3px #cccbcb;
    position: relative;
    top: -40px;
    background-color: #fff;
    .my-infor-title {
      width: 100%;
      padding-left: 12px;
      box-sizing: border-box;
      font-size: 14px;
      text-align: left;
    }
    .my-infor-tool {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      div {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 18px;
        align-items: center;
        i {
          font-size: 26px;
          color: #ffc72f;
        }
        span {
          display: block;
          margin-top: 7px;
          font-size: 12px;
        }
      }
    }
  }
  .my-more {
    width: 335px;
    margin: 12px auto 0;
    padding: 16px 0;
    box-sizing: border-box;
    box-shadow: 0 0 3px #cccbcb;
    position: relative;
    top: -40px;
    background-color: #fff;
    .my-more-title {
      width: 100%;
      padding-left: 12px;
      box-sizing: border-box;
      font-size: 14px;
      text-align: left;
    }
    .my-more-tool {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      div {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 18px;
        align-items: center;
        i {
          font-size: 26px;
          color: #ffc72f;
        }
        span {
          display: block;
          margin-top: 7px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
