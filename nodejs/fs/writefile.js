'use strict'

var fs = require('fs');

var data = 'write new data'
fs.writeFile('test.txt', data, function(err){
	if(err){
		console.log(err);
	}else{
		console.log('ok');
	}
});