import { useState } from "react";
import { Eye, EyeOff, Activity } from "lucide-react";

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email) { setError("Email is required."); return; }
    if (!password) { setError("Password is required."); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email === "admin@hospital.com" && password === "password") {
        onLogin();
      } else {
        setError("Invalid credentials. Try admin@hospital.com / password");
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel — image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516841273335-e39b37888115?w=1200&h=900&fit=crop&auto=format"
          alt="Hospital hallway with medical professionals"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/70 to-cyan-800/60" />
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-semibold tracking-tight">MediCore HMS</div>
              <div className="text-blue-200 text-xs">Hospital Management System</div>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-semibold leading-tight mb-4">
              Streamlining care,<br />empowering clinicians.
            </h1>
            <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
              Manage patients, appointments, pharmacy, lab, finance and more — all in one unified platform.
            </p>
            <div className="flex gap-6 mt-10">
              <div>
                <div className="font-mono text-2xl font-medium">15+</div>
                <div className="text-blue-300 text-xs mt-0.5">Modules</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-medium">10</div>
                <div className="text-blue-300 text-xs mt-0.5">User Roles</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-medium">24/7</div>
                <div className="text-blue-300 text-xs mt-0.5">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-[#f0f4f8]">
        <div className="w-full max-w-md">
          {/* Logo (mobile) */}
          <div className="flex items-center gap-3 mb-10 lg:hidden">
            <div className="w-10 h-10 bg-blue-800 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">MediCore HMS</div>
              <div className="text-slate-500 text-xs">Hospital Management System</div>
            </div>
          </div>

          <h2 className="text-slate-900 mb-1">Welcome back</h2>
          <p className="text-slate-500 text-sm mb-8">Sign in to your account to continue</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-slate-700 mb-1.5">Email / Username</label>
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@hospital.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-700 mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 pr-10 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 accent-blue-700"
                />
                <span className="text-sm text-slate-600">Remember me</span>
              </label>
              <button type="button" className="text-sm text-blue-700 hover:text-blue-900 transition">
                Forgot password?
              </button>
            </div>

            {error && (
              <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 bg-blue-800 hover:bg-blue-900 disabled:bg-blue-400 text-white rounded-lg text-sm font-medium transition-colors"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>

          <p className="text-center text-xs text-slate-400 mt-8">
            Demo: admin@hospital.com / password
          </p>
        </div>
      </div>
    </div>
  );
}
