/*
 * @Author: 黄文杰
 * @Date: 2022-07-31 21:05:34
 * @LastEditTime: 2022-07-31 21:53:43
 */
var Person = /** @class */ (function () {
    function Person(arr, id) {
        this.arr = arr;
        this.id = id;
    }
    Person.prototype.filter = function (callback) {
        var _this = this;
        return function () {
            console.log(_this.id);
            return function (a) {
                console.log(a);
                return callback(_this.arr);
            };
        };
    };
    return Person;
}());
function inBetween(a, b) {
    return function (x) {
        console.log(x.filter(function (f) { return f > a && f < b; }));
    };
}
var person = new Person([1, 2, 3, 4, 5, 6], 1);
person.filter(function (r) {
    console.log(r);
})()(2);
var fun_n = person.filter(function (r) {
    console.log(r);
})();
fun_n(3);
