var path = require('path')
var fs = require('fs')
// var walk = require('walk')

// var root = path.join(__dirname, '../')
// console.log(root) // E:\workspace\dash\nodejs\

// var files = path.resolve(__dirname, '../')
// console.log(files) // E:\workspace\dash\nodejs
console.log(__dirname)

var files = fs.readdirSync(path.join(__dirname, '../'));
var files = fs.readdirSync('../');
console.log(files) // [ 'console', 'crypto', 'export', 'fs', 'http', 'path', 'README.md' ]

// var files = []
// var walker = walk.walk('../')
// walker.on('file', function(root, stat, next) {
//   console.log(stat)
//   files.push(stat.name)
// })