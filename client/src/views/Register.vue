<template>
  <div class="register">
    <h1>注册</h1>
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
      <el-form-item label="真实姓名" prop="real">
        <el-input v-model="ruleForm.real" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <div class="submit">
        <el-button type="primary" @click="submitForm('ruleForm')"
          >注册</el-button
        >
        <el-button @click="resetForm('ruleForm')" class="reset-btn"
          >重置</el-button
        >
      </div>
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
            console.log(res, 12313122)
            // if (res.errno === 0 && res.data.login === 'success') {
            //   this.$router.push({ name: 'home' })
            // }
          })
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
  .register {
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
      .reset-btn {
        margin: 0 30px;
      }
    }
  }
</style>
