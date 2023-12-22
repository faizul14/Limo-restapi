const express = require('express');
const router = express.Router();
const momentcontroller = require('../../controller/moment/momentController')

router.get('/tes', momentcontroller.testControlles)
router.get('/', momentcontroller.getAllMoment)
router.patch('/:idMoment', momentcontroller.updateMoment)
router.delete('/:idMoment', momentcontroller.deleteMoment)


module.exports = router;