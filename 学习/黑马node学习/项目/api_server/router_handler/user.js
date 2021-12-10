/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
//导入数据库操作模块
const bcrypt = require('bcryptjs')
const db = require('../db/index')

// 注册用户的处理函数
exports.regUser = (req, res) => {
  //获取客户端提交到服务器的用户信息
  const userinfo = req.body
  // if (!userinfo.username || !userinfo.password) {
  //   return res.send({ status: 1, message: '用户名或密码不合法' })
  // } else { n
  const sqlStr = `select * from ev_users where username=?`
  db.query(sqlStr, userinfo.username, (err, results) => {
    if (err) {
      //return res.send({ status: 1, message: err.message })
      return res.cc(err)
    } else if (results.length > 0) {
      // return res.send({ status: 1, message: "用户名以被占用，请重新输入！" })
      return res.cc('用户名被占用，请重新输入！')
    } else {
      //调用bcrypt.hashSync(需要加密的值，10)10代表加密的程度对密码进行加密
      userinfo.password = bcrypt.hashSync(userinfo.password, 10)
      const sql = `insert into ev_users set ?`
      db.query(sql, { username: userinfo.username, password: userinfo.password }, (err, results) => {
        if (err) {
          // return res.send({ status: 1, message: err.message })
          return res.cc(err)
        } else if (results.affectedRows !== 1) {
          // return res.send({ status: 1, message: '注册用户失败，请稍后再试' })
          return res.cc('注册用户失败，请稍后再试')
        } else {
          res.send({ status: 0, message: '注册用户成功' })
        }
      })
    }
  })
}

// 登录的处理函数
exports.login = (req, res) => {

}