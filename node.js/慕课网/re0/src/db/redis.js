const redis = require("redis");
const { REDIS_CONF } = require("../conf/db");
// 创建客户端
const redisClient = redis.createClient(REDIS_CONF);
redisClient.on("error", err => {
  console.error(err);
});

function set(key, val) {
  if (val === "object") {
    val = JSON.stringify(val);
  }
  redisClient.set(key, val, redis.print);
}
function get(key) {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err);
        return;
      } else if (key == null) {
        resolve(null);
        return;
      } else {
        try {
          resolve(JSON.parse(val));
        } catch (error) {
          resolve(val);
        }
      }
    });
  });
  return promise;
}

module.exports = { set, get };
