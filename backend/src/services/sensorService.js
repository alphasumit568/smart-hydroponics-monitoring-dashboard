const Device = require('../models/Device');
const SensorReading = require('../models/SensorReading');
const Alert = require('../models/Alert');
const alertThresholds = require('../constants/alertThresholds');

const createDeviceIfMissing = async (deviceId, currentDate) => {
  let device = await Device.findOne({ deviceId });

  if (!device) {
    device = new Device({
      deviceId,
      status: 'Online',
      lastUpdated: currentDate,
    });

    await device.save();
    return device;
  }

  device.status = 'Online';
  device.lastUpdated = currentDate;
  await device.save();

  return device;
};

const buildAlertPayloads = (sensorData, deviceId, currentDate) => {
  const alertPayloads = [];
  const {
    temperature,
    ph,
    waterLevel,
  } = sensorData;

  if (temperature > alertThresholds.TEMPERATURE_MAX) {
    alertPayloads.push({
      deviceId,
      message: `Temperature is above the maximum threshold of ${alertThresholds.TEMPERATURE_MAX}°C`,
      type: 'warning',
      createdAt: currentDate,
    });
  }

  if (ph < alertThresholds.PH_MIN) {
    alertPayloads.push({
      deviceId,
      message: `pH is below the minimum threshold of ${alertThresholds.PH_MIN}`,
      type: 'warning',
      createdAt: currentDate,
    });
  }

  if (ph > alertThresholds.PH_MAX) {
    alertPayloads.push({
      deviceId,
      message: `pH is above the maximum threshold of ${alertThresholds.PH_MAX}`,
      type: 'warning',
      createdAt: currentDate,
    });
  }

  if (waterLevel < alertThresholds.WATER_LEVEL_MIN) {
    alertPayloads.push({
      deviceId,
      message: `Water level is below the minimum threshold of ${alertThresholds.WATER_LEVEL_MIN}%`,
      type: 'critical',
      createdAt: currentDate,
    });
  }

  return alertPayloads;
};

const createAlertsIfNeeded = async (sensorData, deviceId, currentDate) => {
  const alertPayloads = buildAlertPayloads(sensorData, deviceId, currentDate);

  if (alertPayloads.length === 0) {
    return;
  }

  await Alert.create(alertPayloads);
};

const saveSensorReading = async (sensorData) => {
  try {
    const {
      deviceId,
      temperature,
      humidity,
      ph,
      ec,
      waterLevel,
    } = sensorData;

    const currentDate = new Date();

    await createDeviceIfMissing(deviceId, currentDate);

    const savedReading = new SensorReading({
      deviceId,
      temperature,
      humidity,
      ph,
      ec,
      waterLevel,
      timestamp: currentDate,
    });

    await savedReading.save();

    await createAlertsIfNeeded(sensorData, deviceId, currentDate);

    return {
      success: true,
      message: 'Sensor reading saved successfully',
      data: savedReading,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = saveSensorReading;
