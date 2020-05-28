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
    [1,0,1],
    [0,0],
    [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0],
]

for (let v of testData) {
    let currList = array2list(v)
    console.log(getDecimalValue(currList))
}