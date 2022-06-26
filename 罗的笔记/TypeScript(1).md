

# TypeScript



### 简介

######  1.什么是TypeScript？

  TypeScript是JavaScript的超集，可以编译成纯JavaScript。简单理解为JavaScript + Type的语言。

> 英文官网：https://www.typescriptlang.org/
>
> 中文官网：https://www.tslang.cn/

###### 2.安装和下载

  首先安装nodejs和npm。并将npm的包下载地址换成淘宝镜像。

> nodejs: https://nodejs.org/en/

  下载nodejs后配置一下环境变量

  打开终端并使用使用node -v，查看node版本。

  nodejs安装成功，默认会安装和配置npm。使用npm -v查看npm版本。使用npm i npm -g命令更新最新版本并全局安装npm

> npm i npm -g

  配置淘宝镜像。

> 临时使用：npm --registry https://registry.npm.taobao.org install express

> 永久配置：npm config set registry https://registry.npm.taobao.org

  配置完npm镜像后，使用npm下载包就不会出现失败的情况。

  你也可以配置cnpm来代替npm

> npm install -g cnpm --registry=https://registry.npm.taobao.org

  原来使用npm i express安装express包，就可以通过cnpm i express安装。

  恢复原来的npm包下载地址，通过下面命令。

>npm config set registry https://registry.npmjs.org

  开始下载安装TypeScript！！！

> npm i typescript -g

  这里全局下载TypeScript，因为我们不止这一个项目使用TypeScript。如果只是局部安装TypeScript，会导致其他项目重复安装TypeScript。

  也可以使用yarn全局安装TypeScript。

  首先下载yarn。

> npm i yarn -g

  使用yarn -v查看yarn版本和检查yarn下载安装成功没有。

> yarn -v

  yarn与npm都是包管理工具，对于这两个不同的地方可以去官网查看。

> npm: https://docs.npmjs.com/
>
> yarn: https://yarnpkg.com/

  使用yarn安装TypeScript！！！

> yarn global add typescript

###### 3. 检查TypeScript安装

>tsc -v

使用tsc -v查看TypeScript版本和检测是否安装成功。

###### 4. 运行TS文件

  首先使用

> tsc  index.ts

  `index`是TS文件名，将TS文件先编译成JS文件，在导入编译好的JS文件。

  或者，在本地全局安装`ts-node`包

> npm i -g ts-node

  这样就可以直接使用

> ts-node index.ts

  使用上面命令，可以直接在node中运行TS文件，不用进行编译。



### TypeScript基础类型

##### 1. string

  声明一个变量是string类型。

```typescript
const username: string = 'Tom';

const sentence: string = `My name is ${username}`;

let job: string = "web work";
const food: "Jelly" = "Jelly";

// Error
let username: string = new String('Tom');
```

  可以是双引号，单引号或者是模板字符串。使用const声明的变量，由于值不能变化，food这个变量的值类型是=="Jelly"==。

  new String( )的结果并不是一个字符串，而是String对象。所以类型应该是String。

```typescript
let username: String = new String('Tom');
```

##### 2. number

  声明一个变量是number类型。

```typescript
const age: number = 18;

const price: number = 12.88;

// 16进制
let color: number = 0xffffff;
const white: 16777215 = 0xFFFFFF;
// 2进制
let binaryLiteral: number = 0b1010;
const binaryTen: 10 = 0b1010;
// 8进制
let octalLiteral: number = 0o744;
const octalValue: 484 = 0o744;

// NaN和Infinity也是number类型
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```

  可以是二进制、八进制、十进制、十六进制、NaN、Infinity。

```typescript
// Error
let num: number = new Number(1);
```

  new Number( )的结果应该是Number对象。所以类型时Number。

```typescript
let num: Number = new Number(1);
```

##### 3. boolean

  声明一个变量是Boolean类型。

```typescript
let flag: boolean = true;
```

  可以是true、false。

  ```typescript
// Error
let flag: boolean = new Boolean(1)
  ```

  new Boolean( )的结果是Boolean对象。所以类型是Boolean。

```typescript
let flag: Boolean = new Boolean(1)
```

##### 4. 数组

  声明一个变量是数组类型。

  在JavaScript中对于数组，可以保存任意类型的值。如string，number，boolean，array，object，function等等。

```javascript
const arr = ['holle world', 18, true, function() {}, {name: 'Tom'}]
```

  在TypeScript中，对于数组我们会限制其类型，让数组只能保存我们设置的类型。

  如：只能保存string类型值的数组

```typescript
const strArr: string[] = ['hello', 'world']
```

  只能保存number类型的数组

```typescript
const numArr: number[] = [1, 2, 3, 4]
```

  除了==string[ ]== 、==number[ ]== 还有==boolean[ ]== 、==object[ ]== 、==Function[ ]== 等等。这里的object[ ] 和 Function [ ]都是泛指，只要数组保存的值是object或function就可以了。

```typescript
const arr: object[] = [{}, {name: 'Tom'}];
```

  如果想要限制数组保存的每一个对象，必须有name和age属性，则需要更加详细的类型约束。

```typescript
const arr: {name: string, age: number}[] = [{name: 'Tom', age: 18}];
```

  当string类型的数组保存其他类型的值时，TypeScript会报语法错误。不能将number类型的值赋值给string类型。

```typescript
const strArr: string[] = ['hello', 'world', 123];
```

  既想要保存string类型的值，又想要保存number类型的值，则需要使用联合类型。

```typescript
const arr (string|number)[] = ['hello', 'world', 123];
```

  如果数组每一项都是string类型的数组，则像下方这么定义。

```typescript
const arr: string[][] = [['hello'], ['world']];
```

  以此类推，对于number[ ]。

```typescript
const arr: number[][] = [[1, 2, 3], [11, 22, 33]];
```

  限制数组的类型除了使用 [ ] ，还可以使用泛型。如限制数组的每一项都是number类型。则可以使用`number[ ]`，还可以使用`Array<number>`

```typescript
const arr1: number[] = [1, 2, 3, 4];
const arr2: Array<number> = [1, 2, 3, 4];

// 你还可以一起使用
const arr1: number[][] = [[1, 2, 3], [11, 22, 33]];
const arr2: Array<number[]> = [[1, 2, 3], [11, 22, 33]];
const arr3: Array<Array<number>> = [[1, 2, 3], [11, 22, 33]];
const arr4: Array<number>[] = [[1, 2, 3], [11, 22, 33]];
```

  所以`number[ ]`和`Array<number>`是等价的。

  **readonly数组**

  使用关键字readonly。

```typescript
// let 声明的readonly array可以直接全部更改
let arr: readonly number[] = [1, 2, 3];
arr = [4, 5]
// const 声明的不行
const arr: readonly number[] = [1, 2, 3];
// Error, arr为常数
arr = [4, 5]

// Error, arr只可读
let arr: readonly number[] = [1, 2, 3];
arr[0] = 11;

// readonly array 不存在push属性
let arr: readonly number[] = [1, 2, 3];
arr.push(11)
```

  可以将普通数组赋值给只读数组，反过来不行。

```typescript
let x: string[] = [];
let y: readonly string[] = [];
y = x

// Error, 类型 "readonly string[]" 为 "readonly"，不能分配给可变类型 "string[]"。
let x: string[] = [];
let y: readonly string[] = [];
x = y
```

##### 5. 元组Tuple

  元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。简单理解为元组就是一个固定长度的数组，以及在特定位置包含的类型，这些类型可以是不相同的。

  比如：定义一个 [string, number] 的元组相当于定义一个长度为2的数组，数组的第一项类型为string，第二项类型为number。

```typescript
let person: [string, number]
```

  赋值的时候，长度和类型要匹配。

```typescript
let person: [string, number];

person = ['Tom', 18];

//Error
//缺少number类型
person = ['Tom']
//类型不匹配
person = ['Tom', 'Jerry']
//多了number类型
person = ['Tom', 18, 11]
//类型顺序不对
person = [18, 'Tom'];
```

  元组类型的变量初始化赋值时，虽然初始化赋值可以只赋值一项， 但会报错。

```typescript
// 元组初始化赋值
let person: [string, number];
person = ['Tom', 18];
// 等同于上面初始化赋值
let person: [string, number] = ['Tom', 18];

// 元组初始化赋值，只赋值其中一项
let dog: [string, number];
dog[0] = 'Tom'

let cat: [string, number, boolean]
cat[1] = 5
```

​    虽然只赋值一个这样的写法在TS中不报错，但是编译成js语言并运行时会报错，如上面代码变量dog和变量cat被编译成js代码运行时，将会报错。原因是在使用 ==let== 声明变量时，没有初始值，则会默认有个初始值为undefined。所以当给变量dog第一项赋值时，相当于在undefined上访问属性 '0'，js理所当然的会报错。

  当初始化完成时，可以通过变量下标修改。

```typescript
let person: [string, number];
person = ['Tom', 18];
person[0] = 'Jerry';
person[1] = 22;

console.log(person); //person -> ['Jerry', 22]
```

  元组既然是特殊的数组，那么就可以访问数组上的属性和方法。

```typescript
let person: [string, number] = ['Tom', 18];

person.map((item) => {
  console.log(item)
})

console.log(person.length);
```

  当使用==pop( )==、 ==push( )==、 ==shift( )==、==unshift( )== 等等可以改变数组内容的方法来修改元组内容时，会使用联合类型来替代。

```typescript
// pop()
let person: [string, number] = ['Tom', 18];
person.pop();
console.log(person); // person -> ['Tom']
person.pop();
console.log(person); // person -> []
person.pop();
console.log(person); // person -> []

// push() 一个错误的类型
let person: [string, number] = ['Tom', 18];
// Error, true 不是 string|number 类型
person.push(true);

// push() 
let person: [string, number] = ['Tom', 18];
person.push(22);
console.log(person); // person -> ['Tom', 18, 22]
person.push('hello');
console.log(person); // person -> ['Tom', 18, 22, 'hello']

// shift()
let person: [string, number] = ['Tom', 18];
person.shift();
console.log(person); // person -> [18]
person.shift();
console.log(person); // person -> []
person.shift();
console.log(person); // person -> []

// unshift() 一个错误类型
let person: [string, number] = ['Tom', 18];
// Error, true 不是 string|number 类型
person.unshift(true);

// unshift()
let person: [string, number] = ['Tom', 18];
person.unshift('hello');
console.log(person); // person -> ['hello', 'Tom', 18]
person.push(22);
console.log(person); // person -> [22, 'hello', 'Tom', 18]

// concat()
// concat()方法不会修改原数组，但在元组上使用时，会使用联合类型限制拼接数组的类型
let person: [string, number] = ['Tom', 18];
// newPerson的类型是 (string|number)[]
const newPerson = person.concat('hello');

// concat() 一个错误类型
let person: [string, number] = ['Tom', 18];
// Error，true 不是 string|number 类型
const newPerson = person.concat(true);

// splice() 只能添加元组限制类型的数据 与 push() 和 unshift() 相同
```

  尽肯能不去使用这些方法修改元组，因为会破坏元组结构。

  **解构赋值与元组的使用**

```typescript
let person: [string, number] = ['Tom', 18];
const [username, age] = person;

console.log(username); // username -> 'Tom'
console.log(age); // age -> 18
```

  **可选的元组类型**

  在类型后面加上 ? , 代表该类型是可选类型。可选类型只能放置在元组类型的末尾，可以放置多个可选类型。

```typescript
// 在类型后面加上 ? , 代表可选
let person: [string, number, number?] = ['Tom', 18, 22];
let cat: [string, number, number?] = ['Tom', 18];

// 可选类型放置在末尾
// Error
let person: [string, number?, number] = ['Tom', 18, 22];

// 放置多个可选类型
let person: [string, number, number?, string?] = ['Tom', 18];
             
// 可选类型是联合类型
let person: [string, number, number?, string?] = ['Tom', 18];
// 此时变量c的类型 number|undefined、变量d的类型是 string|undefined
const [a, b, c, d] = person;
```

  使用可选类型的元组会影响length属性。

```typescript
let person: [string, number, number?, string?] = ['Tom', 18];
// length 的类型为联合类型 2|3|4
const length = person.length;
```

  元组有**剩余元素**，但必须是元组或者数组类型。

```typescript
// 可以有0到多个boolean的值
let person: [string, number, ...boolean[]] = ['Tom', 18, true, false, true, ...[true, false]];

// 可以有0到多个number的值
let person: [string, ...number[], boolean] = ['Tom', 18, 20, 22, ...[18, 22], true];

// 可以有0到多个string的值
let person: [...string[], number, boolean] =  ['Tom', 'Jerry', ...'Hello', 18, true];

// 剩余参数只能有一个
// Error，rest 元素不能跟在另一个 rest 元素之后
let person: [...string[], ...number[], boolean];
```

  **readonly 元组**

  元组加上 ==readonly== 关键字，表示元组只可读。

```typescript
// 使用let声明的readonly tuple
let person: readonly [string, number];
// 可以正常修改person的值
person = ['Tom', 18];
person = ['Jerry', 22];

// 使用const声明的readonly tuple
const person: readonly [string, number];
// Error, person为常数
person = ['Tom', 18];

// 不能单独赋值
let person: readonly [string, number];
person = ['Tom', 18];
person = ['Jerry', 22];
// Error, person只可读
person[0] = 'Jerry';
```

  普通元组可以赋值给只读元组。

```typescript
let x: readonly [string, number] = ['Tom', 18]
let y: [string, number] = ['Jerry', 18]
x = y

// Error, 类型 "readonly [string, number]" 为 "readonly"，不能分配给可变类型 "[string, number]"
let x: readonly [string, number] = ['Tom', 18]
let y: [string, number] = ['Jerry', 18]
y = x
```

  元组类型其实就是限定长度和特定类型的数组，在一些特定惯例的场景下非常有用，其中每个元素的含义都是 "显而易见 "的，这给了我们灵活性。

```typescript
let person: [string, number] = ['Tom', 18];
const [username, age] = person;
```

  在上面代码中，我们通过解构赋值，可以对元组中的值进行任何命名，比如username或uname。但这种 "显而易见 "的含义并不是每个人都能理解，也许使用具有描述性属性名称的对象更加适合。

##### 6. void

  在JavaScript中，不存在void类型的概念。在 TypeScript 中，可以用 `void` 表示没有任何返回值的函数。

```typescript
function alertName(): void {
    console.log('My name is Tom');
}
```

  void类型的变量只能被赋值为null和undefined。

```typescript
let unusable: void = undefined;
unusable = null;

//Error, 不能将 string 类型分配给 void 类型
unusable = 'Tom';
```

##### 7. null 和 undefined

  TypeScript里，`undefined`和`null`两者各自有自己的类型分别叫做`undefined`和`null`。 和 `void`相似，它们的本身的类型用处不是很大。

```typescript
let u: undefined = undefined;
let n: null = null;
```

  与`void`区别是，null与undefined是其他类型的子类型。

```typescript
// 变量 u 与变量 n 的类型为any
let u = undefined;
u = 12;
let n = null;
n = 'Tom'
```

  当不使用类型注解时，TypeScript会自动推断声明变量的类型。此时`u`和`n`的类型为`any`。

```typescript
// Error
let num: number = undefined;
```

  既然null与undefined是其他类型的子类型，上面代码就不应该报错。原因是在TypeScript的config文件没有进行配置。

```json
// tsconfig.json
{
  "compilerOptions": {
    // 默认为true，将其修改为false
    "strictNullChecks": false,
  }
}
```

```typescript
// 将strictNullChecks配置为false，不报错。
let num: number = undefined;
let username: string = null;
```

  官方并不推荐将`strictNullChecks`修改为false。对于像上面代码如果有需要，则可以使用联合类型。

```typescript
let num: number|undefined = undefined;
let username: string|null = null;
```

  还可以使用`type`证明null和undefined是其他类型的子类型，包括any类型。

```typescript
// TypeString 类型为 string
type TypeString = null extends string ? string : number;

// TypeNumber 类型为 number
type TypeNumber = undefined extends number ? number : string;

// MyType 类型为联合类型 null|undefined|string|number
type MyType = null | undefined | string | number;
// 如果配置strictNullChecks = false。
// MyType 类型为联合类型 string|number
type MyType = null | undefined | string | number;

// TypeString 类型为 string
// TypeNumber 类型为 number
type TypeString = null extends any ? string : number;
type TypeNumber = undefined extends any ? number : string;
```

  因为TypeString类型为string， 所以`null extends string`为true，所以null和undefined是其他类型的子类型。

##### 8. never

  `never`类型表示的是那些永不存在的值的类型。比如一个函数报错时的返回值为never。

```typescript
// 函数报错返回的类型为never
function error(message: string): never {
    throw new Error(message);
}

// 通过TS的类型推断，推断fail函数返回 never
function fail() {
    return error("Something failed");
}

// 死循环
function infiniteLoop(): never {
    while (true) {
    }
}
```

  `never`类型是任何类型的子类型，也可以赋值给任何类型。

