// fibonacci

function* fibonacci() {
    let [prev, curr] = [0, 1];
    while(1) {
        console.log(prev, curr)
        yield curr;
        [prev, curr] = [curr, prev+curr]
    }
}

for (var x of fibonacci()) {
    if (x > 10) break
    console.log(x)
}

// 0 1
// 1
// 1 1
// 1
// 1 2
// 2
// 2 3
// 3
// 3 5
// 5
// 5 8
// 8
// 8 13

// 方式2
function* fib(max) {
    var n = 0;
    let [a,b] = [0,1]
    while (n < max) {
        console.log(a,b)
        yield a;
        [a, b] = [b, a + b];
        n ++;
    }
    return;
}

for (var x of fib(5)) {
    console.log(x)
}


// 0 1
// 0
// 1 1
// 1
// 1 2
// 1
// 2 3
// 2
// 3 5
// 3