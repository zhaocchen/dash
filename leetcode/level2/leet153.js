/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function(nums) {
//     if (nums.length < 2) {
//         return nums.length === 0? undefined : nums[0]
//     }
//     for (let index = 0;index < nums.length - 1; index++) {
//         if (nums[index] > nums[index+1]) {
//             return nums[index+1]
//         }
//     }
//     return nums[0]
// };
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length < 2) {
        return nums.length === 0? undefined : nums[0]
    }
    let startIndex = 0
    let endIndex = nums.length - 1
    while (startIndex < endIndex) {
        // 最小值保留在最左侧
        let midIndex = Math.floor((startIndex + endIndex) /2)
        if (nums[midIndex] === nums[endIndex]) {
            //
            endIndex -= 1
        } else if (nums[midIndex] > nums[endIndex]) {
            // mid > end, 小值在右侧
            startIndex = midIndex + 1
        } else {
            endIndex = midIndex
        }
    }
    return nums[startIndex]
};


var testData = [
    // [3,1,2],
    // [3,4,5,1,2],
    // [4,5,6,7,0,1,2],
    // [1,2], 
    // [2,1]
]

for (let v of testData) {
    console.log(findMin(v));
    
}