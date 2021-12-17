class Person {
  /*
  直接定义属性是实例属性，需要通过对象的实例去访问
  */
  name: string = "黄文杰";
  age: number = 18;
}
const per = new Person();
console.log(per.name);
