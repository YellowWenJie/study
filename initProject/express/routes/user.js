const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("黄文杰");
});
module.exports = router;
