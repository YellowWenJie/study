# React 笔记

![image-20220704213048609](https://tva1.sinaimg.cn/large/e6c9d24egy1h3v7vs5mmsj20ue0g2q59.jpg)

小计

* 扩展运算符不能展开对象，使用{…object}就可以
* props 传数值类型需要用 {} 比如 `<Person age = { 18 } ></Person>`

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



