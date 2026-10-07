# Shree Beni Bhola Model Secondary School (श्री बेनी भोला नमूना माध्यमिक विद्यालय)
### Official Institutional Web Portal & Administration Management System

**Location:** Godaita-8, Sarlahi, Madhesh Province, Nepal  
**Established:** 2004 B.S. (Estd. 2004 B.S.)  
**Type:** Public / Community / Model Secondary School (सामुदायिक नमूना माध्यमिक विद्यालय)  
**Academic Levels:** ECD / Nursery to Grade 12 (+2 Science, Management, Education, Humanities)  
**Motto:** *विद्या ददाति विनयम्* ("Knowledge bestows humility")  

---

## 🏛️ Project Overview

This is a modern, premium, accessible, and production-ready official website and administrative portal for **Shree Beni Bhola Model Secondary School**. Crafted with institutional dignity and anti-AI slop design discipline, it is tailored specifically for the Nepalese educational system with comprehensive Nepali and English bilingual support.

### ✨ Key Features

1. **Sticky Institutional Top Navigation**:
   - Official vector emblem with circular Sanskrit seal and national flag
   - Bilingual language toggle (`नेपाली` 🇳🇵 / `English` 🇬🇧) without page reloads
   - Global site search across notices, teachers, programs, calendar, and downloads
   - Urgent announcement ticker & mobile responsive menu
   - Direct Admin Login access point

2. **Hero Presentation**:
   - High-fidelity campus architectural visual with measured contrast scrim
   - Official School Seal lockup and foundational badges
   - Direct call-to-actions for admissions, notices, and institutional history

3. **Homepage Highlights in Specified Canonical Order**:
   - **Quick Statistics**: Estd. 2004 B.S., ECD–Grade 12, Public Model Secondary, Godaita-8 Sarlahi
   - **Official Notice Board**: Categorized notices (Academic, Exam, Admission, Holiday) with pinned notices and printable notice modals
   - **Message from the Principal**: Formal portrait, educational philosophy, and expandable narrative
   - **About School**: Detailed history since 2004 B.S., vision, mission, core values, and objectives
   - **Academic Programs**: Detailed curricula from Nursery to Grade 12 Science, Management, and Education
   - **Why Choose Us**: Government Model School benchmark, science labs, ICT labs, scholarships, free education
   - **Facilities**: Physics/Chemistry/Biology science lab, 40+ seat ICT computer lab, library, sports ground, RO water plant
   - **Faculty & Staff Directory**: Searchable directory by department (Secondary, Lower Secondary, Primary, Admin) with profile inspector
   - **Achievements & Accolades**: Model school grant, SEE results, championship trophies
   - **Events & School Calendar**: Upcoming parental days, science exhibitions, festivals
   - **Photo Gallery**: Category-filtered masonry grid with full-screen lightbox and keyboard navigation
   - **Download Center**: Official admission forms, academic calendars, curriculum rules, model questions
   - **Admission Portal & Online Inquiry Form**: 4-step admission roadmap, required documents list, and instant inquiry submission
   - **Contact & Interactive Google Map**: Official phone lines, email desks, office hours, and embedded Godaita map
   - **Official Footer**: 4-column institutional footer with quick navigation and copyright

4. **Comprehensive Admin Dashboard**:
   - **Secure Login**: Protected with master security key (Default password: `admin123`)
   - **Full CRUD Management**:
     - Notices (Add, Edit, Delete, Pin/Unpin, change date/category/attachment)
     - Faculty & Staff (Add, Edit, Delete, change photo, qualification, designation)
     - Academic Programs (Add, Edit, Delete, update subjects/eligibility)
     - Facilities & Labs (Add, Edit, Delete, update descriptions & photos)
     - Achievements (Add, Edit, Delete, awards, year, badges)
     - Events & Calendar (Add, Edit, Delete, schedule dates, venues)
     - Photo Gallery (Add, Edit, Delete photos, assign albums)
     - Admission Inquiries (Review submitted inquiries, update status: Pending / Reviewed / Approved / Contacted, delete)
     - Downloads (Upload/manage downloadable PDF resources)
     - Principal's Message Editor (Live update message in English and Nepali)
     - About School & Heritage Editor (Update history, vision, and mission)
     - School Settings & Maps (Update phone, email, office hours, and Google Map embed URL)
     - Data Backup & Factory Reset (Export complete website JSON backup or restore pristine defaults)

---

## 🔐 Admin Access Credentials

- **Portal Trigger**: Click the **"Admin" / "प्रशासक लगइन"** button in the header or footer
- **Demo Admin Password**: `admin123` (or `benibhola2004`)

---

## 🗄️ Database & Firebase Integration Architecture

The application provides a hybrid architecture:
1. **Persistent LocalStorage Synchronization**: All admin updates are saved locally and survive page reloads and browser restarts.
2. **Ready for Cloud Firestore & Firebase Auth**: When connected to Firebase, production synchronization runs seamlessly.

### Recommended Firestore Collections:
- `school_settings`: Document `general`
- `principal_messages`: Document `current`
- `about_school`: Document `current`
- `notices`: Collection of notices
- `teachers`: Collection of faculty members
- `programs`: Academic streams
- `facilities`: Campus amenities
- `achievements`: Institutional records
- `events`: School calendar
- `gallery`: Campus photo records
- `downloads`: Downloadable PDFs
- `admission_inquiries`: Submitted student applications
- `contact_messages`: Inbound contact inquiries

Security rules are pre-configured in `firestore.rules` to enforce strict public read vs authenticated admin writes.

---

## 🚀 Development & Build Instructions

```bash
# Install dependencies
npm install

# Start local development server on port 3000
npm run dev

# Check TypeScript types and lint
npm run lint

# Compile production build
npm run build
```

---

## 📄 License
Official Website for Shree Beni Bhola Model Secondary School, Godaita-8, Sarlahi, Nepal. All Rights Reserved.
