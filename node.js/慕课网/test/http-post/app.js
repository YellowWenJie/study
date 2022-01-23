const http = require("http");
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    console.log("content-type", req.headers["content-type"]);
    let postData = "";
    req.on("data", chunk => (postData += chunk.toString()));
    req.on("end", () => {
      console.log(postData);
      res.end("hellow world");
    });
  }
});
server.listen(3000, function () {
  console.log("http://localhost:3000");
});
