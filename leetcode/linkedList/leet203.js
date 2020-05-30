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
var removeElements = function(head, val) {
    let sentinel = new ListNode(0)
    sentinel.next = head
    let [slow_head , fast_head] =  [sentinel, head]
    while (fast_head !== null) {
        if (fast_head.val == val) {
            slow_head.next = fast_head.next
        } else {
            slow_head = fast_head
        }
        fast_head = fast_head.next
    }
    return sentinel.next
    console.log(head, val)
};

var testData = [
    {arr: [1,2,6,3,4,5,6], val: 6}
]

for (let v of testData) {
    const list = array2list(v.arr)
    console.log(removeElements(list, v.val))
}