```typescript
function error(message: string): never {
  throw new Error(message);
}

let nv = error('error');

let str: string = nv;
let num: number = nv;
let n: null = nv;
let u: undefined = nv;
let anyVal: any = nv;
let vd: void = nv;
```

  但是除了never变量可以赋值给never变量，其他类型的变量不能赋值给never，包括any。

```typescript
function error(message: string): never {
  throw new Error(message);
}

function fail() {
    return error("Something failed");
}

let nv = error('error');
let nv2 = fail();

// never赋值给never
nv = nv2;

// Error
let anyVal: any;
nv = anyVal;
nv = 'Tom';
nv = 11;
nv = null;
nv = undefined;
```

  使用`type`证明`never`类型是所有类型的子类型。

```typescript
// 以下 TypeString 类型为 string
type TypeString1 = never extends string ? string : number;
type TypeString2 = never extends number ? string : number;
type TypeString3 = never extends void ? string : number;
type TypeString4 = never extends object ? string : number;
type TypeString5 = never extends null ? string : number;
type TypeString6 = never extends undefined ? string : number;
type TypeString7 = never extends any ? string : number;

// MyType 类型为联合类型 string|number
type MyType = never | string | number;
```

##### 9. function

  函数在JavaScript中至关重要。在TS中为函数新增了一系列的功能。

  首先就是函数的输入输出类型限制。

```typescript
function sum (a: number, b: number): number {
  return a + b
}
```

  上面代码对函数的参数和返回值进行限制。`sum`函数只接受number类型的参数，并返回number类型的参数。

  对于参数类型不同，实参个数大于形参个数，实参个数小于形参个数都会报错。

```typescript
function sum (a: number, b: number): number {
  return a + b
}

// Error, 不能将 string 类型赋值给 number 类型
const num1 = sum(1, '2');
// Error, 实参个数大于形参个数
const num2 = sum(1, 2, 3);
// Error, 实参个数小于形参个数
const num3 = sum(1);
```

  对于用函数表达式和箭头函数也可以进行限制。

```typescript
// 函数表达式
const sum: (a: number, b: number) => number = function (a: number, b: number): number {
  return a + b
}
// 等效于上面代码
const sum: (a: number, b: number) => number = function (a, b) {
  return a + b
}

// 箭头函数
const sum: (a: number, b: number) => number = (a: number, b: number): number => {
  return a + b
}
// 等效于上面代码
const sum: (a: number, b: number) => number = (a, b) => {
  return a + b
}
```

  上面使用了类型注解来限制`sum`函数接收的函数类型。一般不使用类型注解而是使用TS的类型推断。

  还可以使用接口限制函数类型。

```typescript
interface CountFun {
  (a: number, b: number): number;
}

let add: CountFun = (a, b) => {
  return a + b;
}
```

  函数的形参是一个对象时，只要实参满足形参限制的条件就可以传参。

```typescript
function fn (x: {length: number}): number {
  return x.length
}

// 因为字符串有 length 属性，所以可以传参
fn('12323');
```

  **可选参数**

  在TS中， 传递给一个函数的参数个数必须与函数期望的参数个数一致。但有时候不需要所有形参都是必须，这时候就使用可选参数。

  在形参后面加 `?`。

```typescript
const subString = (a: string, b: string, c?: string): string => {
  if (c) {
    return a + b + c
  }
  return a + b
}
```

  一个函数可以有多个形参。但**可选参数后面不能有必选参数**。

```typescript
const subString = (a: string, b?: string, c?: string): string => {
    return a + b + c
}

// 可选参数后面跟必选参数
// Error
const subString = (a: string, b?: string, c: string): string => {
    return a + b + c
}
```

  **默认参数**

  我们可以给参数添加默认值，在调用函数时，不传入参数时，则会使用参数的默认值。

```typescript
const sum = (a: number, b: number = 5): number => {
  return a + b
}

const num = sum(10); // num -> 15
const num2 = sum(10, 11); // num -> 21
```

  当给参数默认值，不限制类型时，TS会自动推断参数类型。

```typescript
// TS自动推断参数b为 number 类型
const sum = (a: number, b = 5): number => {
  return a + b
}

// Error, 不能将 string 类型赋值给 number 类型
const num = (10, '11');
```

  一个函数可以有多个有默认值的参数，且参数默认值的位置不受限制。

```typescript
// 多个默认值参数
const sum = (a: number = 10, b:number = 5): number => {
  return a + b
}

const num1 = sum(); // num1 -> 15
const num2 = sum(11); // num2 -> 16
const num3 = sum(11, 12);//  num3 -> 23
const num4 = sum(undefined, 12); //  num4 -> 22

// Error, 不能将 null 类型赋值给 number|undefined 类型
const num5 = sum(null, 12);
```

  默认参数和结构赋值的使用。

```typescript
//1.
function fn (
  {first, second}: {first: number, second: number} = {first: 1, second: 2}
): number {
  return first + second;
}

//2.
function fn (
  {first = 1}: {first?: number}
): void {
  console.log(first);
}
```

  **剩余参数**

  由于不知道函数的调用者会传多少个参数，在ES6中可以使用`...rest`参数，TypeScript中也可以使用`...rest`参数。

```typescript
const add = (a: number, ...b: number[]) => {
  let sum: number = 0;
  b.forEach((item) => {
    sum += item
  })
  return a + sum
}

const sum1 = add(1); // sum1 -> 1
const sum2 = add(1, 2); // sum2 -> 3
const sum3 = add(1, 2, 3); // sum3 -> 6
```

  剩余参数后面不能跟可选参数、默认参数和必选参数。

```typescript
// Error, 剩余参数后面不能跟必选参数。
const add = (a: number, ...b: number[], c: number): void => {
  console.log(a, b, c)
}

// Error, 剩余参数后面不能跟默认参数。
const add = (a: number, ...b: number[], c: number = 12): void => {
  console.log(a, b, c)
}

// Error, 剩余参数后面不能跟可选参数。
const add = (a: number, ...b: number[], c?: number): void => {
  console.log(a, b, c)
}

// 不能有多个剩余参数
// Error, 剩余参数必须是最后一位
const add = (a: number, ...b: number[], ...c: string[]): void => {
  console.log(a, b, c)
}
```

  **函数重载**

  在JavaScript中没有函数重载的概念。在TS中添加了函数重载的概念，我们可以通过编写重载签名来指定一个可以以不同方式调用的函数。

```typescript
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
```

  函数重载的作用是什么？

  在我看来，函数重载就是为函数添加不同的描述信息。比如，一个接受string，number类型的函数，该函数功能是可以反转传入的string和number参数。

  如果使用联合类型来实现。

```typescript
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

  然而这样的写法不能直观的描述函数，比如，`reverse`函数接受`number`类型时，返回应该也是一个`number`类型；`reverse`函数接受`string`类型时，返回应该也是一个`string`类型。而上面`reverse`函数接受一个联合类型，返回一个联合类型，并不能直观的表达。

  函数重载就是为了解决这个问题。添加函数的重载签名，来描述函数。

```typescript
// 添加函数重载签名
function reverse(x: number): number;
// 添加函数重载签名
function reverse(x: string): string;
// 函数主体（实现签名）
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

  上面代码`reverse`函数添加了两个重载签名，描述了`reverse`函数接受`number`类型的值时，返回一个`number`类型的值；接受`string`类型的值时，返回一个`string`类型的值。

  重载函数的主体是主要实现功能的地方（函数重载为函数功能添加更加详细的描述，但是函数功能的主体需要实现函数重载签名的需求）。

  这就是TS中函数的重载，用来更加详细的描述函数接收的参数类型和返回值的类型。

  **函数重载注意事项**

  **1.**重载函数的调用是根据函数的重载签名来调用的。

  如下面代码，`makeDate`函数的重载签名接收一个参数或者是三个参数。所以不接收两个参数的调用，导致报错，尽管函数的实现签名使用的是可选参数。

```typescript
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);

// Error, 没有需要实现2个参数的重载
const d3 = makeDate(1, 3);
```

​    **2.** 函数的重载签名应该有2个或者更多

  `fn`函数的实现签名虽然不接收参数，但是重载签名一个`string`类型的参数，因为重载函数的调用是根据函数的重载签名调用的。

```typescript
function fn(x: string): void;
function fn() {
  console.log(123);
}

// Error, 需要传入一个参数
fn();
```

  像上面代码`fn`函数只有一个函数签名，那么就不需要函数重载，普通的函数就能实现。

```typescript
function fn(x: string): void {
  console.log(123);
}
```

  所以一个重载函数，函数签名的个数应该大于等于2。

  **3.** 重载函数的实现签名与重载签名要兼容

```typescript
function fn(x: boolean): void;
// 参数类型不对
function fn(x: string): void;
function fn(x: boolean) {
  console.log(123);
}
```

  上面代码中`fn`函数的重载签名与实现签名不兼容。重载签名需要接收`string`或`boolean`类型的值，而实现签名只接受`boolean`类型的值，所以报错。

```typescript
// 修改实现签名，兼容重载签名
function fn(x: boolean): void;
function fn(x: string): void;
function fn(x: boolean | string) {
  console.log(123);
}
```

  下面代码中`fn`函数实现签名和重载签名不兼容。

```typescript
function fn(x: string): string;
// 函数返回值类型不兼容
function fn(x: number): boolean;
function fn(x: string | number) {
  return "oops";
}
```

  上面`fn`函数中，重载签名返回`string`或`number`类型的值，但实现签名只返回`string`类型的值（因为TS有类型推断，所以推断出`fn`函数返回`string`类型的值）。

```typescript
// 修改实现签名，兼容重载签名
function fn(x: string): string;
function fn(x: number): boolean;
function fn(x: string | number): string | boolean {
  return "oops";
}
```

  **4.**编写一个好的重载

  在使用函数重载时，有一些准则是你应该遵循的。遵循这些原则将使你的函数更容易调用，更容易理解，更容易实现。

  使用重载实现一个函数，可以获取传入字符串和数组的长度。

```typescript
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}
```

  虽然功能实现了，但是我们不能将一个可能是`string`或`array`类型的值传入该函数。 因为TypeScript 只能将函数调用解析为单个重载。

```typescript
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

// Error, 类型不匹配
len(Math.random() > 0.5 ? "hello" : [0])
```

  让我们使用一个变量接收`Math.random() > 0.5 ? "hello" : [0]`。

```typescript
// 通过TS类型推断，得到 data 类型为联合类型 string |number[]
let data = Math.random() > 0.5 ? "hello" : [0];
```

  由于重载函数的重载签名没有一个接收联合类型，所以导致报错。

  因为两个重载签字都有相同的`length`属性和相同类型的返回值，所以可以不使用重载。

```typescript
function len(x: any[] | string) {
  return x.length;
}
let data = Math.random() > 0.5 ? "hello" : [0];
```

  虽然函数重载能更好的描述函数，但官方建议尽可能使用联合类型的参数而不是重载。

  **this 指向**

  在TS中this指向规则与JavaScript相同。

```typescript
const user = {
  id: 123,
 
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

// this 指向 user
user.becomeAdmin()

// 严格模式下指向 undefined
const fn = user.becomeAdmin;
fn();
```

  通过TS的类型推断，可以知道`this`的指向。

```json
this: {
    id: number;
    admin: boolean;
    becomeAdmin: () => void;
}
```

  在`tsconfig`文件中有一个配置项，默认为`true`，修改为`false`，TS就自动推断`this`类型为`any`。

````json
// tsconfig.json
{
  "compilerOptions": {
    // 默认为true
    "noImplicitThis": false;
  }
}
````

```typescript
// this 类型为 any
const user = {
  id: 123,
 
  admin: false,
  becomeAdmin: function () {
    // this 类型为 any
    this.admin = true;
  }
};
```

  对于一些会导致`this`改变的隐式转换，TS给了很好的报错警告。

```typescript
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
    return function() {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
          
      // this 类型为 any
      return {suit: this.suits[pickedSuit], card: pickedCard % 13};
    }
  }
}
```

  只需要解决隐式转换的问题就可以了。

```typescript
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function () {
    // 将函数改为箭头函数
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};
```

  **this 参数**

  在TS中，我们可以显示的指定TS的类型，通过this参数(this参数一般在形参第一个)。

```typescript
interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // 显示的给函数绑定 this 类型
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
```

  你可能还见过`this: void`的写法，这里的意思是告诉TS，当前函数不需要`this`。

```typescript
const user = {
  a: 1,
  b: 2,
  // Error, void 上不存在 a
  add(this: void){
    console.log(this.a);
  }
}
```

  要么修改`this`类型；要么将函数改为箭头函数，因为箭头函数不存在`this`。

```typescript
// 修改 this 类型，这里为了方便修改为 any, 实际项目中使用接口定义类型
const user = {
  a: 1,
  b: 2,
  add(this: any){
    console.log(this.a);
  }
}
```

##### 10. any

  `any`表示任意类型。

```typescript
let num: number = 10;
// Error
num = 'Tom'
```

  一个普通类型的变量，在赋值时，只能赋值相同类型的值。如上面代码 num 只能赋值为`number`类型的变量。

  但是`any`不一样，声明`any`类型的变量可以被任意类型赋值。

```typescript
let anyVal: any;

anyVal = 'Tom';
anyVal = 10;
anyVal = true;
anyVal = {};
anyVal = [];
anyVal = () => {}
```

```typescript
// MyType 类型为 true
type MyType = string extends any ? true : false;
type MyType = void extends any ? true : false;
type MyType = number extends any ? true : false;
type MyType = object extends any ? true : false;
type MyType = Function extends any ? true : false;
type MyType = string[] extends any ? true : false;
```

  `any`类型的值可以被赋任何类型的值，也可以赋值给任何类型， 除了`never`类型。

```typescript
let a: any = null;
let num: number = a;
let str: string = a;
let obj: object = a;
let fn: Function = a;
let n: null = a;
let u: undefined = a;
```

  在TS中尽量少使用`any`类型的变量，因为TS不会去检查`any`变量身上的属性和方法是否存在，这就导致在编写TS代码时，无法给出良好的提示，甚至是报错的提示。

```typescript
const user: any = {
  name: 'Tom',
  age: 18
}

// Error, 由于 user 是 any 类型，所以导致TS无法检查user变量的值。
user.getName();
```

  由于`any`类型的问题，导致TS无法检查出问题，特别是隐式转换的`any`类型。

```typescript
// 由于没指定 a 和 b 的类型, 所以TS通过隐式转换将 a 和 b 设置为 any 类型。
const fn = (a, b): void => {
  console.log(123);
}
```

  如果你想TS检测到有隐式转换的`any`类型时报错，那么在`tsconfig.json`文件中进行配置。

```json
{
  "compilerOptions": {
    // 默认为 true 
    "noImplicitAny": true,
  }
}
```

##### 11. unknown

  `unknown`类型是你不知道是类型时使用。`unknown`类型除了`any`和`unknown`外不能赋值给其他类型，其他类型可以赋值给`unknown`。

```typescript
let un: unknown;
let anyVal: any = un;
// Error, 不能将 unknown 赋值给 number
let num: number = un;
// Error, 不能将 unknown 赋值给 null
let n: null = un;

// 其他类型赋值给 unknown 类型
let un: unknown;
let str: string = 'Tom';
let num: number = 10;
let nu: null = null;

function fn (): never {
  throw new Error('error')
}

un = str;
un = num;
un = nu;

let ner: never = fn();
un = ner
```

  `unknown`类型大多在处理断言上被使用。当我们想让一个类型的变量接收另一个类型的变量的值时，就可以使用断言。

```typescript
let str: string;
// as 表示断言。
// Error
str = 10 as string;
```

  虽然断言能实现一些类型的赋值问题，但TS认为将`number`类型的值断言成`string`类型是错误的，所以得先断言成`unknown`类型，再断言成`string`类型。

```typescript
let str: string;
str = 10 as unknown as string;
```

##### 12. 对象

  在TS中我们可以定义对象的类型。

```typescript
let obj: {name: string, age: number} = {name: 'Tom', age: 18};
```

  多一个或者少一个属性时，就会报错。

```typescript
// Error, 类型不匹配
let obj: {name: string, age: number} = {name: 'Tom', age: 18, sex: 'Male'};

// Error, 类型不匹配
let obj: {name: string, age: number} = { name: 'Tom' };
```

   **可选属性**

  TS限制对象时需要符合规定的对象类型，但有时候需要对象的属性是可选的，这时需要用到可选属性。

```typescript
// age 属性是可选的
let obj: {name: string, age?: number} = {name: 'Tom', age: 18};
let person: {name: string, age?: number} = {name: 'Tom'};
```

​    **readonly 对象**

  对象的`value`只可读，不可被更改。通过`readonly`修饰符修饰。

