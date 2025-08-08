'use client';

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/UI/card';
import Image from 'next/image';
import dots from '@/assets/dots.svg';
import RadioGroup from './Radiogroup';

const data = [
  { name: 'Jan', Sales: 4000, Revenue: 2400 },
  { name: 'Feb', Sales: 3000, Revenue: 1398 },
  { name: 'Mar', Sales: 2000, Revenue: 9800 },
  { name: 'Apr', Sales: 2780, Revenue: 3908 },
  { name: 'May', Sales: 1890, Revenue: 4800 },
  { name: 'Jun', Sales: 2100, Revenue: 4600 },
  { name: 'Jul', Sales: 2400, Revenue: 5000 },
  { name: 'Aug', Sales: 2650, Revenue: 5300 },
  { name: 'Sep', Sales: 2200, Revenue: 4700 },
  { name: 'Oct', Sales: 2800, Revenue: 6000 },
  { name: 'Nov', Sales: 4000, Revenue: 2400 },
  { name: 'Dec', Sales: 3000, Revenue: 1398 },
];

export default function BarChartMultiple() {
  return (
    <Card className="bg-transparent shadow-none border border-gray-800">
      <CardHeader>
        <CardTitle className="text-white flex w-full items-center justify-between gap-2">
          <div className="flex gap-2">
            Sales Report <span><Image src={dots} alt="dots menu" /></span>
          </div>
          <div><RadioGroup /></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap={10}>
            <XAxis
              dataKey="name"
              stroke="#cccccc"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937', // Tailwind's gray-800
                border: 'none',
                color: 'white',
                boxShadow: 'none'
              }}
              cursor={{ fill: 'transparent' }} // Removes the white hover background
            />
            <Bar
              dataKey="Sales"
              fill="#4c4ee7d9"
              radius={[4, 4, 0, 0]}
              barSize={10}
            />
            <Bar
              dataKey="Revenue"
              fill="#0ea5e9"
              radius={[4, 4, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
