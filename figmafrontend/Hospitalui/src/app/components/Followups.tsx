import { Phone, MessageCircle, CheckCircle2, RefreshCw } from "lucide-react";

const followups = [
  { id: "FU-101", patient: "Ananya Krishnan", condition: "Post-cardiac review", doctor: "Dr. Suresh Kumar", due: "16 Jun 2026", section: "Due Today", phone: "+91 98765 43210", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&auto=format" },
  { id: "FU-102", patient: "Rajan Mehta", condition: "Ortho follow-up", doctor: "Dr. Arun Sharma", due: "16 Jun 2026", section: "Due Today", phone: "+91 87654 32109", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&auto=format" },
  { id: "FU-103", patient: "Meera Joshi", condition: "Diabetes monitoring", doctor: "Dr. Priya Menon", due: "13 Jun 2026", section: "Missed", phone: "+91 54321 09876", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&auto=format" },
  { id: "FU-104", patient: "Vikram Patel", condition: "Neuro review", doctor: "Dr. Kavitha Rao", due: "10 Jun 2026", section: "Completed", phone: "+91 65432 10987", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&auto=format" },
  { id: "FU-105", patient: "Priya Sundaram", condition: "Pregnancy check", doctor: "Dr. Preethi Nair", due: "22 Jun 2026", section: "Rescheduled", phone: "+91 76543 21098", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&auto=format" },
];

const sectionStyle: Record<string, string> = {
  "Due Today": "bg-blue-100 text-blue-700",
  "Missed": "bg-red-100 text-red-700",
  "Completed": "bg-emerald-100 text-emerald-700",
  "Rescheduled": "bg-amber-100 text-amber-700",
};

export function Followups() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-slate-900">Follow-ups</h1>
        <p className="text-slate-500 text-sm mt-0.5">Patient follow-up tracking</p>
      </div>

      {/* Sections summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[["Due Today", "2", "bg-blue-50 text-blue-800"], ["Missed", "1", "bg-red-50 text-red-700"], ["Completed", "1", "bg-emerald-50 text-emerald-800"], ["Rescheduled", "1", "bg-amber-50 text-amber-800"]].map(([label, count, color]) => (
          <div key={label} className={`rounded-xl p-4 ${color}`}>
            <div className="font-mono text-2xl font-medium">{count}</div>
            <div className="text-sm mt-0.5 opacity-70">{label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
        <div className="divide-y divide-slate-50">
          {followups.map(f => (
            <div key={f.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors">
              <img src={f.avatar} alt={f.patient} className="w-9 h-9 rounded-full object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-slate-800">{f.patient}</div>
                <div className="text-xs text-slate-400">{f.condition} · {f.doctor}</div>
                <div className="text-xs text-slate-400 mt-0.5">Due: {f.due}</div>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${sectionStyle[f.section]}`}>{f.section}</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <a href={`tel:${f.phone}`} className="p-1.5 text-slate-400 hover:text-blue-700 hover:bg-blue-50 rounded transition" title="Call"><Phone className="w-4 h-4" /></a>
                <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded transition" title="WhatsApp"><MessageCircle className="w-4 h-4" /></button>
                <button className="p-1.5 text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 rounded transition" title="Mark Completed"><CheckCircle2 className="w-4 h-4" /></button>
                <button className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded transition" title="Reschedule"><RefreshCw className="w-4 h-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
