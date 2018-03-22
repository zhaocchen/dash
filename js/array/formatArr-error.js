// const data = [[12,23,1,2,'--',34,'--']];
const data = [[12,23,1,2,'--',34,'--'],['--',23,'--',2,'--',34,'--']];

function formatData(oldArr){
  const newArr = oldArr.concat();
  newArr.forEach((d) => {
                  d.forEach((x, i) => {
                  if(x == '--') {
                  d[i] = 0;
                      }
                  });
              });
  console.log(oldArr, newArr);
  return newArr;
}
formatData(data);