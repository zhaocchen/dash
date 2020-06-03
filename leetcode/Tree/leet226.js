const { createTree } = require('./index.js')

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // 1. 全等
    // 2. 分号结束
    if (root === null) return null;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
    return root
};

var testData = [
    [4,2,7,1,3,6,9],
]

for (let v of testData) {
    const tree = createTree(v)
    console.log(tree)
    console.log(invertTree(tree))
}