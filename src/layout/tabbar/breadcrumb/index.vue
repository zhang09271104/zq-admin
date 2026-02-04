<template>
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="layoutSettingStore.fold ? 'Expand' : 'Fold'" />
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      v-show="item.meta.title"
      :key="index"
      :to="item.path"
    >
      <el-icon>
        <component :is="item.meta.icon" />
      </el-icon>
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup lang="ts">
import useLayoutSettingStore from '@store/modules/layoutSetting.ts'
import { useRoute } from 'vue-router'

const layoutSettingStore = useLayoutSettingStore()

const $route = useRoute()

const changeIcon = () => {
  layoutSettingStore.fold = !layoutSettingStore.fold
}
</script>
<script lang="ts">
export default {
  name: 'Breadcrumb'
}
</script>
<style scoped></style>
