import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store'

interface ResponseData<T = any> {
  code: number
  data: T
  message: string
}

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = `Bearer ${userStore.token}`
    }
    return config
  },
  (error) => {
    console.error('Request error:', error)
    ElMessage.error('请求发送失败')
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse<ResponseData>) => {
    return response
  },
  (error) => {
    console.error('Response error:', error)

    let message = '请求失败'

    if (error.response) {
      const { status, data } = error.response

      if (status === 400) {
        message = data?.message || '请求参数错误'
      } else if (status === 401) {
        message = '未授权，请重新登录'
        const userStore = useUserStore()
        userStore.logout()
        setTimeout(() => {
          window.location.href = '/login'
        }, 1000)
      } else if (status === 403) {
        message = '拒绝访问'
      } else if (status === 404) {
        message = '请求地址不存在'
      } else if (status === 500) {
        message = '服务器内部错误'
      } else if (status === 502) {
        message = '网关错误'
      } else if (status === 503) {
        message = '服务不可用'
      } else if (status === 504) {
        message = '网关超时'
      } else {
        message = data?.message || `连接错误 ${status}`
      }
    } else if (error.code === 'ECONNABORTED') {
      message = '请求超时，请稍后重试'
    } else if (error.message === 'Network Error') {
      message = '网络连接异常，请检查网络'
    } else {
      message = error.message || '未知错误'
    }

    ElMessage.error(message)
    return Promise.reject(error)
  }
)

class Request {
  async request<T = any>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response = await service.request<ResponseData<T>>(config)
      const { code, data, message } = response.data

      if (code !== 200) {
        ElMessage.error(message || '请求失败')

        if (code === 401) {
          const userStore = useUserStore()
          userStore.logout()
          setTimeout(() => {
            window.location.href = '/login'
          }, 1000)
        }

        return Promise.reject(new Error(message || 'Error'))
      }

      return data
    } catch (error) {
      return Promise.reject(error)
    }
  }

  get<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ method: 'GET', url, params, ...config })
  }

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ method: 'POST', url, data, ...config })
  }

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ method: 'PUT', url, data, ...config })
  }

  delete<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ method: 'DELETE', url, params, ...config })
  }

  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ method: 'PATCH', url, data, ...config })
  }

  upload<T = any>(url: string, formData: FormData, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({
      method: 'POST',
      url,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
      ...config
    })
  }

  async download(url: string, filename: string, params?: any): Promise<void> {
    try {
      const response = await service.request({
        method: 'GET',
        url,
        params,
        responseType: 'blob'
      })

      const blob = new Blob([response.data])
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = filename
      link.click()
      URL.revokeObjectURL(link.href)
    } catch (error) {
      ElMessage.error('文件下载失败')
      return Promise.reject(error)
    }
  }
}

const http = new Request()

export default http
export { service }
export const request = http.request.bind(http)
