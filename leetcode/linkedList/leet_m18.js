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
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    let sentinel = new ListNode(0)
    sentinel.next = head
    curNode = sentinel
    while (head !== null) {
        if (head.val == val) {
            curNode.next = head.next
            return sentinel.next
        } else {
            curNode = head
        }
        head = head.next
    }
    return sentinel.next
    console.log(head, val)
};

var testData = [
    {head: [4,5,1,9], val: 9},
    {head: [4,5,1,9], val: 4},
]

for (let v of testData) {
    let list = array2list(v.head)
    console.log(deleteNode(list, v.val))
}

