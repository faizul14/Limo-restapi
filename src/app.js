// setup environment with dotenv
require('dotenv').config()
// import express
const express = require('express');
const app = express();

// get port from environment
const PORT = process.env.PORT



// create endpoint test for know server is succes receive request
app.use('/', (req, res) => {
    res.status(200).json({
        message: 'Server response succes',
        code: 200
    })
})


// running server
app.listen(PORT, () => {
    console.log(`Server succes running on port ${PORT}`);

})