import { useEffect, useState } from "react";
import { getHistory } from "../../services/historyService";

function HistoryTable() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchHistory() {
      try {
        const response = await getHistory();

        const historyData = Array.isArray(response)
          ? response
          : response?.data || [];

        setHistory(historyData);
      } catch (err) {
        console.error(err);
        setError("Unable to load sensor history.");
      } finally {
        setLoading(false);
      }
    }

    fetchHistory();
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow-md">
        <div className="flex flex-col items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

          <p className="mt-4 text-slate-500">
            Loading sensor history...
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
          Failed to Load History
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
          Sensor Readings
        </h2>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          {history.length} Records
        </span>

      </div>

      {history.length === 0 ? (

        <div className="rounded-2xl border border-dashed border-slate-300 py-12 text-center">

          <h3 className="text-lg font-semibold text-slate-700">
            No Sensor History
          </h3>

          <p className="mt-2 text-slate-500">
            Sensor readings will appear here once data is received.
          </p>

        </div>

      ) : (

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead>

              <tr className="border-b border-slate-200 text-left text-sm font-semibold text-slate-600">

                <th className="pb-4">Device</th>

                <th>Temperature</th>

                <th>Humidity</th>

                <th>pH</th>

                <th>EC</th>

                <th>Water Level</th>

                <th>Timestamp</th>

              </tr>

            </thead>

            <tbody>

              {history.map((reading) => (

                <tr
                  key={reading._id}
                  className="border-b border-slate-100 transition hover:bg-slate-50"
                >

                  <td className="py-4 font-semibold">
                    {reading.deviceId}
                  </td>

                  <td className="text-red-600 font-medium">
                    {reading.temperature} °C
                  </td>

                  <td className="text-cyan-600 font-medium">
                    {reading.humidity} %
                  </td>

                  <td className="text-orange-600 font-medium">
                    {reading.ph}
                  </td>

                  <td className="text-violet-600 font-medium">
                    {reading.ec}
                  </td>

                  <td className="text-emerald-600 font-medium">
                    {reading.waterLevel} %
                  </td>

                  <td className="text-slate-500">
                    {new Date(reading.timestamp).toLocaleString()}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}

export default HistoryTable;