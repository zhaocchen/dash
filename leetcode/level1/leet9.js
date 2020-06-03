/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || x > Math.pow(2, 32) - 1) return false
    if (x < 10) return true
    let num = x
    let reversedX = 0
    while (num != 0) {
        reversedX = reversedX * 10 + num % 10
        num = parseInt(num / 10)
    }
    // console.log(reversedX)
    return x == reversedX
};

var testData = [
    121,
    -121,
    10
]

for (let v of testData) {
    console.log(isPalindrome(v))
}