<template>
  <div class="tab1">
    <div class="circle">
      <div class="cirlce-cont">
        <h4>累计{{ title }}</h4>
        <h2>{{ num }}</h2>
        <a href="javascript:;">本月{{ title }}{{ num }}公里>></a>
      </div>
    </div>
    <div class="start-step" @click="goDetail">开始{{ title }}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {

      }
    },
    props: {
      title: {
        type: String,
        default: '行走'
      },
      num: {
        type: String,
        default: '0.0'
      }
    },
    methods:{
      goDetail(){
        this.$router.push({ name: 'homeDetail'})
      }
    }

  }
</script>

<style lang="scss" scope>
  .tab1 {
    width: 100%;
    .circle {
      width: 260px;
      height: 260px;
      border-radius: 50%;
      border: 4px dashed #c5d1d3;
      border-bottom: none;
      margin: 80px auto 0;
      position: relative;
      .cirlce-cont {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        h4 {
          font-size: 18px;
        }

        h2 {
          font-size: 60px;
          font-weight: bold;
          margin: 16px 0 16px;
        }
        a {
          font-size: 14px;
          color: #9a9b9b;
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
    .start-step {
      width: 250px;
      height: 45px;
      box-sizing: border-box;
      line-height: 45px;
      text-align: center;
      margin: 40px auto 0;
      border-radius: 10px;
      font-size: 18px;
      color: #fff;
      background-color: #57c595;
    }
  }
</style>
