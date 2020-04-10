let length = 10
function fn() {
    console.log(this.length)
}

var obj = {
    length: 5,
    test: function (fn) {
        fn()
        arguments[0]()
    }
}

obj.test(fn, 1)

// 0
// 2


// Node
// undefined
// 2