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
    // const unique_arr = []
    const unique_set = new Set([])
    let sentinel = new ListNode(0)
    sentinel.next = head
    curNode = sentinel
    while (head !== null) {
        // if (unique_arr.includes(head.val)) {
        if (unique_set.has(head.val)) {
            curNode.next = head.next
        } else {
            // unique_arr.push(head.val)
            unique_set.add(head.val)
            curNode = head
        }
        head = head.next
    }
    return sentinel.next
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

