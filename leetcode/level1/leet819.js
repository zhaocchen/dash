/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const words = [...paragraph
        .toLowerCase().split(/\!|\?|\'|\,|\;|\.|\s/g)
        .filter(d => ![...banned, "", " "].includes(d))
        .reduce((map, item) => {
            map.set(item, (map.get(item) || 0) + 1)
            return map
        },new Map())]
        .sort((a,b) => b[1] - a[1])
    // console.log(words);
    return words[0][0]
    
};


var testData = [
    {
        paragraph: "Bob hit a ball, the hit BALL flew far after it was hit.",
        banned: ["hit"]
    }
]

for (let item of testData) {
    // console.log(item);
    mostCommonWord(item.paragraph, item.banned)
}

// 小写、分割、set去重