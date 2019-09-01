import http from '../config'
let getBlogList = (params) => {
  return http({ method: 'get', url: '/api/blogs/list', params })
}
let getBlogDetail = (params) => {
  return http({ method: 'get', url: '/api/blogs/detail', params })
}
let getRouteTrip = (data) => {
  return http({ method: 'post', url: '/api/routes/newTrip', data })
}
let getRouteMap = (data) => {
  return http({ method: 'post', url: '/api/routes/newMap', data })
}
let getBlogDel = (data) => {
  return http({ method: 'post', url: '/api/blogs/del', data })
}

export default {
  getBlogList,
  getBlogDetail,
  getRouteTrip,
  getRouteMap,
  getBlogDel
}
