'use client';

import React, { useState } from 'react';
import { Users, UserPlus, Shield, CheckCircle2, Trash2, Edit } from 'lucide-react';

const mockUsers = [
  { id: '1', name: 'Super Admin', email: 'admin@chrdkerala.org', role: 'SUPER_ADMIN', date: 'July 2026' },
  { id: '2', name: 'Academic Director', email: 'director@chrdkerala.org', role: 'ADMIN', date: 'July 2026' },
  { id: '3', name: 'Content Editor', email: 'editor@chrdkerala.org', role: 'EDITOR', date: 'July 2026' },
];

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      
      <!-- Top Action Bar -->
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">User & Role Management</h1>
          <p className="text-xs text-slate-400">Manage administrator access, roles (Super Admin, Admin, Editor), and permissions</p>
        </div>

        <button
          onClick={() => alert('Add User Modal')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00C896] hover:bg-[#00A87E] text-white text-xs font-semibold shadow-lg shadow-[#00C896]/20 transition"
        >
          <UserPlus className="w-4 h-4" />
          <span>Invite New Administrator</span>
        </button>
      </div>

      <!-- Users Table -->
      <div className="bg-[#131D36] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0B1120] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/10">
              <tr>
                <th className="py-3.5 px-6">User Name</th>
                <th className="py-3.5 px-4">Email Address</th>
                <th className="py-3.5 px-4">Assigned Role</th>
                <th className="py-3.5 px-4">Joined Date</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-200">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-white/5 transition">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7C5CFF]/20 text-[#7C5CFF] font-bold flex items-center justify-center">
                      {user.name[0]}
                    </div>
                    <span>{user.name}</span>
                  </td>
                  <td className="py-4 px-4 text-slate-300">{user.email}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      user.role === 'SUPER_ADMIN'
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : user.role === 'ADMIN'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-400">{user.date}</td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => alert(`Edit user: ${user.name}`)} className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-lg">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
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
