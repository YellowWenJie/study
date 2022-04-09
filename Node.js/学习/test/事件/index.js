const fs = require("fs");

fs.readFile("hello.txt",{flag:'r',encoding:'utf-8'},function (err,data) { 
  if(err){
    console.log(err);
  }else{
    console.log(data);
    lcEvent.emit('fileSuccess',data)
  }
})
let lcEvent = {
  event:{},
  on:function (eventName,eventFn) { 
    if(this.event[eventName]){
      this.event[eventName].push(eventFn)
      }else{
        this.event[eventName] = []
        this.event[eventName].push(eventFn)
      }
    },
    emit:function (eventName,eventMsg) { 
      if (this.event[eventName]) {
        this.event[eventName].forEach(itemFn => {
          itemFn(eventMsg)
        });
      }
    }
  }
lcEvent.on('fileSuccess',function (eventMsg) {
    console.log("1数据库查看信息");
    console.log(eventMsg);
  })
lcEvent.on('fileSuccess',function (eventMsg) {
    console.log("2统计信息");
  })
lcEvent.on('fileSuccess',function (eventMsg) {
    console.log("3查看用户信息");
  })
