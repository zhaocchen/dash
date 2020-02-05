// Generator.prototype.return()

function* gen() {
    yield 1;
    yield 2;
}

// 尝试1
var g = gen()
console.log(g.next())
console.log(g.next())
console.log(g.next())

// output
// { value: 1, done: false }
// { value: 2, done: false }
// { value: undefined, done: true }

// ==========================divide
// 尝试2
var g2 = gen()
console.log(g2.next())
console.log(g2.return(3))
console.log(g2.next())
console.log(g2.return(4))


// ouput
// { value: 1, done: false }
// { value: 3, done: true }
// { value: undefined, done: true }
// { value: 4, done: true }
// 结论， return可终止函数