```typescript
let obj: {readonly name: string, age: number} =  {name: 'Tom', age: 18};
// 修改name的值时, 报错。因为name只可读。
obj.name = 'Jerry';
```

  如果想要整个对象属性只可读，可以使用断言`as const`。

```typescript
// as const将变量obj的值定义为readonly object, 再通过TS类型推断, 就可以得到obj的类型是 readonly 类型的对象
let obj = {name: 'Tom', age: 18} as const;

// Error, age 属性只可读
obj.age = 20;
```

  还可以使用TS内置的工具类`Readonly`类。

```typescript
let obj: Readonly<{name: string, age: number}> = {
  name: 'Tom',
  age: 18
}

// Error, age 属性只可读
obj.age = 20;
```

   **接口**

  在实际项目中，一般使用接口定义对象类型。

```typescript
interface Obj {
  name: string,
  age: number,
}

let obj: Obj = {name: 'Tom', age: 18}
```

  这里只是简单的介绍接口的用法，后面还有跟高级的用法。

  **对象方法**

  在对象中，可以保存函数，那么该如何定义对象的方法。

```typescript
// 直接定义
// 1.
let obj: { add: (a: number, b: number) => number } = {
  add: (a, b) => {
    return a + b;
  },
};
// 2.
let obj: { add(a: number, b: number): number } = {
  add: (a, b) => {
    return a + b;
  },
};


// 使用 interface 定义
// 1.
interface Obj {
  add(a: number, b: number): number
}

let obj: Obj = {
  add: (a, b) => {
    return a + b;
  },
};
// 2.
interface Obj {
  add: (a: number, b: number) => number
}

let obj: Obj = {
  add: (a, b) => {
    return a + b;
  },
};
```

  **对象访问器**

  ES6新增对象属性的`set`和`get`的方法。

```typescript
let obj: {name: string} = {
  get name() {
    return "Tom";
  },
  set name(val) {
    this.name = val;
  },
};
```

  **额外的类型检查**

  当我们在TS使用对象字面量声明对象时，TS会给特殊对待这些对象。

```typescript
function getLength(x: {length: number}) {
  return x.length;
}
```

  当我们声明一个`getLength()`方法时，只要传入的参数有length属性就不会报错了。

```typescript
// Error, 因为参数没有 num 属性
getLength({length: 3, num: 10});
```

  解决这个方法可以使用断言。

```typescript
// 断言
getLength({length: 3, num: 10} as {length: number});
```

  或者给函数形参添加索引签名。

```typescript
function getLength(x: {length: number, [x: string]: any}) {
  return x.length;
}
getLength({length: 3, num: 10});
```

  当然，我们还可以避开额外的类型检查。

```typescript
function getLength(x: {length: number}) {
  return x.length;
}
const obj = {length: 3, num: 10};
getLength(obj);
```

  当我们使用变量时，TS就不会进行额外的类型检查。



### type 类型别名

  给一个类型取别的名称。

```typescript
type Person = {
  name: string;
  age: string
}
```

  扩展属性，通过`&`

```typescript
type User = Person & {
  id: number
}

const user = {
  name: 'Tom',
  age: 18,
  id: 1
}
```



### 字面量类型

  我们可以使用字面量类型来约束变量的值。

```typescript
let username: 'Tom';
username = 'Tom';
// Error, 不能将 Jerry 赋值给 Tom
username = 'Jerry';
```

  有点像使用`const`定义的变量。

  除了字符串字面量类型，还有数字字面量、Boolean字面量、数组、对象等。

```typescript
let num: 10 = 10;
let flag: true = true;
let arr: ['Tom', 18] = ['Tom', 18];
let obj: {name: 'Tom', age: 18} = {name: 'Tom', age: 18};
```

  一般字面量类型使用最多的还是和联合类型一起使用。

```typescript
let location: 'Up' | 'Down' | 'Left' | 'Right';
location = 'Up';
location = 'Down';
// Error, 不能将 Tom 赋值给 location
location = 'Tom';
```



### 模板字面量类型

  TS版本升级后新增的一个类型，使用模板字符串定义模板字面量类型。

```typescript
let str: `TS-${string}`;
str = 'TS-string';
// Error, 类型不对
str = 'Tom';
```

  使用模板字面量类型，我们可以限制字符串一些文字内容。

```typescript
let age: `my age is ${number}`;
age = 'my age is 18';
// Error, string 不能赋值给 number
age = 'my age is "18"';
```

  模板字面量类型可以跟索引签名、接口、类、联合类型、交叉类型等配合使用。

```typescript
let location: 'Up' | 'Down' | 'Left' | 'Right';
// LocationType 类型为  "to Up" | "to Down" | "to Left" | "to Right"
type LocationType = `to ${typeof location}`;
```

  `type`是TS关键字，可以给一个类型起一个别名。

  如果模板字面量有多个插值，每个插值都是联合类型，那么这些联合类型将会交叉相乘。

```typescript
type A = 'name' | 'age';
type B = 'string' | 'number' | 'boolean';

type C = `${A}: ${B}`;
```

  `C`的类型是

```typescript
 "name: string" | "name: number" | "name: boolean" | "age: string" | "age: number" | "age: boolean"
```

  模板字面量还可以使用TS内置的工具类和一些关键字。

```typescript
interface Person {
  name: string;
  age: number;
}

type Getters<T> =  `${string & keyof T}Changed`;

type Fn = Getters<Person>;
```

  `Fn`的类型为

```typescript
"nameChanged" | "ageChanged"
```

  目前在`TS4.7`版本中，模板字面量类型的插值只能是`string`、`number`、`boolean`、`bigint`、`null`和`undefined`，或者这几个类型的联合类型和交叉类型。



### 条件类型

  在大多数有用的程序的核心，我们必须根据输入来做决定。JavaScript程序也不例外，条件类型有助于描述输入和输出的类型之间的关系。

  在TS中我们使用`extends`关键字来进行类型的条件判断。

```typescript
interface Person {
  name: string
}

interface User extends Person {
  age: number
}

// string
type Example1 = User extends Person ? string : number;
// number
type Example2 = Person extends User ? string : number;
```

  有点像JavaScript的三元表达式，这里的`extends`不是继承的意思，表达的大概的意思是左侧的类型是否能分配给右侧类型？

```typescript
SomeType extends OtherType ? TrueType : FalseType;
```

  当左侧的类型可分配给右侧的类型时，那么你可以获得`TrueType`类型，否则是`FalseType`

  条件类型最大的优点在于可以跟泛型一起使用。

```typescript
interface IdLabel {
  id: number
}
interface NameLabel {
  name: string
}

type NameOrId<T extends number | string> = T extends number ? IdLabel:  NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  if(typeof idOrName === 'string') {
    return {name: idOrName} as NameOrId<T>
  } else {
    return {id: idOrName} as NameOrId<T>
  }
}

const username = createLabel('Tom');
const id = createLabel(1);
```

  `T extends number | string`表示约束T的类型为`string`或`number`；`NameOrId`则判断`T`的类型是`string`还是`number`。

  **条件类型约束**

  当我们使用泛型时，想约束泛型，让这个泛型类型有某个属性，那么就可以用到条件类型约束。

```typescript
// Error, T 上没有 message 属性
type MessageOf<T> = T["message"];
```

  像上面代码，我们想要`T`身上的`message`属性，但是`T`可能是`number`、`string`、或者`boolean`等一些不能添加属性的类型；所以，我们应该约束`T`，让它的身上必须有`message`属性。

```typescript
// 条件类型约束
type MessageOf<T extends {message: any}> = T["message"];
```

  **分布式条件类型**

  当条件类型作用于泛型类型时，给定的泛型是联合类型时，联合类型变得可*分配。*

```typescript
type MyType<T> = T extends string ? string : number;

// TypeA 类型为 string | number
type TypeA = MyType<string | number>
```

  上面代码中，当`T`联合类型时，`T`会先拿`string`类型去比对，在拿`number`类型去比对，最后得到联合类型`string | number`。

  如果联合是同一个会合并为一个类型。

```typescript
type MyType<T> = T extends any ? string : number;

// TypeA 类型为 string
type TypeA = MyType<string | number>
```

  因为`T`为联合类型，所以会一个个去匹配，返回的联合类型为`string | string`，最终合并为一个类型`string`。

  如果你不想进行类型的分配，那么可以使用`[type]`，将每一个类型括起来。

```typescript
// 使用 [] 将类型包裹
type MyType<T> = [T] extends [string] ? string : number;

// TypeA 类型为 number
type TypeA = MyType<string | number>
```



### 索引访问类型

  我们可以使用索引访问类型的方式来访问另一个类型的的特定属性。访问不存的索引时将会报错。

```typescript
interface User {
  id: number,
  name: string;
  age: number;
}

// Age 为 number 类型
type Age = User['age'];
```

  索引本身就是一种类型，所以我们可以使用其他类型替代它，比如联合类型、`keyof`等。

```typescript
interface User {
  id: number,
  name: string;
  age: number;
  isActive: boolean;
}

// 联合类型: NameOrId 类型为 number | string
type NameOrId = User['age' | 'name'];

// keyof: UserValueType 类型为 string | number | boolean
type UserValueType = User[keyof User];

// 其他类型: NameOrId 类型为 number
type Age = 'age'
type UserAge = User[Age];
```

  对于数组索引是`number`类型的索引，可以使用`[number]`。

```typescript
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = typeof MyArray[number];
```

  `Person`的类型为

```typescript
{
  name: string,
  age: number
}
```

  你还可以连续的使用索引访问类型。

```typescript
// Age 为 number 类型
type Age = typeof MyArray[number]["age"];
```

  对于索引来说，一定得是一个类型。

```typescript
interface Person {
  name: string;
  age: number;
}

const key = 'name';
type KeyType = 'name';

// Name1 类型为 string
type Name1 = Person[KeyType];

// Error, key 在这里表示值, 不是类型
type Name2 = Person[key];

// 可以使用 typeof
// Name3 类型为 string
type Name3 = Perso[typeof key];
```



### 映射类型

  当你想将一个`interface`里所有属性的类型都变成`string`类型，你可能会重新定义一个新的`interface`，但如果这个接口的属性非常多，那么一个个添加会变得非常麻烦，在TS中我们可以使用映射类型的方式解决这个问题。

```typescript
interface Person {
  name: any;
  address: any
}

type MapToString<T> = {
  [propName in keyof T]: string
}

type PersonString = MapToString<Person>;
```

  `PersonString`的类型为

```typescript
{
    name: string;
    address: string;
}
```

  首先，`keyof`关键字可以拿到`T`身上的`key`，在这里就是`Person`身上的`name`和`address`；其次，`... in ...`用来遍历获得的`key`，`propName`是每一个`key`的变量名称；`: string`是使每一个`key`的类型为`string`类型。

  简单理解为遍历一个类型身上的`key`，再将每个·`key`修改为`string`类型。

**映射修饰符**

  在映射的时候，你可以使用两个映射修饰符`readonly`和`?`；通过`+`或`-`来添加或者去除。

```typescript
// -readonly 表示去掉 readonly 修饰符
// T[propName] 索引访问类型
type RequiredType<T> = {
  -readonly [propName in keyof T]: T[propName];
}

// +? 表示将每一个变为可选
type AvailableType<T> = {
  [propName in keyof T] +?: T[propName];
}
```

**通过 as 映射新的 key**

  在 TypeScript 4.1 及更高版本中，我们可以通过`as`重新映射映射类型。

```typescript
interface Person {
  name: string;
  age: number
}

type Getters<T> = {
  [propName in keyof T as `get${Capitalize<propName & string>}`]: T[propName];
}

type LazyPerson = Getters<Person>;
```

  此时，`LazyPerson`的类型为

````typescript
{
    getName: () => string;
    getAge: () => number;
    getLocation: () => string;
}
````

  你还可以通过`Exclude`工具类过滤不想要的`key`

```typescript
interface Person {
  name: string;
  age: number
}

type RemoveAgeField<Type> = {
    [key in keyof Type as Exclude<key, 'age'>]: Type[key]
};

type Name = RemoveAgeField<Person>;
```

  此时，`Name`的类型为

```typescript
{
  name: string;
}
```

  你可以映射任何的联合类型

```typescript
type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}
 
type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };
 
type Config = EventConfig<SquareEvent | CircleEvent>
```

  `Config`的类型为

```typescript
{
    square: (event: SquareEvent) => void;
    circle: (event: CircleEvent) => void;
}
```

  映射类型可以很好的与条件类型一起使用。

```typescript
type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};
 
type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};
 
type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
```



### 联合类型

  联合类型就是一个变量可以接收不同的类型。我们有一个变量`sex`只能赋值为`male`和`female`，这时我们就可以用联合类型。

```typescript
let sex: "male" | "female" = "male";
// Error, 不能将 string 类型赋值给 "male" | "female" 类型
sex = 'Tom';
```

  `"male" `和` "female"`类型也叫字面量类型，对于这种需求通过枚举会更好。

  定义一个数组只能接收`string`或`number`类型，就可以使用联合类型。

```typescript
let arr: (string|number)[] = [1, 2, 3, 'hello', 'world']
```

  函数的可选参数本质上是联合类型。区别是在调用时，可选参数可以在调用时不传参数，而联合类型需要传入`number`类型或`undefined`。

```typescript
// 参数a的类型是 number|undefined
function fn (a?: number): void {
  console.log(a);
}
// 等价于
function fn (a: number|undefined): void {
  console.log(a);
}
```

  **访问联合类型的属性和方法**

  当我们访问联合类型的属性和方法时，TS不知道到底是哪一个类型，就只能访问联合类型共同的属性和方法。比如，我们定义一个`(string | number)[]`联合类型的数组。

```typescript
let arr: (string | number)[] = ['hello'];
```

  上面代码我们往联合类型的数组赋值时，只赋值一个`hello`字符串，那么我们想知道`hello`字符串的长度，就会通过`length`访问，但是TS会报错。

```typescript
let arr: (string | number)[] = ['hello'];
// Error, number 不存在 length 属性
console.log(arr[0].length);
```

  因为`arr`是联合类型，只能访问`number`和`string`的共同属性和方法，因为TS不知道第一项到底是`string`类型还是`number`类型。

  为了解决这个问题，我们可以使用断言或者类型判断。

```typescript
let arr: (string | number)[] = ['hello'];

// 断言
(arr[0] as string).length;
// 类型判断
if(typeof arr[0] === 'string') {
  console.log(arr[0].length);
}
```

  如果不使用断言或者类型判断，那么只能访问共同的属性和方法，也就是`toString`、`toLocaleString`和`valueOf`。

  **联合类型被赋值时，TS会自动推断类型**

  联合类型被赋值时，TS会自动推断类型，比如一个变量接收`string | number`联合类型。当这个变量被赋值时，TS会自动推断这个变量的类型。

```typescript
let str: number | string = 'Tom';

// TS 自动推断 str 类型为 string
console.log(str.length);
```



### 交叉类型

  交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。

```typescript
interface Name {
  name: string;
}

interface Age {
  age: number;
}

type Person = Name & Age;

let person: Person = {
  name: 'Tom',
  age: 18
}
```

  如果交叉类型之间有类型冲突，那么冲突的类型合并的时候会以交叉类型的方式合并。

```typescript
interface A {
  person: {
    name: string
  }
}

interface B {
  person: {
    age: number
  }
}

type Person = A['person'] & B['person'];

let person: Person = {
  name: 'Tom',
  age: 18
}
```



### TS运算符

##### in 

  在JavaScript中，`in`操作符可以判断一个属性是否在这个对象上，还可以用来遍历对象。在TS中`in`操作符可以操作类型。

```typescript
interface Person {
  name: string;
  money: number
}

interface User {
  name: string; 
  age: number;
  id: number
}

function printMsg(arg: Person | User) {
  if ('id' in arg) {
    console.log(arg.age);
  } else {
    console.log(arg.money);
  }
}
```

  除了判断类型的`key`，还能遍历类型。

```typescript
type A = 'name' | 'title' | 'article';

type B<T> = {
  [key in T & string]: string
}


type C = {
  [key in A]: any
}

type D = B<A>
```

  此时`C`和`D`的类型是

```typescript
// C
{
    name: any;
    title: any;
    article: any;
}

// D
 {
    name: string;
    title: string;
    article: string;
}
```

##### typeof

  在JavaScript中，我们可以使用`typeof`获取值的类型，但是获取的一些类型中，并没有形状的约束，所以，在TS中，使用`typeof`可以获取更详细的值的类型。

```typescript
let obj = {
  name: 'Tom',
  age: 18
}

type Person = typeof obj;

const person: Person = {
  name: 'Jerry',
  age: 18
}
```

  `person`的类型为

```typescript
{
    name: string;
    age: number;
}
```

  TS对typeof进行一个限制，就是不能在表达式中使用。

```typescript
function fn<T> (arg: T) {
  return arg
}

// Error
let str: typeof fn<string>('');
```

