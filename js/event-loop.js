/*
* test1
*/
// heap、stack
// function multiply(a, b) {
//   return a * b;
// }

// function square(n) {
//   return multiply(n, n);
// }

// function printSquare(n) {
//   var s = square(n);
//   console.log(s);
// }

// printSquare(3);


// stack: main()-printSquare()-square()-multiply()
// out: 9

/*
*test2
*/
// function foo() {
//   throw new Error('error tip');
// }

// function bar() {
//   foo();
// }

// function baz() {
//   bar();
// }

// baz();

// out Error: foo-bar-baz

/*
* test3
*/

// function foo() {
//   return foo();
// }

// foo()

// out error: Maximum call stack size exceeded

/*
* test 4
*/
// console.log(0);
// setTimeout(function(){
//   console.log(1);
// }, 0);
// console.log(2);
// setTimeout(function(){
//   console.log(3);
// }, 10);
// setTimeout(function(){
//   console.log(4);
// }, 0);

// out: 0-2-1-4-3

