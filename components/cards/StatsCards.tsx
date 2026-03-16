import { Card } from "@/components/ui/card";
import {
  ArrowDownRight,
  ArrowUpRight,
  Package,
  ShoppingBag,
  Users
} from "lucide-react";

const stats = [
  {
    label: "Total Sales",
    value: "263k",
    change: "+15.6%",
    trend: "up",
    icon: ShoppingBag
  },
  {
    label: "Total Visitors",
    value: "35k",
    change: "-6.2%",
    trend: "down",
    icon: Users
  },
  {
    label: "Total Orders",
    value: "165k",
    change: "+3.5%",
    trend: "up",
    icon: Package
  }
] as const;

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const isUp = stat.trend === "up";
        return (
          <Card key={stat.label} className="p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-text-secondary">
                  {stat.label}
                </p>
                <div className="flex items-baseline gap-3">
                  <p className="text-2xl font-semibold text-text-primary">
                    {stat.value}
                  </p>
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-semibold ${
                      isUp ? "text-success" : "text-danger"
                    }`}
                  >
                    {isUp ? (
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    ) : (
                      <ArrowDownRight className="h-3.5 w-3.5" />
                    )}
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
