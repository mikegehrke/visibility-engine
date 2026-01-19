'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';

const translations = {
  en: {
    you: 'YOU',
    competition: 'COMPETITION',
    competitionGrowing: 'Your competition is growing... 📈',
    gapClosing: 'Gap is closing...',
    findYourGap: 'Find your Visibility Gap',
    closeIt: 'And close it.',
  },
  de: {
    you: 'DU',
    competition: 'KONKURRENZ',
    competitionGrowing: 'Deine Konkurrenz wächst... 📈',
    gapClosing: 'Gap wird geschlossen...',
    findYourGap: 'Finde deinen Visibility Gap',
    closeIt: 'Und schließe ihn.',
  },
};

export default function PromoVideo3() {
  const { language } = useLanguage();
  const t = translations[language];
  const [step, setStep] = useState(0);
  const [yourHeight, setYourHeight] = useState(60);
  const [competitorHeight, setCompetitorHeight] = useState(60);

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

  useEffect(() => {
    if (step === 1) {
      // Competitor grows, you stay same
      const interval = setInterval(() => {
        setCompetitorHeight(h => Math.min(h + 2, 180));
      }, 50);
      return () => clearInterval(interval);
    }
    if (step === 4) {
      // You grow past competitor
      const interval = setInterval(() => {
        setYourHeight(h => Math.min(h + 3, 220));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Content */}
      <div className="relative z-10 text-center px-8">
        
        {/* Steps 1-2: Bar comparison */}
        {step < 3 && (
          <div className="animate-fade-in">
            <div className="flex items-end justify-center gap-12 mb-8 h-64">
              {/* Your bar */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-24 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all duration-300 shadow-lg"
                  style={{ height: `${yourHeight}px` }}
                />
                <div className="mt-4 text-gray-700 font-bold">{t.you}</div>
              </div>
              
              {/* Competitor bar */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-24 bg-gradient-to-t from-red-600 to-red-400 rounded-t-lg transition-all duration-300 shadow-lg"
                  style={{ height: `${competitorHeight}px` }}
                />
                <div className="mt-4 text-gray-700 font-bold">{t.competition}</div>
              </div>
            </div>
            
            {step === 1 && (
              <p className="text-xl text-gray-600 animate-fade-in">
                {t.competitionGrowing}
              </p>
            )}
          </div>
        )}

        {/* Step 3: Magnifying glass showing gap */}
        {step === 2 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative animate-scale-in">
              <div className="w-48 h-48 rounded-full border-8 border-blue-500 bg-white/80 backdrop-blur flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-600">VISIBILITY</div>
                  <div className="text-3xl font-black text-blue-600">GAP</div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-24 h-8 bg-blue-500 rounded-full rotate-45 shadow-lg" />
            </div>
          </div>
        )}

        {/* Step 4: Gap being filled */}
        {step === 3 && (
          <div className="animate-fade-in">
            <div className="w-80 h-16 mx-auto bg-gray-300 rounded-full overflow-hidden mb-8 shadow-inner">
              <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-fill-bar shadow-lg" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {t.gapClosing}
            </h2>
          </div>
        )}

        {/* Step 5: You surpass competition */}
        {step >= 4 && (
          <div className="animate-fade-in">
            <div className="flex items-end justify-center gap-12 mb-8 h-64">
              {/* Your bar - now bigger */}
              <div className="flex flex-col items-center">
                <div className="absolute -top-8 text-4xl animate-bounce">🏆</div>
                <div 
                  className="w-24 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg transition-all duration-300 shadow-lg relative"
                  style={{ height: `${yourHeight}px` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-3xl">🏆</div>
                </div>
                <div className="mt-4 text-green-600 font-bold">{t.you}</div>
              </div>
              
              {/* Competitor bar - now smaller relatively */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-24 bg-gradient-to-t from-gray-500 to-gray-400 rounded-t-lg transition-all duration-300 shadow-lg opacity-60"
                  style={{ height: '140px' }}
                />
                <div className="mt-4 text-gray-500 font-bold">{t.competition}</div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t.findYourGap}
            </h1>
            <p className="text-xl text-blue-600 font-medium">
              {t.closeIt}
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
          <span className="text-gray-800 font-semibold">Visibility Engine</span>
        </div>
        <span className="text-gray-400">|</span>
        <span className="text-blue-500 font-medium">visibility-engine.com</span>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fill-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-fill-bar {
          animation: fill-bar 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
