
import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
];

export function Graph() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="border-none mt-5 mb-15 shadow-none">
      <CardHeader className="flex items-center gap-2 space-y-0 border-none py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle className="text-center text-7xl font-bold">Area Chart - Interactive</CardTitle>
          <CardDescription className="text-center text-2xl mt-4">
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 mx-auto  h-full sm:pt-6">
        <div className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData} width={600} height={250}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} minTickGap={32} />
            <Tooltip cursor={false} />
            <Area dataKey="mobile" type="monotone" fill="url(#fillMobile)" stroke="#82ca9d" stackId="a" />
            <Area dataKey="desktop" type="monotone" fill="url(#fillDesktop)" stroke="#8884d8" stackId="a" />
          </AreaChart>
        </div>
      </CardContent>
    </Card>
  );
}
