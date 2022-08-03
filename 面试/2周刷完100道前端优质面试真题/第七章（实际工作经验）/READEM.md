# 实际工作经验

* 为何要考察
  * 有经验的人 “拿来就用”
  * 工作效率，工作稳定性，工作技巧…
* 考察重点
  * 性能优化，错误监控
  * 设计模式的应用
  * 项目的难点，角色之间的沟通
* 注意事项
  * 仅做个个人项目，不代表有项目经验
  * 应届生也需要有工作经验，尽量寻找实习机会

## H5 页面如何进行**首屏**优化?

> ###### 路由懒加载
>
> * 适用于 SPA（不适合 MPA）
> * 路由拆分，优先保证首页加载

> ###### 服务端渲染 SSR
>
> * 传统的前后端分离（SPA）渲染页面的过程复杂
> * SSR 渲染页面过程简单，所以性能好
> * 如果是纯 H5 页面，SSR 是性能优化的终极方案
>
> ###### SSR 是一门 “古来” 的技术
>
> > * 刚刚兴起 Web 1.0 时，就是 SSR 技术：PHP ASP JSP 等
> > * Nuxt.js（Vue）
> > * Next.js（React）

> ###### App 预取
>
> * 如果 H5 在 App WebView 中展示，可使用 App 预取
> * 用户访问列表页时，App 预加载文章首屏内容
> * 用户进入 H5 页，直接从 App 中获取内容，瞬间展示首屏

> ###### 分页
>
> * 针对列表页
> * 默认只展示第一页内容
> * 上划加载更多

> ###### 图片懒加载 lazyLoad
>
> * 针对详细页
> * 默认只展示文本内容，然后触发图片懒加载
> * 注意：提前设置图片尺寸，尽量只重绘不重排

> ###### Hybrid
>
> * 提前将 HTML JS CSS 下载到 App 内部
> * 在 App webbView 中使用 file:// 协议加载页面文件
> * 再用 Ajax 获取页面展示（也结合 App 预取）

![image-20220731155719836](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q5z53mulj21fi0suwg8.jpg)

![image-20220731155805937](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q5zuwuo4j21fi0suq5e.jpg)

![image-20220731155944413](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q61k66qzj21fi0suwh7.jpg)

## 后端一次性返回 10w 条数据，你该如何渲染？

> ###### 设计不合理
>
> * 后端返回 10w 条数据，本身技术方案设计就不合理
> * 主动和面试官沟通此事（这也许是面试官所期待的）
> * 如果面试官非要这么做，那再继续寻找解决方案

> ###### 浏览器能否处理 10w 条数据
>
> * JS 没问题
> * 渲染到 DOM 会非常卡顿

> #### 解决方案
>
> > ###### 自定义中间层
> >
> > * 自定义 nodejs 中间层，获取并拆分这 10w 条数据
> > * 前端对接 nodejs 中间层，而不是服务端
> > * 成本比较高
>
> > ###### 虚拟列表
> >
> > * 只渲染可视区域 DOM
> > * 其他隐藏区域不显示，只用`<div>`撑起高度
> > * 随着浏览器滚动，创建和销毁 DOM
> >
> > ![image-20220731160848571](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q6b0570cj21fi0suaco.jpg)
> >
> > ![image-20220731161032311](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q6csoeyvj21fi0sujtn.jpg)
>
> ![image-20220731161139532](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q6dyuuizj21fi0suwhc.jpg)

## 前端常用的设计模式有哪些？并说明使用场景

#### 设计原则

* 最重要的思想：开放封闭原则
* 对扩展开发
* 对修改封闭

> ### 工厂模式
>
> * 用一个工厂函数，来创建实例，隐藏 new
> * 如 Jquery $函数
> * 如 React createElement 函数
>
> ```js
> class Person {}
> 
> function factory() {
>   return new Person()
> }
> 
> const f = factory()
> ```

> ### 单例模式
>
> * 全局唯一的实例（无法生成第二个）
> * 如 Vuex Redux 的 store
> * 全局唯一的 dialog modal
>
> ###### 扩展
>
> * JS 是单线程的，创建单例很简单
> * Java 是支持多线程的，创建单例要考虑锁死线程
> * 否则多个线程同时创建，单例就重复了（多线程共享进程内存）

