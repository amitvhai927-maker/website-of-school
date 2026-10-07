import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { X, Calendar, Download, Printer, Tag, Pin, FileText } from 'lucide-react';
import { SchoolEmblem } from './SchoolEmblem';

export const NoticeDetailModal: React.FC = () => {
  const { selectedNotice, setSelectedNotice, lang, t, settings } = useSchool();

  if (!selectedNotice) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate simple printable file download or alert
    const noticeContent = `
OFFICIAL NOTICE - ${settings.schoolName[lang].toUpperCase()}
${settings.location[lang]}
-----------------------------------------------------------
Title: ${selectedNotice.title[lang]}
Date: ${selectedNotice.dateNepali} (${selectedNotice.date})
Category: ${selectedNotice.category}

${selectedNotice.description[lang]}

-----------------------------------------------------------
Issued by: Office of the Principal / Examination Committee
    `;
    const blob = new Blob([noticeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedNotice.fileName || 'Notice_' + selectedNotice.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <SchoolEmblem size={32} />
            <div>
              <div className="text-xs font-bold text-slate-900">{settings.schoolName[lang]}</div>
              <div className="text-[10px] text-slate-500">{t('आधिकारिक सूचना', 'Official Notice')}</div>
            </div>
          </div>
          <button
            onClick={() => setSelectedNotice(null)}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Metadata line (Anti-slop: clean unboxed metadata) */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pb-3 border-b border-slate-100">
            {selectedNotice.isPinned && (
              <>
                <span className="flex items-center gap-1 text-amber-600 font-semibold">
                  <Pin className="w-3.5 h-3.5 fill-amber-500" />
                  {t('प्रमुख सूचना', 'Pinned Notice')}
                </span>
                <span aria-hidden="true">·</span>
              </>
            )}
            <span className="flex items-center gap-1 font-medium text-blue-900">
              <Tag className="w-3.5 h-3.5" />
              {selectedNotice.category}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{selectedNotice.dateNepali} ({selectedNotice.date})</span>
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            {selectedNotice.title[lang]}
          </h2>

          {/* Description */}
          <div className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line bg-slate-50/60 p-4 rounded-lg border border-slate-100">
            {selectedNotice.description[lang]}
          </div>

          {/* Attached Document file box if available */}
          {selectedNotice.fileName && (
            <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-200/60 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">
                    {selectedNotice.fileName}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {selectedNotice.fileSize || 'Official PDF Document'}
                  </div>
                </div>
              </div>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-blue-900 text-white hover:bg-blue-800 transition-colors shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t('डाउनलोड', 'Download')}</span>
              </button>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs">
            <span className="text-slate-400">
              {t('गोडैता-८, सर्लाही प्रशासन', 'Godaita-8, Sarlahi Administration')}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{t('प्रिन्ट', 'Print')}</span>
              </button>
              <button
                onClick={() => setSelectedNotice(null)}
                className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-md transition-colors"
              >
                {t('बन्द गर्नुहोस्', 'Close')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
