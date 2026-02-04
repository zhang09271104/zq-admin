<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@store/modules/layoutSetting.ts'

const layoutSettingStore = useLayoutSettingStore()

const flag = ref(true)
//监听仓库的刷新按钮值，只要值有改变，则改变销毁dom重新创建
watch(
  () => layoutSettingStore.refsh,
  (newVal, oldVal) => {
    flag.value = false
    //销毁后重新创建dom
    nextTick(() => {
      flag.value = true
    })
  }
)
</script>
<script lang="ts">
export default {
  name: 'NavMain'
}
</script>
<style scoped></style>
