const mysql = require("mysql")
let options = {
  host:"localhost",
  port:"3306",
  user:"root",
  password:"123456",
  database:"huangwenjie"
}
//创建与数据库的连接的对象
let con = mysql.createConnection(options);
//建立连接
con.connect((err)=>{
  //如果创立失败
  if (err) {
    console.log(err);
  }else{
    console.log('数据库连接成功');
  }
})
//执行数据库语句
//查询
// let strSql = "select * from bank";
// con.query(strSql,(err,results,fields)=>{
//   if (err) {
//     console.log(err);
//   }else{
//     console.log(results);
//     //console.log(fields);
//   }
// })

// //创建库
// let strSql1 = "create database user"
// con.query(strSql1,(err,results,fields)=>{
//   if (err) {
//     console.log(err);
//   }else{
//     console.log(results);
//     //console.log(fields);
//   }
// })

// //删除表
// let strSql2 = "drop table user"
// con.query(strSql2,(err,results,fields)=>{
//   if (err) {
//     console.log(err);
//   }else{
//     console.log(results);
//     //console.log(fields);
//   }
// })

// //删除库
// let strSql3 = "drop database user"
// con.query(strSql3,(err,results,fields)=>{
//   if (err) {
//     console.log(err);
//   }else{
//     console.log(results);
//     //console.log(fields);
//   }
// })

//创建表
// let strSql4 = 'CREATE TABLE `user` (`id` int(10) NOT NULL AUTO_INCREMENT,`username` varchar(255) DEFAULT NULL,`password` varchar(255) DEFAULT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4'
// con.query(strSql4,(err,results,fields)=>{
//   if (err) {
//         console.log(err);
//       }else{
//         console.log(results);
//         //console.log(fields);
//       }
// })

//插入数据
// let strSql5 = "insert into user (username,password) values ('黄文杰','123456')"
// con.query(strSql5,(err,results,fields)=>{
//   if (err) {
//         console.log(err);
//       }else{
//         console.log(results);
//         //console.log(fields);
//       }
// })

//插入数据另一种写法
// let strSql6 = "insert into user (username,password) values (?,?)"
// con.query(strSql6,["彭于晏","123456"],(err,results,fields)=>{
//   if (err) {
//         console.log(err);
//       }else{
//         console.log(results);
//         //console.log(fields);
//       }
// })

