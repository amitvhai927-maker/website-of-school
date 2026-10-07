export type Language = 'np' | 'en';

export interface Notice {
  id: string;
  title: {
    en: string;
    np: string;
  };
  description: {
    en: string;
    np: string;
  };
  date: string; // e.g. "2081-12-15" (B.S.) or "2026-03-28"
  dateNepali: string;
  category: 'Academic' | 'Exam' | 'Admission' | 'Holiday' | 'General';
  isPinned: boolean;
  fileUrl?: string;
  fileName?: string;
  fileSize?: string;
  imageUrl?: string;
}

export interface Teacher {
  id: string;
  name: {
    en: string;
    np: string;
  };
  designation: {
    en: string;
    np: string;
  };
  department: 'Administration' | 'Secondary' | 'Lower Secondary' | 'Primary' | 'ECD' | 'Support';
  subject: {
    en: string;
    np: string;
  };
  qualification: string;
  phone?: string;
  email?: string;
  bio: {
    en: string;
    np: string;
  };
  photo: string;
  experienceYears?: number;
}

export interface AcademicProgram {
  id: string;
  title: {
    en: string;
    np: string;
  };
  level: {
    en: string;
    np: string;
  };
  grades: string;
  description: {
    en: string;
    np: string;
  };
  eligibility: {
    en: string;
    np: string;
  };
  subjects: string[];
  duration: string;
  iconName: string;
  features: string[];
}

export interface Facility {
  id: string;
  title: {
    en: string;
    np: string;
  };
  description: {
    en: string;
    np: string;
  };
  image: string;
  category: 'Lab' | 'Academic' | 'Sports' | 'Infrastructure' | 'Welfare';
  features: string[];
}

export interface Achievement {
  id: string;
  title: {
    en: string;
    np: string;
  };
  year: string; // "2080 B.S."
  category: 'SEE / Board' | 'Model School' | 'Sports' | 'Cultural' | 'Faculty';
  description: {
    en: string;
    np: string;
  };
  badgeText?: string;
  image?: string;
}

export interface SchoolEvent {
  id: string;
  title: {
    en: string;
    np: string;
  };
  date: string;
  nepaliDate: string;
  time: string;
  location: string;
  description: {
    en: string;
    np: string;
  };
  isUpcoming: boolean;
  category: 'Academic' | 'Sports' | 'Cultural' | 'Meeting' | 'Celebration';
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: {
    en: string;
    np: string;
  };
  category: 'Classroom' | 'Sports' | 'Cultural' | 'Science & ICT' | 'Campus' | 'Events';
  image: string;
  caption?: string;
  date?: string;
}

export interface DownloadItem {
  id: string;
  title: {
    en: string;
    np: string;
  };
  category: 'Admission' | 'Calendar' | 'Curriculum' | 'Exam' | 'Rules';
  date: string;
  fileSize: string;
  fileType: 'PDF' | 'DOC' | 'ZIP';
  downloadUrl: string;
}

export interface AdmissionInquiry {
  id: string;
  studentName: string;
  guardianName: string;
  dateOfBirth: string;
  grade: string;
  phone: string;
  email: string;
  address: string;
  previousSchool?: string;
  message?: string;
  submittedAt: string;
  status: 'Pending' | 'Reviewed' | 'Approved' | 'Contacted';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt: string;
  isRead: boolean;
}

export interface PrincipalMessageData {
  name: {
    en: string;
    np: string;
  };
  designation: {
    en: string;
    np: string;
  };
  quote: {
    en: string;
    np: string;
  };
  content: {
    en: string;
    np: string;
  };
  photo: string;
}

export interface AboutSchoolData {
  introduction: {
    en: string;
    np: string;
  };
  history: {
    en: string;
    np: string;
  };
  vision: {
    en: string;
    np: string;
  };
  mission: {
    en: string;
    np: string;
  };
  objectives: {
    en: string[];
    np: string[];
  };
  values: {
    title: { en: string; np: string };
    desc: { en: string; np: string };
  }[];
}

export interface SchoolSettings {
  schoolName: {
    en: string;
    np: string;
  };
  schoolType: {
    en: string;
    np: string;
  };
  location: {
    en: string;
    np: string;
  };
  municipality: string;
  district: string;
  province: string;
  country: string;
  estdYear: string; // 2004 B.S.
  tagline: {
    en: string;
    np: string;
  };
  phone: string;
  phoneAlternate: string;
  email: string;
  admissionEmail: string;
  officeHours: {
    en: string;
    np: string;
  };
  mapEmbedUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
  importantNoticeBanner?: {
    enabled: boolean;
    text: { en: string; np: string };
    linkNoticeId?: string;
  };
  stats: {
    students: string;
    teachers: string;
    established: string;
    programsCount: string;
    passRate: string;
  };
}
