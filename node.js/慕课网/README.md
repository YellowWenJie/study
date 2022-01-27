# server开发和前端开发的区别

* ##### 服务稳定性

  * server端可能会操作各种恶意攻击
  * 单个客户端可能意外挂掉，但是服务端不能
  * 使用PM2做进程守候（进程一旦挂掉会自动重启）

* ##### 考虑内存和cpu（优化，扩展）

  * 客户端独占一个浏览器，内存和CPU都不是问题
  * server端要承载很多请求，CPU和内存都是稀缺资源
  * 使用stream写日志，使用redis存session

* ##### 日志记录

  * 前端也会发日志，但只是日志的发起方，不关心后续
  * server端要记录日志、储存日志、分析日志、前端不关心
  * 多种日志记录方式，以及如何分析日志

* ##### 安全

  * server、端要随时准备接收各种恶意攻击，前端则少很多
  * 如：越权操作，数据库攻击等
  * 登录验证，预防xss攻击和sql注入

* ##### 集权和服务拆分

  * 产品发展速度快，流量可能会迅速增加
  * 如何通过扩展机器和服务拆分来承载大流量？
  * 课程虽然是单片机开发，但是从设计上支持服务拆分

# 项目介绍

* 目标
  * 开发一个博客系统，具有博客的基本功能
  * 只开发server端，不关心前端
* 需求
  * 首页，作者页，博客详情页
  * 登录页
  * 管理中心，新建页，编辑页
* 技术方案
  * 数据如何储存 
    * 博客
    * 用户
  * 如何与前端对接，即接口设计

