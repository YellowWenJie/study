const { EEXIST } = require("constants");
let events = require("events");
const fs = require("fs");
let e = new events.EventEmitter();

e.on("hello",function (eventMsg) { 
  console.log("aa");
  console.log(eventMsg);
 })
 e.on("hello",function () { 
  console.log("bb");
 })
 e.on("hello",function () { 
  console.log("cc");
 })



function lcReadFile(path) { 
  return new Promise(function (resolve,reject) { 
    fs.readFile(path,{flag:'r',encoding:'utf-8'},function (err,data) { 
      if(err){
        reject(err);
      }else{
        resolve(data);
        // e.emit("hello",data)
      }
    })
   })
 } 

 lcReadFile("hello.txt").then(function (data) { 
  e.emit("hello",data)
  })