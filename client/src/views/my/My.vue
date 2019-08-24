<template>
  <div class="my">
    <router-view :person="person"></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        person:{}
      }
    },
    mounted() {
      this.getPersonData()
    },
    methods: {
      // 获取开发者数据
      getPersonData() {
        this.$axios.getPerson({ name: '廖有佳' }).then(res => {
          if (res.errno === 0) {
            this.person = res.data[0]
          } else {
            this.person ={
                address: '安徽宣城',
                age: 23,
                id: 1,
                identify: '开发者',
                marrage: '单身',
                name: 'dasda',
                phone: '18792283895',
                sex: 1
              }
          }
        })
      }
    }
  }
</script>
<style scoped>
  .my {
    width: 100%;
  }
</style>
