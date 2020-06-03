/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
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