'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';

const translations = {
  en: {
    resultsThatShow: 'Results that speak for themselves...',
    moreVisibility: 'More Visibility',
    averageAfter30Days: 'on average after 30 days',
    testimonialText: '"Finally I understand what\'s happening on my platforms. The weekly reports save me 5+ hours!"',
    entrepreneursTrustUs: 'Entrepreneurs trust us',
    tryFree14Days: 'Try 14 days for free',
    whenDoYouStart: 'When do',
    you: 'you',
    start: 'start?',
  },
  de: {
    resultsThatShow: 'Ergebnisse, die sich sehen lassen...',
    moreVisibility: 'Mehr Sichtbarkeit',
    averageAfter30Days: 'durchschnittlich nach 30 Tagen',
    testimonialText: '"Endlich verstehe ich, was auf meinen Plattformen passiert. Die wöchentlichen Reports sparen mir 5+ Stunden!"',
    entrepreneursTrustUs: 'Unternehmer vertrauen uns',
    tryFree14Days: 'Jetzt 14 Tage kostenlos testen',
    whenDoYouStart: 'Wann startest',
    you: 'du',
    start: '?',
  },
};

export default function PromoVideo5() {
  const { language } = useLanguage();
  const t = translations[language];
  const [step, setStep] = useState(0);
  const [visibilityCount, setVisibilityCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const timings = [0, 3500, 7000, 11000, 15000];
    const timers: NodeJS.Timeout[] = [];
    
    timings.forEach((time, index) => {
      if (index > 0) {
        timers.push(setTimeout(() => setStep(index), time));
      }
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  // Count up effect for visibility
  useEffect(() => {
    if (step === 1) {
      const target = 340;
      const duration = 2000;
      const increment = target / (duration / 50);
      const interval = setInterval(() => {
        setVisibilityCount(c => {
          if (c >= target) {
            clearInterval(interval);
            return target;
          }
          return Math.min(c + increment, target);
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [step]);

  // Count up effect for users
  useEffect(() => {
    if (step === 3) {
      const target = 1247;
      const duration = 2000;
      const increment = target / (duration / 30);
      const interval = setInterval(() => {
        setUserCount(c => {
          if (c >= target) {
            clearInterval(interval);
            return target;
          }
          return Math.min(c + increment, target);
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Celebration particles */}
      {step >= 1 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full animate-float"
              style={{
                backgroundColor: ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b'][i % 4],
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-2xl">
        
        {/* Step 1: Graph going up */}
        {step === 0 && (
          <div className="animate-fade-in">
            <div className="w-80 h-48 mx-auto mb-8 relative">
              <svg viewBox="0 0 320 160" className="w-full h-full">
                {/* Grid */}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Area fill */}
                <path
                  d="M0,130 Q40,125 80,115 T160,90 T240,50 T320,20 L320,160 L0,160 Z"
                  fill="url(#areaGradient)"
                  className="animate-draw-area"
                />
                
                {/* Line */}
                <path
                  d="M0,130 Q40,125 80,115 T160,90 T240,50 T320,20"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  className="animate-draw-line"
                />
              </svg>
            </div>
            <p className="text-gray-400 text-lg">{t.resultsThatShow}</p>
          </div>
        )}

        {/* Step 2: Big percentage number */}
        {step === 1 && (
          <div className="animate-fade-in">
            <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 leading-none mb-4">
              +{Math.round(visibilityCount)}%
            </div>
            <p className="text-2xl text-white font-medium mb-2">
              {t.moreVisibility}
            </p>
            <p className="text-gray-400">
              {t.averageAfter30Days}
            </p>
          </div>
        )}

        {/* Step 3: Testimonial */}
        {step === 2 && (
          <div className="animate-scale-in">
            <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 max-w-lg mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl">
                  👩‍💼
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">Sarah M.</div>
                  <div className="text-gray-400 text-sm">Marketing Lead</div>
                </div>
              </div>
              <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
              <p className="text-white text-lg italic leading-relaxed">
                {t.testimonialText}
              </p>
            </div>
          </div>
        )}

        {/* Step 4: User counter */}
        {step === 3 && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex -space-x-3">
                {['👤', '👩', '👨', '👩‍💼', '🧑‍💻'].map((emoji, i) => (
                  <div 
                    key={i} 
                    className="w-12 h-12 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-xl animate-pop-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <span className="text-gray-400 ml-2">+{Math.round(userCount)}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {Math.round(userCount).toLocaleString('de-DE')}+
            </h1>
            <p className="text-xl text-gray-400">
              {t.entrepreneursTrustUs}
            </p>
          </div>
        )}

        {/* Step 5: Final CTA */}
        {step >= 4 && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">{t.tryFree14Days}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t.whenDoYouStart} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{t.you}</span>{t.start}
            </h1>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-blue-400 text-xl font-semibold">visibility-engine.com</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-white font-semibold">Visibility Engine</span>
        </div>
        <span className="text-gray-400">|</span>
        <span className="text-blue-400 font-medium">visibility-engine.com</span>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0.5); }
          70% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        @keyframes draw-line {
          from { stroke-dasharray: 500; stroke-dashoffset: 500; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes draw-area {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-pop-in {
          opacity: 0;
          animation: pop-in 0.4s ease-out forwards;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-draw-line {
          stroke-dasharray: 500;
          animation: draw-line 2s ease-out forwards;
        }
        .animate-draw-area {
          animation: draw-area 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
