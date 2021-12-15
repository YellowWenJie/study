### 写法不同

ES5正常写法

```
getAjax(url,(res)=>{})
```

Promise

```
get(url).then((res)=>{})
```

async_await

```
(async ()=>{ 
    let res = await get(url)
})()
```

总结：

- ES5写法和promise写法，主要区别在写法的不同，可以让回调函数，划分出去在.then的函数里去执行，使得代码更加的另外，也可以将两个不同的参数，可以划分开来写。
- async和promise的区别，不要在于async时promise的语法糖，这种形式的写法在底层编译之后会自动转化成promise的写法

 

### Promise实现原理

promise需要实现的功能

```
function fn(resolve,reject){
    setTimeout(()=>{
        if(true){
            resolve()
        }else{
            reject()
        }
    })
}
var p1 = new LcPromise(fn)

p1.then(function(res){
    document.body.style.background = "greenyellow"
    console.log("这是成功做的事情")
    console.log(res)
})

p1.catch(function(res){
    document.body.style.background = "pink"
    console.log("这是失败做的事情")
    console.log(res)
})
```

p1promise对象发送了异步操作，必然会有1个未来事件，在未来要执行。这个过程由传入的函数对象fn执行。函数fn里必然需要由成功执行和失败执行的函数

 

1创建类构造对象

```
class LcPromise{
    constructor(fn) {
        //将成功的事件函数集成在successList数组里
        this.successList  = [];
        //这里将所有的失败函数集成到failList里
        this.failList = []
        //pending,fullfilled,rejected
        this.state = "pending"
        //传入的函数对象,(异步操作的函数内容)
        fn(this.resolveFn.bind(this),this.rejectFn.bind(this))
    }
}
```

构造函数的作用：

- 声明成功函数放置的数组对象
- 声明失败函数放置的数组对象
- 定义初始化状态
- 调用传入进行执行异步内容的函数（在未来有成功的结果时调用传入进去的成功函数，在未来失败时调用传入进行的失败函数）

2.传入成功或者失败时需要调用的函数

```
class LcPromise{
    constructor(fn) {

        //将成功的事件函数集成在successList数组里
        this.successList  = [];
        //这里将所有的失败函数集成到failList里
        this.failList = []
        //pending,fullfilled,rejected
        this.state = "pending"
        //传入的函数对象,(异步操作的函数内容)
        fn(this.resolveFn.bind(this),this.rejectFn.bind(this))
    }
    then(successFn,failFn){
        if(typeof successFn=='function'){
            this.successList.push(successFn)
        }
        if(typeof failFn=='function'){
            this.failList.push(failFn)
        }
    }
    catch(failFn){
        if(typeof failFn=='function'){
            this.failList.push(failFn)
        }
    }
}
```



作用：

- 将成功和失败的函数传入值成功和失败的数组里

定义调用成功和失败的函数

```
//promise aysnc await proxy Iteratror
            class LcPromise{
                constructor(fn) {
                    
                    //将成功的事件函数集成在successList数组里
                    this.successList  = [];
                    //这里将所有的失败函数集成到failList里
                    this.failList = []
                    //pending,fullfilled,rejected
                    this.state = "pending"
                    //传入的函数对象,(异步操作的函数内容)
                    fn(this.resolveFn.bind(this),this.rejectFn.bind(this))
                }
                then(successFn,failFn){
                    if(typeof successFn=='function'){
                        this.successList.push(successFn)
                    }
                    if(typeof failFn=='function'){
                        this.failList.push(failFn)
                    }
                }
                catch(failFn){
                    if(typeof failFn=='function'){
                        this.failList.push(failFn)
                    }
                }
                resolveFn(res){
                    this.state = "fullfilled"
                    this.successList.forEach(function(item,index){
                        //将成功的事件循环调用
                        item(res)
                    })
                }
                rejectFn(res){
                    this.state = 'rejected'
                    //注册到的失败所有事件进行调用
                    this.failList.forEach(function(item,index){
                        item(res)
                    })
                    
                    throw Error(res);
                }
                
            }
```



作用：

- 成功时调用成功数组里所有的函数，失败时调用失败数组里所有的函数。

 

# 应用

如何将promise与async和await结合使用

典型异步读写的回调操作

```
fs.readFile(path,{flag:'r',encoding:"utf-8"},function(err,data){
    if(err){
        //console.log(err)
        //失败执行的内容
        reject(err)

    }else{
        //console.log(data)
        //成功执行的内容
        resolve(data)
    }
    //console.log(456)
})

```



转换成promise对象













```
new Promise(function(resolve,reject){
    fs.readFile(path,{flag:'r',encoding:"utf-8"},function(err,data){
        if(err){
            reject(err)
        }else{
            resolve(data)
        }
    })
})
```



由于每次使用，都不想写这么多代码，那么就会把这样的写法直接进行函数的封装



```

```









```
function fsRead(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,{flag:'r',encoding:"utf-8"},function(err,data){
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

```



使用的时候，就可以使用promise写法



```

```









```
p1 = fsRead(path) //就可以得到promise对象
p1.then(function(data){
    console.log('输出数据:',data)
})
```



asycn_await写法



```

```









```
(async ()=>{ 
    let data = await fsRead(path)
})()
```



异步async函数调用之后也是一个promise对象



```

```





```
(async ()=>{ 
    async function test(){
        let data = await fsRead(path)
        return data;
    }
    let p = test()//异步函数调用后，也是一个promise对象
```





```
    p.then(function(data){
        console.log(data)
    })
    let a = await test()//异步函数调用后，也是一个promise对象
    
    console.log(123)
})()
```



 