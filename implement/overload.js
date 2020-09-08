function Overload (obj, name, fn) {
    var old = obj[name];
    obj[name] = function () {
        if  (fn.length == arguments.length) {
            return fn.apply(this, arguments);
        } else {
            return old.apply(this, arguments);
        }
    }
}

// test 
var methods = {};

Overload(methods, 'add', function() { return 0})
Overload(methods, 'add', function(a, b) { return a+b})
Overload(methods, 'add', function(a, b, c) { return a+b+c})

console.log(methods.add())
console.log(methods.add(1, 2))
console.log(methods.add(1, 2, 3))
