<template>
  <el-button icon="Refresh" size="small" circle />
  <el-button icon="FullScreen" size="small" circle />
  <el-button icon="Setting" size="small" circle />
  <img src="@/assets/vue.svg" alt="" />
  <el-dropdown>
    <span class="el-dropdown-link">
      Admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts"></script>
<script lang="ts">
export default {
  name: 'Setting'
}
</script>
<style scoped></style>
