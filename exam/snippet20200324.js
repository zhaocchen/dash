var a1 = {},
b1 = '123',
c1 = 123;
a1[b1] = 'b';
a1[c1] = 'c';
console.log(a1[b1]) 

var a2 = {},
b2 = Symbol('123'),
c2 = Symbol('123');
a2[b2] = 'b';
a2[c2] = 'c';
console.log(a2[b2])

var a3 = {},
b3 = {key: '123'},
c3 = {key: '456'};
a3[b3] = 'b';
a3[c3] = 'c';
console.log(a3[b3])


// c
// b
// c
// a3: {[object, object]: 'c}