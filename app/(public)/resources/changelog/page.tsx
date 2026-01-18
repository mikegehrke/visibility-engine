'use client';

import { useState, FormEvent } from 'react';
import { H1, H2, H3, Body, Lead, Overline, Small } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { useLanguage } from '@/lib/context/LanguageContext';
import changelogData from '@/data/changelog.json';

// Tag badge component
function TagBadge({ tag }: { tag: 'feature' | 'fix' | 'improvement' }) {
  const styles = {
    feature: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    fix: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    improvement: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  };

  const labels = {
    feature: 'Feature',
    fix: 'Fix',
    improvement: 'Improvement',
  };

  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${styles[tag]}`}>
      {labels[tag]}
    </span>
  );
}

// Changelog entry component
function ChangelogEntry({ 
  date, 
  version, 
  title, 
  description,
  tags,
  isLatest = false
}: { 
  date: string; 
  version: string; 
  title: string; 
  description: string;
  tags: Array<'feature' | 'fix' | 'improvement'>;
  isLatest?: boolean;
}) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-[11px] top-3 bottom-0 w-0.5 bg-border last:hidden" />
      
      {/* Timeline dot */}
      <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 ${
        isLatest 
          ? 'bg-signal border-signal-muted' 
          : 'bg-surface-1 border-border'
      }`} />
      
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="flex-shrink-0 sm:w-32">
          <span className="text-sm text-slate">{date}</span>
          <div className={`text-xs font-mono mt-1 ${isLatest ? 'text-signal font-semibold' : 'text-slate'}`}>
            {version}
          </div>
        </div>
        
        <Card variant={isLatest ? 'elevated' : 'outlined'} padding="compact" className={`flex-1 ${isLatest ? 'border-signal/30' : ''}`}>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag, index) => (
                <TagBadge key={index} tag={tag} />
              ))}
            </div>
            <H3 className="text-base mb-2">{title}</H3>
            <Body className="text-slate text-sm">{description}</Body>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function ChangelogPage() {
  const { t, language } = useLanguage();
  const rp = t.resourcePages?.changelog;
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [activeFilter, setActiveFilter] = useState<'all' | 'feature' | 'fix' | 'improvement'>('all');

  const handleNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('loading');
    
    try {
      const response = await fetch('https://formspree.io/f/maqqevqn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: newsletterEmail,
          _subject: 'Newsletter Subscription - Changelog',
          source: 'changelog-newsletter'
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

  type TagType = 'feature' | 'fix' | 'improvement';
  
  // Load entries from JSON and transform for current language
  const allEntries = changelogData.entries.map((entry, index) => ({
    date: language === 'de' ? entry.date.de : entry.date.en,
    version: entry.version,
    title: language === 'de' ? entry.title.de : entry.title.en,
    description: language === 'de' ? entry.description.de : entry.description.en,
    tags: entry.tags as TagType[],
    isLatest: index === 0, // First entry is always the latest
  }));

  // Filter entries based on active filter
  const entries = activeFilter === 'all' 
    ? allEntries 
    : allEntries.filter(entry => entry.tags.includes(activeFilter));

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
          
          {/* Version badge */}
          <div className="mt-8 inline-flex items-center gap-3 bg-surface-1 border border-border rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-foreground">{rp.hero.currentVersion}</span>
            <span className="text-sm text-slate">•</span>
            <span className="text-sm text-slate">{rp.hero.lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'all' 
                ? 'bg-signal text-white' 
                : 'bg-surface-1 border border-border text-slate hover:bg-surface-2'
            }`}
          >
            {rp.filters.all}
            <span className="ml-2 text-xs opacity-75">({allEntries.length})</span>
          </button>
          <button 
            onClick={() => setActiveFilter('feature')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'feature' 
                ? 'bg-green-600 text-white' 
                : 'bg-surface-1 border border-border text-slate hover:bg-surface-2'
            }`}
          >
            {rp.filters.features}
            <span className="ml-2 text-xs opacity-75">({allEntries.filter(e => e.tags.includes('feature')).length})</span>
          </button>
          <button 
            onClick={() => setActiveFilter('fix')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'fix' 
                ? 'bg-red-600 text-white' 
                : 'bg-surface-1 border border-border text-slate hover:bg-surface-2'
            }`}
          >
            {rp.filters.fixes}
            <span className="ml-2 text-xs opacity-75">({allEntries.filter(e => e.tags.includes('fix')).length})</span>
          </button>
          <button 
            onClick={() => setActiveFilter('improvement')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'improvement' 
                ? 'bg-blue-600 text-white' 
                : 'bg-surface-1 border border-border text-slate hover:bg-surface-2'
            }`}
          >
            {rp.filters.improvements}
            <span className="ml-2 text-xs opacity-75">({allEntries.filter(e => e.tags.includes('improvement')).length})</span>
          </button>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <div className="relative">
          {entries.map((entry, index) => (
            <ChangelogEntry
              key={index}
              date={entry.date}
              version={entry.version}
              title={entry.title}
              description={entry.description}
              tags={entry.tags}
              isLatest={entry.isLatest ?? false}
            />
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <Card variant="elevated" padding="spacious" className="text-center bg-gradient-to-br from-signal-muted/20 to-transparent">
          <CardContent>
            <div className="w-16 h-16 rounded-full bg-signal mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
            </div>
            <H2 className="mb-4">{rp.subscribe.title}</H2>
            <Body className="text-slate max-w-xl mx-auto mb-8">{rp.subscribe.description}</Body>
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
                  placeholder={rp.subscribe.placeholder}
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-surface-1 text-foreground placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-signal/50 disabled:opacity-50"
                  disabled={newsletterStatus === 'loading'}
                />
                <Button variant="primary" disabled={newsletterStatus === 'loading'}>
                  {newsletterStatus === 'loading' ? '...' : rp.subscribe.button}
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
