const momentModels = require('../../models/moment/modelsMoment')

const testControlles = (req, res) => {
    res.status(200).json({
        message: 'Server endpoint moment succer response',
        code: 200,
    })
}

const getAllMoment = async (req, res) => {
    try {
        const [rows] = await momentModels.getAllMoment()
        res.status(200).json({
            message: 'Request succes',
            code: 200,
            data: rows
        })
    } catch (error) {
        res.status(500).json({
            message: 'Request failed',
            code: 500,
            error: error
        })
    }
}

const updateMoment = async (req, res) => {
    const bodyData = req.body
    const { idMoment } = req.params
    try {
        await momentModels.updateMomentById(bodyData, idMoment)
        res.status(200).json({
            message: 'Update data succes',
            code: 200,
            data: bodyData
        })
    } catch (error) {
        res.status(400).json({
            message: 'Update data failed',
            code: 400,
            error: error
        })
    }
}

const deleteMoment = async (req, res) => {
    const { idMoment } = req.params
    try {
        await momentModels.deleteMomentById(idMoment)
        res.status(201).json({
            message: 'Delete moment succes',
            code: 201
        })
    } catch (error) {
        res.status(400).json({
            message: 'Delete moment failed',
            code: 400,
            error: error
        })
    }
}

module.exports = {
    testControlles,
    getAllMoment,
    updateMoment,
    deleteMoment
}