//引用express框架
const express = require('express');
//处理路径
const path = require('path')
//创建网络服务器
const app = express();

//引入路由模块
const adnim =  require('./router/adnim')
const home =  require('./router/home')

//为路由匹配请求路径d
app.use('/admin',adnim)
app.use('/home',home)

//数据库连接
require('./model/connect')

////////////////////////////////////////////////////////////////
//告诉express框架模板所在的位置
app.set('views',path.join(__dirname,'views'))
//告诉express框架模板的默认后缀是什么
app.set('view engine','art')
//当渲染的后缀为art的模板时，所使用的模板引擎是什么
app.engine('art',require('express-art-template'))
//////////////////////////////////////////////////////////////////

//开放静态资源存放目录,join拼接字符串，__dirname指向被执行 js 文件的绝对路径
app.use(express.static(path.join(__dirname,'public')))



//监听端口
app.listen(80);
console.log('服务器启动成功');