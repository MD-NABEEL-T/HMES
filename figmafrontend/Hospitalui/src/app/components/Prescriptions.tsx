import { Plus, Printer, Send } from "lucide-react";
import { useState } from "react";

const medicines = [
  { name: "Amlodipine 5mg", dosage: "1 tablet", frequency: "Once daily", duration: "30 days", route: "Oral" },
  { name: "Aspirin 75mg", dosage: "1 tablet", frequency: "Once daily", duration: "30 days", route: "Oral" },
  { name: "Atorvastatin 20mg", dosage: "1 tablet", frequency: "Night", duration: "30 days", route: "Oral" },
];

const prescriptions = [
  { id: "RX-8821", patient: "Ananya Krishnan", doctor: "Dr. Suresh Kumar", date: "16 Jun 2026", drugs: 3, status: "Active", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&auto=format" },
  { id: "RX-8820", patient: "Rajan Mehta", doctor: "Dr. Arun Sharma", date: "14 Jun 2026", drugs: 2, status: "Dispensed", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&auto=format" },
  { id: "RX-8819", patient: "Meera Joshi", doctor: "Dr. Suresh Kumar", date: "13 Jun 2026", drugs: 4, status: "Pending Pharmacy", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&auto=format" },
];

export function Prescriptions() {
  const [showCreate, setShowCreate] = useState(false);
  const [rows, setRows] = useState(medicines);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-slate-900">Prescriptions</h1>
          <p className="text-slate-500 text-sm mt-0.5">Manage and view prescriptions</p>
        </div>
        <button onClick={() => setShowCreate(!showCreate)} className="flex items-center gap-2 px-3 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">
          <Plus className="w-4 h-4" /> Create Prescription
        </button>
      </div>

      {showCreate && (
        <div className="bg-white rounded-xl border border-slate-100 p-5 space-y-4">
          <h3 className="text-slate-900">New Prescription</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1.5">Patient</label>
              <select className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none">
                <option>Ananya Krishnan (P-10421)</option>
                <option>Rajan Mehta (P-10422)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1.5">Doctor</label>
              <select className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none">
                <option>Dr. Suresh Kumar</option>
                <option>Dr. Kavitha Rao</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1.5">Date</label>
              <input type="date" defaultValue="2026-06-16" className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-slate-700">Medicines</h4>
              <button className="flex items-center gap-1.5 text-xs text-blue-700 hover:text-blue-900 transition"><Plus className="w-3.5 h-3.5" /> Add Medicine</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100">
                    {["Medicine", "Dosage", "Frequency", "Duration", "Route"].map(h => (
                      <th key={h} className="text-left text-xs font-medium text-slate-400 pb-2 pr-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i} className="border-b border-slate-50">
                      {[r.name, r.dosage, r.frequency, r.duration, r.route].map((v, j) => (
                        <td key={j} className="py-2 pr-4">
                          <input defaultValue={v} className="w-full text-sm text-slate-700 bg-transparent border-0 focus:outline-none focus:bg-slate-50 rounded px-1 py-0.5 min-w-24" />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <button className="flex items-center gap-1.5 px-4 py-2 border border-slate-200 text-slate-600 text-sm rounded-lg hover:bg-slate-50 transition">
              <Printer className="w-4 h-4" /> Print
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">
              <Send className="w-4 h-4" /> Send to Pharmacy
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h3 className="text-slate-900">Recent Prescriptions</h3>
        </div>
        <div className="divide-y divide-slate-50">
          {prescriptions.map(p => (
            <div key={p.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors">
              <img src={p.avatar} alt={p.patient} className="w-9 h-9 rounded-full object-cover" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-slate-800">{p.patient}</div>
                <div className="text-xs text-slate-400">{p.doctor} · {p.date}</div>
              </div>
              <div className="text-xs font-mono text-blue-700">{p.id}</div>
              <div className="text-xs text-slate-500">{p.drugs} drugs</div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${p.status === "Active" ? "bg-blue-100 text-blue-700" : p.status === "Dispensed" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{p.status}</span>
              <div className="flex gap-1.5">
                <button className="p-1.5 text-slate-400 hover:text-blue-700 hover:bg-blue-50 rounded transition"><Printer className="w-4 h-4" /></button>
                <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded transition"><Send className="w-4 h-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
