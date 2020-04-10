/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(/\s/g).filter(d => d !== "")
    s = s.reverse().join(" ")
    console.log(s);
    return s
};


var testData = [
    "the sky is blue",
    "  hello world!  "
]

for (let item of testData) {
    reverseWords(item)
}