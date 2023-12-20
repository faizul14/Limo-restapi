const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRETKEY

const generateJWT = (dataUser) => {
    if(!dataUser.username && !dataUser.email && !dataUser.id){
        return null
    }

    const payload = {
        userId : dataUser.id,
        username: dataUser.username,
        userEmail: dataUser.email,
    }

    const option = {
        expiresIn : '1h',
    }

    const token = jwt.sign(payload, secretKey, option )
    return token
}

const verifyJWT = token => {
    try {
        const decodeToken = jwt.verify(token, secretKey)
        return decodeToken
    } catch (error) {
        console.log(`JWT verification token failed`);
        return null
    }
}

module.exports = {
    generateJWT,
    verifyJWT,
}
