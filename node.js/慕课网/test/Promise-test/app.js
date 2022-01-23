const fs = require("fs");
const path = require("path");

// //callback 方式获取一个文件的内容
// function getFileNameContent(fileName, callback) {
//   const fullFilename = path.resolve(__dirname, "files", fileName);
//   fs.readFile(fullFilename, (err, data) => {
//     if (err) throw err;
//     callback(JSON.parse(data.toString()));
//   });
// }
// getFileNameContent("a.json", data => {
//   console.log(data);
//   getFileNameContent(data.next, data1 => {
//     console.log(data1);
//     getFileNameContent(data1.next, data2 => {
//       console.log(data2);
//     });
//   });
// });
function getFileNameContent(fileName) {
  const promise = new Promise((resolve, reject) => {
    const fullFilename = path.resolve(__dirname, "files", fileName);
    fs.readFile(fullFilename, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(data.toString()));
    });
  });
  return promise;
}

getFileNameContent("a.json")
  .then(data => {
    console.log(data);
    return getFileNameContent(data.next);
  })
  .then(data => {
    console.log(data);
    return getFileNameContent(data.next);
  })
  .then(data => {
    console.log(data);
  });
