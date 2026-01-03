import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// 路由配置
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页'
    }
  }
  // {
  //     path: '/about',
  //     name: 'About',
  //     component: () => import('@/views/About.vue'),
  //     meta: {
  //         title: '关于'
  //     }
  // },
  // {
  //     path: '/login',
  //     name: 'Login',
  //     component: () => import('@/views/Login.vue'),
  //     meta: {
  //         title: '登录',
  //         noAuth: true // 不需要登录验证
  //     }
  // },
  // {
  //     path: '/:pathMatch(.*)*',
  //     name: 'NotFound',
  //     component: () => import('@/views/NotFound.vue'),
  //     meta: {
  //         title: '404'
  //     }
  // }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// 全局前置守卫
// router.beforeEach((to, _from, next) => {
//     // 设置页面标题
//     document.title = (to.meta.title as string) || '我的应用'
//
//     // 权限验证示例
//     const token = localStorage.getItem('token')
//     if (!to.meta.noAuth && !token) {
//         next('/login')
//     } else {
//         next()
//     }
// })

// 全局后置钩子
// router.afterEach(() => {
//     // 可以在这里做一些操作，比如隐藏加载动画
// })

export default router
