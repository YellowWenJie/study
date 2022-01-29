const express = require("express");
const createError = require("http-errors");
// 解析和设置cookie
const cookieParser = require("cookie-parser");
// 日志记录
const logger = require("morgan");

// 引入路由
const userRouter = require("./routes/user");

const app = express();
// 打印日志记录，开发环境 dev
app.use(logger("dev"));
// 返回格式
app.use(express.json());
// 解析 post
app.use(express.urlencoded({ extended: false }));
// cookieParser
app.use(cookieParser());

app.use("/", userRouter);
// 404
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
