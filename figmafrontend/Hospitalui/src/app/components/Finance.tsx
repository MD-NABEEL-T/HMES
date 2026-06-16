import { Download, Plus } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { useState } from "react";

const monthlyData = [
  { month: "Jan", income: 380000, expense: 142000 },
  { month: "Feb", income: 410000, expense: 158000 },
  { month: "Mar", income: 395000, expense: 151000 },
  { month: "Apr", income: 430000, expense: 165000 },
  { month: "May", income: 465000, expense: 172000 },
  { month: "Jun", income: 311000, expense: 118000 },
];

const expenseCategories = [
  { name: "Salaries", value: 58, color: "#1e40af" },
  { name: "Medicines", value: 18, color: "#0891b2" },
  { name: "Utilities", value: 10, color: "#059669" },
  { name: "Equipment", value: 8, color: "#d97706" },
  { name: "Other", value: 6, color: "#7c3aed" },
];

const transactions = [
  { id: "TXN-9901", desc: "OP Consultation - 42 patients", category: "Revenue", amount: "+₹21,000", date: "16 Jun 2026", type: "credit" },
  { id: "TXN-9902", desc: "Pharmacy Sales", category: "Revenue", amount: "+₹18,400", date: "16 Jun 2026", type: "credit" },
  { id: "TXN-9903", desc: "Lab Tests Revenue", category: "Revenue", amount: "+₹12,600", date: "16 Jun 2026", type: "credit" },
  { id: "TXN-9904", desc: "Staff Salaries - Partial", category: "Salaries", amount: "-₹85,000", date: "16 Jun 2026", type: "debit" },
  { id: "TXN-9905", desc: "Medicine Purchase - Cipla", category: "Medicines", amount: "-₹22,400", date: "15 Jun 2026", type: "debit" },
  { id: "TXN-9906", desc: "Electricity Bill", category: "Utilities", amount: "-₹11,800", date: "14 Jun 2026", type: "debit" },
];

export function Finance() {
  const [showExpense, setShowExpense] = useState(false);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-slate-900">Finance</h1>
          <p className="text-slate-500 text-sm mt-0.5">Revenue, expenses & cash flow</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 text-slate-600 text-sm rounded-lg hover:bg-white transition">
            <Download className="w-4 h-4" /> Export
          </button>
          <button onClick={() => setShowExpense(!showExpense)} className="flex items-center gap-2 px-3 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">
            <Plus className="w-4 h-4" /> Add Expense
          </button>
        </div>
      </div>

      {showExpense && (
        <div className="bg-white rounded-xl border border-slate-100 p-5">
          <h3 className="text-slate-900 mb-4">Record Expense</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1.5">Category</label>
              <select className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none">
                <option>Salaries</option><option>Medicines</option><option>Utilities</option><option>Equipment</option><option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1.5">Amount (₹)</label>
              <input type="number" placeholder="0.00" className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1.5">Date</label>
              <input type="date" defaultValue="2026-06-16" className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1.5">Remarks</label>
              <input type="text" placeholder="Brief description" className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition">Save Expense</button>
        </div>
      )}

      {/* Widgets */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Income (Jun)", value: "₹3,11,000", delta: "+8%", color: "text-emerald-700", bg: "bg-emerald-50" },
          { label: "Total Expenses (Jun)", value: "₹1,18,000", delta: "-3%", color: "text-rose-700", bg: "bg-rose-50" },
          { label: "Net Profit (Jun)", value: "₹1,93,000", delta: "+14%", color: "text-blue-700", bg: "bg-blue-50" },
          { label: "Today's Revenue", value: "₹62,400", delta: "+18%", color: "text-teal-700", bg: "bg-teal-50" },
        ].map(w => (
          <div key={w.label} className={`rounded-xl p-4 ${w.bg}`}>
            <div className={`font-mono text-lg font-medium ${w.color}`}>{w.value}</div>
            <div className="text-slate-500 text-xs mt-0.5">{w.label}</div>
            <div className={`text-xs font-mono mt-1 ${w.color}`}>{w.delta} vs last month</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 p-5">
          <h3 className="text-slate-900 mb-4">Monthly Income vs Expenses</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyData} barSize={18}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={v => `₹${(v / 1000).toFixed(0)}k`} />
              <Tooltip formatter={(v: number) => `₹${v.toLocaleString()}`} contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
              <Bar dataKey="income" fill="#1e40af" radius={[4, 4, 0, 0]} name="Income" />
              <Bar dataKey="expense" fill="#dc2626" radius={[4, 4, 0, 0]} name="Expenses" opacity={0.7} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-5">
          <h3 className="text-slate-900 mb-4">Expense Breakdown</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={expenseCategories} cx="50%" cy="45%" innerRadius={55} outerRadius={80} dataKey="value" paddingAngle={2}>
                {expenseCategories.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Legend iconType="circle" iconSize={8} formatter={(v) => <span style={{ fontSize: 11, color: "#64748b" }}>{v}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h3 className="text-slate-900">Recent Transactions</h3>
        </div>
        <div className="divide-y divide-slate-50">
          {transactions.map(t => (
            <div key={t.id} className="flex items-center gap-4 px-5 py-3 hover:bg-slate-50 transition-colors">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${t.type === "credit" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"}`}>
                {t.type === "credit" ? "+" : "−"}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-slate-800 truncate">{t.desc}</div>
                <div className="text-xs text-slate-400">{t.category} · {t.date}</div>
              </div>
              <div className={`font-mono text-sm font-medium ${t.type === "credit" ? "text-emerald-700" : "text-red-600"}`}>{t.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
