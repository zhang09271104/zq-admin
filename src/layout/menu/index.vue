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
      <el-sub-menu
        v-if="item.children && item.children.length > 1"
        :index="item.path"
        @click="goRoute"
      >
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
defineOptions({
  name: 'NavMenu'
})
defineProps(['menuList'])

const goRoute = (value: any) => {
  console.log(value)
}
</script>

<style scoped></style>
