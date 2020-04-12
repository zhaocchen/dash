/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let dp = []
    for (let index=0; index <= N; index++) {
        // console.log(index);
        dp[index] = index < 2 ? index : dp[index-1] + dp[index -2]
    }
    const res = dp.pop()
    console.log(res);
    return res
};

var testData = [
    2,
    3,
    4,
]

for (let item of testData) {
    // console.log(item);
    fib(item)
}