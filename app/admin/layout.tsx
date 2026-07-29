'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Image as ImageIcon,
  GraduationCap,
  Mail,
  FolderKanban,
  Search,
  Settings,
  Users,
  LogOut,
  Bell,
  Menu,
  X,
  Sparkles,
  Layers,
  SlidersHorizontal
} from 'lucide-react';

const sidebarNavItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Blogs & Articles', href: '/admin/blogs', icon: FileText },
  { name: 'Gallery CMS', href: '/admin/gallery', icon: ImageIcon },
  { name: 'Course Programs', href: '/admin/courses', icon: GraduationCap },
  { name: 'Contact Submissions', href: '/admin/contact-forms', icon: Mail },
  { name: 'Media Library', href: '/admin/media', icon: FolderKanban },
  { name: 'Page Editor', href: '/admin/pages', icon: Layers },
  { name: 'SEO Management', href: '/admin/seo', icon: SlidersHorizontal },
  { name: 'User & Roles', href: '/admin/users', icon: Users },
  { name: 'Website Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex">

      <!-- Sidebar Navigation (Desktop) -->
      <aside className="hidden lg:flex flex-col w-64 bg-[#131D36] border-r border-white/10 p-5 sticky top-0 h-screen z-30">
        <div className="flex items-center gap-3 mb-8 px-2">
          <img src="/assets/logo.png" alt="CHRD Logo" className="w-9 h-9 rounded-full bg-white p-0.5" />
          <div>
            <div className="font-bold text-sm tracking-tight text-white">CHRD ADMIN</div>
            <div className="text-[10px] text-[#00C896] font-semibold uppercase tracking-wider">Super Admin Portal</div>
          </div>
        </div>

        <nav className="flex-1 space-y-1.5 overflow-y-auto pr-1">
          {sidebarNavItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                  isActive
                    ? 'bg-[#00C896] text-white shadow-md shadow-[#00C896]/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <!-- User Badge & Logout -->
        <div className="pt-4 border-t border-white/10 mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#7C5CFF] text-white font-bold text-xs flex items-center justify-center">
              SA
            </div>
            <div>
              <div className="text-xs font-bold text-white">Super Admin</div>
              <div className="text-[10px] text-slate-400">admin@chrdkerala.org</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            title="Logout"
            className="p-2 text-slate-400 hover:text-red-400 hover:bg-white/5 rounded-lg transition"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      <!-- Main Content Area -->
      <div className="flex-1 flex flex-col min-w-0">

        <!-- Top Header Bar -->
        <header className="h-16 bg-[#131D36]/80 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-20">
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="relative hidden sm:block w-72">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Global search (Blogs, Courses, Submissions...)"
                className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00C896]"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2.5 text-slate-400 hover:text-white bg-white/5 rounded-xl border border-white/5 relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#00C896]"></span>
            </button>

            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#00C896] bg-[#00C896]/10 border border-[#00C896]/30 hover:bg-[#00C896]/20 transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>View Public Website</span>
            </Link>
          </div>
        </header>

        <!-- Mobile Drawer -->
        {mobileOpen && (
          <div className="lg:hidden bg-[#131D36] border-b border-white/10 p-4 space-y-2">
            {sidebarNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:bg-white/5"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        )}

        <!-- Main Page Content -->
        <main className="p-4 sm:p-8 flex-1 overflow-x-hidden">
          {children}
        </main>
      </div>

    </div>
  );
}
