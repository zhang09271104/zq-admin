<template>
  <div class="layout_container">
    <!--左侧菜单-->
    <div class="layout_slider" :class="{ fold: layoutSettingStore.fold ? true : false }">
      <Logo />
      <!--展示菜单-->
      <el-scrollbar class="scrollbar">
        <el-menu
          :collapse="layoutSettingStore.fold ? true : false"
          :default-active="$route.path"
          background-color="#001529"
          text-color="#fff"
        >
          <NavMenu :menu-list="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!--顶部导航-->
    <div class="layout_tabbar" :class="{ fold: layoutSettingStore.fold ? true : false }">
      <Tabbar />
    </div>
    <!--内容展示区域-->
    <div class="layout_main" :class="{ fold: layoutSettingStore.fold ? true : false }">
      <NavMain />
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from './logo/index.vue'
import NavMenu from './menu/index.vue'
import NavMain from './main/index.vue'
import Tabbar from './tabbar/index.vue'
import useUserStore from '@/store/modules/user.ts'
import useLayoutSettingStore from '@store/modules/layoutSetting.ts'

import { useRoute } from 'vue-router'

const layoutSettingStore = useLayoutSettingStore()

const userStore = useUserStore()

const $route = useRoute()
</script>
<script lang="ts">
export default {
  name: 'Layout'
}
</script>
<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      color: white;
      //background: #67c23a;
      .el-menu {
        border-right: none;
      }
    }

    &.fold {
      width: $base-menu-min-width;
    }
  }

  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - #{$base-menu-width});
    height: $base-menu-height;
    &.fold {
      width: calc(100vw - #{$base-menu-min-width});
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    position: absolute;
    top: $base-menu-height;
    left: $base-menu-width;
    width: calc(100% - #{$base-menu-width});
    height: calc(100vh - #{$base-menu-height});
    background: #409eff;
    padding: 20px;
    overflow: auto;
    &.fold {
      width: calc(100vw - #{$base-menu-min-width});
      left: $base-menu-min-width;
    }
  }
}
</style>
