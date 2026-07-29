'use client';

import React, { useState } from 'react';
import { SlidersHorizontal, Save, CheckCircle2, Globe, Search } from 'lucide-react';

export default function AdminSEOPage() {
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
          <h1 className="text-2xl font-extrabold text-white">Global SEO & Search Settings</h1>
          <p className="text-xs text-slate-400">Configure search engine titles, metadata, Open Graph cards, and structured data</p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00C896] hover:bg-[#00A87E] text-white text-xs font-semibold shadow-lg shadow-[#00C896]/20 transition"
        >
          <Save className="w-4 h-4" />
          <span>Save SEO Settings</span>
        </button>
      </div>

      {saved && (
        <div className="p-4 rounded-xl bg-[#00C896]/15 border border-[#00C896]/30 text-[#00C896] text-sm flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <span>Global SEO configuration saved successfully!</span>
        </div>
      )}

      <!-- Homepage Metadata -->
      <div className="bg-[#131D36] border border-white/10 rounded-2xl p-6 space-y-4 shadow-xl">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider text-[#00C896]">Homepage SEO Defaults</h3>
        
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Global Meta Title</label>
          <input
            type="text"
            defaultValue="CHRD Training Academy | Best Skill Development Academy in Malappuram, Kerala"
            className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#00C896]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Global Meta Description</label>
          <textarea
            rows={3}
            defaultValue="Centre for Human Resource Development (CHRD Kerala) is an ISO 9001:2015 certified academy offering practical teacher training, digital marketing, hospital admin, accounting & skill courses in Malappuram."
            className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#00C896]"
          ></textarea>
        </div>
      </div>

      <!-- Social & Open Graph -->
      <div className="bg-[#131D36] border border-white/10 rounded-2xl p-6 space-y-4 shadow-xl">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider text-[#7C5CFF]">Open Graph & Social Share Preview</h3>
        
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Social Share Image URL (og:image)</label>
          <input
            type="text"
            defaultValue="https://chrdkerala.org/assets/logo.png"
            className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#00C896]"
          />
        </div>
      </div>

    </form>
  );
}
