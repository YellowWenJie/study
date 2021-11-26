var fs = require('fs');

//同步
// var content = fs.readFileSync("Hello.txt",{flag:'r'})
// console.log(content.toString());

function fsRead(path) {
  return new Promise(function(resolve,reject){
    //异步
    fs.readFile(path,{flag:'r',encoding:"utf-8"},function(err,data){
      if(err) reject(err);
      resolve(data)
    })
  })
}
var w1 = fsRead("Hello1.txt")
w1.then(function (res) { 
  console.log(res);
 })

 async function ReadList() {
   var hello = await fsRead("hello.txt")
   var Hello1 = await fsRead("hello1.txt")
   var aa = hello+Hello1
   console.log(aa);
 }
 ReadList();