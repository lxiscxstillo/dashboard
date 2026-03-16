import { Card } from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

type IconType = (props: { className?: string }) => JSX.Element;

type StatItem = {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: IconType;
};

const SalesIcon: IconType = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M7 7h12l-1.1 6.2a2 2 0 0 1-2 1.6H9.6a2 2 0 0 1-2-1.6L6.2 6H4.5a1 1 0 1 1 0-2h2.7a1 1 0 0 1 .98.8L9 7z"
      fill="#5A6CF3"
    />
    <circle cx="10" cy="18.2" r="1.2" fill="#5A6CF3" />
    <circle cx="16" cy="18.2" r="1.2" fill="#5A6CF3" />
  </svg>
);

const VisitorsIcon: IconType = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <circle cx="9" cy="9" r="3.2" fill="#5A6CF3" />
    <circle cx="16.5" cy="10" r="2.2" fill="#5A6CF3" opacity="0.65" />
    <path
      d="M4.8 18c0-2.7 2.8-4.6 5.7-4.6 2.9 0 5.7 1.9 5.7 4.6v.4H4.8V18z"
      fill="#5A6CF3"
    />
  </svg>
);

const OrdersIcon: IconType = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M7 8.2l5-2.8 5 2.8v6.6l-5 2.8-5-2.8V8.2z"
      fill="#5A6CF3"
    />
    <path
      d="M9.2 9.6h5.6a1.6 1.6 0 0 1 0 3.2H9.2a1.6 1.6 0 0 1 0-3.2z"
      fill="#ffffff"
      opacity="0.85"
    />
  </svg>
);

const stats: StatItem[] = [
  {
    label: "Total Sales",
    value: "263k",
    change: "+15.6%",
    trend: "up",
    icon: SalesIcon
  },
  {
    label: "Total Visitors",
    value: "35k",
    change: "-6.2%",
    trend: "down",
    icon: VisitorsIcon
  },
  {
    label: "Total Orders",
    value: "165k",
    change: "+3.5%",
    trend: "up",
    icon: OrdersIcon
  }
];

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
                <p className="text-sm font-semibold text-text-secondary">
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
