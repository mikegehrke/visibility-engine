// English Common/Shared Translations (Nav, Footer)
export const common = {
  nav: {
    features: 'Features',
    pricing: 'Pricing',
    about: 'About',
    blog: 'Blog',
    login: 'Login',
    getStarted: 'Get Started',
    product: 'Product',
    useCases: 'Use Cases',
    resources: 'Resources',
  },
  footer: {
    product: 'Product',
    company: 'Company',
    legal: 'Legal',
    features: 'Features',
    pricing: 'Pricing',
    about: 'About',
    blog: 'Blog',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    imprint: 'Imprint',
    copyright: '© 2026 Visibility Engine. All rights reserved.',
  },
  buttons: {
    startTrial: 'Start Free Trial',
    learnMore: 'Learn More',
    viewPricing: 'View Pricing',
    getStarted: 'Get Started',
  },
} as const;

export type CommonTranslations = typeof common;
