const express = require("express");

// 创建路由对象
const router = express.Router();
//导入路由处理模块
const userinfo_handler = require("../router_handler/userinfo");
//获取用户基本信息路由
router.get("/userinfo", userinfo_handler.getUserInfo);

// 将路由对象共享出去
module.exports = router;
