const { login } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handUserRouter = (req, res, next) => {
  const method = req.method;

  //登录
  if (method === "POST" && req.path === "/api/user/login") {
    const { username, password } = req.body;
    // const { username, password } = req.query;
    const result = login(username, password);
    return result.then(data => {
      if (data.username) {
        // 设置 session
        req.session.username = data.username;
        req.session.realname = data.realname;
        console.log(req.session);
        return new SuccessModel({
          username: req.session.username
        });
      } else {
        return new ErrorModel("登陆失败");
      }
    });

    // return {
    //   msg: "这是登录的接口"
    // };
  }
  // console.log(req.session.username);
  // // 登录验证的测试
  // if (method === "GET" && req.path === "/api/user/login-test") {
  //   if (req.session.username) {
  //     return Promise.resolve(new SuccessModel({ session: req.session }));
  //   } else {
  //     return Promise.resolve(new ErrorModel("尚未登录"));
  //   }
  // }
};
module.exports = handUserRouter;
