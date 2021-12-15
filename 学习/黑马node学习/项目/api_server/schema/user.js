// 导入 Joi 来定义验证规则
const Joi = require("joi");
/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

// 用户名的验证规则
const username = Joi.string().alphanum().min(1).max(10).required();
// 密码的验证规则
const password = Joi.string()
  .pattern(/^[\S]{6,12}$/)
  .required();
// 定义 id, nickname, emial 的验证规则
const id = Joi.number().integer().min(1).required();
const nickname = Joi.string().required();
const email = Joi.string().email().required();
// 定义重置密码验证规则，oldPwd，newPwd
const newPwd = Joi.not(Joi.ref("oldPwd")).concat(password);
// dataUri() 指的是如下格式的字符串数据：
// data:image/png;base64,VE9PTUFOWVNFQ1JFVFM=
const avatar = Joi.string().dataUri().required();

//定义验证注册和登录表单数据的规则对象
module.exports.res_login_schema = {
  body: {
    username,
    password
  }
};
// 验证规则对象 - 更新用户基本信息
exports.update_userinfo_schema = {
  body: {
    id,
    nickname,
    email
  }
};
// 验证规则对象 - 重置密码
exports.update_password_schema = {
  body: {
    // 使用 password 这个规则，验证 req.body.oldPwd 的值
    oldPwd: password,
    newPwd
  }
};
// 验证规则对象 - 更新头像
exports.update_avatar_schema = {
  body: {
    avatar
  }
};
