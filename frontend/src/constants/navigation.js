import {
  RiDashboardLine,
  RiCpuLine,
  RiHistoryLine,
  RiAlarmWarningLine,
} from "react-icons/ri";
export const navigation = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    icon: RiDashboardLine,
  },
  {
    id: 2,
    title: "Devices",
    path: "/devices",
    icon: RiCpuLine,
  },
  {
    id: 3,
    title: "History",
    path: "/history",
    icon: RiHistoryLine,
  },
  {
    id: 4,
    title: "Alerts",
    path: "/alerts",
    icon: RiAlarmWarningLine,
  },
];