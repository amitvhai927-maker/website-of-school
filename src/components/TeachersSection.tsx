import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { Teacher } from '../types';
import { Users, Search, GraduationCap, ChevronRight, Mail, Phone } from 'lucide-react';

export const TeachersSection: React.FC = () => {
  const { teachers, setSelectedTeacher, lang, t } = useSchool();
  const [departmentFilter, setDepartmentFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const departments = ['All', 'Administration', 'Secondary', 'Lower Secondary', 'Primary'];

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesDept = departmentFilter === 'All' || teacher.department === departmentFilter;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesDept;

    const matchesName =
      teacher.name.en.toLowerCase().includes(q) ||
      teacher.name.np.toLowerCase().includes(q) ||
      teacher.subject.en.toLowerCase().includes(q) ||
      teacher.subject.np.toLowerCase().includes(q);

    return matchesDept && matchesName;
  });

  return (
    <section id="teachers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5 mb-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>{t('हाम्रा शिक्षक तथा कर्मचारीहरू', 'Our Faculty & Administrative Staff')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {t('दक्ष, अनुभवी र समर्पित शिक्षक मण्डली', 'Experienced Educators & Mentors')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1">
              {t('विद्यार्थीको चौतर्फी विकास र उच्च शैक्षिक नतिजाका लागि प्रतिबद्ध शिक्षकहरू।', 'Nurturing curiosity, intellect and character in every young scholar.')}
            </p>
          </div>

          {/* Controls: Search and Department Tabs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('शिक्षक वा विषय खोज्नुहोस्...', 'Search teacher or subject...')}
                className="pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 w-full sm:w-56"
              />
            </div>

            {/* Department Filter Tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setDepartmentFilter(dept)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                    departmentFilter === dept
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {dept === 'All' ? t('सबै', 'All') : dept}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Teachers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              onClick={() => setSelectedTeacher(teacher)}
              className="bg-white rounded-xl border border-slate-200/90 hover:border-blue-900/40 p-5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Photo frame */}
                <div className="w-full aspect-square rounded-lg overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                  <img
                    src={teacher.photo}
                    alt={teacher.name[lang]}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider mb-1">
                  {teacher.department}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                  {teacher.name[lang]}
                </h3>

                <p className="text-xs text-blue-900 font-medium mt-0.5">
                  {teacher.designation[lang]}
                </p>

                <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                  {teacher.subject[lang]}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900">
                <span>{t('विवरण हेर्नुहोस्', 'View Profile')}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {filteredTeachers.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            {t('कुनै शिक्षक फेला परेन।', 'No faculty members match your search criteria.')}
          </div>
        )}
      </div>
    </section>
  );
};
