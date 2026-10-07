import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { settings, submitContactMessage, lang, t } = useSchool();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;

    submitContactMessage(form);
    setSent(true);
    setForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t('सम्पर्क तथा स्थान', 'Contact & Geographic Location')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            {t('हामीसँग सम्पर्क गर्नुहोस्', 'Get in Touch with Administration')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {t(
              'विद्यालय सम्बन्धी कुनै पनि जिज्ञासा, सुझाव वा सहयोगका लागि हामी सदैव तत्पर छौं।',
              'For academic inquiries, student admissions, certification verification, or school visits.'
            )}
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold uppercase text-slate-500">
              {t('ठेगाना', 'Location')}
            </div>
            <div className="text-sm font-bold text-slate-900">
              {settings.location[lang]}
            </div>
            <div className="text-xs text-slate-500">
              {settings.district}, {settings.province}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold uppercase text-slate-500">
              {t('टेलिफोन / मोबाइल', 'Phone Lines')}
            </div>
            <div className="text-sm font-bold text-slate-900">
              {settings.phone}
            </div>
            <div className="text-xs text-slate-500">
              {settings.phoneAlternate}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold uppercase text-slate-500">
              {t('ईमेल ठेगाना', 'Email Inquiries')}
            </div>
            <div className="text-sm font-bold text-slate-900 truncate">
              {settings.email}
            </div>
            <div className="text-xs text-slate-500 truncate">
              {settings.admissionEmail}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold uppercase text-slate-500">
              {t('कार्यालय समय', 'Office Hours')}
            </div>
            <div className="text-xs font-bold text-slate-900 leading-snug">
              {settings.officeHours[lang]}
            </div>
          </div>
        </div>

        {/* Map & Message Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Google Map */}
          <div className="lg:col-span-6 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-sm h-full min-h-[420px] flex flex-col">
            <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  {t('गुगल नक्सा (Google Map)', 'Interactive School Map')}
                </h4>
                <p className="text-[11px] text-slate-500">
                  Godaita-8, Sarlahi, Madhesh Province, Nepal
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Godaita+Sarlahi+Nepal"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-blue-900 hover:underline"
              >
                {t('नक्सा खोल्नुहोस्', 'Open in Maps ↗')}
              </a>
            </div>

            <div className="flex-1 w-full min-h-[360px] relative">
              <iframe
                title="School Location Map"
                src={settings.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-blue-900" />
              <h3 className="text-base font-bold text-slate-900">
                {t('सन्देश वा सोधपुछ पठाउनुहोस्', 'Send an Official Message')}
              </h3>
            </div>
            <p className="text-xs text-slate-600 mb-6">
              {t('फारम भरेर पठाउनुहोस्, सम्बन्धित शाखाबाट शीघ्र जवाफ दिइनेछ।', 'Fill out the form below and we will respond to your registered email or phone.')}
            </p>

            {sent && (
              <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">{t('सन्देश पठाइयो!', 'Message Sent!')}</div>
                  <div className="mt-0.5 text-emerald-700">
                    {t('तपाईंको सन्देश सफलतापूर्वक दर्ता भएको छ।', 'Your inquiry has been logged in the school administrative inbox.')}
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('तपाईंको पूरा नाम *', 'Your Name *')}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('फोन नम्बर', 'Phone Number')}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+977 98XXXXXXXX"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('ईमेल ठेगाना', 'Email Address')}
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ramesh@example.com"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('विषय', 'Subject')}
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder={t('प्रमाणपत्र सोधपुछ / भर्ना', 'Certificate / General Query')}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t('सन्देश / सोधपुछ विवरण *', 'Message Description *')}
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t('तपाईंको सन्देश यहाँ लेख्नुहोस्...', 'Write your message here...')}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-lg bg-blue-900 hover:bg-blue-800 text-white shadow-sm transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>{t('सन्देश पठाउनुहोस्', 'Send Message')}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
