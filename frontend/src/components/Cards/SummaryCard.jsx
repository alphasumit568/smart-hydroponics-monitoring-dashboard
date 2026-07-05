import { motion } from "framer-motion";

function SummaryCard({
  title,
  value,
  icon: Icon,
  color,
  bg,
  progress,
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className={`group rounded-3xl ${bg} border border-slate-200 p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
            {value}
          </h2>
        </div>

        <div
          className={`flex  h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg`}
        >
          <Icon size={28} />
        </div>
      </div>

     <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-200">
  <div
    className={`h-full w-2/3 rounded-full bg-gradient-to-r ${progress}`}
  />
</div>

      <p className="mt-3 text-sm text-emerald-600">
        Live sensor monitoring
      </p>
    </motion.div>
  );
}

export default SummaryCard;