/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//     const isMinus = x < 0
//     let res = String(Math.abs(x)).split('').reverse().join('')
//     let maxNum = Math.pow(2, 31)
//     if ((isMinus && res > maxNum - 1) || (!isMinus && res > maxNum)) return 0
//     return (isMinus ? '-' : '') + res
// };

var reverse = function(x) {
    let res = 0
    let maxNum = Math.pow(2, 31)
    let minNum = -Math.pow(2, 31)
    while (x !== 0) {
        let pop = x % 10
        if (res > maxNum / 10 || (res == maxNum / 10 && pop > 7)) return 0
        if (res < minNum / 10 || (res == minNum / 10 && pop < -8)) return 0
        x = parseInt(x / 10)
        res = res * 10 + pop
    }
    return res
};

var testData = [
    123,
    -123,
    21,
    1534236469
]

for (let v of testData) {
    console.log(reverse(v))
}