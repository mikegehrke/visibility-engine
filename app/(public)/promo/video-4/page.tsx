'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';

const translations = {
  en: {
    calendarFull: 'Your calendar is full...',
    noTimeForAnalytics: 'No time for analytics?',
    youHaveBetterThings: 'You have better things to do.',
    seconds: 'seconds...',
    done: 'Done!',
    setupIn5: 'Setup in 5 minutes.',
    insightsForever: 'Insights forever.',
    features: [
      { icon: '⏰', text: '5 Minute Setup' },
      { icon: '📊', text: 'Automatic Reports' },
      { icon: '🔔', text: 'Real-time Alerts' },
      { icon: '📈', text: 'Weekly Insights' },
    ],
  },
  de: {
    calendarFull: 'Dein Kalender ist voll...',
    noTimeForAnalytics: 'Keine Zeit für Analytics?',
    youHaveBetterThings: 'Du hast Wichtigeres zu tun.',
    seconds: 'Sekunden...',
    done: 'Fertig!',
    setupIn5: 'Setup in 5 Minuten.',
    insightsForever: 'Insights für immer.',
    features: [
      { icon: '⏰', text: '5 Minuten Setup' },
      { icon: '📊', text: 'Automatische Reports' },
      { icon: '🔔', text: 'Echtzeit-Alerts' },
      { icon: '📈', text: 'Wöchentliche Insights' },
    ],
  },
};

export default function PromoVideo4() {
  const { language } = useLanguage();
  const t = translations[language];
  const [step, setStep] = useState(0);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timings = [0, 3000, 7000, 11000, 15000];
    const timers: NodeJS.Timeout[] = [];
    
    timings.forEach((time, index) => {
      if (index > 0) {
        timers.push(setTimeout(() => setStep(index), time));
      }
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (step === 2) {
      const interval = setInterval(() => {
        setCountdown(c => {
          if (c <= 1) {
            clearInterval(interval);
            return 0;
          }
          return c - 1;
        });
      }, 600);
      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-2xl">
        
        {/* Step 1: Clock ticking, calendar full */}
        {step === 0 && (
          <div className="animate-fade-in">
            <div className="text-8xl mb-6 animate-pulse">⏰</div>
            <div className="grid grid-cols-7 gap-1 w-64 mx-auto mb-6">
              {Array.from({ length: 35 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 bg-red-500/30 rounded flex items-center justify-center text-xs text-red-400"
                >
                  📅
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-lg">{t.calendarFull}</p>
          </div>
        )}

        {/* Step 2: "No time for analytics?" */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.noTimeForAnalytics}
            </h1>
            <p className="text-xl text-gray-400">
              {t.youHaveBetterThings}
            </p>
          </div>
        )}

        {/* Step 3: Countdown */}
        {step === 2 && (
          <div className="animate-fade-in">
            <div className="text-[180px] font-black text-blue-500 leading-none animate-pulse">
              {countdown}
            </div>
            <p className="text-2xl text-gray-400 mt-4">
              {countdown > 0 ? t.seconds : t.done}
            </p>
          </div>
        )}

        {/* Step 4: Dashboard appears, all green */}
        {step === 3 && (
          <div className="animate-scale-in">
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 shadow-2xl mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Google', 'Instagram', 'YouTube', 'LinkedIn'].map((platform, i) => (
                  <div key={platform} className="bg-gray-800 rounded-lg p-4 animate-pop-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">{platform}</span>
                      <span className="text-green-400 text-sm">✓</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: `${70 + i * 8}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Features + CTA */}
        {step >= 4 && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-2 gap-4 mb-8">
              {t.features.map((feature, i) => (
                <div 
                  key={feature.text}
                  className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 animate-pop-in"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <div className="text-white font-medium">{feature.text}</div>
                </div>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.setupIn5}
            </h1>
            <p className="text-xl text-blue-400 font-medium">
              {t.insightsForever}
            </p>
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
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0.8); }
          70% { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-pop-in {
          opacity: 0;
          animation: pop-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
