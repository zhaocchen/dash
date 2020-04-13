/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let res = 1
    if (n < 0) {
        n = -n
        x = 1 / x
    }
    for (let i = n; i != 0 ; i = Math.floor(i / 2)) {
        // console.log(i, curX, res);
        if (i % 2 != 0) {
            res *= x
        }
        x *= x
    }
    console.log(res);
    return res
};


var testData = [
    // [2, 1],
    // [2, 3],
    [2, -2]
]

for (let i of testData) {
    myPow(i[0], i[1])
}