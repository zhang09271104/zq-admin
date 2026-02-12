//创建用户相关的小仓库
import { defineStore } from 'pinia'
//引入接口
import { reqLogin, reqUserInfo } from '@api/user/user.ts'
//引入数据类型
import type { loginFormData, loginResponseData, userResponseData } from '@api/user/type.ts'
//引入路由
import { constantRoute } from '@/router/routes.ts'
import type { UserState } from './types/types.ts'

import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@utils/token.ts'

const useUserStore = defineStore('user', {
  //小仓库存储数据的地方
  state: (): UserState => {
    return {
      // token: localStorage.getItem('TOKEN') //用户唯一标识
      token: GET_TOKEN(), //用户唯一标识
      menuRoutes: constantRoute, //仓库存储菜单数据
      username: '',
      avatar: ''
    }
  },
  getters: {},
  //异步或者逻辑的地方
  actions: {
    //用户登录的方法
    async userLogin(data: loginFormData) {
      //登录请求
      const result: loginResponseData = await reqLogin(data)
      //登录请求成功
      if (result.code === 200) {
        //pinia仓库存储一下token
        //由于pinia|vuex存储数据其实是利用js对象
        this.token = result.data.token as string
        //本地存储持久化数据一份
        localStorage.setItem('TOKEN', result.data.token as string)
        SET_TOKEN(result.data.token as string)

        return 'ok'
      } else {
        //登录请求失败
        return Promise.reject(new Error(result.data.message))
      }
    },
    //获取用户信息
    async userInfo() {
      //获取用户信息进行存储仓库当中的【名字、用户头像】
      const result: any = await reqUserInfo()
      //如果用户获取信息成功，存储用户信息
      if (result.code === 200) {
        this.username = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
      }
    },
    //退出登录
    async userLogout() {
      this.token = ''
      this.username = ''
      this.avatar = ''
      REMOVE_TOKEN()
    }
  }
})

//对外暴露小仓库
export default useUserStore
