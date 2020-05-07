
/**
 * 
 * @param {string[]} p 
 * @param {boolean[]} pb 
 * @param {number} level  截止条件， 深度
 * @param {string[]} res    结果
 */
function dfs(p, pb, level, res) {
    // 1. 截止条件
    if (level === p.length) {
        console.log(res.join(""));
        return
    }

    // 2. 遍历候选节点
    for(var i = 0; i < p.length; i++) {
        // 筛选
        var c = p[i]
        if (!pb[i]) {
            // 未使用过
            const newPb = [...pb]
            newPb.splice(i, 1, true)
            dfs(p, newPb, level+1, [...res, c])
        }
    }
}

dfs(['a', 'b', 'c'], [false, false, false], 0, [])