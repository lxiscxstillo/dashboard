"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis
} from "recharts";

const data = [
  { day: "21", value: 4 },
  { day: "22", value: 9 },
  { day: "23", value: 5 },
  { day: "24", value: 12 },
  { day: "25", value: 7 },
  { day: "26", value: 15 }
];

export default function SessionsChart() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-base font-semibold text-text-primary">
              Online Store Sessions
            </p>
            <p className="text-xs text-text-secondary">Visitors</p>
          </div>
          <Button variant="outline" size="sm" className="rounded-full">
            View Report
          </Button>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-3xl font-semibold text-text-primary">68</p>
            <p className="text-xs font-semibold text-success">+15.6%</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-text-secondary">Sessions Over Time</p>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 text-xs text-text-secondary"
            >
              February
              <ChevronDown className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="h-[230px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="sessionLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#5A6CF3" />
                  <stop offset="100%" stopColor="#7C4DFF" />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#E6EAF2" strokeDasharray="4 4" vertical={false} />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="url(#sessionLine)"
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 2, fill: "#ffffff" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-text-secondary">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
              21
            </span>
            <span>22</span>
            <span>23</span>
            <span>24</span>
            <span>25</span>
            <span>26</span>
          </div>
          <span className="font-semibold text-success">+15.6%</span>
        </div>
      </CardContent>
    </Card>
  );
}
