setTimeout(_ => console.log(4))

new Promise(resolve => {
  resolve()
  console.log(1)
}).then(_ => {
  console.log(3)
})

console.log(2)

// node10=chrome80
// 1
// 2
// 3
// 4

// new Promise在实例化的过程中所执行的代码都是同步进行的，而then中注册的回调才是异步执行的