const querystring = require("querystring");
// const { get, set } = require("./src/db/redis");
const { access } = require("./src/utils/log");
const handBlogRouter = require("./src/router/blog");
const handUserRouter = require("./src/router/user");

// 获取 cookie 的过期时间
const getCookieExpires = () => {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  console.log(d.toGMTString());
  return d.toGMTString();
};

// session 数据
const SESSION_DATA = {};

//用于处理 post data
const getPostData = req => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      resolve({});
      return;
    }
    if (req.headers["content-type"] !== "application/json") {
      resolve({});
      return;
    } else {
      let postData = "";
      req.on("data", data => {
        postData += data.toString();
      });
      req.on("end", () => {
        if (!postData) {
          resolve({});
          return;
        }
        resolve(JSON.parse(postData));
      });
    }
  });
  return promise;
};

const serverHandler = (req, res) => {
  // 记录 access log
  access(
    `${req.method} -- ${req.url} -- ${
      req.headers["user-agent"]
    } -- ${Date.now()}`
  );
  //设置返回格式 JSONP
  res.setHeader("Content-Type", "application/json");

  //获取path
  const url = req.url;
  req.path = url.split("?")[0];

  //解析query
  req.query = querystring.parse(url.split("?")[1]);

  //解析 cookie
  req.cookie = {};
  const cookieStr = req.headers.cookie || "";
  cookieStr.split(";").forEach(item => {
    if (!item) {
      return;
    } else {
      const arr = item.split("=");
      const key = arr[0].trim();
      const val = arr[1].trim();
      req.cookie[key] = val;
      // console.log(key, val);
    }
  });

  // 解析 session
  let newSetCookie = false;
  let userId = req.cookie.userid;
  if (userId) {
    if (!SESSION_DATA[userId]) {
      SESSION_DATA[userId] = {};
    }
  } else {
    newSetCookie = true;
    userId = `${Date.now()}_${Math.random()}`;
    SESSION_DATA[userId] = {};
  }
  req.session = SESSION_DATA[userId];
  console.log(req.session);

  //处理postData
  getPostData(req).then(postData => {
    req.body = postData;
    // 处理blog路由
    const blogResult = handBlogRouter(req, res);
    if (blogResult) {
      blogResult.then(blogData => {
        if (newSetCookie) {
          res.setHeader(
            "Set-Cookie",
            `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`
          );
        }
        res.end(JSON.stringify(blogData));
      });
      return;
    }

    //处理user路由
    const userResult = handUserRouter(req, res);
    if (userResult) {
      userResult.then(userData => {
        if (newSetCookie) {
          res.setHeader(
            "Set-Cookie",
            `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`
          );
        }
        res.end(JSON.stringify(userData));
      });
      return;
    }

    //未命中路由，返回404
    res.writeHead(404, { "Content-Type": "text/plain" }); //text/plain纯文本
    res.write("404 Not Found");
    res.end();
  });

  //处理blog路由
};
module.exports = serverHandler;
//    env: process.env.NODE_ENV
