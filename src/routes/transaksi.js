const express = require('express')
const router = express.Router()
const controllers = require('../controllers/transaksi')

router.get('/', controllers.getAll);

router.post('/add', controllers.addData);

router.put('/update', controllers.updateData);

router.delete('/:id',controllers.removeData);

module.exports = router