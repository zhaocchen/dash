/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createList(arr) {
    let list = null
    for (v of arr.reverse()) {
        let node = new ListNode(v)
        node.next = list
        list = node
    }
    return list
}

function printList(list) {
    let res = []
    while (list !== null) {
        res.push(list.val)
        list = list.next
    }
    return res
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let fast_head = head
    let slow_head = head
    for (let fast_index = 0; fast_index < k; fast_index++) {
        fast_head = fast_head.next
    }
    while (slow_head !== null) {
        if (fast_head === null) {
            return slow_head
        }
        fast_head = fast_head.next
        slow_head = slow_head.next
    }
};

var testData = [
    {
        arr: [1, 2, 3, 4, 5],
        k: 2
    }
]

for (let v of testData) {
    let list = getKthFromEnd(createList(v.arr), v.k)
    console.log(list)
    // console.log(printList(list))
}