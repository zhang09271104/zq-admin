<template>
  <div v-if="setting.logoHidden" class="logo">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>
<script setup lang="ts">
import setting from '@/setting.ts'
</script>
<script lang="ts">
export default {
  name: 'Logo'
}
</script>
<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  width: 100%;
  height: $base-menu-logo-height;
  padding: 10px;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    font-size: $base-logo-title-fontSize;
    color: white;
    margin-left: 10px;
  }
}
</style>