> ### 代理模式
>
> * 使用者不能直接访问对象，而是访问一个代理层
> * 在代理层可以监听 get set 做很多事情
> * 如 ES6 Proxy 实现 Vue3 响应式

> ### 观察者模式
>
> ![image-20220731163321354](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q70j91jij212q05qdgr.jpg)

> ### 发布订阅
>
> ![image-20220731163406203](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q71b7zh1j20rc0loq4b.jpg)
>
> ![image-20220731163454302](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q725ayq2j21fi0sudk6.jpg)

> ### 装饰器模式
>
> * 原功能不变，增加一些新功能（AOP 面向切片编程）
> * ES 和 Typescript 的 Decorator 语法
> * 类装饰器，方法装饰器

![image-20220731164113072](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q78ppnd9j21fi0sujt2.jpg)

![image-20220731164157824](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q79hry4zj21fi0su0ui.jpg)

### 连环问：观察者模式和发布订阅模式的区别

![image-20220731164710278](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q7ex54wij21fi0su77u.jpg)

![image-20220731164952042](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q7hpt007j21fi0sugnh.jpg)

![image-20220731165006381](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q7hz62cnj21fi0suwg9.jpg)

## 你在实际工作中，做过哪些 Vue 优化？

> ### v-if 和 v-show
>
> * v-if 彻底销毁组件
> * v-show 使用 CSS 隐藏组件
> * 大部分情况下使用 v-if 更好，不要过度优化
>
> > ###### v-for 使用 key
> >
> > ![image-20220731165840175](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q7qvunr2j21a008q753.jpg)

> ### 使用 computed 缓存
>
> ![image-20220731170257987](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q7vchfynj21fg0k8mz4.jpg)

> ### keep-alice 缓存组件
>
> * 频繁切换的组件，如 tabs
> * 不要乱用，缓存太多会占用内存，且不好 debug

> ### 异步组件
>
> * 针对体积较大的组件，如编辑器、复杂表格、复杂表单等
> * 拆包，需要时异步加载，不需要时不加载
> * 减少主包的体积，首页会加载更快

> ### 路由懒加载
>
> * 项目比较大，拆分路由，保证首页先加载

> ### 服务端渲染
>
> * 可使用 Nuxt.js
> * 按需优化，使用 SSR 的成本比较高

![image-20220731171228149](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q858uotlj21fi0sugnh.jpg)

![image-20220731171400607](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q86ubov2j21fi0sujtd.jpg)

### 连环问：你使用 Vue 遇到过哪些坑？

> ### 内存泄露
>
> * 全局变量，全局事件，全局定时器
> * 自定义事件

> ### Vue2 响应式的缺陷（Vue3 不再有）
>
> * data 新增属性需要 Vue.set
> * data 删除属性用 Vue.delete
> * 无法直接修改数据 arr[index] = value

> ### 路由切换时 scroll 到顶部
>
> * SPA 的通病，不仅仅是 Vue
> * 如，列表页，滚动到第二屏，点击进入详情页
> * 再返回到列表页（此时组件重新渲染）就 scroll 到顶部
>
> ###### 解决方案
>
> * 在列表页缓存数据和 scrollTop 值
> * 当再次返回列表页时，渲染组件，执行 scrollTo（xx）
> * 终极方案：MPA + App WebView

## 在实际工作中，做过哪些 React 优化？

![image-20220731174728740](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q95oacupj21fi0suad6.jpg)

![image-20220731174819932](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q96jziwvj21fi0sumzi.jpg)

![image-20220731174834860](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q96tceyqj21fi0suwgh.jpg)

