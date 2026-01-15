'use client';

import Link from 'next/link';
import { H1, H2, Body, Lead, Small } from '@/components/shared/Typography';
import Card, { CardHeader, CardContent } from '@/components/shared/Card';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';

export default function BlogPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const posts = [
    {
      ...t.blog.posts.post1,
      slug: t.blog.posts.post1.slug,
    },
    {
      ...t.blog.posts.post2,
      slug: t.blog.posts.post2.slug,
    },
    {
      ...t.blog.posts.post3,
      slug: t.blog.posts.post3.slug,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <H1 className="mb-6">{t.blog.hero.title}</H1>
        <Lead className="text-slate">{t.blog.hero.subtitle}</Lead>
      </section>

      {/* Blog Posts */}
      <section className="max-w-4xl mx-auto px-6 py-16 pb-24">
        <div className="space-y-8">
          {posts.map((post) => (
            <Card key={post.slug} variant="outlined">
              <CardHeader>
                <Link href={`/blog/${post.slug}`}>
                  <H2 className="hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </H2>
                </Link>
                <div className="flex gap-4 mt-2">
                  <Small className="text-slate">
                    {t.blog.publishedOn} {post.date}
                  </Small>
                  <Small className="text-slate">
                    {post.readingTime} {t.blog.readingTime}
                  </Small>
                </div>
              </CardHeader>
              <CardContent>
                <Body className="text-slate mb-4">{post.excerpt}</Body>
                <Link href={`/blog/${post.slug}`}>
                  <span className="text-primary font-semibold hover:underline cursor-pointer">
                    {t.blog.readMore} →
                  </span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
