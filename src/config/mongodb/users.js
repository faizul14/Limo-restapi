
const mongose = require('mongoose');

const schema = new mongose.Schema({
    _id: {
        type: Object,
        required: true
    },
    name: {
        type: String,
        required: true,
    }
})


const userModel = mongose.model('customers', schema);
const getAllCustomers = () => userModel.find();


// import usersModelmMongo
const usm = require('../src/config/mongodb/users');

// const getDataFromMongoDb = async () => {
//     try {
//         const data = await usm.getAllCustomers();
//         console.log(data);
//         return data;
//     } catch (error) {
//         return error;
//     }
// }
// getDataFromMongoDb();

module.exports = {
    getAllCustomers,
}