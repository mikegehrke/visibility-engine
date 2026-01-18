// English About Translations
export const about = {
  meta: {
    title: 'About – Visibility Engine',
    description: 'Learn about our vision to empower creators and companies with professional visibility tools.',
  },
  hero: {
    overline: 'About Us',
    title: 'Building the Operating System',
    titleHighlight: 'for Digital Visibility',
    subtitle: "We're on a mission to give every creator and company the tools to turn content into measurable growth—without the chaos of scattered systems.",
  },
  stats: {
    users: { value: '10K+', label: 'Active Users' },
    posts: { value: '50M+', label: 'Posts Scheduled' },
    uptime: { value: '99.9%', label: 'Uptime SLA' },
    support: { value: '24/7', label: 'Support Coverage' },
  },
  vision: {
    overline: 'Our Vision',
    title: 'From Content Chaos to Visibility Control',
    paragraph1: "The creator economy and content-driven business landscape have exploded—but the tools haven't kept up. Most professionals are juggling five or more platforms, losing hours to manual tasks, and flying blind on what actually works.",
    paragraph2: 'We built Visibility Engine to be the command center that brings it all together: one platform where content, automation, and intelligence converge. Not another tool to manage—a system that manages itself.',
    quote: 'Every creator and company deserves the visibility infrastructure that was once only available to enterprises with dedicated teams and million-dollar budgets.',
    quoteAuthor: 'The Founding Principle',
    quoteTeam: 'Visibility Engine Team',
  },
  values: {
    overline: 'Our Values',
    title: 'What Guides Every Decision',
    clarity: {
      title: 'Clarity Over Complexity',
      description: 'We believe the best tools feel invisible. Every feature, every interface decision is made to reduce cognitive load—not add to it.',
    },
    dataInformed: {
      title: 'Data-Informed, Not Data-Overwhelmed',
      description: 'Raw data is noise. Insights are signal. We transform metrics into actionable intelligence that drives real decisions.',
    },
    automation: {
      title: 'Automation That Amplifies',
      description: "The goal isn't to replace human judgment—it's to free humans to focus on what matters. Automation handles the repetitive; you handle the creative.",
    },
    trust: {
      title: 'Trust Through Transparency',
      description: 'No black boxes. No hidden agendas. We show you exactly how things work, what we measure, and why. Your data stays yours.',
    },
  },
  approach: {
    overline: 'Our Approach',
    title: 'Built Different, On Purpose',
    privacy: {
      num: '01',
      title: 'Privacy-First Architecture',
      description: 'Your data never trains our models. Your content stays yours. We build trust through strict data isolation and transparent policies.',
    },
    performance: {
      num: '02',
      title: 'Performance Without Compromise',
      description: 'Sub-100ms response times. 99.9% uptime guarantee. We obsess over the milliseconds so you never have to wait.',
    },
    open: {
      num: '03',
      title: 'Open Where It Matters',
      description: 'Full API access. Extensive webhooks. Native integrations. Your visibility engine should fit your stack, not the other way around.',
    },
  },
  cta: {
    title: 'Ready to Join Us?',
    subtitle: 'Start building your visibility engine today. Free to start, powerful enough to scale with you.',
    primaryButton: 'Start Free Trial',
    secondaryButton: 'Explore Features',
  },
} as const;

export type AboutTranslations = typeof about;
