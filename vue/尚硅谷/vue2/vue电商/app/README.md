app

![img](https://img-blog.csdnimg.cn/e7fca57785ef4e5c87dddcf12c1c5f57.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBASFVBTkdXRU5KSUU2NjY=,size_20,color_FFFFFF,t_70,g_se,x_16)

<div align="center">

[![](https://img.shields.io/badge/Windows-11-2376bc?style=flat-square&logo=windows&logoColor=ffffff)](https://www.microsoft.com/windows/get-windows-10)
[![](https://img.shields.io/badge/-JavaScript-f7e018?style=flat-square&logo=javascript&logoColor=white)](https://www.ecma-international.org/)
[![](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![](https://img.shields.io/badge/-Less-43853d?style=flat-square&logo=less&logoColor=white)](https://lesscss.org/)
[![](https://img.shields.io/badge/-NPM-cb3837?style=flat-square&logo=npm&logoColor=white)](https://npmjs.com/)
[![](https://img.shields.io/badge/-Git-f05032?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/)
[![](https://img.shields.io/badge/-Vue.js-4fc08d?style=flat-square&logo=vue.js&logoColor=ffffff)](https://vuejs.org/)
[![](https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/)
[![](https://img.shields.io/badge/-Webpack-3776AB?style=flat-square&logo=webpack&logoColor=white)](https://webpack.js.org/)

</div>

权限管理: http://39.98.123.211:8170/swagger-ui.html
商品管理：http://39.98.123.211:8216/swagger-ui.html

target="\_blank" 跳转到新页面



//watch立即监听,不管数据有没有更新，我上来立即监听一次

​    immediate: true,

# 笔记

#### 1、项目的其他配置

1. 项目运行起来让浏览器自动打开

```javascript
-- package.json
"scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "eslink":"vue-cli-servise lint"
  },
```

2. eslink 校验规则关闭

   - 在根目录创建 vue.config.js

   ```javascript
   modele.express = {
     lintOnSave: false
   };
   ```

3. src 文件简写方法，配置别名@（引入的时候不用../../，直接写@）

   - 在根目录创建 jsconfig.json【@代表 src 文件夹】

   ```javascript
   {
       "compilerOptions":{
           "baseUrl":"./",
               "paths":{
                   "@/*":["src/*"]
               }
       },
        "exclude":["mode_modules","dist"]
   }
   ```

#### 2、非路由组件 Header 与 Footer 业务

1. 安装 less

   - ```javascript
     npm install --save less less-loader@5
     ```

2. 使用组件

   - ```javascript
     <template>
       <div id="app">
         <Header />
         <Footer />
       </div>
     </template>

     <script>
     import Header from "@/components/Header/index.vue";
     import Footer from "@/components/Footer/index.vue";

     export default {
       name: "App",
       components: {
         Header,
         Footer,
       },
     };
     </script>
     ```

#### 3、配置路由

1. 创建 router 文件新建 index.js，导出的一定要是 routes

   - ```javascript
     import Vue from "vue";
     import VueRouter from "vue-router";
     Vue.use(VueRouter);

     import Home from "@/pages/Home";

     export default new VueRouter({
       routes: [
         {
           path: "/home",
           component: Home
         }
       ]
     });
     ```

2. main.js 引入

   - ```javascript
     import Vue from "vue";
     import App from "./App.vue";
     import router from "@/router";
     Vue.config.productionTip = false;

     new Vue({
       render: h => h(App),
       router
     }).$mount("#app");
     ```

3. app 使用

   - ```html
     <router-view></router-view>
     ```

4. 总结

- 非路由组件放在 components 中，路由组件放在 pages 或 views 中
- 非路由组件通过标签使用，路由组件通过路由使用
- 在 main.js 注册完路由，所有的路由和非路由组件身上都会拥有$router $route 属性
- $router：一般进行编程式导航进行路由跳转
- $route： 一般获取路由信息（name path params 等）

#### 4、Footer 的显示与隐藏，以及路由的使用

1. v-show 方法

   - ```html
     <footer v-show="$route.path=='/home'||$route.path=='/search'" />
     ```

2. 路由配置 meta

   - ```javascript
     //router.js
     export default new VueRouter({
       routes: [
         {
           path: "/",
           redirect: "/home"
         },
         {
           path: "/home",
           component: Home,
           meta: { show: true }
         },
         {
           path: "/search",
           component: Search,
           meta: { show: true }
         },
         {
           path: "/login",
           component: Login,
           meta: { show: false }
         },
         {
           path: "/register",
           component: Register,
           meta: { show: false }
         }
       ]
     });
     ```

   - ```html
     <footer v-show="$route.meta.show" />
     ```

3. 路由跳转方式

   - 比如 A->B
     - 声明式导航：router-link （务必要有 to 属性）可以实现路由跳转
     - 编程式导航：利用的是组件实例的$router.push|replace 方法，可以实现路由的跳转。（可以书写一些自己的业务）

4. 路由参数，参数有几种写法?

   - query、params 两个属性可以传递参数

   - query 参数：不属于路径当中的一部分，类似于 get 请求，地址栏表现为 /search?k1=v1&k2=v2 query 参数对应的路由信息 path: "/search"

   - params 参数：属于路径当中的一部分，需要注意，在配置路由的时候，需要占位 ,地址栏表现为 /search/v1/v2

   - params 参数对应的路由信息要修改为 path: "/search/:keyword" 这里的/:keyword 就是一个 params 参数的占位符

     - 路由传参写法

       ```javascript
       //路由写法
       {
             path: "/search/:keyword",
             component: Search,
             meta: { show: true }
       }

       //第一种方式：字符串
       this.$router.push("/search/"+this.keyword+"?k="+this.keyword.toUpperCase());
       //第二种方式：模板字符串
       this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`);
       //第三种方式：
       this.$router.push({
               name: "search",
               params: { keyword: this.keyword },
               query: { k: this.keyword.toUpperCase() },
             });
       ```

       //输入 YellowWenJie
       //输出
       $route
       path:"/search/YellowWenJie"
       query:Object
       k:"YELLOWWENJIE"
       params:Object (empty)
       fullPath:"/search/YellowWenJie?k=YELLOWWENJIE"
       meta:Object (empty)

       params:YellowWenJie
       query:YELLOWWENJIE

       ````

       ​```javascript
       传参方法

       1.字符串形式
       	this.$router.push("/search/"+this.params传参+"?k="+this.query传参)
       2.模板字符串
       	this.r o u t e r . p u s h ( " / s e a r c h / + 			router.push("/search/+router.push("/search/+{this.params传参}?k=${this.query传参}")
       	注意： 上面字符串的传参方法可以看出params参数和’/'结合，query参数和？结合
       http://localhost:8080/#/search/asd?keyword=asd
       	上面url中asd为params的值，keyword=asd为query传递的值。
       3.对象（常用）
       	this.$router.push({name:“路由名字”,params:{传参},query:{传参})。
       	以对象方式传参时，如果我们传参中使用了params，只能使用name，不能使用path，如果只是使用query传参，可以使用path 。
       ````

   ###### 注意点：（面试题）

   - 路由传递参数（对象写法）path 是否可以结合 params 参数一起使用

     - ```javascript
       路由传递参数（对象写法），对象可以是name，path，形式，但是path这种写法不能与params参数一起使用
       参考官网：https://router.vuejs.org/zh/guide/essentials/named-routes.htm
       ```

   - params 传参问题

     - 如何指定 params 参数可传可不传

     ```javascript
       如果路由path要求传递params参数,但是没有传递,会发现地址栏URL有问题，详情如下：
       Search路由项的path已经指定要传一个keyword的params参数，如下所示：
       path: "/search/:keyword",
       执行下面进行路由跳转的代码：
       this.$router.push({name:"Search",query:{keyword:this.keyword}})
       当前跳转代码没有传递params参数
       地址栏信息：http://localhost:8080/#/?keyword=asd
       此时的地址信息少了/search
       正常的地址栏信息: http://localhost:8080/#/search?keyword=asd
       解决方法：可以通过改变path来指定params参数可传可不传
       path: "/search/:keyword?",?表示该参数可传可不传
     参考连接：https://blog.csdn.net/weixin_44867717/article/details/109773945
     ```

   - 由 1.可知 params 可传可不传，但是如果传递的时空串，如何解决 。

   ```javascript
    this.$router.push({name:"search",query:{keyword:this.keyword},params:{keyword:''}})
    出现的问题和1中的问题相同,地址信息少了/search
    解决方法： 加入||undefined，当我们传递的参数为空串时地址栏url也可以保持正常
    this.$router.push({name:"search",query:{keyword:this.keyword},params:{keyword:''||undefined}})
   ```

   - 路由组件能不能传递 props 数据？

   ```vue
   可以 方法一，只能传递params参数 { path: "/search/:keyword", name: "search",
   component: Search, meta: { show: true }, props: true }, this.$router.push({
   name: "search", params: { keyword: this.keyword }, query: { k:
   this.keyword.toUpperCase() }, });

   <template>
     <div class="search">
       <h1>params:{{ $route.params.keyword }}==={{ keyword }}</h1>
       <h1>query:{{ $route.query.k }}</h1>
     </div>
   </template>

   <script>
   export default {
     props: ["keyword"]
   };
   </script>

   方法一，能传递params和query参数 { path: "/search/:keyword", name: "search",
   component: Search, meta: { show: true }, props: $route => { return { keyword:
   $route.params.keyword, k: $route.query.k }; } },

   <template>
     <div class="search">
       <h1>params:{{ $route.params.keyword }}==={{ keyword }}</h1>
       <h1>query:{{ $route.query.k }}==={{ k }}</h1>
     </div>
   </template>

   <script>
   export default {
     props: ["keyword", "k"]
   };
   </script>
   ```

#### 5、多次执行相同的 push 问题

- 多次执行相同的 push 问题，控制台会出现警告
  例如：使用 this.$router.push({name:‘Search’,params:{keyword:"…"||undefined}})时，如果多次执行相同的 push，控制台会出现警告。

```
let result = this.$router.push({name:"Search",query:{keyword:this.keyword}})
console.log(result)
```

执行一次上面代码：![在这里插入图片描述](https://img-blog.csdnimg.cn/d7b3e04b2986474d8009fe970b7b2e63.png)

- 多次执行出现警告：![在这里插入图片描述](https://img-blog.csdnimg.cn/308f41adccfe4268a6a2e0b4b2d2cfd0.png)

- 原因：push 是一个 promise，promise 需要传递成功和失败两个参数，我们的 push 中没有传递。
  方法：this.$router.push({name:‘Search’,params:{keyword:"…"||undefined}},()=>{},()=>{})后面两项分别代表执行成功和失败的回调函数。
- **这种写法治标不治本，将来在别的组件中 push|replace,编程式导航还是会有类似错误**
  push 是 VueRouter.prototype 的一个方法，在 router 中的 index 重写该方法即可(看不懂也没关系，这是前端面试题)

```javascript
//1、先把VueRouter原型对象的push，保存一份
let originPush = VueRouter.prototype.push;
//2、重写push|replace
//第一个参数：告诉原来的push，跳转的目标位置和传递了哪些参数
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
```

#### 6、定义全局组件

- 我们的三级联动组件是全局组件，全局的配置都需要在 main.js 中配置

```javascript
//将三级联动组件注册为全局组件
import TypeNav from "@/pages/Home/TypeNav";
//第一个参数：全局组件名字，第二个参数：全局组件
Vue.component(TypeNav.name, TypeNav);
```

- 在 Home 组件中使用该全局组件

```vue
<template>
  <div>
    <!--  三级联动全局组件已经注册为全局组件，因此不需要引入-->
    <TypeNav />
  </div>
</template>
```

#### 7、axios 二次封装

1. 安装 axios：

   ```
   npm install --save axios
   ```

2. 新建 api 文件夹创建 request.js

```javascript
//axios进行二次封装
import axios from "axios";

//1.利用axios对象的方法create，去创建一个axios实例
//2.request就是axios，只不过稍微配置一下
const requests = axios.create({
  //配置对象
  //基础路径，发送请求的时候，路径当中会出现api
  baseURL: "/api",
  //代表请求超时的时间
  timeout: 5000
});

//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之后做一些事情
requests.interceptors.request.use(config => {
  //config:配置对象，对象里面有一个属性很重要，headers请求头
  return config;
});

//响应拦截器
requests.interceptors.response.use(
  res => {
    //成功的回调：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事情
    return res.data;
  },
  error => {
    //响应失败的回调函数
    return Promise.reject(new Error("faile"));
  }
);

export default requests;
```

3. axios 更多可以参考文档

- npm：https://www.npmjs.com/package/axios
- github：https://github.com/axios/axios

#### 8、接口统一管理

1. api 文件夹新建 index.js 用来对 API 进行统一管理

   ```javascript
   //对API进行统一管理
   import requests from "./request";

   //三级联动接口
   //  /api/product/getBaseCategoryList  get  无参数
   export default reqCategoryList = () => {
     //发请求:axios 发请求返回的都是Promise对象
     return requests({ url: "/product/getBaseCategoryList", method: "get" });
   };
   ```

2. 跨域问题：

   - 新建 vue.config.js

   ```javascript
   module.exports = {
     //关闭exlint
     lintOnSave: false,
     //代理跨域
     devServer: {
       proxy: {
         "/api": {
           target: "http://39.98.123.211"
           // pathRewrite: { "^/api": "" }
         }
       }
     }
   };
   ```

#### 9、nprogress 进度条插件

1. 安装：

   ```javascript
   npm install --save nprogress
   ```

2. 使用方法：

   - 在 requrst.js 中配置

   ```javascript
   //axios进行二次封装
   import axios from "axios";
   import nprogress from "nprogress";
   //nprogress的start()进度条开始，done()进度条结束
   // 引入nprogress进度条样式
   import "nprogress/nprogress.css";

   //1.利用axios对象的方法create，去创建一个axios实例
   //2.request就是axios，只不过稍微配置一下
   const requests = axios.create({
     //配置对象
     //基础路径，发送请求的时候，路径当中会出现api
     baseURL: "/api",
     //代表请求超时的时间
     timeout: 5000
   });

   //请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之后做一些事情
   requests.interceptors.request.use(config => {
     //config:配置对象，对象里面有一个属性很重要，headers请求头
     //进度条开始
     nprogress.start();
     return config;
   });

   //响应拦截器
   requests.interceptors.response.use(
     res => {
       //成功的回调：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事情
       //进度条结束
       nprogress.done();
       return res.data;
     },
     error => {
       //响应失败的回调函数
       return Promise.reject(new Error("faile"));
     }
   );

   export default requests;
   ```

#### 10、vuex

1. 安装

   - ```
     npm install --save vuex
     ```

2. vuex 基本使用：

   - vuex：https://vuex.vuejs.org/zh/
     - state：用一个对象就包含了全部的应用层级状态
     - mutations：更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
     - actions：Action 提交的是 mutation，而不是直接变更状态，可以包含任意异步操作
     - getters：Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
     - modules：Vuex 允许我们将 store 分割成**模块（module）**
   - 新建 store 文件创建 index.js

   ```javascript
   import Vue from "vue";
   //引入vuex
   import Vuex from "vuex";

   Vue.use(Vuex);
   //state仓库存储的地方
   const state = {};
   //actions可以书写自己的业务逻辑，最后提交到mutations
   const actions = {};
   //mutations修改state的唯一手段
   const mutations = {};
   //getters理解为计算属性
   const getters = {};
   export default new Vuex.Store({
     state,
     actions,
     mutations,
     getters
   });
   ```

   - main.js 中使用，**（挂载到 vm 的的时候名字要用 store）**

   ```javascript
   import Vue from "vue";
   import App from "./App.vue";
   import router from "@/router";
   import store from "@/store";

   import { reqCategoryList } from "@/api/index";

   import TypeNav from "@/pages/Home/TypeNav";
   Vue.component(TypeNav.name, TypeNav);
   Vue.config.productionTip = false;
   reqCategoryList();
   new Vue({
     render: h => h(App),
     router,
     store
   }).$mount("#app");
   ```

   - 使用

   ```vue
   <template>
     <div class="home">
       <h1>{{ count }}</h1>
     </div>
   </template>

   <script>
   import { mapState } from "vuex";
   export default {
     components: {},
     computed: {
       ...mapState(["count"])
     }
   };
   </script>

   <style lang="less" scoped></style>
   ```

   - vue 模块式开发：

   ```javascript
   //home
   const state = {
     count: 1
   };
   //actions可以书写自己的业务逻辑，最后提交到mutations
   const actions = {};
   //mutations修改state的唯一手段
   const mutations = {};
   //getters理解为计算属性
   const getters = {};
   export default {
     namespaced: true,
     state,
     actions,
     mutations,
     getters
   };
   ```

   ```javascript
   import Vue from "vue";
   //引入vuex
   import Vuex from "vuex";

   Vue.use(Vuex);
   import home from "./home";
   import search from "./search";

   export default new Vuex.Store({
     modules: {
       a: home,
       b: search
     }
   });
   ```

   ```vue
   <template>
     <div class="home">
       {{ count }}
     </div>
   </template>

   <script>
   import { mapState } from "vuex";
   export default {
     computed: {
       ...mapState("a", ["count"])
     }
   };
   </script>

   <style lang="less" scoped></style>
   ```

- home 组件使用 vuex 获取数据，**因为数据会多出一行，所以在 mutations 中加.slice(1, 17)**

```javascript
//home
import { reqCategoryList } from "@/api";
const state = {
  categoryList: []
};
//actions可以书写自己的业务逻辑，最后提交到mutations
const actions = {
  //通过api里面的接口函数调用，向服务器发请求
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data);
    }
  }
};
//mutations修改state的唯一手段
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList.slice(1, 17);
  }
};
//getters理解为计算属性
const getters = {};
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
```

```javascript
import Vue from "vue";
//引入vuex
import Vuex from "vuex";

Vue.use(Vuex);
import home from "./home";
import search from "./search";

export default new Vuex.Store({
  modules: {
    home
  }
});
```

```javascript
//组件中使用
<script>
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  //组件挂载完毕，向服务器发起请求
  mounted() {
    //通知Vuex发请求，获取数据，存储于仓库中
    this.$store.dispatch("home/categoryList");
  },
  computed: {
    ...mapState("home", {
      categoryList: (state) => {
        console.log(state);
      },
    }),
  },
};
</script>
```

#### 11、TypeNav 遍历数据

```vue
<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div class="sort">
        <div class="all-sort-list2">
          <div class="item" v-for="c1 in categoryList" :key="c1.categoryId">
            <h3>
              <a href>{{ c1.categoryName }}</a>
            </h3>
            <div class="item-list clearfix">
              <div
                class="subitem"
                v-for="c2 in c1.categoryChild"
                :key="c2.categoryId"
              >
                <dl class="fore">
                  <dt>
                    <a href>{{ c2.categoryName }}</a>
                  </dt>
                  <dd>
                    <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                      <a href>{{ c3.categoryName }}</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  //组件挂载完毕，向服务器发起请求
  mounted() {
    //通知Vuex发请求，获取数据，存储于仓库中
    this.$store.dispatch("categoryList");
  },
  computed: {
    ...mapState({
      categoryList: state => state.home.categoryList
    })
  }
};
</script>
```

- 被 v-for 遍历的数据添加鼠标移动显示背景颜色

```vue
<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex">
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2">
            <div
              class="item"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              :class="{ cur: currentIndex == index }"
            >
              <h3 @mouseenter="changeIndex(index)">
                <a href>{{ c1.categoryName }}</a>
              </h3>
              <div class="item-list clearfix">
                <div
                  class="subitem"
                  v-for="(c2, index) in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a href>{{ c2.categoryName }}</a>
                    </dt>
                    <dd>
                      <em
                        v-for="(c3, index) in c2.categoryChild"
                        :key="c3.categoryId"
                      >
                        <a href>{{ c3.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1
    };
  },
  methods: {
    changeIndex(index) {
      //鼠标进入修改响应式数据currentIndex属性
      this.currentIndex = index;
    },
    // 鼠标移除
    leaveIndex() {
      this.currentIndex = -1;
    }
  },
  //组件挂载完毕，向服务器发起请求
  mounted() {
    //通知Vuex发请求，获取数据，存储于仓库中
    this.$store.dispatch("categoryList");
  },
  computed: {
    ...mapState({
      categoryList: state => state.home.categoryList
    })
  }
};
</script>
```

- 不使用 css 样式来显示二三级分类

```
:style="{display:currentIndex==index}"
```

#### 12、函数的防抖与节流（lodash 插件）

- 防抖：前面的所有触发都被取消，最后一次执行在规定的时间之内才会触发，也就是如果快速的触发，只会触发一次
- 节流：在规定时间内不会重复触发回调，只有大于这个时间才会触发回调，把频繁的触发变为少量触发

三级联动节流

```JavaScript
import throttle from "lodash/throttle";

changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
```

#### 13、三级联动组件路由跳转与参数传递

- 事件委派

**太容易写错了，一定要注意名字要对应**

```vue
<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex">
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              :class="{ cur: currentIndex == index }"
            >
              <h3 @mouseenter="changeIndex(index)">
                <a
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                  >{{ c1.categoryName }}</a
                >
              </h3>
              <!-- 二三级分类 -->
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex == index }"
              >
                <div
                  class="subitem"
                  v-for="c2 in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                        >{{ c2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                          >{{ c3.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```

```vue
<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1
    };
  },
  methods: {
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    leaveIndex() {
      this.currentIndex = -1;
    },
    goSearch(event) {
      let element = event.target;
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;
      //如果标签身上拥有categoryame一定是a标签
      if (categoryname) {
        //整理路由跳转参数
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        //整理完参数
        location.query = query;
        console.log(query);
        //路由跳转
        this.$router.push(location);
      }
    }
  },
  //组件挂载完毕，向服务器发起请求
  mounted() {
    //通知Vuex发请求，获取数据，存储于仓库中
    this.$store.dispatch("categoryList");
  },
  computed: {
    ...mapState({
      categoryList: state => state.home.categoryList
    })
  }
};
</script>
```

- 性能优化

home 组件中加

```javascript
 mounted() {
    this.$store.dispatch("categoryList");
  },
```

#### 14、过度动画

- 前提是组件|元素要有 v-if 或 v-show 指令才可以进行过度动画

```html
<transition name="sort">
  <div class="sort" v-show="show">
    <div class="all-sort-list2" @click="goSearch">
      <div
        class="item"
        v-for="(c1,index) in categoryList"
        :key="c1.categoryId"
        :class="{cur:currentIndex==index}"
      >
        <h3 @mouseenter="changeIndex(index)">
          <a
            :data-categoryName="c1.categoryName"
            :data-category1Id="c1.categoryId"
            >{{c1.categoryName}}</a
          >
        </h3>
        <!-- 二三级分类 -->
        <div class="item-list clearfix" :style="{display:currentIndex==index}">
          <div
            class="subitem"
            v-for="c2 in c1.categoryChild"
            :key="c2.categoryId"
          >
            <dl class="fore">
              <dt>
                <a
                  :data-categoryName="c2.categoryName"
                  :data-category2Id="c2.categoryId"
                  >{{c2.categoryName}}</a
                >
              </dt>
              <dd>
                <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                  <a
                    :data-categoryName="c3.categoryName"
                    :data-category3Id="c3.categoryId"
                    >{{c3.categoryName}}</a
                  >
                </em>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</transition>
```

```css
//过度动画的样式
//进入的动画
.sort-enter {
  height: 0px;
}
.sort-enter-to {
  height: 461px;
}
//定义动画时间,速率
.sort-enter-active {
  transition: all 0.5s linear;
}
```

#### 15、路由跳转合并参数

```javascript
let element = event.target;
let { categoryname, category1id, category2id, category3id } = element.dataset;
//如果标签身上拥有categoryame一定是a标签
if (categoryname) {
  //整理路由跳转参数
  let location = { name: "search" };
  let query = { categoryName: categoryname };
  if (category1id) {
    query.category1Id = category1id;
  } else if (category2id) {
    query.category2Id = category2id;
  } else {
    query.category3Id = category3id;
  }
  //判断：如果路由跳转的时候带有params参数，带着一起传过去
  if (this.$route.params) {
    location.params = this.$route.params;
    //整理完参数
    location.query = query;
    //路由跳转
    this.$router.push(location);
  }
}
```

参数传递

```javascript
goSeach() {
      //toUpperCase把字符串转换为大写
      if (this.$route.query) {
        let location = {
          name: "search",
          params: { keyword: this.keyword || undefined },
        };
        location.query = this.$route.query;
        this.$router.push(location);
      }
    },
```

#### 16、开发 ListContainer 组件与 Floor

- mock.js(随机生成数据)（https://github.com/nuysoft/Mock/wiki/Getting-Started）

  - 安装

    ```
    npm i --save mockjs
    ```

  - 使用：

    - src 目录下创建 mock 文件夹
    - 在 mock 目录下创建 json 数组
    - 把需要的图片放入 public 文件夹的 images 中
    - 创建 mockServe.js 通过 mockjs 插件实现模拟数据

    ```javascript
    import Mock from "mockjs";
    import banner from "./banner.json";
    import floor from "./floor.json";

    Mock.mock("/mock/banner", { code: 200, data: banner });
    Mock.mock("/mock/floor", { code: 200, data: floor });
    ```

    - main.js 引入

    ```
    import "@/mock/mockServe";
    ```

    - api 新建 mockAjax.js

    ```
    //axios进行二次封装
    import axios from "axios";
    import nprogress from "nprogress";
    //nprogress的start()进度条开始，done()进度条结束
    // 引入nprogress进度条样式
    import "nprogress/nprogress.css";

    //1.利用axios对象的方法create，去创建一个axios实例
    //2.request就是axios，只不过稍微配置一下
    const requests = axios.create({
      //配置对象
      //基础路径，发送请求的时候，路径当中会出现api
      baseURL: "/mock",
      //代表请求超时的时间
      timeout: 5000
    });

    //请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之后做一些事情
    requests.interceptors.request.use(config => {
      //config:配置对象，对象里面有一个属性很重要，headers请求头
      //进度条开始
      nprogress.start();
      return config;
    });

    //响应拦截器
    requests.interceptors.response.use(
      res => {
        //成功的回调：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事情
        //进度条结束
        nprogress.done();
        return res.data;
      },
      error => {
        //响应失败的回调函数
        return Promise.reject(new Error("faile"));
      }
    );

    export default requests;
    ```

  - api 的 index.js 写入

    ```vue
    import mockAjax from "./mockAjax"; //获取首页轮播图banner export const
    reqBannerList = () => { //发请求:axios 发请求返回的都是Promise对象 return
    mockAjax({ url: "/banner", method: "get" }); };

    <script>
    import { mapState } from "vuex";
    export default {
      mounted() {
        this.$store.dispatch("getBannerList");
      },
      computed: {
        ...mapState({
          bannerList: state => state.home.bannerList
        })
      }
    };
    </script>
    ```

#### 17、swiper

- 安装

  ```
  npm install --save swiper@5
  ```

- 使用

```
//全局引入swiper样式
import "swiper/css/swiper.css";


//引包
import Swiper from "swiper";
```

```vue
updated() { new Swiper(document.querySelector(".swiper-container"), { loop:
true, pagination: { el: "swiper-pagination", }, navigation: { nextEl:
".swiper-button-next", prevEl: ".swiper-button-prev", }, }); },
```

#### 18、$nextTick（在下次 DOM 更新之前）

- 在下次 DOM 更新结束之后 执行延迟问题。在 修改数据之后 立即使用这个方法，获取更新后的 DOM。

```javascript
 watch: {
    //监听bannerList数据的变化，因为这条数据发生过变化--由空数组变为数组里面有四个元素
    bannerList: {
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          new Swiper(document.querySelector(".swiper-container"), {
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
```

#### 19、v-for 在自定义组件中使用

floor vuex 获取数据

- 在 home 中写：

```
this.$store.dispatch("getFloorList");
```

```
<Floor v-for="(floor,index) in floorList" :key="floor.id" />
```

- 使用自定义事件父给子传值

```
<Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor" />
```

- 子组件使用

```
 props: ["list"],
  mounted() {
    console.log(this.list);
  },
```

#### 20、组件通信有哪些？

- props：用于父子组件通信
- 自定义事件：@on @emit 可以实现子给父传值
- 全局事件总线：$bus 全能
- pubsub-js：vue 当中几乎不用 全能
- 插槽
- vuex

#### 21、swiper轮播图注意点

* 第一次书写swiper的时候，在mounted当中是不可以的，因为第一次书写轮播图的时候，是在当前组件内部发请求，动态渲染解构【前台至少服务器数据需要回来】

* 所有要这么写：

  ```JavaScript
  <script>
  import { mapState } from "vuex";
  //引包
  import Swiper from "swiper";
  export default {
    mounted() {
      this.$store.dispatch("getBannerList");
    },
    computed: {
      ...mapState({
        bannerList: (state) => state.home.bannerList,
      }),
    },
    watch: {
      //监听bannerList数据的变化，因为这条数据发生过变化--由空数组变为数组里面有四个元素
      bannerList: {
        handler(newValue, oldValue) {
          this.$nextTick(() => {
            new Swiper(this.$refs.cur, {
              loop: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            });
          });
        },
      },
    },
  };
  </script>
  ```

* 在Carsousel封装组件的时候一定记得加 immediate: true 不然Floor组件的轮播图加载不出来，因为watch是数据发生变化时监听

```javascript
watch: {
    immediate: true,
    list: {
      immediate: true,
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          new Swiper(this.$refs.cur, {
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
```

#### 22、vuex的getters属性注意点

```javascript
const getters = {
  goodsList(state) {
    //state.searchList.goodsList如果服务器数据回来了，没问题是一个数组
    //假如网络不给力|没有网state.searchList.goodsList应该返回的是undefined
    //计算新的属性的属性值至少给人家来一个数组
    return state.searchList.goodsList || [];
  },
 }
```

#### 23、Object.saaign  es6新增

```javascript
  beforeMount() {
    // Object.saaign;
    // this.searcgParams.category1Id = this.$route.query.category1Id;
    // this.searcgParams.category2Id = this.$route.query.category2Id;
    // this.searcgParams.category3Id = this.$route.query.category3Id;
    // this.searcgParams.categoryName = this.$route.query.categoryName;
    // this.searcgParams.keyword = this.$route.params.keyword;
    Object.assign(this.searcgParams, this.$route.query, this.$route.params);
  },
```

#### 24、路由跳转注意点

*  this.**$router**.push({ name: "search", params: this.$route.params });

#### 25、全局事件总线，兄弟组件通信$bus

* 先在main.js中使用

  ```javascript
  new Vue({
    render: h => h(App),
    // 全局事件总线$bus
    beforeCreate() {
      Vue.prototype.$bus = this;
    },
  
    router,
    store
  }).$mount("#app");
  
  ```

* 然后兄弟组件传递信息

  ```javascript
  this.$bus.$emit("clear");
  ```

* 然后另一个兄弟组件监听：

  ```javascript
  this.$bus.$on("clear", () => {
    this.keyword = "";
  });
  ```

#### 26、子传父（自定义事件）

* 父组件在子组件上绑定自定义事件

  ```javascript
  <SearchSelector @trademarkInfo="trademarkInfo" />
  ```

* 子组件通过$emit传数据

  ```javascript
  tradeMatkHandler(trademark) {
        this.$emit("trademarkInfo", trademark);
      },
  ```

* 父组件再接收

  ```javascript
  trademarkInfo(trademark) {
        // console.log(trademark);
      },
  ```

#### 27、.split(":")[1]切割数组

![1641277689518](C:\Users\16063\AppData\Roaming\Typora\typora-user-images\1641277689518.png)

#### 28、数组去重

```javascript
 let props = `${attr.arrrId}:${attrValue}:${attr.attrName}`;
      if (this.searcgParams.props.indexOf(props) == -1) {
        this.searcgParams.props.push(props);
      }
```

#### 29、.splice(index,1) 操作数组

#### 30、排序



#### 31、分页

* 