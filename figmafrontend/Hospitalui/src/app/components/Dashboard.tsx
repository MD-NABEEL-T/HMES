import { Users, Calendar, Activity, Bed, TrendingUp, TrendingDown, DollarSign, UserCheck, AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const revenueData = [
  { day: "Mon", revenue: 42000, expenses: 18000 },
  { day: "Tue", revenue: 38000, expenses: 15000 },
  { day: "Wed", revenue: 51000, expenses: 20000 },
  { day: "Thu", revenue: 47000, expenses: 17000 },
  { day: "Fri", revenue: 62000, expenses: 22000 },
  { day: "Sat", revenue: 55000, expenses: 19000 },
  { day: "Sun", revenue: 33000, expenses: 12000 },
];

const opData = [
  { time: "8am", count: 12 },
  { time: "9am", count: 28 },
  { time: "10am", count: 45 },
  { time: "11am", count: 38 },
  { time: "12pm", count: 22 },
  { time: "1pm", count: 15 },
  { time: "2pm", count: 31 },
  { time: "3pm", count: 40 },
  { time: "4pm", count: 27 },
];

const recentPatients = [
  { id: "P-10421", name: "Ananya Krishnan", age: 34, dept: "Cardiology", status: "Checked In", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&auto=format" },
  { id: "P-10422", name: "Rajan Mehta", age: 58, dept: "Orthopedics", status: "Waiting", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&auto=format" },
  { id: "P-10423", name: "Priya Sundaram", age: 27, dept: "Gynecology", status: "In Consultation", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&auto=format" },
  { id: "P-10424", name: "Vikram Patel", age: 45, dept: "Neurology", status: "Completed", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&auto=format" },
  { id: "P-10425", name: "Meera Joshi", age: 62, dept: "Internal Medicine", status: "Waiting", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&auto=format" },
];

const doctorAvailability = [
  { name: "Dr. Suresh Kumar", dept: "Cardiology", status: "Available", patients: 8, avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=64&h=64&fit=crop&auto=format" },
  { name: "Dr. Preethi Nair", dept: "Gynecology", status: "In Consultation", patients: 12, avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=64&h=64&fit=crop&auto=format" },
  { name: "Dr. Arun Sharma", dept: "Orthopedics", status: "On Leave", patients: 0, avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=64&h=64&fit=crop&auto=format" },
  { name: "Dr. Kavitha Rao", dept: "Neurology", status: "Available", patients: 6, avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=64&h=64&fit=crop&auto=format" },
];

const statusColor: Record<string, string> = {
  "Available": "bg-emerald-100 text-emerald-700",
  "In Consultation": "bg-blue-100 text-blue-700",
  "On Leave": "bg-slate-100 text-slate-500",
  "Waiting": "bg-amber-100 text-amber-700",
  "Checked In": "bg-blue-100 text-blue-700",
  "Completed": "bg-emerald-100 text-emerald-700",
};

const statCards = [
  { label: "Patients Today", value: "143", delta: "+12%", up: true, icon: <Users className="w-5 h-5" />, color: "text-blue-700", bg: "bg-blue-50" },
  { label: "Appointments", value: "87", delta: "+5%", up: true, icon: <Calendar className="w-5 h-5" />, color: "text-violet-700", bg: "bg-violet-50" },
  { label: "OP Count", value: "64", delta: "-3%", up: false, icon: <Activity className="w-5 h-5" />, color: "text-cyan-700", bg: "bg-cyan-50" },
  { label: "IP Count", value: "29", delta: "+2", up: true, icon: <Bed className="w-5 h-5" />, color: "text-indigo-700", bg: "bg-indigo-50" },
  { label: "Revenue Today", value: "₹ 62,400", delta: "+18%", up: true, icon: <DollarSign className="w-5 h-5" />, color: "text-emerald-700", bg: "bg-emerald-50" },
  { label: "Expenses Today", value: "₹ 21,800", delta: "-4%", up: false, icon: <TrendingDown className="w-5 h-5" />, color: "text-rose-700", bg: "bg-rose-50" },
  { label: "Net Profit", value: "₹ 40,600", delta: "+22%", up: true, icon: <TrendingUp className="w-5 h-5" />, color: "text-teal-700", bg: "bg-teal-50" },
  { label: "Doctors On Duty", value: "11/14", delta: "3 on leave", up: null, icon: <UserCheck className="w-5 h-5" />, color: "text-amber-700", bg: "bg-amber-50" },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-slate-900">Dashboard</h1>
        <p className="text-slate-500 text-sm mt-0.5">Monday, 16 June 2026 — City General Hospital</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {statCards.map(card => (
          <div key={card.label} className="bg-white rounded-xl border border-slate-100 p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className={`w-9 h-9 ${card.bg} ${card.color} rounded-lg flex items-center justify-center`}>
                {card.icon}
              </div>
              <span className={`text-xs font-mono px-1.5 py-0.5 rounded ${card.up === true ? "bg-emerald-50 text-emerald-600" : card.up === false ? "bg-red-50 text-red-500" : "bg-slate-100 text-slate-500"}`}>
                {card.delta}
              </span>
            </div>
            <div className="font-mono text-xl font-medium text-slate-900">{card.value}</div>
            <div className="text-slate-500 text-xs mt-0.5">{card.label}</div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Revenue chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-slate-900">Weekly Revenue vs Expenses</h3>
              <p className="text-slate-400 text-xs mt-0.5">Last 7 days (₹)</p>
            </div>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-md font-mono">This Week</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1e40af" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#1e40af" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#dc2626" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#dc2626" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={v => `₹${(v/1000).toFixed(0)}k`} />
              <Tooltip formatter={(v: number) => `₹${v.toLocaleString()}`} contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
              <Area type="monotone" dataKey="revenue" stroke="#1e40af" strokeWidth={2} fill="url(#revGrad)" name="Revenue" />
              <Area type="monotone" dataKey="expenses" stroke="#dc2626" strokeWidth={2} fill="url(#expGrad)" name="Expenses" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* OP hourly */}
        <div className="bg-white rounded-xl border border-slate-100 p-5">
          <div className="mb-4">
            <h3 className="text-slate-900">OP Patient Flow</h3>
            <p className="text-slate-400 text-xs mt-0.5">Today by hour</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={opData} barSize={14}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="time" tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
              <Bar dataKey="count" fill="#0891b2" radius={[4, 4, 0, 0]} name="Patients" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent patients */}
        <div className="bg-white rounded-xl border border-slate-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-900">Recent Patients</h3>
            <button className="text-xs text-blue-700 hover:text-blue-900 transition">View all →</button>
          </div>
          <div className="space-y-3">
            {recentPatients.map(p => (
              <div key={p.id} className="flex items-center gap-3">
                <img src={p.avatar} alt={p.name} className="w-8 h-8 rounded-full object-cover" />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-slate-800 truncate">{p.name}</div>
                  <div className="text-slate-400 text-xs">{p.dept} · {p.age}y</div>
                </div>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${statusColor[p.status] ?? "bg-slate-100 text-slate-600"}`}>
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor availability */}
        <div className="bg-white rounded-xl border border-slate-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-900">Doctor Availability</h3>
            <button className="text-xs text-blue-700 hover:text-blue-900 transition">View all →</button>
          </div>
          <div className="space-y-3">
            {doctorAvailability.map(d => (
              <div key={d.name} className="flex items-center gap-3">
                <img src={d.avatar} alt={d.name} className="w-8 h-8 rounded-full object-cover" />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-slate-800 truncate">{d.name}</div>
                  <div className="text-slate-400 text-xs">{d.dept}</div>
                </div>
                <div className="text-right shrink-0">
                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${statusColor[d.status]}`}>
                    {d.status}
                  </span>
                  {d.patients > 0 && <div className="text-slate-400 text-[10px] mt-0.5 font-mono">{d.patients} today</div>}
                </div>
              </div>
            ))}
          </div>

          {/* Alerts */}
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
            <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>3 prescriptions pending pharmacy fulfilment</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Lab report uploaded for patient P-10419</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-blue-600 bg-blue-50 px-3 py-2 rounded-lg">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>2 follow-ups due today — Call Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
