const express = require('express');
const app = express();
const qs = require('querystring')

app.use((req, res, next) => {
  //用来储存客户端发送过来的请求体数据
  let str = '';
  req.on('data', (chunk) => {
    str = chunk;
  })
  req.on('end', () => {
    const body = qs.parse(str)
    req.body = body
  })
})

app.use('/user', (req, res) => {
  res.send(req.body)
})

app.listen(80, () => {
  console.log("localhost:80");
})