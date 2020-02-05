// Generator.prototype.next()

// title, 执行顺序
function* gen(a) {
    console.log('step 1:', a,b,c)
    var b = yield a+1
    console.log('step 2:', a,b,c)
    var c = yield b+2
    console.log('step 3:', a,b,c)
    return c+3
}

const g = gen(1)

console.log(g.next())
console.log(g.next(1))
console.log(g.next(1))

// 注意: 函数中的除了接受的a, 其他变量b,c在yeild中表示接受参数， 与变量bc不相干
// output

// { value: 2, done: false }
// { value: 4, done: false }
// { value: 6, done: true }