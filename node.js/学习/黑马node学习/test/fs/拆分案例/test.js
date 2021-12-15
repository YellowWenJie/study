const fs = require('fs')

const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/


fs.readFile(path.join(__dirname,'./index.html'),'utf-8',function (err,dataStr) {
  if (err) {
    console.log(err);
  }else{
    resolveCss(dataStr);
    resolveJS(dataStr);
    resolveHtml(dataStr)
  }
})

//定义处理css样式方法
function resolveCss(htmlstr) {
  //使用正则获取内容
  const r1 = regStyle.exec(htmlstr);
  //将提取出来的样式字符串进行替换,储存到数值中
  const newCss = r1[0].replace('<style>','').replace('</style>','')
  //写入样式表中
  fs.writeFile(path.join(__dirname,'./public/index.css'),newCss,function (err) { 
    if (err) {
      console.log('写入成功'+err.message);
    }else{
      console.log('写入成功');
    }
   })
}

//定义处理script样式方法
function resolveJS(htmlstr) {
  //使用正则获取内容
  const r1 = regScript.exec(htmlstr);
  //将提取出来的样式字符串进行替换,储存到数值中
  const newCss = r1[0].replace('<script>','').replace('</script>','')
  //写入样式表中
  fs.writeFile(path.join(__dirname,'./public/index.js'),newCss,function (err) { 
    if (err) {
      console.log('写入成功'+err.message);
    }else{
      console.log('写入成功');
    }
   })
}

//定义处理html样式方法
function resolveHtml(htmlstr) {
  const newHtml = htmlstr.replace(regStyle,'<link rel="stylesheet" href="./index.css" />').replace(regScript,'<script src="./index.js"></script>')
  fs.writeFile(path.join(__dirname,'./public/index.html'),newHtml,function (err) { 
    if (err) {
      console.log('写入成功'+err.message);
    }else{
      console.log('写入成功');
    }
   })
}