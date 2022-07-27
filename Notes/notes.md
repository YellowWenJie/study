<h1 align='center'>Notes</h1>

* 过滤

```typescript
selectedCollections (): string[] {
  return this.queries
    .filter((query, index) => index === this.queries.indexOf(query))
    .map((query) => query.collection)
}
```

* 深拷贝

```javascript
const data = this.data.slice(0)

const newData JSON.parse(JSON.stringify(data))
```

* 去空格

```typescript
export function trimStringFields (formData: any): any {
  for (const data in formData) {
    if (typeof (formData[data]) === 'string') {
      formData[data] = formData[data].trim()
    }
  }
  if (formData.address) {
    for (const data in formData.address) {
      if (typeof (formData.address[data]) === 'string') {
        formData.address[data] = formData.address[data].trim()
      }
    }
  }
  return formData
}

const userData = trimStringFields({
        ...this.user,
        companies: this.user.companies.items
      })
```

* 名字排序

```javascript
const data = [{name:'h'},{name:'a'},{name:'C'},]
const result =  data.sort(function(a,b){return a.name.localeCompare(b.name)})
```

* 电脑配置代码规范

  * 全局和编译器安装 ESlint

    ``` json
    {
      "tabnine.experimentalAutoImports": true,
      "workbench.iconTheme": "vscode-icons",
      "workbench.colorTheme": "One Dark Pro Darker",
      "editor.formatOnPaste": true, // 粘贴格式化
      "editor.formatOnSave": true, // 保存格式化
      "editor.tabSize": 2, // 缩进
      "editor.detectIndentation": false,
      // eslint 检查
      "editor.wordWrap": "on",
      "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
      "eslint.validate": ["javascript", "html", "vue"],
      "eslint.format.enable": true,
      "eslint.options": {
        "overrideConfig": {
          "env": {
            "browser": true,
            "node": true,
            "es2021": true
          },
          "parserOptions": {
            "ecmaFeatures": {
              "jsx": true
            },
            "ecmaVersion": "latest",
            "sourceType": "module"
          },
          "rules": {
            "no-debugger": "off"
          }
        }
      },
      "html.format.indentHandlebars": true,
      "html.format.preserveNewLines": true,
      "editor.codeActionsOnSave": {
        "source.organizeImports": true,
        "source.fixAll": true,
        "source.fixAll.eslint": false
      },
      "emmet.includeLanguages": {
        "vue": "html",
        "javascript": "html"
      },
      "[vue]": {
        "editor.defaultFormatter": "octref.vetur"
      },
      "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[css]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[typescript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
      },
      "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      }
      // // // // //
    }
    ```

* 数组会以 empt 填充

```javascript
const arr = [1, 'arr', true, [0, 1, -1]]
arr[5] = Symbol()
console.log(arr.length) // 6

// (6) [1, 'arr', true, Array(3), empty, Symbol()] 因为js 会以 empty 填充
```



* CentOS 使用 docker 搭建 mysql 服务
  * https://www.jianshu.com/p/17de4ee23f6a

* node查看全局安装的依赖：`npm list -g --depth 0`

* 如何在 node 环境中使用 import 

  1. npm init -y  添加 package.js 文件，并添加 `"type": "module"`，如下

  ```json
  {
    "name": "js",
    "type": "module",
    "version": "1.0.0",
    "description": "",
    "main": "babel.config.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
  }
  
  ```

  2. 使用以下命令运行文件：

     `nodemon --experimental-modules --es-module-specifier-resolution=node linkedList.mjs`

  3. 修改一下

     ```json
     {
       "name": "js",
       "type": "module",
       "version": "1.0.0",
       "description": "",
       "main": "babel.config.js",
       "scripts": {
         "dev": "nodemon --experimental-modules --es-module-specifier-resolution=node"
       },
       "keywords": [],
       "author": "",
       "license": "ISC"
     }
     
     ```

     只需要运行 npm run dev 要运行的文件夹

* docker-compose 命令：https://www.cnblogs.com/moxiaoan/p/9299404.html
* docker 创建的 mysql8 怎么改密码
  1. `docker-compose ps` 查看容器
  2. `docker exec -it mysql bash` 进入容器
  3. ` mysql -uroot -p` 登录mysql
  4. `ALTER USER 'root'@'%' IDENTIFIED BY 'huangwenjie' PASSWORD EXPIRE NEVER;` 修改密码
  5. `ALTER USER 'root'@'localhost' IDENTIFIED BY 'huangwenjie';` 修改本地密码
  6. `quit` 退出 mysql
  7. `exit` 退出 docker

* 使用 const 结构方法

  ```js
  class Person {
    constructor () {
      this._name = '黄文杰'
      this._age = '20'
    }
  
    getName (name) {
      return name ? name : this._name
    }
  
    getAge = (age) => {
      return age ? age : this._age
    }
  }
  
  const person = new Person()
  console.log(person.getName()) // 黄文杰
  const { getName, getAge } = person
  console.log(getName.call(person, '彭于晏'),getName.apply(person, ['吴彦祖']), getAge()) // 20
  ```

