const dbPool = require('../../config/configdb');

const signup = (dataSignUpUser) => {
    const query = `INSERT INTO user (username, email, password) VALUES ('${dataSignUpUser.username}', '${dataSignUpUser.email}', '${dataSignUpUser.password}')`
    return dbPool.execute(query);
}

const login = (dataLoginUser) => {
    const query = `SELECT * FROM user WHERE username = '${dataLoginUser.username}' && password = '${dataLoginUser.password}'`  
    return dbPool.execute(query)
}

module.exports = {
    signup,
    login,
}