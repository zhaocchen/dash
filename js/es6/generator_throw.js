// Generator.prototype.throw()

function* gen() {
    // while(true) {
        try {
            yield;
        } catch (e) {
            console.log("error caught!", e)
        }
    // }
}

var g = gen()
g.next()

g.throw()  // error caught! undefined

// 注释函数gen的while后第二次执行g.throw()，抛出外部异常
// output
// external error caught 1
try {
    g.throw('1')
    g.throw('2')
} catch (e) {
    console.log('external error caught', e)
}