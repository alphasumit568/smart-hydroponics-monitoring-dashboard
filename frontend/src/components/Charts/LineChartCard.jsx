import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import ChartCard from "./ChartCard";

function LineChartCard({
  title,
  data,
  dataKey,
  color,
}) {
  return (
    <ChartCard title={title}>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 15,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e5e7eb"
            vertical={false}
          />

          <XAxis
            dataKey="time"
            tick={{ fill: "#64748b", fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tick={{ fill: "#64748b", fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
            cursor={{
              stroke: color,
              strokeDasharray: "4 4",
            }}
          />

          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={3}
            dot={{
              r: 4,
              fill: color,
              stroke: "#fff",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 7,
              fill: color,
              stroke: "#fff",
              strokeWidth: 3,
            }}
            isAnimationActive={true}
            animationDuration={1200}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export default LineChartCard;