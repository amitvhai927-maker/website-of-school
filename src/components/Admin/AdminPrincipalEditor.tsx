import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Save, UserCheck, Image as ImageIcon } from 'lucide-react';

export const AdminPrincipalEditor: React.FC = () => {
  const { principalMessage, updatePrincipalMessage, lang, t } = useSchool();

  const [form, setForm] = useState({
    nameEn: principalMessage.name.en,
    nameNp: principalMessage.name.np,
    desigEn: principalMessage.designation.en,
    desigNp: principalMessage.designation.np,
    quoteEn: principalMessage.quote.en,
    quoteNp: principalMessage.quote.np,
    contentEn: principalMessage.content.en,
    contentNp: principalMessage.content.np,
    photo: principalMessage.photo,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updatePrincipalMessage({
      name: { en: form.nameEn, np: form.nameNp },
      designation: { en: form.desigEn, np: form.desigNp },
      quote: { en: form.quoteEn, np: form.quoteNp },
      content: { en: form.contentEn, np: form.contentNp },
      photo: form.photo,
    });
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/90 shadow-sm max-w-4xl space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            {t('प्रधानाध्यापकको सन्देश सम्पादन', "Edit Principal's Message & Profile")}
          </h2>
          <p className="text-xs text-slate-500">
            {t('वेबसाइटमा देखिने प्रधानाध्यापकको तस्बिर, नाम, पद र मन्तव्य सम्पादन गर्नुहोस्।', 'Update official message, quotes, credentials and portrait.')}
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-5 text-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Principal Name (English)
            </label>
            <input
              type="text"
              value={form.nameEn}
              onChange={(e) => setForm({ ...form, nameEn: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              प्रधानाध्यापकको नाम (नेपालीमा)
            </label>
            <input
              type="text"
              value={form.nameNp}
              onChange={(e) => setForm({ ...form, nameNp: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Designation (English)
            </label>
            <input
              type="text"
              value={form.desigEn}
              onChange={(e) => setForm({ ...form, desigEn: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              पद (नेपालीमा)
            </label>
            <input
              type="text"
              value={form.desigNp}
              onChange={(e) => setForm({ ...form, desigNp: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Photo URL / Asset Path
          </label>
          <input
            type="text"
            value={form.photo}
            onChange={(e) => setForm({ ...form, photo: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Inspirational Quote (English)
            </label>
            <textarea
              rows={2}
              value={form.quoteEn}
              onChange={(e) => setForm({ ...form, quoteEn: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              मुख्य भनाइ / आदर्श वाक्य (नेपालीमा)
            </label>
            <textarea
              rows={2}
              value={form.quoteNp}
              onChange={(e) => setForm({ ...form, quoteNp: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Full Welcome Narrative (English)
            </label>
            <textarea
              rows={6}
              value={form.contentEn}
              onChange={(e) => setForm({ ...form, contentEn: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900 leading-relaxed"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              विस्तृत शुभकामना सन्देश (नेपालीमा)
            </label>
            <textarea
              rows={6}
              value={form.contentNp}
              onChange={(e) => setForm({ ...form, contentNp: e.target.value })}
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
            <span>{t('परिवर्तनहरू सुरक्षित गर्नुहोस्', 'Save Principal Settings')}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
