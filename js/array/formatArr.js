// const data = [[12,23,1,2,'--',34,'--']];
const data = [[12,23,1,2,'--',34,'--'],['--',23,'--',2,'--',34,'--']];

function formatData(oldArr){
  const newArr = [];
  oldArr.forEach((d, i) => {
  	subArr = [];
                  d.forEach((x, i) => {
                  	subArr.push(x=='--'? 0 : x);
                  });
                  newArr.push(subArr);
              });
  console.log(oldArr, newArr);
  return newArr;
}

formatData(data);
// console.log(data, newData);