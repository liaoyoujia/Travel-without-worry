const express = require('express');
const router = express.Router();
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require('../middleware/index')
const { newRouteAs, newRouteBs } = require('../controller/routes')
/* GET home page. */
// router.get('/list', loginCheck, (req, res, next) => {
//   let author = req.session.username
//   let keyword = req.query.keyword || ''
//   const result = getList(author, keyword)
//   return result.then(listData => {
//     res.json(
//       new SuccessModel(listData)
//     )
//   })
// });

// router.get('/detail', loginCheck, (req, res, next) => {
//   const result = getDetail(req.query.id)
//   return result.then(data => {
//     res.json(
//       new SuccessModel(data)
//     )
//   })
// });
router.post('/newTrip', loginCheck, (req, res, next) => {
  const result = newRouteAs(req.body)
  return result.then(data => {
    res.json(
      new SuccessModel(data)
    )
  }).catch((err) => { console.log(err) })
})
router.post('/newMap', loginCheck, (req, res, next) => {
  const result = newRouteBs(req.body)
  return result.then(data => {
    res.json(
      new SuccessModel(data)
    )
  }).catch((err) => { console.log(err) })
})

// router.post('/update', loginCheck, (req, res, next) => {
//   const result = updateBlog(req.query.id, req.body)
//   return result.then(val => {
//     if (val) {
//       res.json(
//         new SuccessModel()
//       )
//     } else {
//       res.json(
//         new ErrorModel('更新博客失败')
//       )
//     }
//   })
// })
// router.post('/del', loginCheck, (req, res, next) => {
//   const author = req.session.username
//   console.log(req.query.id, 'lioadasdasd')
//   const result = delBlog(req.query.id, author)
//   return result.then(val => {
//     if (val) {
//       res.json(
//         new SuccessModel()
//       )
//     } else {
//       res.json(
//         new ErrorModel('删除博客失败')
//       )
//     }
//   })
// })
module.exports = router;
