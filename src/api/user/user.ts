//统一管理用户相关接口
import request from '@utils/request.ts'
import type { loginFormData, loginResponseData, userResponseData } from '@api/user/type.ts'

//统一管理接口
const API = {
  LOGIN_URL: '/user/login',
  USERNAME_URL: '/user/info'
}

//暴露请求函数
//登录接口方法
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

//获取用户信息接口方法
export const reqUserInfo = () => request.get<userResponseData>(API.USERNAME_URL)
