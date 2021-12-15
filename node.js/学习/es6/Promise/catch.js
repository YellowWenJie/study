const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("出错了！");
  }, 1000);
}).catch(reason => {
  console.log(reason);
});
