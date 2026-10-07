import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { AdmissionInquiry } from '../../types';
import { Inbox, CheckCircle, Clock, Trash2, Phone, Mail, MapPin, Eye } from 'lucide-react';

export const AdminAdmissions: React.FC = () => {
  const { admissions, updateAdmissionStatus, deleteAdmission, lang, t } = useSchool();
  const [filter, setFilter] = useState<string>('All');
  const [activeInquiry, setActiveInquiry] = useState<AdmissionInquiry | null>(null);

  const filtered = admissions.filter((a) => {
    if (filter === 'All') return true;
    return a.status === filter;
  });

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Delete admission inquiry from "${name}"?`)) {
      deleteAdmission(id);
      if (activeInquiry?.id === id) setActiveInquiry(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            {t('नयाँ भर्ना आवेदन व्यवस्थापन', 'Admission Inquiries Management')}
          </h2>
          <p className="text-xs text-slate-500">
            {t('अनलाइन फारम मार्फत प्राप्त आवेदनहरूको समीक्षा र सम्पर्क स्थिति।', 'Review and follow up on prospective student applications.')}
          </p>
        </div>

        <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-slate-200">
          {['All', 'Pending', 'Reviewed', 'Approved'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === status
                  ? 'bg-blue-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Table of Inquiries */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Applicant / Student</th>
                  <th className="py-3 px-4">Grade / Stream</th>
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4">Submitted</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((adm) => (
                  <tr
                    key={adm.id}
                    onClick={() => setActiveInquiry(adm)}
                    className={`hover:bg-slate-50 transition-colors cursor-pointer ${
                      activeInquiry?.id === adm.id ? 'bg-blue-50/50' : ''
                    }`}
                  >
                    <td className="py-3 px-4">
                      <div className="font-bold text-slate-900">{adm.studentName}</div>
                      <div className="text-slate-500 text-[11px]">Guardian: {adm.guardianName}</div>
                    </td>
                    <td className="py-3 px-4 font-medium text-slate-800">
                      {adm.grade}
                    </td>
                    <td className="py-3 px-4 text-slate-600">
                      <div>{adm.phone}</div>
                      {adm.email && <div className="text-[10px] text-slate-400">{adm.email}</div>}
                    </td>
                    <td className="py-3 px-4 text-slate-500 text-[11px] tabular-nums">
                      {adm.submittedAt}
                    </td>
                    <td className="py-3 px-4">
                      <select
                        value={adm.status}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => updateAdmissionStatus(adm.id, e.target.value as any)}
                        className={`text-[11px] font-semibold rounded px-2 py-1 border focus:outline-none ${
                          adm.status === 'Pending'
                            ? 'bg-amber-50 text-amber-800 border-amber-300'
                            : adm.status === 'Approved'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                            : 'bg-slate-100 text-slate-800 border-slate-300'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Reviewed">Reviewed</option>
                        <option value="Approved">Approved</option>
                        <option value="Contacted">Contacted</option>
                      </select>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(adm.id, adm.studentName);
                        }}
                        className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                        title="Delete inquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-400">
                      {t('कुनै आवेदन फेला परेन।', 'No admission inquiries match filter.')}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Inquiry Detail Inspector */}
        <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
            {t('आवेदन विवरण', 'Inquiry Details Inspector')}
          </h3>

          {activeInquiry ? (
            <div className="space-y-4 text-xs">
              <div>
                <div className="text-slate-500">{t('विद्यार्थीको नाम', "Student's Name")}</div>
                <div className="text-base font-bold text-slate-900">{activeInquiry.studentName}</div>
              </div>

              <div>
                <div className="text-slate-500">{t('अभिभावकको नाम', "Guardian's Name")}</div>
                <div className="font-semibold text-slate-800">{activeInquiry.guardianName}</div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-slate-500">{t('कक्षा', 'Grade')}</div>
                  <div className="font-semibold text-blue-900">{activeInquiry.grade}</div>
                </div>
                <div>
                  <div className="text-slate-500">{t('जन्म मिति', 'Date of Birth')}</div>
                  <div className="font-semibold text-slate-800">{activeInquiry.dateOfBirth || '—'}</div>
                </div>
              </div>

              <div>
                <div className="text-slate-500">{t('सम्पर्क', 'Contact')}</div>
                <div className="flex items-center gap-2 mt-0.5 font-medium text-slate-800">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{activeInquiry.phone}</span>
                </div>
                {activeInquiry.email && (
                  <div className="flex items-center gap-2 mt-0.5 text-slate-600">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>{activeInquiry.email}</span>
                  </div>
                )}
              </div>

              <div>
                <div className="text-slate-500">{t('ठेगाना', 'Address')}</div>
                <div className="text-slate-800">{activeInquiry.address || '—'}</div>
              </div>

              {activeInquiry.message && (
                <div>
                  <div className="text-slate-500">{t('सन्देश / विवरण', 'Message / Note')}</div>
                  <div className="p-3 bg-slate-50 rounded-lg text-slate-700 leading-relaxed mt-1">
                    {activeInquiry.message}
                  </div>
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Submitted: {activeInquiry.submittedAt}
                </span>
                <button
                  onClick={() => handleDelete(activeInquiry.id, activeInquiry.studentName)}
                  className="text-rose-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <div className="py-12 text-center text-slate-400 text-xs">
              {t('कुनै आवेदन छान्नुहोस् विस्तृत विवरण हेर्नका लागि।', 'Select an inquiry row to view complete application information.')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
