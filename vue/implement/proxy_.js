
// const data = { 
//     name: 'Jack',
//     age: 24
// }

const data = ['a', 'b', 'c']

const proxyData = new Proxy(data, {
    get(target, key, receiver) {
        const ownKeys = Reflect.ownKeys(target)
        // 只处理本身（非原型的）属性
        if (ownKeys.includes(key)) {
            console.log('get', key)
        }
        const result = Reflect.get(target, key, receiver)
        return result
    },
    set(target, key, val, receiver) {
        // 重复数据不处理
        if (val === target[key]) {
            return true
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
})

// 对象： 获取、设置、删除
// proxyData.name
// proxyData.name = 'Lucy'
// console.log(proxyData)
// delete proxyData.age
// console.log(proxyData)

// proxyData[0]
// proxyData[0] = 'e'

proxyData.push('d')

// proxyData.city = 'beijing'
// console.log(proxyData)

