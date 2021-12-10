// 导入 Joi 来定义验证规则
const Joi = require('joi')
/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

// 用户名的验证规则
const username = Joi.string().alphanum().min(1).max(10).required()
// 密码的验证规则
const password = Joi.string().pattern(/^[\S]{6,12}$/).required()

//定义验证注册和登录表单数据的规则对象
module.exports.res_login_schema = {
  body: {
    username,
    password,
  },
}