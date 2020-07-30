// var new_array = arr.map(function callback(currentValue[, index[, array]]) {
//     // Return element for new_array 
//    }[, thisArg])
/**
 * 
 * @param {*} fn 
 * @param {*} context 
 */

Array.prototype._map = function (fn, context) {
    let arr = Array.prototype.slice.call(this)
    let mappedArr = new Array(arr.length)
    for (let index = 0; index < arr.length; index++) {
        if (!arr.hasOwnProperty(index)) continue
        mappedArr[index] = fn.call(context, arr[index], index, this)
    }
    return mappedArr
}

var a = [1, 2, 3]

console.log(a._map((v, i, data) => {
    console.log(v, i, data)
    return Math.pow(v, 2)
}))
