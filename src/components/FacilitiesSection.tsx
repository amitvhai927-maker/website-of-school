import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { Facility } from '../types';
import { Building, CheckCircle2, ChevronRight, X } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const { facilities, lang, t } = useSchool();
  const [activeFacility, setActiveFacility] = useState<Facility | null>(null);

  return (
    <section id="facilities" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center justify-center gap-1.5">
            <Building className="w-3.5 h-3.5" />
            <span>{t('विद्यालयका भौतिक तथा प्राज्ञिक सुविधाहरू', 'Campus Infrastructure & Facilities')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            {t('आधुनिक शिक्षणका लागि उत्कृष्ट पूर्वाधार', 'State-of-the-Art Learning Facilities')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {t(
              'विद्यार्थीहरूको चौतर्फी विकासका लागि सुसज्जित प्रयोगशाला, समृद्ध पुस्तकालय, फराकिलो खेलमैदान र सुरक्षित पूर्वाधार।',
              'Well-equipped science and digital laboratories, expansive library stacks, athletic courts, and hygienic amenities.'
            )}
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              onClick={() => setActiveFacility(facility)}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Facility Image with measured overlay */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={facility.image}
                    alt={facility.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-amber-400 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-slate-800">
                    {facility.category}
                  </div>
                </div>

                {/* Facility Text Info */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                    {facility.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {facility.description[lang]}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {facility.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-900 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-2 flex items-center justify-between text-xs font-semibold text-blue-900 group-hover:text-blue-950">
                <span>{t('थप जानकारी हेर्नुहोस्', 'Explore Feature')}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Facility Detail Modal */}
        {activeFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-xl max-h-[90vh] overflow-y-auto">
              <div className="relative h-56 bg-slate-900">
                <img
                  src={activeFacility.image}
                  alt={activeFacility.title[lang]}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setActiveFacility(null)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                  {activeFacility.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {activeFacility.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeFacility.description[lang]}
                </p>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    {t('मुख्य विशेषताहरू', 'Key Amenities & Highlights')}
                  </h4>
                  <ul className="space-y-1.5">
                    {activeFacility.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-200 flex justify-end">
                  <button
                    onClick={() => setActiveFacility(null)}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800"
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
