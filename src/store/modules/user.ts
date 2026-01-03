import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    // 状态
    const token = ref<string>('')
    const userInfo = ref<any>(null)

    // 计算属性
    const isLogin = computed(() => !!token.value)
    const userName = computed(() => userInfo.value?.name || '游客')

    // 方法
    function setToken(newToken: string) {
      token.value = newToken
    }

    function setUserInfo(info: any) {
      userInfo.value = info
    }

    function logout() {
      token.value = ''
      userInfo.value = null
      localStorage.removeItem('token')
    }

    return {
      token,
      userInfo,
      isLogin,
      userName,
      setToken,
      setUserInfo,
      logout
    }
  },
  {
    persist: true // 开启持久化
  }
)
