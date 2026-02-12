//路由鉴权：项目当中当前路由是否被访问的权限设置
import router from '@/router/index.ts'
import setting from './setting'
//引入进度条以及进度条样式
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
//取消进度条加载的圆圈
nprogress.configure({ showSpinner: false })

//获取用户相关的小仓库内部token数据,去判断用户是否登录成功
import useUserStore from '@store/modules/user.ts'
import pinia from './store/index.ts'

const userStore = useUserStore(pinia)

//全局守卫：项目当中任意路由的切换都会触发的钩子
//全局前置守位
router.beforeEach(async (to, from, next) => {
  //路由切换时，设置页面导航标签标题
  document.title = `${setting.title} - ${to.meta.title}`
  //to:你将要访问那个路由
  //from:你从来个路由而来
  //next:路由的放行函数
  nprogress.start()
  //获取token,去判断用户是否登录
  const token = userStore.token
  //获取用户名字
  const username = userStore.username
  if (token) {
    //用户登录成功
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        // 用户信息存在:放行
        next()
      } else {
        try {
          // 用户信息不存在:重新发送请求获取用户信息
          await userStore.userInfo()
          next()
        } catch (error) {
          //token过期:获取不到用户信息了->退出登录->用户相关数据清空并回到登陆页面
          //用户手动修改本地存储token来测试该状态
          await userStore.userLogout()

          next({ path: '/login', query: { query: to.path } })
        }
      }
    }
  } else {
    //用户未登录：如果路由访问路径是login则放行;如果不是则重定向到login页面,并将访问路径带到登录页面路径上
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})

//全局后置守卫
router.afterEach((to, from, next) => {
  nprogress.done()
})

//1、任何路由切换实现进度条业务-nprogress
//2、路由鉴权：路由组件访问权限的设置
//全部路由组件:登录|404|任意路由|首页|数据大屏|权限管理(三个子路由)|商品管理(四个子路由)

//用户未登录:可以访问login,其余六个路由不能访问(指向login)
//用户登录成功:不可以访问login[指向首页],其余的路由可以访问
