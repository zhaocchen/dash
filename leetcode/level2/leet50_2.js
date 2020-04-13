/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let res = 1
    if (n < 0) {
        n = -n
        x = 1/x
    }
    for (let i = n; i > 0; i--) {
        res *= x
    }
    console.log(res);
    return res
};


var testData = [
    // [2, 1],
    // [2, 3],
    // [2, -2]
    // [2, -2147483648] // 超时
]

for (let i of testData) {
    myPow(i[0], i[1])
}