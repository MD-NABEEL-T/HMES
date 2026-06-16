import { Download, FileText } from "lucide-react";

const reportTypes = [
  { id: "patient", label: "Patient Reports", desc: "Registration, demographics, visit counts", icon: "👥" },
  { id: "doctor", label: "Doctor Reports", desc: "Consultation stats, revenue by doctor", icon: "🩺" },
  { id: "revenue", label: "Revenue Reports", desc: "Daily, monthly, yearly income", icon: "💰" },
  { id: "expense", label: "Expense Reports", desc: "Category-wise expense breakdown", icon: "📊" },
  { id: "inventory", label: "Inventory Reports", desc: "Stock levels, purchases, usage", icon: "💊" },
  { id: "lab", label: "Lab Reports", desc: "Test counts, pending, completed", icon: "🧪" },
  { id: "followup", label: "Follow-up Reports", desc: "Completion rates, missed follow-ups", icon: "📞" },
];

export function Reports() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-slate-900">Reports</h1>
        <p className="text-slate-500 text-sm mt-0.5">Generate and export hospital reports</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 p-5">
        <h3 className="text-slate-900 mb-4">Filter & Generate</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1.5">Report Type</label>
            <select className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none">
              {reportTypes.map(r => <option key={r.id}>{r.label}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1.5">From Date</label>
            <input type="date" defaultValue="2026-06-01" className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1.5">To Date</label>
            <input type="date" defaultValue="2026-06-16" className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex items-end gap-2">
            <button className="flex-1 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">Generate</button>
            <button className="p-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition" title="Export PDF"><Download className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reportTypes.map(r => (
          <div key={r.id} className="bg-white rounded-xl border border-slate-100 p-5 hover:shadow-sm transition-shadow cursor-pointer group">
            <div className="text-2xl mb-3">{r.icon}</div>
            <h4 className="text-slate-900 group-hover:text-blue-800 transition">{r.label}</h4>
            <p className="text-slate-400 text-xs mt-1">{r.desc}</p>
            <div className="flex gap-2 mt-4">
              <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 text-slate-600 text-xs rounded-lg hover:bg-slate-50 transition">
                <FileText className="w-3.5 h-3.5" /> View
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 text-slate-600 text-xs rounded-lg hover:bg-slate-50 transition">
                <Download className="w-3.5 h-3.5" /> PDF
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
