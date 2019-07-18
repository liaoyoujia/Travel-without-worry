<template>
  <div class="login">
    <h1>登录</h1>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="user">
        <el-input v-model="ruleForm.user" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <div class="submit">
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          class="submit-btn"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
import htto from '../plugins/axios/index.js'
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
          // console.log(this.ruleForm.user,12321)
          let o = {}
          o.username = this.ruleForm.user
          o.password = this.ruleForm.pass
          // getLogin(o).then(res => {
          //   console.log(res)
          // })
          console.log(htto, 12312)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
  .login {
    width: 400px;
    margin: 300px auto 0;
    h1 {
      text-align: center;
      font-weight: bold;
      font-size: 30px;
      padding-bottom: 30px;
    }
    .submit {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .submit-btn {
        margin-right: 30px;
      }
    }
  }
</style>
