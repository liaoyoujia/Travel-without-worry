<template>
  <div class="home">
    <el-container>
      <el-header class="el-header-block">
        <div class="el-header-block-left">
          <div class="header-item">
            <span>首页</span>
            <i class="iconfont icon-shouye1"></i>
          </div>
          <div class="header-item">
            <span>留言板</span>
            <i class="iconfont icon-liuyan"></i>
          </div>
          <div class="header-item">
            <span>关于</span>
            <i class="iconfont icon-iconset0142"></i>
          </div>
        </div>
        <div class="user">
          <span>溯夜</span>
          <img src="../assets/logo.jpg" alt="" />
        </div>
      </el-header>
      <el-container class="el-swiper-block">
        <swiper :options="swiperOption" class="swiper">
          <swiper-slide class="swiper-item"><img src="../assets/1.jpeg"/></swiper-slide>
          <swiper-slide class="swiper-item"><img src="../assets/2.jpeg"/></swiper-slide>
          <swiper-slide class="swiper-item"><img src="../assets/3.jpg"/></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </el-container>
      <el-container class="el-main-block">
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
        <el-aside class="el-aside-block"
          ><div class="personal-infor">
            <img
              src="https://avatars2.githubusercontent.com/u/41510578?s=180&v=4"
              alt=""
            />
            <h3>溯夜</h3>
            <div class="pane-item">
              <i class="iconfont icon-dizhi"></i>
              <span>南京</span>
            </div>
            <div class="pane-item">
              <i class="iconfont icon-wangzhi"></i>
              <span>博客网址</span>
            </div>
            <div class="pane-item">
              <i class="iconfont icon-22"></i>
              <span>邮箱</span>
            </div>
          </div></el-aside
        >
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import Axios from '../plugins/axios/index.js'
  export default {
    name: 'home',
    data() {
      return {
        swiperOption: {
          //显示分页
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          //切换模式  横屏或者竖屏
          // direction : 'vertical',
          //设置自动播放速度
          autoplay: {
            disableOnInteraction: false,
            delay: 4000
          },
          //开启无限循环
          loop: true,
          //设置点击箭头
          paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          //设置同屏显示的数量，默认为1，使用auto是随意的意思。
          slidesPerView: 1,
          //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
          mousewheel: true
          //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
          // freeMode:true
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    mounted() {
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
  i {
    font-size: 18px !important;
    margin-left: 3px;
    position: relative;
    top: 1px;
  }
  .home {
    width: 100%;
    margin: 0 auto;
    .el-header-block {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      padding: 0 150px;
      justify-content: space-between;
      align-items: center;
      background-color: #24292e;
      font-size: 14px;
      line-height: 1.5;
      color: #fff;
      box-shadow: 0 0px 2px #24292e;
      .header-item {
        display: flex;
        justify-content: flex-start;
        /* align-items: center; */
        align-items: baseline;
        margin-right: 30px;
      }
      .el-header-block-left {
        display: flex;
      }
      .user {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: block;
          margin-left: 4px;
        }
      }
    }
    .el-swiper-block {
      width: 100%;
      box-sizing: border-box;
      padding: 0 150px;
      .swiper-item{
        img{
          max-width: 100%;
          height: 400px;
        }
      }
    }
    .el-main-block {
      width: 100%;
      box-sizing: border-box;
      padding: 0 150px;
      height: 900px;
      .el-aside-block {
        margin-top: 30px;
        width: 20% !important;
        .personal-infor {
          width: 80%;
          margin-left: 10%;
          margin-right: 10%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          border:1px solid #ccc;
          img {
            width: 100%;
          }
          h3 {
            width: 100%;
            text-align: center;
            font-size: 26px;
            font-weight: 700;
          }
          .pane-item {
            width: 80%;
            display: flex;

            justify-content: flex-start;
            align-items: center;
            i{
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
</style>
