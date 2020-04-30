
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var end = nums.length - 1
    var start = 0
    while (start <= end) {
        var middle = Math.round((end + start) / 2)
        if ( target ===  nums[middle] ) {
            return middle
        } else if (target >  nums[middle]) {
            start = middle + 1
        } else {
            end = middle - 1
        }
    }
    return -1
};


var testData = [
    // {nums: [-1,0,3,5,9,12], target: 9},
    {nums: [-1,0,3,5,9,12], target: 2},
]

for (let v of testData) {
    // console.log(v)
    console.log(search(v.nums, v.target))
}

