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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lenA = 0
    let lenB = 0
    let lenDiff = 0
    let [fast_head, slow_head] = [headA, headB]
    while (headA !== null) {
        headA = headA.next
        lenA++
    }
    while (headB !== null) {
        headB = headB.next
        lenB++
    }
    lenDiff = lenA - lenB
    if (lenDiff < 0) {
        [fast_head, slow_head] = [slow_head, fast_head]
        lenDiff = Math.abs(lenDiff)
    }

    for (let fast_index = 0; fast_index < lenDiff; fast_index++) {
        fast_head = fast_head.next
    }

    while (slow_head !== null) {
        // if (fast_head == slow_head) {
        if (fast_head.val == slow_head.val) {
            return slow_head
        }
        fast_head = fast_head.next
        slow_head = slow_head.next
    }
};

var testData = [
    {listA: [4,1,8,4,5], listB: [5,0,1,8,4,5]}
]

for (let v of testData) {
    const listA = array2list(v.listA)
    const listB = array2list(v.listB)
    console.log(getIntersectionNode(listA, listB))
}
