//http://escook.cn:8088/#/
// 导入 express 模块
const express = require("express");
// 创建 express 的服务器实例
const app = express();
// 导入 cors 中间件解决跨域问题
const cors = require("cors");
// 将 cors 注册为全局中间件(跨域)
app.use(cors());
//配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件
app.use(express.urlencoded({ extended: false }));
//封装res错误回调函数，一定要在路由之前
app.use((req, res, next) => {
  //status为1，表示失败的情况
  //err的值，可能是一个错误对象，也可能是一个错误的描述字符串
  res.cc = function (err, status = 1) {
    res.send({
      status,
      err: err instanceof Error ? err.message : err
    });
  };
  next();
});

//一定要在路由之前配置解析Token的中间件
const expressJWT = require("express-jwt");
// 导入配置文件
const config = require("./config");
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证(这里需要注意，secret必须配置algorithms属性)
app.use(
  expressJWT({ secret: config.jwtSecretKey, algorithms: ["HS256"] }).unless({
    path: [/^\/api\//]
  })
);

//导入并使用用户路由模块
const userRouter = require("./router/user");
app.use("/api", userRouter);
//导入用户信息模块
const userinforRouter = require("./router/userinfo");
app.use("/my", userinforRouter);

// 身份认证错误中间件
app.use(function (err, req, res, next) {
  // 捕获身份认证失败的错误
  if (err.name === "UnauthorizedError") {
    return res.cc("身份认证失败！");
  } else {
    // 未知错误...
    res.cc(err);
  }
});
//定义错误级别的中间件joi.ValidationError(账号密码校验)
const joi = require("@hapi/joi");
app.use((err, req, res, next) => {
  if (err instanceof joi.ValidationError) {
    return res.cc(err);
  } else {
    res.cc(err);
  }
});
// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3000, function () {
  console.log("api server running at http://127.0.0.1:3000");
});
