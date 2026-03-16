"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer
} from "recharts";

const data = [{ name: "Conversion", value: 58.19 }];

export default function ConversionGauge() {
  return (
    <Card>
      <CardHeader>
        <p className="text-base font-semibold text-text-primary">Conversion</p>
      </CardHeader>
      <CardContent>
        <div className="relative h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              data={data}
              innerRadius="70%"
              outerRadius="100%"
              startAngle={180}
              endAngle={0}
            >
              <defs>
                <linearGradient id="gaugeGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#5A6CF3" />
                  <stop offset="100%" stopColor="#7C4DFF" />
                </linearGradient>
              </defs>
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                tick={false}
                axisLine={false}
              />
              <RadialBar
                dataKey="value"
                cornerRadius={10}
                fill="url(#gaugeGradient)"
                background={{ fill: "#EDEFFC" }}
              />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-2xl font-semibold text-text-primary">58.19%</p>
            <p className="text-xs font-semibold text-success">+3.5%</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm">
          <div>
            <p className="text-xs text-text-secondary">Income</p>
            <p className="font-semibold text-text-primary">$542,317</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-text-secondary">Expenses</p>
            <p className="font-semibold text-text-primary">$497,456</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
