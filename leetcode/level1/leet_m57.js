/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let start_index = 0
    let end_index = nums.length - 1
    while (start_index < end_index) {
        const start_num = nums[start_index]
        const end_num = nums[end_index]
        const cur_target = start_num + end_num
        if (target === cur_target) {
            return [start_num, end_num]
        } else if (target > cur_target) {
            start_index++
        } else {
            end_index--
        }
    }
};

var testData = [
    // {nums: [2,7,11,15], target: 9},
    {nums: [10,26,30,31,47,60], target: 40},
]

for (let v of testData) {
    console.log(twoSum(v.nums, v.target))
} 