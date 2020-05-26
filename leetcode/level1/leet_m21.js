
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let start_index = 0
    let end_index = nums.length - 1
    while (start_index < end_index) {
        while (start_index < end_index && (nums[start_index] % 2 === 1)) {
            // 右移, 奇数 & 1 = 1
            start_index++
        }
        while (start_index < end_index && (nums[end_index] % 2 === 0)) {
            // 左移, 偶数 & 1 = 0
            end_index--
        }
        // 左偶， 右奇数， 交换
        if ((nums[start_index] % 2 === 0) && (nums[end_index] % 2 === 1)) {
            [nums[start_index], nums[end_index]] = [nums[end_index], nums[start_index]]
            start_index++
            end_index--
        }
    }
    return nums
};


// var exchange = function(nums) {
//     let start_index = 0
//     let end_index = nums.length - 1
//     while (start_index < end_index) {
//         if (!(nums[start_index] & 1) && (nums[end_index] & 1)) {
//             [nums[start_index], nums[end_index]] = [nums[end_index], nums[start_index]]
//             start_index++
//             end_index--
//         }
//         while (start_index < end_index && (nums[start_index] & 1)) {
//             // 右移, 奇数 & 1 = 1
//             start_index++
//         }
//         while (start_index < end_index && !(nums[end_index] & 1)) {
//             // 左移, 偶数 & 1 = 0
//             end_index--
//         }
//         // console.log(nums);
//     }
//     return nums
// };

var testData = [
    [1,2,3,4]
]

for (let v of testData) {
    console.log(exchange(v))
}