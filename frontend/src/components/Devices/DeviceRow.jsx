function DeviceRow({ device, onView }) {
  return (
    <tr className="border-b border-slate-100 transition hover:bg-slate-50">
      <td className="py-4 font-semibold text-slate-800">
        {device.deviceId}
      </td>

      <td>
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            device.status === "Online"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {device.status}
        </span>
      </td>

      <td className="text-slate-500">
        {new Date(device.lastUpdated).toLocaleString()}
      </td>

      <td>
        <button
          onClick={() => onView(device)}
          className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          View Details
        </button>
      </td>
    </tr>
  );
}

export default DeviceRow;