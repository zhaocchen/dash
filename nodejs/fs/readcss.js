/**
 * 读取css文件, 过滤出class
 */
const fs = require('fs');
fs.readFile('./style.css', 'utf-8', (err, data) => {
	console.log(data.length);
	const regx = /icon-bms-[a-z]*/g;
	const iconArr = data.match(regx);
	if( iconArr.length > 2) {
		iconArr.splice(0, 2);
	}
	console.log(iconArr);
});


// 3334
// [ 'icon-bms-dbleft',
//   'icon-bms-dbright',
//   'icon-bms-dbup',
//   'icon-bms-dbdown',
//   'icon-bms-close',