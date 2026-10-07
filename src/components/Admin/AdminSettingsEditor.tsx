import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Save, RotateCcw, Download, Upload, ShieldAlert, CheckCircle } from 'lucide-react';

export const AdminSettingsEditor: React.FC = () => {
  const { settings, updateSettings, resetToDefaultData, lang, t, addToast } = useSchool();

  const [form, setForm] = useState({
    schoolNameEn: settings.schoolName.en,
    schoolNameNp: settings.schoolName.np,
    taglineEn: settings.tagline.en,
    taglineNp: settings.tagline.np,
    phone: settings.phone,
    phoneAlternate: settings.phoneAlternate,
    email: settings.email,
    admissionEmail: settings.admissionEmail,
    locationEn: settings.location.en,
    locationNp: settings.location.np,
    officeHoursEn: settings.officeHours.en,
    officeHoursNp: settings.officeHours.np,
    mapEmbedUrl: settings.mapEmbedUrl,
    facebookUrl: settings.facebookUrl,
    youtubeUrl: settings.youtubeUrl,
    bannerEnabled: settings.importantNoticeBanner?.enabled ?? true,
    bannerTextEn: settings.importantNoticeBanner?.text.en ?? '',
    bannerTextNp: settings.importantNoticeBanner?.text.np ?? '',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      schoolName: { en: form.schoolNameEn, np: form.schoolNameNp },
      tagline: { en: form.taglineEn, np: form.taglineNp },
      phone: form.phone,
      phoneAlternate: form.phoneAlternate,
      email: form.email,
      admissionEmail: form.admissionEmail,
      location: { en: form.locationEn, np: form.locationNp },
      officeHours: { en: form.officeHoursEn, np: form.officeHoursNp },
      mapEmbedUrl: form.mapEmbedUrl,
      facebookUrl: form.facebookUrl,
      youtubeUrl: form.youtubeUrl,
      importantNoticeBanner: {
        enabled: form.bannerEnabled,
        text: { en: form.bannerTextEn, np: form.bannerTextNp },
      },
    });
  };

  const handleExportBackup = () => {
    const backupData = {
      exportDate: new Date().toISOString(),
      school: 'Shree Beni Bhola Model Secondary School',
      localStorageDump: {
        settings: localStorage.getItem('sbb_settings'),
        notices: localStorage.getItem('sbb_notices'),
        teachers: localStorage.getItem('sbb_teachers'),
        programs: localStorage.getItem('sbb_programs'),
        facilities: localStorage.getItem('sbb_facilities'),
        events: localStorage.getItem('sbb_events'),
        gallery: localStorage.getItem('sbb_gallery'),
        downloads: localStorage.getItem('sbb_downloads'),
        admissions: localStorage.getItem('sbb_admissions'),
      },
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sbb_school_backup_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    addToast('Website JSON database backup exported successfully', 'success');
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to restore all school data to original default values? Custom edits will be reset.')) {
      resetToDefaultData();
    }
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Contact & Map Settings Form */}
      <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/90 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-lg font-bold text-slate-900">
            {t('सम्पर्क विवरण, गुगल म्याप र विद्यालय सेटिङ', 'School Settings, Contact Lines & Google Maps')}
          </h2>
          <p className="text-xs text-slate-500">
            {t('फोन, ईमेल, कार्यालय समय र गुगल म्याप लिङ्क व्यवस्थापन गर्नुहोस्।', 'Update official phone numbers, addresses, social channels and maps.')}
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-5 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Primary Phone Number *
              </label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Alternate / Mobile Number
              </label>
              <input
                type="text"
                value={form.phoneAlternate}
                onChange={(e) => setForm({ ...form, phoneAlternate: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                General Inquiry Email *
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Admission Desk Email
              </label>
              <input
                type="email"
                value={form.admissionEmail}
                onChange={(e) => setForm({ ...form, admissionEmail: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Office Hours (English)
              </label>
              <input
                type="text"
                value={form.officeHoursEn}
                onChange={(e) => setForm({ ...form, officeHoursEn: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                कार्यालय समय (नेपालीमा)
              </label>
              <input
                type="text"
                value={form.officeHoursNp}
                onChange={(e) => setForm({ ...form, officeHoursNp: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Google Maps Embed URL (iframe src)
            </label>
            <input
              type="text"
              value={form.mapEmbedUrl}
              onChange={(e) => setForm({ ...form, mapEmbedUrl: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Paste the embed src URL from Google Maps (Share → Embed a map → copy src attribute).
            </p>
          </div>

          {/* Urgent Notice Alert Banner Settings */}
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
                <input
                  type="checkbox"
                  checked={form.bannerEnabled}
                  onChange={(e) => setForm({ ...form, bannerEnabled: e.target.checked })}
                  className="w-4 h-4 rounded text-blue-900"
                />
                <span>{t('शीर्ष सूचना ब्यानर सक्रिय गर्नुहोस्', 'Enable Top Alert Announcement Banner')}</span>
              </label>
            </div>

            {form.bannerEnabled && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block font-medium text-slate-600 mb-1">Banner Text (English)</label>
                  <input
                    type="text"
                    value={form.bannerTextEn}
                    onChange={(e) => setForm({ ...form, bannerTextEn: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-600 mb-1">ब्यानर सूचना (नेपालीमा)</label>
                  <input
                    type="text"
                    value={form.bannerTextNp}
                    onChange={(e) => setForm({ ...form, bannerTextNp: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>{t('सेटिङ सुरक्षित गर्नुहोस्', 'Save Settings')}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Database Backup & Reset Section */}
      <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/90 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <Download className="w-4 h-4 text-slate-700" />
          <span>{t('डाटाब्याकअप तथा पुनर्स्थापना', 'Data Backup & Factory Reset')}</span>
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          {t(
            'विद्यालयका सबै सूचना, शिक्षक, कार्यक्रम, र भर्ना आवेदनहरूको ब्याकअप JSON फाइलको रूपमा डाउनलोड गर्नुहोस्।',
            'Export full website content as a portable JSON snapshot or restore to initial default database.'
          )}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={handleExportBackup}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-white"
          >
            <Download className="w-4 h-4" />
            <span>{t('JSON ब्याकअप डाउनलोड गर्नुहोस्', 'Export JSON Backup')}</span>
          </button>

          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t('सुरुवाती डाटामा रिसेट गर्नुहोस्', 'Restore Defaults')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
