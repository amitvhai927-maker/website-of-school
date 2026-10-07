import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Language,
  SchoolSettings,
  PrincipalMessageData,
  AboutSchoolData,
  Notice,
  AcademicProgram,
  Teacher,
  Facility,
  Achievement,
  SchoolEvent,
  GalleryItem,
  DownloadItem,
  AdmissionInquiry,
  ContactMessage,
} from '../types';
import {
  initialSchoolSettings,
  initialPrincipalMessage,
  initialAboutSchool,
  initialNotices,
  initialPrograms,
  initialTeachers,
  initialFacilities,
  initialAchievements,
  initialEvents,
  initialGallery,
  initialDownloads,
} from '../data/initialData';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface SchoolContextType {
  // Localization
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (np: string, en: string) => string;

  // School Data
  settings: SchoolSettings;
  updateSettings: (newSettings: Partial<SchoolSettings>) => void;

  principalMessage: PrincipalMessageData;
  updatePrincipalMessage: (data: Partial<PrincipalMessageData>) => void;

  aboutSchool: AboutSchoolData;
  updateAboutSchool: (data: Partial<AboutSchoolData>) => void;

  // Notices
  notices: Notice[];
  addNotice: (notice: Omit<Notice, 'id'>) => void;
  updateNotice: (id: string, notice: Partial<Notice>) => void;
  deleteNotice: (id: string) => void;
  togglePinNotice: (id: string) => void;

  // Programs
  programs: AcademicProgram[];
  addProgram: (program: Omit<AcademicProgram, 'id'>) => void;
  updateProgram: (id: string, program: Partial<AcademicProgram>) => void;
  deleteProgram: (id: string) => void;

  // Teachers
  teachers: Teacher[];
  addTeacher: (teacher: Omit<Teacher, 'id'>) => void;
  updateTeacher: (id: string, teacher: Partial<Teacher>) => void;
  deleteTeacher: (id: string) => void;

  // Facilities
  facilities: Facility[];
  addFacility: (facility: Omit<Facility, 'id'>) => void;
  updateFacility: (id: string, facility: Partial<Facility>) => void;
  deleteFacility: (id: string) => void;

  // Achievements
  achievements: Achievement[];
  addAchievement: (achievement: Omit<Achievement, 'id'>) => void;
  updateAchievement: (id: string, achievement: Partial<Achievement>) => void;
  deleteAchievement: (id: string) => void;

  // Events
  events: SchoolEvent[];
  addEvent: (event: Omit<SchoolEvent, 'id'>) => void;
  updateEvent: (id: string, event: Partial<SchoolEvent>) => void;
  deleteEvent: (id: string) => void;

  // Gallery
  gallery: GalleryItem[];
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  updateGalleryItem: (id: string, item: Partial<GalleryItem>) => void;
  deleteGalleryItem: (id: string) => void;

  // Downloads
  downloads: DownloadItem[];
  addDownload: (item: Omit<DownloadItem, 'id'>) => void;
  updateDownload: (id: string, item: Partial<DownloadItem>) => void;
  deleteDownload: (id: string) => void;

  // Admission Inquiries
  admissions: AdmissionInquiry[];
  submitAdmission: (inquiry: Omit<AdmissionInquiry, 'id' | 'submittedAt' | 'status'>) => void;
  updateAdmissionStatus: (id: string, status: AdmissionInquiry['status']) => void;
  deleteAdmission: (id: string) => void;

  // Contact Messages
  contactMessages: ContactMessage[];
  submitContactMessage: (msg: Omit<ContactMessage, 'id' | 'submittedAt' | 'isRead'>) => void;
  markContactMessageRead: (id: string) => void;
  deleteContactMessage: (id: string) => void;

  // Modals & Navigation
  selectedNotice: Notice | null;
  setSelectedNotice: (notice: Notice | null) => void;

  selectedTeacher: Teacher | null;
  setSelectedTeacher: (teacher: Teacher | null) => void;

  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;

  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;

  isAdminView: boolean;
  setIsAdminView: (view: boolean) => void;

  // Admin Authentication
  isAdminLoggedIn: boolean;
  adminLogin: (password: string) => boolean;
  adminLogout: () => void;

  // Reset
  resetToDefaultData: () => void;

  // Feedback
  toasts: ToastMessage[];
  addToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

const STORAGE_KEYS = {
  LANG: 'sbb_lang',
  SETTINGS: 'sbb_settings',
  PRINCIPAL: 'sbb_principal',
  ABOUT: 'sbb_about',
  NOTICES: 'sbb_notices',
  PROGRAMS: 'sbb_programs',
  TEACHERS: 'sbb_teachers',
  FACILITIES: 'sbb_facilities',
  ACHIEVEMENTS: 'sbb_achievements',
  EVENTS: 'sbb_events',
  GALLERY: 'sbb_gallery',
  DOWNLOADS: 'sbb_downloads',
  ADMISSIONS: 'sbb_admissions',
  CONTACTS: 'sbb_contacts',
  ADMIN_SESSION: 'sbb_admin_session',
};

export const SchoolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language
  const [lang, setLangState] = useState<Language>(() => {
    return (localStorage.getItem(STORAGE_KEYS.LANG) as Language) || 'np';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEYS.LANG, newLang);
  };

  const toggleLang = () => {
    setLang(lang === 'np' ? 'en' : 'np');
  };

  const t = (np: string, en: string) => (lang === 'np' ? np : en);

  // Settings
  const [settings, setSettings] = useState<SchoolSettings>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return saved ? JSON.parse(saved) : initialSchoolSettings;
  });

  const updateSettings = (newSettings: Partial<SchoolSettings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updated));
      return updated;
    });
    addToast('School settings updated successfully', 'success');
  };

  // Principal Message
  const [principalMessage, setPrincipalMessage] = useState<PrincipalMessageData>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PRINCIPAL);
    return saved ? JSON.parse(saved) : initialPrincipalMessage;
  });

  const updatePrincipalMessage = (data: Partial<PrincipalMessageData>) => {
    setPrincipalMessage((prev) => {
      const updated = { ...prev, ...data };
      localStorage.setItem(STORAGE_KEYS.PRINCIPAL, JSON.stringify(updated));
      return updated;
    });
    addToast('Principal message updated', 'success');
  };

  // About School
  const [aboutSchool, setAboutSchool] = useState<AboutSchoolData>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ABOUT);
    return saved ? JSON.parse(saved) : initialAboutSchool;
  });

  const updateAboutSchool = (data: Partial<AboutSchoolData>) => {
    setAboutSchool((prev) => {
      const updated = { ...prev, ...data };
      localStorage.setItem(STORAGE_KEYS.ABOUT, JSON.stringify(updated));
      return updated;
    });
    addToast('About information updated', 'success');
  };

  // Notices
  const [notices, setNotices] = useState<Notice[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.NOTICES);
    return saved ? JSON.parse(saved) : initialNotices;
  });

  const addNotice = (notice: Omit<Notice, 'id'>) => {
    const newNotice: Notice = {
      ...notice,
      id: `notice-${Date.now()}`,
    };
    setNotices((prev) => {
      const updated = [newNotice, ...prev];
      localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(updated));
      return updated;
    });
    addToast('Notice published successfully', 'success');
  };

  const updateNotice = (id: string, updatedFields: Partial<Notice>) => {
    setNotices((prev) => {
      const updated = prev.map((n) => (n.id === id ? { ...n, ...updatedFields } : n));
      localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(updated));
      return updated;
    });
    addToast('Notice updated successfully', 'success');
  };

  const deleteNotice = (id: string) => {
    setNotices((prev) => {
      const updated = prev.filter((n) => n.id !== id);
      localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(updated));
      return updated;
    });
    addToast('Notice removed', 'info');
  };

  const togglePinNotice = (id: string) => {
    setNotices((prev) => {
      const updated = prev.map((n) => (n.id === id ? { ...n, isPinned: !n.isPinned } : n));
      localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(updated));
      return updated;
    });
  };

  // Programs
  const [programs, setPrograms] = useState<AcademicProgram[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PROGRAMS);
    return saved ? JSON.parse(saved) : initialPrograms;
  });

  const addProgram = (program: Omit<AcademicProgram, 'id'>) => {
    const newProgram: AcademicProgram = { ...program, id: `prog-${Date.now()}` };
    setPrograms((prev) => {
      const updated = [...prev, newProgram];
      localStorage.setItem(STORAGE_KEYS.PROGRAMS, JSON.stringify(updated));
      return updated;
    });
    addToast('Academic program added', 'success');
  };

  const updateProgram = (id: string, fields: Partial<AcademicProgram>) => {
    setPrograms((prev) => {
      const updated = prev.map((p) => (p.id === id ? { ...p, ...fields } : p));
      localStorage.setItem(STORAGE_KEYS.PROGRAMS, JSON.stringify(updated));
      return updated;
    });
    addToast('Program updated', 'success');
  };

  const deleteProgram = (id: string) => {
    setPrograms((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      localStorage.setItem(STORAGE_KEYS.PROGRAMS, JSON.stringify(updated));
      return updated;
    });
    addToast('Program removed', 'info');
  };

  // Teachers
  const [teachers, setTeachers] = useState<Teacher[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.TEACHERS);
    return saved ? JSON.parse(saved) : initialTeachers;
  });

  const addTeacher = (teacher: Omit<Teacher, 'id'>) => {
    const newTeacher: Teacher = { ...teacher, id: `tch-${Date.now()}` };
    setTeachers((prev) => {
      const updated = [...prev, newTeacher];
      localStorage.setItem(STORAGE_KEYS.TEACHERS, JSON.stringify(updated));
      return updated;
    });
    addToast('Teacher profile added', 'success');
  };

  const updateTeacher = (id: string, fields: Partial<Teacher>) => {
    setTeachers((prev) => {
      const updated = prev.map((t) => (t.id === id ? { ...t, ...fields } : t));
      localStorage.setItem(STORAGE_KEYS.TEACHERS, JSON.stringify(updated));
      return updated;
    });
    addToast('Teacher profile updated', 'success');
  };

  const deleteTeacher = (id: string) => {
    setTeachers((prev) => {
      const updated = prev.filter((t) => t.id !== id);
      localStorage.setItem(STORAGE_KEYS.TEACHERS, JSON.stringify(updated));
      return updated;
    });
    addToast('Teacher removed', 'info');
  };

  // Facilities
  const [facilities, setFacilities] = useState<Facility[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.FACILITIES);
    return saved ? JSON.parse(saved) : initialFacilities;
  });

  const addFacility = (facility: Omit<Facility, 'id'>) => {
    const newFac: Facility = { ...facility, id: `fac-${Date.now()}` };
    setFacilities((prev) => {
      const updated = [...prev, newFac];
      localStorage.setItem(STORAGE_KEYS.FACILITIES, JSON.stringify(updated));
      return updated;
    });
    addToast('Facility added', 'success');
  };

  const updateFacility = (id: string, fields: Partial<Facility>) => {
    setFacilities((prev) => {
      const updated = prev.map((f) => (f.id === id ? { ...f, ...fields } : f));
      localStorage.setItem(STORAGE_KEYS.FACILITIES, JSON.stringify(updated));
      return updated;
    });
    addToast('Facility updated', 'success');
  };

  const deleteFacility = (id: string) => {
    setFacilities((prev) => {
      const updated = prev.filter((f) => f.id !== id);
      localStorage.setItem(STORAGE_KEYS.FACILITIES, JSON.stringify(updated));
      return updated;
    });
    addToast('Facility removed', 'info');
  };

  // Achievements
  const [achievements, setAchievements] = useState<Achievement[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
    return saved ? JSON.parse(saved) : initialAchievements;
  });

  const addAchievement = (achievement: Omit<Achievement, 'id'>) => {
    const newAch: Achievement = { ...achievement, id: `ach-${Date.now()}` };
    setAchievements((prev) => {
      const updated = [newAch, ...prev];
      localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(updated));
      return updated;
    });
    addToast('Achievement added', 'success');
  };

  const updateAchievement = (id: string, fields: Partial<Achievement>) => {
    setAchievements((prev) => {
      const updated = prev.map((a) => (a.id === id ? { ...a, ...fields } : a));
      localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(updated));
      return updated;
    });
    addToast('Achievement updated', 'success');
  };

  const deleteAchievement = (id: string) => {
    setAchievements((prev) => {
      const updated = prev.filter((a) => a.id !== id);
      localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(updated));
      return updated;
    });
    addToast('Achievement removed', 'info');
  };

  // Events
  const [events, setEvents] = useState<SchoolEvent[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.EVENTS);
    return saved ? JSON.parse(saved) : initialEvents;
  });

  const addEvent = (event: Omit<SchoolEvent, 'id'>) => {
    const newEvent: SchoolEvent = { ...event, id: `ev-${Date.now()}` };
    setEvents((prev) => {
      const updated = [newEvent, ...prev];
      localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(updated));
      return updated;
    });
    addToast('Event created', 'success');
  };

  const updateEvent = (id: string, fields: Partial<SchoolEvent>) => {
    setEvents((prev) => {
      const updated = prev.map((e) => (e.id === id ? { ...e, ...fields } : e));
      localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(updated));
      return updated;
    });
    addToast('Event updated', 'success');
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => {
      const updated = prev.filter((e) => e.id !== id);
      localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(updated));
      return updated;
    });
    addToast('Event removed', 'info');
  };

  // Gallery
  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
    return saved ? JSON.parse(saved) : initialGallery;
  });

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = { ...item, id: `gal-${Date.now()}` };
    setGallery((prev) => {
      const updated = [newItem, ...prev];
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(updated));
      return updated;
    });
    addToast('Gallery photo added', 'success');
  };

  const updateGalleryItem = (id: string, fields: Partial<GalleryItem>) => {
    setGallery((prev) => {
      const updated = prev.map((g) => (g.id === id ? { ...g, ...fields } : g));
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(updated));
      return updated;
    });
    addToast('Gallery item updated', 'success');
  };

  const deleteGalleryItem = (id: string) => {
    setGallery((prev) => {
      const updated = prev.filter((g) => g.id !== id);
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(updated));
      return updated;
    });
    addToast('Gallery photo deleted', 'info');
  };

  // Downloads
  const [downloads, setDownloads] = useState<DownloadItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.DOWNLOADS);
    return saved ? JSON.parse(saved) : initialDownloads;
  });

  const addDownload = (item: Omit<DownloadItem, 'id'>) => {
    const newDl: DownloadItem = { ...item, id: `dl-${Date.now()}` };
    setDownloads((prev) => {
      const updated = [newDl, ...prev];
      localStorage.setItem(STORAGE_KEYS.DOWNLOADS, JSON.stringify(updated));
      return updated;
    });
    addToast('Downloadable resource added', 'success');
  };

  const updateDownload = (id: string, fields: Partial<DownloadItem>) => {
    setDownloads((prev) => {
      const updated = prev.map((d) => (d.id === id ? { ...d, ...fields } : d));
      localStorage.setItem(STORAGE_KEYS.DOWNLOADS, JSON.stringify(updated));
      return updated;
    });
    addToast('Download resource updated', 'success');
  };

  const deleteDownload = (id: string) => {
    setDownloads((prev) => {
      const updated = prev.filter((d) => d.id !== id);
      localStorage.setItem(STORAGE_KEYS.DOWNLOADS, JSON.stringify(updated));
      return updated;
    });
    addToast('Download resource deleted', 'info');
  };

  // Admission Inquiries
  const [admissions, setAdmissions] = useState<AdmissionInquiry[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ADMISSIONS);
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 'adm-demo-1',
            studentName: 'Aarav Kumar Chaudhary',
            guardianName: 'Ram Narayan Chaudhary',
            dateOfBirth: '2068-05-14',
            grade: 'Grade 11 (Science)',
            phone: '+977-9844123456',
            email: 'aarav.chaudhary@gmail.com',
            address: 'Godaita-8, Sarlahi',
            previousSchool: 'Godaita Basic School',
            message: 'Inquiring regarding Grade 11 Science admission criteria and scholarship availability.',
            submittedAt: '2026-04-02 11:30 AM',
            status: 'Pending',
          },
        ];
  });

  const submitAdmission = (inquiry: Omit<AdmissionInquiry, 'id' | 'submittedAt' | 'status'>) => {
    const newInquiry: AdmissionInquiry = {
      ...inquiry,
      id: `adm-${Date.now()}`,
      submittedAt: new Date().toLocaleString(),
      status: 'Pending',
    };
    setAdmissions((prev) => {
      const updated = [newInquiry, ...prev];
      localStorage.setItem(STORAGE_KEYS.ADMISSIONS, JSON.stringify(updated));
      return updated;
    });
    addToast(
      lang === 'np'
        ? 'भर्ना आवेदन सफलतापूर्वक प्राप्त भयो! विद्यालय प्रशासनले सम्पर्क गर्नेछ।'
        : 'Admission inquiry submitted successfully! Administration will review soon.',
      'success'
    );
  };

  const updateAdmissionStatus = (id: string, status: AdmissionInquiry['status']) => {
    setAdmissions((prev) => {
      const updated = prev.map((a) => (a.id === id ? { ...a, status } : a));
      localStorage.setItem(STORAGE_KEYS.ADMISSIONS, JSON.stringify(updated));
      return updated;
    });
    addToast(`Inquiry status updated to ${status}`, 'info');
  };

  const deleteAdmission = (id: string) => {
    setAdmissions((prev) => {
      const updated = prev.filter((a) => a.id !== id);
      localStorage.setItem(STORAGE_KEYS.ADMISSIONS, JSON.stringify(updated));
      return updated;
    });
    addToast('Inquiry removed', 'info');
  };

  // Contact Messages
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CONTACTS);
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 'msg-demo-1',
            name: 'Sunil Mahato',
            email: 'sunil.mahato@example.com',
            phone: '+977-9812345678',
            subject: 'Transfer Certificate Query',
            message: 'Namaste, what are the office hours for collecting Character & Transfer Certificates for SEE passed students?',
            submittedAt: '2026-03-30 02:15 PM',
            isRead: false,
          },
        ];
  });

  const submitContactMessage = (msg: Omit<ContactMessage, 'id' | 'submittedAt' | 'isRead'>) => {
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      submittedAt: new Date().toLocaleString(),
      isRead: false,
    };
    setContactMessages((prev) => {
      const updated = [newMsg, ...prev];
      localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(updated));
      return updated;
    });
    addToast(
      lang === 'np'
        ? 'सन्देश सफलतापूर्वक पठाइयो। धन्यवाद!'
        : 'Your message has been sent successfully. Thank you!',
      'success'
    );
  };

  const markContactMessageRead = (id: string) => {
    setContactMessages((prev) => {
      const updated = prev.map((m) => (m.id === id ? { ...m, isRead: true } : m));
      localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(updated));
      return updated;
    });
  };

  const deleteContactMessage = (id: string) => {
    setContactMessages((prev) => {
      const updated = prev.filter((m) => m.id !== id);
      localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(updated));
      return updated;
    });
    addToast('Message deleted', 'info');
  };

  // Modals & Navigation state
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isAdminView, setIsAdminView] = useState<boolean>(false);

  // Admin Session
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEYS.ADMIN_SESSION) === 'true';
  });

  const adminLogin = (password: string): boolean => {
    // Protected admin credentials
    if (password === 'admin123' || password === 'benibhola2004') {
      setIsAdminLoggedIn(true);
      localStorage.setItem(STORAGE_KEYS.ADMIN_SESSION, 'true');
      setIsLoginModalOpen(false);
      setIsAdminView(true);
      addToast('Welcome Admin! You now have full management privileges.', 'success');
      return true;
    }
    addToast('Invalid admin security password. Try again.', 'error');
    return false;
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
    setIsAdminView(false);
    localStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION);
    addToast('Admin signed out successfully', 'info');
  };

  // Reset to default data
  const resetToDefaultData = () => {
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
    localStorage.removeItem(STORAGE_KEYS.PRINCIPAL);
    localStorage.removeItem(STORAGE_KEYS.ABOUT);
    localStorage.removeItem(STORAGE_KEYS.NOTICES);
    localStorage.removeItem(STORAGE_KEYS.PROGRAMS);
    localStorage.removeItem(STORAGE_KEYS.TEACHERS);
    localStorage.removeItem(STORAGE_KEYS.FACILITIES);
    localStorage.removeItem(STORAGE_KEYS.ACHIEVEMENTS);
    localStorage.removeItem(STORAGE_KEYS.EVENTS);
    localStorage.removeItem(STORAGE_KEYS.GALLERY);
    localStorage.removeItem(STORAGE_KEYS.DOWNLOADS);

    setSettings(initialSchoolSettings);
    setPrincipalMessage(initialPrincipalMessage);
    setAboutSchool(initialAboutSchool);
    setNotices(initialNotices);
    setPrograms(initialPrograms);
    setTeachers(initialTeachers);
    setFacilities(initialFacilities);
    setAchievements(initialAchievements);
    setEvents(initialEvents);
    setGallery(initialGallery);
    setDownloads(initialDownloads);

    addToast('All school content reset to pristine default values', 'info');
  };

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <SchoolContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t,
        settings,
        updateSettings,
        principalMessage,
        updatePrincipalMessage,
        aboutSchool,
        updateAboutSchool,
        notices,
        addNotice,
        updateNotice,
        deleteNotice,
        togglePinNotice,
        programs,
        addProgram,
        updateProgram,
        deleteProgram,
        teachers,
        addTeacher,
        updateTeacher,
        deleteTeacher,
        facilities,
        addFacility,
        updateFacility,
        deleteFacility,
        achievements,
        addAchievement,
        updateAchievement,
        deleteAchievement,
        events,
        addEvent,
        updateEvent,
        deleteEvent,
        gallery,
        addGalleryItem,
        updateGalleryItem,
        deleteGalleryItem,
        downloads,
        addDownload,
        updateDownload,
        deleteDownload,
        admissions,
        submitAdmission,
        updateAdmissionStatus,
        deleteAdmission,
        contactMessages,
        submitContactMessage,
        markContactMessageRead,
        deleteContactMessage,
        selectedNotice,
        setSelectedNotice,
        selectedTeacher,
        setSelectedTeacher,
        isSearchOpen,
        setIsSearchOpen,
        isLoginModalOpen,
        setIsLoginModalOpen,
        isAdminView,
        setIsAdminView,
        isAdminLoggedIn,
        adminLogin,
        adminLogout,
        resetToDefaultData,
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
};
