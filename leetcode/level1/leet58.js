/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    console.log(s.split(/\s/g));
    
    return (s.split(/\s/g).filter(d => d!== "").pop() || "").length
};


var testData = [
    "Hello World",
    "a "
]

for (let item of testData) {
    console.log(lengthOfLastWord(item))
}
