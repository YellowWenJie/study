const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
//配置解析表单数据的中间件(post的body)
app.use(express.urlencoded({ extended: false }))
//导入jwt相关的俩个包。
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
//定义secretkey秘钥
const secretkey = 'itheima No1 ^_^'
//将JWT字符串还原为json对象的中间件
app.use(expressJWT({ secret: secretkey, algorithms: ['HS256'] }).unless({ path: [/^\/api\//] }))

//将用户信息保存到token中
router.post('/api/token', (req, res) => {
  if (req.body.username !== 'admin' || req.body.password !== '123456') {
    return res.send({ status: 1, msg: '登录失败' })
  } else {
    //登录成功后，调用jwt.sign()方法生成JWT字符串。并通过token属性发送给客户端
    const tokenStr = jwt.sign({ username: req.body.username }, secretkey, { expiresIn: '60s' })
    return res.send({ status: 0, msg: '登录成功', token: tokenStr, })
  }
})
//这是一个有权限的api接口
app.get('/admin', function (req, res) {
  console.log(req.user);
  res.send({
    status: 200,
    message: '获取用户信息成功',
    data: req.user//要发送给客户端的用户信息
  })
})
//获取JWT失败后产生的错误
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.send({
      status: '401',
      massage: '无效token'
    })
  } else {
    res.end({
      status: 500,
      message: '未知的错误'
    })
  }
})

//cors解决跨域问题
app.use(cors())
app.use(router)

app.listen(80, () => {
  console.log("localhost:80");
})
