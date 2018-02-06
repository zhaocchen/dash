const crypto = require('crypto');

const cryptoUtils = new Object();

cryptoUtils.encrypt = function(data, key) {
	const cipher = crypto.createCipher('aes192', key);
	var crypted = cipher.update(data, 'utf8', 'hex');
	crypted += cipher.final('hex');
	return crypted.toUpperCase();
}

cryptoUtils.decrypt = function(encrypted, key){
	const decipher = crypto.createDecipher('aes192', key);
	var decrypted = decipher.update(encrypted, 'hex', 'utf8');
	decrypted += decipher.final('utf8');
	return decrypted;
}

var data = "Hello, China!";
	key = '123456',
	encrypted = cryptoUtils.encrypt(data, key),
	decrypted = cryptoUtils.decrypt(encrypted, key);


console.log('Plain text: ' + data);
console.log('Encrypted text: ' + encrypted);
console.log('Decrypted text: ' + decrypted);