// 导入数据库操作模块
const db = require("../db/index");
const bcrypt = require("bcryptjs");
//获取用户基本信息的处理函数
module.exports.getUserInfo = (req, res) => {
  // 根据用户的 id，查询用户的基本信息
  // 注意：为了防止用户的密码泄露，需要排除 password 字段
  const sql = `select id, username, nickname, email, user_pic from user where id=?`;
  // 注意：req 对象上的 user 属性，是 Token 解析成功，express-jwt 中间件帮我们挂载上去的
  db.query(sql, req.query.id, (err, results) => {
    // 1. 执行 SQL 语句失败
    if (err) return res.cc(err);

    // 2. 执行 SQL 语句成功，但是查询到的数据条数不等于 1
    if (results.length !== 1) return res.cc("获取用户信息失败！");

    // 3. 将用户信息响应给客户端
    res.send({
      status: 0,
      message: "获取用户基本信息成功！",
      data: results[0]
    });
  });
};
// 更新用户基本信息的处理函数
module.exports.updateUserInfo = (req, res) => {
  const sql = `update user set ? where id = ?`;
  db.query(sql, [req.body, req.body.id], (err, results) => {
    if (err) return res.cc(err);
    if (results.affectedRows !== 1) return res.cc("更新用户信息失败");
    res.send({
      status: 0,
      message: "更新用户信息成功"
    });
  });
};
// 重置用户密码的处理函数
module.exports.updatePassword = (req, res) => {
  // 根据id查询用户的sql语句
  const sql = `select * from user where id = ?`;
  db.query(sql, req.user.id, (err, results) => {
    if (err) return res.cc(err);
    if (results.length != 1) return res.cc("用户不存在");
    // 判断密码是否正确
    const compareResult = bcrypt.compareSync(
      req.body.oldPwd,
      results[0].password
    );
    if (!compareResult) return res.cc("旧密码错误");
    //更新数据库的密码
    const sql = `update user set password=? where id=?`;
    // 对新密码进行 bcrypt 加密处理
    const newPwd = bcrypt.hashSync(req.body.newPwd, 10);
    // 执行 SQL 语句，根据 id 更新用户的密码
    db.query(sql, [newPwd, req.user.id], (err, results) => {
      // SQL 语句执行失败
      if (err) return res.cc(err);
      // SQL 语句执行成功，但是影响行数不等于 1
      if (results.affectedRows !== 1) return res.cc("更新密码失败！");
      // 更新密码成功
      res.send({
        status: 0,
        message: "更新密码成功！"
      });
    });
  });
};
// 更新用户头像的处理函数
exports.updateAvatar = (req, res) => {
  const sql = "update user set user_pic=? where id=?";
  db.query(sql, [req.body.avatar, req.user.id], (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err);

    // 执行 SQL 语句成功，但是影响行数不等于 1
    if (results.affectedRows !== 1) return res.cc("更新头像失败！");

    // 更新用户头像成功
    res.send({
      status: 0,
      message: "更新头像成功！"
    });
  });
};
