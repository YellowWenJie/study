const express = require("express");
const router = express.Router();
const {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  delBlog
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

router.get("/list", (req, res) => {
  const author = req.query.author || "";
  const keyword = req.query.keyword || "";
  const result = getList(author, keyword);
  return result.then(listData => {
    res.json(new SuccessModel(listData));
  });
});
router.get("/detail", (req, res) => {});
module.exports = router;
