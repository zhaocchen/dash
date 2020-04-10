let a = 10
function fn() {
    console.log(this.a)
}

var obj = {
    a: 5,
    test: function (fn) {
        fn()
        arguments[0]()
    }
}

obj.test(fn, 1)

// undefined
// undefined