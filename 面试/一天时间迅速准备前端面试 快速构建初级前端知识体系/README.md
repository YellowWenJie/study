# 快搞定前端面试题

### 重要考点：

* HTML 和 CSS
* 原型，作用域，异步
* DOM 事件和 Ajax
* 性能优化
* 各种手写代码
* HTTP 协议

### 如何做到“最易理解”？

* 讲知识点，不是题海战术
* 学会一道题，就能应对一类题
* 帮你构建前端知识体系

### 知识点介绍

> ###### CSS
>
> * 布局
> * 定位
> * 移动响应式

> ###### ES 语法
>
> * 原型 原型链
> * 作用域 闭包
> * 异步 单线程

> ###### Web API
>
> * DOM BOM
> * Ajax 跨域
> * 事件 存储

> ###### 开发环境
>
> * 版本管理
> * 调试抓包
> * 打包构建

> ###### 运行环境
>
> * 页面渲染
> * 性能优化
> * Web 安全

> ###### 网络通讯
>
> * headers
> * Restful API
> * 缓存策略

### 关于面试

* 基础工程师：基础知识
* 高级工程师：基础知识 + 项目经验
* 架构师：解决方案能力

### 关于基础

* 工程师的自我修养：基础知识
* 扎实的基础能让你高效学习新技术

### 什么是知识体系

* 高效学习三部曲：找准知识体系；可以练习；及时反馈
* 知识体系：结构化和知识范围
* 涵盖所以知识点；结构化、有组织、易扩展

### 从哪些方面梳理

* W3C 标准
* ECMA 262 标准
* 开发环境
* 运行环境

### 知识体系

* CSS 基础知识
* JS 基础语法
* JS—Web—API

# 面试准备

* 先不急于学知识
* 先了解一下什么是面试
* 面试之前需要准备什么

