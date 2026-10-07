/**
 * Firebase Production Configuration
 * Shree Beni Bhola Model Secondary School, Godaita-8, Sarlahi
 */
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDemoKeyForSchoolPortalApp',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'shree-beni-bhola-school.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'shree-beni-bhola-school',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'shree-beni-bhola-school.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '123456789012',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:123456789012:web:abcdef123456',
};

// Check if valid Firebase credentials are provided in env
export const isFirebaseConfigured = Boolean(
  import.meta.env.VITE_FIREBASE_API_KEY &&
  import.meta.env.VITE_FIREBASE_PROJECT_ID &&
  import.meta.env.VITE_FIREBASE_PROJECT_ID !== 'shree-beni-bhola-school'
);

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let storage: FirebaseStorage | null = null;

try {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
} catch (error) {
  console.warn('Firebase initialized with fallback configuration:', error);
}

export { app, auth, db, storage };

/**
 * Suggested Firestore Database Collection Names:
 * - 'school_settings'      : Document 'general'
 * - 'principal_messages'   : Document 'current'
 * - 'about_school'         : Document 'current'
 * - 'notices'              : List of public and pinned notices
 * - 'teachers'             : Faculty and administrative staff members
 * - 'programs'             : Academic programs (ECD to Grade 12)
 * - 'facilities'           : School infrastructure, laboratories
 * - 'achievements'         : SEE results, sports trophies, model school grants
 * - 'events'               : Academic calendar & upcoming events
 * - 'gallery'              : Photo albums and activity snapshots
 * - 'admission_inquiries'  : Submitted online student applications
 * - 'contact_messages'     : Public inquiries from the contact form
 * - 'downloads'            : Official syllabus, calendars, and routines
 */
