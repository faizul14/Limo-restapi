const jwt = require('../services/authJWT')

const autorizationToken = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        res.status(401).json({
            message: 'Autentication token failed, cannot find token',
            code: 401
        })
    }
    const verify = jwt.verifyJWT(token)
    console.log(verify);
    if (verify !== null) {
        next()
        return
    }
    res.status(401).json({
        message: 'Autentication token failed',
        code: 401
    })
}

module.exports = autorizationToken;