##### keyof

  使用`keyof`操作类型可以获得`string`或`number`的联合类型的`key`，对于类中的`protected`、`private`和`#`的`key`是不会生效的。

```typescript
let obj = {
  name: 'Tom',
  age: 18
}
// NameAndAge 类型为 'name' | 'age'
type NameAndAge = keyof typeof obj;

const arr = ['name', 'age', 'title'];
// ArrNumber 类型为 number | 'push' | 'pop' | 'at' | ...
type ArrNumber = keyof typeof arr;

// StringKey 的类型为 number | typeof Symbol.iterator | "toString" |...
type StringKey = keyof string;
```

  如果类型的`key`是索引签名，那么`keyof`获取的是索引类型

```typescript
interface A {
  [x: string]: string
}
// C 的类型为 string | number
type C = keyof A;

interface B {
  [x: number]: string
}
// D 的类型为 number
type D = keyof B;
```

  由于当使⽤数值索引时，JavaScript 在执⾏索引操作时，会先把数值索引先转换为字符串索引。所以`C`的类型为`string | number`。

##### infer

  在条件类型或类型约束的时候使用，根据你传递的类型来推断类型。

```typescript
type Names = string[];
type Ids = number[];

type A<T> = T extends (infer P)[] ? P : T;

// C 的类型为 string
type C = A<Names>;

// D 的类型为 number
type D = A<Ids>;
```

  当推导的名称相同并且都处于逆变的情况下，则推导结果为交叉类型。

```typescript
type Bar<T> = T extends {
  a: (x: infer U) => void;
  b: (x: infer U) => void;
} ? U : never;

// type T1 = string
type T1 = Bar<{ a: (x: string) => void; b: (x: string) => void }>;

// type T2 = never
type T2 = Bar<{ a: (x: string) => void; b: (x: number) => void }>;
```

  而处于协变的情况下，将会推导为联合类型。

```typescript
type Bar<T> = T extends {
  a: infer U;
  b: infer U;
}
  ? U
  : never;

// type T1 = string
type T1 = Bar<{ a: string; b: string }>;

// type T2 = string | number
type T2 = Bar<{ a: string; b: number }>;
```

  在`TS4.7`版本中，`infer`可以使用`extends`进行约束。



### 内置工具类

##### Partial

  将所有属性变为可选。

```typescript
interface Person {
  name: string;
  age: string;
}

type AvailablePerson = Partial<Person>
```

  `AvailablePerson`类型为

```typescript
{
    name?: string | undefined;
    age?: string | undefined;
}
```

   `Partial`工具类的源码

```typescript
type Partail<T> = {
  [key in keyof T]?: T[key] | undefined;
}
```

##### Required

  将可选属性变为必选属性。

```typescript
interface Person {
  name?: string;
  age?: string;
}

type RequiredPerson = Required<Person>
```

  此时`RequiredPerson`类型为

```typescript
{
   name: string;
   age: string;
}
```

  `Readonly`的源码

```typescript
type Required<T> = {
  [key in keyof T]-?: T[key];
}
```

##### Readonly

  将一个可读写属性的类型，变为只读属性。

```typescript
interface Person {
  name: string;
  age: string;
}

type ReadonlyPerson = Readonly<Person>
```

  此时`ReadonlyPerson`类型为

```typescript
{
    readonly name: string;
    readonly age: string;
}
```

  `Readonly`的源码

```typescript
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
}
```

##### Record

  构造一个对象类型，其属性键为`Keys`，联合类型；其属性值为`Type`。

```typescript
type CatName = 'Tom' | 'boris';
interface CatInfo {
  age: number;
  eat(): void;
}

type Cats = Record<CatName, CatInfo>
```

  `Cats`类型为

```typescript
{
  Tom: {
     age: number;
  	 eat(): void;
  },
   boris: {
     age: number;
  	 eat(): void;  
   }
}
```

  `Recoed`源码为

```typescript
type Record<T extends string | number | symbol, P> = {
  [key in T]: P
}
```

##### Pick

  在一个类型里选择里面的某些`key`，`key`只能是`string`或`number`的联合类型。

```typescript
interface User {
  name: string;
  age: number;
  id: number;
  password: number;
}

type Person = Pick<User, 'name' | 'age'>
```

  `Person`的类型为

```typescript
{
    name: string;
    age: number;
}
```

  `Pick`的源码

```typescript
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
}
```

##### Exclude  

  移除联合类型的某些类型。

```typescript
type TUnion = string | number | (() => void);
type Test = Exclude<TUnion, Function>;
```

  `Test`的类型为

```typescript
string | number
```

  `Exclude`的源码

```typescript
type Exclude<T, U> = T extends U ? never : T
```

  由于联合类型会一个个去比较，所以`Test`返回的结果是`string | number | never`，但是`never`类型是所有类型的子类型，所以最终结果为`string | number`。

##### Extract

  左侧类型是否能分配给右侧类型，如果能，那么获取两个类型之间的共同类型。

```typescript
interface User {
  name: string
  id: number
}

interface Person {
  name: string
}

type A = Extract<User, Person>
```

  `A`的类型为`User`。

```typescript
// T0 的类型为 'a'
type T0 = Extract<"a" | "b" | "c", "a" | "f">;

// T1 的类型为 '(() => void)'
type T1 = Extract<string | number | (() => void), Function>;
```

  `Extract`的源码

```typescript
type Extract<T, U> = T extends U ? T : never
```

##### Omit

  删除某个类型中的某些`key`。

```typescript
interface User {
  name: string;
  age: number;
  id: number;
  password: number;
}

type Person = Omit<User, 'id' | 'password'>
```

  `Person`的类型为

```typescript
{
    name: string;
    age: number;
}
```

  `Omit`的源码

```typescript
type Omit<T, K extends string | number | smybol > = {
  [key in Exclude<keyof T, K>]: T[key]
}
```

   利用`Pick`也可以实现。

```typescript
type MyOmit<T, K> = Pick<T, Exclude<keyof T, K>>
```

##### NonNullable

  排除结构中的`null`和`undefined`。

```typescript
type Test = string | null | undefined;

// T0 的类型为 string
type T0 = NonNullable<Test>;
```

  NonNullable的源码

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
```

##### Parameters

  获取函数的参数，将每个参数依次放置在元组中。

```typescript
// T0 的类型为 []
type T0 = Parameters<() => void>;

// T1 的类型为 [string]
type T1 = Parameters<(arg: string) => void>;

// T2 的类型为 [string, number?]
type T2 = Parameters<(arg: string, arg2?: number) => void>;
```

  当传入非函数时会报错，但是`never`和`any`不会报错。

```typescript
// Error, 不满足约束条件
type T0 = Parameters<{}>;
type T1 = Parameters<'123'>;

// T2 的类型为 unknown[]
type T2 = Parameters<any>;

// T3 的类型为 never
type T3 = Parameters<never>;
```

  当传入的类型是一个泛型函数时，返回的类型为`[unknown]`。

```typescript
// TO 的类型为 [unknown]
type T0 = Parameters<<T>(arg: T) => void>;
```

  `Parameters`的源码

```typescript
type Parameters<T extends (...arg: any) => any> = 
T extends (...arg: infer P) => any ? P : never;
```

##### ReturnType

  获取函数返回值类型。

```typescript
// TO 的类型为 string
type T0 = ReturnType<() => string>;

// T1 的类型为 void
type T1 = ReturnType<(s: string) => void>;

// T2 的类型为 number[]
type T2 = ReturnType<<T extends U, U extends number[]>() => T>;
```

  如果传入类型不是函数，那么会报错，除了`any`和`never`。

```typescript
// Error, 不满足泛型约束
type T0 = ReturnType<string>;

// T1 的类型为 any
type T1 = ReturnType<any>;

// T2 的类型为 never
type T2 = ReturnType<never>;
```

  `ReturnType`的源码

```typescript
type ReturnType<T extends (...arg: any) => any> = 
T extends (...arg: any) => infer R ? R : never;
```

##### ConstructorParameters

  获取构造函数参数类型并放入元组中或数组中。

```typescript
// T0 的类型为 [string]
type T0 = ConstructorParameters<new(arg: string) => void>;

// T1 的类型为 []
type T1 = ConstructorParameters<new() => void>;

// T2 的类型为 [number[]]
type T2 = ConstructorParameters<new(arg: number[]) => void>             

// T3 的类型为 [string[], number?]
type T3 = ConstructorParameters<new(arg: string[], arg2?: number) => void>
                                
// T4 的类型为 [string[], number[]]
type T4 = ConstructorParameters<new(arg: string[], arg2: number[]) => void>  

// T5 的类型为 number[]
type T5 = ConstructorParameters<new(...arg: number[]) => void>  
```

  当传入不是构造函数则会报错，除了`any`和`never`。

```typescript
// Error
type T0 = ConstructorParameters<(arg: string) => void>;

// T1 的类型为 unknown[]
type T1 = ConstructorParameters<any>;

// T2 的类型为 never
type T2 = ConstructorParameters<never>;
```

  `ConstructorParameters`的源码

```typescript
type ConstructorParameters<T extends abstract new(...arg: any) => any> = 
T extends abstract new(...arg: infer P) => any ? P : never
```

  为什么`T`要约束为抽象类的构造函数？因为抽象类也具有构造函数，也可以传入参数。

##### InstanceType

  获取构造函数返回的实例类型。

```typescript
class Person {
  name!: string
}

// T0 的类型为 Person
type T0 = InstanceType<typeof Person>;

// T1 的类型为 Person
type T1 = InstanceType<new(arg: number)=> Person>;

// T2 的类型为 void
type T2 = InstanceType<new()=> void>
```

  传入没有构造签名的类型则会报错，除了`any`和`never`。

```typescript
// Error, 没有满足约束条件
type T0 = InstanceType<typeof Person>;

// T1 的类型为 any
type T1 = InstanceType<any>;

// T2 的类型为 never
type T2 = InstanceType<never>
```

  `InstanceType`源码

```typescript
type InstanceType<T extends abstract new(...arg: any)=> any> = 
T extends abstract new(...arg: any)=> infer R ? R : never;
```

##### Intrinsic String Manipulation Types

###### Uppercase

  将小写字符串转换为大写。

```typescript
type Name = 'Tom' | 'Jerry';
// UpperStr 类型为 'TOM' | 'JERRY'
type UpperName = Uppercase<Name>;
```

###### Lowercase

  将大写字符串转换为小写。

```typescript
type Name = 'Tom' | 'Jerry';
// LowerName 类型为 'tom' | 'jerry'
type LowerName = Lowercase<Name>;
```

###### Capitalize

  将字符串第一个首字母大写。

```typescript
type Name = 'tom' | 'jerry';
// LowerName 类型为 'Tom' | 'Jerry'
type CapName = Capitalize<Name>;
```

###### Uncapitalize

  将字符串第一个转换为小写。

```typescript
type Name = 'Tom' | 'Jerry';
// unCapName 类型为 'tom' | 'jerry'
type unCapName = Uncapitalize<Name>;
```

###### 总结

  操作字符串大小写的内置类，TS没有公开内部具体怎么定义的。



### 枚举(enum)

##### 简介

  枚举是TS新增的功能，在JavaScript中没有。

  在JavaScript中定义常量使用的是`const`，但如果定义多个常量，且这些常量之间还有关联，那么我们可以定义一个对象来保存这些常量。

```javascript
const Location = {
  Up: 'Up',
  Down: 'Down',
  Left: 'Left',
  Right: 'Right'
}

