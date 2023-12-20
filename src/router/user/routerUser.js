const express = require('express');
const router = express.Router();
const usercontroller = require('../../controller/user/userController')

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Endpoint user response succes',
        code: 200,
    })
})

router.post('/signup', usercontroller.signup)

router.post('/login', usercontroller.login)



module.exports = router;