'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';

const translations = {
  en: {
    reachDropping: 'Your Reach is Dropping?',
    postingMore: "You're posting more, but reaching less?",
    weChangeThis: "We'll change that.",
  },
  de: {
    reachDropping: 'Deine Reichweite sinkt?',
    postingMore: 'Du postest mehr, aber erreichst weniger?',
    weChangeThis: 'Wir ändern das.',
  },
};

export default function PromoVideo1() {
  const { language } = useLanguage();
  const t = translations[language];
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timings = [0, 3000, 7000, 10000, 15000, 20000];
    const timers: NodeJS.Timeout[] = [];
    
    timings.forEach((time, index) => {
      if (index > 0) {
        timers.push(setTimeout(() => setStep(index), time));
      }
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-2xl">
        {/* Step 1: Small profile icon */}
        <div className={`transition-all duration-1000 ${step >= 1 ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
          {step === 0 && (
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-700 flex items-center justify-center animate-pulse">
              <svg className="w-10 h-10 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          )}
        </div>

        {/* Step 2: Graph falling */}
        {step >= 1 && step < 3 && (
          <div className="animate-fade-in">
            <svg className="w-64 h-48 mx-auto" viewBox="0 0 200 120">
              <defs>
                <linearGradient id="redGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
                </linearGradient>
              </defs>
              {/* Grid lines */}
              <line x1="20" y1="100" x2="180" y2="100" stroke="#333" strokeWidth="1"/>
              <line x1="20" y1="20" x2="20" y2="100" stroke="#333" strokeWidth="1"/>
              
              {/* Falling line */}
              <path 
                d="M 30 30 Q 60 25, 80 40 T 120 60 T 160 95" 
                fill="none" 
                stroke="#ef4444" 
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-draw-line"
              />
              <path 
                d="M 30 30 Q 60 25, 80 40 T 120 60 T 160 95 L 160 100 L 30 100 Z" 
                fill="url(#redGrad)"
                className="animate-fade-in-delayed"
              />
              
              {/* Arrow down */}
              <g className="animate-bounce-down">
                <polygon points="165,85 175,85 170,100" fill="#ef4444"/>
              </g>
            </svg>
            <p className="text-red-400 text-2xl font-bold mt-4 animate-pulse">📉 -47%</p>
          </div>
        )}

        {/* Step 3: Text question */}
        {step >= 3 && step < 4 && (
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.reachDropping}
            </h1>
            <p className="text-xl text-gray-400">
              {t.postingMore}
            </p>
          </div>
        )}

        {/* Step 4: Logo appears */}
        {step >= 4 && step < 5 && (
          <div className="animate-scale-in">
            <div className="w-24 h-24 mx-auto rounded-2xl bg-blue-500 flex items-center justify-center shadow-2xl shadow-blue-500/50 animate-glow">
              <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mt-6">Visibility Engine</h2>
          </div>
        )}

        {/* Step 5: Graph rising + Solution */}
        {step >= 5 && (
          <div className="animate-fade-in">
            <svg className="w-64 h-48 mx-auto" viewBox="0 0 200 120">
              <defs>
                <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
                </linearGradient>
              </defs>
              {/* Grid lines */}
              <line x1="20" y1="100" x2="180" y2="100" stroke="#333" strokeWidth="1"/>
              <line x1="20" y1="20" x2="20" y2="100" stroke="#333" strokeWidth="1"/>
              
              {/* Rising line */}
              <path 
                d="M 30 90 Q 60 85, 80 70 T 120 45 T 160 20" 
                fill="none" 
                stroke="#22c55e" 
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-draw-line"
              />
              <path 
                d="M 30 90 Q 60 85, 80 70 T 120 45 T 160 20 L 160 100 L 30 100 Z" 
                fill="url(#greenGrad)"
                className="animate-fade-in-delayed"
              />
              
              {/* Arrow up */}
              <g className="animate-bounce-up">
                <polygon points="165,30 175,30 170,15" fill="#22c55e"/>
              </g>
            </svg>
            <p className="text-green-400 text-2xl font-bold mt-4">📈 +340%</p>
            <h2 className="text-3xl font-bold text-white mt-6">{t.weChangeThis}</h2>
          </div>
        )}
      </div>

      {/* Footer - Always visible */}
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
        @keyframes draw-line {
          from { stroke-dashoffset: 300; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delayed {
          0%, 50% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        @keyframes bounce-up {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 60px rgba(59, 130, 246, 0.8); }
        }
        .animate-draw-line {
          stroke-dasharray: 300;
          animation: draw-line 1.5s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1.5s ease-out forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-bounce-down {
          animation: bounce-down 1s ease-in-out infinite;
        }
        .animate-bounce-up {
          animation: bounce-up 1s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
