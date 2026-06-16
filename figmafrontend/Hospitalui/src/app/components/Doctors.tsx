import { useState } from "react";
import { Plus, Eye, Edit2, UserX, X, ChevronLeft } from "lucide-react";

const doctors = [
  { id: "D-001", name: "Dr. Suresh Kumar", dept: "Cardiology", qual: "MD, DM Cardiology", exp: "18 years", status: "Active", patients: 8, avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=120&h=120&fit=crop&auto=format", schedule: "Mon–Sat, 9am–1pm", phone: "+91 98001 11001" },
  { id: "D-002", name: "Dr. Preethi Nair", dept: "Gynecology", qual: "MS Obs & Gynae", exp: "12 years", status: "Active", patients: 12, avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop&auto=format", schedule: "Mon–Fri, 10am–2pm", phone: "+91 98001 11002" },
  { id: "D-003", name: "Dr. Arun Sharma", dept: "Orthopedics", qual: "MS Ortho, DNB", exp: "15 years", status: "On Leave", patients: 0, avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=120&h=120&fit=crop&auto=format", schedule: "Tue–Sat, 11am–3pm", phone: "+91 98001 11003" },
  { id: "D-004", name: "Dr. Kavitha Rao", dept: "Neurology", qual: "DM Neurology", exp: "10 years", status: "Active", patients: 6, avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=120&h=120&fit=crop&auto=format", schedule: "Mon–Wed–Fri, 9am–1pm", phone: "+91 98001 11004" },
  { id: "D-005", name: "Dr. Ramesh Iyer", dept: "Urology", qual: "MCh Urology", exp: "20 years", status: "Active", patients: 5, avatar: "https://images.unsplash.com/photo-1631217873436-b0fa88e71f0a?w=120&h=120&fit=crop&auto=format", schedule: "Mon–Thu, 2pm–6pm", phone: "+91 98001 11005" },
  { id: "D-006", name: "Dr. Anitha Menon", dept: "Pediatrics", qual: "MD Pediatrics", exp: "9 years", status: "Active", patients: 14, avatar: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=120&h=120&fit=crop&auto=format", schedule: "Mon–Sat, 8am–12pm", phone: "+91 98001 11006" },
];

const docTabs = ["Overview", "Schedule", "Patients", "Revenue", "Attendance"];

export function Doctors() {
  const [viewDoctor, setViewDoctor] = useState<typeof doctors[0] | null>(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const [showAdd, setShowAdd] = useState(false);

  if (viewDoctor) {
    return (
      <div className="space-y-5">
        <button onClick={() => setViewDoctor(null)} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition">
          <ChevronLeft className="w-4 h-4" /> Back to Doctors
        </button>

        {/* Doctor profile */}
        <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
          <div className="h-24 bg-gradient-to-r from-blue-900 to-cyan-700" />
          <div className="px-6 pb-6 -mt-12">
            <div className="flex items-end gap-4 flex-wrap">
              <img src={viewDoctor.avatar} alt={viewDoctor.name} className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow" />
              <div className="flex-1 pb-2">
                <h2 className="text-slate-900">{viewDoctor.name}</h2>
                <p className="text-slate-500 text-sm">{viewDoctor.qual} · {viewDoctor.dept}</p>
                <div className="flex gap-2 mt-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${viewDoctor.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{viewDoctor.status}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">{viewDoctor.exp} experience</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 border border-slate-200 text-slate-600 text-sm rounded-lg hover:bg-slate-50 transition">Mark Leave</button>
                <button className="px-3 py-1.5 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">Edit Schedule</button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
          <div className="flex border-b border-slate-100 overflow-x-auto">
            {docTabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-5 py-3 text-sm whitespace-nowrap transition ${activeTab === tab ? "border-b-2 border-blue-700 text-blue-700 font-medium" : "text-slate-500 hover:text-slate-800"}`}>{tab}</button>
            ))}
          </div>
          <div className="p-6">
            {activeTab === "Overview" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-slate-700 mb-3">Contact & Info</h4>
                  <div className="space-y-2 text-sm">
                    {[["Phone", viewDoctor.phone], ["Department", viewDoctor.dept], ["Qualification", viewDoctor.qual], ["Experience", viewDoctor.exp], ["Doctor ID", viewDoctor.id]].map(([k, v]) => (
                      <div key={k} className="flex gap-2">
                        <span className="text-slate-400 w-28 shrink-0">{k}</span>
                        <span className="text-slate-800 font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-slate-700 mb-3">Today's Stats</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[["Patients Today", viewDoctor.patients.toString()], ["Consultations", "6"], ["Avg. Duration", "22 min"], ["Pending Notes", "1"]].map(([k, v]) => (
                      <div key={k} className="bg-slate-50 rounded-lg p-3">
                        <div className="font-mono text-xl font-medium text-blue-800">{v}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{k}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Schedule" && (
              <div>
                <h4 className="text-slate-700 mb-4">Weekly Availability</h4>
                <div className="grid grid-cols-7 gap-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                    <div key={day} className={`rounded-lg p-3 text-center text-sm ${i < 6 && viewDoctor.id !== "D-003" ? "bg-blue-50 border border-blue-100" : "bg-slate-50 border border-slate-100"}`}>
                      <div className={`font-medium ${i < 6 && viewDoctor.id !== "D-003" ? "text-blue-800" : "text-slate-400"}`}>{day}</div>
                      <div className="text-xs mt-1 text-slate-500">
                        {i < 6 && viewDoctor.id !== "D-003" ? viewDoctor.schedule.split(",")[1]?.trim() ?? "9am" : "—"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab !== "Overview" && activeTab !== "Schedule" && (
              <div className="text-center py-12 text-slate-400">
                <p className="text-sm">{activeTab} data will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-slate-900">Doctors</h1>
          <p className="text-slate-500 text-sm mt-0.5">{doctors.length} doctors registered</p>
        </div>
        <button onClick={() => setShowAdd(true)} className="flex items-center gap-2 px-3 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">
          <Plus className="w-4 h-4" /> Add Doctor
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.map(d => (
          <div key={d.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-sm transition-shadow">
            <div className="h-3 bg-gradient-to-r from-blue-800 to-cyan-600" />
            <div className="p-5">
              <div className="flex items-start gap-4">
                <img src={d.avatar} alt={d.name} className="w-14 h-14 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-slate-900 truncate">{d.name}</h3>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full shrink-0 ${d.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{d.status}</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-0.5">{d.dept}</p>
                  <p className="text-slate-400 text-xs">{d.qual}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="bg-slate-50 rounded-lg px-3 py-2">
                  <div className="font-mono text-sm font-medium text-blue-800">{d.patients}</div>
                  <div className="text-slate-400 text-[10px]">Patients today</div>
                </div>
                <div className="bg-slate-50 rounded-lg px-3 py-2">
                  <div className="font-mono text-sm font-medium text-slate-700">{d.exp}</div>
                  <div className="text-slate-400 text-[10px]">Experience</div>
                </div>
              </div>

              <div className="mt-3 text-xs text-slate-500 truncate">{d.schedule}</div>

              <div className="flex gap-2 mt-4">
                <button onClick={() => { setViewDoctor(d); setActiveTab("Overview"); }} className="flex-1 flex items-center justify-center gap-1.5 py-1.5 border border-slate-200 text-slate-600 text-xs rounded-lg hover:bg-slate-50 transition">
                  <Eye className="w-3.5 h-3.5" /> View
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 border border-slate-200 text-slate-600 text-xs rounded-lg hover:bg-slate-50 transition">
                  <Edit2 className="w-3.5 h-3.5" /> Edit
                </button>
                <button className="flex items-center justify-center py-1.5 px-2 border border-red-100 text-red-400 text-xs rounded-lg hover:bg-red-50 transition">
                  <UserX className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Doctor Modal */}
      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h3 className="text-slate-900">Add New Doctor</h3>
              <button onClick={() => setShowAdd(false)} className="text-slate-400 hover:text-slate-700"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[["Full Name", "text"], ["Phone", "tel"], ["Department", "text"], ["Qualification", "text"], ["Experience (years)", "number"]].map(([label, type]) => (
                  <div key={label} className={label === "Full Name" ? "col-span-2" : ""}>
                    <label className="block text-sm text-slate-600 mb-1.5">{label}</label>
                    <input type={type as string} className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-3 px-6 py-4 border-t border-slate-100">
              <button onClick={() => setShowAdd(false)} className="flex-1 py-2 border border-slate-200 text-slate-600 text-sm rounded-lg hover:bg-slate-50 transition">Cancel</button>
              <button onClick={() => setShowAdd(false)} className="flex-1 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">Add Doctor</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
