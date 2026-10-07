import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { GalleryItem } from '../../types';
import { Plus, Trash2, X, Image as ImageIcon } from 'lucide-react';

export const AdminGallery: React.FC = () => {
  const { gallery, addGalleryItem, deleteGalleryItem, lang, t } = useSchool();
  const [isCreating, setIsCreating] = useState(false);

  const [form, setForm] = useState({
    titleEn: '',
    titleNp: '',
    category: 'Campus' as GalleryItem['category'],
    image: '/src/assets/images/school_hero_campus_1791285473257.jpg',
    caption: '',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.titleEn) {
      alert('Please provide a title for the photo.');
      return;
    }

    addGalleryItem({
      title: { en: form.titleEn, np: form.titleNp || form.titleEn },
      category: form.category,
      image: form.image,
      caption: form.caption,
      date: '2081 B.S.',
    });

    setIsCreating(false);
    setForm({
      titleEn: '',
      titleNp: '',
      category: 'Campus',
      image: '/src/assets/images/school_hero_campus_1791285473257.jpg',
      caption: '',
    });
  };

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Delete image "${title}" from gallery?`)) {
      deleteGalleryItem(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            {t('तस्बिर ग्यालरी व्यवस्थापन', 'Photo Gallery Management')}
          </h2>
          <p className="text-xs text-slate-500">
            {t('विद्यालयका कार्यक्रम, ल्याब तथा क्याम्पसका तस्बिरहरू अपलोड वा हटाउनुहोस्।', 'Upload photos, assign albums and manage captions.')}
          </p>
        </div>

        {!isCreating && (
          <button
            onClick={() => setIsCreating(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-blue-900 hover:bg-blue-800 text-white shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>{t('नयाँ तस्बिर थप्नुहोस्', 'Add Photo')}</span>
          </button>
        )}
      </div>

      {isCreating && (
        <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-md space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900">Add Photo to Gallery</h3>
            <button onClick={() => setIsCreating(false)} className="p-1 text-slate-400 hover:text-slate-700">
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
                  placeholder="e.g. Science Lab Practical Experiments"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">शीर्षक (नेपालीमा)</label>
                <input
                  type="text"
                  value={form.titleNp}
                  onChange={(e) => setForm({ ...form, titleNp: e.target.value })}
                  placeholder="जस्तै: विज्ञान प्रयोगशालामा अभ्यास"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                >
                  <option value="Campus">Campus</option>
                  <option value="Science & ICT">Science & ICT</option>
                  <option value="Sports">Sports</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Events">Events</option>
                  <option value="Classroom">Classroom</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Image URL / Asset Path *</label>
                <input
                  type="text"
                  required
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Caption (Optional)</label>
              <input
                type="text"
                value={form.caption}
                onChange={(e) => setForm({ ...form, caption: e.target.value })}
                placeholder="Brief caption..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-900 text-white font-semibold"
              >
                Save Photo
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between"
          >
            <div className="relative aspect-video bg-slate-900 overflow-hidden">
              <img
                src={item.image}
                alt={item.title.en}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-2 left-2 bg-slate-950/70 text-amber-400 text-[10px] px-2 py-0.5 rounded font-semibold backdrop-blur-sm">
                {item.category}
              </span>
            </div>

            <div className="p-3">
              <h4 className="font-bold text-slate-900 text-xs truncate">{item.title.en}</h4>
              {item.caption && (
                <p className="text-[11px] text-slate-500 truncate mt-0.5">{item.caption}</p>
              )}
            </div>

            <div className="p-3 pt-0 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => handleDelete(item.id, item.title.en)}
                className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                title="Delete Photo"
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
