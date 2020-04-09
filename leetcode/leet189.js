/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length
    // nums.splice(0, len-k)
    // console.log(nums.slice(-k));
    k = k % len
    nums.unshift(...nums.slice(-k))
    nums.splice(len)
    console.log(nums);
};

var testData = [
    {
        nums: [-1, -100, 3, 99],
        k: 2
    },
    {
        nums: [1,2],
        k: 3
    }
]

for (let val of testData) {
    rotate(val.nums, val.k)
}