# React 笔记

其他人的笔记：https://www.cnblogs.com/qiuyun-blog/p/14848195.html

![image-20220704213048609](https://tva1.sinaimg.cn/large/e6c9d24egy1h3v7vs5mmsj20ue0g2q59.jpg)

小计

* 扩展运算符不能展开对象，使用{…object}就可以

* props 传数值类型需要用 {} 比如 `<Person age = { 18 } ></Person>`

* event.preventDefault  可用于表单默认提交事件（禁止默认事件）

* 获取 dom 方法 

  ```react
   <body>
      <div id="example"></div>
      <script type="text/babel">
        class Login extends React.Component {
          formData = (dataType) => {
            console.log(dataType);
            return (event) => {
              console.log(event.target.value);
            };
          };
          render() {
            return (
              <form>
                用户名：
                <input onChange={this.formData("username")} type="text" />
                密码：
                <input onChange={this.formData("password")} type="password" />
              </form>
            );
          }
        }
        ReactDOM.render(<Login />, document.getElementById("example"));
      </script>
    </body>
  ```
  
* 动态参数名

  ```js
  const a = 'name'
  const obj = {}
  obj[a] = 'Tom'
  // obj = { name: 'Tom' }
  ```

  

## Ref

1. 字符串形式

```react
<div ref = 'dom'><div/>
  
  this.refs.dom
```

2. 回调形式

```react
<div ref = { (c) => { this.dom = c } }><div/>
  
dom = (dom) => {
  console.log(dom)
}
<div ref = { this.dom }><div/>
```

3. createRef 创建 Dom

```react
myRef = React.createRef()

<div ref = { this.myRef }><div/>

this.myRef.current
```

## 事件处理

收集表单中的数据

* 受控组件

  ![image-20220705065027745](https://tva1.sinaimg.cn/large/e6c9d24egy1h3vo21izjsj210c0j441x.jpg)

* 非受控组件

高阶函数

![image-20220616104422033](https://tva1.sinaimg.cn/large/e6c9d24egy1h3vutkzw2xj20w405g0u2.jpg)

```react
<body>
    <div id="example"></div>
    <script type="text/babel">
      class Login extends React.Component {
        formData = (dataType) => {
          console.log(dataType);
          return (event) => {
            console.log(event.target.value);
          };
        };
        render() {
          return (
            <form>
              用户名：
              <input onChange={this.formData("username")} type="text" />
              密码：
              <input onChange={this.formData("password")} type="password" />
            </form>
          );
        }
      }
      ReactDOM.render(<Login />, document.getElementById("example"));
    </script>
  </body>
```



函数柯里化

![image-20220616104912646](https://tva1.sinaimg.cn/large/e6c9d24egy1h3vuytz6qij212e01gmxh.jpg)

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

## 组件生命周期

旧 class 组件生命周期

forceUpdate() 

强制更新

![image-20220705132347010](https://tva1.sinaimg.cn/large/e6c9d24egy1h3vzfa1hxyj20yg0r8gnv.jpg)

componentWillReceiveProps 第一次传不会触发钩子,

只有接受新的 props 才会触发

![image-20220705133721465](https://tva1.sinaimg.cn/large/e6c9d24egy1h3vztelpxnj214s0gsgou.jpg)

react 17 生命周期

老师教的的

![image-20220705140453476](https://tva1.sinaimg.cn/large/e6c9d24egy1h3w0m2nc63j21300r6wgy.jpg)

文档的图

![image-20220705140226202](https://tva1.sinaimg.cn/large/e6c9d24egy1h3w0ji3tztj21mq0ncdjb.jpg)

  getDerivedStateFromProps  React生命周期的命名一直都是非常语义化的，这个生命周期的意思就是从props中获取state，可以说是太简单易懂了。可以说，这个生命周期的功能实际上就是将传入的props映射到state上面

getSnapshotBeforeUpdate 在[render](https://so.csdn.net/so/search?q=render&spm=1001.2101.3001.7020)之前调用，state已更新，典型场景：获取render之前的dom状态

![image-20220705170816110](https://tva1.sinaimg.cn/large/e6c9d24egy1h3w5wv36pqj214i0j2n0r.jpg)

## React Ajax

* 在`package.json`加（配置代理解决跨域）
* ![image-20220706145120697](https://tva1.sinaimg.cn/large/e6c9d24egy1h3x7koygq7j217w0demyn.jpg)

```json
"proxy":"http://localhost:你请求服务器的端口"
```

* `src`目录下添加`setupProxy.js`

  ![image-20220706144949650](https://tva1.sinaimg.cn/large/e6c9d24egy1h3x7j5s1naj20xk0nejuu.jpg)

  ![image-20220706145137961](https://tva1.sinaimg.cn/large/e6c9d24egy1h3x7kzkklpj21ds0rq0xd.jpg)

## redux

