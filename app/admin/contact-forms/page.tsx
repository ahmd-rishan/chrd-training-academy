'use client';

import React, { useState } from 'react';
import { Mail, Download, Search, CheckCircle2, Archive, Trash2, Eye } from 'lucide-react';

const mockSubmissions = [
  { id: '1', name: 'Anjali Nair', email: 'anjali@example.com', phone: '+91 98765 43210', course: 'Montessori TTC', message: 'I would like to know about the upcoming weekend batch fee structure and syllabus.', date: 'July 29, 2026', status: 'UNREAD' },
  { id: '2', name: 'Rahul V', email: 'rahul@example.com', phone: '+91 97450 11223', course: 'Digital Marketing', message: 'Interested in live campaign advertising projects and placement assistance.', date: 'July 28, 2026', status: 'UNREAD' },
  { id: '3', name: 'Fathima K', email: 'fathima@example.com', phone: '+91 96330 99887', course: 'Hospital Administration', message: 'Is there online guidance available for hospital billing modules?', date: 'July 27, 2026', status: 'READ' },
];

export default function AdminContactFormsPage() {
  const [selectedSub, setSelectedSub] = useState<typeof mockSubmissions[0] | null>(null);

  const exportCSV = () => {
    const headers = ['ID,Name,Email,Phone,Course Interest,Date,Status\n'];
    const rows = mockSubmissions.map(s => `${s.id},"${s.name}","${s.email}","${s.phone}","${s.course}","${s.date}","${s.status}"\n`);
    const blob = new Blob([...headers, ...rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chrd-contact-submissions-${Date.now()}.csv`;
    a.click();
  };

  return (
    <div className="space-y-6">
      
      <!-- Top Action Bar -->
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Contact Submissions Inbox</h1>
          <p className="text-xs text-slate-400">View and respond to student inquiries from the public website</p>
        </div>

        <button
          onClick={exportCSV}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 transition"
        >
          <Download className="w-4 h-4" />
          <span>Export All Submissions (CSV)</span>
        </button>
      </div>

      <!-- Table Container -->
      <div className="bg-[#131D36] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0B1120] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/10">
              <tr>
                <th className="py-3.5 px-6">Student Name</th>
                <th className="py-3.5 px-4">Contact Info</th>
                <th className="py-3.5 px-4">Course Interest</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-200">
              {mockSubmissions.map((sub) => (
                <tr key={sub.id} className="hover:bg-white/5 transition">
                  <td className="py-4 px-6 font-bold text-white">
                    {sub.name}
                  </td>
                  <td className="py-4 px-4 text-slate-300">
                    <div>{sub.phone}</div>
                    <div className="text-[11px] text-slate-500">{sub.email}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2.5 py-1 rounded-full bg-[#00C896]/10 text-[#00C896] border border-[#00C896]/30 font-semibold text-[11px]">
                      {sub.course}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-400">{sub.date}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      sub.status === 'UNREAD' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-slate-700/50 text-slate-300'
                    }`}>
                      {sub.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => setSelectedSub(sub)}
                      className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-lg transition"
                      title="View Message"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Message Details Drawer Modal -->
      {selectedSub && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#131D36] border border-white/10 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white">Inquiry Details</h3>
              <button onClick={() => setSelectedSub(null)} className="text-slate-400 hover:text-white text-sm">✕</button>
            </div>

            <div className="space-y-2 text-xs">
              <div><strong className="text-slate-400">Student:</strong> <span className="text-white font-semibold">{selectedSub.name}</span></div>
              <div><strong className="text-slate-400">Phone:</strong> <span className="text-white">{selectedSub.phone}</span></div>
              <div><strong className="text-slate-400">Email:</strong> <span className="text-white">{selectedSub.email}</span></div>
              <div><strong className="text-slate-400">Course Interest:</strong> <span className="text-[#00C896] font-bold">{selectedSub.course}</span></div>
            </div>

            <div className="bg-[#0B1120] p-4 rounded-xl border border-white/10 text-xs text-slate-200">
              <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Message</div>
              <p className="leading-relaxed">{selectedSub.message}</p>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <a
                href={`https://wa.me/${selectedSub.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedSub.name)},%20thank%20you%20for%20contacting%20CHRD%20Training%20Academy.`}
                target="_blank"
                className="px-4 py-2 bg-[#25D366] text-white text-xs font-semibold rounded-xl hover:opacity-90 transition"
              >
                Reply on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
