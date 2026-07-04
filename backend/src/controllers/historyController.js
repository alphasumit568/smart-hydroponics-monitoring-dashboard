const { getSensorHistory } = require('../services/historyService');

const getHistory = async (req, res) => {
  try {
    const sensorHistory = await getSensorHistory();
    return res.status(200).json({ success: true, data: sensorHistory });
  } catch (error) {
    console.error('Failed to fetch sensor history:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch sensor history.' });
  }
};

module.exports = { getHistory };
