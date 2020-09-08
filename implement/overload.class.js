function Overload () {
    
}

Overload.prototype.addMethod = function (name, fn) {
    var old = this[name];
    this[name] = function () {
        if  (fn.length == arguments.length) {
            return fn.apply(this, arguments);
        } else if (typeof old == "function") {
            return old.apply(this, arguments);
        }
    }
}


// test 
var methods = new Overload();

console.log(methods)

methods.addMethod('add', function() { return 0})
methods.addMethod('add', function(a, b) { return a+b})
methods.addMethod('add', function(a, b, c) { return a+b+c})

console.log(methods.add())
console.log(methods.add(1, 2))
console.log(methods.add(1, 2, 3))