    const { getDashboardData } = require('../services/dashboardService');

    const getDashboard = async (req, res) => {
    try {
        const dashboardData = await getDashboardData();
        return res.status(200).json({ success: true, data: dashboardData });
    } catch (error) {
        console.error("Dashboard Error:", error);
        return res.status(500).json({ success: false, message: 'Failed to fetch dashboard data.' });
    }
    };

    module.exports = { getDashboard };
