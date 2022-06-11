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







