function updateView () {
    console.log('更新视图！')
}
function defineReactive(target, key, val) {
    // 深度监听
    observe(val)
    // 核心 API
    Object.defineProperty(target, key, {
        get() {
            console.log('get', key, val)
            return val  
        },
        set(newVal) {
            if (val != newVal) {
                observe(val)
                console.log('set', key, val, newVal)
                updateView()
            }
            val = newVal
        }
    })
}

function defineArrayProperty () {
    const oldArrayProperty = Array.prototype;
    const arrayProto = Object.create(Array.prototype)
    const methods = ['push', 'pop', 'shift', 'unshift', 'splice'];
    methods.forEach((methodName) => {
        arrayProto[methodName] = function() {
            updateView()
            oldArrayProperty[methodName].call(this, ...arguments)
        }
    })
    return arrayProto
}

function observe(target = {}) {
    // 仅监听对象和数组
    if (typeof target != 'object' || target == null) return target

    if (Array.isArray(target)) {
        // console.log('ha')
        target.__proto__ = defineArrayProperty()
    }

    // 重新定义各属性
    for (let key in target) {
        defineReactive(target, key, target[key])
    }
}

// const data = { 
//     name: 'Jack',
//     age: 24,
//     info: {
//         class: 'a'
//     }
// }

// observe(data)

// data.name
// data.name = 'Lucy'
// data.info.class 
// data.info.class = 'B'

const data = ['a', 'b', 'c']
observe(data)
data.push('d')