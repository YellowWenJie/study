const app = require("../app");
// Project 为项目名，需设置
const debug = require("debug")("Project:server");
const http = require("http");

let port = normalizePort(process.env.PORT || "8000");
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => {
  // 如果是生产环境就打印
  if (process.env.NODE_ENV === "dev") {
    console.log(`localhost:${port}`);
  }
});
server.on("error", onError);
server.on("listening", onListening);

// 下面的忽略
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
