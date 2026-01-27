<template>
  <div id="app">
    <h1>测试svg图标</h1>
    <Pagination />
    <svg-icon name="phone" color="green" width="100px" height="100px" />
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request.ts'
import { onMounted } from 'vue'
onMounted(() => {
  console.log('mounted')
  request({
    url: '/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111'
    }
  }).then((res) => {
    console.log(res)
  })
})
</script>

<style scoped lang="scss">
#app {
  width: 100%;
  min-height: 100vh;
  h1 {
    color: $primary-color;
  }
}
</style>
