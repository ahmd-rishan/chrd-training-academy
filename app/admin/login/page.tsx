'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogIn, Lock, Mail, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Mock/Demo authentication logic or Supabase Auth API
    setTimeout(() => {
      if (email.trim() && password.length >= 6) {
        setSuccess('Authentication successful. Redirecting to Dashboard...');
        setTimeout(() => {
          router.push('/admin/dashboard');
        }, 1000);
      } else {
        setError('Invalid credentials. Please enter a valid admin email and password.');
        setLoading(false);
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1120] p-4">
      <div className="w-full max-w-md bg-[#131D36] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        
        <!-- Header Branding -->
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00C896]/15 text-[#00C896] mb-4 border border-[#00C896]/30">
            <LogIn className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">CHRD ADMIN PORTAL</h1>
          <p className="text-sm text-slate-400 mt-1">Sign in to manage CHRD Training Academy content</p>
        </div>

        <!-- Alert Banners -->
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 rounded-xl bg-[#00C896]/10 border border-[#00C896]/30 text-[#00C896] text-sm flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span>{success}</span>
          </div>
        )}

        <!-- Form -->
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Admin Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@chrdkerala.org"
                className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm focus:outline-none focus:border-[#00C896] focus:ring-1 focus:ring-[#00C896] transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm focus:outline-none focus:border-[#00C896] focus:ring-1 focus:ring-[#00C896] transition"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded bg-[#0B1120] border-white/10 text-[#00C896] focus:ring-0" defaultChecked />
              <span>Remember session</span>
            </label>
            <a href="javascript:void(0)" className="text-[#00C896] hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 bg-[#00C896] hover:bg-[#00A87E] text-white font-semibold rounded-xl shadow-lg shadow-[#00C896]/20 transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Sign In to Admin Panel</span>
                <LogIn className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-slate-500">
          CHRD Kerala ISO 9001:2015 Protected Administrative Area
        </div>

      </div>
    </div>
  );
}
