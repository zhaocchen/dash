/**
 * 一维
 */
function makeRow(v=0){
	const array = new Array(9);
	array.fill(v);
	return array;
}
/**
 * 二维
 */
function makeMatrix(v=0){
	return Array.from({length: 9},()=>makeRow(v));
}
/**
 * Fisher-Yates洗牌算法
 */
function shuffle(array){

}

const a = makeMatrix();
a[3][3] = 2;
console.log(a);