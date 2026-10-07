import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { Trophy, Award, Medal, Star, Calendar } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const { achievements, lang, t } = useSchool();
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Model School', 'SEE / Board', 'Sports', 'Faculty'];

  const filtered = achievements.filter((item) => {
    if (filter === 'All') return true;
    return item.category === filter;
  });

  return (
    <section id="achievements" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5 mb-1.5">
              <Trophy className="w-3.5 h-3.5" />
              <span>{t('हाम्रा ऐतिहासिक गौरवहरू', 'Institutional Distinctions & Honors')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {t('उत्कृष्टता र सफलताका ऐतिहासिक उपलब्धिहरू', 'Milestones & Key Achievements')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1">
              {t('शैक्षिक नतिजा, खेलकुद तथा नमूना विद्यालय स्तरोन्नतिका गौरवपूर्ण क्षणहरू।', 'Celebrating board merits, athletic shields, and national recognition.')}
            </p>
          </div>

          <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-slate-200 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  filter === cat
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? t('सबै', 'All') : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-blue-900 flex items-center gap-1">
                    <Medal className="w-3.5 h-3.5 text-amber-500" />
                    <span>{item.category}</span>
                  </span>
                  <span className="flex items-center gap-1 font-medium tabular-nums">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{item.year}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2">
                  {item.title[lang]}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description[lang]}
                </p>
              </div>

              {item.badgeText && (
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{t('मान्यता', 'Status')}</span>
                  <span className="font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                    {item.badgeText}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
