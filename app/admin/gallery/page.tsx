'use client';

import React, { useState } from 'react';
import { Upload, Image as ImageIcon, Trash2, Edit3, Eye, FolderPlus, CheckCircle2 } from 'lucide-react';

const mockGallery = [
  { id: '1', title: 'Montessori Apparatus Training Session', album: 'Teacher Training', category: 'Classroom', url: 'assets/hero-image.jpg', date: 'July 2026' },
  { id: '2', title: 'CHRD Official Academy Logo', album: 'Branding', category: 'Logos', url: 'assets/logo.png', date: 'July 2026' },
  { id: '3', title: 'Computer Software Lab Setup', album: 'Infrastructure', category: 'Campus', url: 'assets/hero-image.jpg', date: 'June 2026' },
  { id: '4', title: 'Student Graduation Convocation', album: 'Events', category: 'Ceremony', url: 'assets/hero-image.jpg', date: 'May 2026' },
];

export default function AdminGalleryPage() {
  const [uploading, setUploading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState('ALL');

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploading(true);
      setTimeout(() => {
        setUploading(false);
        setSuccessMsg(true);
        setTimeout(() => setSuccessMsg(false), 3000);
      }, 1500);
    }
  };

  return (
    <div className="space-y-8">
      
      <!-- Header -->
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Gallery CMS & Media Storage</h1>
          <p className="text-xs text-slate-400">Upload campus photos, album images, and manage public gallery content</p>
        </div>

        <div className="flex items-center gap-3">
          <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00C896] hover:bg-[#00A87E] text-white text-xs font-semibold shadow-lg shadow-[#00C896]/20 transition">
            <Upload className="w-4 h-4" />
            <span>{uploading ? 'Uploading to Supabase...' : 'Upload New Media'}</span>
            <input type="file" multiple accept="image/*" className="hidden" onChange={handleUpload} />
          </label>
        </div>
      </div>

      {successMsg && (
        <div className="p-4 rounded-xl bg-[#00C896]/15 border border-[#00C896]/30 text-[#00C896] text-sm flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <span>Image uploaded to Supabase Storage bucket. Public Gallery updated automatically.</span>
        </div>
      )}

      <!-- Drag and Drop Dropzone -->
      <div className="border-2 border-dashed border-white/10 hover:border-[#00C896] rounded-2xl p-8 text-center bg-[#131D36] transition cursor-pointer relative">
        <Upload className="w-10 h-10 text-[#00C896] mx-auto mb-3" />
        <div className="text-sm font-bold text-white mb-1">Drag and drop images here, or click to browse</div>
        <div className="text-xs text-slate-400">Supports JPG, PNG, WebP, SVG up to 10MB per file</div>
        <input type="file" multiple accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleUpload} />
      </div>

      <!-- Gallery Grid -->
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Current Gallery Items ({mockGallery.length})</h2>
          
          <select
            value={selectedAlbum}
            onChange={(e) => setSelectedAlbum(e.target.value)}
            className="bg-[#131D36] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#00C896]"
          >
            <option value="ALL">All Albums</option>
            <option value="Teacher Training">Teacher Training</option>
            <option value="Branding">Branding</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Events">Events</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockGallery.map((item) => (
            <div key={item.id} className="bg-[#131D36] border border-white/10 rounded-2xl overflow-hidden shadow-xl group">
              <div className="h-44 bg-[#0B1120] relative overflow-hidden flex items-center justify-center">
                <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <span className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-white">
                  {item.album}
                </span>
              </div>
              <div className="p-4 space-y-3">
                <div className="font-bold text-xs text-white line-clamp-1">{item.title}</div>
                <div className="text-[10px] text-slate-400">Uploaded {item.date}</div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <button onClick={() => alert(`Alt text editor for: ${item.title}`)} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => alert(`Deleting ${item.title}`)} className="p-1.5 text-slate-400 hover:text-red-400 rounded-lg">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
