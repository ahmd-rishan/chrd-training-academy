'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PlusCircle, Search, Filter, Edit, Trash2, Eye, FileText, CheckCircle2, Clock } from 'lucide-react';

const mockBlogs = [
  {
    id: '1',
    title: 'How Early Childhood Teacher Training is Shaping Modern Education in Kerala',
    category: 'Teaching & Training',
    status: 'PUBLISHED',
    author: 'CHRD Academic Team',
    date: 'July 28, 2026',
    views: 420
  },
  {
    id: '2',
    title: 'Top 5 Digital Marketing Skills Employers Are Looking For in 2026',
    category: 'Digital Skills',
    status: 'PUBLISHED',
    author: 'CHRD Mentor',
    date: 'July 22, 2026',
    views: 310
  },
  {
    id: '3',
    title: 'Career Opportunities in Hospital Administration Across Kerala & GCC',
    category: 'Healthcare',
    status: 'PUBLISHED',
    author: 'Admin Faculty',
    date: 'July 18, 2026',
    views: 280
  },
  {
    id: '4',
    title: 'Why Practical Tally Prime & GST Training is Essential for Accountants',
    category: 'Career Guidance',
    status: 'DRAFT',
    author: 'Finance Faculty',
    date: 'July 10, 2026',
    views: 0
  }
];

export default function AdminBlogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredBlogs = mockBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      
      <!-- Top Action Bar -->
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Blog CMS Manager</h1>
          <p className="text-xs text-slate-400">Create, edit, schedule, and publish news and career guides</p>
        </div>

        <Link
          href="/admin/blogs/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00C896] hover:bg-[#00A87E] text-white text-xs font-semibold shadow-lg shadow-[#00C896]/20 transition"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Write New Article</span>
        </Link>
      </div>

      <!-- Filters & Search Toolbar -->
      <div className="bg-[#131D36] border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filter articles by title..."
            className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00C896]"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-[#0B1120] border border-white/10 rounded-xl py-2 px-3 text-xs text-slate-200 focus:outline-none focus:border-[#00C896]"
          >
            <option value="ALL">All Categories</option>
            <option value="Teaching & Training">Teaching & Training</option>
            <option value="Digital Skills">Digital Skills</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Career Guidance">Career Guidance</option>
          </select>
        </div>
      </div>

      <!-- Blogs Data Table -->
      <div className="bg-[#131D36] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0B1120] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/10">
              <tr>
                <th className="py-3.5 px-6">Article Title</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Author</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-200">
              {filteredBlogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-white/5 transition">
                  <td className="py-4 px-6 font-semibold text-white max-w-md">
                    <div className="truncate">{blog.title}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px]">
                      {blog.category}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      blog.status === 'PUBLISHED'
                        ? 'bg-[#00C896]/15 text-[#00C896] border border-[#00C896]/30'
                        : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    }`}>
                      {blog.status === 'PUBLISHED' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                      <span>{blog.status}</span>
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-400">{blog.author}</td>
                  <td className="py-4 px-4 text-slate-400">{blog.date}</td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href="/blog-detail.html"
                        target="_blank"
                        className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition"
                        title="Preview Public Page"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/admin/blogs/new?id=${blog.id}`}
                        className="p-2 text-slate-400 hover:text-[#00C896] hover:bg-white/10 rounded-lg transition"
                        title="Edit Article"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => alert(`Deleted blog ID: ${blog.id}`)}
                        className="p-2 text-slate-400 hover:text-red-400 hover:bg-white/10 rounded-lg transition"
                        title="Delete Article"
                      >
                        <Trash2 className="w-4 h-4" />
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
