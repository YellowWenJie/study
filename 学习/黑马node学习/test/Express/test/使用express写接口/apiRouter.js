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

//将用户信息保存到session中
router.post('/session', (req, res) => {
  if (req.body.username !== 'admin' || req.body.password !== '123456') {
    return res.send({ status: 1, msg: '登录失败', body })

  } else {
    //登录成功后把用户信息保存到session中
    req.session.user = req.body//用户信息
    req.session.islogin = true //用户的登录信息
    return res.send({ status: 0, msg: '登录成功' })

  }
})

//获取用户姓名的接口
router.get('/username', (req, res) => {
  if (!req.session.islogin) {
    return res.send({ status: 1, msg: '获取用户姓名失败' })
  } else {
    return res.send({ status: 0, msg: '获取用户姓名成功', username: req.session.user.username })
  }
})

//清空session信息
router.post('/logout', (req, res) => {
  req.session.destroy();
  res.send({ status: 0, msg: '清空session信息成功' })
})

module.exports = router;