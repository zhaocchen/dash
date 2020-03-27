function Foo() {
    Foo.a = function() {
        console.log('a')
    }
    this.a = function() {
        console.log('b');
    }
}

Foo.prototype.a = function() {
    console.log('c');
}

Foo.a = function() {
    console.log('d');
}

Foo.a()
var foo = new Foo()
foo.a()
Foo.a()

// d
// b
// a