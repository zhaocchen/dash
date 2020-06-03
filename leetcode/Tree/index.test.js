const { createTree } = require('./index.js')

var testData = [
    // [4,2,7,1,3,6,9],
    // [1,3,2,5],
    [2,1,3,null,4,null,7],
]

for (let v of testData) {
    console.log(createTree(v, 0))
}


// [4,2,7,1,3,6,9]
//     4
//   /   \
//  2     7
// / \   / \
// 1   3 6   9

// [1,3,2,5]       [2,1,3,null,4,null,7]
//     1                         2                             
//    / \                       / \                            
//   3   2                     1   3                        
//  /                           \   \                      
// 5                             4   7
