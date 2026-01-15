'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { channels } from '@/lib/config/visibility';

export default function DistributionPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-ink">{t.distribution.title}</h1>
        <p className="text-slate mt-1">{t.distribution.subtitle}</p>
      </div>

      {/* Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {channels.map((channel) => {
          const coverage = channel.coverage || 0;
          
          return (
            <div
              key={channel.id}
              className="bg-white border border-mist rounded-lg p-6 space-y-4"
            >
              {/* Channel Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-ink">
                    {t.distribution.channels[channel.id as keyof typeof t.distribution.channels]?.name || channel.name}
                  </h3>
                  <p className="text-sm text-slate mt-1">
                    {t.distribution.channels[channel.id as keyof typeof t.distribution.channels]?.description || channel.description}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    channel.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {channel.status === 'active' ? t.distribution.status.active : t.distribution.status.inactive}
                </span>
              </div>

              {/* Coverage Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate">{t.distribution.coverage}</span>
                  <span className="font-medium text-ink">{coverage}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      coverage > 60 ? 'bg-green-500' : coverage > 30 ? 'bg-amber-500' : 'bg-gray-400'
                    }`}
                    style={{ width: `${coverage}%` }}
                  />
                </div>
              </div>

              {/* Configure Button */}
              <button
                disabled
                className="w-full px-4 py-2 bg-mist text-slate rounded-lg text-sm font-medium cursor-not-allowed"
                title={t.distribution.comingSoon}
              >
                {t.distribution.configure}
              </button>
            </div>
          );
        })}
      </div>

      {/* Info Notice */}
      <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
        <p className="text-sm text-sky-900">{t.distribution.comingSoon}</p>
      </div>
    </div>
  );
}
