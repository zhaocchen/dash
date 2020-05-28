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
 * @return {ListNode}
 */
var middleNode = function(head) {
    if (head == null || head.next == null) return head
    let slow_head = head
    let fast_head = head.next
    while (fast_head !== null) {
        if (fast_head.next === null) return slow_head.next
        slow_head = slow_head.next
        fast_head = fast_head.next.next
    }
    return slow_head
    console.log(head)
};

var testData = [
    // [],
    [1],
    [1,2,3,4,5],
    [1,2,3,4,5,6],
]

for (let v of testData) {
    let currList = array2list(v)
    console.log(middleNode(currList))
}