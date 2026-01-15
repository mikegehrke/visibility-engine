'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { flowSteps } from '@/lib/config/visibility';

export default function FlowPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-ink">{t.flow.title}</h1>
        <p className="text-slate mt-1">{t.flow.subtitle}</p>
      </div>

      {/* Flow Steps */}
      <div className="relative">
        {/* Vertical connector line */}
        <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-mist hidden md:block" />

        {/* Steps */}
        <div className="space-y-6">
          {flowSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Card */}
              <div className="bg-white border border-mist rounded-lg p-6 md:ml-20">
                <div className="flex items-start gap-4">
                  {/* Step Number Circle (Mobile/Desktop) */}
                  <div className="md:absolute md:-left-20 md:top-1/2 md:-translate-y-1/2">
                    <div className="w-16 h-16 bg-signal text-white rounded-full flex items-center justify-center text-xl font-semibold">
                      {step.order}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-ink">
                      {t.flow.steps[step.id as keyof typeof t.flow.steps]?.name || step.name}
                    </h3>
                    <p className="text-slate mt-2">
                      {t.flow.steps[step.id as keyof typeof t.flow.steps]?.description || step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow (Mobile only) */}
              {index < flowSteps.length - 1 && (
                <div className="flex justify-center my-4 md:hidden">
                  <svg
                    className="w-6 h-6 text-slate"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Info Notice */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-8">
        <p className="text-sm text-purple-900">
          This is a conceptual visualization of how the Visibility Engine processes your content.
          Each step will be fully implemented in future phases.
        </p>
      </div>
    </div>
  );
}
