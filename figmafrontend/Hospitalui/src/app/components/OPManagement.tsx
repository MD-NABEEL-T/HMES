import { useState } from "react";
import { Play, SkipForward, CheckSquare, Clock, User } from "lucide-react";

const queue = [
  { token: "T-01", patient: "Meera Joshi", age: 62, time: "08:45 AM", status: "Completed", doctor: "Dr. Suresh Kumar", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&auto=format" },
  { token: "T-02", patient: "Rajan Mehta", age: 58, time: "09:00 AM", status: "Completed", doctor: "Dr. Suresh Kumar", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&auto=format" },
  { token: "T-03", patient: "Ananya Krishnan", age: 34, time: "09:30 AM", status: "In Consultation", doctor: "Dr. Suresh Kumar", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&auto=format" },
  { token: "T-04", patient: "Vikram Patel", age: 45, time: "10:00 AM", status: "Waiting", doctor: "Dr. Kavitha Rao", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&auto=format" },
  { token: "T-05", patient: "Priya Sundaram", age: 27, time: "10:30 AM", status: "Waiting", doctor: "Dr. Preethi Nair", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&auto=format" },
  { token: "T-06", patient: "Sanjay Kumar", age: 67, time: "11:00 AM", status: "Scheduled", doctor: "Dr. Suresh Kumar", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&auto=format" },
];

const consultationVitals = [
  { label: "Chief Complaint", value: "Chest pain for 2 days, radiating to left arm" },
  { label: "BP", value: "138/86 mmHg" },
  { label: "Pulse", value: "82 bpm" },
  { label: "Temperature", value: "98.4°F" },
  { label: "SpO2", value: "97%" },
];

const statusStyle: Record<string, string> = {
  "Completed": "bg-emerald-100 text-emerald-700",
  "In Consultation": "bg-blue-100 text-blue-700",
  "Waiting": "bg-amber-100 text-amber-700",
  "Scheduled": "bg-slate-100 text-slate-600",
};

export function OPManagement() {
  const [, setActiveConsult] = useState(false);

  const current = queue.find(q => q.status === "In Consultation");
  const waiting = queue.filter(q => q.status === "Waiting").length;

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-slate-900">OP Management</h1>
        <p className="text-slate-500 text-sm mt-0.5">Outpatient queue — 16 Jun 2026</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Current Token", value: "T-03", color: "bg-blue-50 text-blue-800" },
          { label: "Waiting", value: waiting.toString(), color: "bg-amber-50 text-amber-800" },
          { label: "Completed Today", value: "2", color: "bg-emerald-50 text-emerald-800" },
          { label: "Total Today", value: queue.length.toString(), color: "bg-slate-50 text-slate-800" },
        ].map(s => (
          <div key={s.label} className={`rounded-xl p-4 ${s.color}`}>
            <div className="font-mono text-2xl font-medium">{s.value}</div>
            <div className="text-sm mt-0.5 opacity-70">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Queue */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-slate-100 overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-slate-900">Token Queue</h3>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-800 text-white text-xs rounded-lg hover:bg-blue-900 transition">
              <SkipForward className="w-3.5 h-3.5" /> Call Next
            </button>
          </div>
          <div className="divide-y divide-slate-50">
            {queue.map(q => (
              <div key={q.token} className={`flex items-center gap-3 px-5 py-3 ${q.status === "In Consultation" ? "bg-blue-50" : ""}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-medium text-sm shrink-0 ${q.status === "In Consultation" ? "bg-blue-800 text-white" : q.status === "Completed" ? "bg-slate-200 text-slate-500" : "bg-slate-100 text-slate-700"}`}>
                  {q.token.split("-")[1]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-slate-800 truncate">{q.patient}</div>
                  <div className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {q.time}
                  </div>
                </div>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${statusStyle[q.status]}`}>{q.status === "In Consultation" ? "Active" : q.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation panel */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100">
          {current ? (
            <div>
              <div className="px-5 py-4 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <img src={current.avatar} alt={current.patient} className="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <h3 className="text-slate-900">{current.patient}, {current.age}y</h3>
                    <p className="text-slate-400 text-sm">{current.doctor} · Token {current.token}</p>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <button className="px-3 py-1.5 border border-slate-200 text-slate-600 text-sm rounded-lg hover:bg-slate-50 transition">Save Draft</button>
                    <button onClick={() => setActiveConsult(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">
                      <Play className="w-3.5 h-3.5" /> Start Consultation
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h4 className="text-slate-700 mb-3">Vitals</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {consultationVitals.map(v => (
                      <div key={v.label} className="bg-slate-50 rounded-lg p-3">
                        <div className="text-xs text-slate-400 mb-1">{v.label}</div>
                        <div className="text-sm font-medium text-slate-800">{v.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-slate-700 mb-2">Diagnosis / Notes</h4>
                  <textarea rows={3} placeholder="Enter clinical notes, diagnosis…" className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1.5 px-3 py-2 border border-slate-200 text-slate-600 text-sm rounded-lg hover:bg-slate-50 transition">Prescription</button>
                  <button className="flex items-center gap-1.5 px-3 py-2 border border-slate-200 text-slate-600 text-sm rounded-lg hover:bg-slate-50 transition">Lab Request</button>
                  <button className="flex items-center gap-1.5 px-3 py-2 border border-slate-200 text-slate-600 text-sm rounded-lg hover:bg-slate-50 transition">Follow Up</button>
                  <button className="ml-auto flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition">
                    <CheckSquare className="w-4 h-4" /> Complete Visit
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-slate-400">
              <User className="w-12 h-12 mb-3 opacity-30" />
              <p className="text-sm">No active consultation</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
