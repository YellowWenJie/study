const Router = require("@koa/router");
const upload = require("../model/upload");
const router = new Router();

router.post("/upload", upload.single("avatar"), ctx => {
  console.log("ctx.request.file", ctx.request.file);
  console.log("ctx.file", ctx.file.path);
  console.log("ctx.request.body", ctx.request.body);
  ctx.body = "done";
});

module.exports = router;
