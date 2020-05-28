
function new_instanceof(instance, constructor) {
    let instance_proto = instance.__proto__;
    let constructor_proto = constructor.prototype;

    while(true) {
        if (instance_proto === null) {
            return false;
        }
        if (instance_proto === constructor_proto) {
            return true;
        }
        instance_proto = instance_proto.__proto__;
    }
}

console.log([] instanceof Array, {} instanceof Object)
console.log(new_instanceof([], Array),
new_instanceof({}, Object)
)