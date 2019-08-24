import http from '../config'
let getPerson = (params = {}) => {
  return http({ method: 'get', url: '/api/ruleUsers/person', params })
}

export default {
  getPerson,
}
