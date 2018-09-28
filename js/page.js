

function pageView(len = 0, current = 1) {
  let res = [1];
  if ( len <= 7){
    res = Array.from({ length: len}, (v, i) => i + 1);
  } else {
    res = [1, 2, 3, 4, 5, '...', len];
    // res = [1, '...', 4,5,6,'...', len];
  }
  return res;
}


console.log(pageView(20));