![image-20220731174917153](https://tva1.sinaimg.cn/large/e6c9d24egy1h4q97jkyjpj21fi0sujul.jpg)

![image-20220731215835625](https://tva1.sinaimg.cn/large/e6c9d24egy1h4qgf11sz5j21fi0sun1b.jpg)

![image-20220731220036852](https://tva1.sinaimg.cn/large/e6c9d24egy1h4qgh1pwutj21fi0sutbc.jpg)

## 如何统一监听 Vue 组件报错

> ### window.onerror
>
> * 全局监听所有 JS 错误
> * 但它是 JS 级别的，识别不了 Vue 组件信息
> * 捕捉一些 Vue 监听不到的错误

> ### errorCaptured 生命周期
>
> * 监听所有**下级**组件的错误（自己组件监听不到）
> * 返回 false 会阻止向上传播

> ### 异步错误
>
> * 异步回调错误，errorHandler 监听不到
> * 需要使用 window.onerror

![image-20220801110422688](https://tva1.sinaimg.cn/large/e6c9d24egy1h4r34k4rvej21fi0sudi4.jpg)

![image-20220801110444772](https://tva1.sinaimg.cn/large/e6c9d24egy1h4r34xwn10j21fi0su0uw.jpg)

![image-20220801110531747](https://tva1.sinaimg.cn/large/e6c9d24egy1h4r35r1a5uj21fi0suq4f.jpg)

## 如何统一监听 React 报错

> ### ErrorBoundary
>
> * 监听所有**下级**组件报错，可降级展示 UI
> * 只监听组件渲染时报错，不监听 DOM 事件，异常错误
> * production 环境生效，dev 会直接抛出错误

> ### 事件报错
>
> * ErrorBoundary 不会监听 DOM 事件报错
> * 可用 try-catch
> * 可用 window.onerror

> ### 异步错误
>
> * ErrorBoundary 不会监听异步错误
> * 需要使用 window.onerror

![image-20220801122214742](https://tva1.sinaimg.cn/large/e6c9d24egy1h4r5dkrul8j21fi0sugnr.jpg)

![image-20220801122324821](https://tva1.sinaimg.cn/large/e6c9d24egy1h4r5es7yqyj21fi0sudhq.jpg)

## 如果一个 H5 很慢，你该如何排查性能问题？

> ### [前端性能指标(页面生命周期)](https://zh.javascript.info/onload-ondomcontentloaded)
>
> * First Paint（FP）（第一次渲染）
> * First Contentfu Paint（FCP）（第一次有内容的渲染）
> * First Meaningful Paint（FMP）——以弃用，改用 LCP（第一次有意义的渲染）
> * DomContentLoaded（DCL）（页面DOM内容渲染完成）
> * Largest ContentFull Paint（LCP）（页面最大的内容已经渲染完成）
> * Load（L）（外部资源已加载完成，样式已被应用，图片大小也已知了）
>
> > ###### Chrome devTools
> >
> > * Performance 可查看上述性能指标，并有网页快照
> > * Network 可以查看各个资源的加载时间
>
> > ###### Lighthouse
> >
> > * 非常流行的第三方性能评测工具
> > * 支持移动端和 PC
> >
> > ![image-20220801142947632](https://tva1.sinaimg.cn/large/e6c9d24egy1h4r92ahiuaj21fi0sujtq.jpg)
> >
> > ![image-20220801143015346](https://tva1.sinaimg.cn/large/e6c9d24egy1h4r92ro01uj21fi0su41n.jpg)
>
> > ###### 识别问题
> >
> > * 加载慢？
> > * 渲染慢？
> > * ![image-20220801143457060](https://tva1.sinaimg.cn/large/e6c9d24egy1h4r97nfh6oj21fi0suafu.jpg)
> >
> > ![image-20220801143517668](https://tva1.sinaimg.cn/large/e6c9d24egy1h4r9808tnij21fi0sudic.jpg)
> >
> > ![image-20220801143615968](https://tva1.sinaimg.cn/large/e6c9d24egy1h4r990s8mhj219m0owq54.jpg)
> >
> > ![image-20220801143644774](https://tva1.sinaimg.cn/large/e6c9d24egy1h4r99ikhmmj21fi0su0vl.jpg)
> >
> > ![image-20220801143726526](https://tva1.sinaimg.cn/large/e6c9d24egy1h4r9a8rshrj21fi0su40b.jpg)
> >
> > ![image-20220801143841250](https://tva1.sinaimg.cn/large/e6c9d24egy1h4r9bjlkutj21fi0sudi5.jpg)

## 你工作经历中，遇到过哪些项目难点，如何解决的？

> ###### 遇到问题要注意积累
>
> * 每个人都会遇到难题，总有几个问题让你抓耳挠腮
> * 日常要注意积累，解决了问题就自己写网站复盘一下
>
> ![image-20220801144457356](https://tva1.sinaimg.cn/large/e6c9d24egy1h4r9i2dsnxj21fi0su40s.jpg)

























