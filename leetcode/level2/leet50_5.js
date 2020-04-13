/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let res = 1
    function fastPow(a, b) {
        if (b == 0) {
            return 1
        }
        if (b % 2 == 0) {
            const half = fastPow(a, b /2)
            return half * half
        } else {
            return a * fastPow(a, b-1)
        }
    }
    if (n < 0) {
        n = -n
        x = 1/ x
    }
    res = fastPow(x, n)
    console.log(res);
    
};


var testData = [
    // [2, 0],
    // [2,1]
    // [2,4]
    // [2, 3],
    [2, 10]
]

for (let i of testData) {
    myPow(i[0], i[1])
}