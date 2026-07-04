const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema(
  {
    deviceId: {
      type: String,
      required: [true, 'deviceId is required'],
      unique: true,
      trim: true,
    },
    status: {
      type: String,
      required: [true, 'status is required'],
      enum: ['Online', 'Offline'],
      default: 'Online',
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'devices',
    versionKey: false,
  }
);

module.exports = mongoose.model('Device', deviceSchema);
