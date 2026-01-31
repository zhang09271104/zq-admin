//封装本地存储数据和从本地读取数据

//本地存储数据
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}
//从本地获取数据
export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN')
}
