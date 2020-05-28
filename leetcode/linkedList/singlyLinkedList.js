
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function Circular(head) {
    let start = head
    while (head.next !== null) {
        head = head.next
    }
    head.next = start
    return start
}

function array2list (arr) {
    let head = null
    for (let v of arr.reverse()) {
        nextHead = head
        head = new ListNode(v)
        head.next = nextHead
    }
    return Circular(head)
}

var testData = [
    [10, 12, 14, 16],
    [1, 2, 3],
]

for (let v of testData) {
    console.log(array2list(v))
}

