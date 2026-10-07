import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Teacher } from '../../types';
import { Plus, Edit2, Trash2, X, GraduationCap, Users } from 'lucide-react';

export const AdminTeachers: React.FC = () => {
  const { teachers, addTeacher, updateTeacher, deleteTeacher, lang, t } = useSchool();
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [form, setForm] = useState({
    nameEn: '',
    nameNp: '',
    desigEn: '',
    desigNp: '',
    dept: 'Secondary' as Teacher['department'],
    subjectEn: '',
    subjectNp: '',
    qualification: '',
    experienceYears: 5,
    phone: '',
    email: '',
    bioEn: '',
    bioNp: '',
    photo: '/src/assets/images/school_hero_campus_1791285473257.jpg',
  });

  const handleStartCreate = () => {
    setEditingTeacher(null);
    setForm({
      nameEn: '',
      nameNp: '',
      desigEn: 'Secondary Teacher',
      desigNp: 'माध्यमिक शिक्षक',
      dept: 'Secondary',
      subjectEn: 'Mathematics',
      subjectNp: 'गणित',
      qualification: 'M.Sc. / M.Ed., Tribhuvan University',
      experienceYears: 8,
      phone: '+977-9844000000',
      email: 'teacher@benibhola.edu.np',
      bioEn: 'Dedicated to student achievement and conceptual clarity.',
      bioNp: 'विद्यार्थीहरूको सिकाइ उपलब्धि र अनुशासनमा समर्पित।',
      photo: '/src/assets/images/school_hero_campus_1791285473257.jpg',
    });
    setIsCreating(true);
  };

  const handleStartEdit = (t: Teacher) => {
    setIsCreating(false);
    setEditingTeacher(t);
    setForm({
      nameEn: t.name.en,
      nameNp: t.name.np,
      desigEn: t.designation.en,
      desigNp: t.designation.np,
      dept: t.department,
      subjectEn: t.subject.en,
      subjectNp: t.subject.np,
      qualification: t.qualification,
      experienceYears: t.experienceYears || 5,
      phone: t.phone || '',
      email: t.email || '',
      bioEn: t.bio.en,
      bioNp: t.bio.np,
      photo: t.photo,
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nameEn || !form.nameNp) {
      alert('Please fill teacher name in both languages.');
      return;
    }

    if (isCreating) {
      addTeacher({
        name: { en: form.nameEn, np: form.nameNp },
        designation: { en: form.desigEn, np: form.desigNp },
        department: form.dept,
        subject: { en: form.subjectEn, np: form.subjectNp },
        qualification: form.qualification,
        experienceYears: Number(form.experienceYears),
        phone: form.phone,
        email: form.email,
        bio: { en: form.bioEn, np: form.bioNp },
        photo: form.photo,
      });
      setIsCreating(false);
    } else if (editingTeacher) {
      updateTeacher(editingTeacher.id, {
        name: { en: form.nameEn, np: form.nameNp },
        designation: { en: form.desigEn, np: form.desigNp },
        department: form.dept,
        subject: { en: form.subjectEn, np: form.subjectNp },
        qualification: form.qualification,
        experienceYears: Number(form.experienceYears),
        phone: form.phone,
        email: form.email,
        bio: { en: form.bioEn, np: form.bioNp },
        photo: form.photo,
      });
      setEditingTeacher(null);
    }
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to remove "${name}" from teachers list?`)) {
      deleteTeacher(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            {t('शिक्षक तथा कर्मचारी व्यवस्थापन', 'Faculty & Staff Directory Management')}
          </h2>
          <p className="text-xs text-slate-500">
            {t('शिक्षकको विवरण, विषय, योग्यता र फोटो अद्यावधिक गर्नुहोस्।', 'Manage teacher profiles, qualifications, contact info and photos.')}
          </p>
        </div>

        {!isCreating && !editingTeacher && (
          <button
            onClick={handleStartCreate}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-blue-900 hover:bg-blue-800 text-white shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>{t('नयाँ शिक्षक थप्नुहोस्', 'Add Faculty Member')}</span>
          </button>
        )}
      </div>

      {/* Form Drawer */}
      {(isCreating || editingTeacher) && (
        <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900">
              {isCreating ? 'Add New Faculty Member' : 'Edit Faculty Member'}
            </h3>
            <button
              onClick={() => {
                setIsCreating(false);
                setEditingTeacher(null);
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
                  Full Name (English) *
                </label>
                <input
                  type="text"
                  required
                  value={form.nameEn}
                  onChange={(e) => setForm({ ...form, nameEn: e.target.value })}
                  placeholder="e.g. Ramesh Kumar Jha"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  पूरा नाम (नेपालीमा) *
                </label>
                <input
                  type="text"
                  required
                  value={form.nameNp}
                  onChange={(e) => setForm({ ...form, nameNp: e.target.value })}
                  placeholder="जस्तै: रमेश कुमार झा"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Department *
                </label>
                <select
                  value={form.dept}
                  onChange={(e) => setForm({ ...form, dept: e.target.value as Teacher['department'] })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900 bg-white"
                >
                  <option value="Administration">Administration</option>
                  <option value="Secondary">Secondary (मा.वि.)</option>
                  <option value="Lower Secondary">Lower Secondary (नि.मा.वि.)</option>
                  <option value="Primary">Primary (प्रा.वि.)</option>
                  <option value="ECD">ECD / Nursery</option>
                  <option value="Support">Support Staff</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Designation (English)
                </label>
                <input
                  type="text"
                  value={form.desigEn}
                  onChange={(e) => setForm({ ...form, desigEn: e.target.value })}
                  placeholder="Secondary Teacher"
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
                  placeholder="माध्यमिक शिक्षक"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Subject / Area
                </label>
                <input
                  type="text"
                  value={form.subjectEn}
                  onChange={(e) => setForm({ ...form, subjectEn: e.target.value })}
                  placeholder="Physics / Mathematics"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  विषय (नेपालीमा)
                </label>
                <input
                  type="text"
                  value={form.subjectNp}
                  onChange={(e) => setForm({ ...form, subjectNp: e.target.value })}
                  placeholder="भौतिकशास्त्र / गणित"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Qualification
                </label>
                <input
                  type="text"
                  value={form.qualification}
                  onChange={(e) => setForm({ ...form, qualification: e.target.value })}
                  placeholder="M.Sc., Tribhuvan University"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Experience (Years)
                </label>
                <input
                  type="number"
                  value={form.experienceYears}
                  onChange={(e) => setForm({ ...form, experienceYears: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="text"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+977-98XXXXXXXX"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="teacher@benibhola.edu.np"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Brief Bio (English)
                </label>
                <textarea
                  rows={3}
                  value={form.bioEn}
                  onChange={(e) => setForm({ ...form, bioEn: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  छोटो परिचय (नेपालीमा)
                </label>
                <textarea
                  rows={3}
                  value={form.bioNp}
                  onChange={(e) => setForm({ ...form, bioNp: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setIsCreating(false);
                  setEditingTeacher(null);
                }}
                className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold"
              >
                {isCreating ? 'Add Teacher' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Faculty Member</th>
                <th className="py-3 px-4">Department</th>
                <th className="py-3 px-4">Designation</th>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4">Qualification</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {teachers.map((tch) => (
                <tr key={tch.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={tch.photo}
                        alt={tch.name.en}
                        className="w-9 h-9 rounded-md object-cover object-top border border-slate-200"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="font-bold text-slate-900">{tch.name.en}</div>
                        <div className="text-slate-500 text-[11px]">{tch.name.np}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                      {tch.department}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-700">
                    {tch.designation.en}
                  </td>
                  <td className="py-3 px-4 text-slate-600">
                    {tch.subject.en}
                  </td>
                  <td className="py-3 px-4 text-slate-500 truncate max-w-[150px]">
                    {tch.qualification}
                  </td>
                  <td className="py-3 px-4 text-right space-x-2">
                    <button
                      onClick={() => handleStartEdit(tch)}
                      className="p-1.5 text-blue-900 hover:bg-blue-50 rounded-md transition-colors"
                      title="Edit Teacher"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(tch.id, tch.name.en)}
                      className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-md transition-colors"
                      title="Delete Teacher"
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
