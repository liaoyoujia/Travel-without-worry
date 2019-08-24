<template>
  <div class="login">
    <div class="bg"></div>
    <div class="logo"><img src="../assets/imgs/logo.png"
        alt=""></div>
    <div class="login-box">
      <van-cell-group class="login-group">
        <van-field v-model="username"
          label="用户名"
          clearable
          clickable
          placeholder="请输入用户名" />
        <van-field v-model="password"
          type="password"
          label="密码"
          clearable
          placeholder="请输入密码" />
      </van-cell-group>
    </div>
    <div class="login-btn">
      <img src="../assets/imgs/denglu.png"
        alt="login"
        class="login-img"
        @click="login">
      <img src="../assets/imgs/zhuce.png"
        alt="register"
        class="regis-img"
        @click="goRegister">
    </div>
  </div>

</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.username && this.password) {
        let o = {}
        o.username = this.username
        o.password = this.password
        this.$axios.getLogin(o).then((res) => {
          if (res.errno === 0) {
            this.$router.push({ name: 'homeIndex' })
          } else {
            this.$toast.fail('登录失败！')
          }
        })
      } else {
        this.$toast.fail('请将信息填写完整！')
      }
    },
    // 跳转到注册界面
    goRegister () {
      this.$router.push({ name: 'register' })
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  position: relative;
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: url("../assets/imgs/login-bg.jpg") no-repeat top center;
    background-size: cover;
  }
  .logo {
    position: absolute;
    top: 18%;
    left: 50%;
    transform: translateX(-50%);
    width: 201px;
    margin: 0 auto;
    img {
      width: 100%;
      display: block;
    }
  }
  .login-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    .login-group {
      background-color: transparent !important;
      .van-cell {
        background-color: transparent !important;
      }
    }
  }
  .login-btn {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    .login-img {
      width: 48px;
      margin-right: 50px;
    }
    img {
      width: 40px;
    }
  }
}
</style>
