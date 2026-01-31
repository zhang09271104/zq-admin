<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0">
        <div class="grid-content ep-bg-purple" />
        11222
      </el-col>
      <el-col :span="12" :xs="24">
        <el-form :model="loginForm" class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到zq后台管理系统</h2>
          <el-form-item>
            <el-input v-model="loginForm.username" :prefix-icon="User" />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="loginForm.password"
              type="password"
              :prefix-icon="Lock"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" type="primary" :loading="loading" @click="login"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
//引入获取当前时间的函数
import { getTime } from '@utils/time.ts'
//引入用户相关的小仓库
import useUserStore from '@store/modules/user.ts'
const userStore = useUserStore()

const $router = useRouter()
//收集账号和密码数据
const loginForm = reactive({
  username: 'admin',
  password: '111111'
})
//定义登录按钮加载的效果
const loading = ref(false)
//登录按钮的回调.
const login = async () => {
  loading.value = true
  try {
    //保证登陆成功
    await userStore.userLogin(loginForm)
    //编程式导航跳转到首页显示数据
    await $router.push('./')
    ElNotification({
      type: 'success',
      // title:'Hi,'+getTime()+'好！',
      title: `Hi,${getTime()}好！`,
      message: '欢迎回来'
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    //登陆失败的提示信息
    ElNotification({
      type: 'error',
      message: (error as Error).message
    })
  }
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url(@/assets/images/background.jpg) no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    padding: 40px;
    width: 80%;
    top: 30vh;
    background: url(@/assets/images/login_form.png) no-repeat;
    background-size: cover;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      color: white;
      font-size: 20px;
      margin: 10px 0;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
