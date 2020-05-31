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
// 有序链表
// var deleteDuplicates = function(head) {
//     if (head == null || head.next == null) return head
//     let curNode = head
//     while (curNode !== null && curNode.next !== null) {
//         if (curNode.next.val == curNode.val) {
//             curNode.next = curNode.next.next
//         } else {
//             curNode = curNode.next
//         }
//     }
//     return head
//     console.log(head)
// };

// 未解？
var deleteDuplicates = function(head) {
    if (head == null || head.next == null) return head
    let curNode = head
    while (curNode !== null && curNode.next !== null) {
        if (curNode.next.val == curNode.val) {
            // curNode.next = curNode.next.next
            let nextNode = curNode.next
            while (nextNode.next !== null && nextNode.next.val == nextNode.val) {
                nextNode = nextNode.next
            }
            curNode=nextNode.next
        } else {
            curNode = curNode.next
        }
    }
    return head
    console.log(head)
}

var testData = [
    // [],
    // [1],
    [1,1,2],
    // [1,1,2, 3, 3],
    // [0,0,0,0,0],
]

for (let v of testData) {
    let list = array2list(v)
    console.log(deleteDuplicates(list))
}

