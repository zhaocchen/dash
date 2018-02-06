'use strict';

function hello() {
	console.log('hello!');
}
function greet(name) {
	console.log('hello,'+name+'!');
}


module.exports = {
	hello: hello,
	greet: greet
};