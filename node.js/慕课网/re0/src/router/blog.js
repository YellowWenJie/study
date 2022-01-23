const {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  delBlog
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handBlogRouter = (req, res, next) => {
  const method = req.method;
  const id = req.query.id;

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
    const data = getDetail(id);
    return new SuccessModel(data);

    // return {
    //   msg: "这是获取博客详细的接口"
    // };
  }
  //新建一篇博客
  if (method === "POST" && req.path === "/api/blog/new") {
    const data = newBlog(req.body);
    return new SuccessModel(data);
    // return {
    //   msg: "这是新建一篇博客的接口"
    // };
  }
  //更新一篇博客
  if (method === "POST" && req.path === "/api/blog/updata") {
    const result = updataBlog(id, req.body);
    if (result) {
      return new SuccessModel();
    } else {
      return new ErrorModel("更新博客失败");
    }
    // return {
    //   msg: "这是更新一篇博客的接口"
    // };
  }
  //删除一篇博客
  if (method === "POST" && req.path === "/api/blog/del") {
    const result = delBlog(id);
    if (result) {
      return new SuccessModel();
    } else {
      return new ErrorModel("删除博客失败");
    }
    // return {
    //   msg: "这是删除一篇博客的接口"
    // };
  }
};
module.exports = handBlogRouter;
