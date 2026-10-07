import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { Award, Cpu, Users, HeartHandshake, ShieldCheck, BookOpen, Microscope, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { lang, t } = useSchool();

  const reasons = [
    {
      icon: Award,
      title: t('नेपाल सरकारको नमूना विद्यालय', 'Government Model School Benchmark'),
      desc: t(
        'उत्कृष्ट भौतिक पूर्वाधार, शैक्षिक स्तर र सिकाइ उपलब्धिको आधारमा नेपाल सरकारबाट नमूना विद्यालयको रूपमा मान्यता प्राप्त।',
        'Recognized by the Ministry of Education as a Model Secondary School with elevated standards in infrastructure and pedagogy.'
      ),
    },
    {
      icon: Microscope,
      title: t('आधुनिक विज्ञान तथा ICT ल्याब', 'Advanced Science & ICT Labs'),
      desc: t(
        'भौतिक, रसायन र जीवविज्ञानका पूर्ण प्रयोगात्मक ल्याब र ४०+ कम्प्युटर सहितको डिजिटल सिकाइ केन्द्र।',
        'Fully equipped experimental Physics, Chemistry, and Biology laboratories alongside a networked ICT center.'
      ),
    },
    {
      icon: Users,
      title: t('अनुभवी तथा स्थायी शिक्षक वर्ग', 'Highly Qualified & Dedicated Faculty'),
      desc: t(
        'विश्वविद्यालयका उच्च तह उत्तीर्ण, अनुभवी, बालमैत्री र विषयविज्ञ शिक्षकहरूको निरन्तर व्यक्तिगत मार्गदर्शन।',
        'Veteran post-graduate educators and pedagogy specialists providing individualized learning mentorship.'
      ),
    },
    {
      icon: HeartHandshake,
      title: t('शतप्रतिशत निःशुल्क एवं छात्रवृत्ति सुविधा', 'Comprehensive Scholarships & Zero-Fee Equity'),
      desc: t(
        'आधारभूत शिक्षा निःशुल्क, जेहेन्दार, छात्रा र विपन्न वर्गका विद्यार्थीहरूलाई निःशुल्क पाठ्यपुस्तक र नियमित प्रोत्साहन।',
        'Full scholarship access, free curriculum textbooks, and equity incentives ensuring no child is left behind.'
      ),
    },
    {
      icon: Cpu,
      title: t('डिजिटल तथा प्रविधिमैत्री शिक्षण', 'Smart Multimedia Classrooms'),
      desc: t(
        'डिजिटल अडियो-भिजुअल सामग्री, प्रोजेक्टर र इन्टरनेटको माध्यमबाट व्यावहारिक तथा जीवन्त सिकाइ अनुभव।',
        'Smart audio-visual classrooms, interactive projectors, and curriculum-mapped digital learning content.'
      ),
    },
    {
      icon: ShieldCheck,
      title: t('संस्कारयुक्त र अनुशासित वातावरण', 'Disciplined & Safe Learning Haven'),
      desc: t(
        'विद्या ददाति विनयम् को आदर्शमा आधारित नैतिक आचरण, खेलकुद, अतिरिक्त क्रियाकलाप र सामाजिक उत्तरदायित्व।',
        'Cultivating character, cultural values, sportsmanship, and civic pride in an inspiring, safe sanctuary.'
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
            {t('हाम्रा विशिष्ट विशेषताहरू', 'Distinctive Institutional Pillars')}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            {t('श्री बेनी भोला नमूना मा.वि. नै किन रोज्ने?', 'Why Choose Shree Beni Bhola Model Secondary School?')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {t(
              'ग्रामीण मधेश प्रदेशमा अन्तर्राष्ट्रिय स्तरको सन्तुलित शिक्षा, चरित्र निर्माण र प्रविधिमा अब्बल जनशक्ति तयार गर्न समर्पित।',
              'Committed to delivering world-class holistic education, high moral ethos, and technological competence in Madhesh Province.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-900 text-amber-400 flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {r.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
