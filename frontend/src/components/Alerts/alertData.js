import {
  RiAlarmWarningLine,
  RiCheckboxCircleLine,
  RiErrorWarningLine,
} from "react-icons/ri";

export const alerts = [
  {
    id: 1,
    title: "High Temperature",
    message: "Temperature reached 29°C",
    time: "2 mins ago",
    color: "text-red-500",
    bg: "bg-red-100",
    icon: RiAlarmWarningLine,
  },
  {
    id: 2,
    title: "Water Level Low",
    message: "Water level dropped below 80%",
    time: "8 mins ago",
    color: "text-orange-500",
    bg: "bg-orange-100",
    icon: RiErrorWarningLine,
  },
  {
    id: 3,
    title: "System Stable",
    message: "All sensors are operating normally",
    time: "15 mins ago",
    color: "text-green-500",
    bg: "bg-green-100",
    icon: RiCheckboxCircleLine,
  },
];