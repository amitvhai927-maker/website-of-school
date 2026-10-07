import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { Notice } from '../types';
import { Bell, Calendar, Pin, Download, ArrowRight, FileText, ChevronRight } from 'lucide-react';

export const NoticeBoard: React.FC = () => {
  const { notices, setSelectedNotice, lang, t } = useSchool();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = ['All', 'Academic', 'Exam', 'Admission', 'Holiday'];

  const filteredNotices = notices.filter((notice) => {
    if (selectedCategory === 'All') return true;
    return notice.category === selectedCategory;
  });

  const displayedNotices = showAll ? filteredNotices : filteredNotices.slice(0, 4);

  return (
    <section id="notices" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5 mb-1.5">
              <Bell className="w-3.5 h-3.5" />
              <span>{t('आधिकारिक सूचना पाटी', 'Official Notice Board')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {t('महत्वपूर्ण सूचना तथा जानकारी', 'Latest Notices & Announcements')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1">
              {t('विद्यालयका परीक्षा, भर्ना, बिदा र कार्यक्रम सम्बन्धी सूचनाहरू', 'Timely announcements on exams, admissions, holidays and administrative notices.')}
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-lg border border-slate-200 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat === 'All' ? t('सबै सूचना', 'All') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayedNotices.map((notice) => (
            <div
              key={notice.id}
              onClick={() => setSelectedNotice(notice)}
              className={`group bg-white rounded-xl p-5 sm:p-6 border transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col justify-between ${
                notice.isPinned
                  ? 'border-amber-300/80 bg-amber-50/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                {/* Notice Metadata (Anti-slop: clean unboxed metadata) */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  {notice.isPinned && (
                    <>
                      <span className="flex items-center gap-1 text-amber-600 font-semibold">
                        <Pin className="w-3.5 h-3.5 fill-amber-500" />
                        <span>{t('पिन गरिएको', 'Pinned')}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                    </>
                  )}
                  <span className="font-medium text-blue-900">{notice.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{notice.dateNepali}</span>
                  </span>
                </div>

                {/* Notice Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug mb-2 line-clamp-2">
                  {notice.title[lang]}
                </h3>

                {/* Description Snippet */}
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  {notice.description[lang]}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100 text-xs">
                {notice.fileName ? (
                  <span className="flex items-center gap-1 text-slate-500 font-medium truncate max-w-[200px]">
                    <FileText className="w-3.5 h-3.5 text-blue-900 shrink-0" />
                    <span className="truncate">{notice.fileName}</span>
                  </span>
                ) : (
                  <span className="text-slate-400">{t('विस्तृत विवरण', 'Full notice')}</span>
                )}

                <span className="inline-flex items-center gap-1 font-semibold text-blue-900 group-hover:translate-x-0.5 transition-transform">
                  <span>{t('विस्तृत हेर्नुहोस्', 'Read More')}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Toggle Button */}
        {filteredNotices.length > 4 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-sm transition-colors"
            >
              <span>{showAll ? t('कम सूचना देखाउनुहोस्', 'Show Less') : t('सबै सूचनाहरू हेर्नुहोस्', 'View All Notices')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
