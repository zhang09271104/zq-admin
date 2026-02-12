<template>
  <el-button icon="Refresh" size="small" circle @click="updateRefresh" />
  <el-button icon="FullScreen" size="small" circle @click="fullScreen" />
  <el-button icon="Setting" size="small" circle />
  <img :src="userStore.avatar" alt="" class="avatar" />
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@store/modules/layoutSetting.ts'
import useUserStore from '@store/modules/user.ts'
import { useRouter, useRoute } from 'vue-router'

const layoutSettingStore = useLayoutSettingStore()
const userStore = useUserStore()
const $router = useRouter()
const $route = useRoute()

const updateRefresh = () => {
  layoutSettingStore.refsh = !layoutSettingStore.refsh
}

const fullScreen = () => {
  const full = document.fullscreenElement
  //切换全屏
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
//退出登录点击回调
const logout = () => {
  //第一步:需要向服务器发请求【退出登录接口】
  //第二步：仓库当中关于相关数据清空【token|username|avatar】
  //第三步：跳转登录界面
  // let redirect=$route.query.redirect;
  userStore.userLogout()
  $router.push({ path: '/login', query: { redirect: $route.path } })
}
</script>
<script lang="ts">
export default {
  name: 'Setting'
}
</script>
<style scoped lang="scss">
.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 0 10px;
}
</style>
