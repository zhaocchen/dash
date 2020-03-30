
let x,y
try {
    throw new Error(6)
} catch (x) {
    x = 1;
    y = 2;
    console.log(x)
}

console.log(x);
console.log(y);

// 1
// undefined
// 2
