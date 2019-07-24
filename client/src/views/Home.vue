<template>
  <div class="home">
    <el-row type="flex" class="home-header" justify="center" align="center">
      <el-col :span="20" class="home-header-content">
        <div class="home-header-left">
          <div class="home-header-pane">
            <span>首页</span>
            <i class="iconfont icon-shouye1"></i>
          </div>
          <div class="home-header-pane">
            <span>留言</span>
            <i class="iconfont icon-liuyan"></i>
          </div>
          <div class="home-header-pane">
            <span>关于</span>
            <i class="iconfont icon-iconset0142"></i>
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
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <swiper :options="swiperOption" ref="mySwiper" class="swiper">
          <!-- slides -->
          <swiper-slide><img src="../assets/swiper_1.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/swiper_2.jpg" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="home-main">
      <el-col :span="20">
        <el-row type="flex" justify="center" >
          <el-col :span="20">3</el-col>
          <el-col :span="4" class="perosonal-infor">
            <div class="avater">
              <img
                src="https://avatars0.githubusercontent.com/u/41510578?s=400&u=255b0c40319bc8d9d78652b71d41536f5ad72e42&v=4"
                alt=""
              />
            </div>
            <h3>溯夜</h3>
            <div class="personal-detail">
              <div>
                <i class="iconfont icon-dizhi"></i>
                <span>地址</span>
              </div>
              <div>
                <i class="iconfont icon-wangzhi"></i>
                <span>网址</span>
              </div>
              <div>
                <i class="iconfont icon-22"></i>
                <span>邮件</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
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
    .swiper{
      img{
        width: 100%;
        height: 300px;
      }
    }
    .home-main {
      .perosonal-infor {
        border: 1px solid #333;
        background: rgba(50, 50, 50, 0.5);
        padding:30px 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .avater {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          img {
            display: block;
            width: 60px;
            height: 60px;
          }
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
    i {
      font-size: 18px !important;
      margin-left: 4px;
      position: relative;
      top: 2px;
    }
  }
</style>
