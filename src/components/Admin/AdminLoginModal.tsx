import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Lock, X, KeyRound, ShieldAlert, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SchoolEmblem } from '../SchoolEmblem';

export const AdminLoginModal: React.FC = () => {
  const { isLoginModalOpen, setIsLoginModalOpen, adminLogin, lang, t, settings } = useSchool();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    const success = adminLogin(password);
    if (!success) {
      setError(true);
    } else {
      setPassword('');
    }
  };

  const handleQuickDemo = () => {
    setPassword('admin123');
    adminLogin('admin123');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SchoolEmblem size={36} />
            <div>
              <h3 className="text-sm font-bold text-white">
                {t('प्रशासकीय नियन्त्रण कक्ष', 'School Admin Portal')}
              </h3>
              <p className="text-[11px] text-amber-400">
                {settings.schoolName[lang]}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsLoginModalOpen(false)}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <div className="text-xs text-slate-600 leading-relaxed bg-blue-50/70 p-3.5 rounded-lg border border-blue-200/60">
            <div className="font-bold text-blue-950 flex items-center gap-1.5 mb-1">
              <ShieldCheck className="w-4 h-4 text-blue-900" />
              <span>{t('सुरक्षित व्यवस्थापन पहुँच', 'Secure Administrative Access')}</span>
            </div>
            <p>
              {t(
                'यस ड्यासबोर्डबाट सूचनाहरू, शिक्षक सूची, कार्यक्रम, भर्ना आवेदनहरू, र विद्यालय विवरणहरू व्यवस्थापन गर्न सकिन्छ।',
                'From this dashboard, authorized administrators can manage notices, teachers, programs, admission inquiries, and website settings.'
              )}
            </p>
          </div>

          {/* Quick Demo Helper box */}
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
            <div>
              <span className="font-bold">{t('परीक्षण पासवर्ड:', 'Default Master Key:')} </span>
              <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono text-amber-950">admin123</code>
            </div>
            <button
              onClick={handleQuickDemo}
              className="text-[11px] font-bold text-blue-900 hover:underline"
            >
              {t('सिधै प्रवेश गर्नुहोस् →', 'Quick Sign In →')}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t('व्यवस्थापक पासवर्ड (Admin Password)', 'Admin Security Password')}
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  autoFocus
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  placeholder="Enter admin password..."
                  className="w-full pl-9 pr-3 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                />
              </div>
              {error && (
                <div className="flex items-center gap-1.5 text-xs text-rose-600 mt-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>{t('गलत पासवर्ड! कृपया पुन: प्रयास गर्नुहोस्।', 'Invalid password. Try admin123.')}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold rounded-lg bg-blue-900 hover:bg-blue-800 text-white shadow-md transition-colors"
            >
              <Lock className="w-4 h-4" />
              <span>{t('ड्यासबोर्ड खोल्नुहोस्', 'Authenticate & Open Dashboard')}</span>
            </button>
          </form>

          <div className="pt-2 text-center text-[11px] text-slate-400">
            Godaita-8, Sarlahi, Madhesh Province · Estd. 2004 B.S.
          </div>
        </div>
      </div>
    </div>
  );
};
