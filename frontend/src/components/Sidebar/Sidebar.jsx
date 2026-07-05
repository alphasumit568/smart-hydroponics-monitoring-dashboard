import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";

import Logo from "../Common/Logo";
import { navigation } from "../../constants/navigation";
import { getDashboard } from "../../services/dashboardService";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const data = await getDashboard();
        setDashboard(data);
      } catch (error) {
        console.error("Failed to load dashboard:", error);
      }
    }

    fetchDashboard();
  }, []);

  const apiStatus = dashboard ? "Running" : "Connecting...";

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[290px] flex-col bg-slate-950 px-6 py-8 text-white shadow-2xl transition-transform duration-300
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }
        lg:static lg:translate-x-0`}
      >
        {/* Mobile Close Button */}
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <Logo />

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-xl bg-slate-800 p-2"
          >
            <RiCloseLine size={24} />
          </button>
        </div>

        {/* Desktop Logo */}
        <div className="hidden lg:block">
          <Logo />
        </div>

        {/* Navigation */}
        <nav className="mt-10 flex flex-col gap-3">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center gap-4 rounded-2xl px-5 py-4 text-lg font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-500 shadow-lg"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <motion.div whileHover={{ scale: 1.15 }}>
                  <Icon size={24} />
                </motion.div>

                {item.title}
              </NavLink>
            );
          })}
        </nav>

        <div className="flex-1" />

        {/* Status Card */}
        <div className="rounded-3xl bg-slate-900 p-5 shadow-xl">

          <div className="flex items-center gap-2">
            <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />

            <h3 className="font-semibold">
              System Status
            </h3>
          </div>

          <p className="mt-2 text-sm text-slate-400">
            All Systems Operational
          </p>

          <div className="mt-6 space-y-3">

            <div className="flex items-center justify-between rounded-xl bg-slate-800 px-4 py-3">
              <span className="text-sm text-slate-300">
                Online Devices
              </span>

              <span className="font-semibold text-emerald-400">
                {dashboard?.onlineDevices ?? "--"}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-800 px-4 py-3">
              <span className="text-sm text-slate-300">
                Active Alerts
              </span>

              <span className="font-semibold text-red-400">
                {dashboard?.activeAlerts ?? "--"}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-800 px-4 py-3">
              <span className="text-sm text-slate-300">
                API Status
              </span>

              <span
                className={`font-semibold ${
                  dashboard ? "text-cyan-400" : "text-yellow-400"
                }`}
              >
                {apiStatus}
              </span>
            </div>

          </div>

        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          © 2026 HydroSmart
        </p>

      </aside>
    </>
  );
}

export default Sidebar;