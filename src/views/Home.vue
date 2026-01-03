<template>
  <div class="home">
    <h1>欢迎使用 Vue 3 + TypeScript + Vite---{{ message }}</h1>
    <router-link to="/about">关于</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello Vue 3!')
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>
