







/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    console.log(l1, l2);
    
};

// ListNode {
//     val: 2,
//     next: ListNode { val: 4, next: ListNode { val: 3, next: null } } } ListNode {
//     val: 5,
//     next: ListNode { val: 6, next: ListNode { val: 4, next: null } } }
  
// {"val":2,"next":{"val":4,"next":{"val":3,"next":null}}} {"val":5,"next":{"val":6,"next":{"val":4,"next":null}}}
// [7,0,8]
var testData = [
    [
        [2,4,3],
        [5,6,4]
    ]
]

for (let item of testData) {
    addTwoNumbers(...item)
}