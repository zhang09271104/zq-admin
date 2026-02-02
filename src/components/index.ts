import type { App } from 'vue'
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const allComponents = {
  SvgIcon,
  Pagination
}

export default {
  //注册项目中的全局组件
  install(app: App) {
    Object.entries(allComponents).forEach(([key, component]) => {
      app.component(key, component)
    })
    //图标全局注册
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}
