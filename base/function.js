/*函数*/
function sum1(num1, num2) {
    return num1 + num2;
}

var sum2 = function (num1, num2) {
    return num1 + num2;
};
/*验证：函数是对象，函数名是指针，函数可以有多个名字*/
console.log(sum1(15, 20));  //35
var sum3 = sum1;
console.log(sum1(15, 10));  //25
sum1 = null;
console.log(sum3(15, 15));    //30