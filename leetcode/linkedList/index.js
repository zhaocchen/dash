var exports = module.exports

/**
 * 链表节点
 * @param {*} val
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * 数组转链表
 * @param {*} arr 
 */
exports.array2list =  function (arr) {
    let list = null
    for (let v of arr.reverse()) {
        const oldList = list
        list = new ListNode(v)
        list.next = oldList
    }
    return list
}

/**
 * 链表转数组
 * @param {*} list 
 */
exports.list2array = function (list) {
    let res = []
    while (list !== null) {
        res.push(list.val)
        list = list.next
    }
    return res
}


