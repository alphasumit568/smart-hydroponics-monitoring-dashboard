const express = require('express');
const { getDevices } = require('../controllers/deviceController');

const router = express.Router();

router.get('/', getDevices);

module.exports = router;
