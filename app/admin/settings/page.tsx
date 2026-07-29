'use client';

import React, { useState } from 'react';
import { Settings, Save, CheckCircle2, Phone, Mail, MapPin, MessageCircle, BarChart } from 'lucide-react';

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <form onSubmit={handleSave} className="space-y-8 max-w-4xl">
      
      <div className="flex items-center justify-between border-b border-white/10 pb-5">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Website & Academy Settings</h1>
          <p className="text-xs text-slate-400">Configure global contact details, social links, and analytics tags</p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00C896] hover:bg-[#00A87E] text-white text-xs font-semibold shadow-lg shadow-[#00C896]/20 transition"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      {saved && (
        <div className="p-4 rounded-xl bg-[#00C896]/15 border border-[#00C896]/30 text-[#00C896] text-sm flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <span>Website configuration updated!</span>
        </div>
      )}

      <!-- Contact Details -->
      <div className="bg-[#131D36] border border-white/10 rounded-2xl p-6 space-y-4 shadow-xl">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider text-[#00C896]">Academy Contact Info</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Official Phone Number</label>
            <input
              type="text"
              defaultValue="+91 9745900084"
              className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#00C896]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Official Email Address</label>
            <input
              type="email"
              defaultValue="chrdtrainingacademy@gmail.com"
              className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#00C896]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp Hotline Number</label>
          <input
            type="text"
            defaultValue="919745900084"
            className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#00C896]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Campus Physical Address</label>
          <input
            type="text"
            defaultValue="Vengara, Malappuram, Kerala 676304"
            className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#00C896]"
          />
        </div>
      </div>

      <!-- Analytics Integrations -->
      <div className="bg-[#131D36] border border-white/10 rounded-2xl p-6 space-y-4 shadow-xl">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider text-[#7C5CFF]">Analytics & Tracking Pixels</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Google Analytics ID (G-XXXXXXXXXX)</label>
            <input
              type="text"
              placeholder="G-1234567890"
              className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#00C896]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Google Tag Manager Container ID</label>
            <input
              type="text"
              placeholder="GTM-XXXXXXX"
              className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#00C896]"
            />
          </div>
        </div>
      </div>

    </form>
  );
}
