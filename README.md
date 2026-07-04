# 🌱 Smart Hydroponics Monitoring Dashboard

A full-stack Smart Hydroponics Monitoring Dashboard developed using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. The application monitors hydroponic sensor data, displays real-time analytics, manages connected devices, and generates alerts when sensor values exceed predefined thresholds.

---

## 🚀 Features

- 📊 Real-time Dashboard
- 🌡️ Temperature Monitoring
- 💧 Humidity Monitoring
- 🧪 pH Monitoring
- ⚡ EC Monitoring
- 🚰 Water Level Monitoring
- 🚨 Automatic Alert Generation
- 📜 Sensor History
- 🖥️ Device Management
- 📈 Interactive Charts
- 📱 Responsive Dashboard
- 🔄 REST API Integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Recharts
- Axios
- React Router DOM
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## 📂 Project Structure

```text
frontend/
 ├── components/
 ├── layouts/
 ├── pages/
 ├── services/
 ├── constants/

backend/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── services/
 ├── validators/
 ├── constants/
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string
```

---

## 📡 API Endpoints

### Dashboard

```
GET /api/dashboard
```

### Sensor Data

```
POST /api/sensor-data
```

### Devices

```
GET /api/devices
```

### Alerts

```
GET /api/alerts
```

### History

```
GET /api/history
```

---

## 📷 Dashboard Modules

- Dashboard
- Devices
- Alerts
- Sensor History

---

## 📌 Future Improvements

- User Authentication
- Dark Mode
- Export Reports
- Email Notifications
- WebSocket Live Updates
- Alert Resolution System

---

## 👨‍💻 Author

**Sumit Sharma**

Full Stack Developer