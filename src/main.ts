import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'
//引入仓库
import pinia from '@/store/index.ts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/element-variables.scss'

//引入模板的全局样式
import '@/styles/index.scss'
//svg需要的配置代码
import 'virtual:svg-icons-register'
//注册全局组件
import globalComponent from '@/components/index.ts'

const app = createApp(App)

app.use(globalComponent)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
