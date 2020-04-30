/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    var n = matrix.length
    if (0 === n) {
       return false 
    }
    var m = matrix[0].length
    var start = 0
    var end = n - 1
    
    while (start <= end) {
        var middle = Math.round((end + start) / 2)
        var curArr = matrix[middle]
        if (target >= curArr[0] && target <= curArr[m-1] ) {
            // return middle
            // return [middle, searchNum(curArr, target)]
            return -1 !== searchNum(curArr, target)
        } else if (target > curArr[0]) {
            start = middle + 1
        } else {
            end = middle - 1
        }
    }
    return false

};


function searchNum(nums, target) {
    var start = 0
    var end = nums.length - 1
    while (start <= end) {
        var middle = Math.round((start + end) / 2)
        var curNum = nums[middle]
        if (target === curNum) {
            return middle
        } else if (target > curNum) {
            start = middle + 1
        } else {
            end = middle - 1
        }
    }
    return -1
}


var testData = [
    // {
    //     matrix : [
    //         [1,   3,  5,  7],
    //         [10, 11, 16, 20],
    //         [23, 30, 34, 50]
    //       ],
    //     //   target : 3
    //       target : 13
    // },
    {
        matrix: [[1]],
        target: 1
    }
]

for (let v of testData) {
    // console.log(v)
    console.log(searchMatrix(v.matrix, v.target));
    
}