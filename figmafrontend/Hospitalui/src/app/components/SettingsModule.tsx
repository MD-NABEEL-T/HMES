import { useState } from "react";
import { Plus, Edit2, ToggleLeft, Building2, Layers, Users } from "lucide-react";

const branches = [
  { id: "B-01", name: "City General Hospital - Main", city: "Kochi", type: "Main", status: "Active" },
  { id: "B-02", name: "City General - Trivandrum", city: "Trivandrum", type: "Branch", status: "Active" },
  { id: "B-03", name: "City General - Calicut", city: "Calicut", type: "Branch", status: "Inactive" },
];

const departments = [
  { id: "DEP-01", name: "Cardiology", head: "Dr. Suresh Kumar", staff: 12 },
  { id: "DEP-02", name: "Orthopedics", head: "Dr. Arun Sharma", staff: 8 },
  { id: "DEP-03", name: "Gynecology", head: "Dr. Preethi Nair", staff: 10 },
  { id: "DEP-04", name: "Neurology", head: "Dr. Kavitha Rao", staff: 7 },
  { id: "DEP-05", name: "Laboratory", head: "Sunil Thomas", staff: 5 },
];

const users = [
  { id: "USR-01", name: "Dr. Admin", email: "admin@hospital.com", role: "Super Admin", status: "Active", avatar: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=64&h=64&fit=crop&auto=format" },
  { id: "USR-02", name: "George Mathew", email: "receptionist@hospital.com", role: "Receptionist", status: "Active", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&auto=format" },
  { id: "USR-03", name: "Nisha Pillai", email: "pharmacy@hospital.com", role: "Pharmacist", status: "Active", avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=64&h=64&fit=crop&auto=format" },
];

type Tab = "branches" | "departments" | "users";

export function SettingsModule() {
  const [tab, setTab] = useState<Tab>("branches");

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-slate-900">Settings</h1>
        <p className="text-slate-500 text-sm mt-0.5">Manage hospital configuration</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
        <div className="flex border-b border-slate-100">
          {([["branches", "Branch Management", <Building2 className="w-4 h-4" />], ["departments", "Departments", <Layers className="w-4 h-4" />], ["users", "User Management", <Users className="w-4 h-4" />]] as [Tab, string, React.ReactNode][]).map(([id, label, icon]) => (
            <button key={id} onClick={() => setTab(id)} className={`flex items-center gap-2 px-5 py-3 text-sm transition ${tab === id ? "border-b-2 border-blue-700 text-blue-700 font-medium" : "text-slate-500 hover:text-slate-800"}`}>
              {icon} {label}
            </button>
          ))}
        </div>

        <div className="p-5">
          {tab === "branches" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-slate-700">Hospital Branches</h3>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-800 text-white text-xs rounded-lg hover:bg-blue-900 transition"><Plus className="w-3.5 h-3.5" /> Add Branch</button>
              </div>
              <div className="space-y-2">
                {branches.map(b => (
                  <div key={b.id} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center"><Building2 className="w-5 h-5 text-blue-700" /></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-800">{b.name}</div>
                      <div className="text-xs text-slate-400">{b.city} · {b.type}</div>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${b.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>{b.status}</span>
                    <div className="flex gap-1.5">
                      <button className="p-1.5 text-slate-400 hover:text-blue-700 hover:bg-blue-50 rounded transition"><Edit2 className="w-4 h-4" /></button>
                      <button className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded transition"><ToggleLeft className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "departments" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-slate-700">Departments</h3>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-800 text-white text-xs rounded-lg hover:bg-blue-900 transition"><Plus className="w-3.5 h-3.5" /> Add Department</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {departments.map(d => (
                  <div key={d.id} className="p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm font-medium text-slate-800">{d.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">Head: {d.head}</div>
                        <div className="text-xs text-slate-400 font-mono mt-0.5">{d.staff} staff</div>
                      </div>
                      <button className="p-1.5 text-slate-400 hover:text-blue-700 hover:bg-blue-50 rounded transition"><Edit2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "users" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-slate-700">User Accounts</h3>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-800 text-white text-xs rounded-lg hover:bg-blue-900 transition"><Plus className="w-3.5 h-3.5" /> Create User</button>
              </div>
              <div className="space-y-2">
                {users.map(u => (
                  <div key={u.id} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition">
                    <img src={u.avatar} alt={u.name} className="w-9 h-9 rounded-full object-cover" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-slate-800">{u.name}</div>
                      <div className="text-xs text-slate-400">{u.email}</div>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">{u.role}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${u.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>{u.status}</span>
                    <div className="flex gap-1.5">
                      <button className="text-xs px-2 py-1 border border-slate-200 text-slate-500 rounded hover:bg-slate-100 transition">Reset Pwd</button>
                      <button className="text-xs px-2 py-1 border border-red-100 text-red-500 rounded hover:bg-red-50 transition">Disable</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
