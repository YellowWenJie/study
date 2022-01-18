# TypeScript

https://blog.csdn.net/qq_38490457/article/details/109965694?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164213657616780255221830%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=164213657616780255221830&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-2-109965694.first_rank_v2_pc_rank_v29&utm_term=typescript&spm=1018.2226.3001.4187

## 一、初始化项目

* ```
   mkdir typescript-demo
   cd typescript-demo
   tsc --init
  ```

  

然后在项目中修改outDir

![image-20201122150744198](https://img-blog.csdnimg.cn/img_convert/6bf6e2dab55918359d1640b9ff7897eb.png)

![image-20201122150939597](https://img-blog.csdnimg.cn/img_convert/4aef144e5bf0eb9320c68d3973ba09c6.png)![image-20201122151307723](https://img-blog.csdnimg.cn/img_convert/81a7a34f6fe0cbb6c800ac9fbdc279c8.png)![image-20201122151014202](https://img-blog.csdnimg.cn/img_convert/49bc62ed6fd68ae1c8f66ce4e15fc9ae.png)![image-20201122150856052](https://img-blog.csdnimg.cn/img_convert/9a640ba72ad01e3f4a0ea13a4797c7a9.png)

## 修饰符

- public：公有类型，在当前类里面、子类、类外面都可以访问
- protected：保护类型，在当前类里面、子类里面可以访问，在类外部没法访问
- private：私有类型，在当前类里面可以访问，子类、类外部都没法访问
- static：静态属性，被静态修饰符修饰的属性就是静态属性，静态属性可以通过类名直接调用
- abstract：抽象类，它是提供其他类继承的基类，不能直接被实例化
- implements 实现，用于接口





* ### typerscript super关键字的用法 

* 如果父、子类有同名的方法,子类去调用父类的同名方法需要用 **“父类.prototype.method.call(this)”**.
  但是在typescript中,提供了一个关键字super,指向父类.
  super.method() 这样就可以达到调用父类同名的方法.