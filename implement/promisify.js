function promisify(fn) {
    return function (...args) {
        return new Promise(function (resolve, reject) {
            args.push(function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
                fn.apply(this, args);
            })
        })
    }
}

// nodeCallback方法func1
var func1 = function(a, b, c, callback) {
    callback(null, a+b+c);
}
// promise化后的func2
var func2 = promisify(func1);
// 调用后输出6
func1(1, 2, 3, (err, result) => {
    if (!err) {
        console.log(result); //输出6
    }
})
func2(1, 2, 3).then(console.log); //输出6
