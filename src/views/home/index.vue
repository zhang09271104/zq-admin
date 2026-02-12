<template>
  <div>我是一级路由展示成功以后的数据{{ userStore.username }}</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useUserStore from '@store/modules/user.ts'

const userStore = useUserStore()

onMounted(() => {
  userStore.userInfo()
})
</script>

<style scoped></style>
