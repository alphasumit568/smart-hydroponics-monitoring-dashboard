import { useEffect, useState } from "react";
import AlertItem from "./AlertItem";
import { getAlerts } from "../../services/alertService";

function AlertList() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchAlerts() {
      try {
        const response = await getAlerts();
        setAlerts(response.data);
      } catch (err) {
        console.error(err);
        setError("Unable to load alerts.");
      } finally {
        setLoading(false);
      }
    }

    fetchAlerts();
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow-md">
        <div className="flex flex-col items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-red-500 border-t-transparent"></div>

          <p className="mt-4 text-slate-500">
            Loading alerts...
          </p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center shadow-md">
        <h2 className="text-lg font-bold text-red-600">
          Failed to Load Alerts
        </h2>

        <p className="mt-2 text-slate-600">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Recent Alerts
        </h2>

        <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
          {alerts.length} Alerts
        </span>
      </div>

      <div className="space-y-4">
        {alerts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 py-12 text-center">
            <h3 className="text-lg font-semibold text-slate-700">
              🎉 No Alerts Found
            </h3>

            <p className="mt-2 text-slate-500">
              Your hydroponics system is operating normally.
            </p>
          </div>
        ) : (
          alerts.map((alert) => (
            <AlertItem
              key={alert._id}
              alert={alert}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default AlertList;