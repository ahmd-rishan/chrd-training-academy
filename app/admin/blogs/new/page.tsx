'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Eye, Sparkles, Upload, FileText, CheckCircle2 } from 'lucide-react';

export default function NewBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('Teaching & Training');
  const [status, setStatus] = useState('PUBLISHED');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [metaDesc, setMetaDesc] = useState('');
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
    if (!seoTitle) setSeoTitle(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSuccessMsg(true);
      setTimeout(() => {
        router.push('/admin/blogs');
      }, 1200);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-5xl mx-auto pb-12">
      
      <!-- Top Action Bar -->
      <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blogs"
            className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-xl transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-extrabold text-white">Create New Article</h1>
            <p className="text-xs text-slate-400">Compose and publish articles to the public blog</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-[#131D36] border border-white/10 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-[#00C896]"
          >
            <option value="DRAFT">Save as Draft</option>
            <option value="PUBLISHED">Publish Immediately</option>
            <option value="SCHEDULED">Schedule Post</option>
          </select>

          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00C896] hover:bg-[#00A87E] text-white text-xs font-semibold shadow-lg shadow-[#00C896]/20 transition disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Publishing...' : 'Save & Publish'}</span>
          </button>
        </div>
      </div>

      {successMsg && (
        <div className="p-4 rounded-xl bg-[#00C896]/15 border border-[#00C896]/30 text-[#00C896] text-sm flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <span>Article published successfully! Synchronized with public website.</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Left 2 Cols: Main Content Editor -->
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-[#131D36] border border-white/10 rounded-2xl p-6 space-y-5 shadow-xl">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Article Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. Modern Early Childhood Education Trends in Kerala"
                className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-3 px-4 text-white text-base font-semibold focus:outline-none focus:border-[#00C896]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                URL Slug
              </label>
              <div className="flex items-center bg-[#0B1120] border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-400">
                <span className="text-slate-500">https://chrdkerala.org/blog/</span>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="bg-transparent text-white font-medium focus:outline-none flex-1 ml-1"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Short Excerpt / Summary
              </label>
              <textarea
                rows={3}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="A concise description displayed on blog post cards..."
                className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-[#00C896]"
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Article Body Content (Rich Text)
              </label>
              <div className="border border-white/10 rounded-xl overflow-hidden bg-[#0B1120]">
                <div className="bg-[#1B2645] border-b border-white/10 p-2 flex items-center gap-2 text-xs text-slate-300">
                  <button type="button" className="px-2 py-1 rounded bg-white/10 font-bold hover:bg-white/20">B</button>
                  <button type="button" className="px-2 py-1 rounded bg-white/10 italic hover:bg-white/20">I</button>
                  <button type="button" className="px-2 py-1 rounded bg-white/10 underline hover:bg-white/20">U</button>
                  <button type="button" className="px-2 py-1 rounded bg-white/10 hover:bg-white/20">H2</button>
                  <button type="button" className="px-2 py-1 rounded bg-white/10 hover:bg-white/20">Quote</button>
                </div>
                <textarea
                  rows={12}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write complete article text here..."
                  className="w-full bg-transparent p-4 text-sm text-slate-200 focus:outline-none"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- SEO Panel -->
          <div className="bg-[#131D36] border border-white/10 rounded-2xl p-6 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
              <Sparkles className="w-4 h-4 text-[#00C896]" />
              <span>SEO & Meta Configuration</span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">SEO Title Tag</label>
              <input
                type="text"
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-[#00C896]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Meta Description</label>
              <textarea
                rows={2}
                value={metaDesc}
                onChange={(e) => setMetaDesc(e.target.value)}
                placeholder="Meta description for search engine indexers..."
                className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-[#00C896]"
              ></textarea>
            </div>
          </div>

        </div>

        <!-- Right Col: Metadata Sidebar -->
        <div className="space-y-6">
          
          <div className="bg-[#131D36] border border-white/10 rounded-2xl p-6 space-y-5 shadow-xl">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-2.5 px-3 text-xs font-semibold text-white focus:outline-none focus:border-[#00C896]"
              >
                <option value="Teaching & Training">Teaching & Training</option>
                <option value="Digital Skills">Digital Skills</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Career Guidance">Career Guidance</option>
                <option value="Academy News">Academy News</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Featured Cover Image
              </label>
              <div className="border-2 border-dashed border-white/10 hover:border-[#00C896] rounded-2xl p-6 text-center bg-[#0B1120] transition cursor-pointer">
                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <div className="text-xs font-semibold text-slate-200">Click to upload cover photo</div>
                <div className="text-[10px] text-slate-500 mt-1">PNG, JPG, WebP up to 5MB</div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Author Tag
              </label>
              <input
                type="text"
                defaultValue="CHRD Academic Team"
                className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-[#00C896]"
              />
            </div>
          </div>

        </div>

      </div>

    </form>
  );
}
