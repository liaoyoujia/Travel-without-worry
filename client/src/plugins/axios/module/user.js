import http from '../config'
let getRegister = (data) => {
  return http({ method: 'post', url: 'api/users/regist', data })
}
let getLogin = (data) => {
  return http({ method: 'post', url: 'api/users/login', data })
}

export default {
  getRegister,
  getLogin
}
