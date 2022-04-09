对于我这种前端小白来说，迭代器和生成器可能一时间难以理解，这个问题也困扰了我很长一段时间，查了很多资料，这里简单谈谈

## 首先要知道什么叫迭代

- 在JavaScript中，计数循环就是一种最简单的迭代，比如

```javascript
for (let i = 1;i <= 10; ++i) {
    console.log(i)
}
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

- 循环是迭代的基础，这是因为它可以指定迭代的次数，以及每次迭代要执行什么操作。每一次循环都会在下一代开始之前完成，而每次迭代的顺序都是事先定义好的。 
- 迭代会在一个有序集合上进行。（“有序”可以理解为集合中所有项都可以按照既定的顺序被遍历，特别是开始和结束项有明确的定义）数组是JavaScript中有序集合的最典型的例子。

```javascript
let collection = [ 'foo', 'bar', 'baz'];

for (let index = 0; index < collection.length; ++index) {
    console.log(collection [index]);
}
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

- 因为数组有以知长度，且数组每一项都可以通过索引获取，所以这个数组可以通过递增索引来遍历。但是因为**迭代之前需要事先知道如何使用数据结构，遍历顺序并不是数据结构固有的。**所以通过这种循环来执行例程并不理想
- ES5 新增了 Array.prototype.foEach() 方法，向通过迭代需求迈进了一步（但仍然不够理想）：

```javascript
let collection = ['foo', 'bar', 'baz'];

collection.forEach((item) => console.log(item));
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

​        这个方法解决了单独记录索引和通过数组对象取得值得问题。不过，没有办法标识迭代何时终止。因此这个方法只适用于数组，而且回调结构也比较笨拙。

# 迭代器模式

- 这是解决上述问题的一个方式。迭代器模式（特别是在 ECMAScript 这个语境下）描述了一个方案，即可以把有些结构称为“可迭代对象”（iterable），因为它们实现了正式的 Itrrable 接口，而且可以通过 Iterator 消费。
- 可迭代对象是一种抽象的说法。基本上，可以把可迭代对象理解成数组或集合这样的集合类型的对象。它们包含的元素都是有限的，而且都具有无歧义的遍历顺序

```javascript
// 数组的元素是有限的
// 递增索引可以按序访问每个元素
let arr = [3, 1, 4];

// 集合的元素是有限的
// 可以按插入顺序访问每个元素
let set = new Set().add(3).add(1).add(4);
console.log(set); // Set(3) { 3, 1, 4 }
console.log(set.has(3, 1, 4)); // true
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

- 不过，可迭代对象不一定是一个集合对象，也可以是仅仅具有类似数组行为的其他数据结构，比如开始提到的计数循环。该循环中生成的值是暂时性的，但循环本身是在执行迭代。计数循环和数组都具有可迭代对象的行为。
- 任何实现 Iterable 接口的数据结构都可以被实现 Iterator 接口的结构“消费”（consume）。迭代器是按需创建的一次性对象。每个迭代器都会关联一个可迭代对象，而迭代器会暴露迭代器关联的可迭代对象的 API 。迭代器无需了解与其关联的可迭代对象的结构，只需要知道如何取得连续的值。这种概念上的分离正是 Iterable 和 Iterator 的强大之处。