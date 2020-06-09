
function observe(target = {}) {
    if (typeof target != 'object' || target == null) {
        // 不是对象或数组， 则返回
        return target
    }

    // 代理配置
    const proxyConf = {
        get(target, key, receiver) {
            const ownKeys = Reflect.ownKeys(target)
            // 只处理本身（非原型的）属性
            if (ownKeys.includes(key)) {
                console.log('get', key)
            }
            const result = Reflect.get(target, key, receiver)

            // 深度监听
            return observe(result)
        },
        set(target, key, val, receiver) {
            // 重复数据不处理
            if (val === target[key]) {
                return true
            }
            if (!Reflect.ownKeys(target).includes(key)) {
                console.log('new', key)
            }
            const result = Reflect.set(target, key, val, receiver)
            console.log('set', key, val)
            return result
        },
        deleteProperty(target, key) {
            const result = Reflect.deleteProperty(target, key)
            console.log('delete', key)
            return result
        }
    }

    const observed = new Proxy(target, proxyConf)

    return observed
}



// 对象： 获取、设置、删除


const data = { 
    name: 'Jack',
    age: 24,
    info: {
        class: 'a'
    }
}
const proxyData = observe(data)

// proxyData.name
// proxyData.name = 'Lucy'
// console.log(proxyData)
// delete proxyData.age
// console.log(proxyData)

// proxyData.city = 'beijing'

// proxyData.info
proxyData.info.class



// 数组

// const data = ['a', 'b', 'c']
// const proxyData = observe(data)
// proxyData.push('d')
