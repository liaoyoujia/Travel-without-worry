const express = require('express');
const router = express.Router();
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require('../middleware/index')
const { getPerson } = require('../controller/ruleUser')
router.get('/person', loginCheck, (req, res, next) => {
  let name = req.query.name
  const result = getPerson(name)
  return result.then(listData => {
    if (listData.length) {
      res.json(
        new SuccessModel(listData)
      )
    } else {
      res.json(
        new ErrorModel('出错了')
      )
    }
  }).catch((err) => {
    res.json(
      new ErrorModel(err)
    )
  })
});
router.get('/test',(req, res, next) => {
    return res.body={
     id:1,
     msg:'dasdasdasd'
    }
});

module.exports = router;
