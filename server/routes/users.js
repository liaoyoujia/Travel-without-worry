let express = require('express');
let router = express.Router();
const { login, regist } = require('../controller/user')
/* GET users listing. */
router.post('/regist', function (req, res, next) {
  const { username, password, realname } = req.body
  console.log(req.body, 31231231)
  const result = regist(username, password, realname)
  return result.then(data => {
    res.json(
      new SuccessModel(data)
    )
  })
});

router.post('/login', function (req, res, next) {
  const { username, password } = req.body
  const result = login(username, password)
  return result.then(data => {
    if (data.username) {
      // 设置 session
      req.session.username = data.username
      req.session.realname = data.realname

      res.json(
        new SuccessModel()
      )
      return
    }
    res.json(
      new ErrorModel('登录失败')
    )
  })
});

module.exports = router;
