import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { Download, FileText, Calendar, Tag, Search } from 'lucide-react';

export const DownloadCenter: React.FC = () => {
  const { downloads, lang, t, settings } = useSchool();
  const [catFilter, setCatFilter] = useState<string>('All');

  const categories = ['All', 'Admission', 'Calendar', 'Curriculum', 'Rules', 'Exam'];

  const filtered = downloads.filter((d) => {
    if (catFilter === 'All') return true;
    return d.category === catFilter;
  });

  const handleDownload = (item: typeof downloads[0]) => {
    const content = `
SHREE BENI BHOLA MODEL SECONDARY SCHOOL
Godaita-8, Sarlahi, Madhesh Province, Nepal
Estd. 2004 B.S.
===================================================
Document: ${item.title[lang]}
Category: ${item.category}
Date of Release: ${item.date}
Format: ${item.fileType}
Size: ${item.fileSize}
===================================================
Official downloadable institutional record.
Office of the Principal / Administration.
    `;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${item.title.en.replace(/\s+/g, '_')}.${item.fileType.toLowerCase()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="downloads" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5 mb-1.5">
              <Download className="w-3.5 h-3.5" />
              <span>{t('डाउनलोड केन्द्र', 'Official Resource & Download Center')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {t('फारम, क्यालेन्डर तथा पाठ्यक्रम डाउनलोड', 'School Forms & Academic Publications')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1">
              {t('भर्ना फारम, शैक्षिक क्यालेन्डर, आचारसंहिता तथा नमूना प्रश्नपत्रहरू।', 'Download official forms, examination routines, and school handbooks.')}
            </p>
          </div>

          <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-slate-200 overflow-x-auto">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCatFilter(c)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  catFilter === c
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {c === 'All' ? t('सबै', 'All') : c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-5 border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-lg bg-red-50 text-red-700 border border-red-100 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-1">
                    <span className="font-semibold text-blue-900">{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{item.date}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{item.fileSize}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {item.title[lang]}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => handleDownload(item)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors shrink-0 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t('डाउनलोड', 'Download')}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
