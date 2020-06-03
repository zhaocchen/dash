const { array2list, list2array } = require('./index')

const testArr = [1, 2, 3, 4, 5]

const testList = array2list(testArr)

console.log(testList)

const newArr = list2array(testList)

console.log(newArr)