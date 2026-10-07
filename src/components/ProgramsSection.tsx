import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { AcademicProgram } from '../types';
import {
  Baby,
  BookOpen,
  GraduationCap,
  FlaskConical,
  Briefcase,
  BookMarked,
  ArrowRight,
  CheckCircle,
  X,
  Sparkles,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Baby,
  BookOpen,
  GraduationCap,
  FlaskConical,
  Briefcase,
  BookMarked,
};

export const ProgramsSection: React.FC = () => {
  const { programs, lang, t } = useSchool();
  const [selectedProgram, setSelectedProgram] = useState<AcademicProgram | null>(null);

  const scrollToAdmission = () => {
    const el = document.querySelector('#admission');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programs" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
            {t('शैक्षिक संकाय तथा तहहरू', 'Academic Streams & Curricula')}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            {t('शिशु कक्षा देखि कक्षा १२ सम्मको अध्ययन', 'Comprehensive Programs from ECD to Grade 12')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {t(
              'नेपाल सरकारको राष्ट्रिय पाठ्यक्रम प्रारूप अनुरुप आधुनिक विज्ञान, व्यवस्थापन र शिक्षा संकायका गुणस्तरीय शैक्षिक कार्यक्रमहरू।',
              'Nationally accredited programs aligned with the curriculum framework of Nepal, enriched with STEM laboratories, digital ICT skills, and character building.'
            )}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => {
            const IconComponent = iconMap[program.iconName] || BookOpen;

            return (
              <div
                key={program.id}
                className="bg-white rounded-xl border border-slate-200/90 hover:border-blue-900/40 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-200 group"
              >
                <div>
                  {/* Top Level Metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                      {program.grades}
                    </span>
                  </div>

                  {/* Program Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug mb-2">
                    {program.title[lang]}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {program.description[lang]}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                    {program.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-700 font-medium">
                    {program.duration}
                  </span>
                  <button
                    onClick={() => setSelectedProgram(program)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-900 hover:text-blue-950 transition-colors"
                  >
                    <span>{t('विस्तृत पाठ्यक्रम', 'View Details')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Program Details Modal */}
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                    {selectedProgram.level[lang]} · {selectedProgram.grades}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                    {selectedProgram.title[lang]}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-5 text-sm">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    {t('कार्यक्रमको परिचय', 'Program Overview')}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                    {selectedProgram.description[lang]}
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1.5">
                  <h4 className="font-semibold text-slate-900 text-xs sm:text-sm">
                    {t('भर्ना योग्यता मापदण्ड', 'Eligibility Criteria')}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {selectedProgram.eligibility[lang]}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-xs sm:text-sm">
                    {t('प्रमुख विषयहरू', 'Core Subjects & Study Areas')}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProgram.subjects.map((sub, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded bg-blue-50 text-blue-900 border border-blue-100 font-medium"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedProgram(null);
                      scrollToAdmission();
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-900 text-white hover:bg-blue-800"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t('यस कार्यक्रमका लागि आवेदन दिनुहोस्', 'Apply for this Program')}</span>
                  </button>
                  <button
                    onClick={() => setSelectedProgram(null)}
                    className="px-3 py-2 text-xs text-slate-600 hover:text-slate-900"
                  >
                    {t('बन्द गर्नुहोस्', 'Close')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
