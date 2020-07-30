
// 简洁版，自测可实现返回满足测试函数的第一个值， 否者返回undefined
Array.prototype._find = function (fn) {
    for (var i= 0; i<this.length; i++) {
        if (fn(this[i])) {
            return this[i];
        }
    }
}


const array1 = [5, 12, 8, 130, 44];

const found = array1._find(element => element > 10);

console.log(found);