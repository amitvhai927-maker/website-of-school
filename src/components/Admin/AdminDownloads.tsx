import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { DownloadItem } from '../../types';
import { Plus, Trash2, Edit2, X, FileText, Download } from 'lucide-react';

export const AdminDownloads: React.FC = () => {
  const { downloads, addDownload, updateDownload, deleteDownload, lang, t } = useSchool();
  const [editing, setEditing] = useState<DownloadItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [form, setForm] = useState({
    titleEn: '',
    titleNp: '',
    category: 'Admission' as DownloadItem['category'],
    fileSize: '450 KB',
    fileType: 'PDF' as DownloadItem['fileType'],
    date: new Date().toISOString().split('T')[0],
  });

  const handleStartCreate = () => {
    setEditing(null);
    setForm({
      titleEn: '',
      titleNp: '',
      category: 'Admission',
      fileSize: '450 KB',
      fileType: 'PDF',
      date: new Date().toISOString().split('T')[0],
    });
    setIsCreating(true);
  };

  const handleStartEdit = (d: DownloadItem) => {
    setIsCreating(false);
    setEditing(d);
    setForm({
      titleEn: d.title.en,
      titleNp: d.title.np,
      category: d.category,
      fileSize: d.fileSize,
      fileType: d.fileType,
      date: d.date,
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.titleEn) return;

    if (isCreating) {
      addDownload({
        title: { en: form.titleEn, np: form.titleNp || form.titleEn },
        category: form.category,
        fileSize: form.fileSize,
        fileType: form.fileType,
        date: form.date,
        downloadUrl: '#',
      });
      setIsCreating(false);
    } else if (editing) {
      updateDownload(editing.id, {
        title: { en: form.titleEn, np: form.titleNp || form.titleEn },
        category: form.category,
        fileSize: form.fileSize,
        fileType: form.fileType,
        date: form.date,
      });
      setEditing(null);
    }
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Delete downloadable document "${name}"?`)) {
      deleteDownload(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            {t('डाउनलोड केन्द्र व्यवस्थापन', 'Download Center Resources Management')}
          </h2>
          <p className="text-xs text-slate-500">
            {t('भर्ना फारम, शैक्षिक क्यालेन्डर र पाठ्यक्रम फाइलहरू व्यवस्थापन गर्नुहोस्।', 'Manage official downloadable PDF forms, guidelines and routines.')}
          </p>
        </div>

        {!isCreating && !editing && (
          <button
            onClick={handleStartCreate}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-blue-900 hover:bg-blue-800 text-white shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>{t('नयाँ फाइल थप्नुहोस्', 'Add Resource')}</span>
          </button>
        )}
      </div>

      {(isCreating || editing) && (
        <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-md space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900">
              {isCreating ? 'Add Downloadable File' : 'Edit File'}
            </h3>
            <button
              onClick={() => {
                setIsCreating(false);
                setEditing(null);
              }}
              className="p-1 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Title (English) *</label>
                <input
                  type="text"
                  required
                  value={form.titleEn}
                  onChange={(e) => setForm({ ...form, titleEn: e.target.value })}
                  placeholder="e.g. Admission Application Form 2082"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">शीर्षक (नेपालीमा)</label>
                <input
                  type="text"
                  value={form.titleNp}
                  onChange={(e) => setForm({ ...form, titleNp: e.target.value })}
                  placeholder="जस्तै: नयाँ भर्ना आवेदन फारम २०८२"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                >
                  <option value="Admission">Admission</option>
                  <option value="Calendar">Calendar</option>
                  <option value="Curriculum">Curriculum</option>
                  <option value="Rules">Rules</option>
                  <option value="Exam">Exam</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">File Size</label>
                <input
                  type="text"
                  value={form.fileSize}
                  onChange={(e) => setForm({ ...form, fileSize: e.target.value })}
                  placeholder="e.g. 520 KB"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Date</label>
                <input
                  type="text"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setIsCreating(false);
                  setEditing(null);
                }}
                className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-900 text-white font-semibold"
              >
                {isCreating ? 'Save Document' : 'Update Document'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
            <tr>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">File Size</th>
              <th className="py-3 px-4">Release Date</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {downloads.map((d) => (
              <tr key={d.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-red-600" />
                  <span>{d.title.en}</span>
                </td>
                <td className="py-3 px-4">
                  <span className="font-semibold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
                    {d.category}
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-600 tabular-nums">{d.fileSize}</td>
                <td className="py-3 px-4 text-slate-500 tabular-nums">{d.date}</td>
                <td className="py-3 px-4 text-right space-x-2">
                  <button
                    onClick={() => handleStartEdit(d)}
                    className="p-1.5 text-blue-900 hover:bg-blue-50 rounded"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(d.id, d.title.en)}
                    className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
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
  );
};
