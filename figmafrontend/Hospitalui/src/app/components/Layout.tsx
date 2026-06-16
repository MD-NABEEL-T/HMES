import { useState } from "react";
import {
  Activity, LayoutDashboard, Users, Calendar, Stethoscope, UserCog,
  Clipboard, Bed, Pill, FlaskConical, Truck, DollarSign, Phone,
  BarChart3, Settings, LogOut, Bell, Search, ChevronRight, Menu, X
} from "lucide-react";

export type ModuleName =
  | "dashboard" | "patients" | "appointments" | "doctors" | "staff"
  | "op" | "ip" | "prescriptions" | "pharmacy" | "laboratory"
  | "vehicles" | "finance" | "followups" | "reports" | "settings";

interface NavItem {
  id: ModuleName;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
  { id: "patients", label: "Patients", icon: <Users className="w-4 h-4" /> },
  { id: "appointments", label: "Appointments", icon: <Calendar className="w-4 h-4" /> },
  { id: "doctors", label: "Doctors", icon: <Stethoscope className="w-4 h-4" /> },
  { id: "staff", label: "Staff", icon: <UserCog className="w-4 h-4" /> },
  { id: "op", label: "OP", icon: <Clipboard className="w-4 h-4" /> },
  { id: "ip", label: "IP", icon: <Bed className="w-4 h-4" /> },
  { id: "prescriptions", label: "Prescriptions", icon: <Pill className="w-4 h-4" /> },
  { id: "pharmacy", label: "Pharmacy", icon: <Pill className="w-4 h-4" /> },
  { id: "laboratory", label: "Laboratory", icon: <FlaskConical className="w-4 h-4" /> },
  { id: "vehicles", label: "Vehicles", icon: <Truck className="w-4 h-4" /> },
  { id: "finance", label: "Finance", icon: <DollarSign className="w-4 h-4" /> },
  { id: "followups", label: "Follow-ups", icon: <Phone className="w-4 h-4" /> },
  { id: "reports", label: "Reports", icon: <BarChart3 className="w-4 h-4" /> },
  { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
];

interface LayoutProps {
  active: ModuleName;
  onNavigate: (mod: ModuleName) => void;
  onLogout: () => void;
  children: React.ReactNode;
}

export function Layout({ active, onNavigate, onLogout, children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeLabel = navItems.find(n => n.id === active)?.label ?? "Dashboard";

  const Sidebar = ({ mobile = false }) => (
    <div className={`${mobile ? "flex" : "hidden lg:flex"} flex-col h-full`} style={{ background: "var(--sidebar)" }}>
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 py-5 border-b" style={{ borderColor: "var(--sidebar-border)" }}>
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
          <Activity className="w-4 h-4 text-white" />
        </div>
        <div className="min-w-0">
          <div className="text-white text-sm font-semibold leading-tight">MediCore HMS</div>
          <div className="text-slate-400 text-[10px] leading-tight mt-0.5">Hospital Management</div>
        </div>
        {mobile && (
          <button onClick={() => setSidebarOpen(false)} className="ml-auto text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5 scrollbar-hide">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => { onNavigate(item.id); setSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
              active === item.id
                ? "bg-blue-700 text-white"
                : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
            {active === item.id && <ChevronRight className="w-3 h-3 ml-auto opacity-60" />}
          </button>
        ))}
      </nav>

      {/* User */}
      <div className="px-3 py-4 border-t" style={{ borderColor: "var(--sidebar-border)" }}>
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=64&h=64&fit=crop&auto=format"
            alt="Admin user"
            className="w-7 h-7 rounded-full object-cover"
          />
          <div className="min-w-0 flex-1">
            <div className="text-white text-xs font-medium truncate">Dr. Admin</div>
            <div className="text-slate-400 text-[10px] truncate">Super Admin</div>
          </div>
          <button onClick={onLogout} className="text-slate-400 hover:text-red-400 transition" title="Logout">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-[#f0f4f8]">
      {/* Sidebar desktop */}
      <div className="hidden lg:flex w-56 shrink-0 flex-col" style={{ background: "var(--sidebar)" }}>
        <Sidebar />
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-56" style={{ background: "var(--sidebar)" }}>
            <Sidebar mobile />
          </div>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-14 bg-white border-b border-slate-200 flex items-center px-4 gap-4 shrink-0">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-slate-500 hover:text-slate-900 transition">
            <Menu className="w-5 h-5" />
          </button>
          <div>
            <span className="text-slate-400 text-sm">MediCore HMS</span>
            <span className="text-slate-300 mx-2">/</span>
            <span className="text-slate-900 text-sm font-medium">{activeLabel}</span>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                placeholder="Quick search…"
                className="pl-9 pr-4 py-1.5 text-sm bg-slate-100 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 w-52 text-slate-600 placeholder-slate-400"
              />
            </div>
            <button className="relative text-slate-500 hover:text-slate-900 transition">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center font-mono">3</span>
            </button>
            <img
              src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=64&h=64&fit=crop&auto=format"
              alt="User avatar"
              className="w-8 h-8 rounded-full object-cover border-2 border-blue-100"
            />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
