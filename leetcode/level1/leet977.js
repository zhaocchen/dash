/**
 * @param {number[]} A
 * @return {number[]}
 */
// var sortedSquares = function(A) {
//     let start_index = 0
//     let end_index = A.length - 1
//     let res = []
//     while(start_index <= end_index) {
//         let start_num = Math.abs(A[start_index])
//         let end_num = Math.abs(A[end_index])
//         if (start_num > end_num) {
//             res.unshift(start_num ** 2)
//             start_index++
//         } else {
//             res.unshift(end_num ** 2)
//             end_index--
//         }
//     } 
//     return res
// };

var sortedSquares = function(A) {
    let start_index = 0
    let end_index = A.length - 1
    let cur_index = A.length - 1
    let res = new Array(A.length)
    while(start_index <= end_index) {
        let start_num = Math.abs(A[start_index])
        let end_num = Math.abs(A[end_index])
        if (start_num > end_num) {
            res[cur_index] = start_num ** 2
            start_index++
        } else {
            res[cur_index] = end_num ** 2
            end_index--
        }
        cur_index--
    } 
    return res
};

var testData = [
    [-4,-1,0,3,10],
    // [-7,-3,2,3,11]
]

for (let v of testData) {
    console.log(sortedSquares(v))
}
