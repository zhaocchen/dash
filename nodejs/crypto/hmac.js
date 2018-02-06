const crypto = require('crypto');

const cryptoUtils = new Object();

cryptoUtils.hmac = function(data) {
	const hmac = crypto.createHmac('sha256', 'secret-key');
	hmac.update(data);
	return hmac.digest('hex').toUpperCase();
}

console.log(cryptoUtils.hmac('22222'));