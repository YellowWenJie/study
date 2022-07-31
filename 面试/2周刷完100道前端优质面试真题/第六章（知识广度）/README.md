# 知识广度

* ###### 为何要考察

  * 前端涉及的范围越来越广泛
  * 企业需要全能型人才

* ###### 考察重点

  * 移动端相关知识
  * HTTP Socket 等网络相关知识
  * Nodejs 相关知识

* 其他面试题地址推荐：

  * [「2021」高频前端面试题汇总之浏览器原理篇 - 掘金 (juejin.cn)](https://juejin.cn/post/6916157109906341902)

## 移动端 H5 click 有 300ms 牙齿，如何解决？

![image-20220730072613137](https://tva1.sinaimg.cn/large/e6c9d24egy1h4oll4kxqnj21gg0u0q5x.jpg)

![image-20220730072806214](https://tva1.sinaimg.cn/large/e6c9d24egy1h4oln14s49j21gg0u0n0a.jpg)

![image-20220730072917081](https://tva1.sinaimg.cn/large/e6c9d24egy1h4olo4ieyoj21gg0u0q5o.jpg)

![image-20220730072934795](https://tva1.sinaimg.cn/large/e6c9d24egy1h4olofspecj21gg0u077r.jpg)

![image-20220730073135991](https://tva1.sinaimg.cn/large/e6c9d24egy1h4olqjnbggj21gg0u0gn5.jpg)

## 网络请求中，token 和 cookie 有什么区别？

> ###### cookie
>
> * HTTP 无状态，每次请求都要带 cookie，以帮助识别身份
> * 服务端也可以向客户端 set-cookie，cookie 大小限制为 4kb
> * 默认有跨域限制：不可跨域共享、传递 cookie

> ###### cookie 本地存储
>
> * HTML5 之前 cookie 常被用于本地存储
>
> * HTML5 之后推荐使用 localStorage 和 sessionStorage

> ###### 现代浏览器开始禁止第三方 cookie
>
> * 和跨域限制不同。这里是：禁止网页引入第三方 JS 设置 cookie
> * 打击第三方广告，保护用户隐私
> * 新增属性 SameSite: Strict / Lax / None; 值可自己选择

### cookie 和 session

* cookie 用于登录验证，存储用户标识（如 userId）
* session 在服务端，存储用户详细信息，和 cookie 信息一一对应
* cookie + session 是常见登录验证解决方案

![image-20220730075254439](https://tva1.sinaimg.cn/large/e6c9d24egy1h4omcpklmrj21gg0u0789.jpg)

### token vs cookie

* cookie 是 HTTP 规范，而 token 是自定义传递
* cookie 会默认被浏览器存储，而 token 需自己存储
* token 默认没有跨域限制

### JWT（ JSON Web Token）

* 前端发起登录，后端验证成功之后，返回一个加密的 token
* 前端自行存储这个 token（其中包含了以后信息，加密了）
* 以后访问服务端接口，都带着这个 token，作为用户信息

 ![image-20220730103926320](https://tva1.sinaimg.cn/large/e6c9d24egy1h4or60l0h0j21gg0u00uq.jpg)

![image-20220730104024639](https://tva1.sinaimg.cn/large/e6c9d24egy1h4or70zmz4j21hy0p2tak.jpg)

### 连环问：Session 和 JWT 哪个更好？

> ###### Session 优点
>
> * 原理简单，易于学习
> * 用户信息存储在服务端，可快速封禁某个用户
>
> ###### 缺点：
>
> * 占用服务端内存，硬件成本高
> * 多进程，多服务器时，不好同步——需使用第三方缓存，如 redis
> * 默认有跨域限制

> ###### JWT 优点
>
> * 不占用服务端内存
> * 多进程，多服务器不受影响
> * 可以跨域限制
>
> ###### 缺点
>
> * 用户信息存储在客户端，无法快速封禁某用户
> * 万一服务端秘钥被泄露，则用户信息全部丢失
> * token 体积一般大于 cookie，会增加请求的数据量

![image-20220730114817150](https://tva1.sinaimg.cn/large/e6c9d24egy1h4ot5memmnj21gg0u0wgs.jpg)

### 连环问：如何实现 SSO 单点登录？

> ###### 基于cookie
>
> * cookie 默认不可跨域共享，但是有些情况下可设置为共享
> * 主域名相同，如 www.baidu.com image.baidu.com
>
> * 设置 cookie domain 为主域名，即可共享 cookie

> ###### SSO
>
> * 主域名完全不同，则 cookie 无法共享
> * 可使用 SSO 技术方案

![第三方登录，比如微信，github，微博，QQ](https://tva1.sinaimg.cn/large/e6c9d24egy1h4otouj2oij21gg0u0q5z.jpg)

## HTTP 协议和 UDP 协议有什么区别？

> ###### 网络协议
>
> * HTTP 协议在应用层
> * TCP UDP 协议在传输层
> * 严格来说，应该那 TCP 和 UDP 进行比较

![image-20220730124804672](https://tva1.sinaimg.cn/large/e6c9d24egy1h4ouvu5n41j20u20lo41b.jpg)

> ###### TCP 协议
>
> * 有连接（ 三次握手 ）
> * 有断开（ 四次挥手 ）
> * 稳定传输

> ###### UDP 协议
>
> * 无连接，无断开
> * 不稳定传输，但效率高
> * 如视频会议、语音通话

![image-20220730125154870](https://tva1.sinaimg.cn/large/e6c9d24egy1h4ouztsru8j21gg0u00uz.jpg)

### 连环问：HTTP 协议 1.0 1.1 2.0 有什么区别？

> ###### HTTP 1.0
>
> * 最基本的 HTTP 协议
> * 支持基本的 GET POST 方法

> ###### HTTP 1.1
>
> * 缓存策略 cache-control E-tag 等
> * 支持长连接 Connection:keep-alive，一次 TCP 连接多次请求
> * 断点续传，状态码 206
> * 支持学的方法 PUT DELETE 等，可用于 Restful API

> ###### HTTP 2.0
>
> * 可压缩 header，减少体积
> * 多路复用，一次TCP连接中可以多个HTTP并行请求
> * 服务端推送

## 什么是 HTTPS 中间人攻击？如何预防？

> ###### HTTPS 加密传输
>
> * HTTP 明文传输
> * HTTPS 加密传输 HTTP + TLS/SSL
>
> ![image-20220730130302788](https://tva1.sinaimg.cn/large/e6c9d24egy1h4ovbepizqj21gg0u0n1l.jpg)

![image-20220730134317443](https://tva1.sinaimg.cn/large/e6c9d24egy1h4owha7cmhj21gg0u0gov.jpg)

![image-20220730134334409](https://tva1.sinaimg.cn/large/e6c9d24egy1h4owhku9g2j21gg0u00wq.jpg)

![image-20220730134654407](https://tva1.sinaimg.cn/large/e6c9d24egy1h4owl1i4frj21gg0u0ab9.jpg)

## `<script> `defer 和 async 有什么区别？

![image-20220730134930751](https://tva1.sinaimg.cn/large/e6c9d24egy1h4ownrcv3ej21gg0u0go7.jpg)

![image-20220730135441581](https://tva1.sinaimg.cn/large/e6c9d24egy1h4owt55cs6j21gg0u0772.jpg)

## 连环问：prefetch 和 dns-prefetch 有什么区别？

> ###### preload 和 prefetch
>
> * preload 资源在当前页面使用，会**优先**加载
> * prefetch 资源在未来页面使用，**空闲时**加载
>
> ![image-20220730135758450](https://tva1.sinaimg.cn/large/e6c9d24egy1h4owwjwq0cj21gg0u0whw.jpg)

> ###### dns-prefetch 和 preconnet
>
> * dns-prefetch 即 DNS 预查询
> * preconnet 即 DNS 预连接

![image-20220730160430504](https://tva1.sinaimg.cn/large/e6c9d24egy1h4p0k83w5wj21gg0u0dic.jpg)

![image-20220730160528945](https://tva1.sinaimg.cn/large/e6c9d24egy1h4p0l8cbplj21gg0u0gng.jpg)

## 你知道哪些前端攻击？该如何预防？

> ### XSS
>
> * Cross Site Script 夸站脚本攻击
> * 手段：黑客将 JS 代码插入到网页内容中，渲染时执行 JS 代码
> * 预防：特殊字符替换（前端或者后端）
>
> ![image-20220730164010191](https://tva1.sinaimg.cn/large/e6c9d24egy1h4p1lbxnj1j21gg0u00xu.jpg)
>
> <div style='color:red'>Vue React 默认防XSS攻击</div>
>
> ###### 除了这俩个
>
> ![image-20220730164614990](https://tva1.sinaimg.cn/large/e6c9d24egy1h4p1shl1skj20f4024q2v.jpg)

> ### CSRF
>
> * Cross Site Request Forgery 跨站请求伪造
> * 手段：黑客引导用户去访问另一个网站的接口，伪造请求
> * 预防：严格的跨域限制 + 验证码机制
>
> ![image-20220730165246859](https://tva1.sinaimg.cn/large/e6c9d24egy1h4p1yghconj21680lsq4z.jpg)
>
> ![image-20220730165357547](https://tva1.sinaimg.cn/large/e6c9d24egy1h4p1zo9h0xj217i0lsdhx.jpg)

> ### 点击劫持
>
> * CLick Jacking
> * 手段：诱导界面上蒙一个透明的 iframe，诱导用户点击
> * 预防：让 iframe 不能跨域加载
>
> ![image-20220730165552442](https://tva1.sinaimg.cn/large/e6c9d24egy1h4p21nwj7ij21gg0u0775.jpg)
>
> ![image-20220730165713244](https://tva1.sinaimg.cn/large/e6c9d24egy1h4p232l07xj21gg0u0tda.jpg)

> ### DDOS
>
> * Distribute denial-of-servise 分布式拒接服务
> * 手段：分布式的、大规模的流量访问，使服务器瘫痪
> * 预防：软件层不好做，需硬件预防（如阿里云 WAF）

> ### SQL 注入
>
> * 手段：黑客提交内容时写入 SQL 语句，破坏数据库
> * 预防：处理输入的内容，替换特殊字符

![image-20220730170546547](https://tva1.sinaimg.cn/large/e6c9d24egy1h4p2byoq7dj213m0laaaw.jpg)

## WebSocket 和 HTTP 有什么区别？

> ### WebSocket
>
> * 支持端对端通讯
> * 可以由 client 发起，也可以由 server 发起
> * 用于：消息通知，直播间讨论区，聊天室，协同编辑

> ##### WebSocket 连接过程
>
> * 先发起一个 HTTP 请求
> * 成功之后再升级到 WebSocket 协议，再通讯
>
> ![image-20220730173429468](https://tva1.sinaimg.cn/large/e6c9d24egy1h4p35udoiqj21fi0sugpb.jpg)

> ### WebSocket 和 HTTP 区别
>
> * WebSocket 协议名是 ws://，可**双端**发起请求
> * WebSocket 没有跨域限制
> * 通过 send 和 onmessage 通讯（HTTP 通过 req 和 res）
>
> ![image-20220730173727525](https://tva1.sinaimg.cn/large/e6c9d24egy1h4p39aw31bj21fi0su43g.jpg)
>
> ![image-20220730173802385](https://tva1.sinaimg.cn/large/e6c9d24egy1h4p39jbjelj21fi0su0xl.jpg)

### 连环问：WebSocket 和 HTTP 长轮询的区别

> ### 区别
>
> * HTTP 长轮询：客户端发起请求，服务端阻塞，不会立即返回
> * WebSocket：客户端可发起请求，服务端也可发起请求

![image-20220730194538842](https://tva1.sinaimg.cn/large/e6c9d24egy1h4p6ybpt2ej21fi0suq65.jpg)

## 描述从输入 url 到页面展示的网站过程

> ## 步骤
>
> * ###### 网络请求
>
>   * DNS 查询（得到 IP），建立 TCP 连接（三次握手）
>   * 浏览器发起 HTTP 请求
>   * 收到请求响应，得到 HTML 源代码
>
>   > ###### 继续请求静态资源
>   >
>   > * 解析 HTML 过程中，遇到静态资源还会继续发起网络请求
>   > * JS CSS 图片 视频等
>   > * 注意：静态资源可能有强缓存，此时不必请求
>
> * ###### 解析：字符串 ->结构化数据
>
>   * HTML 构建 DOM 树
>   * CSS 构建 CSSOM 树（ style tree ）
>   * 俩者结合，形成 render tree
>
>   > ![image-20220730195756994](https://tva1.sinaimg.cn/large/e6c9d24egy1h4p7b3ujk4j21fi0sujtr.jpg)
>   >
>   > ###### 解析过程很复杂
>   >
>   > * CSS 可能来着`<style> <link>`
>   > * JS 可能内嵌、或外链，还有 defer async 逻辑
>   > * img 可能内嵌（ base64 ），可能外链
>   >
>   > ###### 优化解析
>   >
>   > * CSS 放在`<head>`中，不要异步加载CSS
>   > * JS 放在`<body>`最下面（或合适使用 defer async）
>   > * `<img>`提前定义 width height
>
> * ###### 渲染：Render Tree 绘制到页面
>
>   * 计算各个 DOM的尺寸、定位，最后绘制到页面
>   * 遇到JS可能会执行（参考 defer async）
>   * 异步CSS、图片加载，可能会触发重新渲染

![image-20220730200529979](https://tva1.sinaimg.cn/large/e6c9d24egy1h4p7iymtxej21fi0suwgg.jpg)

![image-20220730200615044](https://tva1.sinaimg.cn/large/e6c9d24egy1h4p7jqvlazj21f40m875z.jpg)

### 连环问：重绘 repaint 重排 reflow 有什么区别？

> ### 动态网页，随时都会重绘、重排
>
> * 网页动画
> * Modal Dialog 弹窗
> * 增加/删除一个元素，显示/隐藏一个元素

> ### 重绘 repaint 
>
> * 元素外观改变，颜色、背景色
> * 但元素的尺寸、定位不变，不会影响其它元素的位置

> ### 重排 reflow
>
> * 重新计算尺寸和布局，可能会影响其它元素的位置
> * 如元素高度增加，可能会使相邻元素位置下移

> ### 区别
>
> * 重排比重绘要影响更大，消耗更大
> * 所以，要尽量避免无意义的重排

> ### 减少重排的方法
>
> * 集中修改样式，或直接切换 css class
> * 修改之前先设置 display:none,脱离文档流
> * 使用 BFC 特性，不影响其它元素位置
> * 频繁触发（resize scroll）使用节流和防抖
> * 使用 createDocumentFragment 批量操作 DOM
> * 优化动画，使用 CSS3 和 requestAnimationFrame

> ### 扩展：BFC
>
> * Block Format Context 块级格式化上下文
> * 内部的元素无论如何改动，都不会影响其它元素的位置
>
> ###### 触发 BFC 的条件
>
> * 根节点`<html>`
> * float:left/right;
> * overflow:auto/scroll/hidden;
> * display:inline-block/table/table-row/table-cell;
> * display:flex/grid; 的直接子元素
> * position:absolute/fixed;

## 如何实现网页多标签通讯？

> ###### 使用 WebScoket
>
> * 无跨域限制
> * 需要服务端支持，成本高

> ###### 通过 localStorage 通讯
>
> * **同域**的 A 和 B 俩个页面
> * A 页面设置 localStorage
> * B 页面可监听到 localStorage 值的修改
>
> ![image-20220730203133710](https://tva1.sinaimg.cn/large/e6c9d24egy1h4p8a4hrnuj21fi0sutdm.jpg)

> ###### 通过[SharedWorker](https://www.ruanyifeng.com/blog/2018/07/web-worker.html)
>
> 	* SharedWorker 是 WebWorker 的一种
> 	* WebWorker 可开启子**进程**执行JS，但不能操作 DOM
> 	* SharedWorker 可单独开启一个进程，用于**同域**页面通讯

![image-20220731111808037](https://tva1.sinaimg.cn/large/e6c9d24egy1h4pxwkaqfaj21fi0su40g.jpg)

### 连环问：网页和 iframe 如何通讯？

* 使用 postMessage 通讯
* 注意跨域的限制和判断

## 请描述 koa2 的洋葱圈模型

> ###### koa2
>
> * 一个简约、流行的 nodejs 框架
> * 通过**中间件**组织代码
> * 多个中间件以“洋葱圈模型”执行

![image-20220731114845864](https://tva1.sinaimg.cn/large/e6c9d24egy1h4pysftmo2j21fi0suq5e.jpg)

