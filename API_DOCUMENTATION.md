# Smart Hydroponics Monitoring Dashboard API Documentation

## Base URL

```
http://localhost:5000/api
```

---

# 1. Ingest Sensor Data

### Endpoint

```
POST /sensor-data
```

### Description

Receives sensor readings from IoT devices and stores them in MongoDB.
If any threshold is exceeded, an alert is automatically generated.

### Request Body

```json
{
  "deviceId": "HYDRO_001",
  "temperature": 28.5,
  "humidity": 72,
  "ph": 6.3,
  "ec": 1.8,
  "waterLevel": 82
}
```

### Success Response

```json
{
  "success": true,
  "message": "Sensor data saved successfully."
}
```

---

# 2. Dashboard

### Endpoint

```
GET /dashboard
```

### Description

Returns dashboard summary including latest sensor values and device statistics.

### Response

```json
{
  "success": true,
  "data": {
    "totalDevices": 1,
    "onlineDevices": 1,
    "offlineDevices": 0,
    "latestSensorReading": {},
    "activeAlerts": 3,
    "lastUpdated": "2026-07-04T15:22:00Z"
  }
}
```

---

# 3. Sensor History

### Endpoint

```
GET /history
```

### Description

Returns all stored sensor readings ordered by latest timestamp.

### Response

```json
{
  "success": true,
  "data": [
    {
      "deviceId": "HYDRO_001",
      "temperature": 29,
      "humidity": 70,
      "ph": 6.2,
      "ec": 1.7,
      "waterLevel": 75,
      "timestamp": "2026-07-04T15:20:00Z"
    }
  ]
}
```

---

# 4. Alerts

### Endpoint

```
GET /alerts
```

### Description

Returns all generated alerts.

### Response

```json
{
  "success": true,
  "data": [
    {
      "type": "temperature",
      "message": "Temperature exceeded threshold.",
      "createdAt": "2026-07-04T15:25:00Z"
    }
  ]
}
```

---

# 5. Devices

### Endpoint

```
GET /devices
```

### Description

Returns all registered devices.

### Response

```json
{
  "success": true,
  "data": [
    {
      "deviceId": "HYDRO_001",
      "status": "Online",
      "lastUpdated": "2026-07-04T15:25:00Z"
    }
  ]
}
```

---

# Threshold Values

| Sensor | Threshold |
|---------|-----------|
| Temperature | > 35°C |
| pH | < 5.5 or > 7.0 |
| Water Level | < 20% |

Alerts are automatically generated whenever these thresholds are exceeded.

---

# Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- React
- Tailwind CSS
- Recharts
