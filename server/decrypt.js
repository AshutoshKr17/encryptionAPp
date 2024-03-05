const crypto = require('crypto');

function decrypt(encdata, masterkey) {
    const bData = Buffer.from(encdata, 'base64');
    const salt = bData.slice(0, 20);
    const iv = bData.slice(20, 36);
    const text = bData.slice(36);
    const key = crypto.pbkdf2Sync(masterkey, salt, 50, 16, 'sha1');
    const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    const deccrypted = decipher.update(text, 'binary', 'utf8') + decipher.final('utf8');

    return deccrypted;
}

module.exports = {
    decrypt
};