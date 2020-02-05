
function* gen() {
    console.log('step1:')
    yield 'hello'
    console.log('step2:')
    yield 'Lucy'
    console.log('step3:')
    return 'end'
}

const g = gen()

console.log(g.next())
console.log(g.next().value)
console.log(g.next().value)

// output 

// step1:
// { value: 'hello', done: false }
// step2:
// Lucy
// step3:
// end