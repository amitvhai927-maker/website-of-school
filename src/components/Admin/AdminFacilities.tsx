import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Facility } from '../../types';
import { Plus, Edit2, Trash2, X, Building } from 'lucide-react';

export const AdminFacilities: React.FC = () => {
  const { facilities, addFacility, updateFacility, deleteFacility, lang, t } = useSchool();
  const [editing, setEditing] = useState<Facility | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [form, setForm] = useState({
    titleEn: '',
    titleNp: '',
    descEn: '',
    descNp: '',
    category: 'Lab' as Facility['category'],
    image: '/src/assets/images/school_science_lab_1791285504462.jpg',
    features: 'Modern equipment, Safe environment, High standard',
  });

  const handleStartCreate = () => {
    setEditing(null);
    setForm({
      titleEn: '',
      titleNp: '',
      descEn: '',
      descNp: '',
      category: 'Lab',
      image: '/src/assets/images/school_science_lab_1791285504462.jpg',
      features: 'High quality infrastructure, Supervised access',
    });
    setIsCreating(true);
  };

  const handleStartEdit = (f: Facility) => {
    setIsCreating(false);
    setEditing(f);
    setForm({
      titleEn: f.title.en,
      titleNp: f.title.np,
      descEn: f.description.en,
      descNp: f.description.np,
      category: f.category,
      image: f.image,
      features: f.features.join(', '),
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.titleEn || !form.titleNp) {
      alert('Please fill titles in both languages.');
      return;
    }

    const feats = form.features.split(',').map((f) => f.trim()).filter(Boolean);

    if (isCreating) {
      addFacility({
        title: { en: form.titleEn, np: form.titleNp },
        description: { en: form.descEn, np: form.descNp },
        category: form.category,
        image: form.image,
        features: feats,
      });
      setIsCreating(false);
    } else if (editing) {
      updateFacility(editing.id, {
        title: { en: form.titleEn, np: form.titleNp },
        description: { en: form.descEn, np: form.descNp },
        category: form.category,
        image: form.image,
        features: feats,
      });
      setEditing(null);
    }
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Delete facility "${name}"?`)) {
      deleteFacility(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            {t('सुविधाहरू व्यवस्थापन', 'Campus Facilities Management')}
          </h2>
          <p className="text-xs text-slate-500">
            {t('विज्ञान तथा कम्प्युटर ल्याब, पुस्तकालय, खेलमैदान सम्पादन गर्नुहोस्।', 'Manage campus facilities, laboratories and infrastructure.')}
          </p>
        </div>

        {!isCreating && !editing && (
          <button
            onClick={handleStartCreate}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-blue-900 hover:bg-blue-800 text-white shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>{t('नयाँ सुविधा थप्नुहोस्', 'Add Facility')}</span>
          </button>
        )}
      </div>

      {(isCreating || editing) && (
        <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-md space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900">
              {isCreating ? 'Add New Facility' : 'Edit Facility'}
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
                <label className="block font-semibold text-slate-700 mb-1">
                  Title (English) *
                </label>
                <input
                  type="text"
                  required
                  value={form.titleEn}
                  onChange={(e) => setForm({ ...form, titleEn: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  शीर्षक (नेपालीमा) *
                </label>
                <input
                  type="text"
                  required
                  value={form.titleNp}
                  onChange={(e) => setForm({ ...form, titleNp: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Category *
                </label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                >
                  <option value="Lab">Lab (प्रयोगशाला)</option>
                  <option value="Academic">Academic (पुस्तकालय)</option>
                  <option value="Sports">Sports (खेलकुद)</option>
                  <option value="Infrastructure">Infrastructure (पूर्वाधार)</option>
                  <option value="Welfare">Welfare (छात्रवृत्ति/कल्याण)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Image Path / URL
                </label>
                <input
                  type="text"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Description (English)
                </label>
                <textarea
                  rows={3}
                  value={form.descEn}
                  onChange={(e) => setForm({ ...form, descEn: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  विवरण (नेपालीमा)
                </label>
                <textarea
                  rows={3}
                  value={form.descNp}
                  onChange={(e) => setForm({ ...form, descNp: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Features (Comma-separated)
              </label>
              <input
                type="text"
                value={form.features}
                onChange={(e) => setForm({ ...form, features: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300"
              />
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
                {isCreating ? 'Add Facility' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Facilities Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {facilities.map((fac) => (
          <div
            key={fac.id}
            className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="h-36 overflow-hidden bg-slate-100">
                <img
                  src={fac.image}
                  alt={fac.title.en}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 space-y-2">
                <span className="text-[10px] font-semibold text-amber-800 uppercase">
                  {fac.category}
                </span>
                <h4 className="font-bold text-slate-900 text-sm">{fac.title.en}</h4>
                <p className="text-xs text-slate-600 line-clamp-2">{fac.description.en}</p>
              </div>
            </div>

            <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-end gap-2 text-xs">
              <button
                onClick={() => handleStartEdit(fac)}
                className="p-1.5 text-blue-900 hover:bg-blue-50 rounded"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(fac.id, fac.title.en)}
                className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