// 可以随意更改
Location.Up = 'Upward';
```

  对象里的值可以随意更改，这就会导致常量被修改。为了解决这个问题，TS使用枚举定义常量。

```typescript
enum Location {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

  
// Error, 因为 Location 只可读
Location.Up = 'Upward';
```

##### 1. 数字枚举

  默认情况下，枚举的值是数值，从0开始自增。

```typescript
enum Location {
  Up,
  Down,
  Left,
  Right
}

console.log(Location.Up); // 0
console.log(Location.Down); // 1
console.log(Location.Left); // 2
console.log(Location.Right); // 3
```

  你也可以设置值，后面的值会根据前面的值自增。

```typescript
// 1.
enum Location {
  Up = 2,
  Down,
  Left,
  Right
}

console.log(Location.Up); // 2
console.log(Location.Down); // 3
console.log(Location.Left); // 4
console.log(Location.Right); // 5

// 2.
enum Location {
  Up,
  Down = 2,
  Left,
  Right
}

console.log(Location.Up); // 0
console.log(Location.Down); // 2
console.log(Location.Left); // 3
console.log(Location.Right); // 4

// 3.
enum Location {
  Up,
  Down = 0,
  Left,
  Right
}

console.log(Location.Up); // 0
console.log(Location.Down); // 0
console.log(Location.Left); // 1
console.log(Location.Right); // 2

// 4. 
enum Location {
  Up,
  Down,
  Left = 0,
  Right
}

console.log(Location.Up); // 0
console.log(Location.Down); // 1
console.log(Location.Left); // 0
console.log(Location.Right); // 1
```

  可以设置多个值。

```typescript
enum Location {
  Up = 5,
  Down = 4,
  Left = 6,
  Right = 8,
}

console.log(Location.Up); // 5
console.log(Location.Down); // 4
console.log(Location.Left); // 6
console.log(Location.Right); // 8
```

  **计算成员**

  计算成员要放在枚举最后。

```typescript
function getSomeValue() {
  return 1;
}

enum E {
  A = getSomeValue(),
// Error, 枚举必须有初始值
  B,
}
```

  由于`E.A`是通过计算出来的，所以得放置在枚举的最后。

```typescript
function getSomeValue() {
  return 1;
}

enum E {
  A,
  B = getSomeValue(),
}
```

  枚举可以有多个计算成员。

```typescript
function getSomeValue() {
  return 1;
}

enum E {
  A,
  B = getSomeValue(),
  C = 'hello'.length
}

console.log(E.A, E.B, E.C); // 0, 1, 5
```

 ```typescript
function getSomeValue() {
  return 1;
}

enum E {
  A,
  B = getSomeValue(),
// Error, 枚举必须有初始值
  C,
}
 ```

##### 2. 字符串枚举

  枚举的值可以是数值，还可以是字符串。

```typescript
enum Location {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
```

##### 3. 常数枚举

  使用`const`定义的枚举，叫常数枚举（常量枚举）。

```typescript
// 字符串枚举
enum Location {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
  
// 常数枚举
const enum Location {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
```

  常量枚举和字符串枚举、数字枚举的区别就是在编译成JavaScript代码时，常量枚举不会为枚举编译成任何的JavaScript代码，并且不能包含计算常量。

  字符串枚举编译过程(es2022)

```typescript
// 字符串枚举编译前
enum Locations {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
  
console.log(Locations.Up);
  
// 字符串枚举编译后
"use strict";
var Locations;
(function (Locations) {
    Locations["Up"] = "Up";
    Locations["Down"] = "Down";
    Locations["Left"] = "Left";
    Locations["Right"] = "Right";
})(Locations || (Locations = {}));
console.log(Locations.Up);
```

  常量枚举在编译过程(es2022)

```typescript
// 常量枚举编译前
const enum Locations {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
  
console.log(Locations.Up);
  
// 常量枚举编译后
// 没有编译成JavaScript代码
"use strict";
console.log("Up" /* Locations.Up */);
```

##### 4. 异构枚举

  从技术的角度来说，枚举可以混合字符串和数字来使用，但是不推荐。

```typescript
enum BooleanLikeHeterogeneousEnum {
    No = 1,
    Yes = "YES",
}

// 异构枚举的数字比字符串多一个反向反射
// 对于其他数字的反向反射, 值为 undefined
console.log(BooleanLikeHeterogeneousEnum[1]); // 'No'
```

  除非你真的想要利用JavaScript运行时的行为，否则我们不建议这样做。

##### 5. 外部枚举

外部枚举用来描述已经存在的枚举类型的形状。

```typescript
declare enum Enum {
    A = 1,
    B,
    C = 2
}
```

  外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。

##### 计算成员和常量成员

  每个枚举的成员都与之有个关联的值，可以是常量或者是计算出来的值。当满足下面情况时属于常量成员。

* 没有初始化器(初始化值)时，第一个默认值为0，后面随着递增。

  ```typescript
  // E.X 是常量
  enum E { 
    X
  }
  ```

* 没有初始化器(初始化值)且第一个枚举成员是数字常量，这种情况下当前枚举是前一个枚举自增+1。

  ```typescript
  // E1, E2都是常量成员
  enum E1 { 
    X,
    Y,
    Z 
  }

  enum E2 {
    A = 1, 
    B, 
    C
  }
  ```

* 枚举成员使用 *常量枚举表达式*初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。

  ```typescript
  // 常量枚举表达式编译前
  enum E1 { 
    X = 2 * 5
  }

  // 常量枚举表达式编译前
  "use strict";
  var E1;
  (function (E1) {
    // 编译后直接获得结果 10
      E1[E1["X"] = 10] = "X";
  })(E1 || (E1 = {}));
  ```

  当一个表达式满足下面条件之一时，它就是一个常量枚举表达式：

  * 一个枚举表达式字面量（主要是字符串字面量或数字字面量）

    ```typescript
    // X, Y 是常量成员
    enum E1 { 
      X = 1,
      Y = 'hello'
    }
    ```

  * 一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）

    ```typescript
    // X 为常量成员
    enum E1 {
      X = 1,
    }

    enum E2 {
      // 引用
      Y = E1.X,
    }
    ```

  * 带括号的常量枚举表达式

    ```typescript
    enum E1 {
      X = 1,
      Y
    }

    enum E2 {
      Z = E1.X + E1.Y,
    }
    ```

  * 一元运算符 `+`, `-`, `~`其中之一应用在了常量枚举表达式

    ```typescript
    enum E1 {
      X = +1,
      Y = -1,
      Z
    }
    ```

  * 常量枚举表达式做为二元运算符 `+`, `-`, `*`, `/`, `%`, `<<`, `>>`, `>>>`, `&`, `|`, `^`的操作对象

    ```typescript
    enum E1 {
      X = 1 + 2,
      Y = 2 - 1,
      Z = 2 * 2,
      A = 2 / 2,
      B,
    }
    ```

    若常数枚举表达式求值后为 `NaN`或 `Infinity`，则会在编译阶段报错。

##### 联合枚举与枚举成员的类型

  存在一种特殊的非计算的常量枚举成员的子集：字面量枚举成员。 字面量枚举成员是指不带有初始值的常量枚举成员，或者是值被初始化为

* 任何字符串字面量（例如： `"foo"`， `"bar"`， `"baz"`）

  ```typescript
  enum E1 { 
    X = "foo",
    Y = "bar"
  }
  ```

* 任何数字字面量（例如： `1`, `100`）

  ```typescript
  enum E1 { 
    X = 1,
    Y = 100
  }
  ```

* 应用了一元 `-`符号的数字字面量（例如： `-1`, `-100`）

  ```typescript
  enum E1 { 
    X = -1,
    Y = -100
  }
  ```

  当所有枚举成员都拥有字面量枚举值时，它就带有了一种特殊的语义。枚举成员成为了类型！

```typescript
enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  // Error
  kind: ShapeKind.Square,
  radius: 100,
}

// 修改 1.
let c: Circle = {
  kind: ShapeKind.Circle,
  radius: 100,
}

// 2.
let c: Circle = {
  // 因为 Circle.kind 的类型是 number
  kind: 100,
  radius: 100,
}
```

  另一个变化是枚举类型本身变成了每个枚举成员的 *联合*

```typescript
enum E {
    Foo,
    Bar,
}

function f(x: E) {
  // Error
    if (x !== E.Foo || x !== E.Bar) {
      // do some ...
    }
}
```

  这个例子里，我们先检查 `x`是否是 `E.Foo`。 如果通过了这个检查，然后 `||`会发生短路效果， `if`语句体里的内容会被执行。 如果，这个检查没有通过，那么 `x`则 *只能*为 `E.Foo`，因此没理由再去检查它是否为 `E.Bar`。

##### 运行时的枚举

  枚举是在运行时真正存在的对象。

```typescript
enum E {
  X,
  Y, 
  Z
}

function f(obj: { X: number }) {
  console.log(obj.X); // 0
}

f(E);
```

##### 编译时的枚举

  尽管运行时的枚举是一个真实存在的对象，keyof关键字的工作方式与你对典型对象的预期不同。相反，使用keyof typeof来获得一个将所有Enum键表示为字符串的类型。

```typescript
enum E {
  X,
  Y, 
  Z
}

// EKeys 类型是 'X' | 'Y' | 'Z'
type EKeys = keyof typeof E;
```

##### 反向映射

  除了创建一个以属性名做为对象成员的对象之外，数字枚举成员还具有了 *反向映射*，从枚举值到枚举名字。

```typescript
enum Enum {
  A, 
  B = 5
}

let nameOfA = Enum[0]; // "A"
let nameOfB = Enum[5]; // "B"
```

  TS会将上面代码编译成下面的代码。

```typescript
"use strict";
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 5] = "B";
})(Enum || (Enum = {}));
let nameOfA = Enum[0]; // "A"
let nameOfB = Enum[5]; // "B"
```

  生成的代码中，枚举类型被编译成一个对象，它包含了正向映射（ `name` => `value`）和反向映射（ `value` =>  `name`）。 引用枚举成员总会生成为对属性访问并且永远也不会内联代码。

  要注意的是*字符串枚举成员*不会生成反向映射。



### 断言

   有时TS的推断的类型不符合你的想要的类型，或者你想将一个类型更改为另一个类型，那么就可以使用断言。

##### 1. as 断言

  界面有个`input`框，`id`为`ipt`。

> <input type="input" id="ipt" />

  通过TS获取`input`DOM元素，

```typescript
const input = document.querySelector('#ipt');
```

  但`input`的类型为`Element | null`就不是我们想要的`input`元素，所以这里就可以使用断言。

```typescript
const input = document.querySelector('#ipt') as HTMLInputElement;
```

  此时变量`input`的类型变为`HTMLInputElement`。

  再比如有个`string | number | Function`联合类型的数组。

```typescript
const arr: (string | number | Function)[] = [() => { console.log(123) }];
```

  上面代码中，保存了一个函数，那么通过`arr[0]()`调用函数。

```typescript
const arr: (string | number | Function)[] = [() => { console.log(123) }];
// Error
arr[0]();
```

  因为TS推断不出来`arr[0]`的类型为`Function`，TS认为`arr[0]`还可能是`string`或`number`，但是如果你确信`arr[0]`为`Function`，那么你就可以使用断言。

```typescript
const arr: (string | number | Function)[] = [() => { console.log(123) }];
(arr[0] as Function)();
```

##### 2. <>断言

  除了as断言，还有<>断言。

```typescript
// as 断言
let str: string = 1 as unknown as string;

// <> 断言
let str: string = <string><unknown>1;
```

##### 3. 非空断言

  当获取DOM元素时，可能因为一些问题导致获取结果为`null`，所以在获取DOM时，变量的类型可能为`null`。

```typescript
const btn = document.querySelector('#btn');
```

  因为`btn`可能为`null`，直接给`btn`绑定点击事件，会导致运行时可能报错。

  解决方法可以判断，但你非常确定有这个DOM元素，且这个DOM元素必定能获取到，那么就可以使用断言和非空断言。

```typescript
//1. 判断
const btn = document.querySelector('#btn');
// 使用 es6 的可选链
btn?.addEventListener('click', () => {
  // do some ...
})

//2. 断言, 确保 button DOM元素必定存在
const btn = document.querySelector('#btn') as HTMLButtonElement;
btn.addEventListener('click', () => {
  // do some ...
})

//3. 非空断言, 确保 button DOM元素必定存在
const btn = document.querySelector('#btn');
// 使用 ! 号
btn!.addEventListener('click', () => {
  // do some ...
})

// 非空断言, 确保 button DOM元素必定存在
// 使用 ! 号
const btn = document.querySelector('#btn')!;
btn.addEventListener('click', () => {
  // do some ...
})
```

  对于函数的可选参数你也可以使用非空断言。

```typescript
function fn(x?: number): number {
  // 非空断言
  return x!**2
}

```

  但是确保你调用时传入值。

##### 总结

  断言很好用，但是一些错误的断言会导致TS错误检查，可能导致代码运行时报错。



### as const

  `as const`在TS中有不同的意义。

##### 1. 字符串

  一个`string`类型的变量使用`as const`那么这个变量将从`string`类型变成`字符串字面量`类型。有点类似es6的`const`声明的字符串。

```typescript
// str 类型是 'hello'
let str = 'hello' as const;
// Error, str 类型是 'hello'
str = 'world';
```

  不能给变量`str`指定为`string`类型，指定类型后还是可以修改`str`的值。

```typescript
let str: string = 'hello' as const;
// str 类型为 string
str = 'world';
```

##### 2. 数值

  `number`类型与`string`类型一致，使用`as const`，将会变成`数字字面量`类型。类似es6的`const`声明的数值。

```typescript
// num 类型是 10
let num = 10 as const;
// Error, num 类型是 10
num = 11;
```

  不能给变量`num`指定为`number`类型，指定类型后还是可以修改`num`的值。

```typescript
let num: number = 10 as const;
// num 类型是 number
num = 11;
```

##### 3. boolean

  `boolean`类型与`string`类型和`number`类型一致，使用`as const`将变成`字面量`类型。

类似es6的`const`声明的布尔值。

```typescript
// flag 类型是 true
let flag = true as const;
// Error, flag 类型是 true
flag = false;
```

  不能给变量`flag`指定为`boolean`类型，指定类型后还是可以修改`flag`的值。

```typescript
let flag: boolean = true as const;
// flag 类型是 boolean
flag = false;
```

##### 4. 数组

  与es6的`const`不同，数组使用`as const`会将数组类型变成元组类型。

```typescript
let arr = ['Tom', 18] as const;
```

  此时`arr`的类型为元组：

```typescript
readonly ["Tom", 18]
```

  首先不能修改`arr`的值和类型。

```typescript
let arr = ['Tom', 18] as const;

// Error, arr 只可读
arr[0] = 'Jerry';

// Error, 类型不对 20 不能赋值给 18
arr = ['Tom', 20];

// arr 不存在 push
arr.push(22);

// arr 不存在 pop
arr.pop();
```

  如果数组的值是引用关系，那么使用`as const`就不会生成字面量类型。

```typescript
let uname = 'Tom';
let age = 18;
let arr = [uname, age] as const;
```

  此时`arr`的类型为元组：

```typescript
readonly [string, number]
```

  不能单独修改`arr`里保存的值，但是可以直接修改`arr`的值。

```typescript
let uname = 'Tom';
let age = 18;
let arr = [uname, age] as const;

// Error, arr 只可读
arr[0] = 'Jerry'

// 不报错
arr = ['Jerry', 20]
```

  如果`arr`保存的引用值，使用了`as const`或`const`定义的变量，那么数组使用`as const`还是会生成字面量类型。

```typescript
let uname = 'Tom' as const;
const age = 18;
let str = 'hello';
let arr = [uname, age, str] as const;
```

  此时`arr`的类型为元组：

```typescript
readonly ["Tom", 18, string]
```

##### 5. 对象

  对象使用`as const`相当于定义了一个`readonly`对象。

```typescript
let obj = {
  name: 'Tom',
  age: 18
} as const;
```

  此时变量`obj`的类型是

```typescript
{ 
  readonly name: "Tom";
  readonly age: 18;
}
```

  修改`obj`的值会报错，因为`obj`只可读。

```typescript
let obj = {
  name: 'Tom',
  age: 18
} as const;

// Error, obj 只可读
obj.name = 'Jerry';
```

  如果对象保存的值为引用值，那么对象使用`as const`就不会生成字面量类型。

```typescript
let uname = 'Tom';
let age = 18;
let obj = {
  name: uname,
  age: age,
} as const;
```

  此时变量`obj`的类型是

```typescript
{
    readonly name: string;
    readonly age: number;
}
```

  那么就可以修改整个对象里的值。

```typescript
let uname = 'Tom';
let age = 18;
let obj = {
  name: uname,
  age: age,
} as const;

// Error, obj 只可读
obj.name = 'Jerry';

// 不报错
obj = {
  name: 'Jerry',
  age: 20
}
```

  如果`obj`保存的引用值，使用了`as const`或`const`定义的变量，那么对象使用`as const`还是会生成字面量类型。



### 接口 interface

##### 简介

  在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。TypeScript 中的接口是一个非常灵活的概念，除了可用于[对类的一部分行为进行抽象](https://ts.xcatliu.com/advanced/class-and-interfaces.html#%E7%B1%BB%E5%AE%9E%E7%8E%B0%E6%8E%A5%E5%8F%A3)以外，也常用于对「对象的形状（Shape）」进行描述。

**简单的例子**

  对对象的形状进行描述。

```typescript
interface Person {
  name: string,
  age: number,
}

let person: Person = {
  name: 'Tom',
  age: 18
}
```

  定义的变量要跟接口结构一致，多一个属性和少一个属性就会报错。

```typescript
interface Person {
  name: string,
  age: number,
}

// Error, 多一个属性
let person1: Person = {
  name: 'Tom',
  age: 18,
  sex: 'male'
}

// Error, 少一个属性
let person2: Person = {
  name: 'Tom'
}
```

  可见，**赋值的时候，变量的形状必须和接口的形状保持一致**。

##### 可选属性

  有时我们不希望完全匹配接口的形状，这时我们可以使用可选属性。

```typescript
interface Person {
  name: string;
  // age 为可选属性
  age?: number;
}

let person1: Person = {
  name: 'Tom',
  age: 18,
}

let person: Person = {
  name: 'Jerry',
}
```

  可选属性只是对有`?`的属性可选，但多一个或少一个属性都会报错。

```typescript
interface Person {
  name: string;
  // age 为可选属性
  age?: number;
}

// Error, 少一个 age 属性
let person: Person = {
  age: 18
}

// Error, 多一个 sex 属性
let person1: Person = {
  name: 'Tom',
  age: 18,
  sex: 'male'
}
```

##### 只读属性

  使用`readonly`可以定义属性是只读属性，只能读取，不能被修改。

```typescript
interface Person {
  // name 为只读属性
  readonly name: string;
  age: number;
}
```

  当我们修改只读的属性时，会报错。

```typescript
interface Person {
  // name 为只读属性
  readonly name: string;
  age: number;
}

let person: Person = {
  name: 'Tom',
  age: 18
}

// Error, person的name属性只可读
person.name = 'Jerry';
```

  但我们可以修改变量`perosn`的值。

```typescript
interface Person {
  // name 为只读属性
  readonly name: string;
  age: number;
}

let person: Person = {
  name: 'Tom',
  age: 18
}

person = {
  name: 'Jerry',
  age: 20
}
```

  `readonly`只是让对象的属性的值是可读的，不能被修改，但对于整个对象来说还是可以修改的，想要对象的值不被修改，可以使用`const`定义对象。

  如果`interface Person`有多个属性，这些属性都是`readonly`类型的，一个个修改会很麻烦，那么可以借助es6的`Readonly`工具类来快速实现。

```typescript
interface Person {
  name: string;
  age: number;
}

// type TS关键字, 定义一个类型的别名
type RradonlyPerson = Readonly<Person>
```

  此时`RradonlyPerson`的类型为

```typescript
{
  readonly name: string;
  readonly age: number;
}
```

##### 函数

  在JavaScript中，函数也是对象的一种，那么使用接口也可以描述函数。

```typescript
interface Add {
  (a: number, b: number): number;
}

let add: Add = (a, b) => {
  return a + b;
}
```

##### 数组

  在JavaScript中，数组也是对象的一种，那么我们可以使用接口定义数组。

```typescript
// 定义了接受三个 string 类型的数组
interface MyArray {
  0: string,
  1: string,
  2: string,
}

let arr: MyArray = ['Tom', 'hello', 'world'];

// 多一个可以,少一个不行
// Error
let arr1: MyArray = ['Tom', 'hello'];
// 不报错
let arr1: MyArray = ['Tom', 'hello', 'world', 'world', 'TypeScript'];
```

  `MyArray`还可以描述对象。

```typescript
interface MyArray {
  0: string,
  1: string,
  2: string
}
  
let obj: MyArray = {
  0: 'Tom',
  1: 'hello',
  2: 'world'
}

// 多一个少一个都不行
// Error
let obj: MyArray = {
  0: 'Tom',
  1: 'hello'
}
// Error
let obj: MyArray = {
  0: 'Tom',
  1: 'hello',
  2: 'world',
  3: 'TypeScript'
}
```

  对于JavaScript的数组来说，应该可以保存0~多个值，所以应该使用字符串索引。

```typescript
interface MyArray {
  // index 只是对属性的名称, 你还可以这样 [x: number]: string,
  [index: number]: string,
}

// 不报错
let arr: MyArray = [];
```

  但我们却访问不了变量`arr`的`length`，包括一些数组方法，且`MyArray`类型还是能描述对象的形状。

```typescript
interface MyArray {
  // index 只是对属性的名称, 你还可以这样 [x: number]: string,
  [index: number]: string,
}

let arr: MyArray = [];
// Error, arr 不存在 length 属性
arr.length;
```

  对于这一些问题，我们应该在`MyArray`上定义全部只属于数组的属性和方法，那么调用这些数组的属性和方法就不会报错，且`MyArray`也不能用来描述对象了。

```typescript
interface MyArray {
  [index: number]: string,
  length: number,
  push(...items: string[]): number,
  ...
  // ...数组的全部方法
}
  
let arr: MyArray = [];
// 不报错
console.log(arr.length); // 0
```

  我们定义的`MyArray`类型只接收`string`类型的值，对于不同的类型值，我们可以多定义几个接收不同类型的数组接口，或者使用联合类型，但都不是最好的方法，这时候就应该使用泛型。

```typescript
// 泛型 T 相当于类型变量
interface MyArray<T> {
  [index: number]: T,
  length: number,
  push(...items: T[]): number,
  ...
  // ...数组的全部方法
}
```

  定义好泛型之后，就可以接收不同类型的值了。

```typescript
interface MyArray<T> {
  [index: number]: T,
  length: number,
  push(...items: T[]): number,
  ...
  // ...数组的全部方法
}
  
let arr: MyArray<number> = [1, 2, 3];
```

##### 可索引的类型

  可索引类型具有一个 *索引签名*，它描述了对象属性(`key`)的类型，还有相应的属性返回值(`value`)类型。在JavaScript的es6之前，TypeScript支持两种索引签名：字符串和数字，es6出来之后多了symbol索引和模板文本类型。 可以同时使用多种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。

###### 字符串索引

```typescript
interface Person {
  name: string;
}

let fn = (person: Person): void => {
  console.log(person);
}

// Error, Person 不存在 sex 属性
fn({name: 'Tom', sex: 'male'})
```

  当我们调用`fn`时，传入的对象类型与`Person`类型不匹配时，TS会报错，但我们想不限制传入对象的类型，还可以多传入一些其他的值，那么字符串索引就可以实现`interface Person`的任意属性。

```typescript
interface Person {
  name: string;
  // propName 只是一个描述, 你也可以用 [x: string]: string;
  [propName: string]: string;
}

let fn = (person: Person): void => {
  console.log(person);
}

// 不报错
fn({name: 'Tom', sex: 'male'});
```

  当我们传入一个`age: 18`的值时，又开始报错了，虽然字符串索引可以实现任意属性，但我们限制了任意属性的值为`string`类型，如果想让`{ age: 18 }`可以传入成功，那么可以修改任意属性的类型。

```typescript
interface Person {
  name: string;
  // propName 只是一个描述, 你也可以用 [x: string]: string;
  [propName: string]: string;
}

let fn = (person: Person): void => {
  console.log(person);
}

// Error, 不能将 number 赋值给 string
fn({name: 'Tom', sex: 'male', age: 18});
```

  修改任意属性的类型后

```typescript
interface Person {
  name: string;
  // propName 只是一个描述, 你也可以用 [x: string]: string | number;
  [propName: string]: string | number;
}

let fn = (person: Person): void => {
  console.log(person);
}

// 不报错
fn({name: 'Tom', sex: 'male', age: 18});
```

  如果想传递任意值，可以将类型改为`any`，当然你也可以通过泛型限制类型。

```typescript
// 任意值
interface Person {
  name: string;
  [propName: string]: any;
}

// 通过泛型限制类型
interface Person<T> {
  [propName: string]: T;
}
```

  虽然`Perosn`类可以有任意属性，但如果没有`name`属性还是会报错。

```typescript
interface Person {
  name: string;
  [propName: string]: any;
}

let fn = (person: Person): void => {
  console.log(person);
}

// Error, 缺少 name 属性, 因为 Person 类需要用到 name 属性
fn({age: 18});
```

###### 数字索引

  数字索引一般用于定义数组。

```typescript
interface MyArray {
  [index: number]: string
}
```

  这里定义一个`key`为`number`类型，`value`为`string`类型的对象，当然也可以是只接收`string`类型的数组。

  TS用`interface`定义的数组，增加的数组的属性和方法，还有泛型。

```typescript
// 泛型 T 相当于类型变量
interface MyArray<T> {
  [index: number]: T,
  length: number,
  push(...items: T[]): number,
  ...
  // ...数组的全部方法
}
```

###### symbol索引

  `symbol`是es6新增的类型，一般是第三方库为了不让其他人修改而使用作为`key`存在。

```typescript
interface Person {
  [x: symbol]: string
}

let sym = Symbol();
let person: Person = {
  [sym]: 'Tom'
}
```

###### 模板字面量索引

 TS的索引可以使用模板字符串对索引的名称做一些限制。

```typescript
interface Person {
  [x: string]: string | number
}
```

  这里我们使用字符串索引对`Person`类的索引进行限制，但我们想要每一个索引都是`user`开头，那么我们可以使用模板字面量进行限制。

```typescript
interface Person {
  [x: `user${string}`]: string | number;
}

// Error, name 和 age 没有以 user 开头
let person: Person = {
  name: 'Tom',
  age: 18
}

let person1: Person = {
  userName: 'Tom',
  userAge: 18
}
```

  模板字面量索引区分大小写。

###### 只读的索引

  对于一些字符串、数字和`symbol`索引，我们可以让其是只读的。

```typescript
interface Person {
  name: string;
  readonly [propName: string]: any;
}

let person: Person = {
  name: 'Tom',
  age: 18
}

person.name = 'Jerry';
// Error, Person age 属性只可读
person.age = 20;
```

  上面代码中，只有`name`属性是可以被修改的，其他的属性只可读。

###### 多种索引共存

  一个接口可以有多种索引一起存在，即使索引限制的类型不同。

```typescript
interface Person {
  name: string;
  readonly [propName: string]: any;
  [index: number]: number;
  [x: symbol]: string | Function
}
```

**注意事项**

* 字符串索引与模板字面量索引一起存在时，字符串索引返回的`value`类型要是模板字面量索引返回的`value`类型的父类型或相同类型。

  ```typescript
  // Error, “`user${string}`”索引类型为 string | number 不能分配给 字符串索引类型为 string 
  interface Person {
    // 字符串索引
    [x: string]: string;
    // 模板字面量索引
    [x: `user${string}`]: string | number;
  }
  ```

  可以将模板字面量索引的`value`类型修改为`string`或`string`的子类型。也可以将字符串索引的`value`类型修改为`any`。

* 字符串索引与数字索引一起存在时，字符串索引返回的`value`类型要是数字索引返回的`value`类型的父类型或相同类型。

  ```typescript
  // Error
  interface Person {
    // 字符串索引
    [x: string]: string;
    // 数字索引
    [x: number]: string | number;
  }
  ```

  可以将数字索引类型的`value`类型修改为`string`或`string`的子类型。也可以将字符串索引的`value`类型修改为`any`。

  因为当使用 `number`来索引时，JavaScript会将它转换成`string`然后再去索引对象。 也就是说用 `100`（一个`number`类型）去索引等同于使用`"100"`（一个`string`类型）去索引，因此两者需要保持一致。

##### 接口继承接口

  和类一样，接口也能继承接口。这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。`extends`有扩展的意思，在这里可能说是接口扩展另一个接口比说是接口继承另一个接口要好理解一些。

```typescript
interface Person {
  readonly name: string;
  age?: number
}

interface User extends Person {
  password: string
}

let user: User = {
  name: 'Tom',
  age: 18,
  password: '123456'
}

// Error, user name 只可读
user.name = 'Jerry';
```

  继承后的`User`接口，不仅有自身的`password`属性，还有`name`和`age`属性。包括父接口的可选属性和只读属性及其限制的类型。

  继承后的`User`接口类型为

```typescript
{
  readonly name: string;
  age?: number;
  password: string
}
```

  如果子接口与父接口有类型的冲突，那么以子接口为主。

```typescript
interface Person {
  readonly name: string;
  age?: number
}

interface User extends Person {
  name: string;
  password: string
}
```

  此时`User`接口的类型为

```typescript
{
  name: string;
  age?: number;
  password: string
}
```

##### 接口多继承接口

  接口也可以实现多继承。

```typescript
interface X {
  x: number
}

interface Y {
  y: number
}

interface Z {
  z: number
}

interface Space extends X, Y, Z {
  
}

let space: Space = {
  x: 10,
  y: 11,
  z: 12
}
```

  TS中被多继承的接口没有主、副分别。当这些接口之间类型发生冲突时，则会报错。

```typescript
interface X {
  x: number
}

interface Y {
  x: string;
  y: number
}

interface Z {
  z: number
}

// Error, 接口 X 与 Y 类型不匹配
interface Space extends X, Y, Z {
  
}
```

  包括接口的可选属性、只读属性和接口描述的函数类型，只要这些接口的类型不一致，就会报错。

```typescript
// 1. x 为可选属性
interface X {
  x?: number
}

interface Y {
  x: string;
  y: number
}

interface Z {
  z: number
}

// Error, 接口 X 与 Y 类型不匹配
interface Space extends X, Y, Z {
  
}


// 2. x 为只读属性
interface X {
  x: number
}

interface Y {
  readonly x: string;
  y: number
}

interface Z {
  z: number
}

// Error, 接口 X 与 Y 类型不匹配
interface Space extends X, Y, Z {
  
}
```

##### 接口继承类

  在TS中，声明的类，会默认生成相同名称的类型。

```typescript
class A {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  printMsg(msg: string) {
    console.log(msg);
  }
}
```

  对于上面类型来说，TS会默认生成一个相同名称的接口。

```typescript
interface A {
  name: string;
  printMsg(msg: string): void
}
```

  所以接口可以继承类。

```typescript
class A {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  printMsg(msg: string) {
    console.log(msg);
  }
}

interface B extends A {
  
}

let b: B = {
  name: 'Tom',
  printMsg(msg: string) {
    console.log(msg);
  }
}
```

##### 接口多继承类

  既然TS会对声明的类默认生成接口，那么对于类的类型就是接口来说，接口也可以

多继承类。

```typescript
class X {
  x: number;
  constructor(x: number) {
    this.x = x
  }
}


class Y {
  y: number;
  constructor(y: number) {
    this.y = y
  }
}

// 接口多继承 X Y 两个类
interface Point extends X, Y {

}

let point: Point = {
  x: 10,
  y: 11
}
```

  但要求多继承的类之间不能有类型冲突。

```typescript
class X {
  x: number;
  constructor(x: number) {
    this.x = x
  }
  printMsg(msg: number) {
    console.log(msg);
  }
}


class Y {
  x: string
  y: number;
  constructor(x: string, y: number) {
    this.x = x
    this.y = y
  }
  printMsg(msg: any) {
    console.log(msg);
  }
}

// Error, 实例属性 x 类型不同, 方法 printMsg 类型不同
interface Point extends X, Y {

}
```

  上面代码中，`X`与`Y`之间实例属性`x`类型有冲突，一个为`number`类型，另一个为`string`类型；对于`printMsg()`方法来说，参数的类型不同，包括函数返回值，只要参数个数，类型和返回值类型不同时，接口多继承类就会报错。

  如果接口多继承的类之间是父类和子类关系时，子类不能重写父类成员（实例属性和方法），不然会报错。

```typescript
class X {
  x: number;
  constructor(x: number) {
    this.x = x
  }
  printMsg(length: number) {
    console.log(length);
  }
}


class Y extends X {
  x: string
  y: number;
  constructor(x: string, y: number) {
    super(y)
    this.x = x
    this.y = y
  }
  printMsg(length: any) {
    console.log(length);
  }
}

// Error, 实例属性 x 类型不同, 方法 printMsg 类型不同
interface Point extends X, Y {

}

```

  报错原因还是因为实例属性的类型不同和方法的参数类型不同。

  对于类的静态成员，接口在多继承时，会忽略掉。

```typescript
class X {
  x: number;
  constructor(x: number) {
    this.x = x
  }
  static printMsg(msg: number) {
    console.log(msg);
  }
}


class Y {
  y: number;
  static staticY: number
  constructor(x: string, y: number) {
    this.y = y
  }
}

Y.staticY = 12

interface Point extends X, Y {

}

// 没有 staticY 属性和 printMsg 方法也不报错
let point: Point = {
  x: 10,
  y: 11
}
```

  如果你加上`staticY `属性和 `printMsg `方法那么就会报错。

##### 类类型

###### 实现接口

  实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 `implements` 关键字来实现。这个特性大大提高了面向对象的灵活性。

```typescript
interface Person {
  name: string;
  age: number
}

class User implements Person {
  name!: string;
  age!: number;
  setNameAge(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

  类实现接口，只对实例成员生效。

  类实现接口时，实现的实例应该是`public`成员。

```typescript
interface Person {
  name: string;
  age: number
}

class User implements Person {
  // name 是受保护的, 但是在基类上不是
  protected name!: string;
  // age 是私有的, 但是在基类上不是
  private age!: number;
  setNameAge(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

  类实现接口的时候，可以扩展自己的属性和方法。

```typescript
interface Person {
  name: string;
  age: number
}

class User implements Person {
  name: string;
  age: number;
  sex: string;
  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex
  }
}
```

###### 类实现多个接口

```typescript
interface X {
  x: number
}

interface Y {
  y: number
}

class Point implements X, Y {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y
  }
}
```

  当接口的类型出现冲突时，只要定义的类能满足每一个接口就可以。

```typescript
interface X {
  x: number
  getValue(x: number):number
}

interface Y {
  x: string,
  y: number,
  getValue(x: string): string
}

class Point implements X, Y {
  x: any;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y
  }
  getValue(x: any) {
    return x
  }
}
```

  上面接口中，接口`Y`重复定义接口`X`中的属性和方法，类型发生了冲突；但实现的`Point`类只要满足每一个接口的要求，就可以实现。

###### 类静态部分与实例部分的区别

  类实现接口只能限制类的实例部分，对静态部分没有限制，如果需要类的构造函数及静态成员满足一些需求，那么可以定义一个函数来检查。

```typescript
// Person 类实现的接口
interface PersonIterface {
  name: string;
  age: number;
}

// Person 类的静态部分接口
interface PersonConstructor {
  title: string;
  // new 代表的是构造函数(构造函数属于类的静态部分)
  new(name: string, age: number): PersonIterface;
  getName(): string;
}

// 定义一个检查 Person 类静态部分的方法
function CreatePerson (Person: PersonConstructor, name: string, age: number): PersonIterface {
  return new Person(name, age)
}

// 定义一个 Person 类实现 PersonIterface 接口
class Person implements PersonIterface {
  name: string;
  age: number;
  static title = 'person';
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  static getName() {
    return this.name
  }
}

// 创建 Person 类实例
const person = CreatePerson(Person, 'Tom', 18)
```

  当调用方法`CreatePerson()`时，传入Person类；这时`CreatePerson()`方法第一个参数会检查`Person`类是否满足`PersonConstructor`接口，当满足`PersonConstructor`接口时，就可以创建`Person`实例了；当`Person`类不满足`PersonConstructor`接口时，就会报错。

  `Person`类即是函数也是对象，所以满足`PersonConstructor`接口的属性和方法是挂载在`Person`类自身的静态属性和静态方法。

  重新定义一个`User`类。

```typescript
// 定义一个 User 类实现 PersonIterface 接口
class User implements PersonIterface {
  name: string;
  age: number;
  password: string;
  constructor(name: string, age: number, password: string) {
    this.name = name;
    this.age = age;
    this.password = password;
  }
}

// 创建 User 类实例
// Error
const user = CreatePerson(User, 'Tom', 18)
```

  上面代码中，我们重新定义了一个`User`类，调用`CreatePerson()`方法时，将`User`类传入，报错了。因为我们没有满足`PersonConstructor`接口，首先构造函数的参数不对，`PersonConstructor`接口限制构造函数只能接收2个参数；其次，`User`类自身缺少`title`属性和`getName()`方法。

  当`User`类扩展实例属性和方法时，调用`CreatePerson()`方法时，返回的实例可能没有很好的代码提示。

```typescript
class User implements PersonIterface {
  name: string;
  age: number;
  money: number = 100;
  static title = 'person';
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  static getName() {
    return this.name
  }
}

const user = CreatePerson(User, 'Tom', 18);
// Error, user 不存在 sex 属性
console.log(user.sex); 
```

  为什么变量`user`不存在`sex`属性呢？ 原因是因为`CreatePerson()`方法返回的值是`PersonIterface`接口类型的值。`PersonIterface`接口上只有`name`属性和`age`属性，所以导致`user.sex`报错，就算不显示的返回`PersonIterface`接口，`CreatePerson()`方法也会隐式返回`PersonIterface`接口。

  如何解决这个问题？

* 使用的时候，将变量`user`断言成`any`类型。但是每一次访问不在`PersonIterface`接口上的属性时，都需要断言一次。

  ```typescript
  console.log((user as any).sex);
  ```

* 赋值的时候将将变量`user`断言成`any`类型。但是访问在`PersonIterface`接口上的属性时没有代码提示。

  ```typescript
  const user = CreatePerson(User, 'Tom', 18) as any;
  console.log(user.sex); 
  ```

* 赋值的时候将将变量`user`断言成`User`类型。

  ```typescript
  const user = CreatePerson(User, 'Tom', 18) as User;
  console.log(user.sex); 
  ```

* 使用泛型

##### 接口混合类型

  接口可以描述对象的形状和函数的形状，那么一个接口同时描述对象和函数，这个接口的类型就是混合类型。

```typescript
// 同时描述对象形状和函数形状
interface Add {
  (a: number, b: number): number;
  title: string;
}

let add = function (a, b) {
  return a + b;
} as Add;

add.title = "add";

console.log(add.title);
```

  混合类型也可以描述构造函数。

##### 声明合并

  声明多个相同名称的`interface`最终会合并成一个`interface`。

```typescript
interface Person {
  name: string
}

interface Person {
  age: number
}
```

  最后`Person`接口会被合并成一个接口，此时`Perosn`类型为

```typescript
{
  name: string,
  age: number
}
```

  相同名字的接口，非函数的成员，不同类型，则会报错。

```typescript
interface Person {
  name: string
}

interface Person {
  // Error, 后续声明必须是同一类型
  name: any,
  age: number
}
```

  如果是函数成员，那么后续声明将成为函数重载。

```typescript
interface Add {
  add(a: number, b: number): number
}

interface Add {
  add(a: number, b: string): number
}

let add = {
  add(a, b) {
    // b 的类型为 string | number
    return a + Number(b)
  }
}
```



### 类

##### 简介

  在⾯向对象语⾔中，类是⼀种⾯向对象计算机编程语⾔的构造，是创建对象的蓝图，描述了所创建的对象共同的属性和⽅法。在JavaScript的es6之前，通过构造函数来实现生成实例对象，es6引入`calss`关键字，可以用来定义类。

  基本上，ES6 的`class`可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的`class`写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

  而使用TS，我们可以使用`class`的特性，而不需要关注JavaScript的版本。

##### 基本用法

  使用`calss`关键字声明类，并可以添加属性和方法。

```typescript
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getNameLength(): number {
    return this.name.length;
  }
}

