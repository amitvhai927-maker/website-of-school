import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { SchoolEmblem } from './SchoolEmblem';
import { ArrowRight, Sparkles, Bell, BookOpen, ShieldCheck, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  const { lang, t, settings } = useSchool();

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Campus Image with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/school_hero_campus_1791285473257.jpg"
          alt="Shree Beni Bhola Model Secondary School Campus, Godaita-8, Sarlahi"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Unboxed institutional metadata line with typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span>{settings.schoolType[lang]}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{t('नेपाल सरकारबाट स्वीकृत', 'Govt. of Nepal Approved')}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{settings.estdYear}</span>
            </div>

            {/* School Title & Emblem Lockup */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] text-balance">
                {settings.schoolName[lang]}
              </h1>
              <p className="text-lg sm:text-xl text-amber-300/90 font-medium tracking-wide">
                {settings.tagline[lang]}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {lang === 'np'
                ? 'वि.सं. २००४ सालमा स्थापित, गोडैता-८, सर्लाहीको ऐतिहासिक र प्रतिष्ठित नमूना विद्यालय। शिशु कक्षा (ECD) देखि कक्षा १२ सम्म विज्ञान, व्यवस्थापन र शिक्षा संकायमा आधुनिक ल्याब, प्रविधिमैत्री कक्षाकोठा र उच्च नैतिक संस्कार सहितको गुणस्तरीय शिक्षा।'
                : 'Established in 2004 B.S. in Godaita-8, Sarlahi, Madhesh Province. A premier government-designated Model Secondary School delivering holistic education from ECD to Grade 12 in Science, Management, and Education streams with cutting-edge laboratories.'}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('#admission')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md hover:shadow-lg transition-all duration-150"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>{t('भर्ना आवेदन फारम', 'Admission Inquiry')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('#about')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-sm transition-all duration-150"
              >
                <BookOpen className="w-4 h-4 text-slate-300" />
                <span>{t('विद्यालयको परिचय', 'Explore Our School')}</span>
              </button>

              <button
                onClick={() => scrollTo('#notices')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-150"
              >
                <Bell className="w-4 h-4 text-amber-400" />
                <span>{t('सूचना हेर्नुहोस्', 'View Notices')}</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('निःशुल्क आधारभूत शिक्षा', 'Free Basic Education')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('नमूना विद्यालय अनुदान', 'Model School Grant')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('सुसज्जित साइन्स र ICT ल्याब', 'Modern Science & ICT')}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('+२ विज्ञान तथा व्यवस्थापन', '+2 Science & Mgmt')}</span>
              </div>
            </div>
          </div>

          {/* Right School Seal & Crest Presentation */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative group p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/60 border border-slate-800 backdrop-blur-md shadow-2xl text-center max-w-sm w-full">
              <div className="flex justify-center mb-4">
                <SchoolEmblem size={130} className="transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">
                {t('आधिकारिक विद्यालय छाप', 'Official School Seal')}
              </div>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">
                {settings.schoolName[lang]}
              </h3>
              <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 space-y-1">
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-500">{t('स्थान:', 'Location:')}</span>
                  <span className="text-slate-300 font-medium">Godaita-8, Sarlahi</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-500">{t('स्थापना:', 'Estd:')}</span>
                  <span className="text-amber-400 font-semibold">2004 B.S.</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-500">{t('तह:', 'Level:')}</span>
                  <span className="text-slate-300 font-medium">ECD – Grade 12</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-500">{t('प्रकार:', 'Type:')}</span>
                  <span className="text-slate-300 font-medium">Model Secondary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
