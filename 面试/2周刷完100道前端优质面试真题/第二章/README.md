# 数据结构与算法

* 为何要考察
  * 辨别优秀工程师（考虑鉴别成本 + 成功率）
  * 前端越来越广，要求越来越高
* 考察重点
  * 算法复杂度：空间，时间
  * 算法思维：贪心，二分，动态规则
  * 常见数据结构
* 注意事项
  * 本章有点难度（大厂面试标准），要耐心学习
  * 一个问题的解决方案有很多，要找出最优解（重要！）
  * 不仅关注题目本身，还要关注分析问题的思路和方法

<hr/>

## 科普——算法复杂度

* 什么是复杂度

  > * 程序执行时需要的计算量和内存空间（和代码是否简洁无关）
  > * 复杂度是**数量级**（方便记忆、推广），不是具体的数字
  > * 一般针对一个具体的算法，而非一个完整的系统
  > * ![image-20220723232923031](https://tva1.sinaimg.cn/large/e6c9d24egy1h4hat5vx78j21be0qodi8.jpg)

* 时间复杂度——程序执行时需要的计算量（CPU）

  > * 可数都是 O(1)，一次就够（数量级）
  >
  >   > ```js
  >   > function fn(obj = {}, key){
  >   >   // o(1)
  >   >   return obj[key]
  >   > }
  >   > ```
  >
  > * O(n) 和传输的数据量一样（数量级）
  >
  >   > ```js
  >   > function fn(arr = []){
  >   >   // O(n)
  >   >   for (let i = 0; i < array.length; i++) {
  >   >     console.log(arr[i])
  >   >   }
  >   > }
  >   > ```
  >
  > * O(n^2) 数据量的平方（数量级）
  >
  > * > ```js
  >   > function fn(arr = []){
  >   >   // O(n^2)
  >   >   for (let i = 0; i < array.length; i++) {
  >   >     for (let j = 0; j < array.length; j++) {
  >   >     console.log(arr[j])
  >   >   }
  >   >   }
  >   > }
  >   > ```
  >
  > * O(logn) 数据量的对数（数量级）[对数]([对数_百度百科 (baidu.com)](https://baike.baidu.com/item/对数/91326))
  >
  > * O(n * logn) 数据量 * 数据量的对数（数量级）

* 空间复杂度——程序执行时需要的内存空间

  > * O(1) 有限的
  >
  >   > ```js
  >   > function fn(arr = []){
  >   >   // O(1)
  >   >   const a = arr[1]
  >   >   constb = arr[2]
  >   > }
  >   > ```
  >
  > * O(n)
  >
  >   > ```js
  >   > function fn(arr = []){
  >   >   // O(n)
  >   >   const a = []
  >   > 
  >   >   for (let i = 0; i < array.length; i++) {
  >   >     a[i] = a[i] + 1
  >   >   }
  >   > }
  >   > ```

* 程序员必须掌握算法复杂度

  * 如果你没有复杂度的概念和敏感度，写程序是非常危险的
  * 例如，代码功能测试正常，但数量大了，程序就会崩溃
  * 对于前端开发，尤其是时间复杂度

* 划重点

  * 算法复杂度是学习算法的基础，非常重要，理解不了就背诵
  * 复杂度是**数量级**，用 O() 表示，内部是一个函数表达式
  * 前端开发：重时间，轻空间

## 题目

如何配置 ts + jest: `https://juejin.cn/post/6955392566992830477`

### 题目一：将一个数组旋转 k 步

* 输入一个数组 [1,2,3,4,5,6,7]
* k = 3 ，即选择 3 步
* 输出 [5,6,7,1,2,3,4]

> ```ts
> /**
>  * @description: 旋转数组 k 步 - 使用 pop() 和 unshift()
>  * @param {number[]} arr
>  * @param {number} k
>  * @return {number[] | Error}
>  * @Complexity 时间复杂度 O(n^2),空间复杂度 O(1)
>  */
> export function rorare(arr: number[], k: number): number[] | Error {
>   const lenght = arr.length
>   if (!k || lenght === 0 || k < 0 || !(arr instanceof Array)) return arr
> 
>   const step = Math.abs(k % lenght)
> 
>   for (let i = 0; i < step; i++) {
>     const n = arr.pop()
>     if (n != null) {
>       arr.unshift(n)
>     }
>   }
> 
>   return arr
> }
> 
> /**
>  * @description: 旋转数组 k 步 - concat
>  * @param {number[]} arr
>  * @param {number} k
>  * @return {number[] | Error}
>  *  @Complexity 时间复杂度 O(1),空间复杂度 O(n)
>  */
> export function rorare2(arr: number[], k: number): number[] | Error {
>   const lenght = arr.length
>   if (!k || lenght === 0) return arr
> 
>   const step = Math.abs(k % lenght)
> 
>   const part1 = arr.slice(-step)
>   const part2 = arr.slice(0, length - step)
>   const part3 = part1.concat(part2)
>   return part3
> }
> 
> // 性能测试
> const arr = []
> for (let i = 0; i < 10 * 10000; i++) {
>   arr.push(i)
> }
> console.time('方法一')
> rorare(arr, 9 * 10000) // 1268.1630859375 ms O(n^2)
> console.timeEnd('方法一')
> 
> console.time('方法二')
> rorare2(arr, 9 * 10000) // 4.2998046875 ms O(1)
> console.timeEnd('方法二')
> 
> ```

### 题目二：快速排序

* 用 JavaScript 实现快速排序，并说明时间复杂度

### 题目三：判断字符串是否括号匹配 - 考察栈

> #### 逻辑结构 vs 物理结构
>
> * 栈 vs 数组
>   * 栈与数组有什么区别，没任何联系
> * 栈，逻辑结构。理论模型，不管任何实现，不受任何语言限制
> * 数组，物理结构。真实的功能实现，受限于编程语言

* 一个字符串 s 可能包含 {} [] () 三种括号

* 判断 s 是否是括号匹配的

* 如 (a{b}c) 匹配，而 {a(b 或 {(a}c) 就不匹配

  > #### 思路
  >
  > * 遇到左括号 { ( [ 就压栈（入栈）
  > * 遇到右括号 } ) ] 就判断栈顶，匹配则出栈
  > * 最后判断 length 是不是 0

  > ```tsx
  > /**
  >  * @description: 判断左右括号是否匹配
  >  * @param {string} left
  >  * @param {string} right
  >  * @return {*}
  >  */
  > function isMatch(left: string, right: string) {
  >   if (left === '(' && right === ')') return true
  >   if (left === '{' && right === '}') return true
  >   if (left === '[' && right === ']') return true
  > }
  > 
  > /**
  >  * @description:
  >  * @param {string} str
  >  * @return {boolean}
  >  */
  > export function matchBrackets(str: string): boolean {
  >   const lenght = str.length
  >   if (lenght === 0) return true
  > 
  >   const stack = []
  > 
  >   const leftSymble = '{[('
  > 
  >   const rightSymble = '}])'
  > 
  >   for (let i = 0; i < lenght; i++) {
  >     const s = str[i]
  > 
  >     if (leftSymble.includes(s)) {
  >       stack.push(s)
  >     } else if (rightSymble.includes(s)) {
  >       const top = stack[stack.length - 1]
  > 
  >       if (isMatch(top, s)) {
  >         stack.pop()
  >       } else {
  >         return false
  >       }
  >     }
  >   }
  >   return stack.length === 0
  > }
  > ```
  >
  > 时间复杂度和空间复杂度都为 O(n)



### 题目四：反转单向链表

#### 链表

> * 链表是一种物理结构（非逻辑结构），**类似于**数组
> * 数组需要一段连续的内存空间，而链表是零散的
> * 链表节点的数据结构 { value, next?, prev? }

#### 链表 VS 数组

> * 都是有序结构
> * 链表：查询慢 O(n)，新增和删除块 O(1)
> * 数组：查询快 O(1)，新增和删除慢 O(n）
> * ![image-20220725153755901](https://tva1.sinaimg.cn/large/e6c9d24egy1h4j7p0ph9zj21bu0qytax.jpg)
> * ![image-20220725164623417](https://tva1.sinaimg.cn/large/e6c9d24egy1h4j9o975jrj21bu0qytb5.jpg)

* 输入一个单向链表，输出他的反转（头边尾，尾变头）

### 题目五：俩个栈实现一个队列

* 用俩个栈，实现一个队列
* 功能 add delete length

#### 队列

> * 先进先出
> * API：add delete length
> * ![image-20220725123649399](https://tva1.sinaimg.cn/large/e6c9d24egy1h4j2gm4lg4j21bu0qy75g.jpg)

#### 数组与队列区别（逻辑结构 VS 物理结构）

> * 队列是逻辑结构，抽象模型
> * 简单的，可以用数组、链表实现
> * 复杂的队列服务，需单独设计

#### 性能分析

> * 时间复杂度：add O(1)  delete O(n)
> * 空间复杂度，整体是 O(n)

### 连环问：链表和数组，哪个实现队列更快

答：用链表会更好，数组会存在性能问题。

* 数组是连续存储，push 很快，shift 很慢

* 链表是非连续存储，add 和 delete 都很快（但查找很慢）

* 链表实现队列

  > * 单向链表，但要同时记录 head 和 tail
  > * 要从 tail 入队，从 head 出队，否则出队时 tail 不好定位
  >
  > ```ts
  > interface IListNode {
  >   value: number
  >   next: IListNode | null
  > }
  > 
  > export class MyQueueList {
  >   private head: IListNode | null = null
  >   private tail: IListNode | null = null
  >   private len = 0
  > 
  >   add(n: number) {
  >     const newNode: IListNode = {
  >       value: n,
  >       next: null,
  >     }
  > 
  >     // 处理 head
  >     if (this.head === null) {
  >       this.head = newNode
  >     }
  > 
  >     // 处理 tail
  >     const tailNode = this.tail
  >     if (tailNode) {
  >       tailNode.next = newNode
  >     }
  >     this.tail = newNode
  > 
  >     this.len++
  >   }
  > 
  >   delete(): number | null {
  >     const headNode = this.head
  >     if (headNode === null) return null
  >     if (this.len <= 0) return null
  > 
  >     // 取值
  >     const value = headNode.value
  > 
  >     // 处理 head
  >     this.head = headNode.next
  > 
  >     // 记录长度
  >     this.len--
  > 
  >     return value
  >   }
  > 
  >   get length(): number {
  >     return this.len
  >   }
  > }
  > 
  > // 性能测试
  > const q1 = new MyQueueList()
  > console.time('queue')
  > for (let i = 0; i < 10 * 10000; i++) {
  >   q1.add(i)
  > }
  > for (let i = 0; i < 10 * 10000; i++) {
  >   q1.delete()
  > }
  > console.timeEnd('queue') // 17.8681640625 ms
  > 
  > const q2 = []
  > console.time('queue1')
  > for (let i = 0; i < 10 * 10000; i++) {
  >   q2.push(i)
  > }
  > for (let i = 0; i < 10 * 10000; i++) {
  >   q2.shift()
  > }
  > console.timeEnd('queue1') // 703.5927734375 ms
  > ```
  >
  > ![image-20220725195901271](https://tva1.sinaimg.cn/large/e6c9d24egy1h4jf8ow3ppj21bu0qydhs.jpg)
  >
  > ![image-20220725200102680](https://tva1.sinaimg.cn/large/e6c9d24egy1h4jfasdgjtj21bu0qyjtg.jpg)

### 题目六：用 JS 实现二分查找，并说明时间复杂度

* 递归 —— 代码逻辑更加清晰
* 非递归 ——性能更好
* 时间复杂度 O(logn) —— 非常快！

> ```ts
> /**
>  * @description: 二分查找（循环）
>  * @return {*}
>  */
> export function binarySearch1(arr: number[], target: number): number {
>   const length = arr.length
> 
>   if (length === 0) return -1
> 
>   let startIndex = 0 // 开始位置
>   let endIndex = length - 1 // 结束位置
> 
>   while (startIndex <= endIndex) {
>     const midIndex = Math.floor((startIndex + endIndex) / 2)
>     const midValue = arr[midIndex]
> 
>     if (target < midValue) {
>       // 目标值较小，则继续再左侧查找
>       endIndex = midIndex - 1
>     } else if (target > midValue) {
>       // 目标值较大，则继续再右侧查找
>       startIndex = midIndex + 1
>     } else {
>       // 相等，返回
>       return midIndex
>     }
>   }
>   return -1
> }
> 
> /**
>  * @description: 二分查找（递归）
>  * @param {number} arr
>  * @param {number} target
>  * @param {number} targetIndex
>  * @param {number} endIndex
>  * @return {*}
>  */
> export function binarySearch2(
>   arr: number[],
>   target: number,
>   startIndex?: number,
>   endIndex?: number
> ): number {
>   const length = arr.length
> 
>   if (length === 0) return -1
> 
>   // 开始和结束的范围
>   if (startIndex === undefined) {
>     startIndex = 0
>   }
>   if (endIndex === undefined) {
>     endIndex = length - 1
>   }
> 
>   // 如果 start 和 end 相遇，则返回
>   if (startIndex > endIndex) return -1
> 
>   // 中间位置
>   const midIndex = Math.floor((startIndex! + endIndex!) / 2)
>   const midValue = arr[midIndex]
> 
>   if (target < midValue) {
>     // 目标值较小，则继续再左侧查找
>     return binarySearch2(arr, target, startIndex, midIndex - 1)
>   } else if (target > midValue) {
>     // 目标值较大，则继续再右侧查找
>     return binarySearch2(arr, target, midIndex + 1, endIndex)
>   } else {
>     // 相等，返回
>     return midIndex
>   }
> }
> ```
>
> ![image-20220726125131561](https://tva1.sinaimg.cn/large/e6c9d24egy1h4k8i8ajvxj21bu0qyjsu.jpg)

### 题目七：给一个数组，找出其中和为 n 的俩个元素

* 有一个**递增**的数组 [1, 2, 3, 4, 7, 11, 15] 和一个 n = 15
* 数组中有**俩个数**，和是 n。即 4 + 11 === 15
* 写一个 `JS` 函数,找出这俩个数

### 思路

> * 嵌套循环，找到一个数，然后去遍历下一个数，求和，判断
> * 时间复杂度是`O(n^2)`,不可用
>
> ### 示例（不推荐）（循环），时间复杂度为 O(n^2)
>
> ```ts
> export function findTowNumbers1(arr: number[], n: number): number[] {
>   const res: number[] = []
> 
>   const length = arr.length
>   if (length === 0) return res
> 
>   for (let i = 0; i < length - 1; i++) {
>     const n1 = arr[i]
>     let flag = false
> 
>     for (let j = i + 1; j < length; j++) {
>       const n2 = arr[j]
> 
>       if (n1 + n2 === n) {
>         res.push(n1)
>         res.push(n2)
>         flag = true
>         break
>       }
>     }
>     if (flag) break
>   }
> 
>   return res
> }
> ```
>
> ![image-20220726132922190](https://tva1.sinaimg.cn/large/e6c9d24egy1h4k9lk3c6hj21bu0qytaq.jpg)
>
> ![image-20220726133559829](https://tva1.sinaimg.cn/large/e6c9d24egy1h4k9sh2z2vj21bu0qyjtq.jpg)
>
> ```ts
> /**
>  * @description: 寻找数组内和为 n 的俩个数 (双指针)
>  * @param {number} arr
>  * @param {number} n
>  * @return {*}
>  */
> export function findTowNumbers2(arr: number[], n: number): number[] {
>   const res: number[] = []
> 
>   const length = arr.length
>   if (length === 0) return res
> 
>   let i = 0 // 头
>   let j = length - 1 // 尾
> 
>   while (i < j) {
>     const n1 = arr[i]
>     const n2 = arr[j]
>     const sum = n1 + n2
> 
>     if (n > sum) {
>       i++
>     } else if (n < sum) {
>       j--
>     } else {
>       res.push(n1)
>       res.push(n2)
>       break
>     }
>   }
>   return res
> }
> ```
>
> ![image-20220726145721713](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kc54mao7j21bu0qywg7.jpg)

### 题目八：求一个二叉搜索树的第  k 小值

![image-20220726160017474](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kdyle8d3j21bu0qywgz.jpg)

![image-20220726182631204](https://tva1.sinaimg.cn/large/e6c9d24egy1h4ki6qre5nj21bu0qytat.jpg)

#### 什么是二叉树？

> * 是一棵树
> * 每个节点，最多只能有俩个子节点
> * 树节点的数据结构{ value, left?, right? }

#### 二叉树的遍历

> ![image-20220726162201907](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kel7yumyj20mw0a6dge.jpg)
>
> ```ts
> interface ITreeNode {
>   value: number
>   left: ITreeNode | null
>   right: ITreeNode | null
> }
> 
> /**
>  * @description: 二叉树前序遍历
>  * @param {ITreeNode} node
>  * @return {*}
>  */
> function preOrderTraverse(node: ITreeNode | null) {
>   if (node == null) return
>   console.log(node.value)
>   preOrderTraverse(node.left)
>   preOrderTraverse(node.right)
> }
> 
> /**
>  * @description: 二叉树中序遍历
>  * @param {ITreeNode} node
>  * @return {*}
>  */
> function inOrderTraverse(node: ITreeNode | null) {
>   if (node == null) return
>   inOrderTraverse(node.left)
>   console.log(node.value)
>   inOrderTraverse(node.right)
> }
> 
> /**
>  * @description: 二叉树中序遍历
>  * @param {ITreeNode} node
>  * @return {*}
>  */
> function postOrderTraverse(node: ITreeNode | null) {
>   if (node == null) return
>   postOrderTraverse(node.left)
>   postOrderTraverse(node.right)
>   console.log(node.value)
> }
> 
> const tree: ITreeNode = {
>   value: 5,
>   left: {
>     value: 3,
>     left: {
>       value: 2,
>       left: null,
>       right: null,
>     },
>     right: {
>       value: 4,
>       left: null,
>       right: null,
>     },
>   },
>   right: {
>     value: 7,
>     left: {
>       value: 6,
>       left: null,
>       right: null,
>     },
>     right: {
>       value: 8,
>       left: null,
>       right: null,
>     },
>   },
> }
> ```

#### 二叉搜索树 BST（Binary Search Tree）

> ![image-20220726175440442](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kh9lqpwdj20qi0akgme.jpg)

##### 为什么二叉树如此重要，而不是三叉树，四叉树

答：全是为了性能。

![image-20220726182944483](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kia3mresj21bu0qydi5.jpg)

![image-20220726192930578](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kk0a7prtj21bu0qywgp.jpg)

![image-20220726193413282](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kk56r6ynj21bu0qyjti.jpg)

![image-20220726193443256](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kk5pd77ej21bu0qygo5.jpg)

![image-20220726193649466](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kk7wnqv1j21bu0qyq4m.jpg)

![image-20220726193715491](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kk8cey6vj21bm0mqgnl.jpg)

![image-20220726193736402](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kk8piiflj21bu0qy40f.jpg)

![image-20220726193832481](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kk9omdfwj21bo0najsj.jpg)

![image-20220726194247451](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kke3y3n1j21bu0qygo5.jpg)

![image-20220726194429479](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kkfvk3mlj217e0jg0th.jpg)

![image-20220726194707834](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kkimygroj21bu0qy76e.jpg)

![image-20220726194817907](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kkjueit7j21bu0qygnu.jpg)

![image-20220726194901733](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kkkli0v9j21bu0qywh1.jpg)

![image-20220726195412941](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kkpzyixoj21bu0qytak.jpg)

![image-20220726195431302](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kkqbigjyj21bu0qyq4p.jpg)

![image-20220726195617140](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kks5mtrfj21b60nkmz3.jpg)

![image-20220726195652628](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kksrhovmj21bu0qyq4e.jpg)

### 题目九：斐波那契数列

* 用 JS 计算斐波那契数列的第 n 个 值

* f(0) = 0

* f(1) = 1

* f(n) = f( n -1 ) + f( n -2 )

* ```ts
  function fibonacci(n: number): number {
    if (n <= 0) return 0
    if (n === 1) return 1
  
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
  console.log(fibonacci(10))
  ```

![image-20220726202300365](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kljy71ujj21bu0qy0u2.jpg)

* ```ts
  export function fibonacci(n: number): number {
    if (n <= 0) return 0
    if (n === 1) return 1
  
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
  
  export function fibonacci2(n: number): number {
    if (n <= 0) return 0
    if (n === 1) return 1
  
    let n1 = 1 // 记录 n - 1 的结果
    let n2 = 0 // 记录 n - 2 的结果
    let res = 0
  
    for (let i = 2; i <= n; i++) {
      res = n1 + n2
      n2 = n1
      n1 = res
    }
  
    return res
  }
  ```

  ![image-20220726210955134](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kmx4gwggj21bu0qytay.jpg)

#### 连环问：青蛙跳台阶——与斐波那契数列完全一样

* 一只青蛙，一次可跳 1 级，也可跳 2 级
* 问：青蛙跳到 n 级台阶，总共有多少种方式

> ##### 分析
>
> ![image-20220726211458154](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kn20l0gxj20sk0a6q3t.jpg)
> $$
> f(n)=f(n-1)+f(n-2)
> $$

### 题目十：将数组中的 0 移动到末尾

* 如输入 [ 1, 0, 3, 0, 11, 0 ], 输出 [ 1, 3, 11, 0, 0, 0 ]
* 只移动 0，其他顺序不变
* 必须在原数组进行操作

![image-20220726212618429](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kndtip3pj21bu0qy40y.jpg)

![image-20220726212655321](https://tva1.sinaimg.cn/large/e6c9d24egy1h4knegjjd9j21bu0qy0un.jpg)

```ts
/**
 * @description: 移动 0 到数组的末尾（嵌套循环）不推荐
 * @param {number} arr
 * @return {*}
 */
export function moveZero1(arr: number[]): void {
  const length = arr.length
  if (length === 0) return

  let zeroLength = 0

  for (let i = 0; i < length - zeroLength; i++) {
    if (arr[i] === 0) {
      arr.push(0)
      arr.splice(i, 1)
      i--
      zeroLength++
    }
  }
}
```

![image-20220726230321185](https://tva1.sinaimg.cn/large/e6c9d24egy1h4kq6sklh6j21bu0qygnj.jpg)

![image-20220727083848987](https://tva1.sinaimg.cn/large/e6c9d24egy1h4l6tk9oljj20m40fm0tm.jpg)

```ts
export function moveZero2(arr: number[]): void {
  const length = arr.length

  if (length === 0) return

  let i
  let j = -1

  for (i = 0; i < length; i++) {
    if (arr[i] === 0) {
      // 第一个 0
      if (j < 0) {
        j = i
      }
    }

    if (arr[i] !== 0 && j >= 0) {
      // 交换
      const n = arr[i]
      arr[i] = arr[j]
      arr[j] = n

      j++
    }
  }
}
```

![image-20220727084128540](https://tva1.sinaimg.cn/large/e6c9d24egy1h4l6wc3yelj21bu0qy0un.jpg)

### 题目十一：字符串中连续最多的字符，以及次数

* 如，输入 ‘abbcccddeeee1234’ ，计算得到：连续最多的字符是 ‘e'，4次









































