'use client';

import { useState } from 'react';
import { useDashboard } from '@/lib/context/DashboardContext';
import { H2, H3, Body, Small, Overline } from '@/components/shared/Typography';
import Card, { CardHeader, CardContent, CardFooter } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { getAllPlans, getPlanById, formatLimit, isUnlimited, type PlanId } from '@/lib/config/plans';
import { currentAccount } from '@/lib/models/account';
import AutomationCounter from '@/components/dashboard/AutomationCounter';

// Force dynamic rendering to prevent build-time prerendering
export const dynamic = 'force-dynamic';

export default function BillingPage() {
  const { t } = useDashboard();
  
  // Mock current plan state (default: free)
  const [currentPlanId] = useState<PlanId>('free');
  const currentPlan = getPlanById(currentPlanId);
  const allPlans = getAllPlans();
  
  // Mock usage data
  const mockUsage = {
    workspaces: 1,
    scheduledPosts: 3,
    aiAgents: 0,
    storage: 0.2, // GB
    teamMembers: 1,
  };
  
  // Calculate usage percentages
  const getUsagePercentage = (used: number, limit: number): number => {
    if (isUnlimited(limit)) return 0;
    return Math.min((used / limit) * 100, 100);
  };

  return (
    <div className="space-y-8">
      <div>
        <Overline className="mb-2">Abrechnung</Overline>
        <H2>{t.billing.title}</H2>
        <Body className="text-slate mt-2">{t.billing.currentPlan}</Body>
      </div>

      {/* Current Plan Overview */}
      <Card variant="glass" className="shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <H3>{t.billing.plans[currentPlanId as keyof typeof t.billing.plans].name}</H3>
                <span className="px-3 py-1 bg-signal text-white text-xs font-semibold rounded-full">
                  {t.common.currentPlan}
                </span>
              </div>
              <Small className="text-slate">{t.billing.plans[currentPlanId as keyof typeof t.billing.plans].description}</Small>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-ink mb-1">
                €{currentPlan.pricing.monthly}/mo
              </div>
            </div>
          </div>

          {/* Usage Section */}
          <div className="border-t border-border pt-6">
            <H3 className="mb-4">{t.billing.usage.label}</H3>
            <div className="space-y-4">
              {/* Workspaces */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-ink">{t.billing.usage.workspaces}</span>
                  <span className="text-slate">
                    {mockUsage.workspaces} {t.billing.usage.of} {formatLimit(currentPlan.limits.workspaces)}
                  </span>
                </div>
                {!isUnlimited(currentPlan.limits.workspaces) && (
                  <div className="w-full bg-surface-2 rounded-full h-2">
                    <div
                      className="bg-signal h-2 rounded-full transition-all duration-base"
                      style={{ width: `${getUsagePercentage(mockUsage.workspaces, currentPlan.limits.workspaces)}%` }}
                    />
                  </div>
                )}
              </div>

              {/* Scheduled Posts */}
              {currentPlan.limits.scheduledPosts > 0 && (
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-ink">{t.billing.usage.scheduledPosts}</span>
                    <span className="text-slate">
                      {mockUsage.scheduledPosts} {t.billing.usage.of} {formatLimit(currentPlan.limits.scheduledPosts)}
                    </span>
                  </div>
                  {!isUnlimited(currentPlan.limits.scheduledPosts) && (
                    <div className="w-full bg-surface-2 rounded-full h-2">
                      <div
                        className="bg-signal h-2 rounded-full transition-all duration-base"
                        style={{ width: `${getUsagePercentage(mockUsage.scheduledPosts, currentPlan.limits.scheduledPosts)}%` }}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* AI Agents */}
              {currentPlan.limits.aiAgents > 0 && (
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-ink">{t.billing.usage.aiAgents}</span>
                    <span className="text-slate">
                      {mockUsage.aiAgents} {t.billing.usage.of} {formatLimit(currentPlan.limits.aiAgents)}
                    </span>
                  </div>
                  {!isUnlimited(currentPlan.limits.aiAgents) && (
                    <div className="w-full bg-surface-2 rounded-full h-2">
                      <div
                        className="bg-signal h-2 rounded-full transition-all duration-base"
                        style={{ width: `${getUsagePercentage(mockUsage.aiAgents, currentPlan.limits.aiAgents)}%` }}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Storage */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-ink">{t.billing.usage.storage}</span>
                  <span className="text-slate">
                    {mockUsage.storage} GB {t.billing.usage.of} {formatLimit(currentPlan.limits.storage)} GB
                  </span>
                </div>
                {!isUnlimited(currentPlan.limits.storage) && (
                  <div className="w-full bg-surface-2 rounded-full h-2">
                    <div
                      className="bg-signal h-2 rounded-full transition-all duration-base"
                      style={{ width: `${getUsagePercentage(mockUsage.storage, currentPlan.limits.storage)}%` }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Phase 16A: Automation Add-on */}
      <Card variant="glass" className="shadow-md">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-signal/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <div>
              <H3>Automation Add-on</H3>
              <Small className="text-slate">Unlock Auto Mode for your Company account</Small>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="space-y-2 mb-4">
                <p className="text-sm text-ink">
                  <span className="font-semibold">99€/month</span> - Activate intelligent automation
                </p>
                <ul className="text-sm text-slate space-y-1.5 ml-4">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-signal flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    10 automated actions included
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-signal flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    0.50€ per additional action
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-signal flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Full Auto mode access
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-signal flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Confidence scoring & safety guards
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-signal flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Action caps & automation windows
                  </li>
                </ul>
              </div>
              <div className="bg-signal/5 border border-signal/20 rounded-lg p-3">
                <p className="text-xs text-ink">
                  <span className="font-medium text-signal">Owner account detected:</span> Auto Mode is free and unlimited for you. No add-on required.
                </p>
              </div>
            </div>
          </div>

          {/* Phase 16B: Live Counter */}
          <div className="border-t border-border pt-4">
            <AutomationCounter />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            variant="secondary" 
            size="sm" 
            disabled
            className="w-full"
          >
            Owner Account - No Purchase Needed
          </Button>
        </CardFooter>
      </Card>

      {/* Plan Comparison */}
      <div>
        <Overline className="mb-2">Alle Optionen</Overline>
        <H2 className="mb-6">{t.billing.planComparison}</H2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {allPlans.map((plan) => {
            const isCurrent = plan.id === currentPlanId;
            const planKey = plan.id === 'pro-plus' ? 'proPlus' : plan.id === 'ultimate-plus' ? 'ultimatePlus' : plan.id;
            const planTranslations = t.billing.plans[planKey as keyof typeof t.billing.plans];
            
            return (
              <Card 
                key={plan.id} 
                variant="glass"
                className={`${isCurrent ? 'ring-2 ring-signal shadow-glow' : ''} ${plan.isPopular ? 'shadow-md' : ''}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <H3 className="text-base">{planTranslations.name}</H3>
                    {plan.badgeKey && (
                      <span className="px-2 py-0.5 bg-signal text-white text-[10px] font-semibold rounded">
                        {t.billing.badges[plan.badgeKey.split('.').pop() as keyof typeof t.billing.badges]}
                      </span>
                    )}
                  </div>
                  <Small className="text-slate block mb-3">
                    {planTranslations.description}
                  </Small>
                  <div className="text-xl font-bold text-ink mb-1">
                    €{plan.pricing.monthly}<span className="text-sm font-normal text-slate">/mo</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature.key} className="flex items-start text-sm gap-2">
                        <svg className="w-4 h-4 text-signal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-ink">
                          {planTranslations.features[feature.key as keyof typeof planTranslations.features]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={isCurrent ? 'secondary' : 'primary'}
                    className="w-full"
                    disabled={isCurrent}
                  >
                    {isCurrent ? t.common.currentPlan : (plan.id === 'free' ? t.common.downgrade : t.common.upgrade)}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
