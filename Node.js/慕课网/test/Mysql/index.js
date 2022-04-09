const mysql = require("mysql");
//创建连接对象
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  port: 3306,
  database: "myblog"
});
//开始连接
con.connect();

const sql = `select * from users;`;
con.query(sql, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});

//关闭连接
con.end();
