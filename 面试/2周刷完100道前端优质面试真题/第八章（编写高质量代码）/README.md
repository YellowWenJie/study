# 编写高质量代码

* 为何要考察
  * 工程师的主要工作就是写代码
  * 实际工作中，多人协作项目，一个人代码写不好会影响全局
* 考察重点
  * 编码规范性
  * 功能完整性
  * 健壮性

## Array Flatten

> * 定义空数组 arr = []。遍历当前数组
> * 如果 item 非数组，则累加到 arr
> * 如果 item 是数组，则遍历之后累加到 arr
>
> ```ts
> /**
>  * @description: 数组扁平化，使用 push
>  * @param {any} arr
>  * @return {*}
>  */
> export function flatten1(arr: any[]): any[] {
>   let res: any[] = []
> 
>   arr.forEach(item => {
>     if (Array.isArray(item)) {
>       item.forEach(n => res.push(n))
>     } else {
>       res.push(item)
>     }
>   })
> 
>   return res
> }
> 
> /**
>  * @description: concat()
>  * @param {any} arr
>  * @return {*}
>  */
> export function flatten2(arr: any[]): any[] {
>   let res: any[] = []
>   arr.forEach(item => {
>     res = res.concat(item)
>   })
> 
>   return res
> }
> ```
>
> 

### 连环问：Array Flatten 彻底 “拍平”

> * 写一个 JS 函数，实现数组扁平化，减少使用嵌套的层级
> * 如输入 [1,[2,[3]],4]，输出 [1,2,3,4]
>
> ![image-20220801200401688](https://tva1.sinaimg.cn/large/e6c9d24egy1h4riq33pwvj20zi0iaabp.jpg)

## 获取类型

* 手写一个 getType 函数，传入任意变量，可准确获取类型
* 如 number string boolean 等值类型
* 还有 object array map regexp 等引用类型

![image-20220801200637523](https://tva1.sinaimg.cn/large/e6c9d24egy1h4risrtueyj21b80sumzc.jpg)

![image-20220801200701443](https://tva1.sinaimg.cn/large/e6c9d24egy1h4rit6r76oj21b80sujtj.jpg)

![image-20220801201148609](https://tva1.sinaimg.cn/large/e6c9d24egy1h4riy5qmu1j21ec0sudhh.jpg)



## new 一个对象发生了什么？请手写代码表示

![image-20220801203325107](https://tva1.sinaimg.cn/large/e6c9d24egy1h4rjkocg90j21ec0sumzg.jpg)

## 遍历 DOM 树

* 给一个DOM树
* 深度优先遍历，结果会输出什么？
* 广度优先遍历，结果会输出什么？

![image-20220801211526708](https://tva1.sinaimg.cn/large/e6c9d24egy1h4rkse70uyj21ec0sudip.jpg)

## 手写 LazyMan

* 支持 sleep 和 eat 俩个方法
* 支持链式调用

![image-20220801213231783](https://tva1.sinaimg.cn/large/e6c9d24egy1h4rla5arovj21ec0suq63.jpg)

![image-20220801213426656](https://tva1.sinaimg.cn/large/e6c9d24egy1h4rlc51gt9j21ec0suaci.jpg)

![image-20220801213434954](https://tva1.sinaimg.cn/large/e6c9d24egy1h4rlca2pm3j21ec0suq6a.jpg)

![image-20220802141011388](https://tva1.sinaimg.cn/large/e6c9d24egy1h4se47g1r3j21ec0sudh7.jpg)

## 手写一个 curry 函数，把其他函数柯里化

![image-20220802143146429](https://tva1.sinaimg.cn/large/e6c9d24egy1h4seqnk0vsj21ec0su40o.jpg)

## instanceof 原理是什么，请用代码表示

![image-20220802152005487](https://tva1.sinaimg.cn/large/e6c9d24egy1h4sg4x69kpj21ec0sujte.jpg)

![image-20220802152014917](https://tva1.sinaimg.cn/large/e6c9d24egy1h4sg5362agj21ec0su0wb.jpg)





