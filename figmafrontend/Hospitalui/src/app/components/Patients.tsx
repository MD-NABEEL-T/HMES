import { useState } from "react";
import { Search, Plus, Download, Eye, Edit2, Trash2, Calendar, History, ChevronLeft, ChevronRight, X, User } from "lucide-react";

const patients = [
  { id: "P-10421", name: "Ananya Krishnan", mobile: "+91 98765 43210", gender: "Female", age: 34, blood: "B+", dept: "Cardiology", lastVisit: "14 Jun 2026", status: "Active", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&auto=format" },
  { id: "P-10422", name: "Rajan Mehta", mobile: "+91 87654 32109", gender: "Male", age: 58, blood: "O+", dept: "Orthopedics", lastVisit: "13 Jun 2026", status: "Active", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&auto=format" },
  { id: "P-10423", name: "Priya Sundaram", mobile: "+91 76543 21098", gender: "Female", age: 27, blood: "A+", dept: "Gynecology", lastVisit: "16 Jun 2026", status: "Active", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&auto=format" },
  { id: "P-10424", name: "Vikram Patel", mobile: "+91 65432 10987", gender: "Male", age: 45, blood: "AB+", dept: "Neurology", lastVisit: "10 Jun 2026", status: "Active", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&auto=format" },
  { id: "P-10425", name: "Meera Joshi", mobile: "+91 54321 09876", gender: "Female", age: 62, blood: "O-", dept: "Internal Medicine", lastVisit: "15 Jun 2026", status: "Active", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&auto=format" },
  { id: "P-10426", name: "Arjun Nair", mobile: "+91 43210 98765", gender: "Male", age: 39, blood: "A-", dept: "Urology", lastVisit: "09 Jun 2026", status: "Inactive", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&auto=format" },
  { id: "P-10427", name: "Deepa Rajan", mobile: "+91 32109 87654", gender: "Female", age: 51, blood: "B-", dept: "Endocrinology", lastVisit: "12 Jun 2026", status: "Active", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=64&h=64&fit=crop&auto=format" },
  { id: "P-10428", name: "Sanjay Kumar", mobile: "+91 21098 76543", gender: "Male", age: 67, blood: "B+", dept: "Cardiology", lastVisit: "16 Jun 2026", status: "Active", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&auto=format" },
];

const profileTabs = ["Overview", "Visits", "Medical History", "Prescriptions", "Lab Reports", "Billing"];

export function Patients() {
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [viewPatient, setViewPatient] = useState<typeof patients[0] | null>(null);
  const [activeTab, setActiveTab] = useState("Overview");

  const filtered = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.id.toLowerCase().includes(search.toLowerCase()) ||
    p.dept.toLowerCase().includes(search.toLowerCase())
  );

  if (viewPatient) {
    return (
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <button onClick={() => setViewPatient(null)} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition">
            <ChevronLeft className="w-4 h-4" /> Back to Patients
          </button>
        </div>

        {/* Profile header */}
        <div className="bg-white rounded-xl border border-slate-100 p-6">
          <div className="flex items-start gap-5">
            <img src={viewPatient.avatar} alt={viewPatient.name} className="w-20 h-20 rounded-2xl object-cover" />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-slate-900">{viewPatient.name}</h2>
                  <div className="flex items-center gap-3 mt-1 flex-wrap">
                    <span className="font-mono text-sm text-blue-700 bg-blue-50 px-2 py-0.5 rounded">{viewPatient.id}</span>
                    <span className="text-slate-400 text-sm">{viewPatient.gender} · {viewPatient.age}y</span>
                    <span className="text-slate-400 text-sm">Blood: <span className="font-medium text-red-600">{viewPatient.blood}</span></span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${viewPatient.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>{viewPatient.status}</span>
                  </div>
                  <div className="text-slate-400 text-sm mt-1">{viewPatient.mobile} · {viewPatient.dept}</div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">Book Appointment</button>
                  <button className="px-3 py-1.5 border border-slate-200 text-slate-600 text-sm rounded-lg hover:bg-slate-50 transition">Create OP Visit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
          <div className="flex border-b border-slate-100 overflow-x-auto">
            {profileTabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-sm whitespace-nowrap transition ${activeTab === tab ? "border-b-2 border-blue-700 text-blue-700 font-medium" : "text-slate-500 hover:text-slate-800"}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-6">
            {activeTab === "Overview" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-slate-700 mb-3">Personal Information</h4>
                  <div className="space-y-2 text-sm">
                    {[["Full Name", viewPatient.name], ["Gender", viewPatient.gender], ["Age", `${viewPatient.age} years`], ["Blood Group", viewPatient.blood], ["Mobile", viewPatient.mobile], ["Department", viewPatient.dept]].map(([k, v]) => (
                      <div key={k} className="flex gap-2">
                        <span className="text-slate-400 w-28 shrink-0">{k}</span>
                        <span className="text-slate-800 font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-slate-700 mb-3">Visit Summary</h4>
                  <div className="space-y-2 text-sm">
                    {[["Last Visit", viewPatient.lastVisit], ["Total Visits", "7"], ["Active Prescriptions", "2"], ["Pending Lab Orders", "1"]].map(([k, v]) => (
                      <div key={k} className="flex gap-2">
                        <span className="text-slate-400 w-36 shrink-0">{k}</span>
                        <span className="text-slate-800 font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
                    <p className="text-amber-700 text-xs font-medium">Next Follow-up: 23 Jun 2026</p>
                    <p className="text-amber-600 text-xs mt-0.5">Post-operative review with Dr. Suresh Kumar</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab !== "Overview" && (
              <div className="text-center py-12 text-slate-400">
                <User className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p className="text-sm">{activeTab} records will appear here</p>
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
          <h1 className="text-slate-900">Patients</h1>
          <p className="text-slate-500 text-sm mt-0.5">{patients.length} total patients registered</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 text-slate-600 text-sm rounded-lg hover:bg-white transition">
            <Download className="w-4 h-4" /> Export
          </button>
          <button onClick={() => setShowAdd(true)} className="flex items-center gap-2 px-3 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">
            <Plus className="w-4 h-4" /> Add Patient
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-100 p-4 flex gap-3 flex-wrap">
        <div className="relative flex-1 min-w-48">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, ID, department…"
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700"
          />
        </div>
        <select className="px-3 py-2 text-sm bg-slate-50 rounded-lg border border-slate-200 text-slate-600 focus:outline-none">
          <option>All Departments</option>
          <option>Cardiology</option>
          <option>Orthopedics</option>
          <option>Neurology</option>
          <option>Gynecology</option>
        </select>
        <select className="px-3 py-2 text-sm bg-slate-50 rounded-lg border border-slate-200 text-slate-600 focus:outline-none">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left text-xs font-medium text-slate-400 px-5 py-3">Patient</th>
                <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">ID</th>
                <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Mobile</th>
                <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Department</th>
                <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Last Visit</th>
                <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Status</th>
                <th className="text-left text-xs font-medium text-slate-400 px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, i) => (
                <tr key={p.id} className={`border-b border-slate-50 hover:bg-slate-50 transition-colors ${i === filtered.length - 1 ? "border-b-0" : ""}`}>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <img src={p.avatar} alt={p.name} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <div className="text-sm font-medium text-slate-800">{p.name}</div>
                        <div className="text-xs text-slate-400">{p.gender} · {p.age}y · {p.blood}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-blue-700">{p.id}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{p.mobile}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{p.dept}</td>
                  <td className="px-4 py-3 text-sm text-slate-500">{p.lastVisit}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${p.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => setViewPatient(p)} className="p-1.5 text-slate-400 hover:text-blue-700 hover:bg-blue-50 rounded transition" title="View">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded transition" title="Edit">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition" title="Book Appointment">
                        <Calendar className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition" title="History">
                        <History className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400">Showing {filtered.length} of {patients.length} patients</span>
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded hover:bg-slate-100 text-slate-400 transition"><ChevronLeft className="w-4 h-4" /></button>
            <button className="px-3 py-1 rounded bg-blue-800 text-white text-xs">1</button>
            <button className="px-3 py-1 rounded text-slate-500 hover:bg-slate-100 text-xs transition">2</button>
            <button className="p-1.5 rounded hover:bg-slate-100 text-slate-400 transition"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* Add Patient Modal */}
      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h3 className="text-slate-900">Register New Patient</h3>
              <button onClick={() => setShowAdd(false)} className="text-slate-400 hover:text-slate-700 transition"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[["Full Name", "text", "e.g. Ananya Krishnan"], ["Mobile", "tel", "+91 XXXXX XXXXX"]].map(([label, type, ph]) => (
                  <div key={label} className="col-span-2 sm:col-span-1">
                    <label className="block text-sm text-slate-600 mb-1.5">{label}</label>
                    <input type={type as string} placeholder={ph as string} className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                ))}
                <div>
                  <label className="block text-sm text-slate-600 mb-1.5">Gender</label>
                  <select className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none">
                    <option>Male</option><option>Female</option><option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1.5">Blood Group</label>
                  <select className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none">
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(bg => <option key={bg}>{bg}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1.5">Date of Birth</label>
                  <input type="date" className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1.5">Emergency Contact</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm text-slate-600 mb-1.5">Address</label>
                  <textarea rows={2} className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" placeholder="Street, City, State" />
                </div>
              </div>
            </div>
            <div className="flex gap-3 px-6 py-4 border-t border-slate-100">
              <button onClick={() => setShowAdd(false)} className="flex-1 py-2 border border-slate-200 text-slate-600 text-sm rounded-lg hover:bg-slate-50 transition">Cancel</button>
              <button onClick={() => setShowAdd(false)} className="flex-1 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">Register Patient</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
