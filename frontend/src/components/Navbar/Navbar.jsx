import {
  RiNotification3Line,
  RiSearchLine,
  RiSettings3Line,
  RiMenuLine,
} from "react-icons/ri";

import { formatCurrentDate } from "../../utils/dateFormatter";

function Navbar({ setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200/60 bg-white/80 px-4 backdrop-blur-xl md:px-6 lg:px-8">

      {/* Left */}

      <div className="flex items-center gap-4">

        {/* Mobile Menu */}

        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-xl bg-slate-100 p-2 transition hover:bg-slate-200 lg:hidden"
        >
          <RiMenuLine size={24} />
        </button>

        <div>
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl lg:text-3xl">
            Dashboard Overview
          </h2>

          <p className="mt-1 hidden text-sm text-slate-500 md:block">
            {formatCurrentDate()}
          </p>
        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-3 md:gap-5">

        {/* Search */}

        <div className="relative hidden xl:block">

          <RiSearchLine
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white"
          />

        </div>

        {/* Notification */}

        <button className="rounded-xl bg-slate-100 p-3 transition hover:bg-blue-500 hover:text-white">

          <RiNotification3Line size={20} />

        </button>

        {/* Settings */}

        <button className="rounded-xl bg-slate-100 p-3 transition hover:bg-indigo-500 hover:text-white">

          <RiSettings3Line size={20} />

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-3 py-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 font-bold text-white">
            SS
          </div>

          <div className="hidden lg:block">

            <p className="font-semibold text-slate-900">
              Sumit Sharma
            </p>

            <p className="text-xs text-slate-500">
              Full Stack Developer
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;