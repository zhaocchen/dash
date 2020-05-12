/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var majorityElement = function(nums) {
//     var numObj = {}
//     var len = nums.length / 3
//     var res = []
//     for (let num of nums) {
//         if (numObj.hasOwnProperty(num)) {
//             numObj[num] += 1
//         } else {
//             numObj[num] = 1
//         }
//     }

//     for (let key of Object.keys(numObj)) {
//         if (numObj[key] > len) {
//             res.push(Number(key))
//         }
//     }

//     return res
// };

var majorityElement = function(nums) {
    let candidate = [null, null]
    let count = [0, 0]
    for (let num of nums) {
        if (candidate.includes(num)) {
            const index = candidate.indexOf(num)
            count[index] += 1
        } else if (count.includes(0)) {
            const index = count.indexOf(0)
            candidate[index] = num
            count[index] = 1
        } else {
            count = count.map(c => c -1)
        }
    }
    count = [0, 0]
    for (let num of nums) {
        if (candidate.includes(num)) {
            count[candidate.indexOf(num)] += 1
        }
    }
    const len = nums.length / 3
    return candidate.filter((v, i) => count[i] > len)
};

var testData = [
    [3,2,3],
    [1,1,1,3,3,2,2,2]
]

for (let v of testData) {
    console.log(majorityElement(v));
}