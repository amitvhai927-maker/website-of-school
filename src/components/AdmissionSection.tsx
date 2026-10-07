import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { Sparkles, CheckCircle2, FileText, Send, Calendar, Clock, AlertCircle } from 'lucide-react';

export const AdmissionSection: React.FC = () => {
  const { submitAdmission, lang, t, settings } = useSchool();

  const [form, setForm] = useState({
    studentName: '',
    guardianName: '',
    dateOfBirth: '',
    grade: 'Grade 11 (Science)',
    phone: '',
    email: '',
    address: '',
    previousSchool: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.studentName || !form.phone || !form.guardianName) {
      alert(t('कृपया आवश्यक विवरणहरू भर्नुहोस्।', 'Please fill in required fields.'));
      return;
    }

    submitAdmission(form);
    setIsSubmitted(true);
    setForm({
      studentName: '',
      guardianName: '',
      dateOfBirth: '',
      grade: 'Grade 11 (Science)',
      phone: '',
      email: '',
      address: '',
      previousSchool: '',
      message: '',
    });
  };

  const steps = [
    {
      num: '01',
      title: t('फारम संकलन वा अनलाइन आवेदन', 'Inquiry or Form Collection'),
      desc: t('अनलाइन वा विद्यालयको प्रशासन शाखाबाट भर्ना आवेदन फारम भर्नुहोस्।', 'Fill the online inquiry form or collect the paper form from the school counter.'),
    },
    {
      num: '02',
      title: t('आवश्यक कागजात प्रमाणीकरण', 'Document Verification'),
      desc: t('जन्मदर्ता, चारित्रिक प्रमाणपत्र र अघिल्लो कक्षाको लब्धाङ्क पेश गर्नुहोस्।', 'Submit transfer certificate, character certificate, marksheet, and birth certificate.'),
    },
    {
      num: '03',
      title: t('प्रारम्भिक अन्तरक्रिया / मूल्याङ्कन', 'Assessment & Interaction'),
      desc: t('विद्यार्थीको क्षमता पहिचानका लागि छोटो परामर्श तथा मूल्याङ्कन।', 'A short assessment to evaluate aptitude and subject counseling.'),
    },
    {
      num: '04',
      title: t('भर्ना पुष्टि र पाठ्यपुस्तक वितरण', 'Admission Confirmation'),
      desc: t('भर्ना निश्चित भएपछि परिचयपत्र, पोशाक जानकारी र पाठ्यपुस्तक प्राप्त गर्नुहोस्।', 'Receive student identity card, orientation guide, and free curriculum books.'),
    },
  ];

  const requiredDocuments = [
    t('जन्मदर्ता प्रमाणपत्रको प्रतिलिपि (Birth Certificate)', 'Birth Certificate copy'),
    t('अघिल्लो विद्यालयको स्थानान्तरण प्रमाणपत्र (TC)', 'Transfer Certificate (TC) from previous school'),
    t('चारित्रिक प्रमाणपत्र (Character Certificate)', 'Character Certificate'),
    t('एसईई वा अन्तिम परीक्षाको लब्धाङ्क पत्र (Marksheet)', 'SEE Grade-Sheet / Previous Year Marksheet'),
    t('हालसालै खिचिएको २ प्रति पासपोर्ट साइजको फोटो', '2 recent passport-size photographs'),
    t('नागरिकता वा अभिभावकको परिचयपत्र (Parent ID)', 'Parent Citizenship/ID copy'),
  ];

  return (
    <section id="admission" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('शैक्षिक सत्र २०८२/२०८३ भर्ना', 'Admissions Open 2082/2083')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            {t('नयाँ विद्यार्थी भर्ना तथा आवेदन प्रक्रिया', 'Admission Guidelines & Online Inquiry')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {t(
              'शिशु कक्षा (ECD) देखि कक्षा १२ सम्म नयाँ भर्ना खुला छ। निष्पक्ष छनोट, छात्रवृत्ति तथा गुणस्तरीय शिक्षा।',
              'Join Shree Beni Bhola Model Secondary School. Transparent admissions, merit-need scholarships, and world-class faculty.'
            )}
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 relative"
            >
              <div className="text-2xl font-bold text-blue-900/30 mb-2">
                {st.num}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                {st.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Form and Document Requirements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Required Documents & Important Notes */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-blue-50/60 border border-blue-200/80 space-y-4">
              <h3 className="text-base font-bold text-blue-950 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-900" />
                <span>{t('भर्नाका लागि आवश्यक कागजातहरू', 'Required Documents')}</span>
              </h3>
              <ul className="space-y-2.5">
                {requiredDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{t('विशेष छात्रवृत्ति सूचना', 'Scholarship & Equity Note')}</span>
              </div>
              <p className="leading-relaxed">
                {t(
                  'छात्रा, दलित, अपाङ्गता भएका तथा विपन्न परिवारका बालबालिकाहरूका लागि नेपाल सरकारको नियमानुसार शतप्रतिशत निःशुल्क अध्ययन तथा छात्रवृत्ति उपलब्ध छ।',
                  'Merit and need-based scholarships covering 100% tuition and books are available for girls, marginalized communities, and underprivileged scholars.'
                )}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Admission Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200/90 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {t('अनलाइन भर्ना सोधपुछ फारम', 'Online Admission Inquiry Form')}
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              {t('तलको फारम भर्नुहोस्, विद्यालय प्रशासनले चाँडै सम्पर्क गर्नेछ।', 'Submit your details below and our admission officer will contact you.')}
            </p>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">
                    {t('आवेदन सफलतापूर्वक पेश भयो!', 'Application Successfully Submitted!')}
                  </div>
                  <div className="mt-0.5 text-emerald-700">
                    {t(
                      'धन्यवाद! तपाईंको विवरण सुरक्षित गरिएको छ। विद्यालय प्रशासनले तपाईंलाई छिट्टै टेलिफोन वा ईमेलमार्फत सम्पर्क गर्नेछ।',
                      'Thank you! We have received your inquiry. Our admission desk will reach out shortly.'
                    )}
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('विद्यार्थीको पूरा नाम *', "Student's Full Name *")}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.studentName}
                    onChange={(e) => setForm({ ...form, studentName: e.target.value })}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('अभिभावकको नाम *', "Guardian's Name *")}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.guardianName}
                    onChange={(e) => setForm({ ...form, guardianName: e.target.value })}
                    placeholder="e.g. Ram Prasad Sharma"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('भर्ना हुन चाहेको कक्षा / संकाय *', 'Grade / Stream Applying For *')}
                  </label>
                  <select
                    value={form.grade}
                    onChange={(e) => setForm({ ...form, grade: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                  >
                    <option value="ECD / Nursery">ECD / Nursery / Kindergarten</option>
                    <option value="Grade 1 to 5 (Primary)">Grade 1 to 5 (Primary)</option>
                    <option value="Grade 6 to 8 (Basic)">Grade 6 to 8 (Basic Level)</option>
                    <option value="Grade 9 (Secondary)">Grade 9 (Secondary)</option>
                    <option value="Grade 10 (Secondary)">Grade 10 (Secondary)</option>
                    <option value="Grade 11 (Science)">Grade 11: Science Stream (+2 Science)</option>
                    <option value="Grade 11 (Management)">Grade 11: Management Stream (+2 Mgmt)</option>
                    <option value="Grade 11 (Education)">Grade 11: Education Stream (+2 Edu)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('जन्म मिति (Date of Birth)', 'Date of Birth')}
                  </label>
                  <input
                    type="date"
                    value={form.dateOfBirth}
                    onChange={(e) => setForm({ ...form, dateOfBirth: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('मोबाइल / फोन नम्बर *', 'Phone Number *')}
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+977 98XXXXXXXX"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('ईमेल ठेगाना', 'Email Address (Optional)')}
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="example@gmail.com"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t('स्थायी वा हालको ठेगाना', 'Residential Address')}
                </label>
                <input
                  type="text"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="e.g. Godaita-8, Sarlahi"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t('थप प्रश्न वा जानकारी', 'Additional Query / Note')}
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t('कुनै प्रश्न वा छात्रवृत्ति सम्बन्धी सोधपुछ...', 'Any inquiry or previous school info...')}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold rounded-lg bg-blue-900 hover:bg-blue-800 text-white shadow-md transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>{t('आवेदन फारम पेश गर्नुहोस्', 'Submit Admission Inquiry')}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
