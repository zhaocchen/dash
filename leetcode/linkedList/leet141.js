function ListNode(val) {
    this.val = val;
    this.next = null;
}

function Circular(head, pos) {
    if (pos < 0) return head
    let start = head
    let index = 0
    while (index !== pos && head.next !== null) {
        head = head.next
        index++
    }
    head.next = start
    return start
}

function array2list (arr, pos) {
    let head = null
    for (let v of arr.reverse()) {
        nextHead = head
        head = new ListNode(v)
        head.next = nextHead
    }
    return Circular(head, pos)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head == null || head.next == null) return false
    let slow_head = head
    let fast_head = head.next
    while (fast_head !== slow_head) {
        if (fast_head == null || fast_head.next == null) {
            return false
        }
        slow_head = slow_head.next
        fast_head = fast_head.next.next
    }
    // console.log(head)
    return true
};

// ListNode {
//     val: 3,
//     next: ListNode { val: 2, next: ListNode { val: 0, next: [ListNode] } }
//   }
      
// ListNode { val: 1, next: ListNode { val: 2, next: [Circular] } }

var testData = [
    {head: [3,2,0,-4], pos: 1}, 
    {head: [1, 2], pos: 0},
    {head: [1], pos: -1},
    {head: [1, 2], pos: -1},
]

for (let v of testData) {
    let currList = array2list(v.head, v.pos)
    console.log(hasCycle(currList))
}
