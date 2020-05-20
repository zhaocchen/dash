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
 * @return {ListNode}
 */
// var reverseList = function(head) {
//     while (head !== null) {
//         let reversedList = head.reversedList
//         const node = new ListNode(head.val)
//         if (reversedList !== undefined) {
//             node.next = reversedList
//         }
//         reversedList = node
//         if (head.next !== null) {
//             head = head.next
//             head.reversedList = reversedList
//         } else {
//             return reversedList
//         }
//     }
//     return null
// };
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


// [5,4,3,2,1]
// 创建链表 -> 反转链表 -> 遍历链表

var testData = [
    [1,2,3,4,5],
    []
]



for (let v of testData) {
    const list = createList(v)
    // console.log(printList(list));
    let reversedList = reverseList(list);
    let reversedArr = printList(reversedList)
    console.log(reversedArr);
}