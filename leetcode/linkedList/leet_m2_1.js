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
function array2list (arr) {
    // if (arr.length == 0) return null
    let list = null
    for (let v of arr.reverse()) {
        const oldList = list
        list = new ListNode(v)
        list.next = oldList
    }
    return list
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function(head) {
    if (head == null || head.next == null) return head
    const unique_set = new Set([])
    let curNode = head
    let fastNode = head
    while (fastNode !== null) {
        if (unique_set.has(fastNode.val)) {
            curNode.next = fastNode.next
        } else {
            unique_set.add(fastNode.val)
            curNode = fastNode
        }
        fastNode = fastNode.next
    }
    return head
//     console.log(head)
};


// 链表长度在[0, 20000]范围内。
// 链表元素在[0, 20000]范围内。
var testData = [
    [1, 2, 3, 3, 2, 1],
    [1, 1, 1, 1, 2],
]

for (let v of testData) {
    let list = array2list(v)
    console.log(removeDuplicateNodes(list))
}

