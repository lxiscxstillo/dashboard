import DashboardLayout from "@/components/layouts/DashboardLayout";
import StatsCards from "@/components/cards/StatsCards";
import SessionsChart from "@/components/charts/SessionsChart";
import PromoCard from "@/components/cards/PromoCard";
import ConversionGauge from "@/components/charts/ConversionGauge";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, Download, LayoutGrid } from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-card text-primary shadow-sm">
              <LayoutGrid className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-text-primary">
                Dashboard
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="outline" size="sm" className="rounded-full">
              <Calendar className="h-4 w-4" />
              This Month
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="success" size="sm" className="rounded-full">
              <Download className="h-4 w-4" />
              Download Report
            </Button>
          </div>
        </div>

        <StatsCards />

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.35fr_0.85fr]">
          <SessionsChart />
          <div className="grid grid-cols-1 gap-6">
            <PromoCard />
            <ConversionGauge />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
