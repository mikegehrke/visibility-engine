import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://visibility-engine.com';
  const lastModified = new Date();

  // Public pages
  const publicPages = [
    // Main pages
    '',
    '/features',
    '/pricing',
    '/about',
    '/blog',
    '/contact',
    
    // Product pages
    '/product/visibility-engine',
    '/product/signals-insights',
    '/product/automation',
    '/product/distribution',
    '/product/reporting',
    '/product/explainability',
    '/product/api',
    
    // Use Cases
    '/use-cases/creators',
    '/use-cases/companies',
    '/use-cases/enterprise',
    '/use-cases/agencies',
    
    // Industries
    '/industries/ecommerce',
    '/industries/marketing',
    '/industries/finance',
    '/industries/saas',
    '/industries/media',
    
    // Trust Center
    '/trust/security',
    '/trust/privacy',
    '/trust/compliance',
    '/trust/transparency',
    
    // Resources
    '/resources/guides',
    '/resources/guides/getting-started',
    '/resources/guides/content-strategy',
    '/resources/guides/automation-basics',
    '/resources/guides/analytics-deep-dive',
    '/resources/guides/team-collaboration',
    '/resources/guides/api-integration',
    '/resources/automation-playbooks',
    '/resources/automation-playbooks/content-distribution',
    '/resources/automation-playbooks/engagement-automation',
    '/resources/automation-playbooks/analytics-reporting',
    '/resources/automation-playbooks/multi-platform-sync',
    '/resources/changelog',
    
    // Legal
    '/legal/privacy',
    '/legal/terms',
    '/legal/imprint',
    
    // Blog posts (add dynamically in production)
    '/blog/why-visibility-matters',
    '/blog/automation-best-practices',
    '/blog/content-strategy-2025',
    '/blog/ai-content-distribution',
    '/blog/measuring-content-roi',
    '/blog/enterprise-content-ops',
  ];

  return publicPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 
                     route.startsWith('/blog') ? 'weekly' :
                     route === '/resources/changelog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 :
              route === '/features' || route === '/pricing' ? 0.9 :
              route.startsWith('/product') ? 0.8 :
              route.startsWith('/use-cases') || route.startsWith('/industries') ? 0.7 :
              route.startsWith('/blog') ? 0.6 : 0.5,
  }));
}
