const express = require('express');
const { generateQRCode } = require('../controllers/QRController');
const router = express.Router()


router.route('/getQR').post(generateQRCode)

module.exports = router;
