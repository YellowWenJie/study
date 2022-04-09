//引入mngoose第三方模块
const mongoose = require('mongoose')
//连接数据库
mongoose.connect('mongodb://localhost/blog')
.then(()=>console.log('数据库连接成功'))
.catch(()=>console.log('数据库连接失败'))