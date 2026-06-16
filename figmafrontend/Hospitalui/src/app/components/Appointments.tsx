import { useState } from "react";
import { Plus, Eye, Check, X, RefreshCw, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const appointments = [
  { id: "APT-2841", patient: "Ananya Krishnan", patientId: "P-10421", doctor: "Dr. Suresh Kumar", dept: "Cardiology", date: "16 Jun 2026", time: "10:00 AM", status: "Checked In", token: "T-04", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&auto=format" },
  { id: "APT-2842", patient: "Rajan Mehta", patientId: "P-10422", doctor: "Dr. Arun Sharma", dept: "Orthopedics", date: "16 Jun 2026", time: "10:30 AM", status: "Waiting", token: "T-05", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&auto=format" },
  { id: "APT-2843", patient: "Priya Sundaram", patientId: "P-10423", doctor: "Dr. Preethi Nair", dept: "Gynecology", date: "16 Jun 2026", time: "11:00 AM", status: "In Consultation", token: "T-06", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&auto=format" },
  { id: "APT-2844", patient: "Vikram Patel", patientId: "P-10424", doctor: "Dr. Kavitha Rao", dept: "Neurology", date: "16 Jun 2026", time: "11:30 AM", status: "Completed", token: "T-07", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&auto=format" },
  { id: "APT-2845", patient: "Meera Joshi", patientId: "P-10425", doctor: "Dr. Suresh Kumar", dept: "Cardiology", date: "16 Jun 2026", time: "12:00 PM", status: "Scheduled", token: "T-08", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&auto=format" },
  { id: "APT-2846", patient: "Arjun Nair", patientId: "P-10426", doctor: "Dr. Ramesh Iyer", dept: "Urology", date: "16 Jun 2026", time: "02:00 PM", status: "Cancelled", token: "T-09", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&auto=format" },
  { id: "APT-2847", patient: "Deepa Rajan", patientId: "P-10427", doctor: "Dr. Priya Menon", dept: "Endocrinology", date: "17 Jun 2026", time: "09:30 AM", status: "Scheduled", token: "T-01", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=64&h=64&fit=crop&auto=format" },
];

const statusStyle: Record<string, string> = {
  "Scheduled": "bg-blue-50 text-blue-700",
  "Checked In": "bg-cyan-50 text-cyan-700",
  "Waiting": "bg-amber-50 text-amber-700",
  "In Consultation": "bg-violet-50 text-violet-700",
  "Completed": "bg-emerald-50 text-emerald-700",
  "Cancelled": "bg-red-50 text-red-600",
};

const steps = ["Select Patient", "Select Doctor", "Select Date", "Select Time Slot", "Confirm"];

export function Appointments() {
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterDate, setFilterDate] = useState("16 Jun 2026");
  const [showBook, setShowBook] = useState(false);
  const [step, setStep] = useState(0);

  const filtered = appointments.filter(a =>
    (filterStatus === "All" || a.status === filterStatus) &&
    (filterDate === "All" || a.date === filterDate)
  );

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-slate-900">Appointments</h1>
          <p className="text-slate-500 text-sm mt-0.5">{appointments.length} appointments found</p>
        </div>
        <button onClick={() => { setShowBook(true); setStep(0); }} className="flex items-center gap-2 px-3 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">
          <Plus className="w-4 h-4" /> Book Appointment
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-100 p-4 flex gap-3 flex-wrap items-center">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Calendar className="w-4 h-4" />
          <span>Date:</span>
        </div>
        {["16 Jun 2026", "17 Jun 2026", "All"].map(d => (
          <button key={d} onClick={() => setFilterDate(d)} className={`px-3 py-1.5 text-sm rounded-lg transition ${filterDate === d ? "bg-blue-800 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>{d}</button>
        ))}
        <div className="w-px h-5 bg-slate-200 mx-1" />
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="px-3 py-1.5 text-sm bg-slate-50 rounded-lg border border-slate-200 text-slate-600 focus:outline-none">
          <option>All</option>
          {Object.keys(statusStyle).map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left text-xs font-medium text-slate-400 px-5 py-3">Patient</th>
                <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Token</th>
                <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Doctor</th>
                <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Date & Time</th>
                <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Status</th>
                <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a, i) => (
                <tr key={a.id} className={`border-b border-slate-50 hover:bg-slate-50 transition-colors ${i === filtered.length - 1 ? "border-b-0" : ""}`}>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <img src={a.avatar} alt={a.patient} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <div className="text-sm font-medium text-slate-800">{a.patient}</div>
                        <div className="text-xs text-slate-400 font-mono">{a.patientId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-mono text-sm text-blue-700 font-medium">{a.token}</td>
                  <td className="px-4 py-3">
                    <div className="text-sm text-slate-700">{a.doctor}</div>
                    <div className="text-xs text-slate-400">{a.dept}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm text-slate-700">{a.date}</div>
                    <div className="flex items-center gap-1 text-xs text-slate-400"><Clock className="w-3 h-3" />{a.time}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusStyle[a.status]}`}>{a.status}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <button className="p-1.5 text-slate-400 hover:text-blue-700 hover:bg-blue-50 rounded transition" title="View"><Eye className="w-4 h-4" /></button>
                      {a.status === "Scheduled" && <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded transition" title="Check In"><Check className="w-4 h-4" /></button>}
                      {(a.status === "Scheduled" || a.status === "Waiting") && <button className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded transition" title="Reschedule"><RefreshCw className="w-4 h-4" /></button>}
                      {a.status !== "Cancelled" && a.status !== "Completed" && <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition" title="Cancel"><X className="w-4 h-4" /></button>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400">Showing {filtered.length} of {appointments.length} appointments</span>
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded hover:bg-slate-100 text-slate-400 transition"><ChevronLeft className="w-4 h-4" /></button>
            <button className="px-3 py-1 rounded bg-blue-800 text-white text-xs">1</button>
            <button className="p-1.5 rounded hover:bg-slate-100 text-slate-400 transition"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* Book Appointment Modal */}
      {showBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h3 className="text-slate-900">Book Appointment</h3>
              <button onClick={() => setShowBook(false)} className="text-slate-400 hover:text-slate-700"><X className="w-5 h-5" /></button>
            </div>

            {/* Step indicator */}
            <div className="px-6 py-4 border-b border-slate-100">
              <div className="flex items-center gap-1">
                {steps.map((s, i) => (
                  <div key={s} className="flex items-center gap-1 flex-1">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-medium shrink-0 ${i < step ? "bg-emerald-500 text-white" : i === step ? "bg-blue-800 text-white" : "bg-slate-100 text-slate-400"}`}>
                      {i < step ? <Check className="w-3 h-3" /> : i + 1}
                    </div>
                    {i < steps.length - 1 && <div className={`flex-1 h-px ${i < step ? "bg-emerald-300" : "bg-slate-200"}`} />}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2">Step {step + 1}: {steps[step]}</p>
            </div>

            <div className="p-6">
              {step === 0 && (
                <div className="space-y-3">
                  <label className="block text-sm text-slate-600 mb-1.5">Search Patient</label>
                  <input placeholder="Type name or patient ID…" className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <div className="space-y-2 mt-2">
                    {[{ name: "Ananya Krishnan", id: "P-10421" }, { name: "Rajan Mehta", id: "P-10422" }].map(p => (
                      <button key={p.id} onClick={() => setStep(1)} className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition text-sm text-left">
                        <span className="text-slate-800">{p.name}</span>
                        <span className="font-mono text-xs text-blue-600">{p.id}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 1 && (
                <div className="space-y-2">
                  <label className="block text-sm text-slate-600 mb-3">Select Doctor</label>
                  {[{ name: "Dr. Suresh Kumar", dept: "Cardiology" }, { name: "Dr. Preethi Nair", dept: "Gynecology" }, { name: "Dr. Kavitha Rao", dept: "Neurology" }].map(d => (
                    <button key={d.name} onClick={() => setStep(2)} className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition text-sm text-left">
                      <span className="text-slate-800 font-medium">{d.name}</span>
                      <span className="text-xs text-slate-400">{d.dept}</span>
                    </button>
                  ))}
                </div>
              )}
              {step === 2 && (
                <div>
                  <label className="block text-sm text-slate-600 mb-3">Select Date</label>
                  <input type="date" defaultValue="2026-06-17" className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <button onClick={() => setStep(3)} className="mt-4 w-full py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">Continue</button>
                </div>
              )}
              {step === 3 && (
                <div>
                  <label className="block text-sm text-slate-600 mb-3">Available Time Slots — 17 Jun 2026</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM", "03:00 PM"].map(t => (
                      <button key={t} onClick={() => setStep(4)} className="px-2 py-2 text-xs rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700 transition font-mono">{t}</button>
                    ))}
                  </div>
                </div>
              )}
              {step === 4 && (
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <h4 className="text-blue-900 mb-3">Appointment Summary</h4>
                    {[["Patient", "Ananya Krishnan (P-10421)"], ["Doctor", "Dr. Suresh Kumar"], ["Department", "Cardiology"], ["Date", "17 Jun 2026"], ["Time", "09:30 AM"]].map(([k, v]) => (
                      <div key={k} className="flex justify-between text-sm py-1 border-b border-blue-100 last:border-0">
                        <span className="text-blue-600">{k}</span>
                        <span className="text-blue-900 font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setShowBook(false)} className="w-full py-2.5 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition font-medium">Confirm Appointment</button>
                </div>
              )}
            </div>

            {step > 0 && step < 4 && (
              <div className="px-6 pb-4">
                <button onClick={() => setStep(s => s - 1)} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition">
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
