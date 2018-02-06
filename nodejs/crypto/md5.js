const crypto = require('crypto'); 

var encryptUtils = new Object();

/** 
 * MD5加密 
 * @param data 
 * @returns {*} 
 */  
encryptUtils.md5 = function(data) {
	const md5 = crypto.createHash('md5').update(data);
    return md5.digest('hex').toUpperCase();  
}


console.log(encryptUtils.md5('33422'));