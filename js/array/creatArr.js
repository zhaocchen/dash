var t = [1,23,5,4];
var arr = [];
for(var i in t){
	typeof(i);
	arr.push(Number(i)+1);
}
console.log(arr);

//quick
var arr2 = Array.from({length: 5}, (v, i) => Math.floor(Math.random() * 10));
console.info('quick', arr2);