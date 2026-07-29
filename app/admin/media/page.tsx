'use client';

import React, { useState } from 'react';
import { FolderKanban, Upload, FileText, Image as ImageIcon, Copy, CheckCircle2, Trash2 } from 'lucide-react';

const mockMedia = [
  { id: '1', name: 'CHRD-Official-Logo.png', type: 'image/png', size: '125 KB', url: '/assets/logo.png', folder: 'branding' },
  { id: '2', name: 'CHRD-Montessori-TTC-Syllabus.pdf', type: 'application/pdf', size: '2.4 MB', url: '/assets/brochure.pdf', folder: 'documents' },
  { id: '3', name: 'CHRD-Hero-Campus-Photo.jpg', type: 'image/jpeg', size: '125 KB', url: '/assets/hero-image.jpg', folder: 'homepage' },
];

export default function AdminMediaPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      
      <!-- Header -->
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Centralized Media Library</h1>
          <p className="text-xs text-slate-400">Manage brochures, PDFs, document downloads, and media assets</p>
        </div>

        <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00C896] hover:bg-[#00A87E] text-white text-xs font-semibold shadow-lg shadow-[#00C896]/20 transition">
          <Upload className="w-4 h-4" />
          <span>Upload File to Supabase</span>
          <input type="file" className="hidden" />
        </label>
      </div>

      <!-- Storage Usage Progress -->
      <div className="bg-[#131D36] border border-white/10 rounded-2xl p-6 shadow-xl space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
          <span>Supabase Storage Usage</span>
          <span className="text-[#00C896]">14.2 MB / 1000 MB (1.4% Used)</span>
        </div>
        <div className="w-full bg-[#0B1120] h-2.5 rounded-full overflow-hidden">
          <div className="bg-[#00C896] h-full rounded-full" style={{ width: '1.4%' }}></div>
        </div>
      </div>

      <!-- Media Grid -->
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockMedia.map((file) => (
          <div key={file.id} className="bg-[#131D36] border border-white/10 rounded-2xl p-5 shadow-xl space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00C896]">
                {file.type.includes('image') ? <ImageIcon className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-white truncate">{file.name}</div>
                <div className="text-[10px] text-slate-400">{file.size} • {file.folder}</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/5">
              <button
                onClick={() => copyUrl(file.id, file.url)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-200 transition"
              >
                {copiedId === file.id ? <CheckCircle2 className="w-3.5 h-3.5 text-[#00C896]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === file.id ? 'Copied!' : 'Copy URL'}</span>
              </button>

              <button onClick={() => alert(`Deleting file: ${file.name}`)} className="p-1.5 text-slate-400 hover:text-red-400 rounded-lg">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
