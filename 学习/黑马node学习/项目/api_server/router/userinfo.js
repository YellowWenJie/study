const express = require("express");

// 创建路由对象
const router = express.Router();

//获取用户基本信息路由
router.get("/userinfo", (req, res) => {
  res.send("ok");
});

// 将路由对象共享出去
module.exports = router;
