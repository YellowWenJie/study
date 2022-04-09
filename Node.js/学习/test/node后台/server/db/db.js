var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  port     : '3306',
  database : 'huangwenjie'
});
connection.connect();
//封装sql方法
// const query = (sql,params,callback) => {
//   //获取连接
//   connection.getConnection((err,connection) => {
//     if(err){
//       console.log("数据库连接失败");
//       //释放连接
//       connection.releaseConnection();
//     }else{
      let sql = 'select * from user';
      let params = [];
      connection.query(sql,params,(err,result,fields)=>{
        if (err) {
          console.log('执行SQL失败');
          return;
        }else{
          console.log(result);
          console.log(fields);
        }
      })
