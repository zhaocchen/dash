
function findIndexOfNums (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (map.has(diff)) {
            return [map.get(diff), i]
        }
        map.set(nums[i], i)
    }
}

// let nums = [2, 7, 11, 15]
// let target = 9

// var testData = []

console.log(findIndexOfNums([2, 7, 11, 15], 9));
