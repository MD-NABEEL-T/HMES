import { Plus, AlertTriangle, Clock, Search } from "lucide-react";
import { useState } from "react";

const inventory = [
  { id: "M-001", name: "Amlodipine 5mg", category: "Cardiovascular", stock: 250, unit: "Tabs", expiry: "Aug 2027", manufacturer: "Cipla", price: 2.5, status: "In Stock" },
  { id: "M-002", name: "Metformin 500mg", category: "Antidiabetic", stock: 18, unit: "Tabs", expiry: "Mar 2026", manufacturer: "Sun Pharma", price: 1.2, status: "Low Stock" },
  { id: "M-003", name: "Amoxicillin 500mg", category: "Antibiotic", stock: 180, unit: "Caps", expiry: "Dec 2026", manufacturer: "Abbott", price: 5.0, status: "In Stock" },
  { id: "M-004", name: "Paracetamol 500mg", category: "Analgesic", stock: 600, unit: "Tabs", expiry: "Jan 2028", manufacturer: "GSK", price: 0.8, status: "In Stock" },
  { id: "M-005", name: "Atorvastatin 20mg", category: "Cardiovascular", stock: 8, unit: "Tabs", expiry: "Nov 2025", manufacturer: "Ranbaxy", price: 3.5, status: "Near Expiry" },
  { id: "M-006", name: "Omeprazole 20mg", category: "Gastro", stock: 320, unit: "Caps", expiry: "Jun 2027", manufacturer: "Dr. Reddy's", price: 2.0, status: "In Stock" },
];

const statusStyle: Record<string, string> = {
  "In Stock": "bg-emerald-100 text-emerald-700",
  "Low Stock": "bg-amber-100 text-amber-700",
  "Near Expiry": "bg-red-100 text-red-700",
  "Out of Stock": "bg-slate-100 text-slate-500",
};

export function Pharmacy() {
  const [search, setSearch] = useState("");
  const filtered = inventory.filter(m => m.name.toLowerCase().includes(search.toLowerCase()) || m.category.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-slate-900">Pharmacy</h1>
          <p className="text-slate-500 text-sm mt-0.5">Medicine inventory management</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">
          <Plus className="w-4 h-4" /> Add Medicine
        </button>
      </div>

      {/* Alerts */}
      <div className="flex gap-3 flex-wrap">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 text-sm">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span><strong>2 medicines</strong> have low stock levels</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
          <Clock className="w-4 h-4 shrink-0" />
          <span><strong>1 medicine</strong> nearing expiry (Nov 2025)</span>
        </div>
      </div>

      {/* Search & filter */}
      <div className="bg-white rounded-xl border border-slate-100 p-4 flex gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search medicines…" className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <select className="px-3 py-2 text-sm bg-slate-50 rounded-lg border border-slate-200 text-slate-600 focus:outline-none">
          <option>All Categories</option>
          <option>Cardiovascular</option>
          <option>Antibiotic</option>
          <option>Analgesic</option>
        </select>
        <select className="px-3 py-2 text-sm bg-slate-50 rounded-lg border border-slate-200 text-slate-600 focus:outline-none">
          <option>All Status</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Near Expiry</option>
        </select>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                {["Medicine", "Category", "Stock", "Expiry", "Manufacturer", "Unit Price", "Status", "Actions"].map(h => (
                  <th key={h} className="text-left text-xs font-medium text-slate-400 px-5 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((m, i) => (
                <tr key={m.id} className={`border-b border-slate-50 hover:bg-slate-50 transition-colors ${i === filtered.length - 1 ? "border-b-0" : ""}`}>
                  <td className="px-5 py-3">
                    <div className="text-sm font-medium text-slate-800">{m.name}</div>
                    <div className="text-xs text-slate-400 font-mono">{m.id}</div>
                  </td>
                  <td className="px-5 py-3 text-sm text-slate-600">{m.category}</td>
                  <td className="px-5 py-3 font-mono text-sm text-slate-700">{m.stock} {m.unit}</td>
                  <td className="px-5 py-3 text-sm text-slate-500">{m.expiry}</td>
                  <td className="px-5 py-3 text-sm text-slate-600">{m.manufacturer}</td>
                  <td className="px-5 py-3 font-mono text-sm text-slate-700">₹{m.price.toFixed(2)}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusStyle[m.status]}`}>{m.status}</span>
                  </td>
                  <td className="px-5 py-3">
                    <button className="text-xs px-2 py-1 border border-slate-200 text-slate-600 rounded hover:bg-slate-50 transition">Purchase</button>
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
