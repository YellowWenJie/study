const mysql = require("mysql");
const { MYSQL_CONF } = require("../conf/db");
const con = mysql.createConnection(MYSQL_CONF);
//开始连接
con.connect();

//统一执行 sql 的函数
function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
  return promise;
}

// 注意这里不能关闭连接
// con.end();

module.exports = { exec };
