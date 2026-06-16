import { Plus, Edit2, ClipboardList, Eye } from "lucide-react";

const staff = [
  { id: "S-101", name: "Kavya Mohan", role: "Head Nurse", dept: "ICU", phone: "+91 90001 21001", status: "Active", attendance: "98%", avatar: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=80&h=80&fit=crop&auto=format" },
  { id: "S-102", name: "Sunil Thomas", role: "Lab Technician", dept: "Laboratory", phone: "+91 90001 21002", status: "Active", attendance: "95%", avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&h=80&fit=crop&auto=format" },
  { id: "S-103", name: "Nisha Pillai", role: "Pharmacist", dept: "Pharmacy", phone: "+91 90001 21003", status: "Active", attendance: "100%", avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&auto=format" },
  { id: "S-104", name: "George Mathew", role: "Receptionist", dept: "OPD", phone: "+91 90001 21004", status: "Active", attendance: "92%", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format" },
  { id: "S-105", name: "Anu Varghese", role: "Ward Nurse", dept: "General Ward", phone: "+91 90001 21005", status: "On Leave", attendance: "88%", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&auto=format" },
  { id: "S-106", name: "Biju Jose", role: "Accountant", dept: "Finance", phone: "+91 90001 21006", status: "Active", attendance: "96%", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format" },
];

export function Staff() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-slate-900">Staff</h1>
          <p className="text-slate-500 text-sm mt-0.5">{staff.length} staff members</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">
          <Plus className="w-4 h-4" /> Add Employee
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                {["Employee", "Role", "Department", "Phone", "Attendance", "Status", "Actions"].map(h => (
                  <th key={h} className="text-left text-xs font-medium text-slate-400 px-5 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {staff.map((s, i) => (
                <tr key={s.id} className={`border-b border-slate-50 hover:bg-slate-50 transition-colors ${i === staff.length - 1 ? "border-b-0" : ""}`}>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <img src={s.avatar} alt={s.name} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <div className="text-sm font-medium text-slate-800">{s.name}</div>
                        <div className="text-xs text-slate-400 font-mono">{s.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-slate-700">{s.role}</td>
                  <td className="px-5 py-3 text-sm text-slate-600">{s.dept}</td>
                  <td className="px-5 py-3 text-sm text-slate-600">{s.phone}</td>
                  <td className="px-5 py-3 font-mono text-sm text-slate-700">{s.attendance}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${s.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{s.status}</span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-1.5">
                      <button className="p-1.5 text-slate-400 hover:text-blue-700 hover:bg-blue-50 rounded transition"><Eye className="w-4 h-4" /></button>
                      <button className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded transition"><Edit2 className="w-4 h-4" /></button>
                      <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition"><ClipboardList className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
