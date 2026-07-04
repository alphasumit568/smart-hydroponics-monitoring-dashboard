import { useEffect, useState } from "react";
import DeviceRow from "./DeviceRow";
import { getDevices } from "../../services/deviceService";

function DeviceTable() {
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchDevices() {
      try {
        const data = await getDevices();
        setDevices(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load devices.");
      } finally {
        setLoading(false);
      }
    }

    fetchDevices();
  }, []);

  const handleView = (device) => {
    setSelectedDevice(device);
  };

  // Loading State
  if (loading) {
    return (
      <div className="mt-10 rounded-3xl bg-white p-8 shadow-md">
        <div className="flex flex-col items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

          <p className="mt-4 text-slate-500">
            Loading devices...
          </p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="mt-10 rounded-3xl border border-red-200 bg-red-50 p-8 text-center shadow-md">
        <h2 className="text-lg font-bold text-red-600">
          Failed to Load Devices
        </h2>

        <p className="mt-2 text-slate-600">
          {error}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-10 rounded-3xl bg-white p-6 shadow-md">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Connected Devices
          </h2>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
            {devices.length} Devices
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">

            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500">
                <th className="pb-4">Device ID</th>
                <th>Status</th>
                <th>Last Updated</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {devices.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="py-12 text-center text-slate-500"
                  >
                    No connected devices found.
                  </td>
                </tr>
              ) : (
                devices.map((device) => (
                  <DeviceRow
                    key={device.deviceId}
                    device={device}
                    onView={handleView}
                  />
                ))
              )}
            </tbody>

          </table>
        </div>

      </div>

      {/* Device Details Modal */}
      {selectedDevice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

            <h2 className="mb-6 text-2xl font-bold text-slate-800">
              Device Details
            </h2>

            <div className="space-y-5">

              <div>
                <p className="text-sm text-slate-500">
                  Device ID
                </p>

                <p className="font-semibold">
                  {selectedDevice.deviceId}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Status
                </p>

                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    selectedDevice.status === "Online"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {selectedDevice.status}
                </span>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Last Updated
                </p>

                <p>
                  {new Date(selectedDevice.lastUpdated).toLocaleString()}
                </p>
              </div>

            </div>

            <button
              onClick={() => setSelectedDevice(null)}
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white transition hover:shadow-lg"
            >
              Close
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default DeviceTable;