const express = require("express");
const router = express.Router();
const { login } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  const result = login(username, password);
  return result.then(data => {
    if (data.username) {
      // 设置 session
      res.session.username = data.name;
      res.session.realname = data.realname;
      res.json(new SuccessModel());
      return;
    }
    res.json(new ErrorModel("登陆失败"));
  });
});

router.get("/session-test", (req, res, next) => {
  const session = req.session;
  if (session.viewNum == null) {
    session.viewNum = 0;
  }
  session.viewNum++;
  res.json({
    viewNum: session.viewNum
  });
});
module.exports = router;
