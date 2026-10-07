import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { X, Mail, Phone, GraduationCap, Briefcase, UserCheck } from 'lucide-react';
import { SchoolEmblem } from './SchoolEmblem';

export const TeacherDetailModal: React.FC = () => {
  const { selectedTeacher, setSelectedTeacher, lang, t, settings } = useSchool();

  if (!selectedTeacher) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <SchoolEmblem size={28} />
            <span className="text-xs font-semibold text-slate-800">
              {settings.schoolName[lang]}
            </span>
          </div>
          <button
            onClick={() => setSelectedTeacher(null)}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Avatar and Info Header */}
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-sm">
              <img
                src={selectedTeacher.photo}
                alt={selectedTeacher.name[lang]}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                {selectedTeacher.department}
              </div>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {selectedTeacher.name[lang]}
              </h3>
              <p className="text-xs text-blue-900 font-medium">
                {selectedTeacher.designation[lang]}
              </p>
            </div>
          </div>

          {/* Key Qualifications */}
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2 text-xs">
            <div className="flex items-start gap-2 text-slate-700">
              <GraduationCap className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900">{t('शैक्षिक योग्यता:', 'Qualification:')} </span>
                <span>{selectedTeacher.qualification}</span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-slate-700">
              <Briefcase className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900">{t('अध्यापन विषय:', 'Subject / Area:')} </span>
                <span>{selectedTeacher.subject[lang]}</span>
              </div>
            </div>

            {selectedTeacher.experienceYears && (
              <div className="flex items-start gap-2 text-slate-700">
                <UserCheck className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900">{t('अनुभव:', 'Experience:')} </span>
                  <span>{selectedTeacher.experienceYears} {t('वर्ष', 'Years')}</span>
                </div>
              </div>
            )}
          </div>

          {/* Biography */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              {t('छोटो परिचय', 'Brief Biography')}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50 p-3.5 rounded-lg border border-slate-100">
              {selectedTeacher.bio[lang]}
            </p>
          </div>

          {/* Contact Details */}
          {(selectedTeacher.phone || selectedTeacher.email) && (
            <div className="pt-3 border-t border-slate-200 flex flex-wrap gap-4 text-xs text-slate-600">
              {selectedTeacher.phone && (
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{selectedTeacher.phone}</span>
                </div>
              )}
              {selectedTeacher.email && (
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{selectedTeacher.email}</span>
                </div>
              )}
            </div>
          )}

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => setSelectedTeacher(null)}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800"
            >
              {t('बन्द गर्नुहोस्', 'Close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
