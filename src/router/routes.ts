//对外暴露配置路由（常量路由）

export const constantRoute = [
  {
    //登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login', //命名路由
    meta: {
      title: '登录',
      hidden: true
    }
  },
  //登录成功以后展示数据的路由
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout', //命名路由
    meta: {
      title: 'layout'
    },
    children: [
      {
        path: '/123',
        component: null,
        meta: {
          title: '首页',
          hidden: false
        },
        name: '首页'
      },
      {
        path: '/234',
        component: null,
        meta: {
          title: '234',
          hidden: false
        },
        name: '234'
      }
    ]
  },
  //404
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404', //命名路由
    meta: {
      title: '404',
      hidden: true
    },
    children: [
      {
        path: '',
        component: null,
        meta: {}
      }
    ]
  },
  //任意路由也叫通配符路由
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any', //命名路由
    meta: {
      title: '任意路由',
      hidden: true
    }
  }
]
