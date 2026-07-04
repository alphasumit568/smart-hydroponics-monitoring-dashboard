function ChartCard({ title, children }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 opacity-40 blur-3xl transition-all duration-500 group-hover:scale-125"></div>

      {/* Header */}
      <div className="relative mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            {title}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Real-time sensor trend
          </p>
        </div>

        <span className="flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
          Live
        </span>

      </div>

      {/* Chart */}
      <div className="relative">
        {children}
      </div>

    </div>
  );
}

export default ChartCard;
