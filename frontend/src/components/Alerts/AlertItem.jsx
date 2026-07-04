import {
  RiAlarmWarningLine,
  RiErrorWarningLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";

function AlertItem({ alert }) {
  let Icon = RiCheckboxCircleLine;
  let bg = "bg-emerald-100";
  let color = "text-emerald-600";
  let title = "System Alert";

  const message = alert.message?.toLowerCase() || "";

  if (message.includes("temperature")) {
    title = "High Temperature";
    Icon = RiAlarmWarningLine;
    bg = "bg-red-100";
    color = "text-red-600";
  } else if (message.includes("ph")) {
    title = "pH Level Warning";
    Icon = RiAlarmWarningLine;
    bg = "bg-yellow-100";
    color = "text-yellow-600";
  } else if (message.includes("water level")) {
    title = "Low Water Level";
    Icon = RiErrorWarningLine;
    bg = "bg-orange-100";
    color = "text-orange-600";
  }

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${bg}`}
      >
        <Icon className={color} size={24} />
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-800">
            {title}
          </h3>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              alert.type === "critical"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {alert.type.toUpperCase()}
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {alert.message}
        </p>

        <p className="mt-3 text-xs text-slate-400">
          {new Date(alert.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default AlertItem;