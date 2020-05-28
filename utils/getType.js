function getType (val) {
    let _toString = Object.prototype.toString
    let str = _toString.call(val)
    return str.slice(8,-1)
}

const testData = [
    null,
    undefined,
    false,
    5466,
    'hello',
    2n ** 53n,
    Symbol('123'),
    [1, 2, 3],
    {a: 12},
    new Date(),
    /\d+/,
    function foo() {},
    new Error('d undefined'),
]

for (let v of testData) {
    console.log(getType(v))
}