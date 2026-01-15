'use client';

import { useDashboard } from '@/lib/context/DashboardContext';
import { H2, Body, Small } from '@/components/shared/Typography';
import Card from '@/components/shared/Card';

interface RoadmapPlaceholderProps {
  titleKey: keyof ReturnType<typeof useDashboard>['t']['nav'];
  description?: string;
  features?: string[];
}

export default function RoadmapPlaceholder({ 
  titleKey, 
  description,
  features = []
}: RoadmapPlaceholderProps) {
  const { t } = useDashboard();
  const title = t.nav[titleKey] as string;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <H2>{title}</H2>
        <span className="px-2.5 py-1 text-xs font-medium text-slate bg-mist rounded-full">
          Roadmap
        </span>
      </div>
      
      <Card className="max-w-2xl">
        <div className="flex items-start gap-4">
          {/* Icon - subtle, premium */}
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-mist flex items-center justify-center">
            <svg 
              className="w-5 h-5 text-slate" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
          
          <div className="flex-1 space-y-3">
            <div>
              <Body className="text-ink font-medium">
                {t.common.comingSoon}
              </Body>
              <Small className="text-slate">
                {description || t.common.placeholder}
              </Small>
            </div>
            
            {features.length > 0 && (
              <div className="pt-2 border-t border-border/50">
                <Small className="text-slate font-medium mb-2 block">
                  Planned capabilities:
                </Small>
                <ul className="space-y-1.5">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-slate/50" />
                      <Small className="text-slate">{feature}</Small>
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
