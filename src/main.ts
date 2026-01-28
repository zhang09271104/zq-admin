import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router/index.ts'

import ElementPlus from 'element-plus'
import '@/styles/element-variables.scss'

//引入模板的全局样式
import '@/styles/index.scss'
//svg需要的配置代码
import 'virtual:svg-icons-register'
//注册全局组件
import globalComponent from '@/components/index.ts'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(globalComponent)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
