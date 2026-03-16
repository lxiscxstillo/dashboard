import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  LayoutGrid,
  Link,
  LogOut,
  Megaphone,
  MessageCircle,
  MessageSquare,
  Package,
  ShoppingCart,
  Zap
} from "lucide-react";

type SidebarItem = {
  label: string;
  icon: typeof LayoutGrid;
  active?: boolean;
  badge?: string;
};

type SidebarProps = {
  variant?: "full" | "compact";
  className?: string;
};

const menuItems: SidebarItem[] = [
  { label: "Dashboard", icon: LayoutGrid, active: true },
  { label: "Orders", icon: ShoppingCart },
  { label: "Products", icon: Package },
  { label: "Analytics", icon: BarChart3 },
  { label: "Marketing", icon: Megaphone },
  { label: "Messages", icon: MessageSquare, badge: "25" }
];

const integrationItems: SidebarItem[] = [
  { label: "Jira", icon: Link },
  { label: "Slack", icon: Zap },
  { label: "Intercom", icon: MessageCircle }
];

export default function Sidebar({ variant = "full", className }: SidebarProps) {
  const compact = variant === "compact";

  return (
    <aside
      className={cn(
        "flex h-full flex-col bg-card",
        compact ? "w-[88px] px-3" : "w-[260px] px-4",
        className
      )}
    >
      <div className={cn("flex items-center gap-3", compact ? "px-1" : "px-2")}>
        <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-base font-semibold text-white shadow-soft">
          R
        </div>
        {!compact && (
          <span className="mt-6 text-xl font-semibold text-text-primary">
            flex
          </span>
        )}
      </div>

      <div className={cn("mt-8", compact ? "px-1" : "px-2")}>
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-wide text-text-secondary/70",
            compact && "text-center"
          )}
        >
          Menu
        </p>
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={cn(
                  "flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-medium transition",
                  item.active
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-sm"
                    : "text-text-secondary hover:bg-muted hover:text-text-primary",
                  compact && "justify-center px-0"
                )}
              >
                <div className={cn("flex items-center gap-3", compact && "gap-0")}>
                  <Icon className="h-4 w-4" />
                  {!compact && <span>{item.label}</span>}
                </div>
                {!compact && item.badge && (
                  <Badge variant="success" className="px-2">
                    {item.badge}
                  </Badge>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className={cn("mt-8", compact ? "px-1" : "px-2")}>
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-wide text-text-secondary/70",
            compact && "text-center"
          )}
        >
          Integrations
        </p>
        <div className="space-y-2">
          {integrationItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium text-text-secondary transition hover:bg-muted hover:text-text-primary",
                  compact && "justify-center px-0"
                )}
              >
                <Icon className="h-4 w-4" />
                {!compact && <span>{item.label}</span>}
              </div>
            );
          })}
        </div>
      </div>

      <div className={cn("mt-auto pb-8", compact ? "px-1" : "px-2")}>
        <div
          className={cn(
            "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold text-text-secondary transition hover:bg-muted hover:text-text-primary",
            compact && "justify-center px-0"
          )}
        >
          <LogOut className="h-4 w-4" />
          {!compact && <span>Logout</span>}
        </div>
      </div>
    </aside>
  );
}
