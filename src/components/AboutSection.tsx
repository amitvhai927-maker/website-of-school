import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { Target, Compass, Award, CheckCircle2, History, HeartHandshake, Shield } from 'lucide-react';
import { SchoolEmblem } from './SchoolEmblem';

export const AboutSection: React.FC = () => {
  const { aboutSchool, lang, t, settings } = useSchool();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
              {t('हाम्रो गौरवशाली इतिहास र परिचय', 'Institutional Heritage & Overview')}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
              {settings.schoolName[lang]}
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {aboutSchool.introduction[lang]}
            </p>

            {/* History Box */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-blue-950">
                <History className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{t('ऐतिहासिक पृष्ठभूमि (वि.सं. २००४ देखि)', 'Historical Milestone (Since 2004 B.S.)')}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {aboutSchool.history[lang]}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 w-full group">
              <img
                src="/src/assets/images/school_hero_campus_1791285473257.jpg"
                alt="School Campus Building"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <div className="text-xs font-semibold text-amber-400">
                    {t('नमूना माध्यमिक विद्यालय', 'Government Model School')}
                  </div>
                  <div className="text-sm font-bold">
                    Godaita-8, Sarlahi, Madhesh Province
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white p-7 sm:p-8 rounded-xl shadow-md space-y-4">
            <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <Compass className="w-5 h-5 text-slate-950" />
            </div>
            <h3 className="text-xl font-bold tracking-tight">
              {t('हाम्रो दूरदृष्टि (Vision)', 'Our Vision')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {aboutSchool.vision[lang]}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white p-7 sm:p-8 rounded-xl shadow-md space-y-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center font-bold">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold tracking-tight">
              {t('हाम्रो लक्ष्य (Mission)', 'Our Mission')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {aboutSchool.mission[lang]}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
              {t('मूलभूत मूल्य र मान्यताहरू', 'Guiding School Values')}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
              {t('हाम्रा प्रमुख नैतिक स्तम्भहरू', 'Core Pillars of Excellence')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutSchool.values.map((val, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-900/40 transition-colors"
              >
                <div className="text-xs font-bold text-amber-800 mb-1">
                  0{idx + 1}.
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                  {val.title[lang]}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Objectives */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-blue-900 shrink-0" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              {t('विद्यालयका प्रमुख शैक्षिक उद्देश्यहरू', 'Primary Institutional Objectives')}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {aboutSchool.objectives[lang].map((obj, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-snug">{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
