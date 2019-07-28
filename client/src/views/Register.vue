<template>
  <div class="register">
    <img src="../assets/logo.jpg" />
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
      <el-form-item label="Realname"
        prop="real">
        <el-input v-model="ruleForm.real"
          autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password"
        prop="pass">
        <el-input type="password"
          v-model="ruleForm.pass"
          autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm('ruleForm')"
          class="regis-btn">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Axios from '../plugins/axios/index.js'
export default {
  name: 'register',
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
    var validateRealname = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入真实用户名'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        user: '',
        real: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        user: [{ validator: validateUsername, trigger: 'blur' }],
        real: [{ validator: validateRealname, trigger: 'blur' }]
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
          o.realname = this.ruleForm.real
          Axios.getRegister(o).then(res => {
            if (res.errno === 0 && res.data.id) {
              this.$router.push({ name: 'login' })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.register {
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
  .ruleForm {
    width: 308px;
    padding: 20px 20px;
    box-sizing: border-box;
    border: 1px solid #f1f1f1;
    border-radius: 10px;
    color: #24292e;
  }
  .regis-btn {
    width: 100%;
    background-color: #28a745;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
  }
  .submit {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .reset-btn {
      margin: 0 30px;
    }
  }
}
</style>
