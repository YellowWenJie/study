const cheerio = require("cheerio");
let fs = require('fs');
const {writefs} = require("../fs/writeFile.js")
const axios = require('axios')
//获取HTML文档的内容，内容的获取跟jquery一样
let httpUrl = "https://www.fabiaoqing.com/"
axios.get(httpUrl).then((res)=>{
  // console.log(res.data);
  //cheerio解析html文档
  let $ = cheerio.load(res.data)
  $('.bqppdiv img').each((i,element)=>{
    console.log($(element).attr("src"));
    let gif = $(element).attr("src")+"\n"
    writefs("爬虫.txt",gif)
  })
})

