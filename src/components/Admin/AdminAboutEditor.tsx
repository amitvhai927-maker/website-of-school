import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Save } from 'lucide-react';

export const AdminAboutEditor: React.FC = () => {
  const { aboutSchool, updateAboutSchool, lang, t } = useSchool();

  const [form, setForm] = useState({
    introEn: aboutSchool.introduction.en,
    introNp: aboutSchool.introduction.np,
    histEn: aboutSchool.history.en,
    histNp: aboutSchool.history.np,
    visionEn: aboutSchool.vision.en,
    visionNp: aboutSchool.vision.np,
    missionEn: aboutSchool.mission.en,
    missionNp: aboutSchool.mission.np,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateAboutSchool({
      introduction: { en: form.introEn, np: form.introNp },
      history: { en: form.histEn, np: form.histNp },
      vision: { en: form.visionEn, np: form.visionNp },
      mission: { en: form.missionEn, np: form.missionNp },
    });
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/90 shadow-sm max-w-4xl space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-lg font-bold text-slate-900">
          {t('हाम्रो बारेमा र दृष्टिकोण सम्पादन', 'About School, History, Vision & Mission')}
        </h2>
        <p className="text-xs text-slate-500">
          {t('विद्यालयको ऐतिहासिक पृष्ठभूमि र उद्देश्यहरू अद्यावधिक गर्नुहोस्।', 'Edit institutional narrative, founding heritage and strategic mission.')}
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-5 text-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Introduction (English)
            </label>
            <textarea
              rows={4}
              value={form.introEn}
              onChange={(e) => setForm({ ...form, introEn: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900 leading-relaxed"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              विद्यालय परिचय (नेपालीमा)
            </label>
            <textarea
              rows={4}
              value={form.introNp}
              onChange={(e) => setForm({ ...form, introNp: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900 leading-relaxed"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              History & Heritage (English)
            </label>
            <textarea
              rows={4}
              value={form.histEn}
              onChange={(e) => setForm({ ...form, histEn: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900 leading-relaxed"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              ऐतिहासिक पृष्ठभूमि (नेपालीमा)
            </label>
            <textarea
              rows={4}
              value={form.histNp}
              onChange={(e) => setForm({ ...form, histNp: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900 leading-relaxed"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Vision Statement (English)
            </label>
            <textarea
              rows={3}
              value={form.visionEn}
              onChange={(e) => setForm({ ...form, visionEn: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900 leading-relaxed"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              दूरदृष्टि (Vision - नेपालीमा)
            </label>
            <textarea
              rows={3}
              value={form.visionNp}
              onChange={(e) => setForm({ ...form, visionNp: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900 leading-relaxed"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Mission Statement (English)
            </label>
            <textarea
              rows={3}
              value={form.missionEn}
              onChange={(e) => setForm({ ...form, missionEn: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900 leading-relaxed"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              ध्येय / लक्ष्य (Mission - नेपालीमा)
            </label>
            <textarea
              rows={3}
              value={form.missionNp}
              onChange={(e) => setForm({ ...form, missionNp: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900 leading-relaxed"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold shadow-sm"
          >
            <Save className="w-4 h-4" />
            <span>{t('परिवर्तनहरू सुरक्षित गर्नुहोस्', 'Save About Details')}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