> * 面试的环节和流程
>
> > * 什么是面试
> >
> > > * 经过组织者精心设计
> > > * 以交谈和观察为主要手段
> > > * 评价知识、能力和经验，综合素质
> >
> > * 如何拿到简历
> >
> > > * 员工内推
> > > * 猎头推荐
> > > * hr 收集（主动搜索，接收邮件）
> >
> > * 面试流程
> >
> > > * 一面
> > > * 二面（交叉面试）
> > > * 三面
> > > * hr 面试
> >
> > * 校招和社招的区别
> >
> > > * 校招看中基础知识和能力，主要在一面
> > > * 社招看中经验，主要在二面（基础知识要过关）
> > > * 社招，工作时间越长，越偏重经验
>
> * JD 分析
>
> > * JD 是什么
> >
> > > * JD 是用人单位发布的招聘信息
> > > * 职位描述
> > > * 岗位要求
> >
> > * JD 分析的思路
> >
> > > * 从 JD 中能看到什么
> > >
> > > > * 工作内容
> > > > * 技术栈
> > > > * 经验要求
> > >
> > > * 不要过于在意 JD
> > >
> > > > * JD 是 hr 发布的
> > > > * hr 和技术人员可能会沟通不及时
> > > > * 不能完全相信 JD 的要求
> >
> > * 案例
> >
> > > ![image-20220803212153349](https://tva1.sinaimg.cn/large/e6c9d24egy1h4tw7q09noj21ec0suwh5.jpg)
>
> * 如何写简历
>
> > * 简历包含的内容
> >
> > > * 个人信息
> > > * 教育经历
> > > * 专业技能
> > > * 工作经历
> > > * 项目经历
> > > * 博客和开源
> >
> > * 简历中需要注意的问题
> > * 重点
> >
> > > * 简历就像高考作文 —— 阅读时间非常短
> > > * 内容简洁
> > > * 直击重点，表现出自己的优势
> > >
> > > ![image-20220803221031751](https://tva1.sinaimg.cn/large/e6c9d24egy1h4txmadi58j20we0hkmzx.jpg)
>
> * 准备工作和注意事项
>
> > * 看 JD，是否需要临时准备一下
> > * 打印纸质简历，带着纸和笔
> > * 最好带着自己的电脑，现场可能手写代码
> > * 要有时间观念，如果迟到或者推迟，要提前说
> > * 衣着适当，不用正装，也不要随意
> > * 违和离职？——不要吐槽前东家，说自己的原因
> > * 遇到不会的问题，要表现出积极的一面

# HTML CSS 面试题

* ###### HTML 面试题

  * 如何理解 HTML 语义化？
    * 让人更容易读懂（增加代码可读性）
    * 让搜索引擎跟容易读懂（利于SEO）
  * 默认情况下，哪些 HTML 是块级元素，哪些是行内元素
    * display:block/table;有 div h1 h2 … table ul ol p 等
    * display:inline/inline-block;有 span img input button 等 

* ###### CSS 面试题

> ###### 分析知识模块
>
> * 布局
>
> > * 盒子模型的宽度如何计算？
> >
> > > ![image-20220804122028096](https://tva1.sinaimg.cn/large/e6c9d24egy1h4um6nf341j21ec0su0v7.jpg)
> > >
> > > * offsetWidth = （内容宽度 + 内边距 + 边框），无外边框
> > >
> > > * 答案为 122px
> > >
> > > * 补充：如果让 offsetWidth 等于 100px，该如何做？
> > >
> > >   ![image-20220804122231236](https://tva1.sinaimg.cn/large/e6c9d24egy1h4um8s3u5lj21ec0sujtp.jpg)
> > >
> > >   
> >
> > * margin 纵向重叠的问题
> >
> > > ![image-20220804122600907](https://tva1.sinaimg.cn/large/e6c9d24egy1h4umcf9le5j21ec0sugo5.jpg)
> > >
> > > * 相邻元素的 margin-top 和 margin-bottom 会发生重叠
> > > * 答案为 15px
> >
> > * margin 负值的问题
> >
> > > * margin-top 和 margin-left 负值，元素向上、向左移动
> > > * margin-right 负值，右侧元素左移，自身不受影响
> > > * margin-bottom 负值，下方元素上移，自身不受影响
> >
> > * BFC 理解和应用
> >
> > > * 什么是 BFC？如何应用？
> > >
> > > > * Block format context，块级格式化上下文
> > > > * 一块独立渲染区域，内部元素的渲染不会影响边界以外的元素
> > >
> > > * 形成 BFC 的常见条件
> > >
> > > > * float 不是 none
> > > > * position 是 absolute 或 fixed
> > > > * overflow 不是 vivible
> > > > * display 是 flex inline-block
> > > > * 清除浮动
> >
> > * float 布局的问题，以及 clearfix
> > * flex布局的问题
>
> * 定位
>   * absolute（依据最近一层的定位元素去定位） 和 relative（依据自身定位）
> * 图片样式
>
> > * line-height 如何继承
> >
> > > * 写具体数值，如 30px，则继承该值（比较好理解）
> > > * 写比例，如 2/1.5，则继承该比例（比较好理解）
> > > * 写百分比，如 200%，则继承计算出来的值（考点）
>
> * 响应式
>
> > * rem 是什么？
> >   * px，绝对长度单位，最常用
> >   * em，相对长度单位，相对于父元素，不常用
> >   * rem，相对长度单位，相对跟元素，常用于响应式布局
> > * 响应式布局的常见方案
> >
> > ![image-20220804140158910](https://tva1.sinaimg.cn/large/e6c9d24egy1h4up49ouonj21ec0su0v0.jpg)
> >
> > * vw / vh
> >
> > > * rem 弊端
> > > * 网页视口尺寸
> > >
> > > > * window.screen.height // 屏幕高度
> > > > * window.innerHeight // 网页视口高度
> > > > * document.body.clientHeight // body高度
>
> * CSS3

# JS 基础知识

闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找，而不是执行的地方



this：this取什么值是在函数执行的时候定义的，而不是函数定义的时候定义的

# http 面试题

* 前端工程师开发界面
* 需要调用后端的接口，提交/获取 数据——http 协议
* 要求事先掌握好 ajax

### http 状态码

> * ###### 状态码分类
>
> > * 1xx 服务器收到请求
> > * 2xx 请求成功，如 200（成功）
> > * 3xx 重定向，如 302
> >   * 301 永久重定向（配合 location，浏览器自动处理）
> >   * 302 临时重定向（配合 location，浏览器自动处理）
> >   * 304 资源未被修改
> > * 4xx 客户端错误，如 404
> >   * 404 资源未找到
> >   * 403 没有权限
> > * 5xx 服务端错误，如 500
> >   * 500 服务器错误
> >   * 504 网关超时
>
> * ###### 关于协议和规范
>
> > * 就是一个约定
> > * 要求大家都跟着执行
> > * 不要违法规范，例如 IE 浏览器

### http methods

* 传统的 methods

> * get 获取服务器数据
> * post 向服务器提交数据
> * 简单的网页功能，就这俩个操作

* 现在的 methods

> * get 获取数据
> * post 新建数据
> * patch/put 更新数据
> * delete 删除数据

* Restful API

> * 一种新的 API 设计方法（早已推广使用）
> * 传统 API 设计：把每个 url 当做一个功能
> * Restful API 设计，把每个 url 当做一个唯一的资源
>
> > ###### 如何设计成一个资源
> >
> > * 尽量不用 url 参数
> >
> > > * 传统 API 设计：/api/list?pageIndex=2
> > > * Restful API 设计：/api/list/2
> >
> > * 用 method 表示操作类型
> >
> > > * post 请求：/api/create-blog
> > > * post请求：/api/update-log?id=100

### http headers

* 常见的 Resquest Headers

> * Accept 浏览器可接收的数据格式
> * Accept-Encoding 浏览器可接收的压缩算法，如 gzip
> * Accept-Language 浏览器可接收的语言，如 zh-CN
> * Connection: keep-alive 一次 TCP 连接重复使用
> * cookie
> * Host
> * User-Agent（简称 UA）浏览器信息
> * Content-type 发送数据的格式，如 application/json

* 常见的 Response Headers

> * Content-type 返回数据的格式，如 application/json
> * Content-length 返回数据的大小，多少字节
> * Content-Encoding 返回数据的压缩算法，如 gzip
> * Set-Cookie

![image-20220804173230286](https://tva1.sinaimg.cn/large/e6c9d24egy1h4uv7bhlx3j21ec0sujt5.jpg)

* 缓存相关的 headers

  ![image-20220804173431746](https://tva1.sinaimg.cn/large/e6c9d24egy1h4uv9f91oqj20q40ay74u.jpg)

### http 缓存

* 关于缓存的介绍

> * 什么是缓存？
> * 为什么需要缓存？
> * 哪些资源可以被缓存？——静态资源（js css img）

* http 缓存策略（强调缓存 + 协商缓存）

  * 强制缓存

  > ![image-20220804195305678](https://tva1.sinaimg.cn/large/e6c9d24egy1h4uz9lmhqbj21ec0sumzx.jpg)
  >
  > 

* 刷新操作方式，对缓存的影响