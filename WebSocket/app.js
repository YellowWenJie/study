const ws = require("nodejs-websocket");
const server = ws.createServer(function (conn) {
  conn.on("text", function (str) {
    let data = JSON.parse(str);
    switch (data.type) {
      case "setname":
        conn.nickname = data.name;
        boardcast(
          JSON.stringify({
            name: "Server",
            text: conn.nickname + "加入了房间"
          })
        );
        break;
      case "chat":
        boardcast(
          JSON.stringify({
            name: conn.nickname,
            text: data.text
          })
        );
        break;
      default:
        break;
    }
  });
  conn.on("close", function () {
    boardcast(
      JSON.stringify({
        name: "Server",
        text: conn.nickname + "离开了房间"
      })
    );
  });
  // setTimeout(function () {
  //   con.sendText("来自服务端的消息");
  // }, 3000);
  conn.on("error", function (err) {
    console.log(err);
  });
});
// 广播
function boardcast(str) {
  server.connections.forEach(function (conn) {
    conn.sendText(str);
  });
}
server.listen(2333);
