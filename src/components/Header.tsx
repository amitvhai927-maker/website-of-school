import React, { useState, useEffect } from 'react';
import { useSchool } from '../context/SchoolContext';
import { SchoolEmblem } from './SchoolEmblem';
import {
  Search,
  Globe,
  Menu,
  X,
  Bell,
  Lock,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    lang,
    toggleLang,
    t,
    settings,
    setIsSearchOpen,
    setIsLoginModalOpen,
    isAdminLoggedIn,
    isAdminView,
    setIsAdminView,
    notices,
    setSelectedNotice,
  } = useSchool();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('गृहपृष्ठ', 'Home') },
    { href: '#about', label: t('हाम्रो बारेमा', 'About') },
    { href: '#programs', label: t('शैक्षिक कार्यक्रम', 'Academics') },
    { href: '#notices', label: t('सूचना पाटी', 'Notices') },
    { href: '#facilities', label: t('सुविधाहरू', 'Facilities') },
    { href: '#teachers', label: t('शिक्षक तथा कर्मचारी', 'Teachers') },
    { href: '#achievements', label: t('उपलब्धिहरू', 'Achievements') },
    { href: '#events', label: t('कार्यक्रमहरू', 'Events') },
    { href: '#gallery', label: t('तस्बिर ग्यालरी', 'Gallery') },
    { href: '#admission', label: t('भर्ना', 'Admission') },
    { href: '#downloads', label: t('डाउनलोड', 'Downloads') },
    { href: '#contact', label: t('सम्पर्क', 'Contact') },
  ];

  const pinnedNotice = notices.find((n) => n.isPinned);

  const scrollTo = (hash: string) => {
    setMobileMenuOpen(false);
    if (isAdminView) {
      setIsAdminView(false);
    }
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Utility Announcement Ribbon */}
      <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-3">
          {/* Quick contact markers */}
          <div className="flex items-center gap-4 text-[11px] font-medium tracking-tight">
            <span className="flex items-center gap-1.5 text-amber-400">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{settings.location[lang]}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-white">
              <Phone className="w-3.5 h-3.5 shrink-0 text-slate-400" />
              <span>{settings.phone}</span>
            </span>
            <span className="hidden lg:flex items-center gap-1.5 hover:text-white">
              <Mail className="w-3.5 h-3.5 shrink-0 text-slate-400" />
              <span>{settings.email}</span>
            </span>
          </div>

          {/* Urgent Notice Alert or Language switch */}
          <div className="flex items-center gap-3 ml-auto">
            {settings.importantNoticeBanner?.enabled && (
              <button
                onClick={() => {
                  if (pinnedNotice) setSelectedNotice(pinnedNotice);
                  else scrollTo('#notices');
                }}
                className="flex items-center gap-1 text-[11px] text-amber-300 hover:text-amber-200 max-w-[280px] sm:max-w-md truncate text-left"
                title={settings.importantNoticeBanner.text[lang]}
              >
                <Bell className="w-3 h-3 text-amber-400 animate-pulse shrink-0" />
                <span className="truncate">{settings.importantNoticeBanner.text[lang]}</span>
              </button>
            )}

            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
              aria-label="Toggle language"
            >
              <Globe className="w-3 h-3 text-amber-400" />
              <span className="font-semibold">{lang === 'np' ? 'English (EN)' : 'नेपाली (NP)'}</span>
            </button>

            {/* Admin Portal Button */}
            <button
              onClick={() => {
                if (isAdminLoggedIn) {
                  setIsAdminView(!isAdminView);
                } else {
                  setIsLoginModalOpen(true);
                }
              }}
              className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                isAdminLoggedIn && isAdminView
                  ? 'bg-amber-500 text-slate-950 font-semibold'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
              }`}
              title="Admin Control Panel"
            >
              <Lock className="w-3 h-3 text-amber-400" />
              <span>{isAdminLoggedIn ? (isAdminView ? t('वेबसाइट हेर्नुहोस्', 'View Site') : t('प्रशासन', 'Admin')) : t('प्रशासक लगइन', 'Admin')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full bg-white transition-shadow duration-200 ${
          isScrolled ? 'shadow-md border-b border-slate-200' : 'border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Zone (Single-line wordmark with official emblem) */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#home');
              }}
              className="flex items-center gap-3 group shrink-0"
            >
              <SchoolEmblem size={52} className="group-hover:scale-105 transition-transform" />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-900 transition-colors">
                  {settings.schoolName[lang]}
                </span>
                <span className="text-xs font-medium text-slate-700 tracking-normal flex items-center gap-1">
                  <span>{settings.location[lang]}</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-amber-800 font-semibold">{t('स्था. वि.सं. २००४', 'Estd. 2004 B.S.')}</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 text-[13px] font-medium text-slate-700">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#home');
                }}
                className="hover:text-blue-900 transition-colors py-1"
              >
                {t('गृहपृष्ठ', 'Home')}
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#about');
                }}
                className="hover:text-blue-900 transition-colors py-1"
              >
                {t('हाम्रो बारेमा', 'About')}
              </a>
              <a
                href="#programs"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#programs');
                }}
                className="hover:text-blue-900 transition-colors py-1"
              >
                {t('शैक्षिक कार्यक्रम', 'Academics')}
              </a>
              <a
                href="#notices"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#notices');
                }}
                className="hover:text-blue-900 transition-colors py-1 relative"
              >
                <span>{t('सूचना पाटी', 'Notices')}</span>
                {pinnedNotice && (
                  <span className="absolute -top-1 -right-2 w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                )}
              </a>
              <a
                href="#facilities"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#facilities');
                }}
                className="hover:text-blue-900 transition-colors py-1"
              >
                {t('सुविधाहरू', 'Facilities')}
              </a>
              <a
                href="#teachers"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#teachers');
                }}
                className="hover:text-blue-900 transition-colors py-1"
              >
                {t('शिक्षक-कर्मचारी', 'Faculty')}
              </a>
              <a
                href="#achievements"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#achievements');
                }}
                className="hover:text-blue-900 transition-colors py-1"
              >
                {t('उपलब्धिहरू', 'Achievements')}
              </a>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#gallery');
                }}
                className="hover:text-blue-900 transition-colors py-1"
              >
                {t('ग्यालरी', 'Gallery')}
              </a>
              <a
                href="#downloads"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#downloads');
                }}
                className="hover:text-blue-900 transition-colors py-1"
              >
                {t('डाउनलोड', 'Downloads')}
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#contact');
                }}
                className="hover:text-blue-900 transition-colors py-1"
              >
                {t('सम्पर्क', 'Contact')}
              </a>
            </nav>

            {/* Actions Zone */}
            <div className="flex items-center gap-2.5">
              {/* Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                title={t('वेबसाइटमा खोज्नुहोस्', 'Search website')}
                aria-label="Search website"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Admission CTA Button */}
              <button
                onClick={() => scrollTo('#admission')}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-900 hover:bg-blue-800 text-white shadow-sm hover:shadow transition-all whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t('नयाँ भर्ना आवेदन', 'Admission Inquiry')}</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-1">
            <div className="p-3 bg-blue-50 rounded-lg mb-3 border border-blue-100">
              <div className="text-xs font-semibold text-blue-950">{settings.schoolName[lang]}</div>
              <div className="text-[11px] text-blue-800 mt-0.5">{settings.tagline[lang]}</div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-900 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-xs text-slate-400">→</span>
              </a>
            ))}

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => scrollTo('#admission')}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold rounded-lg bg-blue-900 text-white shadow-sm"
              >
                {t('नयाँ भर्ना आवेदन फारम', 'Online Admission Form')}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (isAdminLoggedIn) setIsAdminView(!isAdminView);
                  else setIsLoginModalOpen(true);
                }}
                className="w-full py-2 px-4 text-center text-xs font-medium rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                {isAdminLoggedIn ? t('प्रशासन ड्यासबोर्ड खोल्नुहोस्', 'Open Admin Dashboard') : t('प्रशासक लगइन पोर्टल', 'Admin Login Portal')}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
