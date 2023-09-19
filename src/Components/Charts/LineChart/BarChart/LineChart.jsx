import React from "react";
import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChart = () => {
  const studentData = [
    { studentId: 1, name: "Alice", math: 85, science: 92, english: 78 },
    { studentId: 2, name: "Bob", math: 78, science: 88, english: 90 },
    { studentId: 3, name: "Charlie", math: 92, science: 85, english: 72 },
    { studentId: 4, name: "David", math: 88, science: 90, english: 84 },
    { studentId: 5, name: "Eve", math: 75, science: 78, english: 92 },
    { studentId: 6, name: "Frank", math: 90, science: 82, english: 88 },
    { studentId: 7, name: "Grace", math: 84, science: 75, english: 80 },
    { studentId: 8, name: "Hank", math: 79, science: 93, english: 89 },
    { studentId: 9, name: "Ivy", math: 87, science: 91, english: 76 },
    { studentId: 10, name: "Jack", math: 91, science: 79, english: 85 },
  ];

  return (
    <div className="px-6">
      <LChart width={800} height={500} data={studentData}>
        <Line type="monotone" dataKey="math" stroke="purple" />
        <Line type="monotone" dataKey="science" stroke="white" />
        <Line type="monotone" dataKey="english" stroke="blue" />
        <XAxis dataKey="name" />
        <YAxis />
      </LChart>
    </div>
  );
};

export default LineChart;
