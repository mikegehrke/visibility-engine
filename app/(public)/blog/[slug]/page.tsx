import Link from 'next/link';
import { H1, H2, Body, Small } from '@/components/shared/Typography';
import { publicTranslations } from '@/lib/i18n/public-translations';

// ISR - Revalidate every 60 seconds
export const revalidate = 60;

const t = publicTranslations.en;

// Generate static params for all blog posts
export async function generateStaticParams() {
  return [
    { slug: t.blog.posts.post1.slug },
    { slug: t.blog.posts.post2.slug },
    { slug: t.blog.posts.post3.slug },
  ];
}

// Helper to get post data by slug
function getPostBySlug(slug: string) {
  const posts = [
    t.blog.posts.post1,
    t.blog.posts.post2,
    t.blog.posts.post3,
  ];
  return posts.find((p) => p.slug === slug);
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <H1 className="mb-4">Post Not Found</H1>
          <Link href="/blog">
            <span className="text-primary hover:underline">
              {t.blog.backToBlog}
            </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 py-24">
        <Link href="/blog">
          <span className="text-primary hover:underline mb-6 inline-block">
            ← {t.blog.backToBlog}
          </span>
        </Link>
        <H1 className="mb-6">{post.title}</H1>
        <div className="flex gap-4 mb-6">
          <Small className="text-slate">
            {t.blog.publishedOn} {post.date}
          </Small>
          <Small className="text-slate">
            {post.readingTime} {t.blog.readingTime}
          </Small>
        </div>
        <Body className="text-slate text-lg">{post.excerpt}</Body>
      </header>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="space-y-12">
          {post.content.map((section, idx) => (
            <div key={idx}>
              <H2 className="mb-4">{section.heading}</H2>
              <Body className="text-slate leading-relaxed text-lg">
                {section.text}
              </Body>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 pb-24 pt-12 border-t border-smoke">
        <Link href="/blog">
          <span className="text-primary hover:underline">
            ← {t.blog.backToBlog}
          </span>
        </Link>
      </footer>
    </article>
  );
}
