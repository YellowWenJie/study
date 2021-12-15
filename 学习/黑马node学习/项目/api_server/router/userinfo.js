const express = require("express");

// 创建路由对象
const router = express.Router();

//导入路由处理模块
const userinfo_handler = require("../router_handler/userinfo");

// 导入需要的验证规则对象
const {
  update_userinfo_schema,
  update_password_schema,
  update_avatar_schema
} = require("../schema/user");

// 导入验证表单数据的中间件
const expressJoi = require("@escook/express-joi");

//获取用户基本信息路由
router.get("/userinfo", userinfo_handler.getUserInfo);
// 更新用户信息的路由
router.post(
  "/userinfo",
  expressJoi(update_userinfo_schema),
  userinfo_handler.updateUserInfo
);
//重置密码的路由
router.post(
  "/updatepwd",
  expressJoi(update_password_schema),
  userinfo_handler.updatePassword
);

// 更换用户头像的路由
router.post(
  "/update/avatar",
  expressJoi(update_avatar_schema),
  userinfo_handler.updateAvatar
);

// 将路由对象共享出去
module.exports = router;
