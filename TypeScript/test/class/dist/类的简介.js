"use strict";
class Person {
    constructor() {
        /*
        直接定义属性是实例属性，需要通过对象的实例去访问
        */
        this.name = "黄文杰";
        this.age = 18;
    }
}
const per = new Person();
console.log(per.name);
