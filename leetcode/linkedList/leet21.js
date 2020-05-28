function ListNode(val) {
    this.val = val;
    this.next = null;
}

function array2list (arr) {
    let head = null
    for (let v of arr.reverse()) {
        const oldHead = head
        head = new ListNode(v)
        head.next = oldHead
    }
    return head
}

var reverseList = function(head) {
    if (head === null) {
        return null
    }
    let reversedList = null
    let currList = head
    while (currList !== null) {
        let newList = currList.next
        currList.next = reversedList
        reversedList = currList
        currList = newList
    }
    return reversedList
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    l1 = reverseList(l1)
    l2 = reverseList(l2)
    let head = null
    while (l1 !== null && l2 !== null) {
        const oldHead = head
        if (l1.val >= l2.val) {
            head = new ListNode(l1.val)
            l1 = l1.next
        } else {
            head = new ListNode(l2.val)
            l2 = l2.next            
        }
        head.next = oldHead
    }

    while (l1 !== null ) {
        const oldHead = head
        head = new ListNode(l1.val)
        head.next = oldHead
        l1 = l1.next
    }

    while (l2 !== null) {
        const oldHead = head
        head = new ListNode(l2.val)
        head.next = oldHead
        l2 = l2.next
    }
    return head
};

const testData = [
    [[1,2,4], [1,3,4]]
]

for (let v of testData) {
    const l1 = array2list(v[0])
    const l2 = array2list(v[1])
    console.log(mergeTwoLists(l1, l2))
}