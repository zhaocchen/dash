function* gen() {
    console.log(`step 1:${yield}`)
    console.log(`step 2:${yield}`)
    console.log('end')
    return 'end'
}

var g = gen()

g.next()
g.next('1')
g.next('2')

// output 

// step 1:1
// step 2:2
// end

// error
var f = gen()
f.next('1')
f.next('2')
f.next('3')

// output 

// step 1:2
// step 2:3
// end