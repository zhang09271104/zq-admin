//创建用户相关的小仓库
import { defineStore } from 'pinia'
//引入接口
import { reqLogin } from '@api/user/user.ts'
//引入数据类型
import type { loginFormData } from '@api/user/type.ts'

const useUserStore = defineStore('user', {
  //小仓库存储数据的地方
  state: () => {
    return {
      token: localStorage.getItem('TOKEN') //用户we
    }
  },
  getters: {},
  //异步或者逻辑的地方
  actions: {
    //用户登录的方法
    async userLogin(data: loginFormData) {
      //登录请求
      const result: any = await reqLogin(data)
      //登录请求成功
      if (result.code === 200) {
        //pinia仓库存储一下token
        //由于pinia|vuex存储数据其实是利用js对象
        this.token = result.data.token
        //本地存储持久化数据一份
        localStorage.setItem('TOKEN', result.data.token)

        return 'ok'
      } else {
        //登录请求失败
        return Promise.reject(new Error(result.data.message))
      }
    }
  }
})

//对外暴露小仓库
export default useUserStore
