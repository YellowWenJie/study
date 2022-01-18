"use strict";
// let arr: [number, string] = [1, "b"];
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// enum Flag {
//   success,
//   error,
//   overtime
// }
// let s = Flag.overtime;
// let n: null = null;
// function success(): void {
//   console.log("执行成功了，我不需要返回值");
// }
// function f(a: number, b: number = 1): number {
//   return a + b;
// }
// function s(...a: Array<number>): number {
//   let sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum += a[i];
//   }
//   return sum;
// }
// let b: Array<number> = [1, 2, 3];
// let c: Array<number> = [1, 2, 3];
// console.log(s(b, c));
// function getInfo(name: string): string;
// function getInfo(name: string, age: number): string;
// function getInfo(name: string, age?: string | number): string {
//   if (age) {
//     return "我叫：" + name + "，年龄：" + age;
//   } else {
//     return "我叫：" + name;
//   }
// }
// function print(info: string): void;
// function print(num: number): void;
// function print(message: string | number) {
//   console.log(message);
// }
// class Person {
//   protected name: string; //属性，前面省略了public关键词
//   constructor(n: string) {
//     //构造函数，实例化类的时候触发的方法
//     this.name = n; //使用this关键字为当前类的name属性赋值
//   }
//   run(): void {
//     //方法
//     console.log(this.name + "在跑步");
//   }
// }
// let per = new Person("黄文杰");
// class Chinese extends Person {
//   public age: number;
//   constructor(n: string, a: number) {
//     super(n);
//     this.age = a;
//   }
//   speak(): void {
//     super.run();
//     console.log(this.name + "说中文");
//   }
// }
// let c = new Chinese("黄文杰", 20);
// c.speak();
// class Person {
//   protected a: string = "protected";
//   private b: string = "private";
//   public c: string = "public";
//   static d: string = "static";
// }
// let per = new Person();
// console.log(Person.d);
// abstract class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   abstract eat(): any;
//   run() {
//     console.log(this.name + "会跑");
//   }
// }
// class Dog extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   eat(): void {
//     console.log(this.name + "吃骨头");
//   }
// }
// class Cat extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   eat(): any {
//     console.log(this.name + "吃鱼");
//   }
// }
// let cat = new Cat("猫");
// cat.eat();
// console.log(cat.name);
//对传入对象的属性约束，以下这个是一个属性接口
// interface FullName {
//   firstName: string;
//   secondName: string;
// }
// function printName(name: FullName) {
//   console.log(name.firstName + "--" + name.secondName);
// }
// //传入的参数必须包含firstName、secondName
// var obj = {
//   age: 20,
//   firstName: "张",
//   secondName: "三"
// };
// printName(obj); //正确
// // printName("1213");//错误
//加密的函数类型接口
// interface encrypt {
//   (key: string, value: string): string;
// }
// var md5: encrypt = function (value) {
//   //模拟操作
//   return "----" + value;
// };
// console.log(md5("name", "zhangsan"));
// interface Anima {
//   name: string;
//   eat(str: string): void;
// }
// class Dog implements Anima {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   eat() {
//     console.log(this.name);
//   }
// }
// const dog = new Dog("狗");
// console.log(dog.name);
// dog.eat();
// interface Person {
//   eat(): void;
// }
// interface Programmer extends Person {
//   code(): void;
// }
// interface Web {
//   app(): void;
// }
// class WebProgrammer implements Person, Web {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   eat(): void {
//     console.log(this.name + "吃饭");
//   }
//   code(): void {
//     console.log(this.name + "敲代码");
//   }
//   app(): void {
//     console.log(this.name + "开发小程序");
//   }
// }
// const w = new WebProgrammer("黄文杰");
// w.eat();
// w.code();
// w.app();
// class MinClass<T> {
//   public list: T[] = [];
//   add(value: T): void {
//     this.list.push(value);
//     console.log(this.list);
//   }
//   min(): T {
//     var minNum = this.list[0];
//     for (var i = 0; i < this.list.length; i++) {
//       if (minNum > this.list[i]) {
//         minNum = this.list[i];
//       }
//     }
//     return minNum;
//   }
// }
// let m1 = new MinClass();
// m1.add(11);
// m1.add(5);
// m1.add(20);
// console.log(m1.min());
// function identity(value: any): any {
//   return value;
// }
// console.log(identity(1));
// function logClass(params: any) {
//   console.log(params);
//   params.prototype.apiUrl = "我是动态属性";
//   params.prototype.run = function () {
//     console.log("我是动态扩展的方法");
//   };
// }
// @logClass
// class HttpClinent {}
// let http: any = new HttpClinent();
// console.log(http.apiUrl);
// http.run();
// function logClass(params: string) {
//   return function (target: any) {
//     console.log(target); //target就是当前类
//     console.log(params); //params就是当前类传递进来的参数
//     target.prototype.apiUrl = params;
//   };
// }
// @logClass("http://www.baidu.com")
// class HttpClient {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// var http: any = new HttpClient("黄文杰");
// console.log(http.apiUrl);
// function logProperty(params: any) {
//   //params就是当前类传递进来的参数
//   return function (target: any, attr: any) {
//     console.log(target);
//     console.log(attr);
//     target[attr] = params;
//   };
// }
// class HttpClient {
//   @logProperty("http://www.baidu.com")
//   public url: any | undefined;
//   getData() {
//     console.log(this.url);
//   }
// }
// var http = new HttpClient();
// http.getData();
function get(params) {
    //params就是当前类传递进来的参数
    return function (target, methodName, desc) {
        console.log(target);
        console.log(methodName);
        console.log(desc);
        target.apiUrl = params;
        target.run = function () {
            console.log("run");
        };
    };
}
class HttpClient {
    constructor() { }
    getData() {
        console.log(this.url);
    }
}
__decorate([
    get("http://www.baidu.com")
], HttpClient.prototype, "getData", null);
var http = new HttpClient();
console.log(http.apiUrl);
http.run();
