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
  * server端要记录日志，、储存日志、分析日志、前端不关心
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