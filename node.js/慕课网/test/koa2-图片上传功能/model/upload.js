const multer = require("@koa/multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // 储存路径
  },
  filename: function (req, file, cb) {
    var fileFormat = file.originalname.split("."); // 获取文件后缀
    cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]); // 生成文件
  }
});
const upload = multer({ storage: storage }); // note you can pass `multer` options here
module.exports = upload;
