const { getAllAlerts } = require('../services/alertService');

const getAlerts = async (req, res) => {
  try {
    const alerts = await getAllAlerts();
    return res.status(200).json({ success: true, data: alerts });
  } catch (error) {
    console.error('Failed to fetch alerts:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch alerts.' });
  }
};

module.exports = { getAlerts };
