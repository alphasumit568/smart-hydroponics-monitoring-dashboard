const express = require('express');
const { createSensorReading } = require('../controllers/sensorController');
const validateSensorReading = require('../validators/sensorValidator');

const router = express.Router();

const routePath = '/';

router.post(routePath, validateSensorReading, createSensorReading);

module.exports = router;
