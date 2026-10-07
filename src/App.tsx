import React, { useEffect } from 'react';
import { SchoolProvider, useSchool } from './context/SchoolContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { NoticeBoard } from './components/NoticeBoard';
import { PrincipalMessage } from './components/PrincipalMessage';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FacilitiesSection } from './components/FacilitiesSection';
import { TeachersSection } from './components/TeachersSection';
import { AchievementsSection } from './components/AchievementsSection';
import { EventsSection } from './components/EventsSection';
import { GallerySection } from './components/GallerySection';
import { DownloadCenter } from './components/DownloadCenter';
import { AdmissionSection } from './components/AdmissionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { NoticeDetailModal } from './components/NoticeDetailModal';
import { TeacherDetailModal } from './components/TeacherDetailModal';
import { SearchModal } from './components/SearchModal';
import { AdminLoginModal } from './components/Admin/AdminLoginModal';
import { AdminDashboard } from './components/Admin/AdminDashboard';
import { ToastContainer } from './components/Toast';

const SchoolWebsiteContent: React.FC = () => {
  const { isAdminView, isAdminLoggedIn, lang, settings } = useSchool();

  useEffect(() => {
    // Dynamic page title matching bilingual language state
    document.title = `${settings.schoolName[lang]} | Godaita-8, Sarlahi`;
  }, [lang, settings]);

  if (isAdminView && isAdminLoggedIn) {
    return (
      <>
        <AdminDashboard />
        <ToastContainer />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* 1. Header (Sticky Responsive Navigation) */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Quick Statistics */}
        <QuickStats />

        {/* 4. Latest Notices */}
        <NoticeBoard />

        {/* 5. Principal's Message */}
        <PrincipalMessage />

        {/* 6. About School */}
        <AboutSection />

        {/* 7. Academic Programs */}
        <ProgramsSection />

        {/* 8. Why Choose Our School */}
        <WhyChooseUs />

        {/* 9. Facilities */}
        <FacilitiesSection />

        {/* 10. Teachers & Staff */}
        <TeachersSection />

        {/* 11. Achievements */}
        <AchievementsSection />

        {/* 12. Upcoming Events */}
        <EventsSection />

        {/* 13. Gallery */}
        <GallerySection />

        {/* Download Center */}
        <DownloadCenter />

        {/* 14. Admission CTA & Inquiry Form */}
        <AdmissionSection />

        {/* 15. Contact + Google Map */}
        <ContactSection />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* Global Interactive Modals */}
      <NoticeDetailModal />
      <TeacherDetailModal />
      <SearchModal />
      <AdminLoginModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <SchoolProvider>
      <SchoolWebsiteContent />
    </SchoolProvider>
  );
}
