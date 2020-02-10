const fs = require('fs')

const rs = fs.createReadStream()
const ws = fs.createWriteStream()

rs.pipe(ws)