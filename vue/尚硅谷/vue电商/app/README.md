app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

权限管理: http://39.98.123.211:8170/swagger-ui.html
商品管理：http://39.98.123.211:8216/swagger-ui.html

target="_blank" 跳转到新页面

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

2. eslink校验规则关闭

   -  在根目录创建vue.config.js

   ```javascript
   modele.express = {
       lintOnSave:false
   }
   ```

   

3. src文件简写方法，配置别名@（引入的时候不用../../，直接写@）

   * 在根目录创建jsconfig.json【@代表src文件夹】

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

   

#### 2、非路由组件Header与Footer业务



1. 安装less

   * ```javascript
     npm install --save less less-loader@5
     ```

     

2. 使用组件

   * ```javascript
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

1. 创建router文件新建index.js，导出的一定要是routes

   * ```javascript
     import Vue from "vue";
     import VueRouter from "vue-router";
     Vue.use(VueRouter);
     
     import Home from "@/pages/Home";
     
     export default new VueRouter({
       routes: [
         {
           path: "/home",
           component: Home
         },
       
       ]
     });
     
     ```

     

2. main.js引入

   * ```javascript
     import Vue from "vue";
     import App from "./App.vue";
     import router from "@/router";
     Vue.config.productionTip = false;
     
     new Vue({
       render: h => h(App),
       router
     }).$mount("#app");
     ```

3. app使用

   * ```html
     <router-view></router-view>
     ```

4. 总结

* 非路由组件放在components中，路由组件放在pages或views中
* 非路由组件通过标签使用，路由组件通过路由使用
* 在main.js注册完路由，所有的路由和非路由组件身上都会拥有$router $route属性
* $router：一般进行编程式导航进行路由跳转
* $route： 一般获取路由信息（name path params等）

#### 4、Footer的显示与隐藏，以及路由的使用

1. v-show方法

   * ```html
     <Footer v-show="$route.path=='/home'||$route.path=='/search'" />
     ```

     

2. 路由配置meta

   * ```javascript
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

   * ```html
     <Footer v-show="$route.meta.show" />
     ```

     

3. 路由跳转方式

   * 比如A->B
     * 声明式导航：router-link （务必要有to属性）可以实现路由跳转
     * 编程式导航：利用的是组件实例的$router.push|replace方法，可以实现路由的跳转。（可以书写一些自己的业务）