* 关于连等优先级( . 优先于 = )（因为一般连等赋值为右向左）

  ```js
  let a = { num: 1 }
  let b = a
  a.x = a = { num: 2 }
  
  console.log(a.x, b.x) // undefined, { num: 1, x: { num: 2} }
  ```

  ```js
  let a = { num: 1 }
  let b = a
  a.x = (function () {
      return a = { num: 2 }
  })()
  
  console.log(a.x, b.x) // undefined, { num: 1, x: { num: 2} }
  ```

​		先运行 a.x = a ,此时 a.x = undefined，a.num = 1，然后再运行 a = { num: 2}，a.x = { num: 2 }，所以 b 就会等于 { num: 1, x: { num: 2} }

* in `https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in` 

* console.log(new Set([...setA, ...setB]))  // 并集
* console.log(new Set([...setA].filter(x => setB.has(x)))) // 交集
* console.log(new Set([...setA].filter(x => !setB.has(x)))) // 差集



* new Set() 集合，new Map 散列表，new WeakSet 和 new WeakMap 为他们的弱化版本

* 关于尾调用：`https://segmentfault.com/a/1190000020694801`

  在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈

  * func.arguments：返回调用时函数的参数。
  * func.caller：返回调用当前函数的那个函数。
  
* Nide.js 的 Async hooks

  **虽然Async hooks至此还是实验性API，但是他的确可以解决应用中的一些问题，比如日志和调用栈跟踪。本文从应用和原理方便介绍一下Node.js的Async hooks。**

  `https://cloud.tencent.com/developer/article/1867052`

* nest 日志配置：`https://github.com/kuangshp/nest-logs`

* nest 配置静态文件

  ```ts
  // app.module.ts
  
  import { Module } from '@nestjs/common';
  import { ConfigModule } from '@nestjs/config';
  import { UserModule } from '../user/user.module';
  import { AppController } from './app.controller';
  import { AppService } from './app.service';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { MYSQL } from '../../config/database.config';
  import { ServeStaticModule } from '@nestjs/serve-static';
  import { join } from 'path';
  
  @Module({
    imports: [
      ConfigModule.forRoot(), // 引入 .env 文件
      TypeOrmModule.forRoot(MYSQL), // MySql
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '../../', 'public'),
      }),
      UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
  })
  export class AppModule {}
  
  ```

  ```json
  //nest-cli.json
  
  {
    "$schema": "https://json.schemastore.org/nest-cli",
    "collection": "@nestjs/schematics",
    "sourceRoot": "src",
    "compilerOptions": {
      "assets": ["public/**/*"],
      "watchAssets": true
    }
  }
  
  ```

* 函数柯里化

  ```js
  function sum (a) {
  	return (b) => {
  		return (c) => {
  			return a + b + c
  		}
  	}
  }
  
  sum(1)(2)(3) // 6
  ```

* Reflect 操作对象

## TypeScript

* ts 继承,这样居然不会报错。

  ```ts
  interface Base {
    id: number;
  }
  interface Person extends Base {
    name: string;
  }
  const sum: Person = {id: 1, name: "11"}
  const test = (arg:Base):Base => {
    return arg
  }
  test(sum)
  ```

- 自动获取类型，ts 的工具类型

  ```ts
  export const useHttp = () => {
    const { user } = useAuth();
    // 自动获取类型
    return ([endpoint, config]: Parameters<typeof http>) =>
      http(endpoint, { ...config, token: user?.token });
  };
  ```

- 让类型都变成可选

  ```ts
  type Person = {
    name: string;
    age: number;
  };
  // 让类型都变成可选
  const data: Partial<Person> = { name: "xiaoming" };
  ```

- 去掉类型中的一个或多个约束

  ```ts
  type Person = {
    name: string;
    age: number;
    sex: string;
  };
  // 去掉类型中的一个或多个约束
  const data: Omit<Person, "name" | "age"> = { sex: "man" };
  ```

- Pick 选择需要哪些类型约束

  ```ts
  // Pick 选择需要哪些类型约束
  const data: Pick<Person, "name" | "age"> = { name: "xiaoming", age: 21 };
  ```

- 其他：`https://blog.csdn.net/qq_43869822/article/details/121664818`

* css 

  ```css
    // 图片随着屏幕滑动而滑动
    background-attachment: fixed;
  ```

* 如何配置 ts + jest: 

  `https://juejin.cn/post/6955392566992830477`
  
* 程序执行时间，只要括号里的值一样就会计算时间

  `console.time('内容')` `console.timeEnd('内容')`

* 数组是一个有序结构，unshift 操作非常慢！！！
