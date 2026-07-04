import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

import ChartCard from "./ChartCard";
import { sensorData } from "./chartData";

function TemperatureChart() {
  return (
    <ChartCard title="Temperature Trend">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sensorData}>
          <XAxis dataKey="time" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#3b82f6"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export default TemperatureChart;