const dbPool = require('../../config/configdb');
const encrypt = require('../../services/enkripsiPass')

const signup = (dataSignUpUser) => {
    // before insert to db, enkripsi dulu
    const password = encrypt.enkripsiPassword(dataSignUpUser.password)
    const query = `INSERT INTO user (username, email, password) VALUES ('${dataSignUpUser.username}', '${dataSignUpUser.email}', '${password}')`
    return dbPool.execute(query);
}

const login = (dataLoginUser) => {
    const query = `SELECT * FROM user WHERE username = '${dataLoginUser.username}'`
    return dbPool.execute(query)   
}

module.exports = {
    signup,
    login,
}