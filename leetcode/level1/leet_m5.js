/**
 * @param {string} s
 * @return {string}
 */
// var replaceSpace = function(s) {
//     return s.split(" ").join("%20")
// };
var replaceSpace = function(s) {
    var res=''
    for(v of s) {
        res += (v === ' ' ? '%20' : v)
    }
    return res
};


// "We%20are%20happy."
var testData = [
    "We are happy."
]

for (let v of testData) {
    console.log(replaceSpace(v));
    
}