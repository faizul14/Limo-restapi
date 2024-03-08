// setup environment with dotenv
require('dotenv').config()
// import express
const express = require('express');
const app = express();
// impoort user router
const routeruser = require('../src/router/user/routerUser');
// import moment router
const momentrouter = require('../src/router/moment/routerMoment')
// import middlewareErrorLog
const middlewareError = require('../src/middleware/middlewareErrorLog')
// import middleware tracker path
const middlewareTrackerPatch = require('../src/middleware/middlewareTrackerPatch')
// import middleware auth
const middlewareAuth = require('../src/middleware/middlewareAuth')
// import mongo
const mongodb = require('../src/config/mongodb');

// get port from environment
const PORT = process.env.PORT

// middleware for allow json reader
app.use(express.json())
//middleware tecker patch
app.use(middlewareTrackerPatch)

// send to user router
app.use('/user', routeruser);

// send to moment router
app.use('/moment', middlewareAuth, momentrouter)

// create endpoint test for know server is succes receive request
app.use('/', (req, res) => {
    res.status(200).json({
        message: 'Server response succes',
        code: 200
    })
})

app.use(middlewareError);


// running server
app.listen(PORT, () => {
    console.log(`Server succes running on port ${PORT}`);

})