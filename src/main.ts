import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router/index.ts'
import '@/styles/element-variables.scss'
//引入模板的全局样式
import '@/styles/index.scss'
//svg需要的配置代码
import 'virtual:svg-icons-register'
//注册全局组件
import globalComponent from '@/components/index.ts'
import axios from 'axios'

axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '111111'
  }
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(globalComponent)
app.use(pinia)
app.use(router)
app.mount('#app')
