let express = require('express');
let router = express.Router();
const { login, regist } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
/* GET users listing. */
router.get('/', function (req, res, next) {
  // const { username, password, realname } = req.body
  // console.log(req.body, 31231231)
  // const result = regist(username, password, realname)
  // return result.then(data => {
  return res.json(
    new SuccessModel('大家好啊')
  )
  // })
});

router.post('/regist', function (req, res, next) {
  const { username, password, realname } = req.body
  // console.log(req.body, 31231231)
  const result = regist(username, password, realname)
  return result.then(data => {
    return res.json(
      new SuccessModel(req.body)
    )
  })
});

router.post('/login', function (req, res, next) {
  const { username, password } = req.body
  const result = login(username, password)
  return result.then(data => {
    console.log(data, 'hah')
    if (data.username) {
      // 设置 session
      req.session.username = data.username
      req.session.realname = data.realname

      res.json(
        new SuccessModel('成功了')
      )
      return
    }
    res.json(
      new ErrorModel('登录失败')
    )
  })
});

module.exports = router;
