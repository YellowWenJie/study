# 知识深度

* 为何要考察
  * 探测技术“天花板”，看技术潜力
  * 入职定级的重要参考标准
  * 希望和有技术深度的工程师共事
* 考察重点
  * 非应用层面，深入到底层原理
  * JS 相关原理
  * Vue React 等框架的原理
* 注意事项
  * 技术深度，有 1-2 方面即可。深，就不能广
  * 技术深度题目不过关，不一定面试不通过

![image-20220729115904769](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nnul188nj21bu0qywgq.jpg)

## JS 内存泄露如何检测？场景有哪些？

### 垃圾回收

> * ###### 什么是垃圾回收
>
>   * 函数已经完成了，再也用不到的变量
>
> * ###### 引用计数（之前）
>
> * ###### 标记清除（现代）





### 连环问：闭包是内存泄露吗？

内存泄露：非预期的垃圾没回收 

<div style="color:red">闭包变量永远是一个常驻内存</div>

答：不是，闭包的数据是不可以被垃圾回收的

## JS 内存泄露如何检测？场景有哪些？

#### 如何检测内存变化

使用浏览器的 Performance

![image-20220729133245236](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nqk1ngakj210408ujs3.jpg)

![image-20220729133608125](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nqnk569dj21bu0qyact.jpg)

![image-20220729134526895](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nqx9460zj21gg0u0q5a.jpg)

#### 扩展：WeakMap WeakSet（弱引用）

## 浏览器和 nodejs 的事件循环有什么区别？

#### 单线程和异步

> * JS 是单线程的（无论在浏览器还是 nodejs）
> * 浏览器中 JS 执行和 DOM 渲染公用一个线程
> * 异步
>
> > ###### 宏任务和微任务
> >
> > * 宏任务，如 setTimeout setInteral 网络请求
> > * 微任务，如 promise async/await
> > * 微任务在下一轮 DOM 渲染之前执行，宏任务在之后执行

![image-20220729140403455](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nrgmobpkj21gg0u0785.jpg)

#### nodejs 异步

> * Nodejs 同样使用 ES 语法，也是单线程，也需要异步
> * 异步任务也分：宏任务 + 微任务
> * 但是，它的宏任务和微任务，分不同类型，有不同优先级
>
> > ### 宏任务
> >
> > ![image-20220729141618146](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nrtcvovzj21gg0u0gon.jpg)
> >
> > ![image-20220729141634975](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nrtn5tlsj21gg0u0whg.jpg)
> >
> > ### 微任务
> >
> > ![image-20220729141854808](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nrw2d6rej21gg0u076u.jpg)

![image-20220729141938114](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nrwteqzcj21gg0u0tbf.jpg)

![image-20220729142003614](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nrx9b3daj21gg0u0tcv.jpg)

![image-20220729142121443](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nrym4lbqj21gg0u0gnn.jpg)

![image-20220729142221109](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nrzmz47kj21gg0u040s.jpg) 

## vdom 真的很快吗？

> #### vdom
>
> * Virtual DOM，模拟 DOM
> * 由 JS 对象模拟 DOM 节点数据
> * 由 React 最先推广使用