4. 路由参数，参数有几种写法?

   * query、params两个属性可以传递参数

   * query参数：不属于路径当中的一部分，类似于get请求，地址栏表现为 /search?k1=v1&k2=v2 query参数对应的路由信息 path: "/search"

   * params参数：属于路径当中的一部分，需要注意，在配置路由的时候，需要占位 ,地址栏表现为 /search/v1/v2

   * params参数对应的路由信息要修改为path: "/search/:keyword" 这里的/:keyword就是一个params参数的占位符

     * 路由传参写法

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
       
       
       //输入YellowWenJie
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
       ```

       ```javascript
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
       ```

   

   ###### 注意点：（面试题）

   * 路由传递参数（对象写法）path是否可以结合params参数一起使用

     * ```javascript
       路由传递参数（对象写法），对象可以是name，path，形式，但是path这种写法不能与params参数一起使用 
       参考官网：https://router.vuejs.org/zh/guide/essentials/named-routes.htm
       ```

       

   * params传参问题

     * 如何指定params参数可传可不传

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

   * 由1.可知params可传可不传，但是如果传递的时空串，如何解决 。

   ```javascript
    this.$router.push({name:"search",query:{keyword:this.keyword},params:{keyword:''}})
    出现的问题和1中的问题相同,地址信息少了/search
    解决方法： 加入||undefined，当我们传递的参数为空串时地址栏url也可以保持正常
    this.$router.push({name:"search",query:{keyword:this.keyword},params:{keyword:''||undefined}})
   ```

   * 路由组件能不能传递props数据？

   ```vue
   可以
    
   方法一，只能传递params参数
   {
         path: "/search/:keyword",
         name: "search",
         component: Search,
         meta: { show: true },
         props: true
       },
   
   
    this.$router.push({
           name: "search",
           params: { keyword: this.keyword },
           query: { k: this.keyword.toUpperCase() },
         });
   
   
   <template>
     <div class="search">
       <h1>params:{{$route.params.keyword}}==={{keyword}}</h1>
       <h1>query:{{$route.query.k}}</h1>
     </div>
   </template>
   
   <script>
   export default {
     props: ["keyword"],
   };
   </script>
   
   方法一，能传递params和query参数
   {
         path: "/search/:keyword",
         name: "search",
         component: Search,
         meta: { show: true },
   	   props: $route => {
           return { keyword: $route.params.keyword, k: $route.query.k };
         }
   },
   
   <template>
     <div class="search">
       <h1>params:{{$route.params.keyword}}==={{keyword}}</h1>
       <h1>query:{{$route.query.k}}==={{k}}</h1>
     </div>
   </template>
   
   <script>
   export default {
     props: ["keyword","k"],
   };
   </script>
   ```



#### 5、多次执行相同的push问题

* 多次执行相同的push问题，控制台会出现警告
  例如：使用this.$router.push({name:‘Search’,params:{keyword:"…"||undefined}})时，如果多次执行相同的push，控制台会出现警告。

```
let result = this.$router.push({name:"Search",query:{keyword:this.keyword}})
console.log(result)
```

执行一次上面代码：![在这里插入图片描述](https://img-blog.csdnimg.cn/d7b3e04b2986474d8009fe970b7b2e63.png)

* 多次执行出现警告：![在这里插入图片描述](https://img-blog.csdnimg.cn/308f41adccfe4268a6a2e0b4b2d2cfd0.png)

* 原因：push是一个promise，promise需要传递成功和失败两个参数，我们的push中没有传递。
  方法：this.$router.push({name:‘Search’,params:{keyword:"…"||undefined}},()=>{},()=>{})后面两项分别代表执行成功和失败的回调函数。
* **这种写法治标不治本，将来在别的组件中push|replace,编程式导航还是会有类似错误**
  push是VueRouter.prototype的一个方法，在router中的index重写该方法即可(看不懂也没关系，这是前端面试题)

```javascript
//1、先把VueRouter原型对象的push，保存一份
let originPush = VueRouter.prototype.push;
//2、重写push|replace
//第一个参数：告诉原来的push，跳转的目标位置和传递了哪些参数
VueRouter.prototype.push = function (location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,() => {},() => {})
    }
}
```

#### 6、定义全局组件

* 我们的三级联动组件是全局组件，全局的配置都需要在main.js中配置

```javascript
//将三级联动组件注册为全局组件
import TypeNav from '@/pages/Home/TypeNav';
//第一个参数：全局组件名字，第二个参数：全局组件
Vue.component(TypeNav.name,TypeNav);
```

* 在Home组件中使用该全局组件

```vue
<template>
<div>
<!--  三级联动全局组件已经注册为全局组件，因此不需要引入-->
  <TypeNav/>
</div>
</template>
```

#### 7、axios二次封装

1. 安装axios：

   ```
   npm install --save axios  
   ```

2. 新建api文件夹创建request.js

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

3. axios更多可以参考文档

* npm：https://www.npmjs.com/package/axios
* github：https://github.com/axios/axios

#### 8、接口统一管理

1. api文件夹新建index.js用来对API进行统一管理

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

   * 新建vue.config.js

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

#### 9、nprogress进度条插件

1. 安装：

   ```javascript
   npm install --save nprogress
   ```

2. 使用方法：

   * 在requrst.js中配置

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

   * ```
     npm install --save vuex
     ```

2. vuex基本使用：

   * vuex：https://vuex.vuejs.org/zh/
     * state：用一个对象就包含了全部的应用层级状态
     * mutations：更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
     * actions：Action 提交的是 mutation，而不是直接变更状态，可以包含任意异步操作
     * getters：Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
     * modules：Vuex 允许我们将 store 分割成**模块（module）**
   * 新建store文件创建index.js

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

   * main.js中使用

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

   * 使用

   ```vue
   <template>
     <div class="home">
       <h1>{{count}}</h1>
     </div>
   </template>
   
   <script>
   import { mapState } from "vuex";
   export default {
     components: {},
     computed: {
       ...mapState(["count"]),
     },
   };
   </script>
   
   <style lang="less" scoped>
   </style>
   ```

   * vue模块式开发：

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
   
       {{count}}
     </div>
   </template>
   
   <script>
   
   import { mapState } from "vuex";
   export default {
   
     computed: {
       ...mapState("a", ["count"]),
     },
   };
   </script>
   
   <style lang="less" scoped>
   </style>
   ```

   

* home组件使用vuex获取数据

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
    state.categoryList = categoryList;
    console.log(categoryList);
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

