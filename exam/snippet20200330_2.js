function Foo() {
    getValue = function () {
        console.log(1)
    }
    return this
}

Foo.getValue = function () {
    console.log(2)
}

Foo.prototype.getValue = function () {
    console.log(3)
}

var getValue = function () {
    console.log(4);
}

function getValue() {
    console.log(5);
}

getValue()
Foo.getValue()
getValue()
Foo().getValue()
getValue()
new Foo.getValue()
new Foo().getValue()
new new Foo().getValue()


// chrome
// 4
// 2
// 4
// 1
// 1
// 2
// 3
// 3
// 3
// Foo.getValue {}


