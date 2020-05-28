function cached(fn) {
    const cache = Object.create(null)
    return function cachedFn (str) {
        if (!cache[str]) {
            let result = fn(str)
            cache[str] = result
        }
        return cache[str]
    }
}

function test() {
    function computed(str) {
        console.log('tag', str)
        return str
    }
    var cachedComputed = cached(computed)
    cachedComputed('hello')
    cachedComputed('word')
    cachedComputed('hello')
}

test()
