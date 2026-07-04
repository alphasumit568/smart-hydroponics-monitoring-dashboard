const SensorReading = require('../models/SensorReading');

async function getSensorHistory() {
  const sensorReadings = await SensorReading.find()
    .select('deviceId temperature humidity ph ec waterLevel timestamp')
    .sort({ timestamp: 1 })
    .lean()
    .exec();

  return sensorReadings;
}

module.exports = { getSensorHistory };
