/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let dp = []
    for (let index = 0; index <= n; index++) {
        if (index < 3 ) {
            dp[index] = index == 0 ? 0: 1
            continue
        }
        dp[index] = dp[index-1] + dp[index-2] + dp[index -3] 
    }
    const res = dp.pop()
    // console.log(res);
    return res
};

var testData = [
    // 4,
    25,
]

for (let item of testData) {
    // console.log(item);
    tribonacci(item)
}