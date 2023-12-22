const Cryptr = require('cryptr');
const secretKey = process.env.SECRETKEY
const encript = new Cryptr(secretKey)

const enkripsiPassword = (pass) => {
    console.info(pass);
    
    const ekripsi = encript.encrypt(pass)
    return ekripsi
}

const decript = pass => encript.decrypt(pass);


module.exports = { enkripsiPassword, decript }