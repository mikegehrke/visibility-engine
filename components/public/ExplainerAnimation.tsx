'use client';

import { useState, useEffect, useCallback } from 'react';

interface Step {
  title: string;
  description: string;
  duration: number; // ms
}

interface ExplainerAnimationProps {
  steps: Step[];
  autoPlay?: boolean;
  lang: 'en' | 'de';
}

export default function ExplainerAnimation({ steps, autoPlay = true, lang }: ExplainerAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Start false to avoid hydration mismatch
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  const labels = {
    en: { play: 'Play', pause: 'Pause', replay: 'Replay' },
    de: { play: 'Abspielen', pause: 'Pause', replay: 'Nochmal' },
  };

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
    setProgress(0);
  }, [steps.length]);

  // Handle mounting and autoPlay
  useEffect(() => {
    setMounted(true);
    // Only start autoPlay after mount to avoid hydration issues
    if (autoPlay) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (!mediaQuery.matches) {
        setIsPlaying(true);
      }
    }
  }, [autoPlay]);

  // Auto-advance timer
  useEffect(() => {
    if (!isPlaying || !mounted) return;

    const step = steps[currentStep];
    const interval = 50; // Update every 50ms for smooth progress
    const increment = (interval / step.duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextStep();
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, currentStep, steps, nextStep, mounted]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const goToStep = (index: number) => {
    setCurrentStep(index);
    setProgress(0);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Animation Container */}
      <div className="relative bg-gradient-to-br from-ink via-ink to-slate-900 rounded-2xl overflow-hidden shadow-2xl aspect-video">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 sm:p-8 lg:p-12">
          {/* Step Indicator */}
          <div className="absolute top-3 left-3 sm:top-6 sm:left-6 flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono text-white/60">
              {String(currentStep + 1).padStart(2, '0')}/{String(steps.length).padStart(2, '0')}
            </span>
          </div>

          {/* Visual Animation Area */}
          <div className="flex-1 w-full flex items-center justify-center">
            <AnimatedVisual step={currentStep} totalSteps={steps.length} />
          </div>

          {/* Text Content */}
          <div className="w-full text-center mt-4 sm:mt-8">
            <h3 
              key={`title-${currentStep}`}
              className="text-base sm:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3 animate-fade-in px-2"
            >
              {steps[currentStep].title}
            </h3>
            <p 
              key={`desc-${currentStep}`}
              className="text-xs sm:text-sm lg:text-base text-white/70 max-w-lg mx-auto animate-fade-in-delay px-2 line-clamp-2 sm:line-clamp-none"
            >
              {steps[currentStep].description}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <div 
            className="h-full bg-signal transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-4 sm:mt-6 px-1 sm:px-2">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-surface-1 border border-border hover:bg-surface-2 transition-colors"
          aria-label={mounted && isPlaying ? labels[lang].pause : labels[lang].play}
        >
          {mounted && isPlaying ? (
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ink" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ink" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
          <span className="hidden sm:inline text-sm font-medium text-ink">
            {mounted && isPlaying ? labels[lang].pause : labels[lang].play}
          </span>
        </button>

        {/* Step Dots */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                index === currentStep 
                  ? 'bg-signal scale-125' 
                  : 'bg-slate/30 hover:bg-slate/50'
              }`}
              aria-label={`Step ${index + 1}`}
            />
          ))}
        </div>

        {/* Replay Button */}
        <button
          onClick={() => { goToStep(0); setIsPlaying(true); }}
          className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-surface-1 border border-border hover:bg-surface-2 transition-colors"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="hidden sm:inline text-sm font-medium text-ink">{labels[lang].replay}</span>
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fadeIn 0.4s ease-out 0.1s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

// Animated Visual Component - Pure SVG/CSS animations
function AnimatedVisual({ step, totalSteps }: { step: number; totalSteps: number }) {
  // Different visual states for each step
  const visuals = [
    // Step 0: Market Signals entstehen
    <SignalsVisual key="signals" />,
    // Step 1: Plattformen reagieren
    <PlatformsVisual key="platforms" />,
    // Step 2: Vergleich mit eigener Sichtbarkeit
    <ComparisonVisual key="comparison" />,
    // Step 3: Lücken erkennen
    <GapsVisual key="gaps" />,
    // Step 4: Handlungsempfehlungen
    <ActionsVisual key="actions" />,
  ];

  return visuals[step] || visuals[0];
}

// Signal pulses animation
function SignalsVisual() {
  return (
    <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
      {/* Central hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-signal flex items-center justify-center z-10">
        <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3" />
        </svg>
      </div>
      
      {/* Animated pulse rings */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-signal/40"
          style={{
            width: `${80 + i * 50}px`,
            height: `${80 + i * 50}px`,
            animation: `pulse-ring 2s ease-out ${i * 0.4}s infinite`,
          }}
        />
      ))}

      {/* Incoming signals */}
      {['Google', 'YouTube', 'TikTok', 'AI'].map((label, i) => {
        const angle = (i * 90) * (Math.PI / 180);
        const x = Math.cos(angle) * 100;
        const y = Math.sin(angle) * 100;
        return (
          <div
            key={label}
            className="absolute top-1/2 left-1/2 flex items-center justify-center"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              animation: `float-in 0.5s ease-out ${i * 0.15}s forwards`,
              opacity: 0,
            }}
          >
            <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium text-white">
              {label}
            </div>
          </div>
        );
      })}

      <style jsx>{`
        @keyframes pulse-ring {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        @keyframes float-in {
          from { opacity: 0; transform: translate(calc(-50% + var(--x, 0px) * 1.5), calc(-50% + var(--y, 0px) * 1.5)); }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// Platforms visual
function PlatformsVisual() {
  const platforms = [
    { name: 'Search', color: 'bg-blue-500', icon: '🔍' },
    { name: 'Social', color: 'bg-pink-500', icon: '📱' },
    { name: 'Video', color: 'bg-red-500', icon: '🎬' },
    { name: 'AI', color: 'bg-purple-500', icon: '🤖' },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
      {platforms.map((p, i) => (
        <div
          key={p.name}
          className="flex flex-col items-center gap-1 sm:gap-2"
          style={{
            animation: `slide-up 0.5s ease-out ${i * 0.1}s forwards`,
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          <div className={`w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl ${p.color} flex items-center justify-center text-lg sm:text-xl lg:text-2xl shadow-lg`}>
            {p.icon}
          </div>
          <span className="text-[10px] sm:text-xs font-medium text-white/80">{p.name}</span>
          
          {/* Activity indicator */}
          <div className="flex gap-0.5">
            {[1, 2, 3].map((bar) => (
              <div
                key={bar}
                className="w-1 bg-white/60 rounded-full"
                style={{
                  height: `${8 + Math.random() * 16}px`,
                  animation: `bar-dance 0.8s ease-in-out ${bar * 0.1}s infinite alternate`,
                }}
              />
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes slide-up {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bar-dance {
          to { height: ${12 + Math.random() * 12}px; }
        }
      `}</style>
    </div>
  );
}

// Comparison visual
function ComparisonVisual() {
  return (
    <div className="flex items-end gap-4 sm:gap-6 lg:gap-8">
      {/* Market bar */}
      <div className="flex flex-col items-center gap-1 sm:gap-2">
        <div 
          className="w-12 sm:w-16 lg:w-20 bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg"
          style={{
            height: 'clamp(80px, 20vw, 160px)',
            animation: 'grow-up 1s ease-out forwards',
            transformOrigin: 'bottom',
          }}
        />
        <span className="text-[10px] sm:text-xs font-medium text-white/80">Market</span>
      </div>

      {/* VS indicator */}
      <div className="text-white/40 font-bold text-sm sm:text-lg mb-4 sm:mb-8">vs</div>

      {/* Your visibility bar */}
      <div className="flex flex-col items-center gap-1 sm:gap-2">
        <div 
          className="w-12 sm:w-16 lg:w-20 bg-gradient-to-t from-signal to-signal/80 rounded-t-lg"
          style={{
            height: 'clamp(40px, 10vw, 80px)',
            animation: 'grow-up 1s ease-out 0.3s forwards',
            transformOrigin: 'bottom',
            transform: 'scaleY(0)',
          }}
        />
        <span className="text-[10px] sm:text-xs font-medium text-white/80">You</span>
      </div>

      {/* Gap indicator */}
      <div 
        className="absolute right-1/4 top-1/3 flex items-center gap-2 text-amber-400"
        style={{
          animation: 'fade-in 0.5s ease-out 1.2s forwards',
          opacity: 0,
        }}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span className="text-sm font-medium">Gap</span>
      </div>

      <style jsx>{`
        @keyframes grow-up {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        @keyframes fade-in {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// Gaps visual
function GapsVisual() {
  const gaps = [
    { label: 'Missing Keywords', severity: 'high' },
    { label: 'Low Engagement', severity: 'medium' },
    { label: 'Timing Issues', severity: 'low' },
  ];

  return (
    <div className="space-y-4 w-full max-w-sm">
      {gaps.map((gap, i) => (
        <div
          key={gap.label}
          className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
          style={{
            animation: `slide-in 0.4s ease-out ${i * 0.15}s forwards`,
            opacity: 0,
            transform: 'translateX(-20px)',
          }}
        >
          <div className={`w-3 h-3 rounded-full ${
            gap.severity === 'high' ? 'bg-red-500' :
            gap.severity === 'medium' ? 'bg-amber-500' : 'bg-green-500'
          }`} />
          <span className="text-sm text-white flex-1">{gap.label}</span>
          <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      ))}

      <style jsx>{`
        @keyframes slide-in {
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

// Actions visual
function ActionsVisual() {
  return (
    <div className="relative">
      {/* Central action button */}
      <div 
        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-signal flex items-center justify-center shadow-lg shadow-signal/30"
        style={{
          animation: 'pop-in 0.5s ease-out forwards',
          transform: 'scale(0)',
        }}
      >
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      {/* Radiating success indicators */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i * 90 + 45) * (Math.PI / 180);
        const x = Math.cos(angle) * 80;
        const y = Math.sin(angle) * 80;
        return (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              animation: `pop-out 0.4s ease-out ${0.3 + i * 0.1}s forwards`,
              opacity: 0,
              scale: 0,
            }}
          >
            <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      })}

      <style jsx>{`
        @keyframes pop-in {
          to { transform: scale(1); }
        }
        @keyframes pop-out {
          to { opacity: 1; scale: 1; }
        }
      `}</style>
    </div>
  );
}
