import {
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
} from '../types';

export const initialSchoolSettings: SchoolSettings = {
  schoolName: {
    en: 'Shree Beni Bhola Model Secondary School',
    np: 'श्री बेनी भोला नमूना माध्यमिक विद्यालय',
  },
  schoolType: {
    en: 'Public / Community Model Secondary School',
    np: 'सामुदायिक / सरकारी नमूना माध्यमिक विद्यालय',
  },
  location: {
    en: 'Godaita-8, Sarlahi, Madhesh Province, Nepal',
    np: 'गोडैता-८, सर्लाही, मधेश प्रदेश, नेपाल',
  },
  municipality: 'Godaita Municipality (गोडैता नगरपालिका)',
  district: 'Sarlahi (सर्लाही)',
  province: 'Madhesh Province (मधेश प्रदेश)',
  country: 'Nepal (नेपाल)',
  estdYear: '2004 B.S.',
  tagline: {
    en: 'Excellence in Education, Character and Innovation',
    np: 'शिक्षा, चरित्र र नवप्रवर्तनमा उत्कृष्टता',
  },
  phone: '+977-46-540123',
  phoneAlternate: '+977-9844000000',
  email: 'info@benibhola.edu.np',
  admissionEmail: 'admission@benibhola.edu.np',
  officeHours: {
    en: 'Sunday to Friday: 10:00 AM – 4:00 PM (Closed on Saturdays & Public Holidays)',
    np: 'आइतबार देखि शुक्रबार: बिहान १०:०० – दिउँसो ४:०० (शनिबार तथा सार्वजनिक बिदा बन्द)',
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57053.80582846437!2d85.45!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec9b0000000001%3A0x1!2sGodaita%2C%20Sarlahi!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp',
  facebookUrl: 'https://facebook.com/benibholamodelschool',
  youtubeUrl: 'https://youtube.com',
  importantNoticeBanner: {
    enabled: true,
    text: {
      en: 'ADMISSION OPEN (2082/2083): Grades Nursery to 11 (Science, Management, Education). Online inquiry forms now open!',
      np: 'भर्ना खुल्यो (२०८२/२०८३): शिशु कक्षा देखि कक्षा ११ (विज्ञान, व्यवस्थापन, शिक्षा)। अनलाइन फारम उपलब्ध छ!',
    },
    linkNoticeId: 'notice-adm-2082',
  },
  stats: {
    established: '2004 B.S.',
    students: '1,850+',
    teachers: '45+',
    programsCount: '4 Streams',
    passRate: '98.5%',
  },
};

export const initialPrincipalMessage: PrincipalMessageData = {
  name: {
    en: 'Principal (Office of the Headmaster)',
    np: 'प्रधानाध्यापक (प्र.अ. कक्ष)',
  },
  designation: {
    en: 'Principal / Head Teacher',
    np: 'प्रधानाध्यापक',
  },
  quote: {
    en: 'Rooted in our sacred motto "Vidya Dadati Vinayam" (विद्या ददाति विनयम्), we cultivate academic distinction, moral virtue, and modern innovation for every child.',
    np: 'हाम्रो मूल आदर्श "विद्या ददाति विनयम्" लाई आत्मसात गर्दै हामी प्रत्येक विद्यार्थीमा शैक्षिक उत्कृष्टता, उच्च नैतिक चरित्र र आधुनिक दक्षता विकास गर्दछौं।',
  },
  content: {
    en: 'Welcome to the official portal of Shree Beni Bhola Model Secondary School, Godaita-8, Sarlahi. Established in the historic year 2004 B.S., our institution has stood as an unwavering beacon of educational enlightenment in Madhesh Province for over seven decades. As a government-designated Model Secondary School (नमूना विद्यालय), we combine rigorous academic curriculum from Early Childhood Development (ECD) to Grade 12 with modern Science and ICT laboratories, rich library resources, and values of civic responsibility. We welcome students, parents, and community partners to unite in crafting a vibrant future for our youth.',
    np: 'श्री बेनी भोला नमूना माध्यमिक विद्यालय, गोडैता-८, सर्लाहीको आधिकारिक वेबसाइटमा यहाँहरूलाई हार्दिक स्वागत छ। ऐतिहासिक वि.सं. २००४ सालमा स्थापित यस विद्यालयले सात दशकभन्दा बढी समयदेखि मधेश प्रदेशमा शैक्षिक जागरण र गुणस्तरीय शिक्षाको ज्योति निरन्तर प्रज्वलित गर्दै आएको छ। नेपाल सरकारबाट "नमूना विद्यालय" को रूपमा छनोट भई हामीले प्रारम्भिक बाल विकास (ECD) देखि कक्षा १२ सम्म आधुनिक विज्ञान तथा कम्प्युटर प्रयोगशाला, समृद्ध पुस्तकालय र सुसंस्कृत शैक्षिक वातावरण प्रदान गरिरहेका छौं। हाम्रा विद्यार्थीहरूको उज्ज्वल भविष्य निर्माणमा सहयोग पुर्याउन सम्पूर्ण अभिभावक, शिक्षक र सरोकारवालाहरूमा हार्दिक आभार व्यक्त गर्दछु।',
  },
  photo: '/src/assets/images/principal_message_portrait_1791285490222.jpg',
};

export const initialAboutSchool: AboutSchoolData = {
  introduction: {
    en: 'Shree Beni Bhola Model Secondary School is one of the premier public educational institutions in Madhesh Province, Nepal. Situated at Godaita-8, Sarlahi, the school is dedicated to delivering inclusive, technology-integrated, and value-based education to students from all socio-economic backgrounds.',
    np: 'श्री बेनी भोला नमूना माध्यमिक विद्यालय मधेश प्रदेश, सर्लाहीको अग्रणी सामुदायिक शैक्षिक संस्था हो। गोडैता-८ मा अवस्थित यो विद्यालय सबै वर्ग र पृष्ठभूमिका बालबालिकाहरूलाई प्रविधिमैत्री, समावेशी र संस्कारयुक्त गुणस्तरीय शिक्षा प्रदान गर्न पूर्ण समर्पित छ।',
  },
  history: {
    en: 'Founded in 2004 B.S. by visionary community elders and philanthropists of Godaita, the school began with a modest mission: to illuminate rural Sarlahi through foundational literacy. Over the decades, it progressed from a basic primary school to a distinguished High School, and subsequently attained the prestigious "Model Secondary School" (नमूना मा.वि.) status under the Government of Nepal Ministry of Education.',
    np: 'गोडैताका दूरदर्शी अग्रजहरू तथा समाजसेवीहरूको अथक प्रयासबाट वि.सं. २००४ सालमा यस विद्यालयको जग बस्यो। प्रारम्भिक चरणमा आधारभूत शिक्षाबाट सुरु भएको यो यात्रा समयक्रमसँगै माध्यमिक र उच्च माध्यमिक तह हुँदै नेपाल सरकार, शिक्षा मन्त्रालयद्वारा "नमूना माध्यमिक विद्यालय" को रूपमा स्तरोन्नति भएको छ।',
  },
  vision: {
    en: 'To nurture ethically grounded, technologically competent, and intellectually empowered global citizens who lead social transformation and scientific advancement in Nepal and beyond.',
    np: 'नैतिक रूपमा निष्ठावान, प्रविधिमा सक्षम र बौद्धिक रूपमा सशक्त नागरिक तयार गरी समाजको सकारात्मक रूपान्तरण र राष्ट्रिय विकासमा नेतृत्वदायी योगदान पुर्याउनु।',
  },
  mission: {
    en: 'To provide accessible, high-quality, practical education from ECD to Grade 12 through student-centered pedagogical practices, robust STEM infrastructure, dedicated educators, and an inclusive learning sanctuary.',
    np: 'शिशु कक्षादेखि कक्षा १२ सम्म बालमैत्री शिक्षण विधि, आधुनिक विज्ञान तथा प्रविधि पूर्वाधार र प्रतिबद्ध शिक्षकहरूद्वारा समावेशी एवं सुलभ गुणस्तरीय शिक्षा प्रदान गर्नु।',
  },
  objectives: {
    en: [
      'Foster critical thinking, scientific curiosity, and lifelong curiosity in students.',
      'Maintain 100% pass rate in SEE and NEB Grade 12 board examinations with distinction grades.',
      'Bridge digital disparities through dedicated computer coding and multimedia ICT labs.',
      'Cultivate cultural harmony, civic discipline, and social empathy in line with Nepalese heritage.',
      'Provide comprehensive scholarship assistance for female students, underprivileged, and marginalized communities.',
    ],
    np: [
      'विद्यार्थीहरूमा तार्किक चिन्तन, वैज्ञानिक दृष्टिकोण र सिर्जनशीलताको विकास गर्ने।',
      'एसईई (SEE) तथा राष्ट्रिय परीक्षा बोर्ड (NEB) कक्षा १२ मा उत्कृष्ट नतिजा हासिल गर्ने।',
      'सूचना तथा सञ्चार प्रविधि (ICT) को माध्यमबाट डिजिटल शिक्षामा पहुँच विस्तार गर्ने।',
      'नेपाली मौलिक संस्कार, अनुशासन र सामाजिक सद्भावलाई प्रवर्द्धन गर्ने।',
      'छात्रा, विपन्न तथा सीमान्तकृत समुदायका विद्यार्थीहरूका लागि विशेष छात्रवृत्ति उपलब्ध गराउने।',
    ],
  },
  values: [
    {
      title: { en: 'Academic Integrity', np: 'शैक्षिक निष्ठा' },
      desc: { en: 'Honesty and pursuit of truth in intellectual and personal endeavors.', np: 'सत्य, निष्ठा र बौद्धिक इमान्दारिताको पालना।' },
    },
    {
      title: { en: 'Respect & Humility', np: 'विनम्रता र आदर' },
      desc: { en: 'Guided by "Vidya Dadati Vinayam" - knowledge brings humility and respect.', np: 'विद्याले विनय र विनम्रता दिन्छ भन्ने शाश्वत मूल्य।' },
    },
    {
      title: { en: 'Social Inclusivity', np: 'सामाजिक समावेशिता' },
      desc: { en: 'Equal opportunity, dignity, and warmth for every learner without discrimination.', np: 'विना भेदभाव प्रत्येक बालबालिकालाई समान अवसर र सम्मान।' },
    },
    {
      title: { en: 'Innovation & Action', np: 'नवप्रवर्तन र कर्म' },
      desc: { en: 'Hands-on practical learning bridging textbook theory with community solutions.', np: 'सैद्धान्तिक ज्ञानलाई व्यवहारिक जीवनसँग जोड्ने अभ्यास।' },
    },
  ],
};

export const initialNotices: Notice[] = [
  {
    id: 'notice-adm-2082',
    title: {
      en: 'Admissions Open for Academic Session 2082/2083 (Nursery to Grade 11)',
      np: 'शैक्षिक सत्र २०८२/२०८३ का लागि नयाँ भर्ना खुल्यो (शिशु देखि कक्षा ११ सम्म)',
    },
    description: {
      en: 'Applications are invited for admissions into Nursery, Kindergarten, Grades 1–9, and Grade 11 (Science, Management, Education). Entrance assessment and scholarship forms are available at school administrative counter or online.',
      np: 'शैक्षिक सत्र २०८२/२०८३ का लागि शिशु कक्षा, प्राथमिक, आधारभूत तह तथा कक्षा ११ (विज्ञान, व्यवस्थापन, शिक्षा संकाय) मा नयाँ भर्ना फारम वितरण सुरु भएको व्यहोरा जानकारी गराइन्छ।',
    },
    date: '2026-04-10',
    dateNepali: '२०८१ चैत २८',
    category: 'Admission',
    isPinned: true,
    fileName: 'Admission_Guidelines_2082.pdf',
    fileSize: '420 KB',
  },
  {
    id: 'notice-exam-routine',
    title: {
      en: 'Annual Examination Schedule Published for Grades 1 to 9 & 11',
      np: 'कक्षा १ देखि ९ तथा ११ को वार्षिक परीक्षा तालिका प्रकाशन सम्बन्धी सूचना',
    },
    description: {
      en: 'The internal examination committee has published the official timetable for the forthcoming annual evaluations. All students must clear school dues and obtain examination admit cards before the examination date.',
      np: 'यस विद्यालयको वार्षिक परीक्षा २०८१ को विस्तृत समयतालिका प्रकाशित गरिएको छ। सम्पूर्ण विद्यार्थीहरूले समयमै प्रवेश-पत्र लिएर परीक्षामा सहभागी हुन सूचित गरिन्छ।',
    },
    date: '2026-03-25',
    dateNepali: '२०८१ चैत १२',
    category: 'Exam',
    isPinned: true,
    fileName: 'Annual_Exam_Routine_2081.pdf',
    fileSize: '680 KB',
  },
  {
    id: 'notice-scholarship-scheme',
    title: {
      en: 'Government & Model School Merit-cum-Need Scholarships for 2081/82',
      np: 'नेपाल सरकार तथा नमूना विद्यालय छात्रवृत्ति तथा प्रोत्साहन फारम सम्बन्धी',
    },
    description: {
      en: 'Eligible girls, Dalit, Janajati, and economically disadvantaged students are requested to submit the scholarship application along with municipal recommendation to the administrative desk by the deadline.',
      np: 'जेहेन्दार, विपन्न, दलित, जनजाति तथा छात्रा छात्रवृत्तिका लागि नगरपालिकाको सिफारिस सहित फारम बुझाउन अनुरोध गरिन्छ।',
    },
    date: '2026-03-12',
    dateNepali: '२०८१ फागुन २९',
    category: 'Academic',
    isPinned: false,
    fileName: 'Scholarship_Application_Form.pdf',
    fileSize: '310 KB',
  },
  {
    id: 'notice-holiday-chaite-dashain',
    title: {
      en: 'Notice regarding Chaite Dashain & Ram Navami School Recess',
      np: 'चैते दसैं तथा राम नवमीको अवसरमा विद्यालय बिदा सम्बन्धी सूचना',
    },
    description: {
      en: 'All teaching activities and regular classes will remain closed on the auspicious occasion of Chaite Dashain and Ram Navami as per the government academic calendar. Administrative desk resumes on the following workday.',
      np: 'चैते दसैं तथा राम नवमीको पावन अवसरमा विद्यालयमा पठनपाठन बन्द रहने व्यहोरा जानकारी गराइन्छ। बिदा पश्चात नियमित कक्षाहरू सुचारु हुनेछन्।',
    },
    date: '2026-03-01',
    dateNepali: '२०८१ फागुन १८',
    category: 'Holiday',
    isPinned: false,
  },
];

export const initialPrograms: AcademicProgram[] = [
  {
    id: 'prog-ecd',
    title: {
      en: 'Early Childhood Development (ECD / Nursery)',
      np: 'प्रारम्भिक बाल विकास (ECD / शिशु कक्षा)',
    },
    level: {
      en: 'Foundational Stage',
      np: 'प्रारम्भिक तह',
    },
    grades: 'ECD, Nursery, LKG, UKG',
    description: {
      en: 'Child-friendly play-based pedagogy focusing on cognitive, emotional, and social development with colorful activity corners and compassionate mentors.',
      np: 'बालमैत्री खेल-आधारित विधिबाट बालबालिकाको शारीरिक, मानसिक तथा संवेगात्मक विकास गराउने आधुनिक प्रारम्भिक शिक्षा।',
    },
    eligibility: {
      en: 'Minimum age 3.5 to 4 years old. Birth registration certificate required.',
      np: 'न्यूनतम उमेर ३.५ देखि ४ वर्ष। जन्मदर्ता प्रमाणपत्र आवश्यक।',
    },
    subjects: ['Language & Phonics', 'Numeracy Fun', 'Art & Craft', 'Music & Rhymes', 'Social Etiquette'],
    duration: '1 – 2 Years',
    iconName: 'Baby',
    features: ['Activity-based Montessori corners', 'Nutritious midday meal (दिवा खाजा)', 'Safe hygienic learning space'],
  },
  {
    id: 'prog-basic',
    title: {
      en: 'Basic Level Education (Grades 1 to 8)',
      np: 'आधारभूत तह शिक्षा (कक्षा १ देखि ८)',
    },
    level: {
      en: 'Basic Level',
      np: 'आधारभूत तह',
    },
    grades: 'Grade 1 – 8',
    description: {
      en: 'Comprehensive foundational curriculum aligned with Nepal National Curriculum Framework, instilling mathematical clarity, bilingual literacy, science discovery, and moral citizenship.',
      np: 'नेपाल सरकारको राष्ट्रिय पाठ्यक्रममा आधारित गणित, विज्ञान, नेपाली, अंग्रेजी तथा सामाजिक अध्ययनको बलियो जग निर्माण।',
    },
    eligibility: {
      en: 'Completion of prior grade / Age appropriate / Grade assessment.',
      np: 'अघिल्लो कक्षा उत्तीर्ण वा उमेर उपयुक्तता तथा प्रारम्भिक मूल्याङ्कन।',
    },
    subjects: ['Nepali', 'English', 'Mathematics', 'Science & Technology', 'Social Studies', 'Health & Physical', 'Local Curriculum'],
    duration: '8 Years',
    iconName: 'BookOpen',
    features: ['Computer classes from Grade 4', 'Science mini-projects', 'Sports & Co-curricular clubs'],
  },
  {
    id: 'prog-secondary',
    title: {
      en: 'Secondary Level (Grades 9 & 10 - SEE)',
      np: 'माध्यमिक तह (कक्षा ९ र १० - एसईई)',
    },
    level: {
      en: 'Secondary Stage',
      np: 'माध्यमिक तह',
    },
    grades: 'Grade 9 & 10 (SEE)',
    description: {
      en: 'Rigorous preparation for Secondary Education Examination (SEE) with focused experimental laboratory sessions, optional mathematics, and computer science specialization.',
      np: 'एसईई (SEE) परीक्षाको उत्कृष्ट नतिजाका लागि प्रयोगात्मक विज्ञान प्रयोगशाला, ऐच्छिक गणित र कम्प्युटर विज्ञानको गहन पठनपाठन।',
    },
    eligibility: {
      en: 'Completion of Basic Level (Grade 8 BLE examination).',
      np: 'कक्षा ८ (BLE) आधारभूत तह उत्तीर्ण भएको लब्धाङ्क पत्र।',
    },
    subjects: ['Compulsory English', 'Compulsory Nepali', 'Compulsory Mathematics', 'Science & Technology', 'Social Studies', 'Opt. Mathematics / Economics', 'Opt. Computer Science / Account'],
    duration: '2 Years',
    iconName: 'GraduationCap',
    features: ['Laboratory practicals', 'SEE model test series', 'Special evening tutorial coaching for board examinees'],
  },
  {
    id: 'prog-plus2-science',
    title: {
      en: 'Grade 11 & 12: Science Stream (+2 Science)',
      np: 'कक्षा ११ र १२: विज्ञान संकाय (+२ विज्ञान)',
    },
    level: {
      en: 'Higher Secondary (+2 NEB)',
      np: 'उच्च माध्यमिक (NEB)',
    },
    grades: 'Grade 11 & 12',
    description: {
      en: 'Premier gateway to Engineering, Medicine, Information Technology, and Applied Sciences. Equipped with modern Physics, Chemistry, and Biology laboratories.',
      np: 'इन्जिनियरिङ, चिकित्सा, आईटी तथा अनुसन्धानका क्षेत्रमा भविष्य निर्माणका लागि सुसज्जित प्रयोगशाला र अनुभवी प्राध्यापकहरूबाट शिक्षण।',
    },
    eligibility: {
      en: 'Minimum GPA 2.0 or above in SEE with minimum C+ in Science & Mathematics.',
      np: 'एसईई परीक्षामा न्यूनतम GPA २.० र विज्ञान तथा गणितमा कम्तीमा C+ प्राप्त।',
    },
    subjects: ['Physics', 'Chemistry', 'Biology / Computer Science', 'Mathematics', 'English', 'Nepali'],
    duration: '2 Years',
    iconName: 'FlaskConical',
    features: ['Advanced laboratory practical sessions', 'Pre-medical and pre-engineering test guidance', 'Digital smart boards'],
  },
  {
    id: 'prog-plus2-management',
    title: {
      en: 'Grade 11 & 12: Management Stream (+2 Management)',
      np: 'कक्षा ११ र १२: व्यवस्थापन संकाय (+२ व्यवस्थापन)',
    },
    level: {
      en: 'Higher Secondary (+2 NEB)',
      np: 'उच्च माध्यमिक (NEB)',
    },
    grades: 'Grade 11 & 12',
    description: {
      en: 'Prepares future entrepreneurs, chartered accountants, bankers, and business leaders with deep understanding of accounting, economics, and business finance.',
      np: 'लेखा, अर्थशास्त्र, व्यवसाय अध्ययन र कम्प्युटर विज्ञान मार्फत भविष्यका उद्यमी, बैंकर र वित्तीय व्यवस्थापक उत्पादन गर्ने कार्यक्रम।',
    },
    eligibility: {
      en: 'Minimum GPA 1.6 in SEE or equivalent credential.',
      np: 'एसईई परीक्षामा न्यूनतम GPA १.६ प्राप्त।',
    },
    subjects: ['Principles of Accounting', 'Economics', 'Business Studies / Computer Science', 'Hotel Management / Marketing', 'English', 'Nepali'],
    duration: '2 Years',
    iconName: 'Briefcase',
    features: ['Computerized accounting training (Tally)', 'Case study seminars', 'Banking sector orientation'],
  },
  {
    id: 'prog-plus2-education',
    title: {
      en: 'Grade 11 & 12: Education & Humanities Stream',
      np: 'कक्षा ११ र १२: शिक्षा तथा मानविकी संकाय',
    },
    level: {
      en: 'Higher Secondary (+2 NEB)',
      np: 'उच्च माध्यमिक (NEB)',
    },
    grades: 'Grade 11 & 12',
    description: {
      en: 'Cultivating future educators, social researchers, civil servants, and communicators with emphasis on pedagogy, language teaching, and sociological studies.',
      np: 'शिक्षण विधि, बाल मनोविज्ञान, समाजशास्त्र र भाषा अध्यापन मार्फत दक्ष शिक्षक तथा समाजशास्त्री उत्पादन गर्ने कार्यक्रम।',
    },
    eligibility: {
      en: 'Minimum GPA 1.6 in SEE or equivalent credential.',
      np: 'एसईई परीक्षामा न्यूनतम GPA १.६ प्राप्त।',
    },
    subjects: ['Child Development & Learning', 'Major English / Nepali', 'Health & Physical Education', 'Sociology / Political Science', 'English', 'Nepali'],
    duration: '2 Years',
    iconName: 'BookMarked',
    features: ['Practical micro-teaching workshops', 'Community survey assignments', 'Free textbook support for merit scholars'],
  },
];

export const initialTeachers: Teacher[] = [
  {
    id: 'tch-principal',
    name: {
      en: 'Principal / Head Teacher',
      np: 'प्रधानाध्यापक (कार्यालय)',
    },
    designation: {
      en: 'Principal (Secondary 1st Class)',
      np: 'प्रधानाध्यापक (मा.वि. प्रथम श्रेणी)',
    },
    department: 'Administration',
    subject: {
      en: 'Educational Administration & Mathematics',
      np: 'शैक्षिक प्रशासन तथा गणित',
    },
    qualification: 'M.Ed. in Educational Leadership & Mathematics, Tribhuvan University',
    experienceYears: 24,
    phone: '+977-46-540123',
    email: 'principal@benibhola.edu.np',
    bio: {
      en: 'Serving educational leadership with passion, dedicated to institutional excellence and child-centric pedagogical innovation at Shree Beni Bhola Model Secondary School.',
      np: 'दुई दशकभन्दा लामो शैक्षिक प्रशासनिक अनुभवका साथ यस विद्यालयलाई मधेश प्रदेशकै उत्कृष्ट नमूना विद्यालय बनाउन समर्पित।',
    },
    photo: '/src/assets/images/principal_message_portrait_1791285490222.jpg',
  },
  {
    id: 'tch-science-head',
    name: {
      en: 'Senior Secondary Science Faculty',
      np: 'मा.वि. विज्ञान विभाग प्रमुख',
    },
    designation: {
      en: 'Head of Department (Science & Technology)',
      np: 'विभाग प्रमुख (विज्ञान तथा प्रविधि)',
    },
    department: 'Secondary',
    subject: {
      en: 'Physics & General Science',
      np: 'भौतिकशास्त्र तथा सामान्य विज्ञान',
    },
    qualification: 'M.Sc. in Physics, Tribhuvan University',
    experienceYears: 16,
    bio: {
      en: 'Dedicated to experiential STEM learning, guiding students through practical physics experiments and SEE science distinction preparation.',
      np: 'प्रयोगात्मक विज्ञान शिक्षण तथा SEE र +२ का विद्यार्थीहरूलाई विज्ञानमा अब्बल बनाउन प्रतिबद्ध।',
    },
    photo: '/src/assets/images/school_science_lab_1791285504462.jpg',
  },
  {
    id: 'tch-computer-ict',
    name: {
      en: 'ICT & Computer Science Coordinator',
      np: 'कम्प्युटर तथा सूचना प्रविधि संयोजक',
    },
    designation: {
      en: 'Computer Science Instructor',
      np: 'कम्प्युटर शिक्षक',
    },
    department: 'Secondary',
    subject: {
      en: 'Computer Science & ICT',
      np: 'कम्प्युटर विज्ञान तथा सूचना प्रविधि',
    },
    qualification: 'B.Sc. CSIT / BIT, Tribhuvan University',
    experienceYears: 9,
    bio: {
      en: 'Empowering students in programming, digital literacy, and internet technologies in the model computer lab.',
      np: 'विद्यार्थीहरूलाई डिजिटल सीप, कोडिङ र आधुनिक प्रविधिमा निपुण बनाउन क्रियाशील।',
    },
    photo: '/src/assets/images/school_computer_lab_1791285527785.jpg',
  },
  {
    id: 'tch-english-sec',
    name: {
      en: 'Senior English Faculty',
      np: 'मा.वि. अंग्रेजी शिक्षक',
    },
    designation: {
      en: 'Secondary Teacher (Permanent)',
      np: 'माध्यमिक शिक्षक (स्थायी)',
    },
    department: 'Secondary',
    subject: {
      en: 'Compulsory & Major English',
      np: 'अंग्रेजी भाषा तथा साहित्य',
    },
    qualification: 'M.A., M.Ed. in English',
    experienceYears: 14,
    bio: {
      en: 'Focusing on spoken fluency, creative writing, and comprehensive language acquisition for students.',
      np: 'विद्यार्थीहरूमा अंग्रेजी भाषाको शुद्ध प्रयोग र प्रभावकारी संवाद सीप विकासमा निरन्तर खटिनुहुन्छ।',
    },
    photo: '/src/assets/images/school_hero_campus_1791285473257.jpg',
  },
  {
    id: 'tch-nepali-dept',
    name: {
      en: 'Senior Nepali Language & Literature Faculty',
      np: 'मा.वि. नेपाली भाषा तथा साहित्य शिक्षक',
    },
    designation: {
      en: 'Department Head (Languages)',
      np: 'भाषा विभाग प्रमुख',
    },
    department: 'Secondary',
    subject: {
      en: 'Nepali Language & Literature',
      np: 'नेपाली भाषा र व्याकरण',
    },
    qualification: 'M.A. in Nepali, Tribhuvan University',
    experienceYears: 18,
    bio: {
      en: 'Inspiring literary appreciation, poetry, debate, and grammatical precision across grades 9 to 12.',
      np: 'नेपाली भाषा, साहित्य, वादविवाद तथा सिर्जनात्मक लेखनको प्रवर्द्धनमा क्रियाशील।',
    },
    photo: '/src/assets/images/school_cultural_sports_1791285542577.jpg',
  },
  {
    id: 'tch-mgmt-head',
    name: {
      en: 'Senior Management & Account Faculty',
      np: '+२ व्यवस्थापन तथा लेखा शिक्षक',
    },
    designation: {
      en: 'Coordinator (+2 Management)',
      np: '+२ व्यवस्थापन संयोजक',
    },
    department: 'Secondary',
    subject: {
      en: 'Accountancy & Economics',
      np: 'लेखाविधि तथा अर्थशास्त्र',
    },
    qualification: 'M.B.S. in Finance & Accountancy',
    experienceYears: 12,
    bio: {
      en: 'Coaching commerce and business students in financial accounting, banking, and practical economics.',
      np: 'लेखा, अर्थशास्त्र र व्यवसायिक वित्तीय ज्ञानमा विद्यार्थीहरूलाई व्यावहारिक रूपमा सक्षम बनाउँदै।',
    },
    photo: '/src/assets/images/school_science_lab_1791285504462.jpg',
  },
  {
    id: 'tch-basic-incharge',
    name: {
      en: 'Basic Level Coordinator (Grades 1–8)',
      np: 'आधारभूत तह संयोजक (कक्षा १–८)',
    },
    designation: {
      en: 'Basic Level In-charge',
      np: 'आधारभूत तह इन्चार्ज',
    },
    department: 'Lower Secondary',
    subject: {
      en: 'Mathematics & Social Studies',
      np: 'गणित तथा सामाजिक अध्ययन',
    },
    qualification: 'B.Ed. in Mathematics',
    experienceYears: 15,
    bio: {
      en: 'Ensuring foundational learning competencies, classroom discipline, and student wellbeing in primary and lower secondary grades.',
      np: 'आधारभूत तहका विद्यार्थीहरूको सिकाइ उपलब्धि र अनुशासनको रेखदेखमा समर्पित।',
    },
    photo: '/src/assets/images/school_hero_campus_1791285473257.jpg',
  },
  {
    id: 'tch-admin-accountant',
    name: {
      en: 'School Administrative & Accounts Officer',
      np: 'प्रशासन तथा लेखा अधिकृत',
    },
    designation: {
      en: 'Chief Accountant',
      np: 'विद्यालय लेखापाल',
    },
    department: 'Administration',
    subject: {
      en: 'School Administration & Finance',
      np: 'विद्यालय आर्थिक तथा प्रशासनिक व्यवस्थापन',
    },
    qualification: 'B.B.S. / B.Com',
    experienceYears: 11,
    bio: {
      en: 'Managing school accounting, EMIS data, student documentation, and municipal administrative coordination.',
      np: 'विद्यालयको आर्थिक विवरण, ईएमआईएस (EMIS) तथा विद्यार्थी अभिलेख व्यवस्थापनमा कार्यरत।',
    },
    photo: '/src/assets/images/school_computer_lab_1791285527785.jpg',
  },
];

export const initialFacilities: Facility[] = [
  {
    id: 'fac-science-lab',
    title: {
      en: 'Modern Science Laboratory',
      np: 'सुसज्जित विज्ञान प्रयोगशाला',
    },
    description: {
      en: 'Dedicated Physics, Chemistry, and Biology laboratories equipped with compound optical microscopes, precision apparatus, anatomical specimens, and chemical reagents for curriculum practicals.',
      np: 'भौतिकशास्त्र, रसायनशास्त्र र जीवविज्ञानका लागि आवश्यक आधुनिक उपकरण, सूक्ष्मदर्शक यन्त्र र रासायनिक सामग्रीहरू सहितको सुविधासम्पन्न प्रयोगशाला।',
    },
    image: '/src/assets/images/school_science_lab_1791285504462.jpg',
    category: 'Lab',
    features: ['Independent Physics, Chem & Bio zones', 'Fire safety & first-aid equipment', 'Student experimental workstations'],
  },
  {
    id: 'fac-ict-lab',
    title: {
      en: 'ICT & Digital Computer Center',
      np: 'आधुनिक सूचना तथा प्रविधि (ICT) प्रयोगशाला',
    },
    description: {
      en: 'State-of-the-art computer center with 40+ networked workstations, high-speed fiber internet, multimedia projector, and dedicated coding & digital literacy curriculum.',
      np: '४० भन्दा बढी कम्प्युटर, तीव्र गतिको इन्टरनेट र प्रोजेक्टर सहितको आधुनिक ल्याब जहाँ कक्षा ४ देखि १२ सम्मका विद्यार्थीहरूले कम्प्युटर शिक्षा पाउँछन्।',
    },
    image: '/src/assets/images/school_computer_lab_1791285527785.jpg',
    category: 'Lab',
    features: ['High-speed optical fiber connectivity', 'Solar & battery backup (24/7 Power)', 'Programming and typing practice stations'],
  },
  {
    id: 'fac-library',
    title: {
      en: 'Rich Reference Library & Reading Room',
      np: 'समृद्ध पुस्तकालय तथा अध्ययन कक्ष',
    },
    description: {
      en: 'Vast collection of over 8,500 curriculum textbooks, competitive exam reference volumes, Nepalese & world literature, encyclopedias, and daily national newspapers.',
      np: '८,५०० भन्दा बढी पुस्तक, सन्दर्भ ग्रन्थ, साहित्यिक कृति, बाल साहित्य र दैनिक पत्रपत्रिका भएको शान्त अध्ययन कक्ष।',
    },
    image: '/src/assets/images/school_hero_campus_1791285473257.jpg',
    category: 'Academic',
    features: ['Spacious silent reading tables', 'Dedicated curriculum reference stacks', 'Newspaper & periodical reading desk'],
  },
  {
    id: 'fac-sports-ground',
    title: {
      en: 'Spacious Sports Ground & Athletics',
      np: 'फराकिलो खेलमैदान तथा खेलकुद पूर्वाधार',
    },
    description: {
      en: 'Expansive school playground accommodating football, cricket pitch, volleyball court, badminton arena, athletics track, and annual district sports meets.',
      np: 'फुटबल, क्रिकेट, भलिबल, ब्याडमिन्टन तथा एथलेटिक्सका लागि उपयुक्त फराकिलो खेलमैदान जहाँ विद्यार्थीहरूको शारीरिक विकास गराइन्छ।',
    },
    image: '/src/assets/images/school_cultural_sports_1791285542577.jpg',
    category: 'Sports',
    features: ['Volleyball court & football field', 'Indoor table tennis & chess boards', 'Annual inter-house athletic meets'],
  },
  {
    id: 'fac-drinking-water',
    title: {
      en: 'Safe RO Purified Drinking Water System',
      np: 'शुद्ध पिउने पानी तथा सरसफाइ पूर्वाधार',
    },
    description: {
      en: 'Multi-stage Reverse Osmosis (RO) drinking water filtration plant providing clean, safe, and hygienic water to all 1,800+ students and staff members throughout the day.',
      np: 'सम्पूर्ण विद्यार्थी तथा शिक्षकहरूका लागि बहु-तहको आरओ (RO) प्रशोधित शुद्ध र सुरक्षित पिउने पानीको व्यवस्था।',
    },
    image: '/src/assets/images/school_hero_campus_1791285473257.jpg',
    category: 'Infrastructure',
    features: ['Commercial RO filtration plant', 'Separate gender-friendly hygienic sanitation blocks', 'Continuous water supply'],
  },
  {
    id: 'fac-scholarship',
    title: {
      en: 'Model School Scholarships & Welfare',
      np: 'नमूना विद्यालय छात्रवृत्ति तथा प्रोत्साहन',
    },
    description: {
      en: 'Comprehensive financial stipends and free textbook distribution for girls, underprivileged students, Dalit, and indigenous communities to ensure zero dropouts.',
      np: 'जेहेन्दार, विपन्न, दलित तथा छात्राका लागि शतप्रतिशत छात्रवृत्ति, निःशुल्क पाठ्यपुस्तक तथा प्रोत्साहन कार्यक्रम।',
    },
    image: '/src/assets/images/school_cultural_sports_1791285542577.jpg',
    category: 'Welfare',
    features: ['Zero-fee policy for basic education', 'Free textbook distribution', 'Special merit awards for top scorers'],
  },
];

export const initialAchievements: Achievement[] = [
  {
    id: 'ach-model-status',
    title: {
      en: 'Designated as Model Secondary School (नमूना विद्यालय) by Government of Nepal',
      np: 'नेपाल सरकारद्वारा "नमूना माध्यमिक विद्यालय" को रूपमा घोषित तथा सम्मानित',
    },
    year: '2076 B.S.',
    category: 'Model School',
    description: {
      en: 'Selected by the Ministry of Education, Science and Technology as a premier Model School in Sarlahi district with specialized infrastructure and pedagogical enhancement grants.',
      np: 'शिक्षा मन्त्रालयको उत्कृष्ट मापदण्ड पूरा गरी सर्लाही जिल्लाकै नमूना माध्यमिक विद्यालयको रूपमा छनोट भई विशेष पूर्वाधार विकास प्राप्त।',
    },
    badgeText: 'National Honor (राष्ट्रिय सम्मान)',
    image: '/src/assets/images/school_hero_campus_1791285473257.jpg',
  },
  {
    id: 'ach-see-results',
    title: {
      en: 'Outstanding Results in SEE & National Examination Board (NEB)',
      np: 'एसईई (SEE) तथा कक्षा १२ राष्ट्रिय परीक्षा बोर्डमा उत्कृष्ट नतिजा',
    },
    year: '2080 B.S.',
    category: 'SEE / Board',
    description: {
      en: 'Over 98% pass rate with numerous students securing A+ and A grades in SEE and Grade 12 Science and Management streams.',
      np: 'एसईई तथा कक्षा १२ मा ९८% भन्दा बढी सफलता र बहुसंख्यक विद्यार्थीहरूद्वारा A+ तथा A ग्रेड हासिल।',
    },
    badgeText: 'Academic Excellence (शैक्षिक उत्कृष्टता)',
    image: '/src/assets/images/principal_message_portrait_1791285490222.jpg',
  },
  {
    id: 'ach-sports-shield',
    title: {
      en: 'District Inter-School Volleyball & Football Championship Champions',
      np: 'जिल्लास्तरीय राष्ट्रपति रनिङ शिल्ड तथा भलिबल प्रतियोगितामा विजयी',
    },
    year: '2080 B.S.',
    category: 'Sports',
    description: {
      en: 'School athletic squad clinched champions trophy in municipal sports festival and represented Sarlahi district in Madhesh Province games.',
      np: 'गोडैता नगरपालिका तथा सर्लाही जिल्लास्तरीय खेलकुद प्रतियोगितामा प्रथम स्थान हासिल गरी शिल्ड तथा स्वर्ण पदक जित्न सफल।',
    },
    badgeText: 'Champions Trophy (प्रथम पुरस्कार)',
    image: '/src/assets/images/school_cultural_sports_1791285542577.jpg',
  },
  {
    id: 'ach-science-fair',
    title: {
      en: 'Best Innovation Project Award at Regional Science Exhibition',
      np: 'क्षेत्रीय विज्ञान तथा प्रविधि प्रदर्शनीमा उत्कृष्ट नवप्रवर्तन पुरस्कार',
    },
    year: '2081 B.S.',
    category: 'Faculty',
    description: {
      en: 'Secondary science students won 1st prize for their automated solar irrigation and rural IoT weather alert model.',
      np: 'विद्यार्थीहरूद्वारा निर्मित सौर्य सिँचाइ तथा डिजिटल मौसम सूचना मोडलले क्षेत्रीय विज्ञान मेलामा प्रथम स्थान हासिल गर्यो।',
    },
    badgeText: '1st Prize (प्रथम स्थान)',
    image: '/src/assets/images/school_science_lab_1791285504462.jpg',
  },
];

export const initialEvents: SchoolEvent[] = [
  {
    id: 'ev-new-session',
    title: {
      en: 'Grand Admission Mela & Academic Session 2082/83 Welcome',
      np: 'शैक्षिक सत्र २०८२/८३ नयाँ विद्यार्थी भर्ना मेला तथा स्वागत समारोह',
    },
    date: '2026-04-18',
    nepaliDate: '२०८२ वैशाख ५',
    time: '10:00 AM – 3:00 PM',
    location: 'School Main Quadrangle & Auditorium',
    description: {
      en: 'Welcoming new learners from nursery to grade 11, interaction with faculty, free distribution of curriculum books, and tour of laboratories.',
      np: 'नयाँ भर्ना भएका विद्यार्थी तथा अभिभावकहरूलाई स्वागत, पाठ्यपुस्तक वितरण तथा विद्यालयका ल्याब र सुविधाहरूको अवलोकन।',
    },
    isUpcoming: true,
    category: 'Celebration',
    image: '/src/assets/images/school_hero_campus_1791285473257.jpg',
  },
  {
    id: 'ev-parents-day',
    title: {
      en: 'Annual Parents Day & Academic Merit Distribution Ceremony',
      np: 'वार्षिक अभिभावक दिवस तथा शैक्षिक पुरस्कार वितरण समारोह',
    },
    date: '2026-05-02',
    nepaliDate: '२०८२ वैशाख १९',
    time: '11:00 AM – 4:00 PM',
    location: 'School Main Stage & Open Ground',
    description: {
      en: 'Annual celebration honoring academic toppers, sports winners, cultural dance performances by students, and School Management Committee annual report presentation.',
      np: 'उत्कृष्ट विद्यार्थीहरूलाई पुरस्कार वितरण, विद्यार्थीहरूद्वारा सांस्कृतिक प्रस्तुति तथा विद्यालय व्यवस्थापन समितिको प्रगति विवरण प्रस्तुतीकरण।',
    },
    isUpcoming: true,
    category: 'Cultural',
    image: '/src/assets/images/school_cultural_sports_1791285542577.jpg',
  },
  {
    id: 'ev-science-exhibition',
    title: {
      en: 'Inter-School Science, Robotics & ICT Exhibition 2082',
      np: 'अन्तर-विद्यालय विज्ञान, रोबोटिक्स तथा प्रविधि प्रदर्शनी २०८२',
    },
    date: '2026-05-24',
    nepaliDate: '२०८२ जेठ १०',
    time: '10:30 AM – 3:30 PM',
    location: 'Science & ICT Laboratory Complex',
    description: {
      en: 'Live scientific working models, solar inventions, coding projects, and environmental sustainability demonstrations created by students.',
      np: 'विद्यार्थीहरूले निर्माण गरेका वैज्ञानिक मोडलहरू, रोबोटिक्स, सौर्य उपकरण र सफ्टवेयरहरूको प्रत्यक्ष प्रदर्शनी।',
    },
    isUpcoming: true,
    category: 'Academic',
    image: '/src/assets/images/school_science_lab_1791285504462.jpg',
  },
];

export const initialGallery: GalleryItem[] = [
  {
    id: 'gal-campus-hero',
    title: {
      en: 'Main School Building & Courtyard',
      np: 'विद्यालयको मुख्य भवन तथा प्राङ्गण',
    },
    category: 'Campus',
    image: '/src/assets/images/school_hero_campus_1791285473257.jpg',
    caption: 'Official campus facade of Shree Beni Bhola Model Secondary School, Godaita-8, Sarlahi',
    date: '2081 B.S.',
  },
  {
    id: 'gal-science-lab',
    title: {
      en: 'Practical Science Laboratory Experiments',
      np: 'विज्ञान प्रयोगशालामा प्रयोगात्मक अभ्यास',
    },
    category: 'Science & ICT',
    image: '/src/assets/images/school_science_lab_1791285504462.jpg',
    caption: 'Students conducting chemistry and microscopy practicals under faculty mentorship',
    date: '2081 B.S.',
  },
  {
    id: 'gal-ict-lab',
    title: {
      en: 'ICT Computer Lab Hands-on Session',
      np: 'कम्प्युटर ल्याबमा प्रविधि शिक्षा',
    },
    category: 'Science & ICT',
    image: '/src/assets/images/school_computer_lab_1791285527785.jpg',
    caption: 'Digital literacy, internet learning, and programming classes in model lab',
    date: '2081 B.S.',
  },
  {
    id: 'gal-sports-day',
    title: {
      en: 'Annual Sports & Cultural Festival Celebrations',
      np: 'वार्षिक खेलकुद तथा सांस्कृतिक उत्सव',
    },
    category: 'Sports',
    image: '/src/assets/images/school_cultural_sports_1791285542577.jpg',
    caption: 'Trophy celebrations and joyous student performances during annual gala',
    date: '2081 B.S.',
  },
  {
    id: 'gal-principal-office',
    title: {
      en: 'Leadership & Academic Administration',
      np: 'विद्यालय नेतृत्व तथा शैक्षिक प्रशासन',
    },
    category: 'Events',
    image: '/src/assets/images/principal_message_portrait_1791285490222.jpg',
    caption: 'Principal and academic administration coordinating institutional growth',
    date: '2081 B.S.',
  },
];

export const initialDownloads: DownloadItem[] = [
  {
    id: 'dl-adm-form',
    title: {
      en: 'Official Student Admission Application Form (2082/2083)',
      np: 'विद्यार्थी नयाँ भर्ना आवेदन फारम (२०८२/२०८३)',
    },
    category: 'Admission',
    date: '2026-04-01',
    fileSize: '345 KB',
    fileType: 'PDF',
    downloadUrl: '#',
  },
  {
    id: 'dl-calendar',
    title: {
      en: 'Official Academic Calendar & Holiday List (Year 2082 B.S.)',
      np: 'वार्षिक शैक्षिक क्यालेन्डर तथा बिदाको सूची (वि.सं. २०८२)',
    },
    category: 'Calendar',
    date: '2026-03-28',
    fileSize: '512 KB',
    fileType: 'PDF',
    downloadUrl: '#',
  },
  {
    id: 'dl-syllabus-plus2',
    title: {
      en: 'Grade 11 & 12 Curriculum & Subject Scheme Guidelines (NEB)',
      np: 'कक्षा ११ र १२ पाठ्यक्रम तथा विषय छनोट निर्देशिका (NEB)',
    },
    category: 'Curriculum',
    date: '2026-03-15',
    fileSize: '1.2 MB',
    fileType: 'PDF',
    downloadUrl: '#',
  },
  {
    id: 'dl-rules-handbook',
    title: {
      en: 'Student Code of Conduct & School Disciplinary Handbook',
      np: 'विद्यार्थी आचारसंहिता तथा अनुशासन नियमावली पुस्तिका',
    },
    category: 'Rules',
    date: '2026-02-20',
    fileSize: '410 KB',
    fileType: 'PDF',
    downloadUrl: '#',
  },
  {
    id: 'dl-see-model-q',
    title: {
      en: 'SEE Model Question Sets with Marking Scheme (Science & Math)',
      np: 'एसईई (SEE) नमूना प्रश्नपत्र तथा उत्तरपुस्तिका मापदण्ड',
    },
    category: 'Exam',
    date: '2026-02-10',
    fileSize: '890 KB',
    fileType: 'PDF',
    downloadUrl: '#',
  },
];
