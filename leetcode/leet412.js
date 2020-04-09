/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var res = Array.from({ length: n }, (v, index) => {
      const currentVal = index + 1
      const divisible3 = currentVal % 3 === 0
      const divisible5 = currentVal % 5 === 0
      if (divisible3 && divisible5 ) {
        return 'FizzBuzz'
      } else if (divisible3) {
        return 'Fizz'
      } else if (divisible5) {
        return 'Buzz'
      } else {
        return String(currentVal)
      }
    })
    // console.log(res);
    return res
    
};

var testData = [15]

for (let val of testData) {
  // console.log(val);
  fizzBuzz(val)
  
}