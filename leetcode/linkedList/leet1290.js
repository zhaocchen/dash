const { array2list } = require('./index')

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let res = 0
    while (head !== null) {
        res *= 2
        if (head.val) res += 1
        head = head.next
    }
    return res
    // console.log(head)
};

var testData = [
    [1,0,1],  // 5
    [0,0], // 5
    [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0], // 18880
]

for (let v of testData) {
    let currList = array2list(v)
    console.log(getDecimalValue(currList))
}