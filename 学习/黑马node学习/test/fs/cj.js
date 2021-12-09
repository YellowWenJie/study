const fs = require('fs')

fs.readFile('./cj.txt','utf-8',(err,data)=>{
  if (err) {
    console.log(err);
  }else{
    const arr = data.split(' ')
    
    const strarr = [];
    arr.forEach(item => {
      strarr.push(item.replace('=',":"))
    });
    console.log(strarr.join('\r\n'));
  }
})