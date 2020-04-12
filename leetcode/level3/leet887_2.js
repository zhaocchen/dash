/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
    let memo = Array.from({length: K+1}, v => [])
    function dp(tmpK, tmpN) {
        // console.log(tmpK, tmpN);
        if (tmpK === 1) return tmpN
        if (tmpN === 0) return 0
        if (memo[tmpK][tmpN] )  return memo[tmpK][tmpN]
        let res
        for (let index=1; index <= tmpN; index++) {
            const maxStep = Math.max(dp(tmpK, tmpN - index), dp(tmpK - 1, index - 1)) + 1
            res = res ? Math.min(res, maxStep) : maxStep
        }
        memo[tmpK][tmpN] = res
        return res
    }
    const minStep = dp(K, N)
    console.log(minStep);
    return minStep
};

var testData = [
    // {K: 1, N:2},
    // {K: 2, N:6},
    // {K: 3, N:14},
    {K: 5, N:1000},
]

for (let item of testData) {
    // console.log(item);
    superEggDrop(item.K, item.N)
}