/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim()
    let res = ''
    let flag = null
    for (let index=0; index < str.length; index++) {
        let curStr = str[index]
        let notNumber = isNaN(Number(curStr)) || curStr == ' '
        if (res.length == 0 && flag == null) {
            if (flag == null && ['-', '+'].includes(curStr)) {
                flag = curStr
                continue
            }
           if (notNumber) {
                return 0
            }
        }
        if ((res.length > 0 || flag != null)&& notNumber) {
            break
        }
        if (!notNumber) {
            res += str[index]
        }
        
    }
    // console.log(flag, res)
    res = Number(res)
    if (flag && res == '') return 0
    if (flag != null) res = flag + res
    const max_int = Math.pow(2, 31) - 1
    const min_int = -Math.pow(2, 31)
    if (res > max_int) return max_int
    if (res < min_int) return min_int
    return res
};

var testData = [
    "42",
    "   -42", // -42
    "4193 with words", // 4193
    "words and 987", // 0
    "-91283472332", // -2147483648
    "+1", // +1
    "-", // 0
    '+-2', // 0
    "  -0012a42", // -12
    "   +0 123", // 0
]

for (let v of testData) {
    console.log(myAtoi(v))
}
// @lc code=end

