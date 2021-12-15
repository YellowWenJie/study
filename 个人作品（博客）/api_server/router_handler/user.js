/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
//导入数据库操作模块
const bcrypt = require("bcryptjs");
const db = require("../db/index");
// 用这个包来生成 Token 字符串
const jwt = require("jsonwebtoken");
// 导入配置文件
const config = require("../config");
// 注册用户的处理函数
exports.regUser = (req, res) => {
  //获取客户端提交到服务器的用户信息
  const userinfo = req.body;
  // if (!userinfo.username || !userinfo.password) {
  //   return res.send({ status: 1, message: '用户名或密码不合法' })
  // } else { n
  const sqlStr = `select * from user where username=?`;
  db.query(sqlStr, userinfo.username, (err, results) => {
    if (err)
      //return res.send({ status: 1, message: err.message })
      return res.cc(err);
    if (results.length > 0)
      // return res.send({ status: 1, message: "用户名以被占用，请重新输入！" })
      return res.cc("用户名被占用，请重新输入！");
    //调用bcrypt.hashSync(需要加密的值，10)10代表加密的程度对密码进行加密
    userinfo.password = bcrypt.hashSync(userinfo.password, 10);
    const sql = `insert into user set ?`;
    db.query(
      sql,
      {
        username: userinfo.username,
        password: userinfo.password,
        email: userinfo.email
      },
      (err, results) => {
        if (err)
          // return res.send({ status: 1, message: err.message })
          return res.cc(err);
        if (results.affectedRows !== 1)
          // return res.send({ status: 1, message: '注册用户失败，请稍后再试' })
          return res.cc("注册用户失败，请稍后再试");
        res.send({ status: 0, message: "注册用户成功" });
      }
    );
  });
};

// 登录的处理函数
exports.login = (req, res) => {
  //获取表单数据
  const userinfo = req.body;
  const sql = `select * from user where username=?`;
  db.query(sql, userinfo.username, (err, results) => {
    if (err) return res.cc(err);
    if (results.length !== 1) return res.cc("登录失败,未注册");
    // 拿着用户输入的密码,和数据库中存储的密码进行对比，调用 bcrypt.compareSync(用户提交的密码, 数据库中的密码) 方法比较密码是否一致
    const compareResult = bcrypt.compareSync(
      userinfo.password,
      results[0].password
    );
    if (!compareResult) res.cc("登陆失败,密码不正确");
    // 剔除完毕之后，user 中只保留了用户的 id, username, nickname, email 这四个属性的值
    const user = { ...results[0], password: "", user_pic: "" };
    //对用户的信息进行加密，生成token字符串jwj.sign（加密的对象，加密使用到SecretKey的值）
    const tokenStr = jwt.sign(user, config.jwtSecretKey, {
      expiresIn: config.expiresIn
    });
    res.send({
      status: 0,
      message: "登录成功",
      token: "Bearer " + tokenStr
    });
  });
};
