//引用express框架
const express = require('express');
//创建展示页面路由
const admin = express.Router();

admin.get('/',(req,res)=>{
  res.send('欢迎来到博客管理')
})

module.exports = admin;