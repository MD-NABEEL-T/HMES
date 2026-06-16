import { Upload, CheckCircle2, Play, Pipette } from "lucide-react";

const labOrders = [
  { id: "LAB-5501", patient: "Ananya Krishnan", test: "Complete Blood Count", doctor: "Dr. Suresh Kumar", ordered: "16 Jun 2026", status: "Sample Collected", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&auto=format" },
  { id: "LAB-5502", patient: "Rajan Mehta", test: "Lipid Profile", doctor: "Dr. Arun Sharma", ordered: "16 Jun 2026", status: "Processing", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&auto=format" },
  { id: "LAB-5503", patient: "Vikram Patel", test: "MRI Brain", doctor: "Dr. Kavitha Rao", ordered: "15 Jun 2026", status: "Report Ready", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&auto=format" },
  { id: "LAB-5504", patient: "Meera Joshi", test: "HbA1c", doctor: "Dr. Suresh Kumar", ordered: "15 Jun 2026", status: "Pending Sample", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&auto=format" },
  { id: "LAB-5505", patient: "Priya Sundaram", test: "Ultrasound Abdomen", doctor: "Dr. Preethi Nair", ordered: "14 Jun 2026", status: "Completed", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&auto=format" },
];

const statusStyle: Record<string, string> = {
  "Pending Sample": "bg-slate-100 text-slate-600",
  "Sample Collected": "bg-blue-100 text-blue-700",
  "Processing": "bg-amber-100 text-amber-700",
  "Report Ready": "bg-violet-100 text-violet-700",
  "Completed": "bg-emerald-100 text-emerald-700",
};

const nextAction: Record<string, { label: string; icon: React.ReactNode; cls: string }> = {
  "Pending Sample": { label: "Collect Sample", icon: <Pipette className="w-3.5 h-3.5" />, cls: "hover:text-blue-700 hover:bg-blue-50" },
  "Sample Collected": { label: "Start Processing", icon: <Play className="w-3.5 h-3.5" />, cls: "hover:text-amber-600 hover:bg-amber-50" },
  "Processing": { label: "Upload Report", icon: <Upload className="w-3.5 h-3.5" />, cls: "hover:text-violet-700 hover:bg-violet-50" },
  "Report Ready": { label: "Complete", icon: <CheckCircle2 className="w-3.5 h-3.5" />, cls: "hover:text-emerald-600 hover:bg-emerald-50" },
};

export function Laboratory() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-slate-900">Laboratory</h1>
          <p className="text-slate-500 text-sm mt-0.5">{labOrders.length} lab orders today</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {[["Pending", "1", "bg-slate-50"], ["Sample Collected", "1", "bg-blue-50"], ["Processing", "1", "bg-amber-50"], ["Report Ready", "1", "bg-violet-50"], ["Completed", "1", "bg-emerald-50"]].map(([label, val, bg]) => (
          <div key={label} className={`rounded-xl p-4 ${bg}`}>
            <div className="font-mono text-xl font-medium text-slate-800">{val}</div>
            <div className="text-xs text-slate-500 mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                {["Patient", "Lab Order #", "Test", "Doctor", "Ordered", "Status", "Action"].map(h => (
                  <th key={h} className="text-left text-xs font-medium text-slate-400 px-5 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {labOrders.map((l, i) => (
                <tr key={l.id} className={`border-b border-slate-50 hover:bg-slate-50 transition-colors ${i === labOrders.length - 1 ? "border-b-0" : ""}`}>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <img src={l.avatar} alt={l.patient} className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-sm font-medium text-slate-800">{l.patient}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 font-mono text-xs text-blue-700">{l.id}</td>
                  <td className="px-5 py-3 text-sm text-slate-700">{l.test}</td>
                  <td className="px-5 py-3 text-sm text-slate-600">{l.doctor}</td>
                  <td className="px-5 py-3 text-sm text-slate-500">{l.ordered}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusStyle[l.status]}`}>{l.status}</span>
                  </td>
                  <td className="px-5 py-3">
                    {nextAction[l.status] && (
                      <button className={`flex items-center gap-1.5 px-2.5 py-1.5 border border-slate-200 text-slate-500 text-xs rounded-lg transition ${nextAction[l.status].cls}`}>
                        {nextAction[l.status].icon} {nextAction[l.status].label}
                      </button>
                    )}
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
