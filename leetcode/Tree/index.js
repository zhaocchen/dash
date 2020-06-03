var exports = module.exports

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const createTree = function (arr, index=0) {
    let pNode = null
    if (index < arr.length) {
        if (!arr[index]) return
        pNode = new TreeNode(arr[index])
        pNode.left = createTree(arr, index * 2 + 1)
        pNode.right = createTree(arr, index * 2 + 2)
    }
    return pNode
}

exports.createTree = createTree