![img](https://img-blog.csdnimg.cn/038fedc884024129a4f28a481707a9cb.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAWWVsbG93V2VuSmll,size_20,color_FFFFFF,t_70,g_se,x_16)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

关于登录

*  业界有统一的解决方案，一般不用再重新设计
* 实现起来比较复杂



# 开发接口（不用任何框架）

* node.js处理http请求
  * http请求概述
    * DNC解析（通过一个域名解析到的ip地址），建立TCP连接（三次握手【第一次握手：客户端询问服务器，你是否可以用，第二次握手，服务器告诉客户端，自己可用，第三次握手，客户端再次告诉服务器，我即将访问】），发送http请求
    * server接收到http请求，处理并返回
    * 客户端接收到返回数据，处理数据（如渲染页面，执行js）
  * get请求和querystring
  * post请求和postdata
  * node.js处理get请求
    * get请求，即客户端要向server端获取数据，如何查询博客列表
    * 通过querystring来传递数据，比如a.html?a=100&b=200
    * 浏览器直接访问就发送get请求
    * ![1642909591748](C:\Users\16063\AppData\Roaming\Typora\typora-user-images\1642909591748.png)
  * node.js处理post请求
    * post请求，即客户端要向服务端传递数据，如新建博客
    * 通过post data 传递数据
    * 浏览器无法直接模拟，需要手写js，或者使用postman
    * ![img](https://img-blog.csdnimg.cn/eb0c0b7f1e9c4ec0868fcc8432cd5e76.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAWWVsbG93V2VuSmll,size_20,color_FFFFFF,t_70,g_se,x_16)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)
  * 路由
* 搭建开发环境
  * 从0开始搭建，不使用任何框架
  * 使用nodemon检测文件变化，自动重启node
  * 使用cross-env设置环境变量，兼容mac、linux、windows
* 开发接口（暂时不连接数据库，暂不考虑登录）

* # 开始搭建

* 初始化路由：根据之前技术方案设计，做出路由
* 返回假数据：将路由和数据处理分离，以符合设计原则



# 数据库（MySql）

* 为何使用mysql而不是mogondb

  * mysql是企业内最常用的储存工具，一般都有专人运维
  * mysql也是社区内最常见的储存工具，有问题随时可查

* mysql介绍

  * web server中最流行的关系型数据库
  * 官网可免费下载·，用于学习
  * 轻量级，易学易用

* 操作数据库

  * 建库

    * 创建myblog
    * 执行 show databases; 查询

  * 建表

    ## 						blog

    

    * |   column   |   datatye   | 主键 | 不为空 | 默认值 | 备注 |
      | :--------: | :---------: | :--: | :----: | :----: | :--: |
      |     id     |     int     |  √   |   √    |        |      |
      |   title    | varchar(50) |      |   √    |        |      |
      |  content   |  longtext   |      |   √    |        |      |
      | createtime | bigint(20)  |      |   √    |        |      |
      |   author   | varchar(20) |      |   √    |        |      |

    

    ## 						user

    

    * |  column  |   datatye    | 主键 | 不为空 | 默认值 | 备注 |
      | :------: | :----------: | :--: | :----: | :----: | :--: |
      |    id    |     int      |  √   |   √    |        |      |
      | username | varchar(20)  |      |   √    |        |      |
      | password | varchar(20)  |      |   √    |        |      |
      | realname | varchar(20)  |      |   √    |        |      |
      | user_pic | varchar(255) |      |        |        |      |

      

  * 表操作

    * 增、删、改、查

    * 使用sql语句（入门简单，一学就会）

    * ```mysql
      -- 进入表
      use myblog;
      -- 查数据库的表
      show tables;
      -- 在users表中插入数据，因为password是关键字，所以要用`password`
      insert into users(username,`password`,realname)values('yellowwenjie','123456','黄文杰');
      -- //查询
      -- 查询users表
      select * from users;
      -- 查询users表中的id和username
      select id,username from users;
      -- 查询users表中username='yellowwenjie'的匹配对象
      select * from users where username='yellowwenjie';
      -- 查询users表中username='yellowwenjie'并且`password`='123456'的匹配对象
      select * from users where username='yellowwenjie'and `password`='123456';
      -- 查询users表中username='yellowwenjie'或者`password`='123456'的匹配对象
      select * from users where username='yellowwenjie'or `password`='123456';
      -- 查询users表中username中有带yel的字符串，模糊查询
      select * from users where username like '%yel%'
      -- 查询users表中username中有带yel的字符串并以id的值进行排序,desc为倒序
      select * from users where username like '%yel%' order by id desc;
      
      -- //更新
      -- 修改users表中id为2中realname的值为"彭于晏"，如果报错，下面有解决方案
      update users set realname = "彭于晏" where id = '2';
      -- 解决方案
      SET SQL_SAFE_UPDATES = 0;
      
      -- //删除
      -- 删除users表中id为2的行
      delete from users where id="2"
      
      -- 删除users表中id不等于2的行
      delete from users where id<>"2"
      ```

# Node.js操作Mysql

```js
const mysql = require("mysql");
//创建连接对象
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  port: 3306,
  database: "myblog"
});
//开始连接
con.connect();

const sql = `select * from users;`;
con.query(sql, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});

//关闭连接
con.end();

```

# 环境变量

因为环境不同很多配置会不同所以要使用环境变量

```javascript
const env = process.env.NODE_ENV //环境参数
    "dev": "cross-env NODE_ENV=dev nodemon ./bin/www.js",//开发时的命令
    "prd": "cross-env NODE_ENV=production nodemon ./bin/www.js"//线上的命令
```

# 

# cookie和session

* 什么是cookie

  * 储存在浏览器的一段字符串（最大5kb）
  * 跨域不共享
  * 格式如k1=v1;k2=v2;k3=v3;因此可以储存结构化数据
  * 每次发送http请求，会将请求域的cookie一起发送给server
  * server可以修改cookie并返回给浏览器
  * 浏览器中也可以通过javascript修改cookie（有限制）

* javascript操作cookie，浏览器中查看cookie

  * 客户端查看cookie，三种方式
  * javascript查看、修改cookie（有限制）

* server端操作cookie，实现登录验证

  * 查看cookie

    * ```javascript
      //解析 cookie
        req.cookie = {};
        const cookieStr = req.headers.cookie || "";
        cookieStr.split(";").forEach(item => {
          if (!item) {
            return;
          } else {
            const arr = item.split("=");
            const key = arr[0];
            const val = arr[1];
            req.cookie[key] = val;
          }
        });
        console.log(req.cookie);
      ```

      

  * 修改cookie

    * ```javascript
      const { username, password } = req.query;
          const result = login(username, password);
          return result.then(data => {
            if (data.username) {
              // 操作 cookie
              res.setHeader("Set-Cookie", `username=${data.username}; path=/`);
              return new SuccessModel({
                username
              });
            } else {
              return new ErrorModel("登陆失败");
            }
          });
      ```

      

  * 实现登录验证

* session

  * cookie的问题，用cookie做登录，会暴露username，很危险
  * 如何解决：cookie中储存userid，server端对应username
  * 解决方案：session，即server端储存用户信息

* 当前session的问题

  * 目前session直接是js变量，放在node.js进程内存中
  * 第一，进程内存有限，访问量过大，内存暴增怎么办？
  * 第二，正式线上运行是多线程，进程之间内存无法共享
  * 解决方案redis
    * web server 最常用的缓存数据库，数据存放在内存中
    * 相比于mysql，访问速度快（内存和硬盘不是一个数量级的）
    * 但是成本更高，可储存的数据量更小（内存的硬伤）
    * 将web server和redis拆分为俩个单独的服务
    * 双方都是独立的，都是可扩展的（例如都扩展成集群）
    * （包括mysql，也是一个单独的服务，也可扩展）
  * 为何session适合用redis？
    * session访问频繁，对性能要求极高
    * session可不考虑断电丢失数据的问题（内存的硬伤）
    * session数据量不会太大（相比于mysql中储存的数据）
  * 为何网站数据不适合用redis？
    * 操作频率不是太高（相比于session）
    * 断电不能丢失，必须保留
    * 数据量太大，内存成本太高

* session写入redis
* 开发登录功能，和前端联调（用到nginx反向代理）



# redis

安装：https://www.runoob.com/redis/redis-install.html

* # 用redis储存session

  ```
  const redis = require("redis");
  const { REDIS_CONF } = require("../conf/db");
  // 创建客户端
  const redisClient = redis.createClient(REDIS_CONF);
  redisClient.on("error", err => {
    console.error(err);
  });
  
  function set(key, val) {
    if (val === "object") {
      val = JSON.stringify(val);
    }
    redisClient.set(key, val, redis.print);
  }
  function get(key) {
    const promise = new Promise((resolve, reject) => {
      redisClient.get(key, (err, val) => {
        if (err) {
          reject(err);
          return;
        } else if (key == null) {
          resolve(null);
          return;
        } else {
          try {
            resolve(JSON.parse(val));
          } catch (error) {
            resolve(val);
          }
        }
      });
    });
    return promise;
  }
  
  module.exports = { set, get };
  ```

# 和前端联调

* 登录功能依赖 cookie ，必须用到浏览器来联调
* cookie 跨域不共享，前端和server端必须同域
* 需要用到 nignx 做代理，让前后端端同域

* nginx介绍
  * 高性能的 web 服务器，开源免费
  * 一般用于做静态服务、负载均衡
  * 方向代理

* nginx配置

  * 配置文件：C:\Users\16063\Desktop\前端\资源\nginx-1.20.2\conf\nginx.conf
  * nginx 命令
    * https://www.cnblogs.com/qianzf/p/6809427.html
  * 

  ```nginx
  ## 启动的机器是几核的（cpu）
  worker_processes  1;
      server {
      ## 改成客户端端口
          listen       8080;
          
     #     location / {  //注释掉
     #         root   html;
     #         index  index.html index.htm;
     #     }
     		location / {
          	## 如果location请求的是/的话，就请求8001的端口
  				proxy_pass http://localhost:8001;
           }
           location /api {
         	    ## 如果location请求的是/api的话，就请求8000的端口
              	proxy_pass  http://localhost:8000;
              ## 因为做代理后的host不一样了，所以要把host传过去
              	proxy_set_header Host $host;
           }
  ```

# 日志

* 系统没有日志，就等于人没有眼睛 —— 抓瞎
* 第一，访问日志 access log ( serve 端最重要的日志 )
* 第二，自定义日志 ( 包括自定义事件，错误记录等 )

目录

* node.js 文件操作，node.js stream
  * 日志要储存到文件中
  * 为何不储存到 mysql 中？
  * 为何不储存到 redis 中？
* 日志功能开发和使用
* 日志文件拆分，日志内容分析

# IO 操作的性能瓶颈

* IO 包括 “网络IO” 和 “文件IO”

* 相比于 CPU 计算和内存读写，IO的突出特点就是：慢！

* 如何在有限的硬件资源下提高IO的操作效率？

* stream![img](https://www.runoob.com/wp-content/uploads/2015/09/bVcla61)

  * ```js
    // 标准输入输出
    process.stdin.pipe(process.stdout);
    
    const http = require("http");
    const server = http.createServer((req, res) => {
      if (req.method === "POST") {
        req.pipe(res);
      }
    });
    server.listen(3000);
    ```

  * stream 拷贝文件![img](https://img-blog.csdnimg.cn/bf25f6beca954497a49a2c5459a9709c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAWWVsbG93V2VuSmll,size_17,color_FFFFFF,t_70,g_se,x_16)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

  * stream读取文件![img](https://img-blog.csdnimg.cn/485ec507106b4c33bd4599985b09a33c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAWWVsbG93V2VuSmll,size_20,color_FFFFFF,t_70,g_se,x_16)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

* 日志拆分
  * 日志内容会慢慢积累，放在一个文件中不好处理
  * 按时间划分日志文件，如 2019-02-10.access.log
  * 实现方式：kinux 的 crontab 命令，即定时任务
    * crontab
      * 设置定时任务，格式：* * * * * command
      * 将 access.log 拷贝并重命名为 2019-02-10.access.log
      * 清空 access.log 文件，继续积累日志
  * 日志分析
    * 如针对 access.log 日志，分析 chrome 的占比
    * 日志是按行储存的，一行就是一条日志
    * 使用node.js的readlie（基于stream，效率高）

# 安全

* sql 注入：窃取数据库内容
  * 最原始、最简单的攻击，从有了 web2.0 就有了sql注入攻击
  * 攻击方式：输入一个 sql 片段，最终拼接成一段攻击代码
  * 预防措施：使用 mysql 的 escape 函数处理输入内容即可
* XSS 攻击：窃取前端的cookie内容
  * 攻击方式：在页面展示内容中掺杂 js 代码，以获取网页信息
  * 预防措施：装换生成 js 的特殊字符
* 密码加密：保障用户信息安全（重要！）
  * 万一数据库被用户攻破，最不应该泄露的就是用户信息
  * 攻击方式：获取用户名和密码，再去尝试登录其他系统
  * 预防措施：将密码加密，即便拿到密码也不知道名

# 不使用框架开发 server 的最后总结

* 开发了哪些功能模块，完整的流程

  * 五部分
    * 处理 http 接口
    * 连接数据库
    * 实现登录
    * 安全
    * 日志
    * （上线）

* 用到了哪些核心的知识点

  * http、node.js处理http、处理路由、mysql
  * coolie、session、redis、nginx反向代理
  * sql注入、xss攻击、加密
  * 日志、stream、contrab、readline

* 回顾 “server 和前端的区别”

  * 五个区别
    * 服务器稳定性
    * 内存cpu（优化 扩展）
    * 日志记录
    * 安全（包括登录校验）
    * 集群和服务拆分（设计已支持）

  ![img](https://img-blog.csdnimg.cn/6c81b4382cbc4e4c94066fa976e11780.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAWWVsbG93V2VuSmll,size_20,color_FFFFFF,t_70,g_se,x_16)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)



使用 express