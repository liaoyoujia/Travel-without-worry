let express = require('express');
let router = express.Router();
const { login, regist } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
/* GET users listing. */
router.post('/regist', function (req, res, next) {
  const { username, password, realname } = req.body
  const result = regist(username, password, realname)
  return result.then(data => {
      if (data && data.id) {
      return res.json(
        new SuccessModel(data)
      )
    } else {
      return res.json(
        new ErrorModel()
      )
    }

  }).catch((err) => { console.log(err, '报错了') })
});
router.post('/login', function (req, res, next) {
  const { username, password } = req.body
  const result = login(username, password)
  return result.then(data => {
    console.log(data, '登录')
    if (data.username) {
      // 设置 session
      req.session.username = data.username
      req.session.realname = data.realname
      data.login = 'success'
      res.json(
        new SuccessModel(data)
      )
      return
    }
    res.json(
      new ErrorModel('登录失败')
    )
  })
});

module.exports = router;
