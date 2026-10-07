import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import {
  Bell,
  Users,
  BookOpen,
  GraduationCap,
  Sparkles,
  Inbox,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

interface AdminOverviewProps {
  onNavigateTab: (tab: string) => void;
}

export const AdminOverview: React.FC<AdminOverviewProps> = ({ onNavigateTab }) => {
  const {
    notices,
    teachers,
    programs,
    admissions,
    contactMessages,
    settings,
    lang,
    t,
  } = useSchool();

  const pendingAdmissions = admissions.filter((a) => a.status === 'Pending').length;
  const unreadMessages = contactMessages.filter((m) => !m.isRead).length;

  const statCards = [
    {
      label: t('कुल प्रकाशित सूचनाहरू', 'Published Notices'),
      count: notices.length,
      icon: Bell,
      tab: 'notices',
      color: 'text-amber-500 bg-amber-50',
    },
    {
      label: t('शिक्षक तथा कर्मचारी', 'Faculty & Staff'),
      count: teachers.length,
      icon: Users,
      tab: 'teachers',
      color: 'text-blue-600 bg-blue-50',
    },
    {
      label: t('शैक्षिक कार्यक्रमहरू', 'Academic Programs'),
      count: programs.length,
      icon: BookOpen,
      tab: 'programs',
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      label: t('नयाँ भर्ना आवेदनहरू', 'Admission Inquiries'),
      count: admissions.length,
      pending: pendingAdmissions,
      icon: GraduationCap,
      tab: 'admissions',
      color: 'text-indigo-600 bg-indigo-50',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-1">
            {t('प्रशासक नियन्त्रण कक्ष', 'Administrator Portal')} · {settings.estdYear}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold">
            {settings.schoolName[lang]}
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            {t(
              'यस ड्यासबोर्डबाट विद्यालय वेबसाइटको सम्पूर्ण सामग्री (सूचना, शिक्षक, कार्यक्रम, भर्ना, फोटो आदि) प्रत्यक्ष सम्पादन गर्न सकिन्छ।',
              'Manage and update official announcements, teacher profiles, academic curricula, admissions, and website settings in real-time.'
            )}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigateTab('notices')}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shrink-0"
          >
            + {t('नयाँ सूचना थप्नुहोस्', 'Post Notice')}
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              onClick={() => onNavigateTab(card.tab)}
              className="bg-white p-5 rounded-xl border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all cursor-pointer flex items-center justify-between"
            >
              <div>
                <div className="text-xs text-slate-500 font-medium">{card.label}</div>
                <div className="text-2xl font-bold text-slate-900 mt-1 tabular-nums">
                  {card.count}
                </div>
                {card.pending !== undefined && card.pending > 0 && (
                  <div className="text-[11px] font-semibold text-rose-800 mt-1">
                    {card.pending} {t('प्रतीक्षारत (Pending)', 'Pending Review')}
                  </div>
                )}
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.color}`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Admissions & Recent Notices Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Recent Admissions Inquiries */}
        <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Inbox className="w-4 h-4 text-blue-900" />
              <h3 className="text-sm font-bold text-slate-900">
                {t('पछिल्ला भर्ना आवेदनहरू', 'Recent Admission Inquiries')}
              </h3>
            </div>
            <button
              onClick={() => onNavigateTab('admissions')}
              className="text-xs font-semibold text-blue-900 hover:underline flex items-center gap-1"
            >
              <span>{t('सबै हेर्नुहोस्', 'View All')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {admissions.slice(0, 4).map((adm) => (
              <div key={adm.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                <div>
                  <div className="font-bold text-slate-900">{adm.studentName}</div>
                  <div className="text-slate-500 text-[11px]">
                    {adm.grade} · {adm.phone} · {adm.submittedAt}
                  </div>
                </div>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    adm.status === 'Pending'
                      ? 'bg-amber-100 text-amber-800'
                      : adm.status === 'Approved'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {adm.status}
                </span>
              </div>
            ))}
            {admissions.length === 0 && (
              <div className="py-6 text-center text-slate-400 text-xs">
                {t('कुनै नयाँ भर्ना आवेदन छैन।', 'No admission inquiries yet.')}
              </div>
            )}
          </div>
        </div>

        {/* Quick Quick Management Shortcuts */}
        <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{t('द्रुत सम्पादन सर्टकटहरू', 'Quick Management Shortcuts')}</span>
          </h3>

          <div className="space-y-2 text-xs">
            {[
              { label: t('प्रधानाध्यापकको सन्देश सम्पादन', 'Edit Principal Message'), tab: 'principal' },
              { label: t('हाम्रो बारेमा र इतिहास परिवर्तन', 'Update History & Mission'), tab: 'about' },
              { label: t('सम्पर्क नम्बर र गुगल नक्सा सेटिङ', 'Phone, Email & Map Embed'), tab: 'settings' },
              { label: t('ग्यालरी तस्बिरहरू व्यवस्थापन', 'Manage Photo Gallery'), tab: 'gallery' },
              { label: t('फारम र क्यालेन्डर डाउनलोड', 'Manage Downloads & Forms'), tab: 'downloads' },
            ].map((shortcut, idx) => (
              <button
                key={idx}
                onClick={() => onNavigateTab(shortcut.tab)}
                className="w-full text-left p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 hover:text-blue-900 text-slate-700 font-medium flex items-center justify-between transition-colors"
              >
                <span>{shortcut.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