const person = new Person('Tom');
console.log(person.name); // 'Tom'
console.log(person.getNameLength()); // 3
```

  上面代码我们声明一个`Perosn`类，添加了实例属性`name`和实例方法`getNameLength`，并且限制实例属性`name`的类型和`getNameLength`的参数类型和返回值类型。

  实例属性和实例方法通过实例来访问和调用。

  `class`里的`constructor`构造函数，在通过`new`关键字生成实例时，会自动调用`constructor`构造函数。

```typescript
class Person {
  name: string;
  constructor(name: string) {
    this.printMessage(); // '123'
    this.name = name;
  }
  printMessage() {
    console.log('123')
  }
}
```

  当你不需要用到`constructor`时，使用`class`时，可以不添加`constructor`构造函数，JavaScript 引擎会自动为它添加一个空的`constructor()`方法。

```typescript
class Msg {
  printMessage(msg: string): string {
    return msg
  }
}

const msg = new Msg();
console.log(msg.printMessage('error'));
```

  如果你只声明类实例属性，但不在`constructor`构造函数中赋初始值时，TS会报错。

```typescript
class Person {
  // Error, 没有初始化表达式
  name: string;
}
```

  有时我们想通过`constructor`构造函数以外的方式来初始化实例属性，那么可以通过使用`!`断言。

```typescript
class Person {
  // 不报错
  name!: string;
}
```

  还可以通过修改`tsconfig.json`文件里的配置项，将`strictPropertyInitialization`配置为`false`，也可以解决上面报错问题。

```json
// tsconfig.json 文件
{
  "compilerOptions": {
    ...
    // 默认为 true , 修改为 false
    "strictPropertyInitialization": false
  }
}
```

```typescript
class Person {
  // 不报错
  name: string;
}
```

  声明类型，告诉`Person`类外部，`Person`声明了一个`name`属性。

```typescript
class Person {
  // 不报错
  declare name: string;
}
```

##### 继承

  es5通过原型链实现继承，es6和TS通过`extends`关键字实现继承。通过继承，子类可以获取父类的非私有的属性和非私有的方法，并且子类可以扩展自身的属性和方法。

```typescript
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getNameLength(): number {
    return this.name.length;
  }
}

