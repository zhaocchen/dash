/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) {
        return myPow(1/ x, -n)
    }
    if (n == 0 || n == 1) {
        return n == 0 ? 1 : x
    }
    if (n % 2 == 0) {
        return myPow(x * x, n/2)
    } else {
        return myPow(x * x, Math.floor(n/2)) * x
    }
};


var testData = [
    // [2, 0],
    // [2,1]
    // [2,4]
    // [2, 3],
    [2, 10]
]

for (let i of testData) {
    console.log(myPow(i[0], i[1]));
    
}