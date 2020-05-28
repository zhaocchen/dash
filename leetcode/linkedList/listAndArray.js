
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
    let list = null
    for (let v of arr.reverse()) {
        const oldList = list
        list = new ListNode(v)
        list.next = oldList
    }
    return list
}

/**
 * 链表转数组
 * @param {*} list 
 */
function list2array (list) {
    let res = []
    while (list !== null) {
        res.push(list.val)
        list = list.next
    }
    return res
}

const testArr = [1, 2, 3, 4, 5]

const testList = array2list(testArr)

console.log(testList)

const newArr = list2array(testList)

console.log(newArr)
