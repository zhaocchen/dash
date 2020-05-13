/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b)
    let start = 0
    let end = nums.length
    let point = Math.round((start + end)/ 2)
    while(nums.includes(point)) {
        // console.log(start, end, point);
        if (point === nums[point]) {
            start = point
        } else {
            end = point - 1
        }
        point = Math.round((start + end)/ 2)
    }
    return point
};



var testData = [
    // [0],
    // [1],
    // [3,0,1],
    // [9,6,4,2,3,5,7,0,1],
    [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]
]

for (let v of testData) {
    console.log(missingNumber(v));
    
}