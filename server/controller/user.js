const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')

const login = (username, password) => {
  username = escape(username)
  // 生成加密密码
  password = genPassword(password)
  password = escape(password)
  const sql = `
        select username, realname from users where username=${username} and password=${password}
    `
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}
const regist = (username, password, realname) => {
  username = escape(username)
  realname = escape(realname)
  // 生成加密密码
  password = genPassword(password)
  password = escape(password)
  console.log(username, realname, password, 123456);

  const sql = `
  insert into users (username, password, realname)
  values ('${username}', '${password}', '${realname}');
`
  return exec(sql).then(insertData => {
    return {
      id: insertData.insertId
    }
  })
}
module.exports = {
  login,
  regist
}
