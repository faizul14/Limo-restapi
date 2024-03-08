const mongoose = require('mongoose');
const mongo_uri = process.env.MONGODB;

const connect = async () => {
    await mongoose.connect(mongo_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}
connect()
    .then(() => console.log('Connect ya !!'))
    .catch((error) => console.log(`Error: ${error}`))

module.exports = connect;