'use client';

import { useDashboard } from '@/lib/context/DashboardContext';
import { H2, Body, Small, Overline } from '@/components/shared/Typography';
import Card from '@/components/shared/Card';

interface RoadmapPlaceholderProps {
  titleKey: keyof ReturnType<typeof useDashboard>['t']['nav'];
  description?: string;
  features?: string[];
  status?: 'planned' | 'in-design' | 'in-development';
}

export default function RoadmapPlaceholder({ 
  titleKey, 
  description,
  features = [],
  status = 'planned'
}: RoadmapPlaceholderProps) {
  const { t } = useDashboard();
  const title = t.nav[titleKey] as string;

  const statusConfig = {
    'planned': { label: 'Planned', color: 'bg-slate/10 text-slate' },
    'in-design': { label: 'In Design', color: 'bg-signal-muted text-signal' },
    'in-development': { label: 'In Development', color: 'bg-warning-muted text-warning' },
  };

  const currentStatus = statusConfig[status];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Overline className="mb-1 block text-slate">Feature</Overline>
          <H2>{title}</H2>
        </div>
        <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${currentStatus.color}`}>
          {currentStatus.label}
        </span>
      </div>
      
      {/* Info Card */}
      <Card variant="flat" className="max-w-2xl">
        <div className="flex items-start gap-5">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-canvas border border-border flex items-center justify-center">
            <svg 
              className="w-6 h-6 text-signal" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" 
              />
            </svg>
          </div>
          
          {/* Content */}
          <div className="flex-1 space-y-4">
            <div>
              <Body className="text-ink font-medium mb-1">
                This feature is on our roadmap
              </Body>
              <Small className="text-slate">
                {description || "We're working on bringing this capability to you. Stay tuned for updates."}
              </Small>
            </div>
            
            {features.length > 0 && (
              <div className="pt-4 border-t border-border/50">
                <Small className="text-slate/70 font-medium mb-3 block">
                  Planned capabilities
                </Small>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-signal/40" />
                      <Small className="text-ink/80">{feature}</Small>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
