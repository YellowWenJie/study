let fs = require("fs")
fs.readdir("../fs",function(err,files){
  if(err) console.log(err);
  console.log(files);
})
