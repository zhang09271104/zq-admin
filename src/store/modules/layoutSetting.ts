import { defineStore } from 'pinia'

const useLayoutSettingStore = defineStore('layoutSetting', {
  state: () => {
    return {
      fold: false
    }
  },
  getters: {}
})

export default useLayoutSettingStore
