/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
    let memo = Array.from({length: K+1}, v => [])
    function dp(k, n) {
        // console.log(k, n);
        if (k === 1) return n
        if (n === 0 || n === 1) return n
        if (memo[k][n] )  return memo[k][n]
        let res
        let lo = 1
        let hi = n
        let x
        // for (let index=1; index <= n; index++) {
        //     const maxStep = Math.max(dp(k, n - index), dp(k - 1, index - 1)) + 1
        //     res = res ? Math.min(res, maxStep) : maxStep
        // }
        while (lo + 1 < hi) {
            x = Math.ceil((lo + hi) / 2)

            t1 = dp(k, n-x)
            t2 = dp(k-1, x-1)
            if (t1>t2) {
                lo=x
            } else if (t1 < t2) {
                hi=x
            } else {
                lo = hi = x
            }
            const maxStep = Math.max(t1, t2) + 1
            res = res ? Math.min(res, maxStep) : maxStep
        }
        console.log(k,n, res);
        
        memo[k][n] = res
        return res
    }
    const minStep = dp(K, N)
    console.log(minStep);
    return minStep
};

var testData = [
    // {K: 1, N:2},
    // {K: 2, N:4},
    // {K: 2, N:6},
    // {K: 3, N:14},
    {K: 5, N:10000},
]

for (let item of testData) {
    // console.log(item);
    superEggDrop(item.K, item.N)
}