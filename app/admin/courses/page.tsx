'use client';

import React, { useState } from 'react';
import { GraduationCap, PlusCircle, Edit, Trash2, CheckCircle2, Star } from 'lucide-react';

const mockCourses = [
  { id: '1', title: 'Pre-Primary & Montessori TTC', duration: '1 Year', mode: 'Online / Offline', category: 'Teacher Training', fees: 'Contact Admissions', status: 'PUBLISHED', isFeatured: true },
  { id: '2', title: 'Digital Marketing Masterclass', duration: '3 Months', mode: 'Live Practical', category: 'Tech & Marketing', fees: 'Contact Admissions', status: 'PUBLISHED', isFeatured: true },
  { id: '3', title: 'Hospital Administration', duration: '6 Months', mode: 'Healthcare Admin', category: 'Healthcare', fees: 'Contact Admissions', status: 'PUBLISHED', isFeatured: true },
  { id: '4', title: 'Practical Accounting (Tally Prime & GST)', duration: '3 Months', mode: 'Lab Practice', category: 'Finance', fees: 'Contact Admissions', status: 'PUBLISHED', isFeatured: false },
];

export default function AdminCoursesPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-6">
      
      <!-- Top Action Bar -->
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Course Management</h1>
          <p className="text-xs text-slate-400">Add, edit, or toggle admissions for diploma & certificate courses</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00C896] hover:bg-[#00A87E] text-white text-xs font-semibold shadow-lg shadow-[#00C896]/20 transition"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Add New Course Program</span>
        </button>
      </div>

      <!-- Course Data Cards -->
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockCourses.map((course) => (
          <div key={course.id} className="bg-[#131D36] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4 relative">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00C896] px-2.5 py-1 rounded-full bg-[#00C896]/10 border border-[#00C896]/30">
                  {course.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-2">{course.title}</h3>
              </div>

              {course.isFeatured && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-full">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>Featured</span>
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs bg-[#0B1120] p-3 rounded-xl border border-white/5">
              <div>
                <div className="text-[10px] text-slate-500 font-semibold">DURATION</div>
                <div className="font-bold text-slate-200">{course.duration}</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-semibold">LEARNING MODE</div>
                <div className="font-bold text-slate-200">{course.mode}</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-semibold">FEES STRUCTURE</div>
                <div className="font-bold text-[#00C896]">{course.fees}</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
              <span className="inline-flex items-center gap-1.5 text-[#00C896] font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Admissions Open</span>
              </span>

              <div className="flex items-center gap-2">
                <button onClick={() => alert(`Editing course: ${course.title}`)} className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-lg">
                  <Edit className="w-4 h-4" />
                </button>
                <button onClick={() => alert(`Deleting course: ${course.title}`)} className="p-2 text-slate-400 hover:text-red-400 bg-white/5 rounded-lg">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
