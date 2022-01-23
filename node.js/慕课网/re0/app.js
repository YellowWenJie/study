const querystring = require("querystring");
const handBlogRouter = require("./src/router/blog");
const handUserRouter = require("./src/router/user");
const serverHandler = (req, res) => {
  //设置返回格式 JSONP
  res.setHeader("Content-Type", "application/json");

  //获取path
  const url = req.url;
  req.path = url.split("?")[0];

  //解析query
  req.query = querystring.parse(url.split("?")[1]);

  //处理blog路由
  const blogData = handBlogRouter(req, res);
  if (blogData) {
    res.end(JSON.stringify(blogData));
    return;
  }

  //处理user路由
  const userData = handUserRouter(req, res);
  if (userData) {
    res.end(JSON.stringify(userData));
    return;
  }

  //未命中路由，返回404
  res.writeHead(404, { "Content-Type": "text/plain" }); //text/plain纯文本
  res.write("404 Not Found");
  res.end();
};
module.exports = serverHandler;
//    env: process.env.NODE_ENV
