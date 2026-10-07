import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { SchoolEmblem } from '../SchoolEmblem';
import { AdminOverview } from './AdminOverview';
import { AdminNotices } from './AdminNotices';
import { AdminTeachers } from './AdminTeachers';
import { AdminPrograms } from './AdminPrograms';
import { AdminAdmissions } from './AdminAdmissions';
import { AdminFacilities } from './AdminFacilities';
import { AdminAchievements } from './AdminAchievements';
import { AdminEvents } from './AdminEvents';
import { AdminGallery } from './AdminGallery';
import { AdminDownloads } from './AdminDownloads';
import { AdminPrincipalEditor } from './AdminPrincipalEditor';
import { AdminAboutEditor } from './AdminAboutEditor';
import { AdminSettingsEditor } from './AdminSettingsEditor';

import {
  LayoutDashboard,
  Bell,
  Users,
  BookOpen,
  GraduationCap,
  Building,
  Trophy,
  Calendar,
  Image as ImageIcon,
  Download,
  Quote,
  Compass,
  Settings,
  LogOut,
  ExternalLink,
  ShieldCheck,
  Globe,
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    adminLogout,
    setIsAdminView,
    lang,
    toggleLang,
    t,
    settings,
    admissions,
    notices,
  } = useSchool();

  const [activeTab, setActiveTab] = useState<string>('overview');

  const pendingCount = admissions.filter((a) => a.status === 'Pending').length;

  const navItems = [
    { id: 'overview', label: t('ड्यासबोर्ड', 'Overview'), icon: LayoutDashboard },
    { id: 'notices', label: t('सूचना पाटी', 'Notices'), icon: Bell, badge: notices.length },
    { id: 'admissions', label: t('भर्ना आवेदन', 'Admissions'), icon: GraduationCap, badge: pendingCount > 0 ? pendingCount : undefined },
    { id: 'teachers', label: t('शिक्षक-कर्मचारी', 'Faculty & Staff'), icon: Users },
    { id: 'programs', label: t('शैक्षिक कार्यक्रम', 'Programs'), icon: BookOpen },
    { id: 'facilities', label: t('सुविधाहरू', 'Facilities'), icon: Building },
    { id: 'achievements', label: t('उपलब्धिहरू', 'Achievements'), icon: Trophy },
    { id: 'events', label: t('कार्यक्रमहरू', 'Events'), icon: Calendar },
    { id: 'gallery', label: t('तस्बिर ग्यालरी', 'Gallery'), icon: ImageIcon },
    { id: 'downloads', label: t('डाउनलोड केन्द्र', 'Downloads'), icon: Download },
    { id: 'principal', label: t('प्रधानाध्यापक मन्तव्य', 'Principal Message'), icon: Quote },
    { id: 'about', label: t('हाम्रो बारेमा', 'About School'), icon: Compass },
    { id: 'settings', label: t('वेबसाइट सेटिङ', 'Settings & Map'), icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-slate-800">
      {/* Admin Top App Bar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40">
        <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SchoolEmblem size={38} />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold tracking-tight text-white">
                  {settings.schoolName[lang]}
                </span>
                <span className="text-[10px] font-bold bg-amber-500 text-slate-950 px-1.5 py-0.5 rounded">
                  ADMIN
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Official Administration Portal · Godaita-8, Sarlahi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Language Switch */}
            <button
              onClick={toggleLang}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'np' ? 'English' : 'नेपाली'}</span>
            </button>

            {/* Back to Public Website */}
            <button
              onClick={() => setIsAdminView(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-900 hover:bg-blue-800 text-white transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{t('वेबसाइट हेर्नुहोस्', 'View Public Site')}</span>
            </button>

            {/* Logout */}
            <button
              onClick={adminLogout}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-rose-950 text-slate-300 hover:text-rose-200 border border-slate-700 transition-colors"
              title="Logout"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Area */}
      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 gap-6">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 shrink-0 bg-white rounded-xl border border-slate-200/90 shadow-sm p-3 md:sticky md:top-20 self-start max-h-[85vh] overflow-y-auto">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-2">
            Navigation Menu
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-900 text-white font-semibold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-amber-400 text-slate-950'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Content Pane */}
        <main className="flex-1 min-w-0">
          {activeTab === 'overview' && <AdminOverview onNavigateTab={setActiveTab} />}
          {activeTab === 'notices' && <AdminNotices />}
          {activeTab === 'teachers' && <AdminTeachers />}
          {activeTab === 'programs' && <AdminPrograms />}
          {activeTab === 'admissions' && <AdminAdmissions />}
          {activeTab === 'facilities' && <AdminFacilities />}
          {activeTab === 'achievements' && <AdminAchievements />}
          {activeTab === 'events' && <AdminEvents />}
          {activeTab === 'gallery' && <AdminGallery />}
          {activeTab === 'downloads' && <AdminDownloads />}
          {activeTab === 'principal' && <AdminPrincipalEditor />}
          {activeTab === 'about' && <AdminAboutEditor />}
          {activeTab === 'settings' && <AdminSettingsEditor />}
        </main>
      </div>
    </div>
  );
};
