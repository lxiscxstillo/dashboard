import { Input } from "@/components/ui/input";
import { Bell, Menu, Search } from "lucide-react";

type HeaderProps = {
  menuControlId?: string;
};

export default function Header({
  menuControlId = "dashboard-mobile-toggle"
}: HeaderProps) {
  return (
    <header className="flex flex-col gap-4 bg-white px-6 pb-4 pt-6 md:px-8">
      <div className="flex flex-wrap items-center gap-4">
        <label
          htmlFor={menuControlId}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white border border-border/70 text-text-secondary shadow-sm transition hover:text-text-primary"
        >
          <Menu className="h-6 w-6" />
        </label>

        <div className="relative flex-1 min-w-[220px]">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary" />
          <Input
            placeholder="Search"
            className="pl-11"
            aria-label="Search"
          />
        </div>

        <div className="ml-auto flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-border/70 text-text-secondary shadow-sm">
            <Bell className="h-6 w-6" />
          </div>

          <div className="hidden sm:flex items-center gap-3 rounded-full bg-card px-4 py-2 shadow-sm">
            <div>
              <p className="text-xs font-medium text-text-secondary">
                Your Balance
              </p>
              <p className="text-sm font-semibold text-primary">$5.456</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-card px-3 py-2 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-xs font-semibold text-white">
              L
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-text-primary">Hi, Lay</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
