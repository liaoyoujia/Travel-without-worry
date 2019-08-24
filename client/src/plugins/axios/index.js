import user from './module/user'
import blog from './module/blog'
import ruleUser from './module/ruleUser'
export default {
  ...user,
  ...blog,
  ...ruleUser
}
