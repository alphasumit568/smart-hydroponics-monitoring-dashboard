const Alert = require('../models/Alert');

async function getAllAlerts() {
  const alerts = await Alert.find()
    .select('deviceId message type createdAt')
    .sort({ createdAt: -1 })
    .lean()
    .exec();

  return alerts;
}

module.exports = { getAllAlerts };
