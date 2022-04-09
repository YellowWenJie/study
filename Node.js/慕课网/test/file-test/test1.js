const fs = require("fs");
const path = require("path");

const fileName = path.relative(__dirname, "data.txt");

// 读取文件内容
fs.readFile(fileName, (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log(data.toString());
  }
});
// 写入文件
const content = "123";
fs.writeFile(fileName, content, { flag: "a" }, err => {
  if (err) {
    console.error(err);
  }
});
// 判断文件是否存在
fs.exists(fileName, (err, exists) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log(exists);
  }
});
