// 给出执行结果并解释

const obj = {
    '2': 2,
    '3': 3,
    'length': 2,
    'splice': Array.prototype.splice, 
    'push': Array.prototype.push
 }
obj.push(1)
obj.push(2)
console.log(obj)

// chrome
// Object(4) [empty × 2, 1, 2, splice: ƒ, push: ƒ]

// node
// no change