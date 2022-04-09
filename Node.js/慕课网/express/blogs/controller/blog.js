const xss = require("xss");
const { exec } = require("../conf/mysql");
const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}'`;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%'`;
  }
  sql += `order by createtime desc;`;
  // 返回 promise
  return exec(sql);
};
const getDetail = id => {
  const sql = `select * from blogs where id='${id}'`;
  return exec(sql).then(rows => {
    return rows[0];
  });
};
const newBlog = (blogData = {}) => {
  // console.log(blogData);
  // blogData是一个博客对象，包含title content属性
  const title = blogData.title;
  const content = blogData.content;
  const author = blogData.author;
  const createTime = Date.now();

  const sql = `
  insert into blogs (title,content,createtime,author)
  values('${title}','${content}',${createTime},'${author}')
  `;
  return exec(sql).then(insertData => {
    return {
      id: insertData.insertId // 表示新建博客，插入到数据表里面的id
    };
  });
};
const updataBlog = (id, blogData = {}) => {
  // id 就是要更新博客的 id
  // blogData是一个博客对象，包含title content属性
  const title = blogData.title;
  const content = blogData.content;
  const sql = `update blogs set title='${title}' ,content='${content}' where id = ${id}`;
  return exec(sql).then(updataData => {
    if (updataData.affectedRows > 0) {
      return true;
    } else {
      return false;
    }
  });
};
const delBlog = (id, author) => {
  const sql = `delete from blogs where id = '${id}' and author = '${author}'`;
  return exec(sql).then(deleteData => {
    if (deleteData.affectedRows > 0) {
      return true;
    } else {
      return false;
    }
  });
};
module.exports = {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  delBlog
};
