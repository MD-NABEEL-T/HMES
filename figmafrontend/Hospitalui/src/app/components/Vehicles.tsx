import { Plus, AlertTriangle } from "lucide-react";

const vehicles = [
  { id: "V-01", reg: "KL 07 AB 1234", type: "Ambulance", driver: "Ravi Kumar", status: "Available", insurance: "31 Aug 2026", permit: "30 Jun 2026", lastService: "01 May 2026", nextService: "01 Aug 2026", fuel: "Diesel" },
  { id: "V-02", reg: "KL 07 AB 5678", type: "Ambulance", driver: "Suresh Babu", status: "On Trip", insurance: "15 Nov 2026", permit: "31 Dec 2026", lastService: "10 Mar 2026", nextService: "10 Jun 2026", fuel: "Petrol" },
  { id: "V-03", reg: "KL 07 CD 9012", type: "Staff Van", driver: "Murugan P", status: "Available", insurance: "22 Jul 2026", permit: "20 Jun 2026", lastService: "05 Apr 2026", nextService: "05 Jul 2026", fuel: "Diesel" },
  { id: "V-04", reg: "KL 07 EF 3456", type: "Doctor Car", driver: "Joseph M", status: "Maintenance", insurance: "10 Feb 2027", permit: "28 Feb 2027", lastService: "16 Jun 2026", nextService: "16 Sep 2026", fuel: "Petrol" },
];

const statusStyle: Record<string, string> = {
  "Available": "bg-emerald-100 text-emerald-700",
  "On Trip": "bg-blue-100 text-blue-700",
  "Maintenance": "bg-amber-100 text-amber-700",
};

export function Vehicles() {
  const permitExpiring = vehicles.filter(v => new Date(v.permit) <= new Date("2026-07-01")).length;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-slate-900">Vehicle Management</h1>
          <p className="text-slate-500 text-sm mt-0.5">{vehicles.length} vehicles registered</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">
          <Plus className="w-4 h-4" /> Add Vehicle
        </button>
      </div>

      {permitExpiring > 0 && (
        <div className="flex items-center gap-2 px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 text-sm">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span><strong>{permitExpiring} vehicles</strong> have permits expiring within 30 days</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {vehicles.map(v => (
          <div key={v.id} className="bg-white rounded-xl border border-slate-100 p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="font-mono text-xs text-blue-700">{v.reg}</div>
                <div className="text-sm font-medium text-slate-800 mt-0.5">{v.type}</div>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${statusStyle[v.status]}`}>{v.status}</span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-500">
              <div className="flex justify-between"><span>Driver</span><span className="font-medium text-slate-700">{v.driver}</span></div>
              <div className="flex justify-between"><span>Insurance</span><span className="font-medium text-slate-700">{v.insurance}</span></div>
              <div className={`flex justify-between ${new Date(v.permit) <= new Date("2026-07-01") ? "text-amber-600" : ""}`}>
                <span>Permit Expiry</span>
                <span className="font-medium">{v.permit}</span>
              </div>
              <div className="flex justify-between"><span>Next Service</span><span className="font-medium text-slate-700">{v.nextService}</span></div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 py-1.5 text-xs border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition">Expense</button>
              <button className="flex-1 py-1.5 text-xs border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition">Log</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
