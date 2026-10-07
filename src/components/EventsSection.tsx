import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { Calendar, Clock, MapPin, Sparkles, Tag } from 'lucide-react';

export const EventsSection: React.FC = () => {
  const { events, lang, t } = useSchool();

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center justify-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{t('शैक्षिक क्यालेन्डर तथा कार्यक्रमहरू', 'Academic Calendar & Upcoming Events')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {t('विद्यालयका आगामी मुख्य गतिविधिहरू', 'School Events & Activities')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {t(
              'वार्षिक अभिभावक दिवस, विज्ञान प्रदर्शनी, खेलकुद सप्ताह र सांस्कृतिक महोत्सवहरू।',
              'Stay informed with our annual schedule, academic milestones, and community celebrations.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((ev) => (
            <div
              key={ev.id}
              className="bg-slate-50 rounded-xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Event Image if exists */}
                {ev.image && (
                  <div className="h-44 w-full overflow-hidden bg-slate-200">
                    <img
                      src={ev.image}
                      alt={ev.title[lang]}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-blue-900 flex items-center gap-1">
                      <Tag className="w-3 h-3 text-amber-500" />
                      <span>{ev.category}</span>
                    </span>
                    <span className="font-medium text-amber-800">
                      {ev.nepaliDate}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {ev.title[lang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {ev.description[lang]}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2 text-xs text-slate-600 border-t border-slate-200/60 mt-4">
                <div className="flex items-center gap-2 pt-3">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{ev.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{ev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
