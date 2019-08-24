<template>
  <div class="register">
    <div class="bg"></div>
    <div class="logo"><img src="../assets/imgs/logo.png"
        alt="" /></div>
    <div class="login-box">
      <van-cell-group class="login-group">
        <van-field v-model="realname"
          label="姓名"
          clearable
          clickable
          placeholder="请输入姓名" />
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
        @click="register">
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      realname: '',
      password: '',
      username: ''
    }
  },
  mounted () {
  },
  methods: {
    register () {
      if (this.username && this.password && this.realname) {
        let o = {}
        o.username = this.username
        o.password = this.password
        o.realname = this.realname
        this.$axios.getRegister(o).then((res) => {
          if (res && res.errno === 0) {
            this.$toast({
              type: 'success',
              message: '注册成功，快去登录吧！',
              onClose: () => {
                this.$router.push({ name: 'login' })
              }
            })
          } else {
            this.$toast.fail('注册错误了！')
          }
        })
      } else {
        this.$toast.fail('请填写完信息！')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.register {
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
    top: 64%;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    .login-img {
      width: 48px;
      margin-right: 50px;
    }
  }
}
</style>
