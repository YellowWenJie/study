let url = require('url');

// console.log(url);

let httpurl = "https://ys.mihoyo.com/?utm_source=adbdpz&from_channel=adbdpz#/"

let urlObj = url.parse(httpurl)
console.log(urlObj);

let taegerUrl = 'https://www.baidu.com/'

let hurl = './as/as/as/as'

let newUrl = url.resolve(taegerUrl,hurl);

console.log(newUrl);