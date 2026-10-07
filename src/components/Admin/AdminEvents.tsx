import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { SchoolEvent } from '../../types';
import { Plus, Edit2, Trash2, X, Calendar } from 'lucide-react';

export const AdminEvents: React.FC = () => {
  const { events, addEvent, updateEvent, deleteEvent, lang, t } = useSchool();
  const [editing, setEditing] = useState<SchoolEvent | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [form, setForm] = useState({
    titleEn: '',
    titleNp: '',
    date: '2026-05-15',
    nepaliDate: '२०८२ जेठ १',
    time: '11:00 AM – 3:00 PM',
    location: 'School Main Stage & Auditorium',
    category: 'Academic' as SchoolEvent['category'],
    descEn: '',
    descNp: '',
    image: '/src/assets/images/school_hero_campus_1791285473257.jpg',
  });

  const handleStartCreate = () => {
    setEditing(null);
    setForm({
      titleEn: '',
      titleNp: '',
      date: '2026-05-15',
      nepaliDate: '२०८२ जेठ १',
      time: '10:00 AM – 3:00 PM',
      location: 'School Campus',
      category: 'Academic',
      descEn: '',
      descNp: '',
      image: '/src/assets/images/school_hero_campus_1791285473257.jpg',
    });
    setIsCreating(true);
  };

  const handleStartEdit = (ev: SchoolEvent) => {
    setIsCreating(false);
    setEditing(ev);
    setForm({
      titleEn: ev.title.en,
      titleNp: ev.title.np,
      date: ev.date,
      nepaliDate: ev.nepaliDate,
      time: ev.time,
      location: ev.location,
      category: ev.category,
      descEn: ev.description.en,
      descNp: ev.description.np,
      image: ev.image || '',
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.titleEn || !form.titleNp) {
      alert('Please fill event title in both languages.');
      return;
    }

    if (isCreating) {
      addEvent({
        title: { en: form.titleEn, np: form.titleNp },
        description: { en: form.descEn, np: form.descNp },
        date: form.date,
        nepaliDate: form.nepaliDate,
        time: form.time,
        location: form.location,
        category: form.category,
        isUpcoming: true,
        image: form.image,
      });
      setIsCreating(false);
    } else if (editing) {
      updateEvent(editing.id, {
        title: { en: form.titleEn, np: form.titleNp },
        description: { en: form.descEn, np: form.descNp },
        date: form.date,
        nepaliDate: form.nepaliDate,
        time: form.time,
        location: form.location,
        category: form.category,
        image: form.image,
      });
      setEditing(null);
    }
  };

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Delete event "${title}"?`)) {
      deleteEvent(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            {t('कार्यक्रमहरू तथा क्यालेन्डर व्यवस्थापन', 'Events & Calendar Management')}
          </h2>
          <p className="text-xs text-slate-500">
            {t('अभिभावक दिवस, खेलकुद सप्ताह, विज्ञान मेला आदि व्यवस्थापन गर्नुहोस्।', 'Schedule annual meets, festivals, science fairs and holidays.')}
          </p>
        </div>

        {!isCreating && !editing && (
          <button
            onClick={handleStartCreate}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-blue-900 hover:bg-blue-800 text-white shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>{t('नयाँ कार्यक्रम थप्नुहोस्', 'Schedule Event')}</span>
          </button>
        )}
      </div>

      {(isCreating || editing) && (
        <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-md space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900">
              {isCreating ? 'Schedule Event' : 'Edit Event'}
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
                <label className="block font-semibold text-slate-700 mb-1">कार्यक्रमको शीर्षक (नेपालीमा) *</label>
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
                <label className="block font-semibold text-slate-700 mb-1">Date (B.S. Nepali)</label>
                <input
                  type="text"
                  value={form.nepaliDate}
                  onChange={(e) => setForm({ ...form, nepaliDate: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Time</label>
                <input
                  type="text"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Location / Venue</label>
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
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
                {isCreating ? 'Schedule' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.map((ev) => (
          <div
            key={ev.id}
            className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span className="font-semibold text-blue-900">{ev.category}</span>
                <span className="tabular-nums text-amber-800">{ev.nepaliDate}</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">{ev.title.en}</h4>
              <p className="text-xs text-slate-600 line-clamp-2">{ev.description.en}</p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="truncate max-w-[150px]">{ev.location}</span>
              <div className="space-x-1 shrink-0">
                <button
                  onClick={() => handleStartEdit(ev)}
                  className="p-1.5 text-blue-900 hover:bg-blue-50 rounded"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(ev.id, ev.title.en)}
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
