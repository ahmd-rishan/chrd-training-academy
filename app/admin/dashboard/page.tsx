'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileText,
  Image as ImageIcon,
  GraduationCap,
  Mail,
  PlusCircle,
  Upload,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  TrendingUp,
  UserCheck
} from 'lucide-react';

export default function AdminDashboardPage() {
  const stats = [
    { title: 'Published Blogs', value: '24', change: '+12% this month', icon: FileText, color: 'from-emerald-500/20 to-emerald-500/5', border: 'border-[#00C896]/30', text: 'text-[#00C896]' },
    { title: 'Gallery Images', value: '148', change: '8 Albums active', icon: ImageIcon, color: 'from-purple-500/20 to-purple-500/5', border: 'border-[#7C5CFF]/30', text: 'text-[#7C5CFF]' },
    { title: 'Active Courses', value: '11', change: '100% Enrollment', icon: GraduationCap, color: 'from-blue-500/20 to-blue-500/5', border: 'border-blue-500/30', text: 'text-blue-400' },
    { title: 'Contact Messages', value: '56', change: '12 Unread inquiries', icon: Mail, color: 'from-amber-500/20 to-amber-500/5', border: 'border-amber-500/30', text: 'text-amber-400' },
  ];

  const recentContacts = [
    { name: 'Anjali Nair', course: 'Pre-Primary Montessori TTC', phone: '+91 98765 43210', date: '10 mins ago', status: 'Unread' },
    { name: 'Rahul V', course: 'Digital Marketing Masterclass', phone: '+91 97450 11223', date: '1 hour ago', status: 'Unread' },
    { name: 'Fathima K', course: 'Hospital Administration', phone: '+91 96330 99887', date: '3 hours ago', status: 'Read' },
  ];

  return (
    <div className="space-y-8">
      
      <!-- Welcome Banner Card -->
      <div className="bg-gradient-to-r from-[#131D36] via-[#1B2645] to-[#131D36] border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C896]/10 text-[#00C896] border border-[#00C896]/30 text-xs font-semibold mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>ISO 9001:2015 Certified Portal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            Welcome to CHRD CMS Dashboard
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Manage your courses, publish news & blog guides, organize campus gallery photos, and view student admissions inquiries seamlessly.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/blogs/new"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00C896] hover:bg-[#00A87E] text-white text-xs font-semibold shadow-lg shadow-[#00C896]/20 transition"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Create New Article</span>
            </Link>

            <Link
              href="/admin/gallery"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 transition"
            >
              <Upload className="w-4 h-4" />
              <span>Upload Gallery Media</span>
            </Link>
          </div>
        </div>
      </div>

      <!-- Stats Grid -->
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className={`bg-gradient-to-b ${stat.color} bg-[#131D36] border ${stat.border} rounded-2xl p-5 shadow-lg transition hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-400">{stat.title}</span>
                <div className={`p-2.5 rounded-xl bg-white/5 ${stat.text}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-400 font-medium">{stat.change}</div>
            </div>
          );
        })}
      </div>

      <!-- Main Activity Split -->
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Left 2 Cols: Recent Submissions -->
        <div className="lg:col-span-2 bg-[#131D36] border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-white">Latest Admission Inquiries</h2>
              <p className="text-xs text-slate-400">Student submissions from website contact form</p>
            </div>
            <Link href="/admin/contact-forms" className="text-xs font-semibold text-[#00C896] hover:underline flex items-center gap-1">
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {recentContacts.map((contact, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0B1120] border border-white/5 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00C896]/15 text-[#00C896] font-bold text-sm flex items-center justify-center">
                    {contact.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{contact.name}</div>
                    <div className="text-xs text-slate-400">{contact.course} • {contact.phone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    contact.status === 'Unread' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-slate-700/50 text-slate-300'
                  }`}>
                    {contact.status}
                  </span>
                  <span className="text-xs text-slate-500">{contact.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <!-- Right Col: Quick Status & Health -->
        <div className="bg-[#131D36] border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-white mb-4">System Status</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#0B1120] border border-white/5">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00C896]" />
                  <span>Public Website Vercel Sync</span>
                </div>
                <span className="text-xs font-bold text-[#00C896]">Live</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#0B1120] border border-white/5">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <UserCheck className="w-4 h-4 text-[#7C5CFF]" />
                  <span>Supabase Database Connection</span>
                </div>
                <span className="text-xs font-bold text-[#7C5CFF]">Active</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#0B1120] border border-white/5">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Supabase Storage Quota</span>
                </div>
                <span className="text-xs font-bold text-blue-400">12% Used</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-center">
            <Link href="/admin/settings" className="text-xs font-semibold text-slate-400 hover:text-white transition">
              Manage System Settings & API Keys →
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
