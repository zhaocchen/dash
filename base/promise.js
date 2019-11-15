/*
* test1
*/

// new Promise(resolve => {
//   resolve(1);
//   Promise.resolve().then(() => console.log(2));
//   console.log(4)
// }).then(t => console.log(t));
// console.log(3);

// out: 4-3-2-1

/*
* test2
*/
console.log('script start');

setTimeout(function () {
    console.log('timeout1');
}, 10);

new Promise(resolve = > {
    console.log('promise1');
resolve();
setTimeout(() = > console.log('timeout2'), 10
)
;
}).
then(function () {
    console.log('then1')
})

console.log('script end');