// 异步经典

console.log('script start')

async function async1() {
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2 end')
}
async1()

setTimeout(function() {
    console.log('setTimeout')
},0)

new Promise(resolve => {
    console.log('Promise')
}).then(function() {
    console.log('promise1')
}).then(function() {
    console.log('promise2')
})

console.log('script end')

// script start
// async2 end
// Promise
// script end
// async1 end
// setTimeout