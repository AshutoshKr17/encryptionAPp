const crypto = require('crypto');

function encrypter(text, masterkey) {

    const iv = crypto.randomBytes(16);

    const salt = crypto.randomBytes(20);

    const key = crypto.pbkdf2Sync(masterkey, salt, 50, 16, 'sha1');

    const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);

    const encrypted = Buffer.concat([
        cipher.update(text, 'utf8'),
        cipher.final()
    ]);

    return Buffer.concat([salt, iv, encrypted]).toString('base64');
}

const encrypt = async(text,key) => {
    
    var encryptedText = encrypter(text, key);
    return encryptedText;
};
module.exports = { encrypt };