// User 类继承 Person 类
class User extends Person {
  
}

const user = new User('Tom')
console.log(user.name); // 'Tom'
console.log(user.getNameLength()); // 3
```

  子类继承父类时，子类可以不写`constructor`构造函数，就可以使用父类的实例属性。

###### super关键字

  当子类使用到`constructor`构造函数时，需要使用`super`关键字，并且`super`关键字得在`this`之前被使用。

```typescript
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getNameLength(): number {
    return this.name.length;
  }
}

class User extends Person {
  age: number;
  constructor(name: string, age: number) {
    // super 关键字在 this 前被使用
    super(name);
    this.age = age;
  }
}

const user = new User('Tom', 18)
console.log(user.name); // 'Tom'
console.log(user.age); // 18
console.log(user.getNameLength()); // 3
```

  当`super`关键字被当做函数调用时，父类的`constructor`构造函数就会被调用，也就是说`super`关键字被当做函数时，则代表父类的`constructor`构造函数。当`super`关键字在`this`后被使用，则TS会报错。`super`关键字只能在子类的`constructor`构造函数中被调用（可以当做对象在子类的方法中被使用）。

  当`super`关键字当做对象使用时，在普通函数中，则代表父类的`prototype`原型对象。

```typescript
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getNameLength(): number {
    return this.name.length;
  }
}

class User extends Person {
  age: number;
  constructor(name: string, age: number) {
    super(name)
    this.age = age;
  }
  getUserNameLength() {
    return super.getNameLength() // return 3
  }
}

const user = new User('Tom', 18)
```

  上面代码中，在子类的`getUserNameLength`方法中使用到`super`关键字，此时的`super`关键字在普通方法中，指向父类`Person`的`prototype`原型对象，也就是指向`Person.prototype`。当调用`super.getNameLength()`时，实际上是调用`Person.prototype.getNameLength()`。

  如果是定义在父类实例上的属性和方法，`super`关键字是获取不到的。因为`super`关键字当做对象使用时，指向父类的`prototype`原型对象，并不指向子类实例。

  ES6 规定，在子类普通方法中通过`super`调用父类的方法时，方法内部的`this`指向当前的子类实例。

```typescript
class A {
  age: number;
  constructor() {
    this.age = 10
  }
  getAge() {
    return this.age
  }
}

class B extends A {
  constructor() {
    super()
    this.age = 18
  }
  getBAge() {
    return super.getAge()
  }
}

const b = new B()
console.log(b.getBAge()); // 18
```

  如果`super`作为对象，用在静态方法之中，这时`super`将指向父类，而不是父类的`prototype`原型对象。

```typescript
class A {
  static getMsg() {
    return "class A static getMsg 被调用";
  }
  getMsg() {
    return "class A getMsg 被调用";
  }
}

class B extends A {
  static getMsg() {
    return super.getMsg();
  }
  getMsg() {
    return super.getMsg();
  }
}

console.log(B.getMsg()); // 'class A static getMsg 被调用'
console.log(new B().getMsg()); // 'class A getMsg 被调用'
```

  在子类的静态方法中通过`super`调用父类的方法时，方法内部的`this`指向当前的子类，而不是子类的实例。

###### 子类重写父类方法

  对于子类来说，有时父类的方法并不适合子类，这时子类就可以重写父类方法，但要子类的函数的参数类型和返回值类型是父类函数的参数类型和返回值类型的子类型。

```typescript
class A {
  getMsg() {
    return 'class A';
  }
}

class B extends A {
  // Error, 不能将 void 分配给 string
  getMsg() {
    console.log('class B')
  }
}

class B extends A {
  // Error, 参数不同
  getMsg(msg: string) {
    return msg
  }
}
```

  子类的函数的参数类型和返回值类型是父类函数的参数类型和返回值类型的子类型时，才能重写父类方法。

```typescript
class A {
  getMsg() {
    return 'class A';
  }
}

class B extends A {
  getMsg(): any {
    return 123;
  }
}

const b = new B();
console.log(b.getMsg()); // 123
```

##### readonly 修饰符

  使类的实例属性除了构造函数之外不能被赋值，`readonly`修饰符只能使用在类的实例属性和索引签名。

```typescript
class Person {
  readonly name: string;
  constructor(name: string) {
    this.name = name
  }
}

const person = new Person('Tom');
console.log(person.name); // 'Tom'

// Error, person name 只读
person.name = 'Jerry'; 
```

  除了构造函数`constructor`内部可以被赋值，其他地方不能被赋值。

  如果子类继承父类时，父类的实例属性是可读的，那么子类对应的实例属性也只是可读的。

```typescript
class Person {
  readonly name: string
  constructor(name: string) {
    this.name = name;
  }
}

class User extends Person {

}

const user = new User('Jerry');
// User name 只读
user.name = 'Tom';
```

  如果想要让`name`能被修改，那么子类可以重写父类实例属性。

```typescript
class Person {
  readonly name: string
  constructor(name: string) {
    this.name = name;
  }
}

class User extends Person {
  // 重写 name 属性
  name: string
  constructor(name: string) {
    super(name)
    this.name = name;
  }
}

const user = new User('Jerry');
// 不报错
user.name = 'Tom';
```



##### 索引签名

  类支持索引签名，与[接口索引签名一致](#可索引的类型)。

```typescript
class Base {
  [s: string]: boolean | ((s: string) => boolean);
 
  constructor(param: boolean) {
    this.s = param
  }
}

const b = new Base(true)
console.log(b.flag); // true
console.log(b.name); // undefined
```

  索引签名的问题在于没有很好的代码提示和类型检查，且容易出现问题

##### 存取器

  使用 getter 和 setter 可以改变属性的赋值和读取行为，es5不支持，es6与TS支持该语法。

```typescript
class Person {
  _name: string;
  constructor(name: string) {
    this._name = name;
  }
  
  get name() {
    return this._name
  }
  
  set name(value: string) {
    this._name = value;
  }
}

const person = new Person('Tom');
console.log(person.name) // get name() 被触发
person.name = 'Jerry'; // set name() 被触发
```

  当我们读取`name`时，会触发`get name()`方法，当我们修改`name`时，会触发`set name()`方法。

  如果一个实例属性只有`get()`没有·`set()`，那么这个属性则是只读属性，会自动加上`readonly`修饰符。

```typescript
class Person {
  _name: string;
  constructor(name: string) {
    this._name = name;
  }
  
  get name() {
    return this._name
  }
}

const perosn = new Person('Tom');
console.log(person.name) // 'Tom'
person.name = 'Jerry'; // Error, person name 只读
```

  `set()`参数不写类型时，会从`get()`方法自动推断。

```typescript
class Person {
  _name: string;
  constructor(name: string) {
    this._name = name;
  }
  
  get name() {
    return this._name
  }
  
  // TS 自动推断出 value 类型为 string
  set name(value) {
    this._name = value;
  }
}
```

  `get()`方法和`set()`方法具有相同的成员可见性，也就是`public`、`protected`和`private`

  从[TypeScript 4.3](https://devblogs.microsoft.com/typescript/announcing-typescript-4-3/)开始，可以使用不同类型的访问器。

```typescript
class Thing {
  _size: number
  constructor(size: number) {
    this._size = size
  }

  get size() {
    return this._size
  }

  // set() 方法可以接受不同类型的参数, 但需要将类型转换
  set size(value: string | number | boolean) {
    const num = Number(value);
    this._size = num;
  }
}
```

  小心触发死循环。

```typescript
class Person {
  _name: string;
  constructor(name: string) {
    this._name = name;
  }
  
  get name() {
    return this._name
  }
  
  set name(value: string) {
    this.name = value;
  }
}
```

  上面代码中`set name()` 方法内部修改`name`属性的值，这时修改`name`属性的值又触发`set name()`方法，导致无限循环。

##### 成员可见性

###### public

  表示公共的，意思是可以在任何地方访问类里的成员，类里的成员默认是被`public`修饰符修饰的。

```typescript
class Person {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  public getNameLength() {
    return this.name.length
  }
}

const person = new Person('Tom');
console.log(person.getNameLength()); // 3
```

###### protected

  表示受保护的，在类的外部访问不到被`protected`修饰符修饰过的类的成员。可以在子类访问到。

```typescript
class Person {
  protected name: string
  constructor(name: string) {
    this.name = name;
  }
  protected getNameLength() {
    return this.name.length;
  }
}

const person = new Person('Tom');
// Error, 属性 name 是受保护的，只能在类和子类中访问
console.log(person.name);
// Error, 属性 getNameLength 是受保护的，只能在类和子类中访问
console.log(person.getNameLength());
```

  在子类中可以访问到`name`和`getNameLength`属性。

```typescript
class Person {
  protected name: string
  constructor(name: string) {
    this.name = name;
  }
  protected getNameLength() {
    return this.name.length;
  }
}

class User extends Person {
  getName() {
    return this.name
  }
}

const user = new User('Jerry');
console.log(user.getName()); // 'Jerry'
```

  对于子类`User`继承`Person`类，除了`private`之外，类成员前面的修饰符和父类一致，也就是子类`User`的`name`实例属性还是`protected`。

  但是子类可以重写属性和方法，覆盖父类的属性和方法。

```typescript
class A {
  protected length: number
  constructor(length: number) {
    this.length = length;
  }
}

class B extends A {
  length: number
  constructor(length: number) {
    super(length);
    this.length = length;
  }
}

const a = new A(10)
// Error, length 属性是受保护的, 只能在 父类 和 子类 内部进行访问
console.log(a.length);

const b = new B(11)
console.log(b.length); // 11
```

  对于跨层次的`protected`，不同的语言对通过基类引用访问受保护成员是否合法存在分歧。

```typescript
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class User extends Person {
  getName1(other: User) {
    return other.name;
  }
  getName2(other: Person) {
    // Perosn name 是受保护的，只能通过User实例访问。
    return other.name;
  }
}
```

  TS允许跨实例访问`protected`的属性和方法。

```typescript
class A {
  protected x :number;
  constructor(x: number) {
    this.x = x
  }
  public sameAs(other: A) {
    return other.x === this.x;
  }
}

const a1 = new A(10);
const a2 = new A(10);
console.log(a1.sameAs(a2)); // true
```

  虽然`protected`的属性和方法规定类的外部访问不了，但编译成JavaScript代码时，并没有限制其访问，所以TS的`protected`只是一个软受保护类型。

```typescript
class Person {
  protected name: string;
  age: number
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age
  }
}

const person = new Person('Tom', 18);
// Error, Person name 属性是受保护的, 只能在 Person 和 子类 中访问
console.log(person.name);

let key: keyof Person;
for(key in person) {
  console.log(person[key]); // 'Tom' 18
}

console.log(person['name']); // 'Tom'
```

  虽然`name`是受保护类型的属性，但是当访问实例的`key`时，还是可以获取到`name`的值。如果`Person`类，没有`public`的属性和方法，TS自动生成的`Person`接口为`never`类型，那么使用`for..in`遍历对象时，需要一些特别的手段才能拿到`name`的值，比如说断言。

###### private

  表示私有的，只能在类的内部访问，外部和子类都访问不到。

```typescript
class Person {
  private name: string
  constructor(name: string) {
    this.name = name;
  }
}

class User extends Person {
  getName() {
    // Error, name 是私有属性, 只能在 Person 类中访问
    return this.name
  }
}
```

  对于父类的私有属性和私有方法，子类是不能重写，子类重写的属性和方法是`private`的级别，也还是会报错。

```typescript
class Person {
  private name: string
  constructor(name: string) {
    this.name = name;
  }
}

// Error, User 错误的继承 Person
class User extends Person {
  private name: string
  constructor(name: string) {
    super(name)
    this.name = name;
  }
}
```

  对于跨实例的`private`，TS允许跨实例访问。

```typescript
class A {
  private x :number;
  constructor(x: number) {
    this.x = x
  }
  public sameAs(other: A) {
    return other.x === this.x;
  }
}

const a1 = new A(10);
const a2 = new A(10);
console.log(a1.sameAs(a2)); // true
```

  对于TS来说，`private`只是在类型检查的时候才会限制不能访问，但是对于访问实例的`key`时，TS是不会限制的，因为编译成JavaScript代码时，没有类型的限制，所以`private`跟`protected`一样都不是严格意义上的不可访问。

```typescript
class Person {
  private name: string;
  age: number
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age
  }
}

const person = new Person('Tom', 20);
// Error, Person name 属性是私有的, 只能在 Person 内部访问
console.log(person.name);

let key: keyof Person;
for(key in person) {
  console.log(person[key]); // 'Tom' 20
}

console.log(person['name']); // 'Tom'

console.log(Object.values(person));  // ['Tom', 18]
```

  如果`Person`类没有`public`类型的属性和方法，那么此时的`Person`类的类型为`never`，使用`for...in`方法遍历`person`对象时，可能会报错。

###### JS class 私有成员

  JavaScript的ES6版本出现原生的私有属性和私有方法，与TS的`private`不同的是，JavaScript的`private`在TS中使用，被编译成JavaScript代码时，还是保持私有的特性，这使JavaScript的`private`成为一种`hard private`（硬私有）。

```typescript
class Person {
  #name: string;
  age: number
  constructor(name: string, age: number) {
    this.#name = name;
    this.age = age;
  }
}

