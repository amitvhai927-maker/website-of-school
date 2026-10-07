import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Notice } from '../../types';
import { Plus, Edit2, Trash2, Pin, Check, X, FileText, Calendar } from 'lucide-react';

export const AdminNotices: React.FC = () => {
  const { notices, addNotice, updateNotice, deleteNotice, togglePinNotice, lang, t } = useSchool();
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [form, setForm] = useState({
    titleEn: '',
    titleNp: '',
    descEn: '',
    descNp: '',
    category: 'Academic' as Notice['category'],
    date: new Date().toISOString().split('T')[0],
    dateNepali: '२०८१ चैत ३०',
    isPinned: false,
    fileName: '',
    fileSize: '',
  });

  const handleStartCreate = () => {
    setEditingNotice(null);
    setForm({
      titleEn: '',
      titleNp: '',
      descEn: '',
      descNp: '',
      category: 'Academic',
      date: new Date().toISOString().split('T')[0],
      dateNepali: '२०८१ चैत ३०',
      isPinned: false,
      fileName: 'Official_Notice.pdf',
      fileSize: '450 KB',
    });
    setIsCreating(true);
  };

  const handleStartEdit = (notice: Notice) => {
    setIsCreating(false);
    setEditingNotice(notice);
    setForm({
      titleEn: notice.title.en,
      titleNp: notice.title.np,
      descEn: notice.description.en,
      descNp: notice.description.np,
      category: notice.category,
      date: notice.date,
      dateNepali: notice.dateNepali,
      isPinned: notice.isPinned,
      fileName: notice.fileName || '',
      fileSize: notice.fileSize || '',
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.titleEn || !form.titleNp) {
      alert('Please fill titles in both English and Nepali.');
      return;
    }

    if (isCreating) {
      addNotice({
        title: { en: form.titleEn, np: form.titleNp },
        description: { en: form.descEn, np: form.descNp },
        category: form.category,
        date: form.date,
        dateNepali: form.dateNepali,
        isPinned: form.isPinned,
        fileName: form.fileName || undefined,
        fileSize: form.fileSize || undefined,
      });
      setIsCreating(false);
    } else if (editingNotice) {
      updateNotice(editingNotice.id, {
        title: { en: form.titleEn, np: form.titleNp },
        description: { en: form.descEn, np: form.descNp },
        category: form.category,
        date: form.date,
        dateNepali: form.dateNepali,
        isPinned: form.isPinned,
        fileName: form.fileName || undefined,
        fileSize: form.fileSize || undefined,
      });
      setEditingNotice(null);
    }
  };

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete this notice?\n"${title}"`)) {
      deleteNotice(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            {t('सूचना पाटी व्यवस्थापन', 'Notices Management')}
          </h2>
          <p className="text-xs text-slate-500">
            {t('वेबसाइटमा प्रकाशित हुने आधिकारिक सूचनाहरू थप्नुहोस् वा सम्पादन गर्नुहोस्।', 'Publish, pin, update or remove public notices.')}
          </p>
        </div>

        {!isCreating && !editingNotice && (
          <button
            onClick={handleStartCreate}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-blue-900 hover:bg-blue-800 text-white shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>{t('नयाँ सूचना थप्नुहोस्', 'Add New Notice')}</span>
          </button>
        )}
      </div>

      {/* Create / Edit Form Drawer */}
      {(isCreating || editingNotice) && (
        <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900">
              {isCreating ? t('नयाँ सूचना थप्नुहोस्', 'Publish New Notice') : t('सूचना सम्पादन गर्नुहोस्', 'Edit Notice')}
            </h3>
            <button
              onClick={() => {
                setIsCreating(false);
                setEditingNotice(null);
              }}
              className="p-1 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Title (English) *
                </label>
                <input
                  type="text"
                  required
                  value={form.titleEn}
                  onChange={(e) => setForm({ ...form, titleEn: e.target.value })}
                  placeholder="e.g. Annual Examination Routine 2081 Published"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  सूचनाको शीर्षक (नेपालीमा) *
                </label>
                <input
                  type="text"
                  required
                  value={form.titleNp}
                  onChange={(e) => setForm({ ...form, titleNp: e.target.value })}
                  placeholder="जस्तै: वार्षिक परीक्षा समयतालिका २०८१ प्रकाशन सम्बन्धी"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Category *
                </label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value as Notice['category'] })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900 bg-white"
                >
                  <option value="Academic">Academic</option>
                  <option value="Exam">Exam</option>
                  <option value="Admission">Admission</option>
                  <option value="Holiday">Holiday</option>
                  <option value="General">General</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Date (B.S. Nepali) *
                </label>
                <input
                  type="text"
                  required
                  value={form.dateNepali}
                  onChange={(e) => setForm({ ...form, dateNepali: e.target.value })}
                  placeholder="२०८१ चैत २५"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Date (A.D.)
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Description (English)
                </label>
                <textarea
                  rows={4}
                  value={form.descEn}
                  onChange={(e) => setForm({ ...form, descEn: e.target.value })}
                  placeholder="Detailed notice text in English..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  विस्तृत विवरण (नेपालीमा)
                </label>
                <textarea
                  rows={4}
                  value={form.descNp}
                  onChange={(e) => setForm({ ...form, descNp: e.target.value })}
                  placeholder="सूचनाको विस्तृत विवरण नेपालीमा..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Attached PDF Document Name (Optional)
                </label>
                <input
                  type="text"
                  value={form.fileName}
                  onChange={(e) => setForm({ ...form, fileName: e.target.value })}
                  placeholder="e.g. Exam_Routine_2081.pdf"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div className="flex items-center gap-3 pt-5">
                <label className="flex items-center gap-2 cursor-pointer font-semibold text-slate-700">
                  <input
                    type="checkbox"
                    checked={form.isPinned}
                    onChange={(e) => setForm({ ...form, isPinned: e.target.checked })}
                    className="w-4 h-4 rounded text-blue-900"
                  />
                  <span>{t('यस सूचनालाई पिन (Featured) गर्नुहोस्', 'Pin this Notice to the top banner')}</span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setIsCreating(false);
                  setEditingNotice(null);
                }}
                className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold"
              >
                {isCreating ? 'Publish Notice' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Notices Table */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Pin</th>
                <th className="py-3 px-4">Title (English / Nepali)</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Attachment</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {notices.map((n) => (
                <tr key={n.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4">
                    <button
                      onClick={() => togglePinNotice(n.id)}
                      className={`p-1 rounded ${n.isPinned ? 'text-amber-500 hover:text-amber-600' : 'text-slate-300 hover:text-slate-500'}`}
                      title={n.isPinned ? 'Unpin' : 'Pin notice'}
                    >
                      <Pin className={`w-4 h-4 ${n.isPinned ? 'fill-amber-500' : ''}`} />
                    </button>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-bold text-slate-900">{n.title.en}</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">{n.title.np}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-semibold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {n.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-600 tabular-nums">
                    {n.dateNepali}
                  </td>
                  <td className="py-3 px-4 text-slate-500">
                    {n.fileName ? (
                      <span className="flex items-center gap-1 text-[11px]">
                        <FileText className="w-3.5 h-3.5 text-slate-400" />
                        <span className="truncate max-w-[120px]">{n.fileName}</span>
                      </span>
                    ) : (
                      '—'
                    )}
                  </td>
                  <td className="py-3 px-4 text-right space-x-2">
                    <button
                      onClick={() => handleStartEdit(n)}
                      className="p-1.5 text-blue-900 hover:bg-blue-50 rounded-md transition-colors"
                      title="Edit Notice"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(n.id, n.title.en)}
                      className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-md transition-colors"
                      title="Delete Notice"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
