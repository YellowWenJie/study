const express = require('express');

const router = express.Router();

//挂载对应路由
router.get('/get', (req, res) => {
  const query = req.query;
  res.send({
    status: 0,//0表示处理成功，1表示处理失败
    mag: 'Get请求成功',//状态的描述
    data: query//需要响应给客户端的数据
  })
})

router.post('/post', (req, res) => {
  const body = req.body;
  res.send({
    status: 0,//0表示处理成功，1表示处理失败
    mag: 'Post请求成功',//状态的描述
    data: body//需要响应给客户端的数据
  })
})

//预警请求
router.delete('/delete', (req, res) => {
  const body = req.body;
  res.send({
    status: 0,//0表示处理成功，1表示处理失败
    mag: 'delete请求成功',//状态的描述
  })
})


module.exports = router;