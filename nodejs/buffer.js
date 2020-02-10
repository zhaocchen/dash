// alloc分配内存空间
const buf1 = Buffer.alloc(10)
// 二进制赋值
const buf2 = Buffer.from([1,2,3])
const buf3 = Buffer.from('buffer创建方法')

// console.log(buf1)
// console.log(buf2)
// console.log(buf3)

// output
// <Buffer 00 00 00 00 00 00 00 00 00 00>
// <Buffer 01 02 03>
// <Buffer 62 75 66 66 65 72 e5 88 9b e5 bb ba e6 96 b9 e6 b3 95>

// console.log(buf1.toString())
// console.log(buf2.toString())
// console.log(buf3.toString())


// 
// buffer创建方法

const buf4 = Buffer.concat([buf1, buf3])
console.log(buf4)
console.log(buf4.toString())

// <Buffer 00 00 00 00 00 00 00 00 00 00 62 75 66 66 65 72 e5 88 9b e5 bb ba e6 96 b9 e6 b3 95>
//          buffer创建方法
