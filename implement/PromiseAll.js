

function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            throw new TypeError('argument must be a array');
        }
        let resolvedCounter = 0;
        let promiseNum = promises.length;
        let resolvedResult = [];
        for (let index = 0; index < promiseNum; index++) {
            Promise.resolve(promises[index]).then(value => {
                resolvedCounter++;
                resolvedResult[index] = value;
                if (resolvedCounter == promiseNum) {
                    return resolve(resolvedResult);
                }
            }, error => {
                return reject(error);
            })
        }
    })
}

function test() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 1000)
    })
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 2000)
    })
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3)
        }, 3000)
    })

    // Promise.all([p3, p1, p2]).then(res => {
    //     console.log(res)
    // })
    promiseAll([p3, p1, p2]).then(res => {
        console.log(res)
    })
}

test()