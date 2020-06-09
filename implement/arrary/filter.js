
const newFilter = function (fn, context) {
    let arr = Array.prototype.slice.call(this)
    let filteredArr = []
    for (let index = 0; index < arr.length; index++) {
        if (!arr.hasOwnProperty(index)) continue
        fn.call(context, arr[index], index, this) && filteredArr.push(arr[index])
    }
}

Array.prototype.newFilter = newFilter

var a = [1, 2, 3]

console.log(a.filter((currentValue, index, array) => {
    console.log(currentValue, index, array)
    return currentValue > 1
}))