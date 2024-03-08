const mongose = require('mongoose');
const encrypt = require('../../../services/enkripsiPass')

const userSchema = new mongose.Schema({
    _id: {
        type: Object,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})
const userModel = mongose.model('users', userSchema);

const signup = (dataSignUpUser) => {
    // before insert to db, enkripsi dulu
    const password = encrypt.enkripsiPassword(dataSignUpUser.password)
    // const query = `INSERT INTO user (username, email, password) VALUES ('${dataSignUpUser.username}', '${dataSignUpUser.email}', '${password}')`
    // return dbPool.execute(query);
    userModel.insertMany({
        _id: new Object(),
        username: dataSignUpUser.username,
        email: dataSignUpUser.email,
        password: password
    })
}

const login = (dataLoginUser) => {
    // const query = `SELECT * FROM user WHERE username = '${dataLoginUser.username}'`
    // return dbPool.execute(query)
    return userModel.find({ username: dataLoginUser.username })
}

module.exports = {
    signup,
    login,
}