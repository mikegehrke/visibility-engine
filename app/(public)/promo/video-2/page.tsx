'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';

const translations = {
  en: {
    oneDashboard: 'One Dashboard. All Platforms.',
    underControl: 'Finally everything under control.',
    googleRankings: '❌ Google changes rankings',
    instagramHides: '❌ Instagram hides posts',
    youtubeAlgo: '❌ YouTube changes algorithm',
    linkedinBuries: '❌ LinkedIn buries content',
  },
  de: {
    oneDashboard: 'Ein Dashboard. Alle Plattformen.',
    underControl: 'Endlich alles unter Kontrolle.',
    googleRankings: '❌ Google ändert Rankings',
    instagramHides: '❌ Instagram versteckt Posts',
    youtubeAlgo: '❌ YouTube ändert Algorithmus',
    linkedinBuries: '❌ LinkedIn begräbt Content',
  },
};

const platforms = [
  { name: 'Google', icon: '🔍', color: 'bg-blue-500', x: -100, y: -50 },
  { name: 'Instagram', icon: '📸', color: 'bg-pink-500', x: 100, y: -50 },
  { name: 'YouTube', icon: '🎬', color: 'bg-red-500', x: -100, y: 50 },
  { name: 'LinkedIn', icon: '💼', color: 'bg-blue-700', x: 100, y: 50 },
];

export default function PromoVideo2() {
  const { language } = useLanguage();
  const t = translations[language];
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timings = [0, 4000, 8000, 12000, 16000];
    const timers: NodeJS.Timeout[] = [];
    
    timings.forEach((time, index) => {
      if (index > 0) {
        timers.push(setTimeout(() => setStep(index), time));
      }
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Content */}
      <div className="relative z-10 text-center px-8">
        
        {/* Steps 1-2: Chaotic platforms with warnings */}
        {step < 3 && (
          <div className="relative w-80 h-80 mx-auto">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className={`absolute w-20 h-20 rounded-2xl ${platform.color} flex items-center justify-center text-3xl shadow-lg transition-all duration-1000 ${
                  step === 0 ? 'animate-float-chaos' : step === 1 ? 'animate-shake' : ''
                }`}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${platform.x}px), calc(-50% + ${platform.y}px))`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {platform.icon}
                {step >= 1 && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                )}
              </div>
            ))}
            
            {step >= 1 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl animate-pulse">⚠️</div>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Visibility Engine logo centered */}
        {step === 3 && (
          <div className="animate-scale-in">
            <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/50">
              <svg className="w-20 h-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Step 4: All platforms aligned with checkmarks */}
        {step >= 4 && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-center gap-6 mb-8">
              {platforms.map((platform, index) => (
                <div
                  key={platform.name}
                  className={`relative w-16 h-16 rounded-xl ${platform.color} flex items-center justify-center text-2xl shadow-lg`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {platform.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pop-in" style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.oneDashboard}
            </h1>
            <p className="text-xl text-gray-400">
              {t.underControl}
            </p>
          </div>
        )}

        {/* Text overlays for steps 1-2 */}
        {step === 1 && (
          <div className="mt-8 space-y-2 animate-fade-in">
            <p className="text-red-400 text-lg">{t.googleRankings}</p>
            <p className="text-red-400 text-lg">{t.instagramHides}</p>
            <p className="text-red-400 text-lg">{t.youtubeAlgo}</p>
            <p className="text-red-400 text-lg">{t.linkedinBuries}</p>
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
        @keyframes float-chaos {
          0%, 100% { transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) rotate(0deg); }
          25% { transform: translate(calc(-50% + var(--x) + 20px), calc(-50% + var(--y) - 15px)) rotate(5deg); }
          50% { transform: translate(calc(-50% + var(--x) - 15px), calc(-50% + var(--y) + 20px)) rotate(-5deg); }
          75% { transform: translate(calc(-50% + var(--x) + 10px), calc(-50% + var(--y) + 10px)) rotate(3deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))); }
          10%, 30%, 50%, 70%, 90% { transform: translate(calc(-50% + var(--x) - 5px), calc(-50% + var(--y))); }
          20%, 40%, 60%, 80% { transform: translate(calc(-50% + var(--x) + 5px), calc(-50% + var(--y))); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.3); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0); }
          70% { transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-float-chaos {
          animation: float-chaos 3s ease-in-out infinite;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out infinite;
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
      `}</style>
    </div>
  );
}
