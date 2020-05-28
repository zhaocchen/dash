var a = {
    name: 'Jack',
    age: 18,
    room: [1,2]
}

function deepClone(origin, target) {
    // 容错
    var target = target || (Array.isArray(origin) ? [] : {})
    for(var prop in origin) {
        // console.log(prop)
        if (typeof origin[prop] == 'object') {
            target[prop] = deepClone(origin[prop])
        } else {
            target[prop] = origin[prop]
        }
    }
    return target
}

var b = {};

b = deepClone(a)

b.room.push(3)
console.log(a, b)