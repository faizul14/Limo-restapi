const modelsuser = require('../../models/user/modelsUser');
const authJWT = require('../../services/authJWT')

const signup = async (req, res) => {
    const body = req.body
    try {
        await modelsuser.signup(body)
        res.status(200).json({
            message: 'SignUp succes',
            code: 200,
        })
    } catch (error) {
        res.status(400).json({
            message: 'SignUp failed',
            code: 400,
            error: error
        })
    }
}

const login = async (req, res) => {
    const { body } = req
    const dataLogin = {
        username: body.username,
        password: body.password
    }

    if (!dataLogin.username || !dataLogin.password) {
        res.status(401).json({
            message: 'Login failed, username & password empty',
            code: 401
        })
        return
    }
    try {
        const [rows] = await modelsuser.login(dataLogin)
        console.log(`Data user login ${rows[0].id}`);

        if (!rows[0].username || !rows[0].email || !rows[0].id) {
            res.status(401).json({
                message: 'Login failed, username not found',
                code: 401
            })
            return
        }
        const token = authJWT.generateJWT(rows[0])
        res.status(200).json({
            message: 'Login succes',
            code: 200,
            data: {
                user: rows[0].username,
                token: token
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Login failed ' + error.message,
            code: 401
        })
    }
}

module.exports = {
    signup,
    login,
}