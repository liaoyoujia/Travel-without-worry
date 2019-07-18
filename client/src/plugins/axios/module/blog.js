import http from '../config'
let getBlogList = (params) => {
  return http({ method: 'get', url: '/api/blogs/list', params })
}
let getBlogDetail = (params) => {
  return http({ method: 'get', url: '/api/blogs/detail', params })
}
let getBlogNew = (data) => {
  return http({ method: 'post', url: '/api/blogs/new', data })
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
  getBlogNew,
  getBlogUpdate,
  getBlogDel
}
