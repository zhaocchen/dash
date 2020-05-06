/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    const list = [...s]
    const res = []
    const permutations = []
    function dfs (p) {
        //截止条件
        if(res.length === p.length) {
            // console.log(res.join(""))
            const permutationStr = res.join("")
            if (!permutations.includes(res.join(""))) {
                permutations.push(res.join(""))
            }
            return;
        }
        //筛选
        for(let i=0; i < p.length; i++) {
            const v = p[i]
            if (v) {
                res.push(v)
                p[i] = null
                dfs(p)
                res.pop()
                p[i] = v
            }
        }
    }
    // console.log(list)
    dfs(list)
    return permutations
};


// ["abc","acb","bac","bca","cab","cba"]
var testData = [
    // "abc",
    "abb",
]
for (let v of testData) {
    console.log(permutation(v));
}
