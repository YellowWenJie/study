const express = require("express");
const createError = require("http-errors");
// 解析和设置cookie
const cookieParser = require("cookie-parser");
// 日志记录
const logger = require("morgan");
// session
const session = require("express-session");
// 引入 redis,将session放进去
const RedisStore = require("connect-redis")(session);
const fs = require("fs");
const path = require("path");
const app = express();
// 打印日志记录，开发环境 dev
const ENV = process.env.NODE_ENV;
if (ENV !== "production") {
  // 开发环境 | 测试环境
  app.use(logger("dev"));
} else {
  // 线上环境
  const logFileName = path.join(__dirname, "logs", "access.log");
  const writeStream = fs.createWriteStream(logFileName, { flags: "a" });
  app.use(logger("combined", { stream: writeStream }));
}
// 返回格式
app.use(express.json());
// 解析 post
app.use(express.urlencoded({ extended: false }));
// cookieParser
app.use(cookieParser());

const redisClinet = require("./conf/redis");
const sessionStore = new RedisStore({ client: redisClinet });
// 设置session
app.use(
  session({
    resave: false, //添加 resave 选项
    saveUninitialized: true, //添加 saveUninitialized 选项
    secret: "黄文杰的cookie", // 相当于密匙
    cookie: {
      // path: "/", // 默认配置
      // httpOnly: true, // 默认配置
      maxAge: 24 * 60 * 60 * 1000
    },
    store: sessionStore
  })
);

// 引入路由
const userRouter = require("./routes/user");
const blogRouter = require("./routes/blog");
// 使用路由
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);

// 404
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
