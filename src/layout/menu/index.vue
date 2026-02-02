<template>
  <div>
    <template v-for="item in menuList" :key="item.path">
      <template v-if="!item.children">
        <el-menu-item v-if="!item.meta.hidden">
          <template #title>
            {{ item.meta.title }}
          </template>
        </el-menu-item>
      </template>
      <template v-if="item.children && item.children.length === 1">
        <el-menu-item v-if="!item.children[0].meta.hidden">
          <template #title>
            {{ item.children[0].meta.title }}
          </template>
        </el-menu-item>
      </template>
      <el-sub-menu v-if="item.children && item.children.length > 1" index="2-4">
        <template #title>
          {{ item.meta.title }}
        </template>
        <Menu :menu-list="item.children" />
      </el-sub-menu>
    </template>
  </div>
</template>
<script setup lang="ts">
defineProps(['menuList'])
</script>
<!--<script lang="ts">-->
<!--export default {-->
<!--  name: 'Menu',-->
<!--}-->
<!--</script>-->

<style scoped></style>
