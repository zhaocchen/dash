// https://juejin.im/post/5b2f02cd5188252b937548ab

function New_promise(executor) {
    var _this = this
    this.state = 'pending'  // pending|fulfilled|rejected
    this.value = undefined
    this.reason = undefined
    this.onFulfilledFunc = []
    this.onRejectedFunc = []

    executor(resolve, reject);

    function resolve(value) {
        if (_this.state === 'pending') {
            _this.value = value
            _this.onFulfilledFunc.forEach(fn => fn(value))
            _this.state = 'fulfilled'
        }

    }

    function reject(reason) {
        if (_this.state === 'pending') {
            _this.reason = reason
            _this.onRejectedFunc.forEach(fn => fn(reason))
            _this.state = 'rejected'
        }

    }
}

New_promise.prototype.then = function(onFulfilled, onRejected) {
    // if (typeof onFulfilled === 'function') {
    //     if (this.state === 'fulfilled') {
    //         try {
    //             onFulfilled(this.value)
    //         } catch (e) {
    //             onRejected(e)
    //         }
    //     } else if (this.state === 'pending') {
    //         this.onFulfilledFunc.push(onFulfilled)
    //     }
    // }

    // if (typeof onRejected === 'function') {
    //     if (this.state === 'rejected') {
    //         try {
    //             onRejected(this.reason)
    //         } catch (e) {
    //             onRejected(e)
    //         }
    //     } else if (this.state === 'pending') {
    //         this.onRejectedFunc.push(onRejected)
    //     }
    // }

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }
  
    let promise2 = new New_promise((resolve, reject) => {
        if (this.state === 'fulfilled') {
            setTimeout(() => {
                try {
                    let x = onFulfilled(this.value)
                    this.resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            }, 0)
        }

        if (this.state === 'rejected') {
            setTimeout(() => {
                try {
                    let x = onRejected(this.reason)
                    this.resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            }, 0)
        }

        if (this.state === 'pending') {
            this.onFulfilledFunc.push(() => {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value)
                        this.resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            })
            this.onRejectedFunc.push(() => {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        this.resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            })
        }
    })

    return promise2

}

New_promise.prototype.resolvePromise = function(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('type error'))
    } else if (x instanceof New_promise) {
        if (x.state === 'pending') {
            x.then(y => New_promise.resolve(promise2, y, resolve, reject),
                reason => reject(this.reason)
            )
        } else {
            // x.state === 'fulfilled' && x.state === 'rejected'
            x.then(resolve, reject)
        }
    } else if ((!x && typeof x === 'object') || typeof x === 'function') {
        try {
            const then = x.then
            if (typeof then === 'function') {
                then.call(x,
                    y => {
                        resolve(y)
                    },
                    r => {
                        reject(r)
                    }
                    )
            } else {
                resolve(x)
            }

        } catch (e) {
            reject(e)
        }
    } else {
        resolve(x)
    }


}

New_promise.prototype.race = function(promises) {
    return new New_promise((resolve, reject) => {
        for (let i=0; i < promises.length; i++) {
            promises[i].then(resolve, reject)
        }
    })
}

New_promise.prototype.all = function(promises) {
    let arr = []
    let j = 0
    function processData(index, data) {
        arr[index] = data
        j++
        if (j === promises.length) {
            resolve(arr)
        }
    }
    return new New_promise((resolve, reject) => {
        for(let i = 0; i< promises.length; i++) {
            promises[i].then(data => {
                processData(i, data)
            }, reject)
        }
    }) 
}

// test
var p = new New_promise((resolve, reject) => {
    console.log('exec')
    console.log('exec')
    resolve(1)
    // setTimeout(() => {
    //     console.log('this is result!')
    // }, 1000)
})

// p.then(res => console.log(res))

p.then(data => 2)
.then()
.then()
.then(data => console.log(data))


