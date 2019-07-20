<template>
  <div class="home">
    <el-container>
      <el-header class="el-header-block">
        <div v-for="(item,index) in headerData"
          :key="index">{{item.txt}}</div>
      </el-header>
      <el-container class="el-main-block">
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
        <el-aside class="el-aside-block">Aside</el-aside>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Axios from '../plugins/axios/index.js'
export default {
  name: 'home',
  data () {
    return {
      headerData: [
        { txt: '首页' },
        { txt: '关于我' },
        { txt: '关于博客' },
        { txt: '关于生活' }
      ]
    }
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
.home {
  width: 100%;
  .el-header-block {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #24292e;
    font-size: 14px;
    line-height: 1.5;
    color: #fff;
  }
  .el-main-block {
    height: calc(100vh - 120px);
    overflow: auto;
    .el-aside-block {
      margin-top: 30px;
      height: 100px;
      width: 20% !important;
      background-color: red;
    }
  }
}
</style>
