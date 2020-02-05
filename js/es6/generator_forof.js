
function* gen() {
    console.log('step1:')
    yield 'hello'
    console.log('step2:')
    yield 'Lucy'
    console.log('step3:')
    return 'end'
}

const g = gen()

for (let v of g) {
    console.log(v)
}

// output

// step1:
// hello
// step2:
// Lucy
// step3:
