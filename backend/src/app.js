require('dotenv').config();

const express = require('express');
const cors = require('cors');

const sensorRoutes = require('./routes/sensorRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const alertRoutes = require('./routes/alertRoutes');
const historyRoutes = require('./routes/historyRoutes');
const deviceRoutes = require('./routes/deviceRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/sensors', sensorRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/devices', deviceRoutes);

// Export app
module.exports = app;