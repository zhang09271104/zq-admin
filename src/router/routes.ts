//对外暴露配置路由（常量路由）

export const constantRoute = [
  {
    //登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login' //命名路由
  },
  //登录成功以后展示数据的路由
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'Home' //命名路由
  },
  //404
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404' //命名路由
  },
  //任意路由也叫通配符路由
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any' //命名路由
  }
]
