import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Achievement } from '../../types';
import { Plus, Edit2, Trash2, X, Trophy } from 'lucide-react';

export const AdminAchievements: React.FC = () => {
  const { achievements, addAchievement, updateAchievement, deleteAchievement, lang, t } = useSchool();
  const [editing, setEditing] = useState<Achievement | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [form, setForm] = useState({
    titleEn: '',
    titleNp: '',
    year: '2081 B.S.',
    category: 'SEE / Board' as Achievement['category'],
    descEn: '',
    descNp: '',
    badgeText: 'Academic Distinction',
  });

  const handleStartCreate = () => {
    setEditing(null);
    setForm({
      titleEn: '',
      titleNp: '',
      year: '2081 B.S.',
      category: 'SEE / Board',
      descEn: '',
      descNp: '',
      badgeText: 'Honored',
    });
    setIsCreating(true);
  };

  const handleStartEdit = (a: Achievement) => {
    setIsCreating(false);
    setEditing(a);
    setForm({
      titleEn: a.title.en,
      titleNp: a.title.np,
      year: a.year,
      category: a.category,
      descEn: a.description.en,
      descNp: a.description.np,
      badgeText: a.badgeText || '',
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.titleEn || !form.titleNp) {
      alert('Please fill title in both languages.');
      return;
    }

    if (isCreating) {
      addAchievement({
        title: { en: form.titleEn, np: form.titleNp },
        description: { en: form.descEn, np: form.descNp },
        year: form.year,
        category: form.category,
        badgeText: form.badgeText,
      });
      setIsCreating(false);
    } else if (editing) {
      updateAchievement(editing.id, {
        title: { en: form.titleEn, np: form.titleNp },
        description: { en: form.descEn, np: form.descNp },
        year: form.year,
        category: form.category,
        badgeText: form.badgeText,
      });
      setEditing(null);
    }
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Delete achievement "${name}"?`)) {
      deleteAchievement(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            {t('उपलब्धिहरू तथा पुरस्कार व्यवस्थापन', 'Achievements & Accolades Management')}
          </h2>
          <p className="text-xs text-slate-500">
            {t('एसईई नतिजा, खेलकुद शिल्ड र राष्ट्रिय सम्मानहरू व्यवस्थापन गर्नुहोस्।', 'Track institutional awards, board ranks, and championship trophies.')}
          </p>
        </div>

        {!isCreating && !editing && (
          <button
            onClick={handleStartCreate}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-blue-900 hover:bg-blue-800 text-white shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>{t('नयाँ उपलब्धि थप्नुहोस्', 'Add Achievement')}</span>
          </button>
        )}
      </div>

      {(isCreating || editing) && (
        <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-md space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900">
              {isCreating ? 'Add Achievement' : 'Edit Achievement'}
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
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">शीर्षक (नेपालीमा) *</label>
                <input
                  type="text"
                  required
                  value={form.titleNp}
                  onChange={(e) => setForm({ ...form, titleNp: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Year</label>
                <input
                  type="text"
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                >
                  <option value="Model School">Model School</option>
                  <option value="SEE / Board">SEE / Board</option>
                  <option value="Sports">Sports</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Faculty">Faculty</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Badge Text</label>
                <input
                  type="text"
                  value={form.badgeText}
                  onChange={(e) => setForm({ ...form, badgeText: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Description (English)</label>
                <textarea
                  rows={3}
                  value={form.descEn}
                  onChange={(e) => setForm({ ...form, descEn: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">विवरण (नेपालीमा)</label>
                <textarea
                  rows={3}
                  value={form.descNp}
                  onChange={(e) => setForm({ ...form, descNp: e.target.value })}
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
                {isCreating ? 'Add Achievement' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span className="font-semibold text-blue-900">{ach.category}</span>
                <span className="tabular-nums">{ach.year}</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">{ach.title.en}</h4>
              <p className="text-xs text-slate-600 line-clamp-2">{ach.description.en}</p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-amber-800 font-semibold">{ach.badgeText}</span>
              <div className="space-x-1">
                <button
                  onClick={() => handleStartEdit(ach)}
                  className="p-1.5 text-blue-900 hover:bg-blue-50 rounded"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(ach.id, ach.title.en)}
                  className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
