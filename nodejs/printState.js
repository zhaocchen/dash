// const os = require('os')
// const cpuStat = require('cpu-stat')

const stat = require('./utils/state')
stat.getState()



// function getState() {
//     const freemem = os.freemem()
//     const totalmem = os.totalmem()
//     console.log(`内存占有率${freemem / totalmem * 100}%`)

//     cpuStat.usagePercent((err, percent) => {
//         console.log(`CPU占用${percent}`)
//     })
// }

