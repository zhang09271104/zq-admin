//进行axios二次封装:使用请求与响应拦截器
import axios from 'axios'

//第一步:利用axios对象的create方法,去创建axios实例(其他的配置:基础路径、超时的时间)
const request = axios.create({
  //基础路径上会携带/api
  baseURL: import.meta.env.VITE_API_BASE_URL,
  //超时的时间的设置
  timeout: 5000
})
//第二步:request实例添加请求拦截器
request.interceptors.request.use((config) => {
  //返回配置对象
  return config
})

//第三步:request实例添加响应拦截器
request.interceptors.response.use(
  (response) => {
    //成功回调
    //简化数据
    return response.data
  },
  (error) => {
    //失败回调:处理http网络错误的
    return Promise.reject(error)
  }
)

export default request
