const Device = require('../models/Device');
const SensorReading = require('../models/SensorReading');
const Alert = require('../models/Alert');

async function getDashboardData() {
  const totalDevicesPromise = Device.countDocuments().exec();
  const onlineDevicesPromise = Device.countDocuments({ status: 'Online' }).exec();
  const latestReadingPromise = SensorReading.findOne()
    .sort({ timestamp: -1 })
    .select('deviceId temperature humidity ph ec waterLevel timestamp')
    .lean()
    .exec();
  const activeAlertsPromise = Alert.countDocuments().exec();

  const [totalDevices, onlineDevices, latestSensorReading, activeAlerts] = await Promise.all([
    totalDevicesPromise,
    onlineDevicesPromise,
    latestReadingPromise,
    activeAlertsPromise,
  ]);

  const offlineDevices = Math.max(0, totalDevices - onlineDevices);

  const formatTimestamp = (ts) => {
    if (!ts) return null;
    return ts instanceof Date ? ts.toISOString() : new Date(ts).toISOString();
  };

  const normalizedLatest = latestSensorReading
    ? { ...latestSensorReading, timestamp: formatTimestamp(latestSensorReading.timestamp) }
    : null;

  return {
    totalDevices,
    onlineDevices,
    offlineDevices,
    latestSensorReading: normalizedLatest,
    activeAlerts,
    lastUpdated: new Date().toISOString(),
  };
}

module.exports = { getDashboardData };
