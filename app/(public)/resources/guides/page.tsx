'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { H1, H2, H3, Body, Lead, Overline, Small } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { useLanguage } from '@/lib/context/LanguageContext';

type CategoryFilter = 'all' | 'getting-started' | 'advanced' | 'integration' | 'best-practices';

// Guide category badge component
function CategoryBadge({ category }: { category: string }) {
  const colors: Record<string, string> = {
    'getting-started': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    'advanced': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    'integration': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    'best-practices': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  };

  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${colors[category] || 'bg-slate-100 text-slate-600'}`}>
      {category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
    </span>
  );
}

// Guide card component with link
function GuideCard({ 
  title, 
  description, 
  category,
  readTime,
  icon,
  cta,
  slug
}: { 
  title: string; 
  description: string; 
  category: string;
  readTime: string;
  icon: string;
  cta: string;
  slug: string;
}) {
  return (
    <Link href={`/resources/guides/${slug}`} className="block h-full">
      <Card variant="outlined" padding="default" hover className="group h-full flex flex-col">
        <CardContent className="flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-signal-muted flex items-center justify-center flex-shrink-0 transition-transform duration-slow group-hover:scale-110 group-hover:bg-signal group-hover:text-white">
              <svg className="w-6 h-6 text-signal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
              </svg>
            </div>
            <CategoryBadge category={category} />
          </div>
          <H3 className="text-lg mb-2 group-hover:text-signal transition-colors">{title}</H3>
          <Body className="text-slate text-sm mb-4 flex-grow">{description}</Body>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
            <span className="text-xs text-slate">{readTime}</span>
            <span className="text-sm font-medium text-signal group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              {cta} 
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

// Icon paths for guides
const guideIcons = [
  'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5',
  'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z',
  'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244',
  'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
  'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605',
  'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
];

export default function GuidesPage() {
  const { t, language } = useLanguage();
  const rp = t.resourcePages?.guides;
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('loading');
    
    try {
      const response = await fetch('https://formspree.io/f/maqqevqn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: newsletterEmail,
          _subject: 'Newsletter Subscription - Guides',
          source: 'guides-newsletter'
        }),
      });
      
      if (response.ok) {
        setNewsletterStatus('success');
        setNewsletterEmail('');
      } else {
        setNewsletterStatus('error');
      }
    } catch {
      setNewsletterStatus('error');
    }
  };

  // Fallback content if translations not yet loaded
  if (!rp) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const guides = [
    { ...rp.items.quickStart, category: 'getting-started' as const, icon: guideIcons[0], slug: 'quick-start' },
    { ...rp.items.advancedAutomation, category: 'advanced' as const, icon: guideIcons[1], slug: 'advanced-automation' },
    { ...rp.items.apiIntegration, category: 'integration' as const, icon: guideIcons[2], slug: 'api-integration' },
    { ...rp.items.contentStrategy, category: 'best-practices' as const, icon: guideIcons[3], slug: 'content-strategy' },
    { ...rp.items.analyticsDeepDive, category: 'advanced' as const, icon: guideIcons[4], slug: 'analytics-deep-dive' },
    { ...rp.items.schedulingMastery, category: 'best-practices' as const, icon: guideIcons[5], slug: 'scheduling-mastery' },
  ];

  // Filter guides based on active category
  const filteredGuides = activeCategory === 'all' 
    ? guides 
    : guides.filter(guide => guide.category === activeCategory);

  // Category tabs configuration
  const categoryTabs: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: rp.categories.all },
    { key: 'getting-started', label: rp.categories.gettingStarted },
    { key: 'advanced', label: rp.categories.advanced },
    { key: 'integration', label: rp.categories.integration },
    { key: 'best-practices', label: rp.categories.bestPractices },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-signal-muted/30 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-3xl">
            <Overline className="text-signal mb-4">{rp.hero.overline}</Overline>
            <H1 className="mb-6">{rp.hero.title}</H1>
            <Lead className="text-slate max-w-2xl">{rp.hero.subtitle}</Lead>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3">
          {categoryTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === tab.key
                  ? 'bg-signal text-white shadow-md'
                  : 'bg-surface-1 border border-border text-slate hover:bg-surface-2 hover:border-signal/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Guides Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map((guide, index) => (
            <GuideCard
              key={index}
              title={guide.title}
              description={guide.description}
              category={guide.category}
              readTime={guide.readTime}
              icon={guide.icon}
              cta={rp.cta}
              slug={guide.slug}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <Card variant="elevated" padding="spacious" className="text-center bg-gradient-to-br from-signal-muted/20 to-transparent">
          <CardContent>
            <H2 className="mb-4">{rp.newsletter.title}</H2>
            <Body className="text-slate max-w-xl mx-auto mb-8">{rp.newsletter.description}</Body>
            {newsletterStatus === 'success' ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 max-w-md mx-auto">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <Body className="text-green-700 dark:text-green-300 font-medium">
                  {language === 'de' ? 'Erfolgreich abonniert!' : 'Successfully subscribed!'}
                </Body>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={rp.newsletter.placeholder}
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-surface-1 text-foreground placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-signal/50 disabled:opacity-50"
                  disabled={newsletterStatus === 'loading'}
                />
                <Button variant="primary" disabled={newsletterStatus === 'loading'}>
                  {newsletterStatus === 'loading' ? '...' : rp.newsletter.button}
                </Button>
              </form>
            )}
            {newsletterStatus === 'error' && (
              <Small className="text-red-500 mt-4 block">
                {language === 'de' ? 'Fehler. Bitte versuche es erneut.' : 'Error. Please try again.'}
              </Small>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
