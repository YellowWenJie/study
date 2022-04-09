//引用express框架
const express = require('express');
//创建展示页面路由
const home = express.Router();

home.get('/login',(req,res)=>{
  res.render('home/login')
})

home.get('/user',(req,res)=>{
  res.render('home/user')
})


module.exports = home;