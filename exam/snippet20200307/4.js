console.log('script start')

setTimeout(function() {
    console.log('setTimeout')
},0)

new Promise(resolve => {
    resolve()
    console.log('Promise')
}).then(function() {
    console.log('promise1')
}).then(function() {
    console.log('promise2')
})

console.log('script end')

// node10=chrome80
// script start
// Promise
// script end
// promise1
// promise2
// setTimeout