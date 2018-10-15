function close() {
  var count = 0;
  return function () {
    console.log(count);
    count++;
  }
}


var fn1 = close();
var fn2 = close();
 
fn1();
fn1();
fn1();
fn2();

fn1 = null;
// fn1(); // throw exception

/**
 * 经典闭包代表
 */

for (var i = 0; i < 4; i++) {
  console.log('index:', i);
  setTimeout(function () {
      console.log(i)
  }, 0)
}
// 4-4-4-4

for (var i = 0; i < 4; i++) {
  console.log('index:', i);
  (function (i) {
    setTimeout(function () {
        console.log(i)
    }, 0)
  })(i)
}

// 0-1-2-3