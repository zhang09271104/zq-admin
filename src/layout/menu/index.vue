<template>
  <div>
    <template v-for="item in menuList" :key="item.path">
      <template v-if="!item.children">
        <el-menu-item v-if="!item.meta.hidden" :index="item.path" @click="goRoute">
          <template #title>
            <el-icon>
              <component :is="item.meta.icon" />
            </el-icon>
            {{ item.meta.title }}
          </template>
        </el-menu-item>
      </template>
      <template v-if="item.children && item.children.length === 1">
        <el-menu-item
          v-if="!item.children[0].meta.hidden"
          :index="item.children[0].path"
          @click="goRoute"
        >
          <template #title>
            <el-icon>
              <component :is="item.children[0].meta.icon" />
            </el-icon>
            {{ item.children[0].meta.title }}
          </template>
        </el-menu-item>
      </template>
      <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon" />
          </el-icon>
          {{ item.meta.title }}
        </template>
        <NavMenu :menu-list="item.children" />
      </el-sub-menu>
    </template>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps(['menuList'])

const $router = useRouter()

const goRoute = (value: any) => {
  $router.push({ path: value.index })
}
</script>
<script lang="ts">
export default {
  name: 'NavMenu'
}
</script>
<style scoped></style>

<style scoped></style>
