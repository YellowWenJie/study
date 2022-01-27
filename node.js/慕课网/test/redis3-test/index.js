const redis = require("redis");

// 创建客户端
const redisClient = redis.createClient(6379, "127.0.0.1");
redisClient.on("error", err => {
  console.error(err);
});
// redisClient.connect();
// 测试， redis.print 作用是打印
redisClient.set("name", "yellowwenjie", redis.print);
redisClient.get("name", (err, val) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log(val);
    // 退出
    redisClient.quit();
  }
});
