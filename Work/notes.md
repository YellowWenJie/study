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

先运行 a.x = a ,此时 a.x = undefined，a.num = 1，然后再运行 a = { num: 2}，a.x = { num: 2 }，所以 b 就会等于 { num: 1, x: { num: 2} }
