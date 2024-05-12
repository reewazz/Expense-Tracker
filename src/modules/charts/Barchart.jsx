import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./charts.css";
export const BarCharts = () => {
  const data = [
    { name: "January", value: 10 },
    { name: "February", value: 15 },
    { name: "March", value: 20 },
    { name: "April", value: 25 },
    { name: "May", value: 30 },
    { name: "June", value: 35 },
  ];
  return (
    <div className="stats">
      <p className="text-2xl font-bold text-black">Statistics last 6 months</p>

      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="coral" />
      </BarChart>
    </div>
  );
};
