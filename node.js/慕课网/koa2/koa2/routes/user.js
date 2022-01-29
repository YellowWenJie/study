const router = require("koa-router")();

router.prefix("/api/user");

router.post("/login", async function (ctx, next) {
  const { username, password } = ctx.request.body;
  ctx.body = {
    errno: 0,
    username,
    password
  };
});

router.get("/bar", function (ctx, next) {
  ctx.body = "this is a users/bar response";
});

module.exports = router;