![image-20220729142809959](https://tva1.sinaimg.cn/large/e6c9d24egy1h4ns5ovh6kj21gg0u0tbc.jpg)

![image-20220729143434276](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nsccycqzj21gg0u0acz.jpg)

![image-20220729143451254](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nscna9uij21gg0u0785.jpg)

## 遍历数组，for 和 forEach 哪个快？

![image-20220729144319704](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nslgv1w8j21ie0r240n.jpg)

![image-20220729144432896](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nsmqnqgij21i60q80ue.jpg)

## nodejs 如何开启进程，进程如何通讯？

![image-20220729145230592](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nsv13jwqj21gg0u0goz.jpg)

![image-20220729145716019](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nszywo6sj21gg0u0wh5.jpg)

> ##### 浏览器可以用 WebWorker
>
> ##### nodejs 可以用 fork cluster 

![image-20220729153057222](https://tva1.sinaimg.cn/large/e6c9d24egy1h4ntz0neatj21g20lcjsj.jpg)

![image-20220729153127648](https://tva1.sinaimg.cn/large/e6c9d24egy1h4ntzjq62mj21gg0u0gn3.jpg)

## 请描述 JS Bridge 原理

> ###### 什么是 JS Bridge？
>
> * JS 无法直接调用 netive API（app，手机里的 app）
> * 需要通过一些特定的 “格式” 来调用
> * 这些 “格式” 就统称 JS-BBridge，例如微信 JSSDK

![image-20220729153506494](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nu3bthplj21gg0u0aci.jpg)

![image-20220729153831950](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nu6w0clfj21hk0mwjsn.jpg)

## 是否了解过 requestIdleCallback 和 requestAnimationFrame 有什么区别？

![image-20220729155353502](https://tva1.sinaimg.cn/large/e6c9d24egy1h4numvnl3sj21i20qujtx.jpg)

![image-20220729155449903](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nunus78lj21gg0u076k.jpg)

![image-20220729155535190](https://tva1.sinaimg.cn/large/e6c9d24egy1h4nuompd93j21gg0u0dhn.jpg)

##   连环问：他们是宏任务还是微任务

* 俩者都是宏任务
* 要待 DOM 渲染完才执行，肯定是宏任务

## Vue 每个生命周期都做了什么？

![lifecycle](https://v3.cn.vuejs.org/images/lifecycle.svg)

## beforeCreate

> * 创建一个空白的 Vue 实例
> * data method 尚未被初始化，不可使用

## Created

> * Vue 实例初始化完成，完成响应式绑定
> * data method 都已经初始化完成，可调用
> * 尚未开始渲染模版

## beforeMount

> * 编译模版，调用 render 生成 vdom
> * 还没有开始渲染 DOM

## mounted

> * 完成 DOM 渲染
> * 组件创建完成
> * 开始由 “创建阶段” 进入 ”运行阶段”

## beforeUpdate

> * data 发生变化之前
> * 准备更新 DOM（尚未更新 DOM）

## updated

> * data 发生变化，且 DOM 更新完成
> * 不要在 updated 中修改 data，可能会导致死循环

## beforeUnmount

> * 组件进入销毁阶段（尚未销毁，可正常使用）
> * 可移除、解绑一些全局事件、自定义事件

## Unmounted

> * 组件被销毁
> * 所有子组件也都被销毁

## keep—alive 组件

> * onActivated 缓存组件被激活
> * onDeactivated 缓存组件被隐藏

![image-20220729200744675](https://tva1.sinaimg.cn/large/e6c9d24egy1h4o1yzzjfzj21gg0u0ju9.jpg)

![image-20220729200753619](https://tva1.sinaimg.cn/large/e6c9d24egy1h4o1z5hchjj21gg0u076j.jpg)

### 连环问：Ajax 应该在哪个生命周期？

* 有俩个选择：created 和 mounted
* 推荐：mounted

## Vue3 Composition API 生命周期有何区别？

* 用 setup 代替了 beforeCreate 和 created
* 使用 Hooks 函数的形式，如 mounted 改为 onMounted()

![image-20220729202142486](https://tva1.sinaimg.cn/large/e6c9d24egy1h4o2dkix8lj21gg0u041a.jpg)

## Vue2 Vue3 React 三者 diff 算法有何区别？

> ###### 介绍 diff 算法
>
> * diff 算法很早就有
> * diff 算法应用广泛，例如 github 的 Pull Request 中的代码 diff
> * 如果要**严格**diff俩棵树，时间复杂度 O( n^3 )，不可用

> ###### Tree diff 的优化
>
> * 只比较同一层级，不跨级比较
> * tag 不同则删除重建（不再去比较内部细节）
> * 子节点通过 key 区分（key 的 重要性）

![image-20220729203145773](https://tva1.sinaimg.cn/large/e6c9d24egy1h4o2o00c46j21gg0u0jtv.jpg)

![image-20220729203340231](https://tva1.sinaimg.cn/large/e6c9d24egy1h4o2pz341dj21gg0u040j.jpg)

### React diff - 仅右移

![image-20220729203454071](https://tva1.sinaimg.cn/large/e6c9d24egy1h4o2rltifhj21gg0u0why.jpg)

### vue2 - 双端比较

![image-20220730063421521](https://tva1.sinaimg.cn/large/e6c9d24egy1h4ok30r8y7j21gg0u0abn.jpg)

### Vue3 - 最长递增子序列

![image-20220730064711553](https://tva1.sinaimg.cn/large/e6c9d24egy1h4okgdnh9tj21g60ggjtg.jpg)

![image-20220730065315768](https://tva1.sinaimg.cn/large/e6c9d24egy1h4okmoo7h5j21gg0u0wg0.jpg)

![image-20220730065421181](https://tva1.sinaimg.cn/large/e6c9d24egy1h4oko6l10tj21i80m6myx.jpg)

## 连环问：Vue React 为何循环时必须使用 key ？

* vdom diff 算法会根据 key 判断元素是否要删除？
* 匹配了 key，则只移动元素 - 性能较好
* 未匹配 key，则删除重建 - 性能较差

![image-20220730065754680](https://tva1.sinaimg.cn/large/e6c9d24egy1h4okrit1hpj21gg0u0gp9.jpg)

## 什么是 Vue-router 的 MemoryHistory ( abstract )

#### Vue-router 三种模式（ React-router 也有相同的 3 种模式 ）

* Hash
* WebHistory
* MemoryHistory ( V4 之前叫做 abstract history )
  * 跳转路由无变化











