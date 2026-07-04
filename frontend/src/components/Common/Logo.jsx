import { RiLeafLine } from "react-icons/ri";

function Logo() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-lg">
          <RiLeafLine size={24} />
        </div>

        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-white">
            HydroSmart
          </h1>

          <p className="text-sm text-slate-400">
            IoT Dashboard
          </p>
        </div>
      </div>
    </div>
  );
}

export default Logo;