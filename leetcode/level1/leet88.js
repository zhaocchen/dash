/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index1 = m - 1
    let index2 = n - 1
    let index3 = nums1.length - 1
    while (index3 > -1) {
        if (index2 < 0) {
            return nums1
        }

        if (index1 < 0) {
            while (index2 > -1) {
                nums1[index3] = nums2[index2]
                index2--
                index3--
            }
            return nums1
        }

        if (nums1[index1] > nums2[index2]) {
            nums1[index3] = nums1[index1]
            index1--
        } else {
            nums1[index3] = nums2[index2]
            index2--
        }
        index3--
    }
    return nums1
};

var testData = [
    // { nums1: [1,2,3,0,0,0], m: 3, nums2: [2,5,6], n: 3},
    { nums1: [2,0], m: 1, nums2: [1], n: 1},
    // { nums1: [0], m: 0, nums2: [1], n: 1},
]

for (let v of testData) {
    console.log(merge(v.nums1, v.m, v.nums2, v.n))
}