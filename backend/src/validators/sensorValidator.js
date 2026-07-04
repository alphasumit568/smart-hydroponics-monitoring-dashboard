const validateSensorReading = (req, res, next) => {
  const errors = [];
  const {
    deviceId,
    temperature,
    humidity,
    ph,
    ec,
    waterLevel,
  } = req.body || {};

  if (typeof deviceId !== 'string' || deviceId.trim().length === 0) {
    errors.push('deviceId is required and must be a non-empty string');
  }

  const validateNumberField = (fieldName, value, min, max) => {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      errors.push(`${fieldName} is required and must be a number`);
      return;
    }

    if (value < min || value > max) {
      errors.push(`${fieldName} must be between ${min} and ${max}`);
    }
  };

  validateNumberField('temperature', temperature, -20, 100);
  validateNumberField('humidity', humidity, 0, 100);
  validateNumberField('ph', ph, 0, 14);

  if (typeof ec !== 'number' || Number.isNaN(ec)) {
    errors.push('ec is required and must be a number');
  } else if (ec < 0) {
    errors.push('ec cannot be negative');
  }

  validateNumberField('waterLevel', waterLevel, 0, 100);

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    });
  }

  next();
};

module.exports = validateSensorReading;
