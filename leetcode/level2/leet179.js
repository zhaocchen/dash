

/**
 * @param {number[]} nums
 * @return {string}
 */
// var largestNumber = function(nums) {
//     nums.sort((a, b) => a+''+b > b+''+a ? -1 : 1)
//     return nums.join('')
// };
var largestNumber = function(nums) {
    nums.sort((a, b) => a+''+b > b+''+a ? -1 : 1)
    return nums.every(v => v===0) ? '0' : nums.join('') 
};

var testData = [
    [10,2],
    [3,30,34,5,9],
    [0,0],
    [1,2,3,4,5,6,7,8,9,0]
]

for (let v of testData) {
    console.log(largestNumber(v));
}