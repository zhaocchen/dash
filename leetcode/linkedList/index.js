/**
 * Definition for singly-linked list.
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


// let testArr = [1,2,3]
// let list = createList(testArr)
// console.log(list);
// console.log(printList(list));