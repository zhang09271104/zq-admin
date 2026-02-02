<template>
  <div class="layout_container">
    <!--左侧菜单-->
    <div class="layout_slider">
      <Logo />
      <!--展示菜单-->
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="#fff">
          <NavMenu :menu-list="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!--顶部导航-->
    <div class="layout_tabbar">456</div>
    <!--内容展示区域-->
    <div class="layout_main">
      <p style="height: 10000px">789</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from './logo/index.vue'
import NavMenu from './menu/index.vue'
import useUserStore from '@/store/modules/user.ts'
const userStore = useUserStore()
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
  }
  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - #{$base-menu-width});
    height: $base-menu-height;
    background: #67c23a;
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
  }
}
</style>
