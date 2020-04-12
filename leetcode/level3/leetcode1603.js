/**
 * @param {number[]} start1
 * @param {number[]} end1
 * @param {number[]} start2
 * @param {number[]} end2
 * @return {number[]}
 */
var intersection = function(start1, end1, start2, end2) {
    let [[x1,y1], [x2,y2], [x3, y3], [x4, y4]] = [start1, end1,start2, end2]
    const vecCross = function(a,b,c,d) {
        return a * d - b * c
    }
    let d = vecCross(x1 - x2, x4 - x3, y1 - y2, y4 - y3)
    let p = vecCross(x4 - x2, x4 - x3, y4 - y2, y4 - y3)
    let q = vecCross(x1 - x2, x4 - x2, y1 - y2, y4 - y2)
    if (d != 0) {
        let lam = p / d
        let eta = q / d
        if (!(lam >= 0 && lam <= 1 && eta >=0 && eta <= 1)) {
            return []
        }
        return [lam * x1 + (1 - lam) * x2, lam * y1 + (1 - lam) * y2]
    }
    if (p != 0 || q != 0) {
        return []
    }
    let t1= Math.min(Math.max(y1,y2), Math.max(y3,y4))
    let t2= Math.max(Math.min(y1,y2), Math.min(y3,y4))
    let tx2 = Math.max(Math.min(x1,x2), Math.min(x3,x4))
    if (t1<t2) {
        return []
    }
    return [tx2, t2]
};


var testData  = [
    [[0,0], [1,0], [1,1], [0,-1]],
    // [[0,0], [3,3], [1,1], [2,2]],
    // [[0,0], [1,1], [1,0], [2,1]],
    // [[0,3], [0,6], [0,1], [0,5]]
]

for (let item of testData) {
    // console.log(item);
    // intersection(item[0], item[1], item[2], item[3])
    console.log(intersection(item[0], item[1], item[2], item[3]));
    
}

