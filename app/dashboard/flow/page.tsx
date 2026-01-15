'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { flowSteps } from '@/lib/config/visibility';
import { flowBottlenecks } from '@/lib/config/insights';

export default function FlowPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Color scheme for each step
  const stepColors = [
    'bg-purple-100 border-purple-300', // Content
    'bg-blue-100 border-blue-300',     // Distribution
    'bg-green-100 border-green-300',   // Signals
    'bg-amber-100 border-amber-300',   // Insights
  ];

  const circleColors = [
    'bg-purple-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-amber-500',
  ];

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
              <div className={`border rounded-lg p-6 md:ml-20 ${stepColors[index]}`}>
                <div className="flex items-start gap-4">
                  {/* Step Number Circle (Mobile/Desktop) */}
                  <div className="md:absolute md:-left-20 md:top-1/2 md:-translate-y-1/2">
                    <div className={`w-16 h-16 ${circleColors[index]} text-white rounded-full flex items-center justify-center text-xl font-semibold shadow-md`}>
                      {step.order}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-medium text-ink">
                          {t.flow.steps[step.id as keyof typeof t.flow.steps]?.name || step.name}
                        </h3>
                        <p className="text-slate mt-2">
                          {t.flow.steps[step.id as keyof typeof t.flow.steps]?.description || step.description}
                        </p>
                      </div>
                      
                      {/* Item Count Badge */}
                      {step.itemCount !== undefined && (
                        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-300">
                          <span className="text-xs text-slate">{t.flow.itemsLabel}:</span>
                          <span className="text-sm font-semibold text-ink">{step.itemCount}</span>
                        </div>
                      )}
                    </div>
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

      {/* Bottleneck Analysis */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <div className="text-amber-600 mt-0.5">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-amber-900 mb-3">{t.flow.bottlenecks.title}</h3>
            <div className="space-y-2">
              {flowBottlenecks.map((bottleneck) => (
                <p key={`${bottleneck.fromStep}-${bottleneck.toStep}`} className="text-sm text-amber-800">
                  • {t.flow.bottlenecks[bottleneck.messageKey as keyof typeof t.flow.bottlenecks]}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Info Notice */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <p className="text-sm text-purple-900">
          This flow shows how content moves through the Visibility Engine. Item counts are examples and will reflect real data once integrated.
        </p>
      </div>
    </div>
  );
}
