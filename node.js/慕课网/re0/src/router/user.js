const { loginCheck } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handUserRouter = (req, res, next) => {
  const method = req.method;

  //登录
  if (method === "POST" && req.path === "/api/user/login") {
    const { username, password } = req.body;
    const result = loginCheck(username, password);
    if (result) {
      return new SuccessModel("登陆成功");
    } else {
      return new ErrorModel("登陆失败");
    }
    // return {
    //   msg: "这是登录的接口"
    // };
  }
};
module.exports = handUserRouter;
