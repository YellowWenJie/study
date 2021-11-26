let fs = require('fs');
// fs.writeFile('test.txt',"黄文杰\n",{flag:'a',encoding:"utf-8"},function(err){
//   if(err) console.log("错误");
//   console.log("成功");
//   fs.writeFile('test.txt',"aaa\n",{flag:'a',encoding:"utf-8"},function(err){
//     if(err) console.log("错误");
//     console.log("成功");
//     fs.writeFile('test.txt',"aaa\n",{flag:'a',encoding:"utf-8"},function(err){
//       if(err) console.log("错误");
//       console.log("成功");
//     })
//   })
// })

function writefs(path,content) { 
  return new Promise(function(resolve,reject){
    fs.writeFile(path,content,{flag:'a',encoding:"utf-8"},function(err){
            if(err) reject(err);
            resolve("成功")
          })
  })
 }
//  var w1 = writefs("test.txt","asdasd");
//   w1.then(function(res){
//   console.log(res);
// })
 async function writeList(){
   await writefs("test.txt","asdasd\n")
   await writefs("test.txt","1asdasd\n")
   await writefs("test.txt","2asdasd\n")
   await writefs("test.txt","3asdasd\n")
   await writefs("test.txt","4asdasd\n")
 }
 writeList()
 
