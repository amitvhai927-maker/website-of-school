import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { AcademicProgram } from '../../types';
import { Plus, Edit2, Trash2, X, BookOpen } from 'lucide-react';

export const AdminPrograms: React.FC = () => {
  const { programs, addProgram, updateProgram, deleteProgram, lang, t } = useSchool();
  const [editingProgram, setEditingProgram] = useState<AcademicProgram | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [form, setForm] = useState({
    titleEn: '',
    titleNp: '',
    levelEn: '',
    levelNp: '',
    grades: '',
    descEn: '',
    descNp: '',
    eligibilityEn: '',
    eligibilityNp: '',
    subjects: 'Compulsory English, Mathematics, Science',
    duration: '2 Years',
    iconName: 'BookOpen',
    features: 'Modern labs, Regular assessments, Expert faculty',
  });

  const handleStartCreate = () => {
    setEditingProgram(null);
    setForm({
      titleEn: '',
      titleNp: '',
      levelEn: 'Higher Secondary',
      levelNp: 'उच्च माध्यमिक',
      grades: 'Grade 11 & 12',
      descEn: '',
      descNp: '',
      eligibilityEn: 'SEE pass with minimum GPA 2.0',
      eligibilityNp: 'एसईई परीक्षा उत्तीर्ण',
      subjects: 'Subject 1, Subject 2, Subject 3',
      duration: '2 Years',
      iconName: 'BookOpen',
      features: 'High academic standards, Practical learning, Dedicated mentors',
    });
    setIsCreating(true);
  };

  const handleStartEdit = (p: AcademicProgram) => {
    setIsCreating(false);
    setEditingProgram(p);
    setForm({
      titleEn: p.title.en,
      titleNp: p.title.np,
      levelEn: p.level.en,
      levelNp: p.level.np,
      grades: p.grades,
      descEn: p.description.en,
      descNp: p.description.np,
      eligibilityEn: p.eligibility.en,
      eligibilityNp: p.eligibility.np,
      subjects: p.subjects.join(', '),
      duration: p.duration,
      iconName: p.iconName,
      features: p.features.join(', '),
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.titleEn || !form.titleNp) {
      alert('Please fill program title in both languages.');
      return;
    }

    const subjectsArr = form.subjects.split(',').map((s) => s.trim()).filter(Boolean);
    const featuresArr = form.features.split(',').map((f) => f.trim()).filter(Boolean);

    if (isCreating) {
      addProgram({
        title: { en: form.titleEn, np: form.titleNp },
        level: { en: form.levelEn, np: form.levelNp },
        grades: form.grades,
        description: { en: form.descEn, np: form.descNp },
        eligibility: { en: form.eligibilityEn, np: form.eligibilityNp },
        subjects: subjectsArr,
        duration: form.duration,
        iconName: form.iconName,
        features: featuresArr,
      });
      setIsCreating(false);
    } else if (editingProgram) {
      updateProgram(editingProgram.id, {
        title: { en: form.titleEn, np: form.titleNp },
        level: { en: form.levelEn, np: form.levelNp },
        grades: form.grades,
        description: { en: form.descEn, np: form.descNp },
        eligibility: { en: form.eligibilityEn, np: form.eligibilityNp },
        subjects: subjectsArr,
        duration: form.duration,
        iconName: form.iconName,
        features: featuresArr,
      });
      setEditingProgram(null);
    }
  };

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete program "${title}"?`)) {
      deleteProgram(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            {t('शैक्षिक कार्यक्रम व्यवस्थापन', 'Academic Programs & Streams Management')}
          </h2>
          <p className="text-xs text-slate-500">
            {t('शिशु कक्षा, आधारभूत, माध्यमिक र +२ संकायका कार्यक्रमहरू सम्पादन गर्नुहोस्।', 'Manage curricula, grade levels, eligibility rules, and subjects.')}
          </p>
        </div>

        {!isCreating && !editingProgram && (
          <button
            onClick={handleStartCreate}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-blue-900 hover:bg-blue-800 text-white shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>{t('नयाँ कार्यक्रम थप्नुहोस्', 'Add Program')}</span>
          </button>
        )}
      </div>

      {(isCreating || editingProgram) && (
        <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900">
              {isCreating ? 'Add Academic Program' : 'Edit Academic Program'}
            </h3>
            <button
              onClick={() => {
                setIsCreating(false);
                setEditingProgram(null);
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
                  Program Title (English) *
                </label>
                <input
                  type="text"
                  required
                  value={form.titleEn}
                  onChange={(e) => setForm({ ...form, titleEn: e.target.value })}
                  placeholder="e.g. Grade 11 & 12: Science Stream"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  कार्यक्रमको नाम (नेपालीमा) *
                </label>
                <input
                  type="text"
                  required
                  value={form.titleNp}
                  onChange={(e) => setForm({ ...form, titleNp: e.target.value })}
                  placeholder="जस्तै: कक्षा ११ र १२: विज्ञान संकाय"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Grades / Span
                </label>
                <input
                  type="text"
                  value={form.grades}
                  onChange={(e) => setForm({ ...form, grades: e.target.value })}
                  placeholder="Grade 11 & 12"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  value={form.duration}
                  onChange={(e) => setForm({ ...form, duration: e.target.value })}
                  placeholder="2 Years"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Level (English)
                </label>
                <input
                  type="text"
                  value={form.levelEn}
                  onChange={(e) => setForm({ ...form, levelEn: e.target.value })}
                  placeholder="Higher Secondary"
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
                  rows={3}
                  value={form.descEn}
                  onChange={(e) => setForm({ ...form, descEn: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
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
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Eligibility (English)
                </label>
                <input
                  type="text"
                  value={form.eligibilityEn}
                  onChange={(e) => setForm({ ...form, eligibilityEn: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  योग्यता मापदण्ड (नेपालीमा)
                </label>
                <input
                  type="text"
                  value={form.eligibilityNp}
                  onChange={(e) => setForm({ ...form, eligibilityNp: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Subjects (Comma-separated)
              </label>
              <input
                type="text"
                value={form.subjects}
                onChange={(e) => setForm({ ...form, subjects: e.target.value })}
                placeholder="Physics, Chemistry, Biology, Mathematics, English"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setIsCreating(false);
                  setEditingProgram(null);
                }}
                className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold"
              >
                {isCreating ? 'Add Program' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Program list cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {programs.map((p) => (
          <div
            key={p.id}
            className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span className="font-semibold text-blue-900">{p.grades}</span>
                <span>{p.duration}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                {p.title.en}
              </h3>
              <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                {p.description.en}
              </p>
              <div className="flex flex-wrap gap-1">
                {p.subjects.slice(0, 4).map((s, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-end gap-2 text-xs">
              <button
                onClick={() => handleStartEdit(p)}
                className="p-1.5 text-blue-900 hover:bg-blue-50 rounded"
                title="Edit"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(p.id, p.title.en)}
                className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                title="Delete"
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
