//定义用户相关数据的ts类型
//用户登录接口携带参数的ts类型
export interface loginFormData {
  username: string
  password: string
}

//登录接口返回的数据类型
export interface loginResponseData {
  code: number
  data: dataType
}

interface dataType {
  dataType: string
}

//定义服务器返回用户数据数据类型
export interface userResponseData {
  code: number
  data: user
}

interface user {
  checkUser: userInfo
}
interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}
