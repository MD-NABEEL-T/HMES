import { Plus, Edit2, LogOut } from "lucide-react";

const admissions = [
  { id: "IP-3021", patient: "Sanjay Kumar", age: 67, ward: "Cardiac ICU", room: "C-04", bed: "B-2", doctor: "Dr. Suresh Kumar", admitted: "10 Jun 2026", status: "Admitted", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&auto=format" },
  { id: "IP-3022", patient: "Lakshmi Devi", age: 54, ward: "General Ward", room: "G-12", bed: "B-1", doctor: "Dr. Kavitha Rao", admitted: "12 Jun 2026", status: "Admitted", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&auto=format" },
  { id: "IP-3023", patient: "Mohan Das", age: 41, ward: "Surgical Ward", room: "S-06", bed: "B-3", doctor: "Dr. Arun Sharma", admitted: "14 Jun 2026", status: "Post-Op", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&auto=format" },
  { id: "IP-3024", patient: "Rekha Nair", age: 32, ward: "Maternity", room: "M-03", bed: "B-1", doctor: "Dr. Preethi Nair", admitted: "15 Jun 2026", status: "Admitted", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&auto=format" },
  { id: "IP-3025", patient: "Thomas Varghese", age: 72, ward: "General Ward", room: "G-08", bed: "B-2", doctor: "Dr. Kavitha Rao", admitted: "16 Jun 2026", status: "Under Observation", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&auto=format" },
];

const statusStyle: Record<string, string> = {
  "Admitted": "bg-blue-100 text-blue-700",
  "Post-Op": "bg-violet-100 text-violet-700",
  "Under Observation": "bg-amber-100 text-amber-700",
  "Discharged": "bg-emerald-100 text-emerald-700",
};

const ipTabs = ["Vitals", "Procedures", "Treatments", "Lab Investigations", "Diet Plans", "Discharge"];

export function IPManagement() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-slate-900">IP Management</h1>
          <p className="text-slate-500 text-sm mt-0.5">{admissions.length} active inpatients</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">
          <Plus className="w-4 h-4" /> New Admission
        </button>
      </div>

      {/* Bed stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[["Total Beds", "120", "bg-slate-50 text-slate-700"], ["Occupied", "87", "bg-blue-50 text-blue-800"], ["Available", "33", "bg-emerald-50 text-emerald-700"], ["ICU Beds", "8/12", "bg-red-50 text-red-700"]].map(([label, value, color]) => (
          <div key={label} className={`rounded-xl p-4 ${color}`}>
            <div className="font-mono text-2xl font-medium">{value}</div>
            <div className="text-sm mt-0.5 opacity-70">{label}</div>
          </div>
        ))}
      </div>

      {/* Admissions table */}
      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                {["Patient", "Admission #", "Ward / Room / Bed", "Doctor", "Admitted On", "Status", "Actions"].map(h => (
                  <th key={h} className="text-left text-xs font-medium text-slate-400 px-5 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {admissions.map((a, i) => (
                <tr key={a.id} className={`border-b border-slate-50 hover:bg-slate-50 transition-colors ${i === admissions.length - 1 ? "border-b-0" : ""}`}>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <img src={a.avatar} alt={a.patient} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <div className="text-sm font-medium text-slate-800">{a.patient}</div>
                        <div className="text-xs text-slate-400">{a.age}y</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 font-mono text-xs text-blue-700">{a.id}</td>
                  <td className="px-5 py-3">
                    <div className="text-sm text-slate-700">{a.ward}</div>
                    <div className="text-xs text-slate-400">{a.room} · {a.bed}</div>
                  </td>
                  <td className="px-5 py-3 text-sm text-slate-600">{a.doctor}</td>
                  <td className="px-5 py-3 text-sm text-slate-500">{a.admitted}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusStyle[a.status]}`}>{a.status}</span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-1.5">
                      <button className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded transition" title="Edit"><Edit2 className="w-4 h-4" /></button>
                      <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition" title="Discharge"><LogOut className="w-4 h-4" /></button>
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
