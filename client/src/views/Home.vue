<template>
  <div class="home">
    <div class="bg"></div>
    <el-row type="flex"
      class="home-header"
      justify="center"
      align="center">
      <el-col :span="20"
        class="home-header-content">
        <div class="home-header-left">
          <div class="home-header-pane">
            <span>首页</span>
          </div>
          <div class="home-header-pane">
            <span>留言</span>
          </div>
          <div class="home-header-pane">
            <span>关于</span>
          </div>
          <div class="home-header-pane">
            <span>技术文章</span>
          </div>
          <div class="home-header-pane">
            <span>程序人生</span>
          </div>
          <div class="home-header-pane">
            <span>心情</span>
          </div>
        </div>
        <div class="home-header-right">
          <div class="home-header-pane">
            <span>溯夜</span>
            <i class="iconfont icon-yonghu"></i>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex"
      justify="center">
      <el-col :span="20">
        <swiper :options="swiperOption"
          ref="mySwiper"
          class="swiper">
          <!-- slides -->
          <swiper-slide><img src="../assets/swiper_1.jpg"
              alt=""></swiper-slide>
          <swiper-slide><img src="../assets/swiper_2.jpg"
              alt=""></swiper-slide>
          <swiper-slide><img src="../assets/swiper_3.jpg"
              alt=""></swiper-slide>
          <div class="swiper-pagination"
            slot="pagination"></div>
          <div class="swiper-button-prev"
            slot="button-prev"></div>
          <div class="swiper-button-next"
            slot="button-next"></div>
        </swiper>
      </el-col>
    </el-row>
    <el-row type="flex"
      justify="center"
      class="home-main">
      <el-col :span="20">
        <el-row type="flex"
          justify="center">
          <el-col :span="19">3</el-col>
          <el-col :span="5"
            class="perosonal-infor">
            <div class="person-bg"></div>
            <img src="https://avatars1.githubusercontent.com/u/41510578?s=460&v=4"
              alt="头像"
              class="avater" />
            <div class="person-congtent">
              <div class="person-name">
                <h4>null</h4>
                <i class="iconfont icon-xingbie-nan"></i>
              </div>
              <div class="person-pane">
                <i class="iconfont icon-22"></i>
                <span>2578102087@qq.com</span>
              </div>
              <div class="person-pane">
                <i class="iconfont icon-dizhi"></i>
                <span>江苏南京</span>
              </div>
              <div class="person-pane">
                <i class="iconfont icon-wangzhi"></i>
                <span>github账号</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex"
      justify="center"
      class="home-article">
      <el-row type="flex"
        justify="center">
        <el-col :span="24">3</el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Axios from '../plugins/axios/index.js'
export default {
  name: 'home',
  data () {
    return {
      swiperOption: {
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // 切换模式  横屏或者竖屏
        // direction : 'vertical',
        // 设置自动播放速度
        autoplay: {
          disableOnInteraction: false,
          delay: 4000
        },
        // 开启无限循环
        loop: true,
        // 设置点击箭头
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        // 设置同屏显示的数量，默认为1，使用auto是随意的意思。
        slidesPerView: 1,
        // 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
        mousewheel: true
        // 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
        // freeMode:true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted () {
    let o = {}
    o.title = 'haha'
    o.content = 'xixii'
    Axios.getBlogNew(o).then(res => {
      console.log(res, 312313)
    })
  }
}
</script>
<style lang="scss" scope>
.bg {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.swiper-button-prev {
  width: 24px;
  height: 24px;
}
.swiper-button-next {
  width: 24px;
  height: 24px;
}
.home {
  .home-header {
    background-color: #24292e;
    height: 50px;
    box-sizing: border-box;
    .home-header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      .home-header-pane {
        margin-right: 50px;
      }
      .home-header-left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      .home-header-right {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
  .swiper {
    margin-top: 20px;
    border-radius: 10px;
    img {
      width: 100%;
      height: 300px;
    }
  }
  .home-main {
    .perosonal-infor {
      margin-top: 20px;
      display: flex;
      border-radius: 20px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: #fff;
      .person-bg {
        width: 100%;
        height: 150px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background: url("../assets/bg_1.jpeg") no-repeat;
        background-size: cover;
      }
      .avater {
        width: 60px;
        height: 60px;
        position: relative;
        top: -30px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 0 3px 1px #888;
      }
      .person-congtent {
        width: 100%;
        padding: 0 12px;
        position: relative;
        top: -20px;
        box-sizing: border-box;
        .person-name {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-bottom: 10px;
          border-bottom: 1px solid #999;
          h4 {
            font-size: 20px;
            margin-right: 6px;
          }
          i {
            color: #00ffff;
          }
        }
        .person-pane {
          width: 100%;
          padding-top: 10px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          i {
            position: relative;
            top: 3px;
            margin-right: 18px;
          }
        }
      }
      .person-congtent {
        width: 100%;
        height: 100px;
      }
      .personal-detail {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
        & > div {
          margin-bottom: 10px;
          margin-left: 20px;
        }
        i {
          margin: 0 8px 0 0;
        }
      }
    }
  }
  .home-article {
    height: 300px;
    background-color: cyan;
  }
  i {
    font-size: 18px !important;
    margin-left: 4px;
    position: relative;
    top: 2px;
  }
}
</style>
