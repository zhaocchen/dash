'use strict'

try {
    var data = fs.readFileSync('test.txt', 'utf-8');
    console.log(data);
} catch (err) {
    // 出错了
}