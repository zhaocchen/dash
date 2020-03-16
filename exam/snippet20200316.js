var arr = [0,1]
arr[5] = 5



newArr = arr.filter(function(x) {
    return x === undefined
})

console.log(newArr.length)

// 0

// console.log(arr)
// console.log(arr.length)

// [ 0, 1, <3 empty items>, 5 ]
// [0, 1, empty × 3, 5]
// 6