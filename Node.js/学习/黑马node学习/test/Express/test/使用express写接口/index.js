const express = require('express');
const app = express();
const router = require('./apiRouter');
const cors = require('cors')
const session = require('express-session')



//配置解析表单数据的中间件(post的body)
app.use(express.urlencoded({ extended: false }))

//配置session中间件
app.use(
  session({
    secret: 'itheima',
    resave: false,
    saveUninitialized: true,
  })
)


//jsonp解决跨域问题
//必须在配置cors中间件之前，配置jsonp的接口
app.get('/api/jsonp', (req, res) => {
  //TOOO:定义jsonp接口的具体实现过程
  const funcName = req.query.callback;
  const data = { name: '黄文杰', age: 22 }
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  res.send(scriptStr)
})

//cors解决跨域问题
app.use(cors())
app.use('/api', router)




app.listen(80, () => {
  console.log("localhost:80");
})
