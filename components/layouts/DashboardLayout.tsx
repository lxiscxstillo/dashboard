import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <input
        id="dashboard-mobile-toggle"
        type="checkbox"
        className="peer hidden"
        aria-hidden="true"
      />

      <div className="md:grid md:grid-cols-[88px_1fr] lg:grid-cols-[260px_1fr]">
        <div className="hidden md:block lg:hidden">
          <Sidebar variant="compact" className="h-full border-r border-border/60" />
        </div>
        <div className="hidden lg:block">
          <div className="sticky top-0 h-screen">
            <Sidebar className="h-full border-r border-border/60" />
          </div>
        </div>

        <div className="md:col-start-2">
          <Header />
          <main className="px-6 pb-10 md:px-8">{children}</main>
        </div>
      </div>

      <label
        htmlFor="dashboard-mobile-toggle"
        className="fixed inset-0 z-40 bg-black/40 opacity-0 pointer-events-none transition peer-checked:opacity-100 peer-checked:pointer-events-auto md:hidden"
      />
      <aside className="fixed inset-y-0 left-0 z-50 w-[260px] -translate-x-full bg-card shadow-2xl transition-transform duration-300 peer-checked:translate-x-0 md:hidden">
        <Sidebar className="h-full" />
      </aside>
    </div>
  );
}
