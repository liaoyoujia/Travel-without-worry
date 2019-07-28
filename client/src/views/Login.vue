<template>
  <div class="login">
    <img src="../assets/logo.jpg"
      alt="" />
    <h1>Sign in to Blog</h1>
    <el-form :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="ruleForm">
      <el-form-item label="Username"
        prop="user">
        <el-input v-model="ruleForm.user"
          autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password"
        prop="pass">
        <el-input type="password"
          v-model="ruleForm.pass"
          autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn"
          @click="submitForm('ruleForm')">Sign in</el-button>
      </el-form-item>
    </el-form>
    <div class="reset">
      <el-button class="reset-btn"
        @click="goRegister">Create an Account</el-button>
    </div>
  </div>
</template>

<script>
import Axios from '../plugins/axios/index.js'
export default {
  name: 'login',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入用户名'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        user: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        user: [{ validator: validateUsername, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let o = {}
          o.username = this.ruleForm.user
          o.password = this.ruleForm.pass
          Axios.getLogin(o).then(res => {
            if (res.errno === 0 && res.data.login === 'success') {
              this.$router.push({ name: 'home' })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    goRegister () {
      this.$router.push({ name: 'register' })
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 30px auto 0;
  img {
    width: 68px;
  }
  h1 {
    text-align: center;
    font-size: 24px;
    font-weight: 300;
    padding: 24px 0;
    color: #333;
  }
  .login-btn {
    width: 100%;
    background-color: #28a745;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
  }
  .ruleForm {
    width: 308px;
    padding: 20px 20px;
    box-sizing: border-box;
    border: 1px solid #f1f1f1;
    border-radius: 10px;
    color: #24292e;
  }
  .reset {
    width: 308px;
    margin: 20px auto 0;
    .reset-btn {
      width: 100%;
    }
  }
}
</style>
