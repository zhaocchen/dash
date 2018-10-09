

//
const tictactoe = {
	matrix: [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	],
	format(str) {
		let num = 0;
		if (str === 'x') {
			num = 1;
		} else if (str === 'o') {
			num = -1;
		}
		return num;
	},
	initMatrix(str, tmpMatrix) {
		that = this;
		const newMatrix = tmpMatrix.map(function(d) {
			const newArr = d.map(function(sub) {
				return sub = that.format(sub); 
				// console.log(this);
			});
			return newArr;
		});
		// console.log(that.format(str), newMatrix);
		return this.getNextStep(that.format(str), newMatrix);
	},
	creat() {},
	isEqual(role, num1, num2, num3) {
		return (num1+num2+num3) ===  3 * role;
	},
	isWin(role, tmpMatrix) {
		let flag = false;
		// 三行三列两条对角线
		tmpMatrix.forEach((d, i) => {
			if (this.isEqual(role, ...d)) {
				flag = true;
			}
		});
		if (!flag) {
			tmpMatrix.forEach((d, i) => {
				if (this.isEqual(role, tmpMatrix[0][i], tmpMatrix[1][i], tmpMatrix[2][i])) {
					flag = true;
				}
			});
		}
		if (!flag) {
			flag = this.isEqual(role, tmpMatrix[0][0], tmpMatrix[1][1], tmpMatrix[2][2]) || this.isEqual(role, tmpMatrix[2][0], tmpMatrix[1][1], tmpMatrix[0][2]);
		}
		return flag;
	},
	isEnd(tmpMatrix) {
		let flag = true;
		tmpMatrix.forEach(d => {
			if (d.indexOf(0) > -1) {
				flag = false;
			}
		});
		return flag;
	},
	getNextStep(role, tmpMatrix) {
		const nextArr = [];
		if (this.isEnd(tmpMatrix)) {
			console.log('game is over, try again！');
		}	else if (this.isWin(role, tmpMatrix) && !this.isWin(-role, tmpMatrix)) {
			console.log(`you are win！`);
		} else {
			tmpMatrix.forEach((d,i) => {
				d.forEach((sub,j) => {
					if (tmpMatrix[i][j] === 0) {
						const newMatrix = Array.from({length: 3}, (v, i) => tmpMatrix[i].concat());
						newMatrix[i][j] = role;
						if (this.isWin(role, newMatrix)) {
							nextArr.push([i,j]);
						}
					}
				});
			});
		}
		return nextArr;
	},
}

// console.log(tictactoe.getNextStep(1, [
// 	[1, -1, 1],
// 	[-1, 0, -1],
// 	[1, 0, 1]
// ]));


const testData1 = function() {
	console.log('test1');
	console.log(tictactoe.initMatrix(
		'x', [ ['o', 'e', 'e'],
	  ['o', 'x', 'o'],
	  ['x', 'x', 'e'] ]
		));
};
testData1(); //[ [ 0, 1 ], [ 0, 2 ], [ 2, 2 ] ]
const testData2 = function() {
	console.log('test2');
	console.log(tictactoe.initMatrix(
		'x', [ ['x', 'o', 'o'],
	  ['x', 'x', 'e'],
	  ['e', 'o', 'e'] ]
		));
};

testData2();  //[ [ 1, 2 ], [ 2, 0 ], [ 2, 2 ] ]

const testData3 = function() {
	console.log('test3');
	console.log(tictactoe.initMatrix(
		'x', 	[ ['x', 'x', 'o'],
			['e', 'e', 'e'],
			['e', 'e', 'e'] ]
		));
};
testData3(); // []

const testData4 = function() {
	console.log('test4');
	console.log(tictactoe.initMatrix(
		'o', [ ['o', 'o', 'o'],
	  ['e', 'e', 'e'],
	  ['e', 'e', 'e'] ]
		));
};
testData4(); // []


// const testFunc = function(str, matric) {
// 	console.log(tictactoe.initMatrix(str, matric));
// };

// testFunc('o', [ ['o', 'o', 'o'],
// ['e', 'e', 'e'],
// ['e', 'e', 'e'] ]);