const person = new Person('Tom', 18)
// Error, #name 在 Person 外部不可访问
console.log(person.#name);
            
let key: keyof Person;
for(key in person) {
  console.log(person[key]); //  20
}       
```

  JavaScript的`#`不能和TS的`public`、`protected`和`private`一起使用。

  `name`和`#name`是两个不同的属性。

```typescript
class Person {
  #name: string;
  name: string;
  constructor(name: string) {
    this.#name = name;
    this.name = name;
  }
}
```

  私有属性也可以有`get()`方法和`set()`方法。

```typescript
class Point {
  value: number;
  constructor(value: number) {
    this.value = value;
  }
  get #value() {
    return this.value
  }
  set #value(value) {
    this.#value = this.value
  }
}
```

  私有属性和私有方法不能被继承，但是子类可以重写父类的私有属性和方法，并且可以修改类型。

```typescript
class Person {
  #name: string;
  name: string;

  constructor(name: string) {
    this.#name = name;
    this.name = name;
  }
  #printMsg(msg: string) {
    console.log(msg);
  }
}

class User extends Person {
  // 重写 #name
  #name: number;
  constructor(name: number) {
    super(name + "");
    this.#name = name;
  }
// 重写 #printMsg
  #printMsg(msg: number) {
    console.log(msg);
  }
}
```

  跨实例访问私有属性和方法。只要类的内部，类的实例可以访问私有属性和私有方法。

```typescript
class Person {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }
  static  printName(person: Person) {
    // 不报错
    console.log(person.#name);
  }
}
  
const person = new Person('Tom');
Person.printName(person); // 'Tom'
```

##### 静态成员

  在类本身的属性和方法，就叫静态成员。在类上我们可以定义自己的属性和方法。

```typescript
class Foo {
  static count: number
  static getCount: () => number
}
Foo.count = 1
Foo.getCount = function() {
  return this.count
}

console.log(Foo.getCount()); // 1
```

  ES6提出`static`关键字，可以简单的写出静态属性和静态方法。

```typescript
class Foo {
  static count = 1
  static getCount() {
    return this.count
  }
}
```

  静态成员也可以使用`public`、`protected`和`private`，还有特殊的`#`。

```typescript
class Foo {
  public static count = 1
  private static value = 2
}

console.log(Foo.count); // 1
// Error, 私有成员只能在类中访问
console.log(Foo.value);
```

  静态成员可以被继承，`public`和`protected`。

```typescript
class Foo {
  public static count = 1;
  protected static value = 2;
  public static getValue() {
    return this.value
  }
}

class Bar extends Foo {}

console.log(Bar.count); // 1
console.log(Bar.getValue()); // 2
// Error, value 只能在 Foo 和 子类 中访问
console.log(Bar.value);
```

  一些特殊的静态属性名字，`name`、`length`等等，这是因为这些特殊的静态属性名字已经被使用了，就不能再重新声明和赋值。

##### 静态块

  静态属性的一个问题是，它的初始化要么写在类的外部，要么写在`constructor()`方法里面。这两种方法都不是很理想，前者是将类的内部逻辑写到了外部，后者则是每次新建实例都会运行一次。

  为了解决这个问题，ES2022 引入了[静态块](https://github.com/tc39/proposal-class-static-block)（static block），允许在类的内部设置一个代码块，在类生成时运行一次，主要作用是对静态属性进行初始化。

```typescript
class Foo {
  static a = 10;
  static {
    Foo.a = 20
  }
}

console.log(Foo.a); // 20
```

  静态块只会运行一次，一个类里面只有一个静态块。

```typescript
class Foo {
  static a = 10;
  static {
    console.log('run')
  }
}
```

  当你写出`static{}`时，会自动运行，且只会运行一次。

  静态块不能使用`return`，可以使用`try...catch`。

```typescript
class Foo {
  static a = 10;
  static {
    // Error, 静态块不能使用 return
    return 10
  }
}

class Foo {
  static a = 10;
  static {
    try {
      // ... do some
    } catch(err) {
      // ...do some
    }
  }
}
```

  静态块的`this`指向该类。

```typescript
class Foo {
  static a = 10;
  a = 11;
  static {
    console.log(this.a); // 10
  }
}
```

  除了静态属性的初始化，静态块还有一个作用，就是将私有属性与类的外部代码分享。

```typescript
let getX: (foo: Foo) => number;
class Foo {
  #a = 10;
  static {
    getX = (foo: Foo) => {
      return foo.#a;
    };
  }
}

const foo = new Foo()
console.log(getX!(foo)); // 10
```

##### new.target 属性

  ES6 为`new`命令引入了一个`new.target`属性，该属性一般用在构造函数之中，返回`new`命令作用于的那个构造函数。如果构造函数不是通过`new`命令或`Reflect.construct()`调用的，`new.target`会返回`undefined`，因此这个属性可以用来确定构造函数是怎么调用的。

  Class 内部调用`new.target`，返回当前 Class。

```typescript
class Count {
  constructor() {
    console.log(new.target === Count); // true
  }
}

new Count();
```

  当子类继承父类时，父类使用的`new.target`会指向子类。

```typescript
class A {
  constructor() {
    console.log(new.target) // B
    console.log(new.target === A); // false
  }
}

class B extends A {
  constructor() {
    super();
  }
}

new B()
```

  通过这个特性我们可以创建一个不能被实例化的类，只能继承。

```typescript
class A {
  constructor() {
    if (new.target === A) {
      throw new Error('A不能被实例化，只能被继承')
    }
  }
}
```

##### constructor构造函数

  在JavaScript中，`constructor`构造函数可以不写，JavaScript引擎会默认添加一个空的`constructor`构造函数。TS默认保留JavaScript的`class`特性。

  TS对`class`里的构造函数函数增加了一些新的特性，重载。

```typescript
class Point {
  x: number;
  y: number;
  constructor(x: number);
  constructor(x: number, y:number);
  constructor(x: number, y?:number) {
    this.x = x;
    this.y = y ?? x;
  }
}
```

  对于构造函数来说，不能定义返回值类型。

```typescript
// Error, 构造函数设置返回值类型
constructor(x: number, y?:number): any {
  this.x = x;
  this.y = y ?? x;
}
```

  构造函数默认前面有`public`修饰，当改为`protected`或`private`时，需要通过其他手段进行初始化。

```typescript
class A {
  protected constructor() {
    
  }
  static Create() {
    return new A()
  }
}

// Error, A 的 constructor 在 A 中是受保护的
new A();
// 不报错
const a = A.Create();
```

  通过这个方式我们可以实现单例模式。

```typescript
class A {
  static instance: A | null = null;
  protected constructor() {
    
  }
  static Create() {
    if (this.instance === null) {
      this.instance = new A()
    }
    return this.instance
  }
}
```

##### this参数

  为了减少类中方法的`this`指向问题，TS提供了`this`参数。

  那么`this`会出现什么问题?

```typescript
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getNameLength() {
    return this.name.length;
  }
}

const person = new Person('Tom');
const { getNameLength } = person;
// Error, 不能在 undefined 获取 name 属性
getNameLength();
```

  解决`this`问题，可以选择使用箭头函数，因为箭头函数是没有自己的`this`。

```typescript
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  // 改为箭头函数
  getNameLength = () => {
    return this.name.length;
  }
}

const person = new Person('Tom');
const { getNameLength } = person;
console.log(getNameLength()); // 3
```

  如果不想用箭头函数，那么可以使用TS提供的`this`参数。

```typescript
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  // this 参数指向 Person
  getNameLength(this: Person) {
    return this.name.length;
  }
}

const person = new Person('Tom');
const { getNameLength } = person;
// Error, this 指向不对
getNameLength()
```

  当在方法使用`this`参数时，TS会给一个很好的提示，`this`参数必须放置在参数第一位，不然TS会报错。

##### 动态this类型

  在类中，一个叫做this的特殊类型动态地指向当前类的类型。

```typescript
class Count {
  value = 0;
  setValue(value: number) {
    this.value = value;
    return this
  }
}
```

  在这里，TS推断`setValue()`方法返回的是`this`。

```typescript
class Count {
  value = 0;
  setValue(value: number) {
    this.value = value;
    return this
  }
}

class ChildCount extends Count {
  
}

const childCount = new ChildCount();
// a 的类型为 CildCount
const a = childCount.setValue(10);
```

  通过继承，子类继承父类方法，父类的方法中`this`指向子类实例。`setValue()`方法动态改变`this`类型为`ChildCount`。

  你也可以将`this`作为类型使用。

```typescript
class Person {
  name = 'person';
  getNameLength(other: this) {
    return other.name.length
  }
}

class User extends Person {
  name = 'user';
  age = 18;
}

const person = new Person();
const user = new User();

// Error, 类型“Person”的参数不能赋给类型“User”的参数
user.getNameLength(person);
```

 上面代码中， `this`作为类型时，指向是当前的调用者`User`类的实例。所以当传入`Person`类实例时，因为`Person`类实例缺少`age`属性，所以不满足`User`类实例要求，所以报错。

##### `this`基于类型的守卫

  你可以在类和接口中的方法的返回位置使用`this is Type`的方式，设置`this`的类型。当一个混合类型被缩小时，目标对象的类型将被缩小到指定的`Type`。

```typescript
class Counter {
  isFoo(): this is Foo {
    return this instanceof Foo
  }
  isBar(): this is Bar {
    return this instanceof Bar
  }
}


class Foo extends Counter {
  foo = 'foo'
}

class Bar extends Counter {
  bar = 'bar'
}

const count: Counter = new Foo()

if(count.isFoo()) {
  count.foo
}

if(count.isBar()) {
  count.bar
}
```

  通过`this is Type`可以指定`this`的类型。

  基于 this 的类型保护的一个常见用例是允许对特定字段进行延迟验证

```typescript
class Person {
  name?: string;
  hasName(): this is {name: string} {
    return this.name !== undefined
  }
}
```

##### 参数属性

  每次给属性赋值前，都需要先声明属性。

```typescript
class Person {
  constructor(name: string) {
    // Error, Person 类不存在 name 属性
    this.name = name;
  }
}
```

  TS提供参数属性语法糖，可以让我们省去声明和赋值过程。

```typescript
class Person {
  constructor(public name: string, public age: number) {

  }
}

const person = new Person('Tom', 18);
console.log(person.name); // 'Tom'
console.log(person.age); // 18
```

  上面的参数属性相当于下面的写法。

```typescript
class Person {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

  当然参数属性前面不止`public`可以用，还有`protected`、`private`和`readonly`。

##### 类表达式

  和函数一样，类也可以拥有表达式。

```typescript
const Person = class {
  
}
```

  如果类表达式有名字，那么这个名字只能在类的内部使用。

```typescript
const Person = class Me {
  static getName() {
    console.log(this.name);
  }
}

Person.getName() // 'Me'
```

  如果没有名字，那么`Person.getName()`方法打印出`Person`。

  通过类表达式，可以写出立即执行的类。

```typescript
const person = new class {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}('Tom');

console.log(person.name); // 'Tom'
```

##### 抽象类

  我们将一些公共属性和公共的方法放到一个公共的接口或者一个基类，但是这个基类可以被实例化，我们不想让这个基类被实例化，那么可以选择使用抽象类。

  使用`abstract`关键字定义抽象类。

```typescript
abstract class Base {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```

  抽象类不能被实例化，只能被继承。

```typescript
abstract class Base {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// Error, 抽象类不能被实例化
new Base('Tom');
```

  抽象类中的抽象属性和抽象方法。

```typescript
abstract class Base {
  name: string;
  abstract age: number
  constructor(name: string) {
    this.name = name;
  }
  abstract getNameLength(): number
}
```

  抽象属性和抽象方法不能在抽象类中被具体的实现。

```typescript
abstract class Base {
  name: string;
  abstract age: number
  constructor(name: string) {
    this.name = name;
    // Error, constructor 中不能访问抽象属性
    this.age
  }
  // Error, 抽象方法不能被具体实现
  abstract getNameLength() {
    
  }
}
```

  抽象属性和抽象方法是在抽象类的子类中具体实现的。

```typescript
abstract class Base {
  name: string;
  abstract age: number
  constructor(name: string) {
    this.name = name;
  }
  abstract getNameLength(): number
}

class Person extends Base {
  age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
  getNameLength() {
    return this.name.length;
  }
}
```

  子类如果没有具体实现抽象类的抽象属性和抽象方法，那么就会报错。

  抽象类和接口的区别，抽象类可以具体属性值和具体方法。

```typescript
abstract class Base {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hello!, My name is ${this.name}`);
  }
}

class Person extends Base {

}

const person = new Person('tom');
person.sayHi(); // 'Hello!, My name is Tom'
```

**抽象构造签名**

  有时候，我们想接收一个抽象类的子类实例，那么我们一般会这么定义一个函数。

```typescript
abstract class Base {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Person extends Base {}
class User extends Base {}

function getName(ctor: Base) {
  // Error, 抽象类不能被实例化
  const { name } = new ctor('Tom');
}
```

  因为我们正实例化一个抽象类，那么该如何解决这个问题，可以使用抽象构造签名。

```typescript
// new (name: string) => Base 抽象构造签名
function getName(ctor: new (name: string) => Base) {
  const { name } = new ctor('Tom');
}
```

  `new (name: string) => Base`。首先`new`表示该函数应该是一个构造函数，参数是一个字符串； 返回`Base`，说明这个构造函数是`Base`类或`Base`类的子类。

  ```typescript
getName(Person);
getName(User);
// Error, Base 不能被实例化
getName(Base)
  ```

##### 类的类型

  当我们声明一个类的时候，TS会默认生成一个同名接口，接口的类型就是实例的类型。

```typescript
class Person {
  public name: string;
  public age: number;
  static title: string = 'person';
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const obj: Person = {
  name: 'Tom',
  age: 18
}
```

  定义的变量`obj`为`Person`类型，也就是`{name: string, age: number}`类型，TS只会对类的实例生成接口。

```typescript
class Person {
  public name: string;
  public age: number;
  public sex: string;
  static title: string = 'person';
  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}

class User {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const obj: Person = new User('Jerry', 18, 'male');
```

  任何不要使用空类作为参数。

```typescript
class Empty {}
 
function fn(x: Empty) {
  // do some ...
}
 
fn(window);
fn({});
fn(fn);
fn(1);
fn(true);
fn('Tom');
```

  因为使用一个空的类型，那么这个函数除了`undefined`和`null`k可以传入任何值。

##### 其他信息

* `public（protected、private) `可以和`readonly`、`static`、`declare`一起使用。

  ```typescript
  class User {
    public readonly name: string;
    private static readonly age: number;
    declare private static readonly title: string;
    private declare static readonly id: number
    constructor(name: string) {
      this.name = name;
    }
  }
  ```

    优先级关系`declare = public（protected、private) > static > readonly`

* 直接挂载在实例身上的属性和方法。

  ```typescript
  class User {
    name = 'Tom';
    getNameLength = function(this: User) {
      return this.name.length;
    }
  }
  ```

    上面代码中，`name`和`getNameLength()`方法是直接挂载在实例身上。

  ```typescript
  const user1 = new User();
  const user2 = new User();
  // Object.keys() 只会获取自身的属性
  console.log(Object.keys(user1)); // ['name', 'getNameLength']
  console.log(user1.name === user2.name);  // true
  ```

    由于属性和方法是直接挂载在实例自身上的，对于一些可以共用的属性或者方法来说，每次实例化一个类，都会造成内存空间的浪费。

  ```typescript
  class User {
    name = 'Tom';
    getNameLength = function(this: User) {
      return this.name.length;
    }
    commonGetNameLength() {
      return this.name.length;
    }
  }

  const user1 = new User();
  const user2 = new User();

  console.log(Object.keys(user1)); // ['name', 'getNameLength']
  console.log(user1.getNameLength === user2.getNameLength); // false
  console.log(user1.commonGetNameLength === user2.commonGetNameLength);  // true
  ```

* 构造函数参数属性也可以使用`readonly`。

  ```typescript
  class User {
    constructor(readonly name: string, private readonly id: number) {
      
    }
  }
  ```

  `declare`不能在构造函数中使用。

* 使用`typeof 类`和直接使用类作为类型有区别。

  ```typescript
  class Person {
    name: string;
    age: number;
    static title = 'class Person';
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  const person: Person = {
    name: 'Tom',
    age: 18
  }

  const person1: typeof Person = class {
    name: string;
    static title = "class Person";
    constructor(name: string) {
      this.name = name;
    }
  }
  ```

  类直接被当做类型时，类型为实例属性，当使用`typeof`时，则是静态属性和`constructor`构造函数。

### 