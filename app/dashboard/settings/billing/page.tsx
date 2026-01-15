'use client';

import { useState } from 'react';
import { useDashboard } from '@/lib/context/DashboardContext';
import { H2, H3, Body, Small } from '@/components/shared/Typography';
import Card, { CardHeader, CardContent, CardFooter } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { getAllPlans, getPlanById, formatLimit, isUnlimited, type PlanId } from '@/lib/config/plans';

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
        <H2>{t.billing.title}</H2>
        <Body className="text-slate mt-2">{t.billing.currentPlan}</Body>
      </div>

      {/* Current Plan Overview */}
      <Card variant="elevated">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <H3>{currentPlan.name}</H3>
                <span className="px-3 py-1 bg-signal text-white text-xs font-semibold rounded-full">
                  {t.common.currentPlan}
                </span>
              </div>
              <Small className="text-slate">{currentPlan.description}</Small>
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
                  <div className="w-full bg-smoke rounded-full h-2">
                    <div
                      className="bg-signal h-2 rounded-full transition-all"
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
                    <div className="w-full bg-smoke rounded-full h-2">
                      <div
                        className="bg-signal h-2 rounded-full transition-all"
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
                    <div className="w-full bg-smoke rounded-full h-2">
                      <div
                        className="bg-signal h-2 rounded-full transition-all"
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
                  <div className="w-full bg-smoke rounded-full h-2">
                    <div
                      className="bg-signal h-2 rounded-full transition-all"
                      style={{ width: `${getUsagePercentage(mockUsage.storage, currentPlan.limits.storage)}%` }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Plan Comparison */}
      <div>
        <H2 className="mb-6">{t.billing.planComparison}</H2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {allPlans.map((plan) => {
            const isCurrent = plan.id === currentPlanId;
            
            return (
              <Card 
                key={plan.id} 
                variant={plan.isPopular ? 'elevated' : 'outlined'}
                className={isCurrent ? 'ring-2 ring-signal' : ''}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <H3>{plan.name}</H3>
                    {plan.badge && (
                      <span className="px-2 py-1 bg-signal text-white text-xs font-semibold rounded">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <Small className="text-slate block mb-3">
                    {plan.description}
                  </Small>
                  <div className="text-xl font-bold text-ink mb-1">
                    €{plan.pricing.monthly}/mo
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature.key} className="flex items-start text-sm">
                        <span className="text-signal mr-2">✓</span>
                        <span className="text-ink">
                          {feature.label}
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
