const express = require('express')
const router = express.Router()
const controllers = require('../controllers/produk')
const uploads = require("../middleware/upload")

router.get('/', controllers.getAll);

router.post('/add', uploads.single("photo"), controllers.addData);

router.put('/update', uploads.single("photo"), controllers.updateData);

router.delete('/remove/:id', controllers.removeData)

module.exports = router