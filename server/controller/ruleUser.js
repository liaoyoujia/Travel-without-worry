
const { exec } = require('../db/mysql')
const getPerson = (name) => {
  let sql = `select * from ruleUsers where 1=1 `
  if (name) {
    sql += `and name='${name}' `
  }
  sql += `order by id desc;`
  // 返回 promise
  return exec(sql)
}

module.exports = {
  getPerson
}
