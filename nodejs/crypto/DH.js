const crypto = require('crypto');

const cryptoUtils = new Object();
//Diffie–Hellman

/*签名*/
cryptoUtils.init = function(){
	var signer = crypto.createDiffieHellman(512),
	    sign_keys= signer.generateKeys(),
	    prime = signer.getPrime(),
	    generator = signer.getGenerator();
    console.log('Prime: ' + prime.toString('hex'));
	console.log('Generator: ' + generator.toString('hex'));
	var verifier = crypto.createDiffieHellman(prime, generator),
		verif_keys = verifier.generateKeys();

    var sign_secret = signer.computeSecret(verif_keys),
    	verif_secret = verifier.computeSecret(sign_keys);
    console.log('Secret of signer: ' + sign_secret.toString('hex'));
	console.log('Secret of verifier: ' + verif_secret.toString('hex'));
}

cryptoUtils.init();
