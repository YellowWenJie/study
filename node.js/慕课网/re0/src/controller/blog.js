const getList = (author, keyword) => {
  //先返回假数据
  return [
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: 1642923510265,
      author: "黄文杰"
    },
    {
      id: 2,
      title: "标题B",
      content: "内容B",
      createTime: 1642923647763,
      author: "彭于晏"
    },
    {
      id: 3,
      title: "标题C",
      content: "内容C",
      createTime: 1642923630880,
      author: "张三"
    }
  ];
};
const getDetail = id => {
  return {
    id: 1,
    title: "标题A",
    content: "内容A",
    createTime: 1642923510265,
    author: "黄文杰"
  };
};
const newBlog = (blogData = {}) => {
  console.log(blogData);
  // blogData是一个博客对象，包含title content属性
  return {
    id: 3 // 表示新建博客，插入到数据表里面的id
  };
};
const updataBlog = (id, blogData = {}) => {
  // id 就是要更新博客的 id
  // blogData是一个博客对象，包含title content属性
  console.log(id, blogData);
  return true;
};
const delBlog = id => {
  return true;
};
module.exports = {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  delBlog
};
