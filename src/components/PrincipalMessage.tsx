import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { Quote, ChevronDown, ChevronUp, Award, BookOpen } from 'lucide-react';

export const PrincipalMessage: React.FC = () => {
  const { principalMessage, lang, t, settings } = useSchool();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl overflow-hidden shadow-xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Principal Photo & Credential Column */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-slate-800">
              <div className="relative mb-5">
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-xl overflow-hidden border-2 border-amber-400/80 shadow-2xl bg-slate-800">
                  <img
                    src={principalMessage.photo || '/src/assets/images/principal_message_portrait_1791285490222.jpg'}
                    alt={principalMessage.name[lang]}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shadow-md">
                  <Quote className="w-5 h-5 fill-slate-950" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                {principalMessage.name[lang]}
              </h3>
              <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold mt-1">
                {principalMessage.designation[lang]}
              </p>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                {settings.schoolName[lang]} · Godaita-8, Sarlahi
              </p>
            </div>

            {/* Principal Narrative Message Column */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 space-y-5">
              <div className="text-xs uppercase font-bold tracking-widest text-amber-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t('प्रधानाध्यापकको सन्देश', "Message from the Principal")}</span>
              </div>

              <blockquote className="text-lg sm:text-xl font-serif italic text-amber-100/95 leading-snug border-l-2 border-amber-400 pl-4 py-1">
                "{principalMessage.quote[lang]}"
              </blockquote>

              <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-3">
                <p>
                  {isExpanded
                    ? principalMessage.content[lang]
                    : `${principalMessage.content[lang].slice(0, 320)}...`}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>{isExpanded ? t('कम देखाउनुहोस्', 'Read Less') : t('पूरा सन्देश पढ्नुहोस्', 'Read Full Message')}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <span className="text-[11px] text-slate-500 italic">
                  {t('विद्या ददाति विनयम्', 'Vidya Dadati Vinayam')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
