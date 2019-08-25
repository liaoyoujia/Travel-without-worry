import http from '../config'
let getBlogList = (params) => {
  return http({ method: 'get', url: '/api/blogs/list', params })
}
let getBlogDetail = (params) => {
  return http({ method: 'get', url: '/api/blogs/detail', params })
}
let getRouteNew = (data) => {
  return http({ method: 'post', url: '/api/routes/newTrip', data })
}
let getBlogUpdate = (data) => {
  return http({ method: 'post', url: '/api/blogs/update', data })
}
let getBlogDel = (data) => {
  return http({ method: 'post', url: '/api/blogs/del', data })
}

export default {
  getBlogList,
  getBlogDetail,
  getRouteNew,
  getBlogUpdate,
  getBlogDel
}
