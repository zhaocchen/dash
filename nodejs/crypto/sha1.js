const crypto = require('crypto'); 

var encryptUtils = new Object();

/** 
 * MD5加密 
 * @param data 
 * @returns {*} 
 */  
encryptUtils.sha1 = function(data) {
	const sha1 = crypto.createHash('sha1').update(data);
    return sha1.digest('hex').toUpperCase();  
}


console.log(encryptUtils.sha1('33422'));