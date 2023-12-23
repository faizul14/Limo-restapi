const dbPool = require('../../config/configdb')

const getAllMoment = () => {
    const query = 'SELECT * FROM moment'
    return dbPool.execute(query)
}

const createMoment = (dataMoment) => {
    const { userid, moment, deskripsi, time, feel } = dataMoment
    const query = `INSERT INTO moment (userid, moment, deskripsi, time, feel) VALUES ('${userid}','${moment}','${deskripsi}','${time}','${feel}')`
    return dbPool.execute(query)
}

const updateMomentById = (dataMoment, idUser) => {
    const query = `UPDATE moment SET moment = '${dataMoment.moment}', deskripsi = '${dataMoment.deskripsi}', feel = '${dataMoment.feel}' WHERE id = ${idUser}`
    return dbPool.execute(query)
}

const deleteMomentById = (idMoment) => {
    const query = `DELETE FROM moment WHERE id = ${idMoment}`
    return dbPool.execute(query)
}

module.exports = {
    getAllMoment,
    createMoment,
    deleteMomentById,
    updateMomentById,
}