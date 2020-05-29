/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let res = []
    let len = 2
    let s = target / 2
    while (s > 1) {
        s = (target * 2 / len - len + 1) / 2
        if (s % 1 == 0) {
            res.unshift(Array.from({length: len}, (v, i) => i + s))
        }
        // console.log(s, Number.isInteger(s))
        len++
    }
    return res
};

// 连续数字求和公式
// (start + end) / 2 * count = sum
// end = start + count - 1
// step = 1
 
var testData = [
    6, // [[1,2,3]] 
    9, //[[2,3,4],[4,5]]
    15, // [[1,2,3,4,5],[4,5,6],[7,8]]
]

for (let v of testData) {
    console.log(findContinuousSequence(v))
}
