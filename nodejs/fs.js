const fs = require('fs');
// fs.readFile('./test.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data)
//     console.log(data.toString())
//     console.log(data.toString('utf-8'))
//     console.log('length:', data.length)
// })

// ouput
// <Buffer 68 65 6c 6c 6f> 
// hello
// hello    
// length: 5

// 方式2
const {promisify} = require('util')

promisify(fs.readFile)('./test.txt').then(data => {
    console.log(data)
    console.log(data.toString())
}).catch(err => {
    console.log(err)
})

// output
// <Buffer 68 65 6c 6c 6f>
// hello
