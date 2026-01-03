import { request } from '@/utils/request'

export interface LoginParams {
  username: string
  password: string
}

export interface UserInfo {
  id: number
  username: string
  email: string
  avatar: string
}

// 用户登录
export const loginApi = (data: LoginParams) => {
  return request<{ token: string }>({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 获取用户信息
export const getUserInfoApi = () => {
  return request<UserInfo>({
    url: '/user/info',
    method: 'get'
  })
}

// 更新用户信息
export const updateUserInfoApi = (data: Partial<UserInfo>) => {
  return request({
    url: '/user/update',
    method: 'put',
    data
  })
}
