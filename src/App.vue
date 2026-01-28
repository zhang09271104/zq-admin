<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {})
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
