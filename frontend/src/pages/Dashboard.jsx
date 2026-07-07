import SummaryCards from "../components/Cards/SummaryCards";
import LineChartCard from "../components/Charts/LineChartCard";
import AlertList from "../components/Alerts/AlertList";
import DeviceTable from "../components/Devices/DeviceTable";

import { getHistory } from "../services/historyService";
import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboardService";

function Dashboard() {
  // State
  const [dashboard, setDashboard] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // API Call
  useEffect(() => {
    async function fetchDashboard() {
      try {
        const [dashboardData, historyData] = await Promise.all([
          getDashboard(),
          getHistory(),
        ]);

        setDashboard(dashboardData);
        setHistory(historyData);  
      } catch (err) {
        console.error(err);
        setError("Failed to load dashboard.");
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  // Convert history into chart format
  const chartData = history.map((item) => ({
    time: new Date(item.timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
       second: "2-digit",
    }),
    temperature: item.temperature,
    humidity: item.humidity,
    ph: item.ph,
     ec: item.ec,
    water: item.waterLevel,
  }));

  // Loading State
  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

          <p className="mt-4 text-lg font-medium text-slate-600">
            Loading Dashboard...
          </p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8 shadow-md">
          <h2 className="text-xl font-bold text-red-600">
            Failed to Load Dashboard
          </h2>

          <p className="mt-2 text-slate-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="mb-8 flex flex-col gap-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 p-6 text-white shadow-xl lg:flex-row lg:items-center lg:justify-between lg:p-8">

        {/* Left Section */}
        <div>
          <p className="text-sm uppercase tracking-widest text-slate-300">
            Hydroponics Monitoring System
          </p>

         <h1 className="mt-3 text-3xl font-extrabold md:text-4xl xl:text-5xl">
            Welcome Back,
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Sumit Sharma 👋
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-base text-slate-300 md:text-lg">
            Monitor every sensor, device, and alert from one modern dashboard.
            Stay informed with real-time hydroponics insights.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-auto">
          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md lg:min-w-[260px]">
            <p className="text-sm text-slate-300">
              System Status
            </p>

            <div className="mt-2 flex items-center gap-2">
              <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400"></div>

              <span className="font-semibold text-emerald-300">
                All Systems Operational
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Summary Cards */}
      <SummaryCards dashboard={dashboard} />

      {/* Charts */}
      <div className="mt-10 grid gap-6 xl:grid-cols-2">

        <LineChartCard
          title="Temperature Trend"
          data={chartData}
          dataKey="temperature"
          color="#2563eb"
        />

        <LineChartCard
          title="Humidity Trend"
          data={chartData}
          dataKey="humidity"
          color="#06b6d4"
        />

        <LineChartCard
          title="pH Trend"
          data={chartData}
          dataKey="ph"
          color="#f97316"
        />

        <LineChartCard
  title="pH Trend"
  data={chartData}
  dataKey="ph"
  color="#f59e0b"
/>

        <LineChartCard
          title="Water Level Trend"
          data={chartData}
          dataKey="water"
          color="#10b981"
        />

      </div>

      {/* Alerts */}
      <div className="mt-10">
        <AlertList />
      </div>

      {/* Devices */}
      <DeviceTable />
    </>
  );
}

export default Dashboard;