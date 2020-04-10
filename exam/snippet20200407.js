function fn() {
    for(let i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i)
        }, i * 1000)
    }
    return
    {
        name: 'test'
    }
}

console.log(fn())

// undefined
// 0
// 1
// 2
// 3
// 4