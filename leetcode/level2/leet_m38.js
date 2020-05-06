/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    const list = [...s]
    const permutations = []
    function dfs (p, res) {
        // console.log(p, res);
        //截止条件
        if(res.length === p.length) {
            // console.log(res.join(""))
            permutations.push(res.join(""))
            return;
        }
        //筛选
        for(let i=0; i < p.length; i++) {
            const v = p[i]
            if (v) {
                // 剪枝
                if ((p.slice(0, i)).includes(v)) {
                    continue
                }
                const newP = [...p]
                newP.splice(i, 1, null)
                dfs(newP, [...res, v])
            }
        }
    }
    dfs(list, [])
    return permutations
};


// ["abc","acb","bac","bca","cab","cba"]
var testData = [
    // "abc",
    "abb",
    // "zg",
]
for (let v of testData) {
    console.log(permutation(v));
}
