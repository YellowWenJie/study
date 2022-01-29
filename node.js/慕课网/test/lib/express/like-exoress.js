const { info } = require("console");
const http = require("http");
const slice = Array.prototype.slice;

class LikeExpress {
  constructor() {
    // 存放中间件的列表
    this.routes = {
      all: [],
      get: [],
      post: []
    };
  }
  register(path) {
    const ingo = {};
    if (typeof path === "string") {
      info.path = path;
      // 从第二个参数开始，转化为数组，存入 stack
      info.stack = slice.call(arguments, 1);
    } else {
      info.path = "/";
      // 从第一个参数开始，转化为数组，存入 stack
      info.stack = slice.call(arguments, 0);
    }
    return ingo;
  }
  use() {}
  get() {}
  post() {}
  listen() {}
}
