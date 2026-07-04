const saveSensorReading = require('../services/sensorService');

const createSensorReading = async (req, res) => {
  try {
    const result = await saveSensorReading(req.body);
    return res.status(201).json(result);
  } catch (err) {
    console.error('Error saving sensor reading:', err);
    return res.status(500).json({
      success: false,
      message: `Failed to save sensor reading: ${err.message || 'Internal server error'}`,
    });
  }
};

module.exports = { createSensorReading };
