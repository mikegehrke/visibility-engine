// Features Page Translations - English

export interface FeaturesTranslations {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    overline: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  cta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  sections: {
    [key: string]: {
      overline: string;
      title: string;
      description: string;
      features: Array<{ title: string; description: string }>;
    };
  };
}

export const features: FeaturesTranslations = {
  meta: {
    title: 'Features – Visibility Engine',
    description: 'Discover all features for professional content management, automation, analytics, and AI-powered optimization.',
  },
  hero: {
    overline: 'Platform Features',
    title: 'Everything You Need to',
    titleHighlight: 'Own Your Visibility',
    subtitle: 'A complete operating system for content, automation, and growth intelligence—built for professionals who refuse to settle for scattered tools.',
  },
  cta: {
    title: 'Ready to See It in Action?',
    subtitle: 'Start your free trial today and experience the complete visibility platform. No credit card required.',
    primary: 'Start Free Trial',
    secondary: 'View Pricing',
  },
  sections: {
    signals: {
      overline: 'Signals & Monitoring',
      title: 'Real-Time Visibility Into What Matters',
      description: 'Track performance across every channel with intelligent monitoring. Get instant notifications when metrics shift, trends emerge, or opportunities appear—so you can act before your competition even notices.',
      features: [
        { title: 'Cross-Platform Analytics', description: 'Unified metrics from all your channels' },
        { title: 'Trend Detection', description: 'AI-powered pattern recognition' },
        { title: 'Alert System', description: 'Custom triggers for any metric' },
      ],
    },
    automation: {
      overline: 'Smart Automation',
      title: 'Rules That Work While You Sleep',
      description: 'Set up intelligent workflows that execute automatically based on triggers, schedules, or performance thresholds. From content distribution to engagement responses—your visibility engine runs 24/7.',
      features: [
        { title: 'Scheduling Engine', description: 'AI-optimized publishing times' },
        { title: 'Trigger Actions', description: 'If-this-then-that automations' },
        { title: 'Workflow Builder', description: 'Visual automation designer' },
      ],
    },
    content: {
      overline: 'Content Management',
      title: 'Your Command Center for All Content',
      description: 'Organize, edit, and repurpose content from one central hub. Whether video, images, or text—manage your entire content library with powerful tools built for scale.',
      features: [
        { title: 'Media Library', description: 'Organized asset management' },
        { title: 'Format Conversion', description: 'Repurpose across platforms' },
        { title: 'Version Control', description: 'Track changes and history' },
      ],
    },
    intelligence: {
      overline: 'AI Intelligence',
      title: 'Data-Driven Decisions, Automated',
      description: 'Let artificial intelligence analyze your performance, predict outcomes, and recommend actions. From content scoring to optimal timing—make every decision backed by data.',
      features: [
        { title: 'Predictive Analytics', description: 'Forecast performance trends' },
        { title: 'Content Scoring', description: 'Quality and potential ratings' },
        { title: 'Smart Recommendations', description: 'AI-powered action suggestions' },
      ],
    },
    collaboration: {
      overline: 'Team Collaboration',
      title: 'Built for Teams at Scale',
      description: 'Whether you are a solo creator or a global agency, Visibility Engine scales with you. Manage permissions, collaborate in real-time, and keep everyone aligned on what matters.',
      features: [
        { title: 'Multi-Brand Workspaces', description: 'Separate environments per brand' },
        { title: 'Role-Based Access', description: 'Granular permission controls' },
        { title: 'Activity Audit', description: 'Complete action history' },
      ],
    },
    integrations: {
      overline: 'Developer Tools',
      title: 'Extend, Integrate, Automate',
      description: 'Connect Visibility Engine to your existing stack. Our robust API, webhooks, and native integrations ensure you can build exactly the workflow you need.',
      features: [
        { title: 'REST API', description: 'Full platform access via API' },
        { title: 'Webhooks', description: 'Real-time event notifications' },
        { title: 'Native Integrations', description: 'Connect to 50+ platforms' },
      ],
    },
  },
};
