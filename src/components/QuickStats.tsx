import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { Calendar, GraduationCap, Building2, MapPin, Users, Award } from 'lucide-react';

export const QuickStats: React.FC = () => {
  const { lang, t, settings } = useSchool();

  const stats = [
    {
      icon: Calendar,
      label: t('स्थापना वर्ष', 'Established'),
      value: settings.estdYear,
      subtext: t('७५+ वर्षको शैक्षिक विरासत', '75+ Years Educational Heritage'),
    },
    {
      icon: GraduationCap,
      label: t('शैक्षिक तह', 'Education Level'),
      value: t('शिशु – कक्षा १२', 'ECD – Grade 12'),
      subtext: t('+२ विज्ञान, व्यवस्थापन र शिक्षा', '+2 Science, Mgmt & Education'),
    },
    {
      icon: Building2,
      label: t('विद्यालय प्रकार', 'School Type'),
      value: t('नमूना माध्यमिक', 'Model Secondary'),
      subtext: t('सामुदायिक / सरकारी विद्यालय', 'Public / Community Model School'),
    },
    {
      icon: MapPin,
      label: t('अवस्थिति', 'Location'),
      value: t('गोडैता-८, सर्लाही', 'Godaita-8, Sarlahi'),
      subtext: t('मधेश प्रदेश, नेपाल', 'Madhesh Province, Nepal'),
    },
  ];

  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg border border-slate-200/80 p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-start gap-4 ${
                  index > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 border border-blue-100">
                  <Icon className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-slate-700">
                    {item.label}
                  </div>
                  <div className="text-xl font-bold text-slate-900 mt-0.5 tracking-tight tabular-nums">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-700 mt-1 leading-snug">
                    {item.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
