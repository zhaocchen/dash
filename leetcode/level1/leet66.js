/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let tmp = 1
    for(let index = digits.length-1; index >= 0; index--) {
        let curDifit = digits[index]
        if (tmp == 1 && curDifit == 9) {
            digits[index] = 0
            continue
        }
        digits[index] += tmp
        tmp = 0
    }
    if (tmp == 1) digits.unshift(1)
    return digits
};

var testData = [
    [1,2,3],
    [4,3,2,1],
    [0]
]

for (let v of testData) {
    console.log(plusOne(v))
}
// @lc code=end

