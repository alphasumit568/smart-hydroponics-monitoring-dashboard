const { getAllDevices } = require('../services/deviceService');

const getDevices = async (req, res) => {
  try {
    const devices = await getAllDevices();
    return res.status(200).json({ success: true, data: devices });
  } catch (error) {
    console.error('Failed to fetch devices:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch devices.' });
  }
};

module.exports = { getDevices };
