import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Home, LogOut } from "lucide-react";

type IconType = (props: { className?: string }) => JSX.Element;

type SidebarItem = {
  label: string;
  icon: IconType;
  active?: boolean;
  badge?: string;
  hasSubmenu?: boolean;
};

type SidebarProps = {
  variant?: "full" | "compact";
  className?: string;
};

const OrdersIcon: IconType = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M7 7h10l-.9 6.2a2 2 0 0 1-2 1.8H9.9a2 2 0 0 1-2-1.8L7 7z" fill="currentColor" />
    <path d="M9 7a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const ProductsIcon: IconType = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M7 8.2l5-2.8 5 2.8v6.6l-5 2.8-5-2.8V8.2z" fill="currentColor" />
    <path d="M7 8.2l5 2.8 5-2.8" stroke="#ffffff" strokeWidth="1.6" strokeLinejoin="round" opacity="0.6" />
  </svg>
);

const AnalyticsIcon: IconType = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="5" y="11" width="3" height="7" rx="1" fill="currentColor" />
    <rect x="10.5" y="7" width="3" height="11" rx="1" fill="currentColor" />
    <rect x="16" y="4" width="3" height="14" rx="1" fill="currentColor" />
  </svg>
);

const MarketingIcon: IconType = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M6 10.5l9-4v11l-9-4V10.5z" fill="currentColor" />
    <path d="M5.5 10.5h2.5v3H5.5z" fill="currentColor" />
    <path d="M17 10.5a2.5 2.5 0 0 1 0 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const MessagesIcon: IconType = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M6 6h12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H10l-4 3v-3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z" fill="currentColor" />
    <circle cx="10" cy="12" r="1" fill="#ffffff" />
    <circle cx="12.5" cy="12" r="1" fill="#ffffff" />
    <circle cx="15" cy="12" r="1" fill="#ffffff" />
  </svg>
);

const JiraIcon: IconType = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="6" y="6" width="12" height="12" rx="2" fill="#2684FF" transform="rotate(45 12 12)" />
    <rect x="8.2" y="8.2" width="7.6" height="7.6" rx="1.6" fill="#ffffff" transform="rotate(45 12 12)" />
  </svg>
);

const SlackIcon: IconType = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="3" y="10" width="4" height="7" rx="2" fill="#E01E5A" />
    <rect x="5" y="3" width="7" height="4" rx="2" fill="#36C5F0" />
    <rect x="10" y="3" width="4" height="7" rx="2" fill="#2EB67D" />
    <rect x="17" y="7" width="4" height="7" rx="2" fill="#ECB22E" />
    <rect x="12" y="17" width="7" height="4" rx="2" fill="#E01E5A" />
    <rect x="10" y="14" width="4" height="7" rx="2" fill="#36C5F0" />
    <rect x="3" y="12" width="7" height="4" rx="2" fill="#2EB67D" />
    <rect x="7" y="10" width="7" height="4" rx="2" fill="#ECB22E" />
  </svg>
);

const IntercomIcon: IconType = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="4" fill="#2D9CFF" />
    <rect x="7" y="7" width="2" height="7" rx="1" fill="#ffffff" />
    <rect x="11" y="6" width="2" height="8" rx="1" fill="#ffffff" />
    <rect x="15" y="7" width="2" height="7" rx="1" fill="#ffffff" />
    <rect x="8" y="16" width="8" height="2" rx="1" fill="#ffffff" />
  </svg>
);

const menuItems: SidebarItem[] = [
  { label: "Dashboard", icon: Home, active: true },
  { label: "Orders", icon: OrdersIcon, hasSubmenu: true },
  { label: "Products", icon: ProductsIcon, hasSubmenu: true },
  { label: "Analytics", icon: AnalyticsIcon },
  { label: "Marketing", icon: MarketingIcon, hasSubmenu: true },
  { label: "Messages", icon: MessagesIcon, badge: "25" }
];

const integrationItems: SidebarItem[] = [
  { label: "Jira", icon: JiraIcon },
  { label: "Slack", icon: SlackIcon },
  { label: "Intercom", icon: IntercomIcon }
];

export default function Sidebar({ variant = "full", className }: SidebarProps) {
  const compact = variant === "compact";

  return (
    <aside
      className={cn(
        "flex h-screen flex-col bg-white pb-6 overflow-y-auto [&::-webkit-scrollbar]:hidden",
        compact ? "w-[88px] px-3" : "w-[260px] px-5",
        className
      )}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          compact ? "px-1 pt-6" : "px-1 pt-8"
        )}
      >
        <div className="flex h-10 w-10 items-center justify-center bg-[#F7B731] text-base font-semibold text-white shadow-soft [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0%_50%)]">
          R
        </div>
        {!compact && (
          <span className="text-xl font-semibold text-text-primary">flex</span>
        )}
      </div>

      <div className={cn("mt-8", compact ? "px-1" : "px-1")}>
        <p
          className={cn(
            "mb-4 text-[11px] font-semibold tracking-wide text-[#9CA3AF]",
            compact && "text-center"
          )}
        >
          Menu
        </p>
        <div className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={cn(
                  "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition",
                  item.active
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-sm"
                    : "text-text-secondary hover:bg-muted hover:text-text-primary",
                  compact && "justify-center px-0"
                )}
              >
                <div className={cn("flex items-center gap-3", compact && "gap-0")}>
                  {item.active ? (
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4B5CF2]">
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                  ) : (
                    <Icon className="h-5 w-5 text-[#111827]" />
                  )}
                  {!compact && <span>{item.label}</span>}
                </div>
                {!compact && item.badge && (
                  <Badge variant="success" className="ml-auto px-2">
                    {item.badge}
                  </Badge>
                )}
                {!compact && item.hasSubmenu && (
                  <ChevronDown className="ml-2 h-5 w-5 text-text-secondary" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className={cn("mt-10", compact ? "px-1" : "px-1")}>
        <p
          className={cn(
            "mb-4 text-[11px] font-semibold uppercase tracking-wide text-[#9CA3AF]",
            compact && "text-center"
          )}
        >
          Integrations
        </p>
        <div className="space-y-3">
          {integrationItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-4 py-2.5 text-sm font-medium text-text-secondary transition hover:bg-muted hover:text-text-primary",
                  compact && "justify-center px-0"
                )}
              >
                <Icon className="h-5 w-5" />
                {!compact && <span>{item.label}</span>}
              </div>
            );
          })}
        </div>
      </div>

      <div className={cn("mt-auto pb-2", compact ? "px-1" : "px-1")}>
        <div
          className={cn(
            "flex items-center gap-3 rounded-2xl px-4 py-2.5 text-sm font-semibold text-text-secondary transition hover:bg-muted hover:text-text-primary",
            compact && "justify-center px-0"
          )}
        >
          <LogOut className="h-5 w-5" />
          {!compact && <span>Logout</span>}
        </div>
      </div>
    </aside>
  );
}
