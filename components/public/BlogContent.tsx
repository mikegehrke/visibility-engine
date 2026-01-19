'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { H2, H3, Body, Small } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import { blog as blogEn } from '@/lib/i18n/locales/en/blog';
import { blog as blogDe } from '@/lib/i18n/locales/de/blog';

type CategoryKey = 'all' | 'strategy' | 'aiTechnology' | 'systems' | 'analytics';

const categoryKeys: CategoryKey[] = ['all', 'strategy', 'aiTechnology', 'systems', 'analytics'];

type BlogTranslations = typeof blogEn | typeof blogDe;

interface BlogContentProps {
  t: BlogTranslations;
  lang: 'en' | 'de';
}

export default function BlogContent({ t, lang }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
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
          _subject: 'Newsletter Subscription - Blog',
          source: 'blog-newsletter'
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

  // Get posts directly from translations with category metadata
  const allPosts = [
    { ...t.posts.post1, key: 'post1', category: 'strategy' as CategoryKey, featured: true },
    { ...t.posts.post2, key: 'post2', category: 'aiTechnology' as CategoryKey, featured: true },
    { ...t.posts.post3, key: 'post3', category: 'strategy' as CategoryKey, featured: false },
    { ...t.posts.post4, key: 'post4', category: 'aiTechnology' as CategoryKey, featured: false },
    { ...t.posts.post5, key: 'post5', category: 'systems' as CategoryKey, featured: false },
    { ...t.posts.post6, key: 'post6', category: 'analytics' as CategoryKey, featured: false },
  ];

  const filteredPosts = activeCategory === 'all' 
    ? allPosts 
    : allPosts.filter(p => p.category === activeCategory);

  const featuredPosts = filteredPosts.filter(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryLabel = (key: CategoryKey) => {
    const labels: Record<CategoryKey, { en: string; de: string }> = {
      all: { en: 'All Posts', de: 'Alle Beiträge' },
      strategy: { en: 'Strategy', de: 'Strategie' },
      aiTechnology: { en: 'AI & Technology', de: 'KI & Technologie' },
      systems: { en: 'Systems', de: 'Systeme' },
      analytics: { en: 'Analytics', de: 'Analytics' },
    };
    return labels[key][lang];
  };

  return (
    <>
      {/* Category Filter */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex gap-1 overflow-x-auto py-4 -mx-6 px-6 scrollbar-hide">
            {categoryKeys.map((categoryKey) => (
              <button
                key={categoryKey}
                onClick={() => setActiveCategory(categoryKey)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-base whitespace-nowrap ${
                  activeCategory === categoryKey
                    ? 'bg-signal text-white'
                    : 'text-slate hover:text-ink hover:bg-surface-1'
                }`}
              >
                {getCategoryLabel(categoryKey)}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-8">
            <H2 className="text-xl">{t.sections.featured}</H2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card variant="elevated" padding="spacious" hover className="h-full">
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2.5 py-1 text-xs font-medium bg-signal-muted text-signal rounded-md">
                        {getCategoryLabel(post.category)}
                      </span>
                      <span className="text-xs text-slate">{post.readingTime} {t.readingTime}</span>
                    </div>
                    <H3 className="mb-3 group-hover:text-signal transition-colors duration-slow">
                      {post.title}
                    </H3>
                    <Body className="text-slate mb-4">{post.excerpt}</Body>
                    <div className="flex items-center gap-2 text-sm text-slate">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      {formatDate(post.date)}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className={`border-t border-border bg-surface-1 ${featuredPosts.length === 0 ? 'pt-8' : ''}`}>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-8">
            <H2 className="text-xl">{t.sections.allPosts}</H2>
          </div>
          <div className="space-y-6">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <Card variant="outlined" hover>
                  <CardContent className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-0.5 text-xs font-medium bg-canvas border border-border text-slate rounded">
                          {getCategoryLabel(post.category)}
                        </span>
                        <span className="text-xs text-slate hidden sm:inline">{post.readingTime} {t.readingTime}</span>
                      </div>
                      <H3 className="text-lg mb-1 group-hover:text-signal transition-colors duration-slow">
                        {post.title}
                      </H3>
                      <Body className="text-slate text-sm line-clamp-2">{post.excerpt}</Body>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate md:flex-shrink-0">
                      <span className="hidden md:inline">{formatDate(post.date)}</span>
                      <svg className="w-5 h-5 text-signal opacity-0 group-hover:opacity-100 transition-opacity duration-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <H2 className="mb-4">{t.newsletter.title}</H2>
          <Body className="text-slate mb-8 max-w-xl mx-auto">
            {t.newsletter.subtitle}
          </Body>
          {newsletterStatus === 'success' ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 max-w-md mx-auto">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <Body className="text-green-700 dark:text-green-300 font-medium">
                {lang === 'de' ? 'Erfolgreich abonniert!' : 'Successfully subscribed!'}
              </Body>
              <Small className="text-green-600 dark:text-green-400 mt-2 block">
                {lang === 'de' ? 'Du erhältst bald Updates.' : "You'll receive updates soon."}
              </Small>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={t.newsletter.placeholder}
                className="flex-1 px-4 py-3 bg-canvas border border-border rounded-lg text-ink placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-signal/20 focus:border-signal transition-all duration-base"
                disabled={newsletterStatus === 'loading'}
              />
              <button
                type="submit"
                disabled={newsletterStatus === 'loading'}
                className="px-6 py-3 bg-signal hover:bg-signal-hover text-white font-medium rounded-lg transition-colors duration-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {newsletterStatus === 'loading' 
                  ? (lang === 'de' ? 'Wird gesendet...' : 'Sending...') 
                  : t.newsletter.subscribe}
              </button>
            </form>
          )}
          {newsletterStatus === 'error' && (
            <Small className="text-red-500 mt-4 block">
              {lang === 'de' ? 'Fehler beim Abonnieren. Bitte versuche es erneut.' : 'Error subscribing. Please try again.'}
            </Small>
          )}
          {newsletterStatus !== 'success' && (
            <Small className="text-slate mt-4 block">
              {t.newsletter.joinCount}
            </Small>
          )}
        </div>
      </section>
    </>
  );
}
