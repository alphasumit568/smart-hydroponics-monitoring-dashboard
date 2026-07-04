const mongoose = require('mongoose');

const sensorReadingSchema = new mongoose.Schema(
  {
    deviceId: {
      type: String,
      required: true,
      trim: true,
    },
    temperature: {
      type: Number,
      required: true,
      min: -20,
      max: 100,
    },
    humidity: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    ph: {
      type: Number,
      required: true,
      min: 0,
      max: 14,
    },
    ec: {
      type: Number,
      required: true,
      min: 0,
    },
    waterLevel: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'sensorreadings',
    versionKey: false,
  }
);

module.exports = mongoose.model('SensorReading', sensorReadingSchema);