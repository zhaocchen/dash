

/**
 * 
 * @param {*} fn 
 * @param {*} context 
 */
const newMap = function (fn, context) {
    let arr = Array.prototype.slice.call(this)
    let mappedArr = new Array(arr.length)
    for (let index = 0; index < arr.length; index++) {
        if (!arr.hasOwnProperty(index)) continue
        mappedArr[index] = fn.call(context, arr[index], index, this)
    }
    return mappedArr
}

// var new_array = arr.map(function callback(currentValue[, index[, array]]) {
//     // Return element for new_array 
//    }[, thisArg])
Array.prototype.newMap = newMap

var a = [1, 2, 3]

// console.log(a.map((v, i, data) => {
//     console.log(v, i, data)
//     return Math.pow(v, 2)
// }))


console.log(a.newMap((v, i, data) => {
    console.log(v, i, data)
    return Math.pow(v, 2)
}))
