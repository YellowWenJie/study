const http = require("http");
const PORT = 8000;
const serverHandler = require("../app.js");
const server = http.createServer(serverHandler);
server.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
