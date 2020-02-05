
function* gen(a) {
    yield a+1
    yield a+2
    return a+3
}

const g = gen(1)

console.log(g.next())
console.log(g.next())
console.log(g.next())

// output 
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: true }

console.log('==========================')

console.log(gen(2).next())
// 错误写法
// console.log(gen(1).next().next())