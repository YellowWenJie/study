const fs = require("fs");

const p = new Promise((resolve, reject) => {
  fs.readFile("./m1.md", (err, data) => {
    resolve(data);
  });
})
  .then(value => {
    return new Promise((resolve, reject) => {
      fs.readFile("./m2.md", (err, data) => {
        resolve([value, data]);
      });
    });
  })
  .then(value => {
    return new Promise((resolve, reject) => {
      fs.readFile("./me.md", (err, data) => {
        value.push(data);
        resolve(value);
      });
    });
  })
  .then(value => {
    console.log(value.toString());
  });
