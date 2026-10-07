import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { SchoolEmblem } from './SchoolEmblem';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  Facebook,
  Youtube,
  Shield,
  Heart,
  Lock,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, t, settings, setIsLoginModalOpen, isAdminLoggedIn, isAdminView, setIsAdminView } = useSchool();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (hash: string) => {
    if (isAdminView) setIsAdminView(false);
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 text-xs border-t border-slate-800">
      {/* Upper Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <SchoolEmblem size={52} />
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {settings.schoolName[lang]}
                </h3>
                <p className="text-[11px] text-amber-400 font-medium">
                  {settings.schoolType[lang]}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {lang === 'np'
                ? 'वि.सं. २००४ सालमा स्थापित, गोडैता-८, सर्लाहीको गौरवमय नमूना माध्यमिक विद्यालय। विद्या ददाति विनयम् को आदर्शमा आधारित गुणस्तरीय शिक्षा।'
                : 'Established in 2004 B.S. in Godaita-8, Sarlahi. A premier Model Secondary School empowering youth through rigorous STEM learning, moral ethics, and community service.'}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={settings.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 border border-slate-800 transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={settings.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-red-600 hover:text-white flex items-center justify-center text-slate-400 border border-slate-800 transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t('छिटो लिङ्कहरू', 'Quick Navigation')}
            </h4>
            <ul className="space-y-2">
              {[
                { href: '#home', label: t('गृहपृष्ठ', 'Home') },
                { href: '#about', label: t('हाम्रो बारेमा', 'About School') },
                { href: '#notices', label: t('सूचना पाटी', 'Notices & Circulars') },
                { href: '#facilities', label: t('सुविधाहरू', 'Campus Facilities') },
                { href: '#teachers', label: t('शिक्षक तथा कर्मचारी', 'Teachers & Staff') },
                { href: '#achievements', label: t('उपलब्धिहरू', 'Achievements') },
                { href: '#gallery', label: t('तस्बिर ग्यालरी', 'Photo Gallery') },
                { href: '#downloads', label: t('डाउनलोड केन्द्र', 'Download Forms') },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="hover:text-amber-400 transition-colors text-left text-xs text-slate-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic Programs (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t('शैक्षिक कार्यक्रम', 'Academic Levels')}
            </h4>
            <ul className="space-y-2">
              {[
                '+2 Science (विज्ञान)',
                '+2 Management (व्यवस्थापन)',
                '+2 Education (शिक्षा)',
                'Secondary (SEE Grade 9-10)',
                'Basic Level (Grade 1-8)',
                'ECD / Nursery',
              ].map((prog, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollTo('#programs')}
                    className="hover:text-amber-400 transition-colors text-left text-xs text-slate-400"
                  >
                    {prog}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t('सम्पर्क कार्यालय', 'Contact Administration')}
            </h4>
            <div className="space-y-2.5 text-slate-400 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{settings.location[lang]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{settings.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{settings.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-snug">{settings.officeHours[lang]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Administrative strip */}
      <div className="border-t border-slate-800 bg-slate-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {settings.schoolName[lang]}. {t('सर्वाधिकार सुरक्षित।', 'All Rights Reserved.')}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                if (isAdminLoggedIn) setIsAdminView(!isAdminView);
                else setIsLoginModalOpen(true);
              }}
              className="flex items-center gap-1 hover:text-amber-400 transition-colors text-slate-400"
            >
              <Lock className="w-3 h-3" />
              <span>{isAdminLoggedIn ? t('व्यवस्थापक ड्यासबोर्ड', 'Admin Dashboard') : t('प्रशासन लगइन', 'Admin Login')}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors text-slate-400"
            >
              <span>{t('माथि जानुहोस्', 'Back to Top')}</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
