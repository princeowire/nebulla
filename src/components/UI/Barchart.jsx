// components/BarChartMultiple.jsx
'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/UI/Card';

const data = [
  {
    name: 'Jan',
    Sales: 4000,
    Revenue: 2400
  },
  {
    name: 'Feb',
    Sales: 3000,
    Revenue: 1398
  },
  {
    name: 'Mar',
    Sales: 2000,
    Revenue: 9800
  },
  {
    name: 'Apr',
    Sales: 2780,
    Revenue: 3908
  },
  {
    name: 'May',
    Sales: 1890,
    Revenue: 4800
  }
];

export default function BarChartMultiple() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales vs Revenue</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#888888" />
            <YAxis stroke="#888888" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Revenue" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
