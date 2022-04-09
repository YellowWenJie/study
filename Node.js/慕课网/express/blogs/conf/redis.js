const redis = require("redis");
const { REDIS_CONF } = require("./db");

// 创建客户端
const redisClinet = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);
redisClinet.on("error", err => {
  console.error(err);
});

module.exports = redisClinet;
