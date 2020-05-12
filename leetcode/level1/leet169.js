
/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//     var numObj = {}
//     for (let v of nums) {
//         if (numObj.hasOwnProperty(v)) {
//             numObj[v] += 1 
//         } else {
//             numObj[v] = 1
//         }
//     }
//     // console.log(numObj);
//     let res = undefined
//     Object.keys(numObj).forEach((key) => {
//         if (numObj[key] > nums.length / 2) {
//             res = key
//             return
//         }
//     })
//     return res
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // 摩尔投票
    let candidate = null
    let count = 0
    for (let num of nums) {
        if (num === candidate) {
            count += 1
        } else if (count > 0) {
            count -= 1
        } else {
            candidate = num
            count = 1
        }
    }
    // 校验最佳候选者的票数
    return candidate
};


var testData = [
    [3,2,3],
    [1,2,3]
    // [2,2,1,1,1,2,2]
]

for (let v of testData) {
    console.log(majorityElement(v));
}