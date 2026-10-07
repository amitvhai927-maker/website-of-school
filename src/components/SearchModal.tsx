import React, { useState, useMemo, useEffect } from 'react';
import { useSchool } from '../context/SchoolContext';
import { Search, X, Bell, Users, BookOpen, Calendar, Download, Trophy, ChevronRight } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    notices,
    teachers,
    programs,
    events,
    downloads,
    achievements,
    setSelectedNotice,
    setSelectedTeacher,
    lang,
    t,
  } = useSchool();

  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const list: Array<{
      id: string;
      title: string;
      type: 'Notice' | 'Teacher' | 'Program' | 'Event' | 'Download' | 'Achievement';
      subtitle: string;
      action: () => void;
    }> = [];

    // Search Notices
    notices.forEach((n) => {
      if (
        n.title.en.toLowerCase().includes(q) ||
        n.title.np.toLowerCase().includes(q) ||
        n.description.en.toLowerCase().includes(q) ||
        n.description.np.toLowerCase().includes(q)
      ) {
        list.push({
          id: n.id,
          title: n.title[lang],
          type: 'Notice',
          subtitle: `${n.category} · ${n.dateNepali}`,
          action: () => {
            setSelectedNotice(n);
            setIsSearchOpen(false);
          },
        });
      }
    });

    // Search Teachers
    teachers.forEach((tch) => {
      if (
        tch.name.en.toLowerCase().includes(q) ||
        tch.name.np.toLowerCase().includes(q) ||
        tch.subject.en.toLowerCase().includes(q) ||
        tch.subject.np.toLowerCase().includes(q)
      ) {
        list.push({
          id: tch.id,
          title: tch.name[lang],
          type: 'Teacher',
          subtitle: `${tch.designation[lang]} · ${tch.subject[lang]}`,
          action: () => {
            setSelectedTeacher(tch);
            setIsSearchOpen(false);
          },
        });
      }
    });

    // Search Programs
    programs.forEach((p) => {
      if (
        p.title.en.toLowerCase().includes(q) ||
        p.title.np.toLowerCase().includes(q) ||
        p.grades.toLowerCase().includes(q)
      ) {
        list.push({
          id: p.id,
          title: p.title[lang],
          type: 'Program',
          subtitle: `${p.level[lang]} · ${p.grades}`,
          action: () => {
            setIsSearchOpen(false);
            const el = document.querySelector('#programs');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
        });
      }
    });

    // Search Events
    events.forEach((ev) => {
      if (
        ev.title.en.toLowerCase().includes(q) ||
        ev.title.np.toLowerCase().includes(q) ||
        ev.description.en.toLowerCase().includes(q)
      ) {
        list.push({
          id: ev.id,
          title: ev.title[lang],
          type: 'Event',
          subtitle: `${ev.nepaliDate} · ${ev.location}`,
          action: () => {
            setIsSearchOpen(false);
            const el = document.querySelector('#events');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
        });
      }
    });

    // Search Downloads
    downloads.forEach((dl) => {
      if (
        dl.title.en.toLowerCase().includes(q) ||
        dl.title.np.toLowerCase().includes(q) ||
        dl.category.toLowerCase().includes(q)
      ) {
        list.push({
          id: dl.id,
          title: dl.title[lang],
          type: 'Download',
          subtitle: `${dl.category} · ${dl.fileSize}`,
          action: () => {
            setIsSearchOpen(false);
            const el = document.querySelector('#downloads');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
        });
      }
    });

    // Search Achievements
    achievements.forEach((ach) => {
      if (
        ach.title.en.toLowerCase().includes(q) ||
        ach.title.np.toLowerCase().includes(q)
      ) {
        list.push({
          id: ach.id,
          title: ach.title[lang],
          type: 'Achievement',
          subtitle: `${ach.year} · ${ach.category}`,
          action: () => {
            setIsSearchOpen(false);
            const el = document.querySelector('#achievements');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
        });
      }
    });

    return list;
  }, [
    query,
    notices,
    teachers,
    programs,
    events,
    downloads,
    achievements,
    lang,
    setSelectedNotice,
    setSelectedTeacher,
    setIsSearchOpen,
  ]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(
              'सूचना, शिक्षक, कार्यक्रम, क्यालेन्डर वा फारम खोज्नुहोस्...',
              'Search notices, teachers, programs, calendar or forms...'
            )}
            className="flex-1 bg-transparent text-sm sm:text-base text-slate-900 focus:outline-none placeholder:text-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="p-4 overflow-y-auto flex-1 divide-y divide-slate-100">
          {!query && (
            <div className="text-center py-10 text-slate-400 text-xs sm:text-sm">
              {t(
                'खोज्नका लागि केही अक्षरहरू टाइप गर्नुहोस् (जस्तै: भर्ना, विज्ञान, परीक्षा, क्यालेन्डर)',
                'Type keywords to search school records (e.g., Admission, Science, Routine, Exam)'
              )}
            </div>
          )}

          {query && results.length === 0 && (
            <div className="text-center py-10 text-slate-500 text-sm">
              {t('कुनै नतिजा फेला परेन।', 'No matching results found for: ')} "{query}"
            </div>
          )}

          {results.map((res) => {
            const isNotice = res.type === 'Notice';
            const isTeacher = res.type === 'Teacher';
            const isProg = res.type === 'Program';
            const isEvent = res.type === 'Event';
            const isDl = res.type === 'Download';

            return (
              <div
                key={`${res.type}-${res.id}`}
                onClick={res.action}
                className="py-3 px-2 flex items-center justify-between gap-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                    {isNotice && <Bell className="w-4 h-4" />}
                    {isTeacher && <Users className="w-4 h-4" />}
                    {isProg && <BookOpen className="w-4 h-4" />}
                    {isEvent && <Calendar className="w-4 h-4" />}
                    {isDl && <Download className="w-4 h-4" />}
                    {!isNotice && !isTeacher && !isProg && !isEvent && !isDl && (
                      <Trophy className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                      {res.type}
                    </span>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                      {res.title}
                    </h4>
                    <span className="text-[11px] text-slate-500">
                      {res.subtitle}
                    </span>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              </div>
            );
          })}
        </div>

        {/* Footer shortcuts hint */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex justify-between items-center">
          <span>{results.length} {t('नतिजाहरू फेला परे', 'items found')}</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
