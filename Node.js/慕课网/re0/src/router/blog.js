const {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  delBlog
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

// 统一的登录验证函数
const loginCheck = req => {
  if (!req.session.username) {
    return Promise.resolve(new ErrorModel("尚未登录"));
  }
};

const handBlogRouter = (req, res, next) => {
  const method = req.method;
  const id = req.query.id;

  //获取博客列表
  if (method === "GET" && req.path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    // const listData = getList(author, keywords);
    // return new SuccessModel(listData);
    const result = getList(author, keyword);
    return result.then(listData => {
      return new SuccessModel(listData);
    });
    // return {
    //   msg: "这是获取博客列表的接口"
    // };
  }

  //获取博客详细
  if (method === "GET" && req.path === "/api/blog/detail") {
    const result = getDetail(id);
    return result.then(data => {
      return new SuccessModel(data);
    });

    // return {
    //   msg: "这是获取博客详细的接口"
    // };
  }
  //新建一篇博客
  if (method === "POST" && req.path === "/api/blog/new") {
    const loginCheckResult = loginCheck(req);
    if (loginCheckResult) {
      // 未登录
      return loginCheck;
    }
    // const author = "admin"; //假数据，待开发
    req.body.author = req.session.username;
    const result = newBlog(req.body);
    return result.then(data => {
      return new SuccessModel(data);
    });

    // return {
    //   msg: "这是新建一篇博客的接口"
    // };
  }
  //更新一篇博客
  if (method === "POST" && req.path === "/api/blog/updata") {
    if (loginCheckResult) {
      // 未登录
      return loginCheck;
    }
    const result = updataBlog(id, req.body);
    return result.then(val => {
      if (val) {
        return new SuccessModel("更新博客成功");
      } else {
        return new ErrorModel("更新博客失败");
      }
    });

    // return {
    //   msg: "这是更新一篇博客的接口"
    // };
  }
  //删除一篇博客
  if (method === "POST" && req.path === "/api/blog/del") {
    if (loginCheckResult) {
      // 未登录
      return loginCheck;
    }
    const author = req.session.username; //假数据，待开发
    const result = delBlog(id, author);
    return result.then(val => {
      if (val) {
        return new SuccessModel("删除博客成功");
      } else {
        return new ErrorModel("删除博客失败");
      }
    });
    // if (result) {
    //   return new SuccessModel();
    // } else {
    //   return new ErrorModel("删除博客失败");
    // }
    // return {
    //   msg: "这是删除一篇博客的接口"
    // };
  }
};
module.exports = handBlogRouter;
