const { getList, getDetail } = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const handBlogRouter = (req, res, next) => {
  const method = req.method;

  //获取博客列表
  if (method === "GET" && req.path === "/api/blog/list") {
    const author = req.query.author || "";
    const keywords = req.query.keywords || "";
    const listData = getList(author, keywords);
    return new SuccessModel(listData);
    // return {
    //   msg: "这是获取博客列表的接口"
    // };
  }

  //获取博客详细
  if (method === "GET" && req.path === "/api/blog/detail") {
    const id = req.query.id;
    const data = getDetail(id);
    return new SuccessModel(data);

    // return {
    //   msg: "这是获取博客详细的接口"
    // };
  }
  //新建一篇博客
  if (method === "POST" && req.path === "/api/blog/new") {
    return {
      msg: "这是新建一篇博客的接口"
    };
  }
  //更新一篇博客
  if (method === "POST" && req.path === "/api/blog/updata") {
    return {
      msg: "这是更新一篇博客的接口"
    };
  }
  //删除一篇博客
  if (method === "POST" && req.path === "/api/blog/del") {
    return {
      msg: "这是删除一篇博客的接口"
    };
  }
};
module.exports = handBlogRouter;
