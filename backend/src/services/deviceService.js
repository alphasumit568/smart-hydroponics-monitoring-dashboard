const Device = require('../models/Device');

async function getAllDevices() {
  const devices = await Device.find()
    .select('deviceId status lastUpdated')
    .sort({ lastUpdated: -1 })
    .lean()
    .exec();

  return devices;
}

module.exports = { getAllDevices };
