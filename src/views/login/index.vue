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
            <el-button class="login_btn" type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'

//收集账号和密码数据
const loginForm = reactive({
  username: '',
  password: ''
})

const onSubmit = () => {
  console.log('submit!')
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
