import user from './module/user'
import route from './module/route'
import ruleUser from './module/ruleUser'
export default {
  ...user,
  ...route,
  ...ruleUser
}
